// Define drawScatterChart so it’s available globally.
window.drawScatterChart = function (datasets) {
    var canvas = document.getElementById("myScatterChart");
    if (!canvas) {
        console.error("Canvas element 'myScatterChart' not found.");
        return;
    }
    var ctx = canvas.getContext("2d");
    // If a previous chart exists, destroy it.
    if (window.myScatterChart instanceof Chart) {
        window.myScatterChart.destroy();
    }
    window.myScatterChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: datasets
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    title: {
                        display: true,
                        text: 'Forecast Horizon (Days)'
                    },
                    ticks: { stepSize: 1 }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Accuracy (%)'
                    },
                    beginAtZero: true,
                    suggestedMax: 100
                }
            }
        }
    });
};

// Your existing drawLineChart function remains:
window.drawLineChart = function (datasets, labels) {
    var ctx = document.getElementById('trendChart').getContext('2d');
    if (window.myLineChart instanceof Chart) {
        window.myLineChart.destroy();
    }
    window.myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: datasets
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Date'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Value'
                    }
                }
            }
        }
    });
};
