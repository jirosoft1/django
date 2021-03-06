'use strict';
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
    // pageview and prod sale start
    var chart = AmCharts.makeChart("product-sales-chart", {
        "type": "serial",
        "theme": "light",
        "dataDateFormat": "YYYY-MM-DD",
        "precision": 2,
        "valueAxes": [{
            "id": "v1",
            "title": "Sales",
            "position": "left",
            "autoGridCount": false,
            "labelFunction": function(value) {
                return "$" + Math.round(value) + "M";
            }
        }, {
            "id": "v2",
            "gridAlpha": 0.1,
            "autoGridCount": false
        }],
        "graphs": [{
            "id": "g1",
            "valueAxis": "v2",
            "lineThickness": 0,
            "fillAlphas": 0.9,
            "lineColor": "#448aff",
            "type": "smoothedLine",
            "title": "Laptop",
            "useLineColorForBulletBorder": true,
            "valueField": "market1",
            "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
        }, {
            "id": "g2",
            "valueAxis": "v2",
            "fillAlphas": 0.9,
            "bulletColor": "#ff5252",
            "lineThickness": 0,
            "lineColor": "#ff5252",
            "type": "smoothedLine",
            "title": "TV",
            "useLineColorForBulletBorder": true,
            "valueField": "market2",
            "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
        }, {
            "id": "g3",
            "valueAxis": "v2",
            "fillAlphas": 0.9,
            "bulletColor": "#11c15b",
            "lineThickness": 0,
            "lineColor": "#11c15b",
            "type": "smoothedLine",
            "title": "Mobile",
            "useLineColorForBulletBorder": true,
            "valueField": "sales1",
            "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
        }],
        "chartCursor": {
            "pan": true,
            "valueLineEnabled": true,
            "valueLineBalloonEnabled": true,
            "cursorAlpha": 0,
            "valueLineAlpha": 0.2
        },
        "categoryField": "date",
        "categoryAxis": {
            "parseDates": true,
            "gridAlpha": 0,
            "minorGridEnabled": true
        },
        "legend": {
            "position": "top",
        },
        "balloon": {
            "borderThickness": 1,
            "shadowAlpha": 0
        },
        "export": {
            "enabled": true
        },
        "dataProvider": [{
            "date": "2013-01-01",
            "market1": 0,
            "market2": 0,
            "sales1": 0
        }, {
            "date": "2013-02-01",
            "market1": 0,
            "market2": 0,
            "sales1": 40
        }, {
            "date": "2013-03-01",
            "market1": 0,
            "market2": 0,
            "sales1": 0
        }, {
            "date": "2013-04-01",
            "market1": 30,
            "market2": 0,
            "sales1": 0
        }, {
            "date": "2013-05-01",
            "market1": 0,
            "market2": 20,
            "sales1": 0
        }, {
            "date": "2013-06-01",
            "market1": 25,
            "market2": 0,
            "sales1": 0
        }, {
            "date": "2013-07-01",
            "market1": 0,
            "market2": 0,
            "sales1": 0
        }, {
            "date": "2013-08-01",
            "market1": 0,
            "market2": 0,
            "sales1": 30
        }, {
            "date": "2013-09-01",
            "market1": 0,
            "market2": 0,
            "sales1": 0
        }, {
            "date": "2013-10-01",
            "market1": 0,
            "market2": 50,
            "sales1": 0
        }, {
            "date": "2013-11-01",
            "market1": 0,
            "market2": 0,
            "sales1": 65
        }, {
            "date": "2013-12-01",
            "market1": 0,
            "market2": 0,
            "sales1": 0
        }]
    });
    // pageview and prod sale end

    floatchart()
    $(window).on('resize', function() {
        floatchart();
    });
    $('#mobile-collapse').on('click', function() {
        setTimeout(function() {
            floatchart();
        }, 700);
    });
});

