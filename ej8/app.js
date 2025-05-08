const axios = require('axios');

async function obtenerClima(ciudad) {
  try {
    const apiKey = 'feff1a1b72e2f2bb9f709281aa4d604c'; //pongo la key de la API de OpenWeatherMap

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

    const response = await axios.get(url);
    const datos = response.data;
    // Para ver la respuesta completa de la API
    console.log(datos);

    //mostrarClima(datos);

  } catch (error) {
    //acceder al mensaje de error específico que el servidor devuelve o sino el error generico
    console.error("Error:", error.response?.data?.message || error.message);
  }
}

function mostrarClima(datos) {
  console.log(`Ciudad: ${datos.name}`);
  console.log(`Temperatura: ${datos.main.temp}°C`);
  console.log(`Clima: ${datos.weather[0].description}`);
  console.log(`Humedad: ${datos.main.humidity}%`);
  console.log(`Viento: ${datos.wind.speed} m/s`);
}

obtenerClima('Buenos Aires');
