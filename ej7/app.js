async function eliminarFoto() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos/1', {
        method: 'DELETE'//Peticion delete
      });
  
      
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
  
      const resultado = await response.json();
  
      console.log("Foto eliminada correctamente.");
  
    } catch (error) {
      console.error("Error", error.message);
    }
  }
  
  eliminarFoto();
  