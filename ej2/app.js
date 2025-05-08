//Instalo axios
const axios = require('axios');

async function eliminarPost() {
  try {
    //Borro el post con id 1
    const response = await axios.delete('https://jsonplaceholder.typicode.com/posts/1');
    console.log("Post eliminado.");
    console.log("Respuesta del servidor:", response.data);
  } catch (error) {
    console.error("Error al eliminar el post:", error.message);
  }
}

eliminarPost();