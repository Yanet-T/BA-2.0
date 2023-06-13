

//Codigo del menu
const toggle = document.querySelector('.toggle');
const direcciones = document.querySelector('.direcciones');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('rotate');
    direcciones.classList.toggle('active');
});


//este es el footer

function createFooter() {
    const footerHtml = `
      <footer>
        <div class="row">
          <div class="col-sm-6 col-md-6">
            <h3>Nuestros Datos</h3>
            <p>Dirección: Calle, Argentina </p>
            <p>Teléfono: 1234567890</p>
            <p>Email: yanet@gmail.com</p>
          </div>
  
          <div class="col-md-6">
            <h3 id="saludo">Gracias por visitar mi página</h3>
          </div>
        </div>
      </footer>
    `;
  
    const footerContainer = document.getElementById('footer-container');
    footerContainer.innerHTML = footerHtml;
  }
  