'use strict';

$(document).ready(function() {
        // floatchart start
        floatchart()
        // floatchart end
    });

// floatchart start
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


// value statustic start
$.plot($("#total-value-graph-1"), [{
    data: [
        [0, 20],
        [20, 10],
        [35, 18],
        [50, 12],
        [65, 25],
        [75, 10],
        [90, 20],
    ],
    color: "#fff",
    lines: {
        show: true,
        fill: true,
        lineWidth: 3
    },
    points: {
        show: false
    },
    //curve the line  (old pre 1.0.0 plotting function)
    curvedLines: {
        apply: true,
    }
}], options);
$.plot($("#total-value-graph-2"), [{
    data: [
        [0, 10],
        [20, 20],
        [35, 18],
        [50, 25],
        [65, 12],
        [75, 10],
        [90, 20],
    ],
    color: "#fff",
    lines: {
        show: true,
        fill: true,
        lineWidth: 3
    },
    points: {
        show: false
    },
    //curve the line  (old pre 1.0.0 plotting function)
    curvedLines: {
        apply: true,
    }
}], options);
$.plot($("#total-value-graph-3"), [{
    data: [
        [0, 20],
        [20, 10],
        [35, 25],
        [50, 18],
        [65, 18],
        [75, 10],
        [90, 12],
    ],
    color: "#fff",
    lines: {
        show: true,
        fill: true,
        lineWidth: 3
    },
    points: {
        show: false
    },
    //curve the line  (old pre 1.0.0 plotting function)
    curvedLines: {
        apply: true,
    }
}], options);
$.plot($("#total-value-graph-4"), [{
    data: [
        [0, 18],
        [20, 10],
        [35, 20],
        [50, 10],
        [65, 12],
        [75, 25],
        [90, 20],
    ],
    color: "#fff",
    lines: {
        show: true,
        fill: true,
        lineWidth: 3
    },
    points: {
        show: false
    },
    //curve the line  (old pre 1.0.0 plotting function)
    curvedLines: {
        apply: true,
    }
}], options);


});
}
// floatchart end
