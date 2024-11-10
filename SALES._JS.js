// Chart: Labour Distribution by Area (Pie Chart)
const areaPieCtx = document.getElementById('areaPieChart').getContext('2d');
new Chart(areaPieCtx, {
    type: 'pie',
    data: {
        labels: ['Noida', 'Delhi', 'Greater Noida'],
        datasets: [{
            data: [40, 30, 30],
            backgroundColor: ['#CD5E77', '#FB9AAC', '#86003C'],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            }
        }
    }
});

// Chart: Task Progress (Doughnut Chart)
const taskProgressCtx = document.getElementById('taskProgressChart').getContext('2d');
new Chart(taskProgressCtx, {
    type: 'doughnut',
    data: {
        labels: ['Completed', 'Pending'],
        datasets: [{
            data: [70, 30],
            backgroundColor: ['#8bc34a', '#e91e63'],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            }
        }
    }
});

// Chart: Labour In-time vs Out-time (Bar Chart)
const timeBarCtx = document.getElementById('timeBarChart').getContext('2d');
new Chart(timeBarCtx, {
    type: 'bar',
    data: {
        labels: ['Noida', 'Delhi', 'Greater Noida'],
        datasets: [
            {
                label: 'In-Time',
                data: [9, 10, 9],
                backgroundColor: '#3f51b5',
            },
            {
                label: 'Out-Time',
                data: [5, 6, 5],
                backgroundColor: '#ff9800',
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Area'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Time (Hour)'
                },
                beginAtZero: true
            }
        }
    }
});

// Logout button functionality
function logout() {
    alert("You have been logged out.");
}

// Edit labor function
function editLabor(name) {
    alert('Editing details for ${name}');
}