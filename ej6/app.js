
async function obtenerComentarios() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=2');
  
      // fetch no lanza error por defecto en 404/500, por eso se verifica
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
  
      const comentarios = await response.json();
  
      if (comentarios.length === 0) {
        console.log("No se encontraron comentarios.");
        return;
      }
  
      console.log(`Comentarios:`);
      comentarios.forEach((comentario, index) => {
        console.log(`\n${index + 1}. ${comentario.name} - ${comentario.email}\n   ${comentario.body}`);
      });
  
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  
  obtenerComentarios();
  