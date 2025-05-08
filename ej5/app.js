//TO DO es la primer tarea pendiente del sistema
const axios = require('axios');

async function eliminarTodo() {
  try {
    const response = await axios.delete('https://jsonplaceholder.typicode.com/todos/1');
    console.log("ToDo eliminado correctamente.");
  } catch (error) {
    console.error("Error:", error.message);
  }
}

eliminarTodo();