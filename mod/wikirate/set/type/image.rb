view :missing do |args|
  core = subformat(Card["missing image"])._render_core args
  if @denied_view == :core
    core
  else
    wrap(false) { core }
  end
end
