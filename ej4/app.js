//instalo fetch
import fetch from 'node-fetch';

async function obtenerUsuario() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/5');

  // fetch no lanza un error si la respuesta es 404 o 500, a diferencia de axios. 
  // Por eso verifico con response.ok.
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
  
      const usuario = await response.json();
      //Quiero ver que tiene el usuario
      //console.log(usuario);
      mostrarUsuarioLimpio(usuario);
  
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  
  function mostrarUsuarioLimpio(usuario) {
    const info = {
      nombre: usuario.name,
      email: usuario.email,
      telefono: usuario.phone,
      empresa: usuario.company?.name,
      ciudad: usuario.address?.city
    };
  
    console.log(`
  Información del usuario con ID 5:
  Nombre:   ${info.nombre}
  Email:    ${info.email}
  Teléfono: ${info.telefono}
  Empresa:  ${info.empresa}
  Ciudad:   ${info.ciudad}
    `);
  }
  
  obtenerUsuario();
  