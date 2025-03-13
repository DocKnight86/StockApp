window.drawScatterChart = function (datasets) {
    const ctx = document.getElementById("myScatterChart").getContext("2d");

    // Safely destroy old instance if it exists
    if (window.myScatterChart && typeof window.myScatterChart.destroy === "function") {
        window.myScatterChart.destroy();
    }

    // Create a new scatter chart
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
                    title: { display: true, text: 'Forecast Horizon (Days)' }
                },
                y: {
                    beginAtZero: true,
                    suggestedMax: 100,
                    title: { display: true, text: 'Accuracy (%)' }
                }
            }
        }
    });
};

window.drawLineChart = function (datasets, labels) {
    const ctx = document.getElementById("trendChart").getContext("2d");

    if (window.myLineChart && typeof window.myLineChart.destroy === "function") {
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
                x: { title: { display: true, text: 'Date' } },
                y: { title: { display: true, text: 'Value' } }
            }
        }
    });
};

window.drawBarChart = function (canvasId, chartData) {
    const ctx = document.getElementById(canvasId).getContext("2d");

    if (window.patternBarChart && typeof window.patternBarChart.destroy === "function") {
        window.patternBarChart.destroy();
    }

    window.patternBarChart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Chance of Next-Day Gain (%)'
                    }
                }
            }
        }
    });
};
