(function(){

  const CHART = document.getElementById('dataEdad')
  let lineChart = new Chart(CHART, {
    type: 'line',
    data: {
            labels: ["Edad 18a21", "Edad 21a30", "Edad 31a41", "Edad 42a51", "Edad 52a61", "Edad 62a100", "Edad Menor18"],
            datasets: [
              {
                label: "Seguís con ella a pesar de todo",
                fill: false,
                lineTension: 0,
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
                data: [13.3, 13.8, 15.8, 20.2, 24.2, 24.7, 14.9],
                spanGaps: false,
              },
              {
                label: "La largás",
                fill: false,
                lineTension: 0.1,
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
                data: [36.2, 34.4, 35.2, 28.8, 25.4, 23.4, 35.6],
                spanGaps: false,
              },
              {
                label: "Lo hablás con tu amigo para que te apruebe la relación",
                fill: false,
                lineTension: 0.1,
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
                data: [50.6, 51.8, 49, 51.1, 50.4, 51.9, 49.4],
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


})();