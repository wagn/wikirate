# FIXME: This should be much easier and cleaner
#
# All we want to do is set the default type to be metric answer. This could be
# done in cards with `Record+Year+*ltype rtype+*default`, but there's no
# easy way to do it in code.
#
# The reason this is done in the vega mod is that this mod alters Type::Metric answer.
# If you call `include_set Type::MetricAnswer` in a mod that is loaded earlier, you
# will not get the vega alterations.  sigh.
#

def default_type_id
  MetricAnswerID
end

include_set Type::MetricAnswer

def type_id
  MetricAnswerID
end
