window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("logo_principal").style.height = "40px";
    document.getElementById("btn_menu").style.padding = "0px 12px";
    document.getElementById("header").classList.add("shadow");
    document.getElementById("logo_principal").style.marginTop = "0px";
  } else {
    document.getElementById("logo_principal").style.height = "60px";
    document.getElementById("btn_menu").style.padding = "9px 12px";
    document.getElementById("header").classList.remove("shadow");

    if (screen.width < 480) {
      if (screen.width < 390) {
        document.getElementById("logo_principal").style.marginTop = "10px";
      }else{
        document.getElementById("logo_principal").style.marginTop = "10px";
      }
    }
  }
}


function changeSource1() {
  document.getElementById('videoStream').src = "https://www.youtube.com/embed/ScKiRyJv8cQ?si=-PK10vQ6GFrk8JWP";
  document.getElementById('videoSource').setAttribute('onclick','changeSource2()')

  document.getElementById('videoNombre').innerHTML = "Day 2 Live Stream";
  document.getElementById('videoDesc').innerHTML = "Safe System - English";

  document.getElementById('videoTitulo').innerHTML = "Day 1 - Road Safety Policies";

  document.getElementById('videoSource2').setAttribute('onclick','changeSource3()')
  document.getElementById('videoNombre2').innerHTML = "Backup Live Stream";
  document.getElementById('videoDesc2').innerHTML = "Open this one if the main one is not working";
}

function changeSource2() {
  document.getElementById('videoStream').src = "https://www.youtube.com/embed/amlzUUJCayQ?si=FyqvoHA6vbxI5yns";
  document.getElementById('videoSource').setAttribute('onclick','changeSource1()')

  document.getElementById('videoNombre').innerHTML = "Day 1 Live Stream";
  document.getElementById('videoDesc').innerHTML = "Road Safety Policies - English";

  document.getElementById('videoTitulo').innerHTML = "Day 2 - Safe System";

  document.getElementById('videoSource2').setAttribute('onclick','changeSource3()')
  document.getElementById('videoNombre2').innerHTML = "Backup Live Stream";
  document.getElementById('videoDesc2').innerHTML = "Open this one if the main one is not working";
}

function changeSource3() {
  document.getElementById('videoStream').src = "https://www.youtube.com/embed/zsWbE3hFLh8?si=0tewHGSbJuc9tbgb";
  
  document.getElementById('videoSource').setAttribute('onclick','changeSource1()')

  document.getElementById('videoNombre').innerHTML = "Day 1 Live Stream";
  document.getElementById('videoDesc').innerHTML = "Road Safety Policies - English";

  document.getElementById('videoTitulo').innerHTML = "Backup Live Stream";

  document.getElementById('videoSource2').setAttribute('onclick','changeSource2()')
  document.getElementById('videoNombre2').innerHTML = "Day 2 Live Stream";
  document.getElementById('videoDesc2').innerHTML = "Safe System - English";
}


/*--- español ---*/

function cambiarFuente1() {
  document.getElementById('videoStream').src = "https://www.youtube.com/embed/ihhFONHcxzs?si=C1x10snxSlZGbtki";
  document.getElementById('videoSource').setAttribute('onclick','cambiarFuente2()')

  document.getElementById('videoNombre').innerHTML = "Día 2, Transmisión en Directo";
  document.getElementById('videoDesc').innerHTML = "Sistema Seguro - Castellano";

  document.getElementById('videoTitulo').innerHTML = "Día 1 - Políticas de Seguridad Vial";

  document.getElementById('videoSource2').setAttribute('onclick','cambiarFuente3()')
  document.getElementById('videoNombre2').innerHTML = "Transmisión de Respaldo";
  document.getElementById('videoDesc2').innerHTML = "Abre esta si la principal no está en funcionamiento";
}

function cambiarFuente2() {
  document.getElementById('videoStream').src = "https://www.youtube.com/embed/WlzZo2ZRPjw?si=ozW3RtLLZaHEeYBm";
  document.getElementById('videoSource').setAttribute('onclick','cambiarFuente1()')

  document.getElementById('videoNombre').innerHTML = "Día 1, Transmisión en Directo";
  document.getElementById('videoDesc').innerHTML = "Políticas de Seguridad Vial - Castellano";

  document.getElementById('videoTitulo').innerHTML = "Día 2 - Sistema Seguro";

  document.getElementById('videoSource2').setAttribute('onclick','cambiarFuente3()')
  document.getElementById('videoNombre2').innerHTML = "Transmisión de Respaldo";
  document.getElementById('videoDesc2').innerHTML = "Abre esta si la principal no está en funcionamiento";
}

function cambiarFuente3() {
  document.getElementById('videoStream').src = "https://www.youtube.com/embed/3kCuA76Him4?si=lYQa6ECC2c7X0OcP";
  
  document.getElementById('videoSource').setAttribute('onclick','cambiarFuente1()')

  document.getElementById('videoNombre').innerHTML = "Día 1, Transmisión en Directo";
  document.getElementById('videoDesc').innerHTML = "Políticas de Seguridad Vial - Castellano";

  document.getElementById('videoTitulo').innerHTML = "Transmisión de Respaldo";

  document.getElementById('videoSource2').setAttribute('onclick','cambiarFuente2()')
  document.getElementById('videoNombre2').innerHTML = "Día 2, Transmisión en Directo";
  document.getElementById('videoDesc2').innerHTML = "Safe System - Castellano";
}