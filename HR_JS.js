// Attendance Chart (Pie)
const attendanceCtx = document.getElementById('attendanceChart').getContext('2d');
new Chart(attendanceCtx, {
    type: 'pie',
    data: {
        labels: ['Present', 'Absent'],
        datasets: [{
            label: 'Attendance',
            data: [85, 15],
            backgroundColor: ['#0063B2FF', '#9CC3D5FF'],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        }
    }
});

// Salary Chart (Bar)
const salaryCtx = document.getElementById('salaryChart').getContext('2d');
new Chart(salaryCtx, {
    type: 'bar',
    data: {
        labels: ['Aditi Gupta', 'Dhruv Sharma', 'Mayank Pandey' , 'Riya Kothari' , 'Yash Mathur'],
        datasets: [{
            label: 'Salary (₹)',
            data: [70000,90000,30000,40000,92000 ],
            backgroundColor: '#4a90e2'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Labour Tasks Chart (Line)
const taskCtx = document.getElementById('taskChart').getContext('2d');
new Chart(taskCtx, {
    type: 'line',
    data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
            label: 'Tasks Completed',
            data: [5, 7, 6, 8],
            fill: true,
            borderColor: '#4a90e2',
            backgroundColor: 'rgba(74, 144, 226, 0.2)'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        }
    }
});