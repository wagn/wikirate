$(document).ready ->
  $loader_anime = $("#ajax_loader").html();
  $('body').on 'click','._new_value_next',->
    $parent_slot = $(this).slot()
    company = $(".RIGHT-company .input-group input").val()
    metric  = $(".RIGHT-metric select").val()
    company = Array.isArray(company) && company[0] || company
    company = company.replace('.','')
    metric  = Array.isArray(metric) && metric[0] || metric
    metric  = metric.replace('.','')
    if(company&&metric)
      load_path = wagn.prepUrl(wagn.rootPath + '/'+encodeURIComponent(metric)+'%2B'+encodeURIComponent(company)+'%2Bnew%20value')
      $parent_slot.append($loader_anime)
      $.get load_path, (data) ->
        $parent_slot.replaceWith(data)
        $parent_slot.trigger('slotReady')
        $('._add_new_value').trigger 'click'

  stickSourcePreview = () ->
    $previewContainer = $("#source-preview-main")
    if $(document).scrollTop() > 56
      $previewContainer.addClass 'stick-right'
    else
      $previewContainer.removeClass 'stick-right'

    if($(window).scrollTop() > ($("#main").height()-$(window).height()+300))
      $previewContainer.removeClass("stick-right");

  $(window).scroll ->
    if($("#source-preview-main").length>0)
      stickSourcePreview()

  appendSourceForm = (company)->
    $source_target = $("#source-form-container")
    load_path_source = wagn.prepUrl(wagn.rootPath + "/new/source?preview=true&slot[company]="+company)
    $source_target.append($loader_anime)
    $.get load_path_source, ((data) ->
      $sourceCntr     = $("#source-form-container")
      $sourceCntr.find('.source-details').addClass('hide')
      $source_target.prepend(data)
      wagn.initializeEditors($source_target);
      $source_target.find(".loader-anime").remove()
      $source_target.find('form').trigger('slotReady')
      return
    ), 'html'

  $('body').on 'ajax:success', '[data-form-for="new_metric_value"]',(event, data) ->
    $container      = $(".timeline-row .card-slot form .relevant-sources ")
    $container      = $container.empty() if $container.text().search("None") > 0
    sourceID        = $(data).data('source-for')
    sourceInList    = "[data-source-for='"+sourceID+"']"
    $sourceInForm   = $('.timeline-row form').find(sourceInList+'.source-details-toggle')

    if(!$sourceInForm.length > 0)
      $('.source-details-toggle').removeClass('active')
      $sourceDetailsToggle = $('<div>').attr('data-source-for',sourceID).addClass('source-details-toggle active')
      $sourceDetailsToggle.append($(data).find(".source-info-container").parent())
      $container.append($sourceDetailsToggle)
    else
      $citeButton = $sourceInForm.find('._cite_button')
      if(!$citeButton.length > 0)
        $citeButton = $(sourceInList+'.source-details').find('._cite_button')
        $citeButton.removeClass("_cite_button btn-highlight").addClass("_cited_button btn-default").text("Cited!")

  $("body").on 'click', '.source-details-toggle',->
    $this           = $(this)
    sourceID        = $this.data("source-for")
    sourcePreview   = "[data-source-for='"+sourceID+"']"
    $sourceCntr     = $("#source-form-container")
    $('.source-details-toggle').removeClass('active')
    $this.addClass("active")
    $sourceCntr.find('.source-details').addClass('hide')
    $sourceCntr.find(sourcePreview).removeClass('hide')
    $sourceCntr.find('form').addClass('hide')

  $('body').on 'click', '._cite_button', ->
    $timelineContainer  = $(".timeline-row .card-slot form")
    $relSource          = $timelineContainer.find(".relevant-sources")
    $citedSource        = $timelineContainer.find(".cited-sources")
    $this               = $(this)
    sourceName          = $this.closest(".TYPE-source").data("card-name")
    sourceID            = "#"+$this.closest(".TYPE-source").attr("id")+".TYPE-source:first"
    $sourceContainer    = $timelineContainer.find(sourceID).parent().detach()
    $sourceFormContr    = $('#source-form-container').find(sourceID)
    $hiddenInput        = $('<input>').attr('type','hidden').attr('name','card[subcards][+source][content]')

    $([$sourceFormContr.find("._cite_button"),$sourceContainer.find("._cite_button"), ]).each ->
      $(this).removeClass("_cite_button btn-highlight").addClass("_cited_button btn-default").text("Cited!")

    $citedSource.empty() if $citedSource.text().search("None") > 0

    $hiddenInput.attr('value','[['+sourceName+']]')
    $sourceContainer.append($hiddenInput)
    $citedSource.append($sourceContainer)

    $relSource.text("None") if $relSource.is(':empty')

  $('body').on 'click', '._add_new_source', ->
    $this           = $(this)
    company         = $this.closest('form').find('#card_subcards__company_content').attr('value')
    $sourceCntr     = $("#source-form-container")
    if(!$sourceCntr.find('form').length > 0)
      appendSourceForm(company)
    else
      $sourceCntr.find('form').removeClass('hide')
      $sourceCntr.find('.source-details').addClass('hide')


  $('body').on 'click', '._add_new_value', ->
    $this     = $(this)
    company   = $this.data("company")
    metric    = $this.data("metric")
    $target   = $this.closest('.timeline-data')
    if(company && metric)
            $target.append($loader_anime)
            load_path = wagn.prepUrl(wagn.rootPath + "/new/metric_value?noframe=true&slot[company]="+company+"&slot[metric]="+encodeURIComponent(metric))
            $.get load_path, ((data) ->
              $template = $('<div class="timeline-row"><div class="card-slot"></div></div>')
              $template.find('.card-slot').append(data)
              $target.find(".timeline-header").after($template)
              $this.hide()
              wagn.initializeEditors($target);
              $target.find(".loader-anime").remove()
              return
            ), 'html'
            appendSourceForm(company)
  $('._add_new_value').trigger 'click'

wagn.slotReady (slot) ->
  resizeIframe()
  if(!$(".timeline-row form").is(":visible"))
    $("._add_new_value").show()
  else
    $("._add_new_value").hide()
