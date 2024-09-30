
let formElement = document.querySelector(".form");
    formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      
      const username = document.getElementById("username").value;
      const senha = document.getElementById("senhaU").value;
  
      fetch("https://66fb27528583ac93b40b00bd.mockapi.io/usuarios", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
            if (!res.ok) {
                throw new Erro("Erro na requisição");
            }
            return res.json();
        })
        .then((data) => {
            const user = data.find(d => d.userName === username);

            if (user) {
                if (user.senha === senha) {
                    alert("Login feito com sucesso!");
                    window.location.href = "../index.html";
                } else {
                    alert("Senha incorreta!");
                }
            } else {
                alert("Usuário não encontrado!")
            }
        })
        .then(alert("Dados enviados com sucesso!"));
    });