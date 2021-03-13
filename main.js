/*global window, document, location*/

var superior, inicio, servicios, contacto;
var btInicio, btServicios, btContacto, btFacebook, btWhatsapp;
var seccion = 1;

window.onload = ventanaCargada;

function ventanaCargada() {
    //console.log('ventanaCargada()');

    // instanciar secciones
    superior = document.getElementById('idSuperior');
    inicio = document.getElementById('idInicio');
    servicios = document.getElementById('idServicios');
    contacto = document.getElementById('idContacto');

    // ocultar todas las secciones excepto 'superior'
    inicio.setAttribute('style', 'display: none');
    servicios.setAttribute('style', 'display: none');
    contacto.setAttribute('style', 'display: none');

    // instanciar botones del menu
    btInicio = document.getElementById('btInicio');
    btServicios = document.getElementById('btServicios');
    btContacto = document.getElementById('btContacto');
    
    // instanciar los botones de Facebook y Whatsapp
    btFacebook = document.getElementById('idFacebook');
    btWhatsapp = document.getElementById('idWhatsapp');

    // agregar funciones al evento click de cada boton
    btInicio.onclick = btInicioClick;
    btServicios.onclick = btServiciosClick;
    btContacto.onclick = btContactoClick;
    //setTimeout(btInicioClick, 3000);
    btInicioClick(); // iniciar con click en Inicio
}

function btInicioClick() {
    //console.log('btInicioClick()');
    cambiarSeccion(1);   
}

function btServiciosClick() {
    //console.log('btServiciosClick()');
    cambiarSeccion(2);
}

function btContactoClick() {
    //console.log('btContactoClick()');
    cambiarSeccion(3);
}

function cambiarSeccion(actual) {
    // ocultar los botones Facebook y Whatsapp mientras se desliza la cortina negra
    btFacebook.style.display = 'none';
    btWhatsapp.style.display = 'none';
    
    location.href = '#'; /* 1ro ir al tope */
    superior.setAttribute('style', 'height: 100vh'); // 100% de la altura de lo que se muestra en pantalla
    switch (seccion) {
        case 1:
            btInicio.setAttribute('style', ''); // restaura valores originales y conserva el :hover
            inicio.style.display = 'none';
            break;
        case 2:
            btServicios.setAttribute('style', '');
            servicios.style.display = 'none';
            break;
        case 3:
            btContacto.setAttribute('style', '');
            contacto.style.display = 'none';
            break;
    }
    seccion = actual;
    
    // pintar el boton y mostrar la seccion actual 
    switch (seccion) {
        case 1:
            btInicio.style.backgroundColor = 'darkblue';
            inicio.style.display = 'block';
            break;
        case 2:
            btServicios.style.backgroundColor = 'darkblue';
            servicios.style.display = 'block';
            break;
        case 3:
            btContacto.style.backgroundColor = 'darkblue';
            contacto.style.display = 'block';
            // aqui no tiene case el break
    }
    
    // tiempo para que logre subir suavemente la seccion
    window.setTimeout(function () {
        document.getElementsByTagName('html')[0].setAttribute('style', 'scroll-behavior: smooth'); // desplazamiento suave
        
        switch (seccion) {
            case 1:
                location.href = '#idInicio';
                break;
            case 2:
                location.href = '#idServicios';
                break;
            case 3:
                location.href = '#idContacto';
                break;
        }
        document.getElementsByTagName('html')[0].setAttribute('style', 'scroll-behavior: none'); // restaurar desplazamiento instantaneo
        
        window.setTimeout(function () {
            superior.setAttribute('style', 'height: 0');
            location.href = '#'; // volver a apuntar al tope para que no se oculte el titulo de la seccion
            
            // volver a mostrar los botones de Facebook y Whatsapp
            btFacebook.style.display = 'block';
            btWhatsapp.style.display = 'block';
        }, 1000);
    }, 1000); 
}