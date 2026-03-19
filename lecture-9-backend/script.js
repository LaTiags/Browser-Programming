function getMessage() {
  fetch("http://localhost:3000/api/message")
    .then(response => response.json())
    .then(data => {
      document.getElementById("output").innerText =
        data.message + " | Course: " + data.course + " | Year: " + data.year + " | Time: " + new Date(data.time).toLocaleString();
    })
    .catch(error => {
      document.getElementById("output").innerText = "Error: could not reach server.";
      console.error("Error:", error);
    });
}

function getStudent() {
  fetch("http://localhost:3000/api/student")
    .then(response => response.json())
    .then(data => {
      document.getElementById("student-output").innerText =
        "Name: " + data.name + " | Role: " + data.role;
    })
    .catch(error => {
      document.getElementById("student-output").innerText = "Error: could not reach server.";
      console.error("Error:", error);
    });
}