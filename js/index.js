"use strick";
function validateForm() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let notRobot = document.getElementById("notRobot").checked;

  if (name.trim() === "") {
    alert("Будь ласка, введіть своє ім'я");
    return false;
  }

  let phoneRegex = /^\+?3?8?(0\d{9})$/;
  if (!phone.match(phoneRegex)) {
    alert("Будь ласка, введіть коректний номер телефону");
    return false;
  }

  if (!notRobot) {
    alert("Будь ласка, підтвердіть, що ви не робот");
    return false;
  }
  Swal.fire({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success",
  });
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("notRobot").checked = false;
  return false;
}
