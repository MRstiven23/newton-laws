// Función principal para mostrar contenido dinámico según el botón presionado
function mostrarContenido(tipo) {
  // Selecciona el contenedor donde se mostrará la información
  const leyInfo = document.getElementById("ley-info");
  let contenido = "";

  // Selecciona el contenido a mostrar según el tipo recibido
  switch (tipo) {
    case "biografia":
      // Muestra la biografía de Isaac Newton
      contenido = `
        <h2>Biografía de Isaac Newton</h2>
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Sir_Isaac_Newton_%281642-1727%29.jpg" alt="Isaac Newton">
        <p>Isaac Newton nació el 4 de enero de 1643 en Woolsthorpe, Lincolnshire, Inglaterra. Fue un físico, matemático, astrónomo, alquimista y filósofo, considerado una de las mentes más brillantes de la historia de la ciencia.</p>
        <p>Estudió en la Universidad de Cambridge, donde desarrolló su pensamiento científico. Durante una epidemia de peste que obligó al cierre de la universidad en 1665, Newton regresó a su casa y vivió su periodo más productivo (conocido como su "annus mirabilis" o año milagroso). Allí, formuló las bases del cálculo, la ley de la gravitación universal y experimentó con la óptica.</p>
        <p>En 1687 publicó su obra más influyente, Philosophiæ Naturalis Principia Mathematica, donde estableció las leyes del movimiento y la gravitación. Más tarde, fue presidente de la Royal Society y director de la Casa de la Moneda de Inglaterra. Murió el 31 de marzo de 1727 en Londres y fue enterrado con honores en la Abadía de Westminster.</p>
        <h3>Aportes destacados</h3>
        <p>Leyes del movimiento: Tres principios que explican el movimiento de los cuerpos, fundamentales en la física clásica.</p>
        <p>Ley de la gravitación universal: Describe cómo se atraen los cuerpos con masa en el universo.</p>
        <p>Cálculo infinitesimal: Independientemente de Leibniz, desarrolló el cálculo, esencial en matemáticas y física.</p>
        <p>Óptica: Demostró que la luz blanca se compone de todos los colores del espectro al pasar por un prisma.</p>
        <p>Telescopio reflector: Construyó el primer telescopio con espejo (en vez de lentes), lo que mejoró la observación astronómica.</p>
        <p>Principia Mathematica: Obra maestra que formalizó la física y las matemáticas modernas.</p>
        <p>Newton dejó un legado duradero en la ciencia, sentando las bases de la física moderna y la matemática. Su trabajo sigue siendo estudiado y admirado en todo el mundo.</p>
      `;
      break;

    case "ley1":
      // Explica la Primera Ley de Newton (Inercia)
      contenido = `
        <h2>Primera Ley de Newton (Inercia)</h2>
        <p>Un objeto en reposo permanece en reposo y un objeto en movimiento continúa en movimiento rectilíneo uniforme, a menos que una fuerza externa actúe sobre él.</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Newton%27s_First_Law_Illustration.svg/500px-Newton%27s_First_Law_Illustration.svg.png" alt="Primera Ley de Newton">
      `;
      break;

    case "ley2":
      // Explica la Segunda Ley de Newton (F = m × a)
      contenido = `
        <h2>Segunda Ley de Newton</h2>
        <p>La aceleración de un objeto es proporcional a la fuerza neta que actúa sobre él e inversamente proporcional a su masa. Fórmula: F = m × a.</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Newton-second-law.svg/600px-Newton-second-law.svg.png" alt="Segunda Ley de Newton">
      `;
      break;

    case "ley3":
      // Explica la Tercera Ley de Newton (Acción y reacción)
      contenido = `
        <h2>Tercera Ley de Newton (Acción y Reacción)</h2>
        <p>Por cada acción siempre hay una reacción igual y opuesta. Esto significa que si un objeto A ejerce una fuerza sobre B, B ejerce una fuerza igual y opuesta sobre A.</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Newton%27s_cradle_animation_book_2.gif/600px-Newton%27s_cradle_animation_book_2.gif" alt="Tercera Ley de Newton">
      `;
      break;

    default:
      // Mensaje por defecto si no hay contenido disponible
      contenido = "<p>Contenido no disponible.</p>";
  }

  // Inserta el contenido generado en el contenedor de la página
  leyInfo.innerHTML = contenido;
}
