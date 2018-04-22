var ctx1 = document.getElementById("myCardChart1").getContext('2d');
var ctx2 = document.getElementById("myCardChart2").getContext('2d');
var ctx3 = document.getElementById("myCardChart3").getContext('2d');
var ctx4 = document.getElementById("myCardChart4").getContext('2d');
var myChart = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ["", "", "", "", "", ""],
        datasets: [{
            label: '# of Votes',
            data: [19, 5, 3, 12, 15, 18],
            backgroundColor: [
                'rgba(255,99,132,0.0)',
                'rgba(255,99,132,0.0)',
                'rgba(255,99,132,0.0)',
                'rgba(255,99,132,0.0)',
                'rgba(255,99,132,0.0)',
                'rgba(255,99,132,0.0)'
                
            ],
            borderColor: [
                'rgba(249,167,68,1)',
                'rgba(249,167,68,1)',
                'rgba(249,167,68,1)',
                'rgba(249,167,68,1)',
                'rgba(249,167,68,1)',
                'rgba(249,167,68,1)'
                
            ],

        }]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    display:false
                },
                gridLines: {
                    color: "rgba(255,255,255,0.0)",
                    zeroLineColor: "rgba(254,254,254, 0.0)"
                }
            }],
            yAxes: [{
                ticks: {
                    display:false
                },
                gridLines: {
                    color: "rgba(255,255,255,0.0)",
                    zeroLineColor: "rgba(254,254,254, 0.0)"
                }
            }]
        },
        legend: {
            display:false,
            labels: {
                
            },
            title: {
                display: true,
                text: 'Custom Chart Title'
            },
        },
        layout: {
            padding: {
                left:0,
                right: 10,
                top: 0,
                bottom: 0
            }
        },
        tooltips:{
            enabled:false
        }
    }
});
var myChart = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ["", "", "", "", "", ""],
        datasets: [{
            label: '# of Votes',
            data: [12, 5, 3, 19, 21, 15],
            backgroundColor: [
                'rgba(255,99,132,0.0)',
                'rgba(255,99,132,0.0)',
                'rgba(255,99,132,0.0)',
                'rgba(255,99,132,0.0)',
                'rgba(255,99,132,0.0)',
                'rgba(255,99,132,0.0)'
                
            ],
            borderColor: [
                'rgba(28,29,29,1)',
                'rgba(28,29,29,1)',
                'rgba(28,29,29,1)',
                'rgba(28,29,29,1)',
                'rgba(28,29,29,1)',
                'rgba(28,29,29,1)'
                
            ],

        }]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    display:false
                },
                gridLines: {
                    color: "rgba(255,255,255,0.0)",
                    zeroLineColor: "rgba(254,254,254, 0.0)"
                }
            }],
            yAxes: [{
                ticks: {
                    display:false
                },
                gridLines: {
                    color: "rgba(255,255,255,0.0)",
                    zeroLineColor: "rgba(254,254,254, 0.0)"
                }
            }]
        },
        legend: {
            display:false,
            labels: {
                
            },
            title: {
                display: true,
                text: 'Custom Chart Title'
            },
        },
        layout: {
            padding: {
                left:0,
                right: 10,
                top: 0,
                bottom: 0
            }
        },
        tooltips:{
            enabled:false
        }
    }
});
var myChart = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ["", "", "", "", "", ""],
        datasets: [{
            label: '# of Votes',
            data: [2, 5, 3, 7, 19, 12],
            backgroundColor: [
                'rgba(255,99,132,0.0)',
                'rgba(255,99,132,0.0)',
                'rgba(255,99,132,0.0)',
                'rgba(255,99,132,0.0)',
                'rgba(255,99,132,0.0)',
                'rgba(255,99,132,0.0)'
                
            ],
            borderColor: [
                'rgba(8,150,207,1)',
                'rgba(8,150,207,1)',
                'rgba(8,150,207,1)',
                'rgba(8,150,207,1)',
                'rgba(8,150,207,1)',
                'rgba(8,150,207,1)'
                
            ],

        }]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    display:false
                },
                gridLines: {
                    color: "rgba(255,255,255,0.0)",
                    zeroLineColor: "rgba(254,254,254, 0.0)"
                }
            }],
            yAxes: [{
                ticks: {
                    display:false
                },
                gridLines: {
                    color: "rgba(255,255,255,0.0)",
                    zeroLineColor: "rgba(254,254,254, 0.0)"
                }
            }]
        },
        legend: {
            display:false,
            labels: {
                
            },
            title: {
                display: true,
                text: 'Custom Chart Title'
            },
        },
        layout: {
            padding: {
                left:0,
                right: 10,
                top: 0,
                bottom: 0
            }
        },
        tooltips:{
            enabled:false
        }
    }
});
var myChart = new Chart(ctx4, {
    type: 'line',
    data: {
        labels: ["", "", "", "", "", ""],
        datasets: [{
            label: '# of Votes',
            data: [12, 3, 9, 5, 19, 3],
            backgroundColor: [
                'rgba(255,99,132,0.0)',
                'rgba(255,99,132,0.0)',
                'rgba(255,99,132,0.0)',
                'rgba(255,99,132,0.0)',
                'rgba(255,99,132,0.0)',
                'rgba(255,99,132,0.0)'
                
            ],
            borderColor: [
                'rgba(116,188,42,1)',
                'rgba(116,188,42,1)',
                'rgba(116,188,42,1)',
                'rgba(116,188,42,1)',
                'rgba(116,188,42,1)',
                'rgba(116,188,42,1)'
                
            ],

        }]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    display:false
                },
                gridLines: {
                    color: "rgba(255,255,255,0.0)",
                    zeroLineColor: "rgba(254,254,254, 0.0)"
                }
            }],
            yAxes: [{
                ticks: {
                    display:false
                },
                gridLines: {
                    color: "rgba(255,255,255,0.0)",
                    zeroLineColor: "rgba(254,254,254, 0.0)"
                }
            }]
        },
        legend: {
            display:false,
            labels: {
                
            },
            title: {
                display: true,
                text: 'Custom Chart Title'
            },
        },
        layout: {
            padding: {
                left:0,
                right: 10,
                top: 0,
                bottom: 0
            }
        },
        tooltips:{
            enabled:false
        }
    }
});