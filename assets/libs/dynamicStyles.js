const DYNAMIC_GRID_STYLES = [
  {
    pattern: ["1:1", "16:9", "3:4"],
    parent_style: "66.66666666666667:47.333333333333336",
    one: {
      ratio: "1:1",
      height: "60.56338028169014%",
      width: "43%",
      left: "2%",
      right: "auto",
      top: "1.998239436619718%",
      bottom: "auto"
    },
    two: {
      ratio: "16:9",
      height: "34.154929577464785%",
      width: "43%",
      left: "2%",
      right: "auto",
      top: "auto",
      bottom: "1.998239436619718%"
    },
    three: {
      ratio: "3:4",
      height: "97.53521126760563%",
      width: "52%",
      left: "auto",
      right: "2%",
      top: "0.999119718309859%",
      bottom: "auto"
    },
    four: {}
  },

  {
    pattern: ["16:9", "3:4", "3:4", "1:1"],
    parent_style: "66.66666666666667:71.66666666666667",
    one: {
      ratio: "16:9",
      height: "28.837209302325583%",
      width: "55.00000000000001%",
      left: "1%",
      right: "auto",
      top: "1%",
      bottom: "auto"
    },
    two: {
      ratio: "3:4",
      height: "52.093023255813954%",
      width: "42%",
      left: "auto",
      right: "1%",
      top: "4%",
      bottom: "auto"
    },
    three: {
      ratio: "3:4",
      height: "68.13953488372093%",
      width: "55.00000000000001%",
      left: "1%",
      right: "auto",
      top: "auto",
      bottom: "1%"
    },
    four: {
      ratio: "1:1",
      height: "39.06976744186046%",
      width: "42%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "4%"
    }
  },
  {
    pattern: ["1:1", "16:9", "16:9"],
    parent_style: "66.66666666666667:35.5",
    one: {
      ratio: "1:1",
      height: "97.65258215962442%",
      width: "52%",
      left: "1%",
      right: "auto",
      top: "0.9976525821596244%",
      bottom: "auto"
    },
    two: {
      ratio: "16:9",
      height: "47.417840375586856%",
      width: "45%",
      left: "auto",
      right: "1%",
      top: "1.9953051643192488%",
      bottom: "auto"
    },
    three: {
      ratio: "16:9",
      height: "47.417840375586856%",
      width: "45%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "1.9953051643192488%"
    },
    four: {}
  },
  {
    pattern: ["3:4", "3:4"],
    parent_style: "66.66666666666667:44",
    one: {
      ratio: "3:4",
      height: "98.10606060606061%",
      width: "48.5%",
      left: "1%",
      right: "auto",
      top: "auto",
      bottom: "0.8948863636363635%"
    },
    two: {
      ratio: "3:4",
      height: "98.10606060606061%",
      width: "48.5%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "0.8948863636363635%"
    },
    three: {},
    four: {}
  },
  {
    pattern: ["1:1", "3:4", "16:9"],
    parent_style: "66.66666666666667:40.833333333333336",
    one: {
      ratio: "1:1",
      height: "97.95918367346938%",
      width: "60%",
      left: "3.6000000000000005%",
      right: "auto",
      top: "1%",
      bottom: "auto"
    },
    two: {
      ratio: "3:4",
      height: "67.3469387755102%",
      width: "31%",
      left: "auto",
      right: "4%",
      top: "1%",
      bottom: "auto"
    },
    three: {
      ratio: "16:9",
      height: "28.57142857142857%",
      width: "31%",
      left: "auto",
      right: "4%",
      top: "auto",
      bottom: "1%"
    },
    four: {}
  },
  {
    pattern: ["16:9", "3:4", "1:1", "1:1"],
    parent_style: "66.66666666666667:59.5",
    one: {
      ratio: "16:9",
      height: "43.13725490196079%",
      width: "68.5%",
      left: "1%",
      right: "auto",
      top: "0.9978991596638654%",
      bottom: "auto"
    },
    two: {
      ratio: "3:4",
      height: "43.13725490196079%",
      width: "28.800000000000004%",
      left: "auto",
      right: "1%",
      top: "0.9978991596638654%",
      bottom: "auto"
    },
    three: {
      ratio: "1:1",
      height: "54.34173669467787%",
      width: "48.6%",
      left: "1%",
      right: "auto",
      top: "auto",
      bottom: "0.9978991596638654%"
    },
    four: {
      ratio: "1:1",
      height: "54.34173669467787%",
      width: "48.6%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "0.9978991596638654%"
    }
  },
  {
    pattern: ["3:4", "1:1"],
    parent_style: "66.66666666666667:36.833333333333336",
    one: {
      ratio: "3:4",
      height: "97.73755656108597%",
      width: "40.5%",
      left: "2.5%",
      right: "auto",
      top: "0.9954751131221721%",
      bottom: "auto"
    },
    two: {
      ratio: "1:1",
      height: "97.73755656108597%",
      width: "54%",
      left: "auto",
      right: "2.5%",
      top: "0.9954751131221721%",
      bottom: "auto"
    },
    three: {},
    four: {}
  },
  {
    pattern: ["16:9"],
    parent_style: "66.66666666666667:37.666666666666664",
    one: {
      ratio: "16:9",
      height: "97.78761061946902%",
      width: "98%",
      left: "1%",
      right: "1%",
      top: "0.995575221238938%",
      bottom: "auto"
    },
    two: {},
    three: {},
    four: {}
  },
  {
    pattern: ["16:9", "3:4", "1:1"],
    parent_style: "66.66666666666667:48.333333333333336",
    one: {
      ratio: "16:9",
      height: "34.82758620689655%",
      width: "45%",
      left: "2%",
      right: "auto",
      top: "1%",
      bottom: "auto"
    },
    two: {
      ratio: "3:4",
      height: "92.06896551724138%",
      width: "50%",
      left: "auto",
      right: "2%",
      top: "auto",
      bottom: "3.9310344827586206%"
    },
    three: {
      ratio: "1:1",
      height: "62.06896551724138%",
      width: "45%",
      left: "2%",
      right: "auto",
      top: "auto",
      bottom: "1%"
    },
    four: {}
  },
  {
    pattern: ["1:1", "16:9"],
    parent_style: "66.66666666666667:30.666666666666668",
    one: {
      ratio: "1:1",
      height: "97.82608695652173%",
      width: "45%",
      left: "1%",
      right: "auto",
      top: "auto",
      bottom: "0.998641304347826%"
    },
    two: {
      ratio: "16:9",
      height: "64.13043478260869%",
      width: "52.5%",
      left: "auto",
      right: "1%",
      top: "15%",
      bottom: "auto"
    },
    three: {},
    four: {}
  },
  {
    pattern: ["16:9", "3:4"],
    parent_style: "66.66666666666667:31.833333333333332",
    one: {
      ratio: "16:9",
      height: "73.29842931937172%",
      width: "62%",
      left: "1%",
      right: "auto",
      top: "12.997382198952877%",
      bottom: "auto"
    },
    two: {
      ratio: "3:4",
      height: "97.90575916230367%",
      width: "35%",
      left: "auto",
      right: "1%",
      top: "0.9947643979057591%",
      bottom: "auto"
    },
    three: {},
    four: {}
  },
  {
    pattern: ["1:1", "1:1", "16:9", "1:1"],
    parent_style: "66.66666666666667:57.5",
    one: {
      ratio: "1:1",
      height: "56.231884057971016%",
      width: "48.5%",
      left: "1%",
      right: "auto",
      top: "1%",
      bottom: "auto"
    },
    two: {
      ratio: "1:1",
      height: "56.231884057971016%",
      width: "48.5%",
      left: "auto",
      right: "1%",
      top: "1%",
      bottom: "auto"
    },
    three: {
      ratio: "16:9",
      height: "40.57971014492754%",
      width: "62%",
      left: "1%",
      right: "auto",
      top: "auto",
      bottom: "1%"
    },
    four: {
      ratio: "1:1",
      height: "40.57971014492754%",
      width: "35%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "1%"
    }
  },
  {
    pattern: ["16:9", "16:9", "3:4", "1:1"],
    parent_style: "66.66666666666667:56.666666666666664",
    one: {
      ratio: "16:9",
      height: "31.76470588235294%",
      width: "48%",
      left: "1%",
      right: "auto",
      top: "1%",
      bottom: "auto"
    },
    two: {
      ratio: "16:9",
      height: "31.76470588235294%",
      width: "48%",
      left: "auto",
      right: "1%",
      top: "1%",
      bottom: "auto"
    },
    three: {
      ratio: "3:4",
      height: "64.41176470588236%",
      width: "41%",
      left: "1%",
      right: "auto",
      top: "auto",
      bottom: "1%"
    },
    four: {
      ratio: "1:1",
      height: "64.70588235294117%",
      width: "55.00000000000001%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "1%"
    }
  },
  {
    pattern: ["1:1", "1:1", "1:1", "3:4"],
    parent_style: "66.66666666666667:60.833333333333336",
    one: {
      ratio: "1:1",
      height: "31.780821917808222%",
      width: "28.999999999999996%",
      left: "1.5%",
      right: "auto",
      top: "1%",
      bottom: "auto"
    },
    two: {
      ratio: "1:1",
      height: "31.780821917808222%",
      width: "28.999999999999996%",
      left: "1.5%",
      right: "auto",
      top: "34%",
      bottom: "auto"
    },
    three: {
      ratio: "1:1",
      height: "31.780821917808222%",
      width: "28.999999999999996%",
      left: "1.5%",
      right: "auto",
      top: "auto",
      bottom: "1%"
    },
    four: {
      ratio: "3:4",
      height: "97.80821917808218%",
      width: "67%",
      left: "auto",
      right: "1.5%",
      top: "1%",
      bottom: "auto"
    }
  },
  {
    pattern: ["1:1"],
    parent_style: "66.66666666666667:66.66666666666667",
    one: {
      ratio: "1:1",
      height: "100%",
      width: "100%",
      left: "auto",
      right: "auto",
      top: "auto",
      bottom: "auto"
    },
    two: {},
    three: {},
    four: {}
  },
  {
    pattern: ["3:4", "16:9", "1:1", "1:1"],
    parent_style: "66.66666666666667:65.33333333333333",
    one: {
      ratio: "3:4",
      height: "68.11224489795919%",
      width: "50%",
      left: "1%",
      right: "auto",
      top: "auto",
      bottom: "0.9980867346938775%"
    },
    two: {
      ratio: "16:9",
      height: "28.8265306122449%",
      width: "50%",
      left: "1%",
      right: "auto",
      top: "0.9980867346938775%",
      bottom: "auto"
    },
    three: {
      ratio: "1:1",
      height: "47.95918367346938%",
      width: "47%",
      left: "auto",
      right: "1%",
      top: "1.4987244897959182%",
      bottom: "auto"
    },
    four: {
      ratio: "1:1",
      height: "47.95918367346938%",
      width: "47%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "1.4987244897959182%"
    }
  },
  {
    pattern: ["3:4", "16:9", "16:9"],
    parent_style: "66.66666666666667:40.833333333333336",
    one: {
      ratio: "3:4",
      height: "97.95918367346938%",
      width: "45%",
      left: "1%",
      right: "auto",
      top: "auto",
      bottom: "1%"
    },
    two: {
      ratio: "16:9",
      height: "47.755102040816325%",
      width: "52%",
      left: "auto",
      right: "1%",
      top: "1.5%",
      bottom: "auto"
    },
    three: {
      ratio: "16:9",
      height: "47.755102040816325%",
      width: "52%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "1.5%"
    },
    four: {}
  },
  {
    pattern: ["1:1", "16:9", "3:4", "16:9"],
    parent_style: "66.66666666666667:50.5",
    one: {
      ratio: "1:1",
      height: "46.2046204620462%",
      width: "35%",
      left: "1%",
      right: "auto",
      top: "0.9983498349834983%",
      bottom: "auto"
    },
    two: {
      ratio: "16:9",
      height: "46.2046204620462%",
      width: "62%",
      left: "auto",
      right: "1%",
      top: "0.9983498349834983%",
      bottom: "auto"
    },
    three: {
      ratio: "3:4",
      height: "50.495049504950494%",
      width: "28.7%",
      left: "1%",
      right: "auto",
      top: "auto",
      bottom: "0.9983498349834983%"
    },
    four: {
      ratio: "16:9",
      height: "50.495049504950494%",
      width: "68.2%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "0.9983498349834983%"
    }
  },
  {
    pattern: ["1:1", "1:1", "1:1"],
    parent_style: "66.66666666666667:44.166666666666664",
    one: {
      ratio: "1:1",
      height: "98.11320754716981%",
      width: "65%",
      left: "1%",
      right: "auto",
      top: "auto",
      bottom: "0.8867924528301887%"
    },
    two: {
      ratio: "1:1",
      height: "48.301886792452834%",
      width: "32%",
      left: "auto",
      right: "1%",
      top: "1%",
      bottom: "auto"
    },
    three: {
      ratio: "1:1",
      height: "48.301886792452834%",
      width: "32%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "1%"
    },
    four: {}
  },
  {
    pattern: ["1:1", "3:4", "3:4"],
    parent_style: "66.66666666666667:48",
    one: {
      ratio: "1:1",
      height: "97.91666666666666%",
      width: "70.5%",
      left: "1%",
      right: "auto",
      top: "0.9982638888888888%",
      bottom: "auto"
    },
    two: {
      ratio: "3:4",
      height: "48.26388888888889%",
      width: "26%",
      left: "auto",
      right: "1%",
      top: "0.9982638888888888%",
      bottom: "auto"
    },
    three: {
      ratio: "3:4",
      height: "48.26388888888889%",
      width: "26%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "0.9982638888888888%"
    },
    four: {}
  },
  {
    pattern: ["1:1", "1:1", "3:4", "1:1"],
    parent_style: "66.66666666666667:71.16666666666667",
    one: {
      ratio: "1:1",
      height: "45.433255269320846%",
      width: "48.5%",
      left: "1%",
      right: "auto",
      top: "0.9982435597189696%",
      bottom: "auto"
    },
    two: {
      ratio: "1:1",
      height: "45.433255269320846%",
      width: "48.5%",
      left: "auto",
      right: "1%",
      top: "0.9982435597189696%",
      bottom: "auto"
    },
    three: {
      ratio: "3:4",
      height: "51.75644028103045%",
      width: "41.5%",
      left: "1%",
      right: "auto",
      top: "auto",
      bottom: "0.9982435597189696%"
    },
    four: {
      ratio: "1:1",
      height: "51.75644028103045%",
      width: "55.3%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "0.9982435597189696%"
    }
  },
  {
    pattern: ["1:1", "1:1", "3:4"],
    parent_style: "66.66666666666667:24",
    one: {
      ratio: "1:1",
      height: "97.22222222222221%",
      width: "35%",
      left: "1%",
      right: "auto",
      top: "0.9982638888888888%",
      bottom: "auto"
    },
    two: {
      ratio: "1:1",
      height: "97.22222222222221%",
      width: "35%",
      left: "auto",
      right: "28.000000000000004%",
      top: "0.9982638888888888%",
      bottom: "auto"
    },
    three: {
      ratio: "3:4",
      height: "96.52777777777779%",
      width: "26.1%",
      left: "auto",
      right: "1%",
      top: "0.9982638888888888%",
      bottom: "auto"
    },
    four: {}
  },
  {
    pattern: ["3:4", "1:1", "16:9", "3:4"],
    parent_style: "66.66666666666667:64.33333333333333",
    one: {
      ratio: "3:4",
      height: "57.2538860103627%",
      width: "41.5%",
      left: "1%",
      right: "auto",
      top: "0.9974093264248705%",
      bottom: "auto"
    },
    two: {
      ratio: "1:1",
      height: "57.2538860103627%",
      width: "55.3%",
      left: "auto",
      right: "1%",
      top: "0.9974093264248705%",
      bottom: "auto"
    },
    three: {
      ratio: "16:9",
      height: "39.637305699481864%",
      width: "68%",
      left: "1%",
      right: "auto",
      top: "auto",
      bottom: "0.9974093264248705%"
    },
    four: {
      ratio: "3:4",
      height: "39.637305699481864%",
      width: "28.7%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "0.9974093264248705%"
    }
  },
  {
    pattern: ["16:9", "3:4", "3:4"],
    parent_style: "66.66666666666667:82.33333333333333",
    one: {
      ratio: "16:9",
      height: "44.73684210526316%",
      width: "98%",
      left: "1%",
      right: "1%",
      top: "0.9994939271255061%",
      bottom: "auto"
    },
    two: {
      ratio: "3:4",
      height: "52.42914979757085%",
      width: "48.5%",
      left: "1%",
      right: "auto",
      top: "auto",
      bottom: "0.9994939271255061%"
    },
    three: {
      ratio: "3:4",
      height: "52.42914979757085%",
      width: "48.5%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "0.9994939271255061%"
    },
    four: {}
  },
  {
    pattern: ["16:9", "16:9"],
    parent_style: "66.66666666666667:75.83333333333333",
    one: {
      ratio: "16:9",
      height: "48.57142857142857%",
      width: "98%",
      left: "1%",
      right: "1%",
      top: "1%",
      bottom: "auto"
    },
    two: {
      ratio: "16:9",
      height: "48.57142857142857%",
      width: "98%",
      left: "1%",
      right: "1%",
      top: "auto",
      bottom: "1%"
    },
    three: {},
    four: {}
  },
  {
    pattern: ["3:4", "16:9", "16:9", "16:9"],
    parent_style: "66.66666666666667:50",
    one: {
      ratio: "3:4",
      height: "97.66666666666667%",
      width: "55.00000000000001%",
      left: "1%",
      right: "auto",
      top: "1%",
      bottom: "auto"
    },
    two: {
      ratio: "16:9",
      height: "31.666666666666664%",
      width: "42%",
      left: "auto",
      right: "1%",
      top: "1%",
      bottom: "auto"
    },
    three: {
      ratio: "16:9",
      height: "31.666666666666664%",
      width: "42%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "34%"
    },
    four: {
      ratio: "16:9",
      height: "31.666666666666664%",
      width: "42%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "1%"
    }
  },
  {
    pattern: ["1:1", "1:1"],
    parent_style: "66.66666666666667:33.333333333333336",
    one: {
      ratio: "1:1",
      height: "97%",
      width: "48.5%",
      left: "1%",
      right: "auto",
      top: "1%",
      bottom: "auto"
    },
    two: {
      ratio: "1:1",
      height: "97%",
      width: "48.5%",
      left: "auto",
      right: "1%",
      top: "1%",
      bottom: "auto"
    },
    three: {},
    four: {}
  },
  {
    pattern: ["3:4", "1:1", "3:4"],
    parent_style: "66.66666666666667:56.333333333333336",
    one: {
      ratio: "3:4",
      height: "97.92899408284023%",
      width: "62%",
      left: "1%",
      right: "auto",
      top: "0.9985207100591716%",
      bottom: "auto"
    },
    two: {
      ratio: "1:1",
      height: "41.42011834319527%",
      width: "35%",
      left: "auto",
      right: "1%",
      top: "0.9985207100591716%",
      bottom: "auto"
    },
    three: {
      ratio: "3:4",
      height: "55.325443786982255%",
      width: "35%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "0.9985207100591716%"
    },
    four: {}
  },
  {
    pattern: ["16:9", "1:1", "1:1", "16:9"],
    parent_style: "66.66666666666667:48.166666666666664",
    one: {
      ratio: "16:9",
      height: "48.44290657439446%",
      width: "62%",
      left: "1%",
      right: "auto",
      top: "0.9991349480968859%",
      bottom: "auto"
    },
    two: {
      ratio: "1:1",
      height: "48.44290657439446%",
      width: "35%",
      left: "auto",
      right: "1%",
      top: "0.9991349480968859%",
      bottom: "auto"
    },
    three: {
      ratio: "1:1",
      height: "48.44290657439446%",
      width: "35%",
      left: "1%",
      right: "auto",
      top: "auto",
      bottom: "0.9991349480968859%"
    },
    four: {
      ratio: "16:9",
      height: "48.44290657439446%",
      width: "62%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "0.9991349480968859%"
    }
  },
  {
    pattern: ["16:9", "1:1"],
    parent_style: "66.66666666666667:23.916666666666668",
    one: {
      ratio: "16:9",
      height: "97.5609756097561%",
      width: "62%",
      left: "1%",
      right: "auto",
      top: "0.9930313588850175%",
      bottom: "auto"
    },
    two: {
      ratio: "1:1",
      height: "97.5609756097561%",
      width: "35%",
      left: "auto",
      right: "1%",
      top: "0.9930313588850175%",
      bottom: "auto"
    },
    three: {},
    four: {}
  },
  {
    pattern: ["3:4"],
    parent_style: "66.66666666666667:88.83333333333333",
    one: {
      ratio: "3:4",
      height: "100%",
      width: "100%",
      left: "auto",
      right: "auto",
      top: "auto",
      bottom: "auto"
    },
    two: {},
    three: {},
    four: {}
  },
  {
    pattern: ["16:9", "1:1", "1:1", "3:4"],
    parent_style: "66.66666666666667:62",
    one: {
      ratio: "16:9",
      height: "37.634408602150536%",
      width: "62%",
      left: "1%",
      right: "auto",
      top: "0.9979838709677419%",
      bottom: "auto"
    },
    two: {
      ratio: "1:1",
      height: "37.634408602150536%",
      width: "35%",
      left: "auto",
      right: "1%",
      top: "0.9979838709677419%",
      bottom: "auto"
    },
    three: {
      ratio: "1:1",
      height: "59.40860215053764%",
      width: "55.297%",
      left: "1%",
      right: "auto",
      top: "auto",
      bottom: "0.9979838709677419%"
    },
    four: {
      ratio: "3:4",
      height: "59.40860215053764%",
      width: "41.5%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "0.9979838709677419%"
    }
  },
  {
    pattern: ["16:9", "16:9", "1:1", "1:1"],
    parent_style: "66.66666666666667:52",
    one: {
      ratio: "16:9",
      height: "34.93589743589743%",
      width: "48.5%",
      left: "1%",
      right: "auto",
      top: "0.9975961538461537%",
      bottom: "auto"
    },
    two: {
      ratio: "16:9",
      height: "34.93589743589743%",
      width: "48.5%",
      left: "auto",
      right: "1%",
      top: "0.9975961538461537%",
      bottom: "auto"
    },
    three: {
      ratio: "1:1",
      height: "62.17948717948718%",
      width: "48.5%",
      left: "1%",
      right: "auto",
      top: "auto",
      bottom: "0.9975961538461537%"
    },
    four: {
      ratio: "1:1",
      height: "62.17948717948718%",
      width: "48.5%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "0.9975961538461537%"
    }
  },
  {
    pattern: ["3:4", "16:9", "16:9", "3:4"],
    parent_style: "66.66666666666667:52.5",
    one: {
      ratio: "3:4",
      height: "48.57142857142857%",
      width: "28.6%",
      left: "1%",
      right: "auto",
      top: "1%",
      bottom: "auto"
    },
    two: {
      ratio: "16:9",
      height: "48.57142857142857%",
      width: "68%",
      left: "auto",
      right: "1%",
      top: "1%",
      bottom: "auto"
    },
    three: {
      ratio: "16:9",
      height: "48.57142857142857%",
      width: "68%",
      left: "1%",
      right: "auto",
      top: "auto",
      bottom: "1%"
    },
    four: {
      ratio: "3:4",
      height: "48.57142857142857%",
      width: "28.6%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "1%"
    }
  },
  {
    pattern: ["3:4", "16:9"],
    parent_style: "66.66666666666667:26",
    one: {
      ratio: "3:4",
      height: "98.07692307692307%",
      width: "28.6%",
      left: "1%",
      right: "auto",
      top: "auto",
      bottom: "0.9294871794871795%"
    },
    two: {
      ratio: "16:9",
      height: "98.07692307692307%",
      width: "68%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "0.9294871794871795%"
    },
    three: {},
    four: {}
  },
  {
    pattern: ["16:9", "1:1", "16:9", "1:1"],
    parent_style: "66.66666666666667:48.166666666666664",
    one: {
      ratio: "16:9",
      height: "48.44290657439446%",
      width: "62%",
      left: "1%",
      right: "auto",
      top: "0.9991349480968859%",
      bottom: "auto"
    },
    two: {
      ratio: "1:1",
      height: "48.44290657439446%",
      width: "35%",
      left: "auto",
      right: "1%",
      top: "0.9991349480968859%",
      bottom: "auto"
    },
    three: {
      ratio: "16:9",
      height: "48.44290657439446%",
      width: "62%",
      left: "1%",
      right: "auto",
      top: "auto",
      bottom: "0.9991349480968859%"
    },
    four: {
      ratio: "1:1",
      height: "48.44290657439446%",
      width: "35%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "0.9991349480968859%"
    }
  },
  {
    pattern: ["3:4", "3:4", "16:9"],
    parent_style: "66.66666666666667:82.33333333333333",
    one: {
      ratio: "3:4",
      height: "52.42914979757085%",
      width: "48.5%",
      left: "1%",
      right: "auto",
      top: "0.9994939271255061%",
      bottom: "auto"
    },
    two: {
      ratio: "3:4",
      height: "52.42914979757085%",
      width: "48.5%",
      left: "auto",
      right: "1%",
      top: "0.9994939271255061%",
      bottom: "auto"
    },
    three: {
      ratio: "16:9",
      height: "44.73684210526316%",
      width: "98%",
      left: "1%",
      right: "1%",
      top: "auto",
      bottom: "0.9994939271255061%"
    },
    four: {}
  },
  {
    pattern: ["16:9", "16:9", "1:1", "3:4"],
    parent_style: "66.66666666666667:56.833333333333336",
    one: {
      ratio: "16:9",
      height: "31.964809384164223%",
      width: "48.5%",
      left: "1%",
      right: "auto",
      top: "0.9970674486803518%",
      bottom: "auto"
    },
    two: {
      ratio: "16:9",
      height: "31.964809384164223%",
      width: "48.5%",
      left: "auto",
      right: "1%",
      top: "0.9970674486803518%",
      bottom: "auto"
    },
    three: {
      ratio: "1:1",
      height: "65.10263929618768%",
      width: "55.50000000000001%",
      left: "1%",
      right: "auto",
      top: "auto",
      bottom: "0.9970674486803518%"
    },
    four: {
      ratio: "3:4",
      height: "65.10263929618768%",
      width: "41.6%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "0.9970674486803518%"
    }
  },
  {
    pattern: ["16:9", "1:1", "16:9", "3:4"],
    parent_style: "66.66666666666667:50.5",
    one: {
      ratio: "16:9",
      height: "46.2046204620462%",
      width: "62.3%",
      left: "1%",
      right: "auto",
      top: "0.9983498349834983%",
      bottom: "auto"
    },
    two: {
      ratio: "1:1",
      height: "46.2046204620462%",
      width: "35%",
      left: "auto",
      right: "1%",
      top: "0.9983498349834983%",
      bottom: "auto"
    },
    three: {
      ratio: "16:9",
      height: "50.82508250825083%",
      width: "68.5%",
      left: "1%",
      right: "auto",
      top: "auto",
      bottom: "0.9983498349834983%"
    },
    four: {
      ratio: "3:4",
      height: "50.82508250825083%",
      width: "28.800000000000004%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "0.9983498349834983%"
    }
  },
  {
    pattern: ["16:9", "1:1", "3:4", "1:1"],
    parent_style: "66.66666666666667:62",
    one: {
      ratio: "16:9",
      height: "37.634408602150536%",
      width: "62%",
      left: "1%",
      right: "auto",
      top: "0.9979838709677419%",
      bottom: "auto"
    },
    two: {
      ratio: "1:1",
      height: "37.634408602150536%",
      width: "35%",
      left: "auto",
      right: "1%",
      top: "0.9979838709677419%",
      bottom: "auto"
    },
    three: {
      ratio: "3:4",
      height: "59.40860215053764%",
      width: "41.5%",
      left: "1%",
      right: "auto",
      top: "auto",
      bottom: "0.9979838709677419%"
    },
    four: {
      ratio: "1:1",
      height: "59.40860215053764%",
      width: "55.2%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "0.9979838709677419%"
    }
  },
  {
    pattern: ["16:9", "3:4", "16:9"],
    parent_style: "66.66666666666667:64.16666666666667",
    one: {
      ratio: "16:9",
      height: "57.4025974025974%",
      width: "98%",
      left: "1%",
      right: "1%",
      top: "1%",
      bottom: "auto"
    },
    two: {
      ratio: "3:4",
      height: "39.740259740259745%",
      width: "28.7%",
      left: "1%",
      right: "auto",
      top: "auto",
      bottom: "1%"
    },
    three: {
      ratio: "16:9",
      height: "40%",
      width: "68.5%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "1%"
    },
    four: {}
  },
  {
    pattern: ["16:9", "1:1", "3:4"],
    parent_style: "66.66666666666667:75.83333333333333",
    one: {
      ratio: "16:9",
      height: "48.57142857142857%",
      width: "98%",
      left: "1%",
      right: "1%",
      top: "1%",
      bottom: "auto"
    },
    two: {
      ratio: "1:1",
      height: "48.79120879120879%",
      width: "55.45%",
      left: "1%",
      right: "auto",
      top: "auto",
      bottom: "1%"
    },
    three: {
      ratio: "3:4",
      height: "48.79120879120879%",
      width: "41.6%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "1%"
    },
    four: {}
  },
  {
    pattern: ["16:9", "16:9", "3:4"],
    parent_style: "66.66666666666667:64.16666666666667",
    one: {
      ratio: "16:9",
      height: "57.4025974025974%",
      width: "98%",
      left: "1%",
      right: "1%",
      top: "1%",
      bottom: "auto"
    },
    two: {
      ratio: "16:9",
      height: "39.740259740259745%",
      width: "68%",
      left: "1%",
      right: "auto",
      top: "auto",
      bottom: "1%"
    },
    three: {
      ratio: "3:4",
      height: "39.740259740259745%",
      width: "28.6%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "1%"
    },
    four: {}
  },
  {
    pattern: ["16:9", "16:9", "16:9"],
    parent_style: "66.66666666666667:56.666666666666664",
    one: {
      ratio: "16:9",
      height: "65%",
      width: "98%",
      left: "1%",
      right: "1%",
      top: "1%",
      bottom: "auto"
    },
    two: {
      ratio: "16:9",
      height: "32.05882352941177%",
      width: "48.5%",
      left: "1%",
      right: "auto",
      top: "auto",
      bottom: "1%"
    },
    three: {
      ratio: "16:9",
      height: "32.05882352941177%",
      width: "48.5%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "1%"
    },
    four: {}
  },
  {
    pattern: ["1:1", "16:9", "16:9", "1:1"],
    parent_style: "66.66666666666667:48.333333333333336",
    one: {
      ratio: "1:1",
      height: "48.275862068965516%",
      width: "35%",
      left: "1%",
      right: "auto",
      top: "1%",
      bottom: "auto"
    },
    two: {
      ratio: "16:9",
      height: "48.275862068965516%",
      width: "62%",
      left: "auto",
      right: "1%",
      top: "1%",
      bottom: "auto"
    },
    three: {
      ratio: "16:9",
      height: "48.275862068965516%",
      width: "62%",
      left: "1%",
      right: "auto",
      top: "auto",
      bottom: "1%"
    },
    four: {
      ratio: "1:1",
      height: "48.275862068965516%",
      width: "35%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "1%"
    }
  },
  {
    pattern: ["3:4", "16:9", "3:4"],
    parent_style: "66.66666666666667:52",
    one: {
      ratio: "3:4",
      height: "97.75641025641025%",
      width: "57.10000000000001%",
      left: "1%",
      right: "auto",
      top: "0.9975961538461537%",
      bottom: "auto"
    },
    two: {
      ratio: "16:9",
      height: "28.846153846153843%",
      width: "40%",
      left: "auto",
      right: "1%",
      top: "0.9975961538461537%",
      bottom: "auto"
    },
    three: {
      ratio: "3:4",
      height: "68.26923076923077%",
      width: "40%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "0.9975961538461537%"
    },
    four: {}
  },
  {
    pattern: ["16:9", "3:4", "3:4", "3:4"],
    parent_style: "66.66666666666667:67.5",
    one: {
      ratio: "16:9",
      height: "54.567901234567906%",
      width: "98%",
      left: "1%",
      right: "1%",
      top: "1%",
      bottom: "auto"
    },
    two: {
      ratio: "3:4",
      height: "42.22222222222222%",
      width: "32%",
      left: "1%",
      right: "auto",
      top: "auto",
      bottom: "1%"
    },
    three: {
      ratio: "3:4",
      height: "42.22222222222222%",
      width: "32%",
      left: "34%",
      right: "34%",
      top: "auto",
      bottom: "1%"
    },
    four: {
      ratio: "3:4",
      height: "42.22222222222222%",
      width: "32%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "1%"
    }
  },
  {
    pattern: ["16:9", "1:1", "1:1"],
    parent_style: "66.66666666666667:71.16666666666667",
    one: {
      ratio: "16:9",
      height: "51.75644028103045%",
      width: "98%",
      left: "1%",
      right: "1%",
      top: "0.9982435597189696%",
      bottom: "auto"
    },
    two: {
      ratio: "1:1",
      height: "45.433255269320846%",
      width: "48.5%",
      left: "1%",
      right: "auto",
      top: "auto",
      bottom: "0.9982435597189696%"
    },
    three: {
      ratio: "1:1",
      height: "45.433255269320846%",
      width: "48.5%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "0.9982435597189696%"
    },
    four: {}
  },
  {
    pattern: ["1:1", "3:4"],
    parent_style: "66.66666666666667:37.833333333333336",
    one: {
      ratio: "1:1",
      height: "97.79735682819384%",
      width: "55.50000000000001%",
      left: "1%",
      right: "auto",
      top: "0.9966960352422909%",
      bottom: "auto"
    },
    two: {
      ratio: "3:4",
      height: "97.3568281938326%",
      width: "41.4%",
      left: "auto",
      right: "1%",
      top: "0.9966960352422909%",
      bottom: "auto"
    },
    three: {},
    four: {}
  },
  {
    pattern: ["16:9", "1:1", "16:9", "16:9"],
    parent_style: "66.66666666666667:42.833333333333336",
    one: {
      ratio: "16:9",
      height: "54.474708171206224%",
      width: "62%",
      left: "1%",
      right: "auto",
      top: "0.9970817120622567%",
      bottom: "auto"
    },
    two: {
      ratio: "1:1",
      height: "54.474708171206224%",
      width: "35%",
      left: "auto",
      right: "1%",
      top: "0.9970817120622567%",
      bottom: "auto"
    },
    three: {
      ratio: "16:9",
      height: "42.4124513618677%",
      width: "48.5%",
      left: "1%",
      right: "auto",
      top: "auto",
      bottom: "0.9970817120622567%"
    },
    four: {
      ratio: "16:9",
      height: "42.4124513618677%",
      width: "48.5%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "0.9970817120622567%"
    }
  },
  {
    pattern: ["16:9", "3:4", "1:1", "3:4"],
    parent_style: "66.66666666666667:64.16666666666667",
    one: {
      ratio: "16:9",
      height: "39.740259740259745%",
      width: "68%",
      left: "1%",
      right: "auto",
      top: "1%",
      bottom: "auto"
    },
    two: {
      ratio: "3:4",
      height: "39.740259740259745%",
      width: "28.7%",
      left: "auto",
      right: "1%",
      top: "1%",
      bottom: "auto"
    },
    three: {
      ratio: "1:1",
      height: "57.14285714285714%",
      width: "55.1%",
      left: "1%",
      right: "auto",
      top: "auto",
      bottom: "1%"
    },
    four: {
      ratio: "3:4",
      height: "56.88311688311688%",
      width: "41%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "1%"
    }
  },
  {
    pattern: ["3:4", "3:4", "3:4"],
    parent_style: "66.66666666666667:29.083333333333332",
    one: {
      ratio: "3:4",
      height: "97.99426934097421%",
      width: "32%",
      left: "1%",
      right: "auto",
      top: "0.995702005730659%",
      bottom: "auto"
    },
    two: {
      ratio: "3:4",
      height: "97.99426934097421%",
      width: "32%",
      left: "34%",
      right: "34%",
      top: "0.995702005730659%",
      bottom: "auto"
    },
    three: {
      ratio: "3:4",
      height: "97.99426934097421%",
      width: "32%",
      left: "auto",
      right: "1%",
      top: "0.995702005730659%",
      bottom: "auto"
    },
    four: {}
  },
  {
    pattern: ["3:4", "1:1", "1:1"],
    parent_style: "66.66666666666667:53.09166666666667",
    one: {
      ratio: "3:4",
      height: "98.25773034060586%",
      width: "58.70000000000001%",
      left: "1%",
      right: "auto",
      top: "auto",
      bottom: "0.7455658452362266%"
    },
    two: {
      ratio: "1:1",
      height: "48.344059017422694%",
      width: "38.5%",
      left: "auto",
      right: "1%",
      top: "0.9967038141579029%",
      bottom: "auto"
    },
    three: {
      ratio: "1:1",
      height: "48.344059017422694%",
      width: "38.5%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "0.9967038141579029%"
    },
    four: {}
  },
  {
    pattern: ["3:4", "3:4", "3:4", "1:1"],
    parent_style: "66.66666666666667:82.5",
    one: {
      ratio: "3:4",
      height: "52.323232323232325%",
      width: "48.5%",
      left: "1%",
      right: "auto",
      top: "1%",
      bottom: "auto"
    },
    two: {
      ratio: "3:4",
      height: "52.323232323232325%",
      width: "48.5%",
      left: "auto",
      right: "1%",
      top: "1%",
      bottom: "auto"
    },
    three: {
      ratio: "3:4",
      height: "44.84848484848485%",
      width: "41.7%",
      left: "1%",
      right: "auto",
      top: "auto",
      bottom: "1%"
    },
    four: {
      ratio: "1:1",
      height: "44.84848484848485%",
      width: "55.50000000000001%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "1%"
    }
  },
  {
    pattern: ["3:4", "3:4", "1:1", "1:1"],
    parent_style: "66.66666666666667:77.83333333333333",
    one: {
      ratio: "3:4",
      height: "55.46038543897216%",
      width: "48.5%",
      left: "1%",
      right: "auto",
      top: "0.9983940042826551%",
      bottom: "auto"
    },
    two: {
      ratio: "3:4",
      height: "55.46038543897216%",
      width: "48.5%",
      left: "auto",
      right: "1%",
      top: "0.9983940042826551%",
      bottom: "auto"
    },
    three: {
      ratio: "1:1",
      height: "41.54175588865097%",
      width: "48.5%",
      left: "1%",
      right: "auto",
      top: "auto",
      bottom: "0.9983940042826551%"
    },
    four: {
      ratio: "1:1",
      height: "41.54175588865097%",
      width: "48.5%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "0.9983940042826551%"
    }
  },
  {
    pattern: ["1:1", "3:4", "16:9", "3:4"],
    parent_style: "66.66666666666667:64.33333333333333",
    one: {
      ratio: "1:1",
      height: "57.2538860103627%",
      width: "55.3%",
      left: "1%",
      right: "auto",
      top: "0.9974093264248705%",
      bottom: "auto"
    },
    two: {
      ratio: "3:4",
      height: "57.2538860103627%",
      width: "41.5%",
      left: "auto",
      right: "1%",
      top: "0.9974093264248705%",
      bottom: "auto"
    },
    three: {
      ratio: "16:9",
      height: "39.637305699481864%",
      width: "68%",
      left: "1%",
      right: "auto",
      top: "auto",
      bottom: "0.9974093264248705%"
    },
    four: {
      ratio: "3:4",
      height: "39.89637305699482%",
      width: "28.9%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "0.9974093264248705%"
    }
  },
  {
    pattern: ["1:1", "3:4", "1:1"],
    parent_style: "66.66666666666667:46.25",
    one: {
      ratio: "1:1",
      height: "98.01801801801801%",
      width: "68%",
      left: "1%",
      right: "auto",
      top: "auto",
      bottom: "0.981981981981982%"
    },
    two: {
      ratio: "3:4",
      height: "55.13513513513514%",
      width: "28.7%",
      left: "auto",
      right: "1%",
      top: "1%",
      bottom: "auto"
    },
    three: {
      ratio: "1:1",
      height: "41.44144144144144%",
      width: "28.7%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "1%"
    },
    four: {}
  },
  {
    pattern: ["16:9", "16:9", "1:1", "16:9"],
    parent_style: "66.66666666666667:42.833333333333336",
    one: {
      ratio: "16:9",
      height: "42.4124513618677%",
      width: "48.5%",
      left: "1%",
      right: "auto",
      top: "0.9970817120622567%",
      bottom: "auto"
    },
    two: {
      ratio: "16:9",
      height: "42.4124513618677%",
      width: "48.5%",
      left: "auto",
      right: "1%",
      top: "0.9970817120622567%",
      bottom: "auto"
    },
    three: {
      ratio: "1:1",
      height: "54.474708171206224%",
      width: "35%",
      left: "1%",
      right: "auto",
      top: "auto",
      bottom: "0.9970817120622567%"
    },
    four: {
      ratio: "16:9",
      height: "54.474708171206224%",
      width: "62%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "0.9970817120622567%"
    }
  },
  {
    pattern: ["3:4", "16:9", "1:1"],
    parent_style: "66.66666666666667:48",
    one: {
      ratio: "3:4",
      height: "97.91666666666666%",
      width: "52.900000000000006%",
      left: "1%",
      right: "auto",
      top: "0.9982638888888888%",
      bottom: "auto"
    },
    two: {
      ratio: "16:9",
      height: "34.72222222222222%",
      width: "44.3%",
      left: "auto",
      right: "1%",
      top: "0.9982638888888888%",
      bottom: "auto"
    },
    three: {
      ratio: "1:1",
      height: "61.458333333333336%",
      width: "44.3%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "0.9982638888888888%"
    },
    four: {}
  },
  {
    pattern: ["1:1", "3:4", "1:1", "3:4"],
    parent_style: "66.66666666666667:75.83333333333333",
    one: {
      ratio: "1:1",
      height: "48.57142857142857%",
      width: "55.2%",
      left: "1%",
      right: "auto",
      top: "1%",
      bottom: "auto"
    },
    two: {
      ratio: "3:4",
      height: "48.57142857142857%",
      width: "41.5%",
      left: "auto",
      right: "1%",
      top: "1%",
      bottom: "auto"
    },
    three: {
      ratio: "1:1",
      height: "48.57142857142857%",
      width: "55.2%",
      left: "1%",
      right: "auto",
      top: "auto",
      bottom: "1%"
    },
    four: {
      ratio: "3:4",
      height: "48.57142857142857%",
      width: "41.5%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "1%"
    }
  },
  {
    pattern: ["1:1", "3:4", "16:9", "16:9"],
    parent_style: "66.66666666666667:56.916666666666664",
    one: {
      ratio: "1:1",
      height: "64.71449487554905%",
      width: "55.3%",
      left: "1%",
      right: "auto",
      top: "0.9992679355783309%",
      bottom: "auto"
    },
    two: {
      ratio: "3:4",
      height: "64.71449487554905%",
      width: "41.5%",
      left: "auto",
      right: "1%",
      top: "0.9992679355783309%",
      bottom: "auto"
    },
    three: {
      ratio: "16:9",
      height: "31.91800878477306%",
      width: "48.4%",
      left: "1%",
      right: "auto",
      top: "auto",
      bottom: "0.9992679355783309%"
    },
    four: {
      ratio: "16:9",
      height: "31.91800878477306%",
      width: "48.4%",
      left: "auto",
      right: "1%",
      top: "auto",
      bottom: "0.9992679355783309%"
    }
  },
  {
    pattern: ["1:1", "16:9", "1:1"],
    parent_style: "66.66666666666667:91.33333333333333",
    one: {
      ratio: "1:1",
      height: "72.99270072992701%",
      width: "100%",
      left: "auto",
      right: "auto",
      top: "auto",
      bottom: "27.00729927007299%"
    },
    two: {
      ratio: "16:9",
      height: "25.91240875912409%",
      width: "63%",
      left: "auto",
      right: "37%",
      top: "74.08759124087592%",
      bottom: "auto"
    },
    three: {
      ratio: "1:1",
      height: "25.91240875912409%",
      width: "35.5%",
      left: "64.5%",
      right: "auto",
      top: "74.08759124087592%",
      bottom: "auto"
    },
    four: {}
  },
  {
    pattern: ["3:4", "1:1", "1:1", "3:4"],
    parent_style: "66.66666666666667:76.16666666666667",
    one: {
      ratio: "3:4",
      height: "49.45295404814004%",
      width: "42.45325%",
      left: "auto",
      right: "57.54699999999999%",
      top: "auto",
      bottom: "50.54704595185996%"
    },
    two: {
      ratio: "1:1",
      height: "49.45295404814004%",
      width: "56.39999999999999%",
      left: "43.6%",
      right: "auto",
      top: "auto",
      bottom: "50.54704595185996%"
    },
    three: {
      ratio: "1:1",
      height: "49.45295404814004%",
      width: "56.39999999999999%",
      left: "auto",
      right: "43.6%",
      top: "50.54704595185996%",
      bottom: "auto"
    },
    four: {
      ratio: "3:4",
      height: "49.45295404814004%",
      width: "42.45325%",
      left: "57.54699999999999%",
      right: "auto",
      top: "50.54704595185996%",
      bottom: "auto"
    }
  },
  {
    pattern: ["16:9", "16:9", "1:1"],
    parent_style: "66.66666666666667:61.949999999999996",
    one: {
      ratio: "16:9",
      height: "60.53268765133172%",
      width: "100%",
      left: "auto",
      right: "auto",
      top: "auto",
      bottom: "39.46731234866828%"
    },
    two: {
      ratio: "16:9",
      height: "38.20285176217379%",
      width: "63.2%",
      left: "auto",
      right: "36.8%",
      top: "61.79714823782621%",
      bottom: "auto"
    },
    three: {
      ratio: "1:1",
      height: "38.20285176217379%",
      width: "35.4%",
      left: "64.6%",
      right: "auto",
      top: "61.79714823782621%",
      bottom: "auto"
    },
    four: {}
  },
  {
    pattern: ["3:4", "1:1", "3:4", "1:1"],
    parent_style: "66.66666666666667:76",
    one: {
      ratio: "3:4",
      height: "49.56140350877193%",
      width: "42.45325%",
      left: "auto",
      right: "57.54699999999999%",
      top: "auto",
      bottom: "50.43859649122807%"
    },
    two: {
      ratio: "1:1",
      height: "49.56140350877193%",
      width: "56.39999999999999%",
      left: "43.6%",
      right: "auto",
      top: "auto",
      bottom: "50.43859649122807%"
    },
    three: {
      ratio: "3:4",
      height: "49.56140350877193%",
      width: "42.45325%",
      left: "auto",
      right: "57.54699999999999%",
      top: "50.43859649122807%",
      bottom: "auto"
    },
    four: {
      ratio: "1:1",
      height: "49.56140350877193%",
      width: "56.39999999999999%",
      left: "43.6%",
      right: "auto",
      top: "50.43859649122807%",
      bottom: "auto"
    }
  },
  {
    pattern: ["3:4", "1:1", "1:1", "1:1"],
    parent_style: "66.66666666666667:71.33333333333333",
    one: {
      ratio: "3:4",
      height: "52.80373831775701%",
      width: "42.45325%",
      left: "auto",
      right: "57.54699999999999%",
      top: "auto",
      bottom: "47.19626168224299%"
    },
    two: {
      ratio: "1:1",
      height: "52.80373831775701%",
      width: "56.39999999999999%",
      left: "43.6%",
      right: "auto",
      top: "auto",
      bottom: "47.19626168224299%"
    },
    three: {
      ratio: "1:1",
      height: "46.26168224299065%",
      width: "49.4%",
      left: "auto",
      right: "50.6%",
      top: "53.73831775700935%",
      bottom: "auto"
    },
    four: {
      ratio: "1:1",
      height: "46.26168224299065%",
      width: "49.4%",
      left: "50.6%",
      right: "auto",
      top: "53.73831775700935%",
      bottom: "auto"
    }
  },
  {
    pattern: ["1:1", "3:4", "1:1", "1:1"],
    parent_style: "66.66666666666667:71.5",
    one: {
      ratio: "1:1",
      height: "52.680652680652685%",
      width: "56.39999999999999%",
      left: "auto",
      right: "43.6%",
      top: "auto",
      bottom: "47.31934731934732%"
    },
    two: {
      ratio: "3:4",
      height: "52.680652680652685%",
      width: "42.45325%",
      left: "57.54699999999999%",
      right: "auto",
      top: "auto",
      bottom: "47.31934731934732%"
    },
    three: {
      ratio: "1:1",
      height: "46.15384615384615%",
      width: "49.4%",
      left: "auto",
      right: "50.6%",
      top: "53.84615384615385%",
      bottom: "auto"
    },
    four: {
      ratio: "1:1",
      height: "46.15384615384615%",
      width: "49.4%",
      left: "50.6%",
      right: "auto",
      top: "53.84615384615385%",
      bottom: "auto"
    }
  },
  {
    pattern: ["3:4", "3:4", "1:1", "16:9"],
    parent_style: "66.66666666666667:68.16666666666667",
    one: {
      ratio: "3:4",
      height: "64.30317848410758%",
      width: "49.4%",
      left: "auto",
      right: "50.6%",
      top: "auto",
      bottom: "35.69682151589242%"
    },
    two: {
      ratio: "3:4",
      height: "64.30317848410758%",
      width: "49.4%",
      left: "50.6%",
      right: "auto",
      top: "auto",
      bottom: "35.69682151589242%"
    },
    three: {
      ratio: "1:1",
      height: "34.71882640586797%",
      width: "35.6%",
      left: "auto",
      right: "64.4%",
      top: "65.28117359413203%",
      bottom: "auto"
    },
    four: {
      ratio: "16:9",
      height: "34.71882640586797%",
      width: "63.2%",
      left: "36.8%",
      right: "auto",
      top: "65.28117359413203%",
      bottom: "auto"
    }
  },
  {
    pattern: ["1:1", "1:1", "16:9"],
    parent_style: "66.66666666666667:71.16666666666667",
    one: {
      ratio: "1:1",
      height: "46.37002341920375%",
      width: "49.5%",
      left: "auto",
      right: "50.5%",
      top: "auto",
      bottom: "53.62997658079626%"
    },
    two: {
      ratio: "1:1",
      height: "46.37002341920375%",
      width: "49.5%",
      left: "50.5%",
      right: "auto",
      top: "auto",
      bottom: "53.62997658079626%"
    },
    three: {
      ratio: "16:9",
      height: "52.69320843091335%",
      width: "100%",
      left: "auto",
      right: "auto",
      top: "47.306791569086656%",
      bottom: "auto"
    },
    four: {}
  },
  {
    pattern: ["3:4", "3:4", "16:9", "16:9"],
    parent_style: "66.66666666666667:63.333333333333336",
    one: {
      ratio: "3:4",
      height: "69.47368421052632%",
      width: "49.5%",
      left: "auto",
      right: "50.5%",
      top: "auto",
      bottom: "30.526315789473685%"
    },
    two: {
      ratio: "3:4",
      height: "69.47368421052632%",
      width: "49.5%",
      left: "50.5%",
      right: "auto",
      top: "auto",
      bottom: "30.526315789473685%"
    },
    three: {
      ratio: "16:9",
      height: "29.210526315789476%",
      width: "49.5%",
      left: "auto",
      right: "50.5%",
      top: "70.78947368421052%",
      bottom: "auto"
    },
    four: {
      ratio: "16:9",
      height: "29.210526315789476%",
      width: "49.5%",
      left: "50.5%",
      right: "auto",
      top: "70.78947368421052%",
      bottom: "auto"
    }
  },
  {
    pattern: ["1:1", "16:9", "3:4", "3:4"],
    parent_style: "66.66666666666667:68.5",
    one: {
      ratio: "1:1",
      height: "34.54987834549878%",
      width: "35.5%",
      left: "auto",
      right: "64.5%",
      top: "auto",
      bottom: "65.45012165450122%"
    },
    two: {
      ratio: "16:9",
      height: "34.54987834549878%",
      width: "63%",
      left: "37%",
      right: "auto",
      top: "auto",
      bottom: "65.45012165450122%"
    },
    three: {
      ratio: "3:4",
      height: "63.990267639902676%",
      width: "49.3%",
      left: "auto",
      right: "50.7%",
      top: "36.009732360097324%",
      bottom: "auto"
    },
    four: {
      ratio: "3:4",
      height: "63.990267639902676%",
      width: "49.3%",
      left: "50.7%",
      right: "auto",
      top: "36.009732360097324%",
      bottom: "auto"
    }
  },
  {
    pattern: ["3:4", "3:4", "16:9", "1:1"],
    parent_style: "66.66666666666667:68.33333333333333",
    one: {
      ratio: "3:4",
      height: "64.14634146341463%",
      width: "49.3%",
      left: "auto",
      right: "50.7%",
      top: "auto",
      bottom: "35.853658536585364%"
    },
    two: {
      ratio: "3:4",
      height: "64.14634146341463%",
      width: "49.3%",
      left: "50.7%",
      right: "auto",
      top: "auto",
      bottom: "35.853658536585364%"
    },
    three: {
      ratio: "16:9",
      height: "34.63414634146341%",
      width: "63%",
      left: "auto",
      right: "37%",
      top: "65.3658536585366%",
      bottom: "auto"
    },
    four: {
      ratio: "1:1",
      height: "34.63414634146341%",
      width: "35.5%",
      left: "64.5%",
      right: "auto",
      top: "65.3658536585366%",
      bottom: "auto"
    }
  },
  {
    pattern: ["1:1", "1:1", "16:9", "16:9"],
    parent_style: "66.66666666666667:52.166666666666664",
    one: {
      ratio: "1:1",
      height: "63.25878594249201%",
      width: "49.5%",
      left: "auto",
      right: "50.5%",
      top: "auto",
      bottom: "36.74121405750799%"
    },
    two: {
      ratio: "1:1",
      height: "63.25878594249201%",
      width: "49.5%",
      left: "50.5%",
      right: "auto",
      top: "auto",
      bottom: "36.74121405750799%"
    },
    three: {
      ratio: "16:9",
      height: "35.46325878594249%",
      width: "49.5%",
      left: "auto",
      right: "50.5%",
      top: "64.5367412140575%",
      bottom: "auto"
    },
    four: {
      ratio: "16:9",
      height: "35.46325878594249%",
      width: "49.5%",
      left: "50.5%",
      right: "auto",
      top: "64.5367412140575%",
      bottom: "auto"
    }
  },
  {
    pattern: ["1:1", "16:9", "16:9", "3:4"],
    parent_style: "66.66666666666667:50.666666666666664",
    one: {
      ratio: "1:1",
      height: "46.71052631578947%",
      width: "35.5%",
      left: "auto",
      right: "64.5%",
      top: "auto",
      bottom: "53.289473684210535%"
    },
    two: {
      ratio: "16:9",
      height: "46.71052631578947%",
      width: "63%",
      left: "37%",
      right: "auto",
      top: "auto",
      bottom: "53.289473684210535%"
    },
    three: {
      ratio: "16:9",
      height: "51.31578947368421%",
      width: "69.2%",
      left: "auto",
      right: "30.8%",
      top: "48.68421052631579%",
      bottom: "auto"
    },
    four: {
      ratio: "3:4",
      height: "51.64473684210527%",
      width: "29.5%",
      left: "70.5%",
      right: "auto",
      top: "48.35526315789473%",
      bottom: "auto"
    }
  },
  {
    pattern: ["16:9", "3:4", "16:9", "3:4"],
    parent_style: "66.66666666666667:53",
    one: {
      ratio: "16:9",
      height: "49.056603773584904%",
      width: "69.2%",
      left: "auto",
      right: "30.8%",
      top: "auto",
      bottom: "50.943396226415096%"
    },
    two: {
      ratio: "3:4",
      height: "49.37106918238994%",
      width: "29.5%",
      left: "70.5%",
      right: "auto",
      top: "auto",
      bottom: "50.62893081761006%"
    },
    three: {
      ratio: "16:9",
      height: "49.056603773584904%",
      width: "69.2%",
      left: "auto",
      right: "30.8%",
      top: "50.943396226415096%",
      bottom: "auto"
    },
    four: {
      ratio: "3:4",
      height: "49.37106918238994%",
      width: "29.5%",
      left: "70.5%",
      right: "auto",
      top: "50.62893081761006%",
      bottom: "auto"
    }
  },
  {
    pattern: ["3:4", "16:9", "3:4", "3:4"],
    parent_style: "66.66666666666667:70.83333333333333",
    one: {
      ratio: "3:4",
      height: "36.705882352941174%",
      width: "29.299999999999997%",
      left: "auto",
      right: "70.7%",
      top: "auto",
      bottom: "63.294117647058826%"
    },
    two: {
      ratio: "16:9",
      height: "36.705882352941174%",
      width: "69.3%",
      left: "30.7%",
      right: "auto",
      top: "auto",
      bottom: "63.294117647058826%"
    },
    three: {
      ratio: "3:4",
      height: "61.882352941176464%",
      width: "49.3%",
      left: "auto",
      right: "50.7%",
      top: "38.11764705882353%",
      bottom: "auto"
    },
    four: {
      ratio: "3:4",
      height: "61.882352941176464%",
      width: "49.3%",
      left: "50.7%",
      right: "auto",
      top: "38.11764705882353%",
      bottom: "auto"
    }
  },
  {
    pattern: ["16:9", "16:9", "3:4", "3:4"],
    parent_style: "66.66666666666667:63.25",
    one: {
      ratio: "16:9",
      height: "29.249011857707508%",
      width: "49.3%",
      left: "auto",
      right: "50.7%",
      top: "auto",
      bottom: "70.7509881422925%"
    },
    two: {
      ratio: "16:9",
      height: "29.249011857707508%",
      width: "49.3%",
      left: "50.7%",
      right: "auto",
      top: "auto",
      bottom: "70.7509881422925%"
    },
    three: {
      ratio: "3:4",
      height: "69.30171277997364%",
      width: "49.3%",
      left: "auto",
      right: "50.7%",
      top: "30.698287220026348%",
      bottom: "auto"
    },
    four: {
      ratio: "3:4",
      height: "69.30171277997364%",
      width: "49.3%",
      left: "50.7%",
      right: "auto",
      top: "30.698287220026348%",
      bottom: "auto"
    }
  },
  {
    pattern: ["3:4", "1:1", "16:9"],
    parent_style: "66.66666666666667:47.833333333333336",
    one: {
      ratio: "3:4",
      height: "100%",
      width: "53.79999999999999%",
      left: "auto",
      right: "46.2%",
      top: "auto",
      bottom: "auto"
    },
    two: {
      ratio: "1:1",
      height: "62.36933797909408%",
      width: "44.7%",
      left: "55.3%",
      right: "auto",
      top: "auto",
      bottom: "37.63066202090592%"
    },
    three: {
      ratio: "16:9",
      height: "35.19163763066202%",
      width: "44.7%",
      left: "55.3%",
      right: "auto",
      top: "64.80836236933798%",
      bottom: "auto"
    },
    four: {}
  },
  {
    pattern: ["16:9", "1:1", "3:4", "3:4"],
    parent_style: "66.66666666666667:68.5",
    one: {
      ratio: "16:9",
      height: "34.54987834549878%",
      width: "63.2%",
      left: "auto",
      right: "36.8%",
      top: "auto",
      bottom: "65.45012165450122%"
    },
    two: {
      ratio: "1:1",
      height: "34.54987834549878%",
      width: "35.5%",
      left: "64.5%",
      right: "auto",
      top: "auto",
      bottom: "65.45012165450122%"
    },
    three: {
      ratio: "3:4",
      height: "63.990267639902676%",
      width: "49.3%",
      left: "auto",
      right: "50.7%",
      top: "36.009732360097324%",
      bottom: "auto"
    },
    four: {
      ratio: "3:4",
      height: "63.990267639902676%",
      width: "49.3%",
      left: "50.7%",
      right: "auto",
      top: "36.009732360097324%",
      bottom: "auto"
    }
  },
  {
    pattern: ["3:4", "3:4", "1:1"],
    parent_style: "66.66666666666667:56.166666666666664",
    one: {
      ratio: "3:4",
      height: "100%",
      width: "63.2%",
      left: "auto",
      right: "36.8%",
      top: "auto",
      bottom: "auto"
    },
    two: {
      ratio: "3:4",
      height: "56.083086053412465%",
      width: "35.5%",
      left: "64.5%",
      right: "auto",
      top: "auto",
      bottom: "43.916913946587535%"
    },
    three: {
      ratio: "1:1",
      height: "42.13649851632047%",
      width: "35.5%",
      left: "64.5%",
      right: "auto",
      top: "57.86350148367953%",
      bottom: "auto"
    },
    four: {}
  },
  {
    pattern: ["16:9", "1:1", "16:9"],
    parent_style: "66.66666666666667:62.166666666666664",
    one: {
      ratio: "16:9",
      height: "38.069705093833775%",
      width: "63%",
      left: "auto",
      right: "37%",
      top: "auto",
      bottom: "61.93029490616622%"
    },
    two: {
      ratio: "1:1",
      height: "38.069705093833775%",
      width: "35.5%",
      left: "64.5%",
      right: "auto",
      top: "auto",
      bottom: "61.93029490616622%"
    },
    three: {
      ratio: "16:9",
      height: "60.32171581769437%",
      width: "100%",
      left: "auto",
      right: "auto",
      top: "39.67828418230563%",
      bottom: "auto"
    },
    four: {}
  },
  {
    pattern: ["1:1", "1:1", "3:4", "3:4"],
    parent_style: "66.66666666666667:77.5",
    one: {
      ratio: "1:1",
      height: "42.365591397849464%",
      width: "49.3%",
      left: "auto",
      right: "50.7%",
      top: "auto",
      bottom: "57.634408602150536%"
    },
    two: {
      ratio: "1:1",
      height: "42.365591397849464%",
      width: "49.3%",
      left: "50.7%",
      right: "auto",
      top: "auto",
      bottom: "57.634408602150536%"
    },
    three: {
      ratio: "3:4",
      height: "56.55913978494623%",
      width: "49.3%",
      left: "auto",
      right: "50.7%",
      top: "43.44086021505376%",
      bottom: "auto"
    },
    four: {
      ratio: "3:4",
      height: "56.55913978494623%",
      width: "49.3%",
      left: "50.7%",
      right: "auto",
      top: "43.44086021505376%",
      bottom: "auto"
    }
  },
  {
    pattern: ["3:4", "1:1", "1:1", "16:9"],
    parent_style: "66.66666666666667:62.166666666666664",
    one: {
      ratio: "3:4",
      height: "60.58981233243968%",
      width: "42.3%",
      left: "auto",
      right: "57.70000000000001%",
      top: "auto",
      bottom: "39.41018766756032%"
    },
    two: {
      ratio: "1:1",
      height: "60.32171581769437%",
      width: "56.2%",
      left: "43.8%",
      right: "auto",
      top: "auto",
      bottom: "39.67828418230563%"
    },
    three: {
      ratio: "1:1",
      height: "38.069705093833775%",
      width: "35.5%",
      left: "auto",
      right: "64.5%",
      top: "61.93029490616622%",
      bottom: "auto"
    },
    four: {
      ratio: "16:9",
      height: "38.069705093833775%",
      width: "63%",
      left: "37%",
      right: "auto",
      top: "61.93029490616622%",
      bottom: "auto"
    }
  },
  {
    pattern: ["16:9", "16:9", "16:9", "1:1"],
    parent_style: "66.66666666666667:43",
    one: {
      ratio: "16:9",
      height: "43.02325581395349%",
      width: "49.3%",
      left: "auto",
      right: "50.7%",
      top: "auto",
      bottom: "56.97674418604651%"
    },
    two: {
      ratio: "16:9",
      height: "43.02325581395349%",
      width: "49.3%",
      left: "50.7%",
      right: "auto",
      top: "auto",
      bottom: "56.97674418604651%"
    },
    three: {
      ratio: "16:9",
      height: "55.03875968992248%",
      width: "63%",
      left: "auto",
      right: "37%",
      top: "44.96124031007752%",
      bottom: "auto"
    },
    four: {
      ratio: "1:1",
      height: "55.03875968992248%",
      width: "35.5%",
      left: "64.5%",
      right: "auto",
      top: "44.96124031007752%",
      bottom: "auto"
    }
  },
  {
    pattern: ["1:1", "16:9", "16:9", "16:9"],
    parent_style: "66.66666666666667:43.166666666666664",
    one: {
      ratio: "1:1",
      height: "54.826254826254825%",
      width: "35.5%",
      left: "auto",
      right: "64.5%",
      top: "auto",
      bottom: "45.173745173745175%"
    },
    two: {
      ratio: "16:9",
      height: "54.826254826254825%",
      width: "63%",
      left: "37%",
      right: "auto",
      top: "auto",
      bottom: "45.173745173745175%"
    },
    three: {
      ratio: "16:9",
      height: "42.857142857142854%",
      width: "49.3%",
      left: "auto",
      right: "50.7%",
      top: "57.14285714285714%",
      bottom: "auto"
    },
    four: {
      ratio: "16:9",
      height: "42.857142857142854%",
      width: "49.3%",
      left: "50.7%",
      right: "auto",
      top: "57.14285714285714%",
      bottom: "auto"
    }
  },
  {
    pattern: ["1:1", "16:9", "1:1", "16:9"],
    parent_style: "66.66666666666667:48.333333333333336",
    one: {
      ratio: "1:1",
      height: "48.96551724137931%",
      width: "35.6%",
      left: "auto",
      right: "64.4%",
      top: "auto",
      bottom: "51.03448275862069%"
    },
    two: {
      ratio: "16:9",
      height: "48.96551724137931%",
      width: "62.9%",
      left: "37.1%",
      right: "auto",
      top: "auto",
      bottom: "51.03448275862069%"
    },
    three: {
      ratio: "1:1",
      height: "48.96551724137931%",
      width: "35.6%",
      left: "auto",
      right: "64.4%",
      top: "51.03448275862069%",
      bottom: "auto"
    },
    four: {
      ratio: "16:9",
      height: "48.96551724137931%",
      width: "62.9%",
      left: "37.1%",
      right: "auto",
      top: "51.03448275862069%",
      bottom: "auto"
    }
  },
  {
    pattern: ["1:1", "16:9", "3:4", "1:1"],
    parent_style: "66.66666666666667:62.166666666666664",
    one: {
      ratio: "1:1",
      height: "38.069705093833775%",
      width: "35.5%",
      left: "auto",
      right: "64.5%",
      top: "auto",
      bottom: "61.93029490616622%"
    },
    two: {
      ratio: "16:9",
      height: "38.069705093833775%",
      width: "63%",
      left: "37%",
      right: "auto",
      top: "auto",
      bottom: "61.93029490616622%"
    },
    three: {
      ratio: "3:4",
      height: "60.58981233243968%",
      width: "42.3%",
      left: "auto",
      right: "57.70000000000001%",
      top: "39.41018766756032%",
      bottom: "auto"
    },
    four: {
      ratio: "1:1",
      height: "60.58981233243968%",
      width: "56.39999999999999%",
      left: "43.6%",
      right: "auto",
      top: "39.41018766756032%",
      bottom: "auto"
    }
  },
  {
    pattern: ["1:1", "16:9", "3:4", "1:1"],
    parent_style: "66.66666666666667:62.166666666666664",
    one: {
      ratio: "1:1",
      height: "38.069705093833775%",
      width: "35.6%",
      left: "auto",
      right: "64.4%",
      top: "auto",
      bottom: "61.93029490616622%"
    },
    two: {
      ratio: "16:9",
      height: "38.069705093833775%",
      width: "63.1%",
      left: "36.9%",
      right: "auto",
      top: "auto",
      bottom: "61.93029490616622%"
    },
    three: {
      ratio: "3:4",
      height: "60.58981233243968%",
      width: "42.3%",
      left: "auto",
      right: "57.70000000000001%",
      top: "39.41018766756032%",
      bottom: "auto"
    },
    four: {
      ratio: "1:1",
      height: "60.58981233243968%",
      width: "56.39999999999999%",
      left: "43.6%",
      right: "auto",
      top: "39.41018766756032%",
      bottom: "auto"
    }
  },
  {
    pattern: ["16:9", "3:4", "3:4", "16:9"],
    parent_style: "66.66666666666667:52.833333333333336",
    one: {
      ratio: "16:9",
      height: "49.21135646687697%",
      width: "69.4%",
      left: "auto",
      right: "30.599999999999998%",
      top: "auto",
      bottom: "50.78864353312302%"
    },
    two: {
      ratio: "3:4",
      height: "49.52681388012618%",
      width: "29.4%",
      left: "70.6%",
      right: "auto",
      top: "auto",
      bottom: "50.473186119873816%"
    },
    three: {
      ratio: "3:4",
      height: "49.52681388012618%",
      width: "29.4%",
      left: "auto",
      right: "70.6%",
      top: "50.473186119873816%",
      bottom: "auto"
    },
    four: {
      ratio: "16:9",
      height: "49.21135646687697%",
      width: "69.4%",
      left: "30.599999999999998%",
      right: "auto",
      top: "50.78864353312302%",
      bottom: "auto"
    }
  },
  {
    pattern: ["1:1", "1:1", "1:1", "16:9"],
    parent_style: "66.66666666666667:57.5",
    one: {
      ratio: "1:1",
      height: "57.10144927536231%",
      width: "49.3%",
      left: "auto",
      right: "50.7%",
      top: "auto",
      bottom: "42.89855072463768%"
    },
    two: {
      ratio: "1:1",
      height: "57.10144927536231%",
      width: "49.3%",
      left: "50.7%",
      right: "auto",
      top: "auto",
      bottom: "42.89855072463768%"
    },
    three: {
      ratio: "1:1",
      height: "41.15942028985507%",
      width: "35.5%",
      left: "auto",
      right: "64.5%",
      top: "58.84057971014492%",
      bottom: "auto"
    },
    four: {
      ratio: "16:9",
      height: "41.15942028985507%",
      width: "63%",
      left: "37%",
      right: "auto",
      top: "58.84057971014492%",
      bottom: "auto"
    }
  },
  {
    pattern: ["3:4", "16:9", "3:4", "1:1"],
    parent_style: "66.66666666666667:64.5",
    one: {
      ratio: "3:4",
      height: "40.56847545219638%",
      width: "29.5%",
      left: "auto",
      right: "70.5%",
      top: "auto",
      bottom: "59.43152454780362%"
    },
    two: {
      ratio: "16:9",
      height: "40.310077519379846%",
      width: "69.2%",
      left: "30.8%",
      right: "auto",
      top: "auto",
      bottom: "59.68992248062015%"
    },
    three: {
      ratio: "3:4",
      height: "58.39793281653747%",
      width: "42.4%",
      left: "auto",
      right: "57.60000000000001%",
      top: "41.60206718346253%",
      bottom: "auto"
    },
    four: {
      ratio: "1:1",
      height: "58.39793281653747%",
      width: "56.49999999999999%",
      left: "43.5%",
      right: "auto",
      top: "41.60206718346253%",
      bottom: "auto"
    }
  },
  {
    pattern: ["16:9", "16:9", "16:9", "16:9"],
    parent_style: "66.66666666666667:37.766666666666666",
    one: {
      ratio: "16:9",
      height: "48.98499558693734%",
      width: "49.4%",
      left: "auto",
      right: "50.6%",
      top: "auto",
      bottom: "51.015004413062655%"
    },
    two: {
      ratio: "16:9",
      height: "48.98499558693734%",
      width: "49.4%",
      left: "50.6%",
      right: "auto",
      top: "auto",
      bottom: "51.015004413062655%"
    },
    three: {
      ratio: "16:9",
      height: "48.98499558693734%",
      width: "49.4%",
      left: "auto",
      right: "50.6%",
      top: "51.015004413062655%",
      bottom: "auto"
    },
    four: {
      ratio: "16:9",
      height: "48.98499558693734%",
      width: "49.4%",
      left: "50.6%",
      right: "auto",
      top: "51.015004413062655%",
      bottom: "auto"
    }
  },
  {
    pattern: ["1:1", "3:4", "3:4", "16:9"],
    parent_style: "66.66666666666667:64.33333333333333",
    one: {
      ratio: "1:1",
      height: "58.2901554404145%",
      width: "56.3%",
      left: "auto",
      right: "43.7%",
      top: "auto",
      bottom: "41.70984455958549%"
    },
    two: {
      ratio: "3:4",
      height: "58.549222797927456%",
      width: "42.4%",
      left: "57.60000000000001%",
      right: "auto",
      top: "auto",
      bottom: "41.45077720207254%"
    },
    three: {
      ratio: "3:4",
      height: "40.67357512953368%",
      width: "29.5%",
      left: "auto",
      right: "70.5%",
      top: "59.32642487046632%",
      bottom: "auto"
    },
    four: {
      ratio: "16:9",
      height: "40.41450777202073%",
      width: "69.2%",
      left: "30.8%",
      right: "auto",
      top: "59.58549222797927%",
      bottom: "auto"
    }
  },
  {
    pattern: ["3:4", "1:1", "16:9", "1:1"],
    parent_style: "66.66666666666667:62.166666666666664",
    one: {
      ratio: "3:4",
      height: "60.58981233243968%",
      width: "42.4%",
      left: "auto",
      right: "57.60000000000001%",
      top: "auto",
      bottom: "39.41018766756032%"
    },
    two: {
      ratio: "1:1",
      height: "60.58981233243968%",
      width: "56.39999999999999%",
      left: "43.6%",
      right: "auto",
      top: "auto",
      bottom: "39.41018766756032%"
    },
    three: {
      ratio: "16:9",
      height: "38.069705093833775%",
      width: "63.2%",
      left: "auto",
      right: "36.8%",
      top: "61.93029490616622%",
      bottom: "auto"
    },
    four: {
      ratio: "1:1",
      height: "38.069705093833775%",
      width: "35.6%",
      left: "64.4%",
      right: "auto",
      top: "61.93029490616622%",
      bottom: "auto"
    }
  },
  {
    pattern: ["3:4", "1:1", "3:4", "3:4"],
    parent_style: "66.66666666666667:82.3",
    one: {
      ratio: "3:4",
      height: "45.76751721344674%",
      width: "42.4%",
      left: "auto",
      right: "57.60000000000001%",
      top: "auto",
      bottom: "54.23248278655326%"
    },
    two: {
      ratio: "1:1",
      height: "45.76751721344674%",
      width: "56.39999999999999%",
      left: "43.6%",
      right: "auto",
      top: "auto",
      bottom: "54.23248278655326%"
    },
    three: {
      ratio: "3:4",
      height: "53.260429323612804%",
      width: "49.4%",
      left: "auto",
      right: "50.6%",
      top: "46.7395706763872%",
      bottom: "auto"
    },
    four: {
      ratio: "3:4",
      height: "53.260429323612804%",
      width: "49.4%",
      left: "50.6%",
      right: "auto",
      top: "46.7395706763872%",
      bottom: "auto"
    }
  },
  {
    pattern: ["16:9", "3:4", "1:1", "16:9"],
    parent_style: "66.66666666666667:50.416666666666664",
    one: {
      ratio: "16:9",
      height: "51.570247933884296%",
      width: "69.4%",
      left: "auto",
      right: "30.599999999999998%",
      top: "auto",
      bottom: "48.4297520661157%"
    },
    two: {
      ratio: "3:4",
      height: "51.570247933884296%",
      width: "29.299999999999997%",
      left: "70.7%",
      right: "auto",
      top: "auto",
      bottom: "48.4297520661157%"
    },
    three: {
      ratio: "1:1",
      height: "46.942148760330575%",
      width: "35.6%",
      left: "auto",
      right: "64.4%",
      top: "53.05785123966942%",
      bottom: "auto"
    },
    four: {
      ratio: "16:9",
      height: "46.942148760330575%",
      width: "63%",
      left: "37%",
      right: "auto",
      top: "53.05785123966942%",
      bottom: "auto"
    }
  },
  {
    pattern: ["16:9", "1:1", "1:1", "1:1"],
    parent_style: "66.66666666666667:57.43333333333334",
    one: {
      ratio: "16:9",
      height: "41.2071967498549%",
      width: "63%",
      left: "auto",
      right: "37%",
      top: "auto",
      bottom: "58.792803250145084%"
    },
    two: {
      ratio: "1:1",
      height: "41.2071967498549%",
      width: "35.6%",
      left: "64.4%",
      right: "auto",
      top: "auto",
      bottom: "58.792803250145084%"
    },
    three: {
      ratio: "1:1",
      height: "57.16773070226348%",
      width: "49.3%",
      left: "auto",
      right: "50.7%",
      top: "42.8322692977365%",
      bottom: "auto"
    },
    four: {
      ratio: "1:1",
      height: "57.16773070226348%",
      width: "49.3%",
      left: "50.7%",
      right: "auto",
      top: "42.8322692977365%",
      bottom: "auto"
    }
  },
  {
    pattern: ["16:9", "16:9", "16:9", "3:4"],
    parent_style: "66.66666666666667:45.26666666666667",
    one: {
      ratio: "16:9",
      height: "40.86892488954344%",
      width: "49.4%",
      left: "auto",
      right: "50.6%",
      top: "auto",
      bottom: "59.13107511045654%"
    },
    two: {
      ratio: "16:9",
      height: "40.86892488954344%",
      width: "49.4%",
      left: "50.6%",
      right: "auto",
      top: "auto",
      bottom: "59.13107511045654%"
    },
    three: {
      ratio: "16:9",
      height: "57.437407952871865%",
      width: "69.4%",
      left: "auto",
      right: "30.599999999999998%",
      top: "42.56259204712812%",
      bottom: "auto"
    },
    four: {
      ratio: "3:4",
      height: "57.437407952871865%",
      width: "29.299999999999997%",
      left: "70.7%",
      right: "auto",
      top: "42.56259204712812%",
      bottom: "auto"
    }
  },
  {
    pattern: ["16:9", "3:4", "16:9", "1:1"],
    parent_style: "66.66666666666667:50.5",
    one: {
      ratio: "16:9",
      height: "51.48514851485149%",
      width: "69.4%",
      left: "auto",
      right: "30.599999999999998%",
      top: "auto",
      bottom: "48.51485148514851%"
    },
    two: {
      ratio: "3:4",
      height: "51.48514851485149%",
      width: "29.299999999999997%",
      left: "70.7%",
      right: "auto",
      top: "auto",
      bottom: "48.51485148514851%"
    },
    three: {
      ratio: "16:9",
      height: "46.864686468646866%",
      width: "63%",
      left: "auto",
      right: "37%",
      top: "53.135313531353134%",
      bottom: "auto"
    },
    four: {
      ratio: "1:1",
      height: "46.864686468646866%",
      width: "35.6%",
      left: "64.4%",
      right: "auto",
      top: "53.135313531353134%",
      bottom: "auto"
    }
  },
  {
    pattern: ["3:4", "1:1", "3:4", "16:9"],
    parent_style: "66.66666666666667:64.33333333333333",
    one: {
      ratio: "3:4",
      height: "58.549222797927456%",
      width: "42.4%",
      left: "auto",
      right: "57.60000000000001%",
      top: "auto",
      bottom: "41.45077720207254%"
    },
    two: {
      ratio: "1:1",
      height: "58.549222797927456%",
      width: "56.39999999999999%",
      left: "43.6%",
      right: "auto",
      top: "auto",
      bottom: "41.45077720207254%"
    },
    three: {
      ratio: "3:4",
      height: "40.41450777202073%",
      width: "29.299999999999997%",
      left: "auto",
      right: "70.7%",
      top: "59.58549222797927%",
      bottom: "auto"
    },
    four: {
      ratio: "16:9",
      height: "40.41450777202073%",
      width: "69.4%",
      left: "30.599999999999998%",
      right: "auto",
      top: "59.58549222797927%",
      bottom: "auto"
    }
  },
  {
    pattern: ["3:4", "3:4", "1:1", "3:4"],
    parent_style: "66.66666666666667:82.33333333333333",
    one: {
      ratio: "3:4",
      height: "53.23886639676113%",
      width: "49.4%",
      left: "auto",
      right: "50.6%",
      top: "auto",
      bottom: "46.76113360323887%"
    },
    two: {
      ratio: "3:4",
      height: "53.23886639676113%",
      width: "49.4%",
      left: "50.6%",
      right: "auto",
      top: "auto",
      bottom: "46.76113360323887%"
    },
    three: {
      ratio: "1:1",
      height: "45.74898785425101%",
      width: "56.39999999999999%",
      left: "auto",
      right: "43.6%",
      top: "54.25101214574899%",
      bottom: "auto"
    },
    four: {
      ratio: "3:4",
      height: "45.74898785425101%",
      width: "42.4%",
      left: "57.60000000000001%",
      right: "auto",
      top: "54.25101214574899%",
      bottom: "auto"
    }
  },
  {
    pattern: ["3:4", "3:4", "3:4", "16:9"],
    parent_style: "66.66666666666667:70.66666666666667",
    one: {
      ratio: "3:4",
      height: "62.02830188679245%",
      width: "49.4%",
      left: "auto",
      right: "50.6%",
      top: "auto",
      bottom: "37.971698113207545%"
    },
    two: {
      ratio: "3:4",
      height: "62.02830188679245%",
      width: "49.4%",
      left: "50.6%",
      right: "auto",
      top: "auto",
      bottom: "37.971698113207545%"
    },
    three: {
      ratio: "3:4",
      height: "36.79245283018868%",
      width: "29.299999999999997%",
      left: "auto",
      right: "70.7%",
      top: "63.20754716981132%",
      bottom: "auto"
    },
    four: {
      ratio: "16:9",
      height: "36.79245283018868%",
      width: "69.4%",
      left: "30.599999999999998%",
      right: "auto",
      top: "63.20754716981132%",
      bottom: "auto"
    }
  },
  {
    pattern: ["16:9", "3:4", "16:9", "16:9"],
    parent_style: "66.66666666666667:45.38333333333333",
    one: {
      ratio: "16:9",
      height: "57.28975394785163%",
      width: "69.4%",
      left: "auto",
      right: "30.599999999999998%",
      top: "auto",
      bottom: "42.710246052148364%"
    },
    two: {
      ratio: "3:4",
      height: "57.28975394785163%",
      width: "29.299999999999997%",
      left: "70.7%",
      right: "auto",
      top: "auto",
      bottom: "42.710246052148364%"
    },
    three: {
      ratio: "16:9",
      height: "40.763863385971355%",
      width: "49.3%",
      left: "auto",
      right: "50.7%",
      top: "59.236136614028645%",
      bottom: "auto"
    },
    four: {
      ratio: "16:9",
      height: "40.763863385971355%",
      width: "49.3%",
      left: "50.7%",
      right: "auto",
      top: "59.236136614028645%",
      bottom: "auto"
    }
  },
  {
    pattern: ["3:4", "16:9", "1:1", "3:4"],
    parent_style: "66.66666666666667:64.5",
    one: {
      ratio: "3:4",
      height: "40.310077519379846%",
      width: "29.299999999999997%",
      left: "auto",
      right: "70.7%",
      top: "auto",
      bottom: "59.68992248062015%"
    },
    two: {
      ratio: "16:9",
      height: "40.310077519379846%",
      width: "69.4%",
      left: "30.599999999999998%",
      right: "auto",
      top: "auto",
      bottom: "59.68992248062015%"
    },
    three: {
      ratio: "1:1",
      height: "58.39793281653747%",
      width: "56.39999999999999%",
      left: "auto",
      right: "43.6%",
      top: "41.60206718346253%",
      bottom: "auto"
    },
    four: {
      ratio: "3:4",
      height: "58.39793281653747%",
      width: "42.4%",
      left: "57.60000000000001%",
      right: "auto",
      top: "41.60206718346253%",
      bottom: "auto"
    }
  },
  {
    pattern: ["1:1", "3:4", "16:9", "1:1"],
    parent_style: "66.66666666666667:62.21666666666667",
    one: {
      ratio: "1:1",
      height: "60.541119742834184%",
      width: "56.39999999999999%",
      left: "auto",
      right: "43.6%",
      top: "auto",
      bottom: "39.458880257165816%"
    },
    two: {
      ratio: "3:4",
      height: "60.541119742834184%",
      width: "42.4%",
      left: "57.60000000000001%",
      right: "auto",
      top: "auto",
      bottom: "39.458880257165816%"
    },
    three: {
      ratio: "16:9",
      height: "38.039110634878114%",
      width: "63%",
      left: "auto",
      right: "37%",
      top: "61.960889365121886%",
      bottom: "auto"
    },
    four: {
      ratio: "1:1",
      height: "38.039110634878114%",
      width: "35.6%",
      left: "64.4%",
      right: "auto",
      top: "61.960889365121886%",
      bottom: "auto"
    }
  },
  {
    pattern: ["1:1", "3:4", "3:4", "1:1"],
    parent_style: "66.66666666666667:76.16666666666667",
    one: {
      ratio: "1:1",
      height: "49.45295404814004%",
      width: "56.39999999999999%",
      left: "auto",
      right: "43.6%",
      top: "auto",
      bottom: "50.54704595185996%"
    },
    two: {
      ratio: "3:4",
      height: "49.45295404814004%",
      width: "42.4%",
      left: "57.60000000000001%",
      right: "auto",
      top: "auto",
      bottom: "50.54704595185996%"
    },
    three: {
      ratio: "3:4",
      height: "49.45295404814004%",
      width: "42.4%",
      left: "auto",
      right: "57.60000000000001%",
      top: "50.54704595185996%",
      bottom: "auto"
    },
    four: {
      ratio: "1:1",
      height: "49.45295404814004%",
      width: "56.39999999999999%",
      left: "43.6%",
      right: "auto",
      top: "50.54704595185996%",
      bottom: "auto"
    }
  },
  {
    pattern: ["1:1", "16:9", "1:1", "3:4"],
    parent_style: "66.66666666666667:62.166666666666664",
    one: {
      ratio: "1:1",
      height: "38.069705093833775%",
      width: "35.6%",
      left: "auto",
      right: "64.4%",
      top: "auto",
      bottom: "61.93029490616622%"
    },
    two: {
      ratio: "16:9",
      height: "38.069705093833775%",
      width: "63%",
      left: "37%",
      right: "auto",
      top: "auto",
      bottom: "61.93029490616622%"
    },
    three: {
      ratio: "1:1",
      height: "60.58981233243968%",
      width: "56.39999999999999%",
      left: "auto",
      right: "43.6%",
      top: "39.41018766756032%",
      bottom: "auto"
    },
    four: {
      ratio: "3:4",
      height: "60.58981233243968%",
      width: "42.4%",
      left: "57.60000000000001%",
      right: "auto",
      top: "39.41018766756032%",
      bottom: "auto"
    }
  },
  {
    pattern: ["16:9", "1:1", "3:4", "16:9"],
    parent_style: "66.66666666666667:50.449999999999996",
    one: {
      ratio: "16:9",
      height: "46.911133135117275%",
      width: "63%",
      left: "auto",
      right: "37%",
      top: "auto",
      bottom: "53.088866864882725%"
    },
    two: {
      ratio: "1:1",
      height: "46.911133135117275%",
      width: "35.6%",
      left: "64.4%",
      right: "auto",
      top: "auto",
      bottom: "53.088866864882725%"
    },
    three: {
      ratio: "3:4",
      height: "51.536174430128845%",
      width: "29.299999999999997%",
      left: "auto",
      right: "70.7%",
      top: "48.463825569871155%",
      bottom: "auto"
    },
    four: {
      ratio: "16:9",
      height: "51.536174430128845%",
      width: "69.4%",
      left: "30.599999999999998%",
      right: "auto",
      top: "48.463825569871155%",
      bottom: "auto"
    }
  },
  {
    pattern: ["1:1", "16:9", "1:1", "1:1"],
    parent_style: "66.66666666666667:57.5",
    one: {
      ratio: "1:1",
      height: "41.15942028985507%",
      width: "35.6%",
      left: "auto",
      right: "64.4%",
      top: "auto",
      bottom: "58.84057971014492%"
    },
    two: {
      ratio: "16:9",
      height: "41.15942028985507%",
      width: "63%",
      left: "37%",
      right: "auto",
      top: "auto",
      bottom: "58.84057971014492%"
    },
    three: {
      ratio: "1:1",
      height: "57.391304347826086%",
      width: "49.4%",
      left: "auto",
      right: "50.6%",
      top: "42.608695652173914%",
      bottom: "auto"
    },
    four: {
      ratio: "1:1",
      height: "57.391304347826086%",
      width: "49.4%",
      left: "50.6%",
      right: "auto",
      top: "42.608695652173914%",
      bottom: "auto"
    }
  },
  {
    pattern: ["3:4", "3:4", "3:4", "3:4"],
    parent_style: "66.66666666666667:88.33333333333333",
    one: {
      ratio: "3:4",
      height: "49.62264150943396%",
      width: "49.4%",
      left: "auto",
      right: "50.6%",
      top: "auto",
      bottom: "50.37735849056604%"
    },
    two: {
      ratio: "3:4",
      height: "49.62264150943396%",
      width: "49.4%",
      left: "50.6%",
      right: "auto",
      top: "auto",
      bottom: "50.37735849056604%"
    },
    three: {
      ratio: "3:4",
      height: "49.62264150943396%",
      width: "49.4%",
      left: "auto",
      right: "50.6%",
      top: "50.37735849056604%",
      bottom: "auto"
    },
    four: {
      ratio: "3:4",
      height: "49.62264150943396%",
      width: "49.4%",
      left: "50.6%",
      right: "auto",
      top: "50.37735849056604%",
      bottom: "auto"
    }
  },
  {
    pattern: ["1:1", "1:1", "16:9", "3:4"],
    parent_style: "66.66666666666667:59.93333333333334",
    one: {
      ratio: "1:1",
      height: "55.06117908787541%",
      width: "49.4%",
      left: "auto",
      right: "50.6%",
      top: "auto",
      bottom: "44.93882091212458%"
    },
    two: {
      ratio: "1:1",
      height: "55.06117908787541%",
      width: "49.4%",
      left: "50.6%",
      right: "auto",
      top: "auto",
      bottom: "44.93882091212458%"
    },
    three: {
      ratio: "16:9",
      height: "43.38153503893214%",
      width: "69.4%",
      left: "auto",
      right: "30.599999999999998%",
      top: "56.61846496106785%",
      bottom: "auto"
    },
    four: {
      ratio: "3:4",
      height: "43.38153503893214%",
      width: "29.299999999999997%",
      left: "70.7%",
      right: "auto",
      top: "56.61846496106785%",
      bottom: "auto"
    }
  },
  {
    pattern: ["1:1", "1:1", "1:1", "1:1"],
    parent_style: "66.66666666666667:66.76666666666667",
    one: {
      ratio: "1:1",
      height: "49.42586120818772%",
      width: "49.4%",
      left: "auto",
      right: "50.6%",
      top: "auto",
      bottom: "50.574138791812274%"
    },
    two: {
      ratio: "1:1",
      height: "49.42586120818772%",
      width: "49.4%",
      left: "50.6%",
      right: "auto",
      top: "auto",
      bottom: "50.574138791812274%"
    },
    three: {
      ratio: "1:1",
      height: "49.42586120818772%",
      width: "49.4%",
      left: "auto",
      right: "50.6%",
      top: "50.574138791812274%",
      bottom: "auto"
    },
    four: {
      ratio: "1:1",
      height: "49.42586120818772%",
      width: "49.4%",
      left: "50.6%",
      right: "auto",
      top: "50.574138791812274%",
      bottom: "auto"
    }
  },
  {
    pattern: ["3:4", "3:4", "16:9", "3:4"],
    parent_style: "66.66666666666667:70.66666666666667",
    one: {
      ratio: "3:4",
      height: "62.02830188679245%",
      width: "49.4%",
      left: "auto",
      right: "50.6%",
      top: "auto",
      bottom: "37.971698113207545%"
    },
    two: {
      ratio: "3:4",
      height: "62.02830188679245%",
      width: "49.4%",
      left: "50.6%",
      right: "auto",
      top: "auto",
      bottom: "37.971698113207545%"
    },
    three: {
      ratio: "16:9",
      height: "36.79245283018868%",
      width: "69.4%",
      left: "auto",
      right: "30.599999999999998%",
      top: "63.20754716981132%",
      bottom: "auto"
    },
    four: {
      ratio: "3:4",
      height: "36.79245283018868%",
      width: "29.299999999999997%",
      left: "70.7%",
      right: "auto",
      top: "63.20754716981132%",
      bottom: "auto"
    }
  },
  {
    pattern: ["3:4", "16:9", "1:1", "16:9"],
    parent_style: "66.66666666666667:50.550000000000004",
    one: {
      ratio: "3:4",
      height: "51.43422354104846%",
      width: "29.299999999999997%",
      left: "auto",
      right: "70.7%",
      top: "auto",
      bottom: "48.56577645895154%"
    },
    two: {
      ratio: "16:9",
      height: "51.43422354104846%",
      width: "69.4%",
      left: "30.599999999999998%",
      right: "auto",
      top: "auto",
      bottom: "48.56577645895154%"
    },
    three: {
      ratio: "1:1",
      height: "46.818331684800526%",
      width: "35.6%",
      left: "auto",
      right: "64.4%",
      top: "53.181668315199474%",
      bottom: "auto"
    },
    four: {
      ratio: "16:9",
      height: "46.818331684800526%",
      width: "63%",
      left: "37%",
      right: "auto",
      top: "53.181668315199474%",
      bottom: "auto"
    }
  },
  {
    pattern: ["1:1", "1:1", "3:4", "16:9"],
    parent_style: "66.66666666666667:59.88333333333333",
    one: {
      ratio: "1:1",
      height: "55.107152797105485%",
      width: "49.4%",
      left: "auto",
      right: "50.6%",
      top: "auto",
      bottom: "44.89284720289452%"
    },
    two: {
      ratio: "1:1",
      height: "55.107152797105485%",
      width: "49.4%",
      left: "50.6%",
      right: "auto",
      top: "auto",
      bottom: "44.89284720289452%"
    },
    three: {
      ratio: "3:4",
      height: "43.41775674923462%",
      width: "29.299999999999997%",
      left: "auto",
      right: "70.7%",
      top: "56.58224325076537%",
      bottom: "auto"
    },
    four: {
      ratio: "16:9",
      height: "43.41775674923462%",
      width: "69.4%",
      left: "30.599999999999998%",
      right: "auto",
      top: "56.58224325076537%",
      bottom: "auto"
    }
  },
  {
    pattern: ["16:9", "16:9", "3:4", "16:9"],
    parent_style: "66.66666666666667:45.28333333333333",
    one: {
      ratio: "16:9",
      height: "40.85388295914612%",
      width: "49.4%",
      left: "auto",
      right: "50.6%",
      top: "auto",
      bottom: "59.14611704085389%"
    },
    two: {
      ratio: "16:9",
      height: "40.85388295914612%",
      width: "49.4%",
      left: "50.6%",
      right: "auto",
      top: "auto",
      bottom: "59.14611704085389%"
    },
    three: {
      ratio: "3:4",
      height: "57.41626794258373%",
      width: "29.299999999999997%",
      left: "auto",
      right: "70.7%",
      top: "42.58373205741627%",
      bottom: "auto"
    },
    four: {
      ratio: "16:9",
      height: "57.41626794258373%",
      width: "69.4%",
      left: "30.599999999999998%",
      right: "auto",
      top: "42.58373205741627%",
      bottom: "auto"
    }
  },
  {
    pattern: ["3:4", "16:9", "16:9", "1:1"],
    parent_style: "66.66666666666667:50.449999999999996",
    one: {
      ratio: "3:4",
      height: "51.536174430128845%",
      width: "29.299999999999997%",
      left: "auto",
      right: "70.7%",
      top: "auto",
      bottom: "48.463825569871155%"
    },
    two: {
      ratio: "16:9",
      height: "51.536174430128845%",
      width: "69.4%",
      left: "30.599999999999998%",
      right: "auto",
      top: "auto",
      bottom: "48.463825569871155%"
    },
    three: {
      ratio: "16:9",
      height: "46.911133135117275%",
      width: "63%",
      left: "auto",
      right: "37%",
      top: "53.088866864882725%",
      bottom: "auto"
    },
    four: {
      ratio: "1:1",
      height: "46.911133135117275%",
      width: "35.6%",
      left: "64.4%",
      right: "auto",
      top: "53.088866864882725%",
      bottom: "auto"
    }
  },
  {
    pattern: ["3:4", "16:9", "3:4", "16:9"],
    parent_style: "66.66666666666667:52.833333333333336",
    one: {
      ratio: "3:4",
      height: "49.21135646687697%",
      width: "29.299999999999997%",
      left: "auto",
      right: "70.7%",
      top: "auto",
      bottom: "50.78864353312302%"
    },
    two: {
      ratio: "16:9",
      height: "49.21135646687697%",
      width: "69.4%",
      left: "30.599999999999998%",
      right: "auto",
      top: "auto",
      bottom: "50.78864353312302%"
    },
    three: {
      ratio: "3:4",
      height: "49.21135646687697%",
      width: "29.299999999999997%",
      left: "auto",
      right: "70.7%",
      top: "50.78864353312302%",
      bottom: "auto"
    },
    four: {
      ratio: "16:9",
      height: "49.21135646687697%",
      width: "69.4%",
      left: "30.599999999999998%",
      right: "auto",
      top: "50.78864353312302%",
      bottom: "auto"
    }
  },
  {
    pattern: ["1:1", "3:4", "3:4", "3:4"],
    parent_style: "66.66666666666667:82.31666666666666",
    one: {
      ratio: "1:1",
      height: "45.75825065802795%",
      width: "56.39999999999999%",
      left: "auto",
      right: "43.6%",
      top: "auto",
      bottom: "54.24174934197205%"
    },
    two: {
      ratio: "3:4",
      height: "45.75825065802795%",
      width: "42.4%",
      left: "57.60000000000001%",
      right: "auto",
      top: "auto",
      bottom: "54.24174934197205%"
    },
    three: {
      ratio: "3:4",
      height: "53.249645677262606%",
      width: "49.4%",
      left: "auto",
      right: "50.6%",
      top: "46.750354322737394%",
      bottom: "auto"
    },
    four: {
      ratio: "3:4",
      height: "53.249645677262606%",
      width: "49.4%",
      left: "50.6%",
      right: "auto",
      top: "46.750354322737394%",
      bottom: "auto"
    }
  },
  {
    pattern: ["3:4", "1:1", "16:9", "16:9"],
    parent_style: "66.66666666666667:57",
    one: {
      ratio: "3:4",
      height: "66.08187134502924%",
      width: "42.4%",
      left: "auto",
      right: "57.60000000000001%",
      top: "auto",
      bottom: "33.91812865497076%"
    },
    two: {
      ratio: "1:1",
      height: "66.08187134502924%",
      width: "56.39999999999999%",
      left: "43.6%",
      right: "auto",
      top: "auto",
      bottom: "33.91812865497076%"
    },
    three: {
      ratio: "16:9",
      height: "32.45614035087719%",
      width: "49.4%",
      left: "auto",
      right: "50.6%",
      top: "67.54385964912281%",
      bottom: "auto"
    },
    four: {
      ratio: "16:9",
      height: "32.45614035087719%",
      width: "49.4%",
      left: "50.6%",
      right: "auto",
      top: "67.54385964912281%",
      bottom: "auto"
    }
  },
  {
    pattern: ["1:1", "3:4", "1:1", "16:9"],
    parent_style: "66.66666666666667:62.166666666666664",
    one: {
      ratio: "1:1",
      height: "60.58981233243968%",
      width: "56.39999999999999%",
      left: "auto",
      right: "43.6%",
      top: "auto",
      bottom: "39.41018766756032%"
    },
    two: {
      ratio: "3:4",
      height: "60.58981233243968%",
      width: "42.4%",
      left: "57.60000000000001%",
      right: "auto",
      top: "auto",
      bottom: "39.41018766756032%"
    },
    three: {
      ratio: "1:1",
      height: "38.069705093833775%",
      width: "35.6%",
      left: "auto",
      right: "64.4%",
      top: "61.93029490616622%",
      bottom: "auto"
    },
    four: {
      ratio: "16:9",
      height: "38.069705093833775%",
      width: "63%",
      left: "37%",
      right: "auto",
      top: "61.93029490616622%",
      bottom: "auto"
    }
  }
];


export{DYNAMIC_GRID_STYLES};
