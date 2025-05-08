//Muesrto álbumes del usuario con ID 1 usando axios
//Ya instale axios
const axios = require('axios');

async function obtenerAlbums() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/albums?userId=1');
    const albums = response.data;

    if (albums.length === 0) {
      console.log("No se encontraron álbumes para este usuario.");
      return;
    }

    console.log("Álbumes del usuario:");
    albums.forEach((album, index) => {
      console.log(`${index + 1}. ${album.title}`);
    });

  } catch (error) {
    console.error("Error:", error.message);
  }
}

obtenerAlbums();
