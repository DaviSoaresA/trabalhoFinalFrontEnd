
    let formElement = document.querySelector(".form");
    formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(formElement);
      const data = Object.fromEntries(formData);
  
      fetch("https://66fb27528583ac93b40b00bd.mockapi.io/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .then(alert("Dados enviados com sucesso!"), window.location.href = "../pages/login.html");
    });


