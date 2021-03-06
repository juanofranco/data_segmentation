(function(){

  //function to build and append a chart in DOM
  function createChart (question,answers,surveyed,votes){
    const _SURVEYED = [];
    const _VOTES = [];
    const _QUESTION = question;
    const _ANSWERS = answers;
    
    //Slice first group of votes - Age
    _SURVEYED[0] = surveyed.slice(0,6);
    _VOTES[0] = votes[0].slice(0,6);
    _VOTES[1] = votes[1].slice(0,6);
    _VOTES[2] = votes[2].slice(0,6);

    //build a first Age chart
    const _CHART = document.getElementById('dataEdad')
    let lineChart = new Chart(_CHART, {
    type: 'line',
    data: {
            labels: _SURVEYED[0],
            datasets: [
              {
                label: _ANSWERS[2],
                fill: true,
                backgroundColor: "rgba(161,209,84,0.2)",
                borderColor: "rgba(161,209,84,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(161,209,84,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(161,209,84,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: _VOTES[2],
                spanGaps: false,
              },
              {
                label: _ANSWERS[0],
                fill: true,
                backgroundColor: "rgba(167,141,228,0.4)",
                borderColor: "rgba(167,141,228,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(167,141,228,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(167,141,228,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: _VOTES[0],
                spanGaps: false,
              },
              {
                label: _ANSWERS[1],
                fill: true,
                backgroundColor: "rgba(52,211,235,0.4)",
                borderColor: "rgba(52,211,235,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(52,211,235,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(52,211,235,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: _VOTES[1],
                spanGaps: false,
              }
            ]
          },
          options:{
            scales:{
              yAxes:[{
                ticks:{
                  beginAtZero: true
                }
              }]
            }
          }
    });


    //Slice second group of votes - Status
    _SURVEYED[1] = surveyed.slice(7,12);
    _VOTES[3] = votes[0].slice(7,12);
    _VOTES[4] = votes[1].slice(7,12);
    _VOTES[5] = votes[2].slice(7,12);

    //console.log(_SURVEYED[1])
    //console.log(_VOTES[3])


    //build a second Status chart
    const _CHART2 = document.getElementById('dataEstado')
    let lineChart2 = new Chart(_CHART2, {
    type: 'line',
    data: {
            labels: _SURVEYED[1],
            datasets: [
              {
                label: _ANSWERS[2],
                fill: true,
                backgroundColor: "rgba(161,209,84,0.2)",
                borderColor: "rgba(161,209,84,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(161,209,84,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(161,209,84,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: _VOTES[5],
                spanGaps: false,
              },
              {
                label: _ANSWERS[0],
                fill: true,
                backgroundColor: "rgba(167,141,228,0.4)",
                borderColor: "rgba(167,141,228,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(167,141,228,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(167,141,228,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: _VOTES[3],
                spanGaps: false,
              },
              {
                label: _ANSWERS[1],
                fill: true,
                backgroundColor: "rgba(52,211,235,0.4)",
                borderColor: "rgba(52,211,235,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(52,211,235,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(52,211,235,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: _VOTES[4],
                spanGaps: false,
              }
            ]
          },
          options:{
            scales:{
              yAxes:[{
                ticks:{
                  beginAtZero: true
                }
              }]
            }
          }
    });


    //Slice second group of votes - Status
    _SURVEYED[2] = surveyed.slice(13,19);
    _VOTES[6] = votes[0].slice(13,19);
    _VOTES[7] = votes[1].slice(13,19);
    _VOTES[8] = votes[2].slice(13,19);

    //console.log(_SURVEYED[2])
    //console.log(_VOTES[6])


    //build a third others chart
    const _CHART3 = document.getElementById('dataOtros')
    let lineChart3 = new Chart(_CHART3, {
    type: 'line',
    data: {
            labels: _SURVEYED[2],
            datasets: [
              {
                label: _ANSWERS[2],
                fill: true,
                backgroundColor: "rgba(161,209,84,0.2)",
                borderColor: "rgba(161,209,84,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(161,209,84,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(161,209,84,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: _VOTES[8],
                spanGaps: false,
              },
              {
                label: _ANSWERS[0],
                fill: true,
                backgroundColor: "rgba(167,141,228,0.4)",
                borderColor: "rgba(167,141,228,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(167,141,228,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(167,141,228,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: _VOTES[6],
                spanGaps: false,
              },
              {
                label: _ANSWERS[1],
                fill: true,
                backgroundColor: "rgba(52,211,235,0.4)",
                borderColor: "rgba(52,211,235,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(52,211,235,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(52,211,235,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: _VOTES[7],
                spanGaps: false,
              }
            ]
          },
          options:{
            scales:{
              yAxes:[{
                ticks:{
                  beginAtZero: true
                }
              }]
            }
          }
    });


    //Slice second group of votes - Status
    _SURVEYED[3] = surveyed.slice(20);
    _VOTES[9] = votes[0].slice(20);
    _VOTES[10] = votes[1].slice(20);
    _VOTES[11] = votes[2].slice(20);

    console.log(_SURVEYED[3])
    console.log(_VOTES[9])


    //build a fourth city chart
    const _CHART4 = document.getElementById('dataProvincias')
    let lineChart4 = new Chart(_CHART4, {
    type: 'line',
    data: {
            labels: _SURVEYED[3],
            datasets: [
              {
                label: _ANSWERS[2],
                fill: true,
                backgroundColor: "rgba(161,209,84,0.2)",
                borderColor: "rgba(161,209,84,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(161,209,84,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(161,209,84,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: _VOTES[11],
                spanGaps: false,
              },
              {
                label: _ANSWERS[0],
                fill: true,
                backgroundColor: "rgba(167,141,228,0.4)",
                borderColor: "rgba(167,141,228,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(167,141,228,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(167,141,228,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: _VOTES[9],
                spanGaps: false,
              },
              {
                label: _ANSWERS[1],
                fill: true,
                backgroundColor: "rgba(52,211,235,0.4)",
                borderColor: "rgba(52,211,235,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(52,211,235,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(52,211,235,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: _VOTES[10],
                spanGaps: false,
              }
            ]
          },
          options:{
            scales:{
              yAxes:[{
                ticks:{
                  beginAtZero: true
                }
              }]
            }
          }
    });

    //fill H1 tag with the question
    const h1Tag = document.getElementById('title')
    const titleQuestion = document.createElement('span');
    titleQuestion.classList.add('questionTitle');
    titleQuestion.textContent = _QUESTION;
    h1Tag.appendChild(titleQuestion);

  }

  function showPollResults (data) {


    var total = 0;
    var correct = -1;
    var mostVoted = -1;
    var maxVotes = 0;

    var answersObject = [];
    var surveyedObject = [];
    var percentObject = [];

    var maxArr = [], minArr = [], maxArrVal = [], minArrVal = [];

    data.answers.forEach(function(anAnswer, index) {
        total += anAnswer.count;
        if (maxVotes < anAnswer.count) {
            maxVotes = anAnswer.count;
        }
        maxArr.push([]);
        minArr.push([]);
        maxArrVal.push(0);
        minArrVal.push(100);
    });

    
    //Build an array with anwers
    data.answers.forEach(function(anAnswer, index) {
        answersObject.push(anAnswer.text);
    });

    var tags = [];

    Object.keys(data.userTags).forEach(function (key) {

        var temp = data.userTags[key];

        temp.key = key;

        temp.team = false;

        var name = key;

        if (key.indexOf("team-") > -1) {
            temp.team = true;
            var temp2 = key.replace("room:team-","");
            for (var i = teamsData.length - 1; i >= 0; i--) {
                if (teamsData[i]._id == temp2) {
                    name = teamsData[i].name;
                    break;
                }
            };
        }

        temp.name = name.replace("room:","");
        temp.total = temp.answers.sum();
        temp.max = temp.answers.maximum();
        temp.min = temp.answers.minimum();

        tags.push(temp);
    });

    var percents = [];

    tags.sort(function (a,b) {
        if (a.team != b.team) {
            if (a.team) {
                return 1;
            } else {
                return -1;
            }
        }
        if(a.name < b.name) return -1;
        if(a.name > b.name) return 1;
        return 0;
    }).forEach(function(tag, tagindex) {
        surveyedObject.push(toTitleCase(tag.name.replace("_"," ")));
        
        tag.answers.forEach(function(anAnswer, index) {

          if(!percentObject[index]){
            percentObject[index] = [];
          };
          percentObject[index].push((anAnswer/tag.total*100).toFixed(1) * 1);
        });


    });

     //console.log(percentObject);
     //console.log(surveyedObject)
    //Build a chart -> question, answers, surveyed, votes
    createChart(data.question,answersObject,surveyedObject,percentObject)

  }

  var atcode = "dilema2015",
  apiHost = "https://api.iamat.com",
  teamsData = [],
  results;

  Array.prototype.maximum = function() {
    return this.reduce(function(max, aValue) {
        return Math.max(max, aValue);
    }, this[0]);
  };
  Array.prototype.minimum = function() {
    return this.reduce(function(min, aValue) {
        return Math.min(min, aValue);
    }, this[0]);
  };
  Array.prototype.sum = function() {
    return this.reduce(function(total, aValue) {
        return total + Number(aValue);
    });
  };

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  (function getTeams() {

  })();


  results = {
    "id": "54f4c8c5226cbdaa0b004e45",
    "question": "\u00bfQu\u00e9 hac\u00e9s si una mujer con la que est\u00e1s es la ex de un amigo?",
    "answers": [
        {
            "text": "Segu\u00eds con ella a pesar de todo",
            "count": 1496,
            "percentage": 16,
            "points": 100,
            "image": null,
            "metadata": null
        },
        {
            "text": "La larg\u00e1s",
            "count": 3227,
            "percentage": 34,
            "points": 100,
            "image": null,
            "metadata": null
        },
        {
            "text": "Lo habl\u00e1s con tu amigo para que te apruebe la relaci\u00f3n",
            "count": 4791,
            "percentage": 50,
            "points": 100,
            "correct": true,
            "image": null,
            "metadata": null
        }
    ],
    "timing": {
        "start": 1425440042841,
        "countdown": 0,
        "open": 20000
    },
    "image": null,
    "type": "Standard",
    "userTags": {
        "room:team-54e5106fc161867c571d4e35": {
            "answers": [
                7,
                23,
                38
            ],
            "percentage": [
                10,
                34,
                56
            ]
        },
        "room:team-54e50ac1c161867c571d2cf6": {
            "answers": [
                16,
                12,
                19
            ],
            "percentage": [
                34,
                26,
                40
            ]
        },
        "room:team-54e50a6fc161867c571d2bf5": {
            "answers": [
                8,
                10,
                20
            ],
            "percentage": [
                21,
                26,
                53
            ]
        },
        "room:female": {
            "answers": [
                669,
                1120,
                1995
            ],
            "percentage": [
                18,
                30,
                52
            ]
        },
        "room:team-54e50b4fc161867c571d2f52": {
            "answers": [
                8,
                17,
                23
            ],
            "percentage": [
                17,
                35,
                48
            ]
        },
        "room:ESTADO_Concubinato": {
            "answers": [
                194,
                430,
                669
            ],
            "percentage": [
                15,
                33,
                52
            ]
        },
        "room:facebook": {
            "answers": [
                903,
                1877,
                2760
            ],
            "percentage": [
                16,
                34,
                50
            ]
        },
        "room:team-54f08c37695aa1792d048a6a": {
            "answers": [
                6,
                12,
                14
            ],
            "percentage": [
                19,
                38,
                43
            ]
        },
        "room:male": {
            "answers": [
                779,
                1990,
                2640
            ],
            "percentage": [
                14,
                37,
                49
            ]
        },
        "room:team-54e50898c161867c571d238b": {
            "answers": [
                24,
                24,
                64
            ],
            "percentage": [
                21,
                21,
                58
            ]
        },
        "room:ESTADO_Divorciado": {
            "answers": [
                93,
                125,
                209
            ],
            "percentage": [
                22,
                29,
                49
            ]
        },
        "room:EDAD_31a41": {
            "answers": [
                446,
                996,
                1385
            ],
            "percentage": [
                16,
                35,
                49
            ]
        },
        "room:team-54e508dfc161867c571d252f": {
            "answers": [
                5,
                18,
                35
            ],
            "percentage": [
                9,
                31,
                60
            ]
        },
        "room:team-54e51242c161867c571d598e": {
            "answers": [
                28,
                37,
                51
            ],
            "percentage": [
                24,
                32,
                44
            ]
        },
        "room:TEST": {
            "answers": [
                1,
                0,
                0
            ],
            "percentage": [
                100,
                0,
                0
            ]
        },
        "room:gender_unknown": {
            "answers": [
                696,
                1605,
                2406
            ],
            "percentage": [
                15,
                34,
                51
            ]
        },
        "room:team-54efdb76695aa1792d031f6f": {
            "answers": [
                196,
                508,
                679
            ],
            "percentage": [
                14,
                37,
                49
            ]
        },
        "room:EDAD_21a30": {
            "answers": [
                433,
                1079,
                1622
            ],
            "percentage": [
                14,
                34,
                52
            ]
        },
        "room:ESTADO_SOLTERO": {
            "answers": [
                716,
                1805,
                2632
            ],
            "percentage": [
                14,
                35,
                51
            ]
        },
        "room:team-54e510e1c161867c571d51c1": {
            "answers": [
                26,
                36,
                69
            ],
            "percentage": [
                20,
                27,
                53
            ]
        },
        "room:team-54e511cac161867c571d572e": {
            "answers": [
                16,
                30,
                45
            ],
            "percentage": [
                18,
                33,
                49
            ]
        },
        "room:team-54e508d5c161867c571d24f7": {
            "answers": [
                11,
                14,
                19
            ],
            "percentage": [
                25,
                32,
                43
            ]
        },
        "room:team-54e51263c161867c571d5a60": {
            "answers": [
                20,
                34,
                56
            ],
            "percentage": [
                18,
                31,
                51
            ]
        },
        "room:EDAD_Menor18": {
            "answers": [
                80,
                191,
                265
            ],
            "percentage": [
                15,
                36,
                49
            ]
        },
        "room:EDAD_18a21": {
            "answers": [
                144,
                393,
                549
            ],
            "percentage": [
                13,
                36,
                51
            ]
        },
        "room:team-54e51211c161867c571d5898": {
            "answers": [
                14,
                19,
                29
            ],
            "percentage": [
                23,
                31,
                46
            ]
        },
        "room:team-54e514dcc161867c571d661f": {
            "answers": [
                10,
                14,
                19
            ],
            "percentage": [
                23,
                33,
                44
            ]
        },
        "room:EDAD_62a100": {
            "answers": [
                19,
                18,
                40
            ],
            "percentage": [
                25,
                23,
                52
            ]
        },
        "room:team-54e515f3c161867c571d6b74": {
            "answers": [
                12,
                22,
                40
            ],
            "percentage": [
                16,
                30,
                54
            ]
        },
        "room:team-54e50a13c161867c571d2a8f": {
            "answers": [
                22,
                52,
                67
            ],
            "percentage": [
                16,
                37,
                47
            ]
        },
        "room:team-54e51535c161867c571d67ae": {
            "answers": [
                12,
                33,
                52
            ],
            "percentage": [
                12,
                34,
                54
            ]
        },
        "room:team-54e50b83c161867c571d30b8": {
            "answers": [
                34,
                57,
                126
            ],
            "percentage": [
                16,
                26,
                58
            ]
        },
        "room:EDAD_52a61": {
            "answers": [
                83,
                87,
                173
            ],
            "percentage": [
                24,
                25,
                51
            ]
        },
        "room:twitter": {
            "answers": [
                211,
                464,
                690
            ],
            "percentage": [
                15,
                34,
                51
            ]
        },
        "room:team-54e50ae3c161867c571d2d89": {
            "answers": [
                115,
                229,
                361
            ],
            "percentage": [
                16,
                32,
                52
            ]
        },
        "room:team-54edd3ccae68deec0505f7ba": {
            "answers": [
                18,
                32,
                52
            ],
            "percentage": [
                18,
                31,
                51
            ]
        },
        "room:team-54e48b913a718e04031c082c": {
            "answers": [
                50,
                93,
                145
            ],
            "percentage": [
                17,
                32,
                51
            ]
        },
        "room:team-54d8feffbb1ab4cf14000a24": {
            "answers": [
                448,
                1069,
                1504
            ],
            "percentage": [
                15,
                35,
                50
            ]
        },
        "room:team-54e5114dc161867c571d5474": {
            "answers": [
                9,
                19,
                35
            ],
            "percentage": [
                14,
                30,
                56
            ]
        },
        "room:ESTADO_Viudo": {
            "answers": [
                22,
                16,
                27
            ],
            "percentage": [
                34,
                25,
                41
            ]
        },
        "room:team-54d90006bb1ab4cf14000b68": {
            "answers": [
                143,
                333,
                466
            ],
            "percentage": [
                15,
                35,
                50
            ]
        },
        "room:team-54edd323ae68deec0505f63c": {
            "answers": [
                3,
                0,
                2
            ],
            "percentage": [
                60,
                0,
                40
            ]
        },
        "room:ESTADO_CASADO": {
            "answers": [
                391,
                681,
                1016
            ],
            "percentage": [
                19,
                33,
                48
            ]
        },
        "room:team-54e51438c161867c571d63b0": {
            "answers": [
                9,
                21,
                32
            ],
            "percentage": [
                15,
                34,
                51
            ]
        },
        "room:anonymous": {
            "answers": [
                472,
                1034,
                1575
            ],
            "percentage": [
                15,
                34,
                51
            ]
        },
        "room:EDAD_42a51": {
            "answers": [
                216,
                308,
                547
            ],
            "percentage": [
                20,
                29,
                51
            ]
        }
    },
    "result": "showResults",
    "historyId": "54f7434ae9d519421900984f",
    "time": 1425490762967
  };


  $(document).ready(function() {
    // get Teams and render poll
    $.ajax({
      url: apiHost + "/atcodes/" + atcode + "/teams/",
      success: function (data) {
          if (data.hasOwnProperty("teams")) {
              teamsData = data.teams;
          }

          //showPollResults2(results);
          console.log(results);
          showPollResults(results);
          //createChart(results);
      },
      error: function (err) {
          alert("Atcode teams error.\n");
      }
    });
  });






})();