function floatchart() {
    $(function() {
        //flot options
        var options = {
            legend: {
                show: false
            },
            series: {
                label: "",
                curvedLines: {
                    active: true,
                    nrSplinePoints: 20
                },
            },
            tooltip: {
                show: true,
                content: "x : %x | y : %y"
            },
            grid: {
                hoverable: true,
                borderWidth: 0,
                labelMargin: 0,
                axisMargin: 0,
                minBorderMargin: 0,
            },
            yaxis: {
                min: 0,
                max: 30,
                color: 'transparent',
                font: {
                    size: 0,
                }
            },
            xaxis: {
                color: 'transparent',
                font: {
                    size: 0,
                }
            }
        };
        //  sale chart chart
        $.plot($("#sale-chart1"), [{
            data: [
                [0, 18],
                [20, 10],
                [35, 20],
                [50, 10],
                [65, 27],
                [75, 15],
                [90, 20],
            ],
            color: "#fff",
            lines: {
                show: true,
                fill: false,
                lineWidth: 3
            },
            points: {
                show: false
            },
            curvedLines: {
                apply: true,
            }
        }], options);
        $.plot($("#sale-chart2"), [{
            data: [
                [0, 18],
                [20, 10],
                [35, 20],
                [50, 10],
                [65, 27],
                [75, 15],
                [90, 20],
            ],
            color: "#fff",
            lines: {
                show: true,
                fill: false,
                lineWidth: 3
            },
            points: {
                show: false
            },
            curvedLines: {
                apply: true,
            }
        }], options);
        // sale-report start
        $.plot($("#sale-report-1"), [{
            data: [
                [0, 2],
                [1, 20],
                [2, 10],
                [3, 27],
                [4, 10],
                [5, 20],
                [6, 15],
                [7, 24],
                [8, 16],
                [9, 20],
                [10, 10],
                [11, 18],
                [12, 20],
                [13, 10],
                [14, 5],
            ],
            color: "#448aff",
            bars: {
                show: true,
                lineWidth: 1,
                fill: true,
                fillColor: {
                    colors: [{
                        opacity: 1
                    }, {
                        opacity: 1
                    }]
                },
                barWidth: 0.5,
                align: 'center',
                horizontal: false
            },
            points: {
                show: false
            },
        }], options);
        $.plot($("#sale-report-2"), [{
            data: [
                [0, 2],
                [1, 10],
                [2, 20],
                [3, 10],
                [4, 27],
                [5, 15],
                [6, 20],
                [7, 24],
                [8, 20],
                [9, 16],
                [10, 18],
                [11, 10],
                [12, 20],
                [13, 10],
                [14, 5],
            ],
            color: "#11c15b",
            bars: {
                show: true,
                lineWidth: 1,
                fill: true,
                fillColor: {
                    colors: [{
                        opacity: 1
                    }, {
                        opacity: 1
                    }]
                },
                barWidth: 0.5,
                align: 'center',
                horizontal: false
            },
            points: {
                show: false
            },
        }], options);
        $.plot($("#sale-report-3"), [{
            data: [
                [0, 2],
                [1, 20],
                [2, 10],
                [3, 27],
                [4, 10],
                [5, 20],
                [6, 15],
                [7, 24],
                [8, 16],
                [9, 20],
                [10, 10],
                [11, 18],
                [12, 20],
                [13, 10],
                [14, 5],
            ],
            color: "#ff5252",
            bars: {
                show: true,
                lineWidth: 1,
                fill: true,
                fillColor: {
                    colors: [{
                        opacity: 1
                    }, {
                        opacity: 1
                    }]
                },
                barWidth: 0.5,
                align: 'center',
                horizontal: false
            },
            points: {
                show: false
            },
        }], options);
        $.plot($("#sale-report-4"), [{
            data: [
                [0, 2],
                [1, 10],
                [2, 20],
                [3, 10],
                [4, 27],
                [5, 15],
                [6, 20],
                [7, 24],
                [8, 20],
                [9, 16],
                [10, 18],
                [11, 10],
                [12, 20],
                [13, 10],
                [14, 5],
            ],
            color: "#536dfe",
            bars: {
                show: true,
                lineWidth: 1,
                fill: true,
                fillColor: {
                    colors: [{
                        opacity: 1
                    }, {
                        opacity: 1
                    }]
                },
                barWidth: 0.5,
                align: 'center',
                horizontal: false
            },
            points: {
                show: false
            },
        }], options);

    });
}
