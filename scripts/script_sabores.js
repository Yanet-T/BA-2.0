


/// El codigo para que funcione
let selectedSabor;
let visibleSabor = 0;

function selectSabor(Sabor) {
    selectedSabor = Sabor;
}

function placeEmogi(text) {
    if (selectedSabor) 
    {
        const ballElement = document.getElementById(`ball${selectedSabor}`);
        ballElement.textContent = text;
        ballElement.style.visibility = 'visible';
        selectedSabor = null;
        visibleSabor++;
    } else {
        alert('Elige la posicion primero antes que el sabor');
    }

    if (visibleSabor === 10) {
        const buttons = document.getElementsByClassName('buttons')[0];
        buttons.style.display = 'none';
    }
}

// Mensaje explicativo
function showAlert() {
    alert("¡Hola! Elige tus sabores favoritos. Si tienes algún problema con los emojis, usa las 3 últimas opciones, aparecen como letras.");
}