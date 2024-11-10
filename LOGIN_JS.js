let currentRole = "";

function showForm(role) {
    const roleTitle = document.getElementById("role-title");
    currentRole = role;  // Set the current role based on button click

    if (role === "admin") {
        roleTitle.textContent = "Admin Login";
    } else if (role === "hr") {
        roleTitle.textContent = "Human Resource Login";
    } else if (role === "labour") {
        roleTitle.textContent = "Labour Login";
    } else if (role === "sales") {
        roleTitle.textContent = "Sales Manager Login";
    }
}

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        // Redirect to different dashboards based on currentRole
        if (currentRole === "admin") {
            window.location.href = "ADMIN_HTML.html";
        } else if (currentRole === "hr") {
            window.location.href = "HR_HTML.html";
        } else if (currentRole === "labour") {
            window.location.href = "LABOUR_HTML.html";
        } else if (currentRole === "sales") {
            window.location.href = "SALES_HTML.html";
        }
    } else {
        alert("Please enter both username and password.");
    }
}

function cancel() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}