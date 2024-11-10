// Data management
let laborData = [];
let sno = 1;

// Function to add labor details to the table
function addLabor(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const area = document.getElementById('area').value;
  const designation = document.getElementById('designation').value;
  const work = document.getElementById('work').value;
  const status = document.getElementById('status').value;
  const inTime = document.getElementById('inTime').value;
  const outTime = document.getElementById('outTime').value;

  laborData.push({ sno, name, area, designation, work, status, inTime, outTime });

  const table = document.getElementById('laborTable').getElementsByTagName('tbody')[0];
  const newRow = table.insertRow();
  newRow.innerHTML = `
    <td>${sno}</td>
    <td>${name}</td>
    <td>${area}</td>
    <td>${designation}</td>
    <td>${work}</td>
    <td>${status}</td>
    <td>${inTime}</td>
    <td>${outTime}</td>
    <td><button onclick="deleteRow(${sno})">Delete</button></td>
  `;

  sno++;
  document.getElementById('addLaborForm').reset();
}

// Function to delete a labor entry
function deleteRow(sno) {
  const table = document.getElementById('laborTable').getElementsByTagName('tbody')[0];
  const rows = table.getElementsByTagName('tr');
  for (let i = 0; i < rows.length; i++) {
    if (rows[i].cells[0].innerText == sno) {
      table.deleteRow(i);
      break;
    }
  }
  laborData = laborData.filter(labor => labor.sno !== sno);
}

// Chart initialization
function initCharts() {
  const ctx1 = document.getElementById('pieChart1').getContext('2d');
  const ctx2 = document.getElementById('pieChart2').getContext('2d');

  // Pie chart for Tasks Distribution
  new Chart(ctx1, {
    type: 'pie',
    data: {
      labels: ['Inventory Sorting', 'Equipment Cleaning', 'Packing Orders'],
      datasets: [{
        data: [30, 45, 25],
        backgroundColor: ['#023047', '#0583D2', '#B8E3FF'],
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
        }
      }
    }
  });

  // Pie chart for Area-Wise Labour Distribution
  new Chart(ctx2, {
    type: 'pie',
    data: {
      labels: ['Noida', 'Delhi', 'Greater Noida'],
      datasets: [{
        data: [20, 35, 45],
        backgroundColor: ['#CD5E77', '#FB9AAC', '#86003C'],
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
        }
      }
    }
  });
}

// Initialize charts on page load
window.onload = initCharts;

// Form submission
document.getElementById('addLaborForm').addEventListener('submit', addLabor);