class SharedData
  module Metrics
    def add_metrics
      Card::Env[:protocol] = "http://"
      Card::Env[:host] = "wikirate.org"
      create_or_update "1977", type_id: Card::YearID
      metric =
        Card::Metric.create name: "Jedi+disturbances in the Force",
                            value_type: "Category",
                            value_options: %w(yes no),
                            topic: "Force",
                            research_policy: "Community Assessed",
                            random_source: true do
          Death_Star "1977" => "yes", "2000" => "yes", "2001" => "yes"
          Monster_Inc "1977" => "no", "2000" => "yes"
          Slate_Rock_and_Gravel_Company "1977" => "no", "2005" => "no"
          SPECTRE "2000" => "no"
        end

      Card::Metric.create name: "Fred+dinosaurlabor",
                          value_type: "Category",
                          value_options: %w(yes no),
                          research_policy: "Designer Assessed",
                          random_source: true do
        Slate_Rock_and_Gravel_Company "1977" => "yes", "2000" => "yes"
        Monster_Inc "1977" => "no", "2000" => "no"
        Death_Star "1977" => "no", "2000" => "yes"
      end

      Timecop.freeze(HAPPY_BIRTHDAY) do
        metric.create_values true do
          Death_Star "1990" => "yes"
        end
      end
      Timecop.freeze(HAPPY_BIRTHDAY - 1.day) do
        metric.create_values true do
          Death_Star "1991" => "yes"
        end
      end
      Timecop.freeze(HAPPY_BIRTHDAY - 2.weeks) do
        metric.create_values true do
          Death_Star "1992" => "yes"
        end
        Card["Fred+dinosaurlabor"].create_values true do
          Death_Star "2010" => "yes"
        end
      end

      Card::Metric.create name: "Jedi+deadliness",
                          random_source: true,
                          value_type: "Number" do
        Death_Star "1977" => 100
        SPECTRE "1977" => 50
        Los_Pollos_Hermanos "1977" => 40
        Slate_Rock_and_Gravel_Company "1977" => 20
        Samsung "1977" => "Unknown"
      end

      Card::Metric.create name: "Jedi+Victims by Employees",
                          random_source: true,
                          value_type: "Number" do
        SPECTRE "1977" => 5.30
        Death_Star "1977" => 0.31
        Los_Pollos_Hermanos "1977" => 0.002
        Monster_Inc "1977" => 0.001
        Slate_Rock_and_Gravel_Company "1977" => -0.01
        Samsung "1977" => "Unknown"
      end

      Card::Metric.create name: "Jedi+cost of planets destroyed",
                          random_source: true,
                          value_type: "Money" do
        Death_Star "1977" => 200
      end
      Card::Metric.create name: "Jedi+Sith Lord in Charge",
                          value_type: "Free Text"
      Card::Metric.create name: "Jedi+friendliness",
                          type: :formula,
                          formula: "1/{{Jedi+deadliness}}"
      Card::Metric.create name: "Jedi+deadliness+Joe User",
                          type: :score,
                          formula: "{{Jedi+deadliness}}/10"
      Card::Metric.create name: "Jedi+deadliness+Joe Camel",
                          type: :score,
                          formula: "{{Jedi+deadliness}}/20"

      as_joe_user do
        Card::Metric.create name: "Jedi+disturbances in the Force+Joe User",
                            type: :score,
                            formula: { yes: 10, no: 0 }
      end

      Card::Metric.create(
        name: "Jedi+darkness rating",
        type: :wiki_rating,
        formula: { "Jedi+deadliness+Joe User" => 60,
                   "Jedi+disturbances in the Force+Joe User" => 40 }
      )

      Card::Metric.create name: "Joe User+researched number 1",
                          type: :researched,
                          random_source: true do
        Samsung "2014" => 10, "2015" => 5
        Sony_Corporation "2014" => 1
        Death_Star "1977" => 5
        Apple_Inc "2015" => 100
      end
      Card::Metric.create name: "Joe User+researched number 2",
                          type: :researched,
                          random_source: true do
        Samsung "2014" => 5, "2015" => 2
        Sony_Corporation "2014" => 2
      end
      Card::Metric.create name: "Joe User+researched number 3",
                          type: :researched,
                          random_source: true do
        Samsung "2014" => 1, "2015" => 1
      end

      Card::Metric.create name: "Joe User+researched",
                          type: :researched,
                          random_source: true do
        Apple_Inc "2010" => 10, "2011" => 11, "2012" => 12,
                  "2013" => 13, "2014" => 14, "2015" => 15
        Death_Star "1977" => 77
      end

      Card::Metric.create name: "Joe User+small multi",
                          type: :researched,
                          value_type: "Multi-Category",
                          value_options: %w(1 2 3),
                          random_source: true do
        Sony_Corporation "2010" => [1, 2].to_pointer_content
      end

      Card::Metric.create name: "Joe User+big multi",
                          type: :researched,
                          value_type: "Multi-Category",
                          value_options: %w(1 2 3 4 5 6 7 8 9 10 11),
                          random_source: true do
        Sony_Corporation "2010" => [1, 2].to_pointer_content
      end

      Card::Metric.create name: "Joe User+small single",
                          type: :researched,
                          value_type: "Category",
                          value_options: %w(1 2 3),
                          random_source: true do
        Sony_Corporation "2010" => 1
      end

      as_joe_user do
        Card::Metric.create name: "Joe User+big single",
                            type: :researched,
                            value_type: "Category",
                            value_options: %w(1 2 3 4 5 6 7 8 9 10 11),
                            random_source: true do
          Sony_Corporation "2010" => 1,
                           "2009" => 9,
                           "2008" => 8,
                           "2007" => 7,
                           "2006" => 6,
                           "2005" => 5,
                           "2004" => 4,
                           "2003" => 3
        end
      end
    end

    def vote_on_metrics
      as_user "Joe Admin" do
        vote "Jedi+disturbances in the Force", :up
        vote "Jedi+Victims by Employees", :up
      end
      as_user "Joe User" do
        vote "Jedi+disturbances in the Force", :up
        vote "Jedi+deadliness", :down
      end
    end
  end
end
