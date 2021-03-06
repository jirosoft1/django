'use strict';
$(document).ready(function() {
    $(function() {
        var chartData = generateChartData();
        var chart1 = AmCharts.makeChart("sales-analytics", {
            "type": "serial",
            "theme": "light",
            "marginRight": 0,
            "dataProvider": chartData,
            "valueAxes": [{
                "position": "left",
                "title": "Unique visitors"
            }],
            "graphs": [{
                "id": "g1",
                "fillAlphas": 0.0,
                "lineColor": "#4fc3f7",
                "lineThickness": 3,
                "negativeLineColor": "#4fc3f7",
                "type": "smoothedLine",
                "valueField": "visits",
                "balloonText": "<div style='margin:5px; font-size:19px;'>Visits:<b>[[value]]</b></div>"
            }],
            "chartScrollbar": {
                "graph": "g1",
                "scrollbarHeight": 50,
                "backgroundAlpha": 0,
                "selectedBackgroundAlpha": 0.1,
                "selectedBackgroundColor": "#888888",
                "graphFillAlpha": 0,
                "graphLineAlpha": 0.5,
                "selectedGraphFillAlpha": 0,
                "selectedGraphLineAlpha": 1,
                "autoGridCount": true,
                "color": "#AAAAAA"
            },
            "chartCursor": {
                "categoryBalloonDateFormat": "JJ:NN, DD MMMM",
                "cursorPosition": "mouse"
            },
            "categoryField": "date",
            "categoryAxis": {
                "minPeriod": "mm",
                "parseDates": true
            },
            "export": {
                "enabled": true,
                "dateFormat": "YYYY-MM-DD HH:NN:SS"
            }
        });
        function generateChartData() {
            var chartData = [];
            var firstDate = new Date();
            firstDate.setMinutes(firstDate.getDate() - 1000);
            var visits = 100;
            for (var i = 0; i < 100; i++) {
                var newDate = new Date(firstDate);
                newDate.setMinutes(newDate.getMinutes() + i);
                visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
                chartData.push({
                    date: newDate,
                    visits: visits
                });
            }
            return chartData;
        }
        setTimeout(function() {
            chart1.zoomToIndexes(chartData.length - 50, chartData.length - 40);
        }, 800);
        // project and visite start
        var chart = AmCharts.makeChart("proj-earning", {
            "type": "serial",
            "theme": "light",
            "dataProvider": [{
                "type": "UI",
                "visits": 10
            }, {
                "type": "UX",
                "visits": 15
            }, {
                "type": "Web",
                "visits": 12
            }, {
                "type": "App",
                "visits": 16
            }, {
                "type": "SEO",
                "visits": 8
            }],
            "valueAxes": [{
                "gridAlpha": 0.3,
                "gridColor": "#fff",
                "axisColor": "transparent",
                "color": '#fff',
                "dashLength": 0
            }],
            "gridAboveGraphs": true,
            "startDuration": 1,
            "graphs": [{
                "balloonText": "Active User: <b>[[value]]</b>",
                "fillAlphas": 1,
                "lineAlpha": 1,
                "lineColor": "#fff",
                "type": "column",
                "valueField": "visits",
                "columnWidth": 0.5
            }],
            "chartCursor": {
                "categoryBalloonEnabled": false,
                "cursorAlpha": 0,
                "zoomable": false
            },
            "categoryField": "type",
            "categoryAxis": {
                "gridPosition": "start",
                "gridAlpha": 0,
                "axesAlpha": 0,
                "lineAlpha": 0,
                "fontSize": 12,
                "color": '#fff',
                "tickLength": 0
            },
            "export": {
                "enabled": false
            }

        });
    });
});
