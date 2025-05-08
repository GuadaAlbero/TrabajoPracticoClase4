async function obtenerPersonajes() {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
  
      if (!data.results || data.results.length < 10) {
        throw new Error("No hay suficientes personajes para mostrar.");
      }
  
      console.log("Los primeros 10 personajes de Rick and Morty son:");
      for (let i = 0; i < 10; i++) {
        const personaje = data.results[i];
        console.log(`${i + 1}. ${personaje.name}`);
      }
  
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  
  obtenerPersonajes();
  