// charts.js

// Sample code for creating a dashboard with Chart.js

// Get the context of the canvas element we want to select
var ctx = document.getElementById('myChart').getContext('2d');

// Create a new chart instance
var myChart = new Chart(ctx, {
    type: 'bar', // Specify the type of chart (bar, line, pie, etc.)
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], // X-axis labels
        datasets: [{
            label: 'Data for 2026', // Label for the dataset
            data: [12, 19, 3, 5, 2, 3, 24], // Data points
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true // Start Y-axis from zero
            }
        }
    }
});

// Note: Ensure to include Chart.js in your HTML file
// <script src='https://cdn.jsdelivr.net/npm/chart.js'></script>
