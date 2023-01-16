function logout() {
    sessionStorage.removeItem("currentUser");
    exampleModal.style.display;
    window.location.href = "../login.html";

}
