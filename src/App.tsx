import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

// Consumo de esta API cada 3 segundos
const backend: string='/api/hora'
const refresco: number=3000

function App() {
  // Creo una variable de  estado
  const [hora, setHora] = useState(null);
  
  // Indicamos a React que active el intervalo después de render
  // pero lo desactive al desmontar
  useEffect(() => {
    const interval = setInterval(() => {
      fetch(backend)
        .then(response => response.json())
        .then(json => setHora(json.Hora));
    }, refresco);
    return () => {
        clearInterval(interval);
      };
  }, []);

  // Cambio Aprende React en {process.env.NODE_ENV}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {hora}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
           Aprende React con JE, Fernando e Irene {process.env.NODE_ENV}
        </a>
      </header>
    </div>
  );
}

export default App;
