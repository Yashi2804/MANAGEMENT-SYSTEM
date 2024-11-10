// Initialize Pie Chart for Task Distribution
const ctxPie = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(ctxPie, {
  type: 'pie',
  data: {
    labels: ['Inventory', 'Cleaning', 'Packing'],
    datasets: [{
      label: 'Tasks Distribution',
      data: [30, 20, 20],
      backgroundColor: ['#52B2BF', '#2832c2', '#0A1172'],
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

// Initialize Bar Chart for Task Completion Progress
const ctxBar = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(ctxBar, {
  type: 'bar',
  data: {
    labels: ['Inventory', ' Equipment Cleaning', 'Packing'],
    datasets: [{
      label: 'Tasks Completed',
      data: [20, 15, 25],
      backgroundColor: ['#52B2BF', '#2832c2', '#0A1172']
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
        beginAtZero: true,
        max: 30
      }
    }
  }
});

// Function to update task status
function updateTask(event) {
  event.preventDefault();
  const task = document.getElementById('taskSelect').value;
  const status = document.getElementById('statusSelect').value;
  alert('Task: ${task}, Status: ${status} updated successfully!');
}

// Logout function
function logout() {
  alert("You have been logged out.");
}
// JavaScript for managing labour details

let labourData = [];
let sno = 1;
// Function to add labor details to the table
function addLabor(event) {
  event.preventDefault();

  // Get input values
  const name = document.getElementById('name').value;
  const designation = document.getElementById('designation').value;
  const work = document.getElementById('work').value;
  const status = document.getElementById('status').value;
  const date = document.getElementById('date').value;

  // Add new labor to the laborData array
  laborData.push({ sno, name, designation, work, status, date });

  // Add row to the table
  const table = document.getElementById('laborTable').getElementsByTagName('tbody')[0];
  const newRow = table.insertRow();
  newRow.innerHTML = `
    <td>${sno}</td>
    <td>${name}</td>
    <td>${designation}</td>
    <td>${work}</td>
    <td>${status}</td>
    <td>${date}</td>
    <td><button onclick="deleteRow(${sno})">Delete</button></td>
  `;

  // Increment serial number
  sno++;

  // Reset form
  document.getElementById('addLaborForm').reset();
}

// Function to delete a labor entry
function deleteRow(sno) {
  // Find row index in the table and delete it
  const table = document.getElementById('laborTable').getElementsByTagName('tbody')[0];
  const rows = table.getElementsByTagName('tr');
  for (let i = 0; i < rows.length; i++) {
    if (rows[i].cells[0].innerText == sno) {
      table.deleteRow(i);
      break;
    }
  }

  // Remove from laborData array
  laborData = laborData.filter(labor => labor.sno !== sno);
}

// Bind form submission
document.getElementById('addLaborForm').addEventListener('submit', addLabor);