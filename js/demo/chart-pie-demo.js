// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var ctx2 = document.getElementById("barChart");
var doughnutChart = document.getElementById("doughnutChart");
var doughnutChartHealth = document.getElementById("doughnutChartHealth");
doughnutChartHealth
var pieChart3 = document.getElementById("pieChart3");
var pieChart4 = document.getElementById("pieChart4");
var pieChart5 = document.getElementById("pieChart5");
var pieChart6 = document.getElementById("pieChart6");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Direct", "Referral"],
    datasets: [{
      data: [55, 30],
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
var doughnutChart = new Chart(doughnutChart, {
  type: 'doughnut',
  data: {
    labels: ["Direct", "Referral", "Social", "Section4", "Section5"],
    datasets: [{
      data: [55, 30, 15, 10, 12],
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#4e73df', '#1cc88a'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
var doughnutChart = new Chart(doughnutChartHealth, {
  type: 'doughnut',
  data: {
    labels: ["Direct", "Referral",],
    datasets: [{
      data: [55, 30],
      backgroundColor: ['#4e73df', '#1cc88a'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
var xValues = ["Italy", "France", "Spain", "USA", "Argentina", "India"];
var yValues = [55, 54, 53, 52, 51, 50];

new Chart(ctx2, {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      label: 'My First Dataset',
      data: [55, 52, 53, 51, 50, 54, 40],
      backgroundColor: [
        'black',
        'black',
        'black',
        'black',
        'black',
        'black',
        'black',

      ]
    }]
  },
  options: {
    legend: { display: false },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          display: false //this will remove only the label
        }
      }],
      yAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          display: false //this will remove only the label
        }
      }]
    },
  }
});

var xValues = ["Italy", "France", "Spain", "USA", "Argentina", "BCD"];
var yValues = [10, 20, 10, 30, 10, 15, 5];
var clientValues = [25, 35, 40];

var yValue2 = [55];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145",
  "#b91d47"
];
var barColors2 = ['grey']
var elem = `pieChart3`
new Chart(elem, {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: false,
      text: "World Wide Wine Production 2018"
    },

    legend: {
      display: false
    }
  }
});

var elem = `pieChart4`
new Chart(elem, {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: clientValues
    }]
  },
  options: {
    title: {
      display: false,
      text: "World Wide Wine Production 2018"
    },

    legend: {
      display: false
    }
  }
});

var elem = `pieChart5`
new Chart(elem, {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: clientValues
    }]
  },
  options: {
    title: {
      display: false,
      text: "World Wide Wine Production 2018"
    },

    legend: {
      display: false
    }
  }
});
for (i = 6; i < 9; i++) {
  var elem = `pieChart` + i
  new Chart(elem, {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors2,
        data: yValue2
      }]
    },
    options: {
      title: {
        display: false,
        text: "World Wide Wine Production 2018"
      },

      legend: {
        display: false
      }
    }
  });
};

document.getElementById("myPieChart").onclick = function () {
  hideAllTables()
  document.getElementById("mainTable").style.display = "block"
}

document.getElementById("deployedChart").onclick = function () {
  hideAllTables()
  document.getElementById("deployed").style.display = "block"
}
function startSpinning() {
  var curentImage = document.getElementById("loadingImage").src
  console.log(curentImage)
  if (curentImage.indexOf("stop") > -1) {
    document.getElementById("loadingImage").setAttribute("src", "./img/loading.png")
  } else {
    document.getElementById("loadingImage").setAttribute("src", "./img/stop.png")

  }
}

function handleBarChart() {
  hideAllTables()

  document.getElementById("barTable").style.display = "block"
}

function handleDepIssues() {
  hideAllTables()

  document.getElementById("depIssuesTable").style.display = "block"
}

function handleClientHealth() {
  hideAllTables()

  document.getElementById("healthIssues").style.display = "block";

}

function handleClientIssues() {
  hideAllTables()
  document.getElementById("clientIssues").style.display = "block";

}

hideAllTables()
function hideAllTables() {
  var allTables = document.getElementsByClassName("datatable")
  if(allTables.length >0){
    for(i=0;i<allTables.length;i++){
      console.log(allTables[i])
      allTables[i].style.display="none"
    }
}
}