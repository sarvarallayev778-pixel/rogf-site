const TRUE_PASSWORD = "12345";

function checkPass() {
    let p = document.getElementById("secret").value;
    let error = document.getElementById("error");

    if (p === TRUE_PASSWORD) {
        window.location.href = "panel.html";
    } else {
        error.textContent = "Noto‘g‘ri parol!";
    }
}
