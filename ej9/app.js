async function obtenerTareasPendientes() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?userId=3');
  
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
  
      const tareas = await response.json();
  
      //Mostrar todo lo que devuelve la API antes de filtrar
      //console.log(tareas);
  
      // Filtro solo las tareas pendientes (completed === false)
      const pendientes = tareas.filter(tarea => !tarea.completed);

      console.log("Tareas encontradas:", tareas.length);
      console.log("Tareas pendientes encontradas:", pendientes.length);

  
      if (pendientes.length === 0) {
        console.log("El usuario no tiene tareas pendientes.");
        return;
      }
  
      console.log(`Tareas pendientes:`);
      pendientes.forEach((tarea, index) => {
        console.log(`${index + 1}. ${tarea.title}`);
      });
  
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  
 obtenerTareasPendientes();
  