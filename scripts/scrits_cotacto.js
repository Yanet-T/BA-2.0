function saludo() {
    var nombre = prompt("Ingresa tu nombre:");
    if (nombre) {
      var saludo = "¡Hola, Como estas?" + nombre + "!";
      alert(saludo);
  
      var saludoElement = document.createElement("div");
      saludoElement.innerHTML = saludo;
      saludoElement.classList.add("saludo");
  
      var container = document.querySelector(".container");
      container.appendChild(saludoElement);
    }
  }