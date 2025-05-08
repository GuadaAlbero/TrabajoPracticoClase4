//Retornamos una nueva promesa devolviendo fetch(...).then(...)
//No usamos async/await

function obtenerArticulos() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        return response.json(); // Devuelve la promesa con los datos (response.json() 	Convierte el cuerpo de la respuesta a objeto JS)
      });
  }
  
  obtenerArticulos()
  //devuelve articulos (posts)
    .then(posts => {
      console.log("Artículos obtenidos:");
      posts.forEach((post, index) => {
        console.log(`${index + 1}. ${post.title}`);
      });
    })
    .catch(error => {
      console.error("Error:", error.message);
    });
  