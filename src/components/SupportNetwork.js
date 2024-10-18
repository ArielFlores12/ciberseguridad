import React, { useState, useEffect } from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const mapContainerStyle = {
  height: "400px",
  width: "100%",
};

function SupportNetwork() {
  const [contacts, setContacts] = useState([]);
  const [userLocation, setUserLocation] = useState(null); // Estado para la ubicación del usuario
  
  useEffect(() => {
    // Simulando la obtención de contactos (esto debería venir de un servidor o API)
    const simulatedContacts = [
      { id: 1, name: 'Usuario 1', location: { lat: -34.397, lng: 150.644 } },
      { id: 2, name: 'Usuario 2', location: { lat: -34.387, lng: 150.654 } },
      { id: 3, name: 'Usuario 3', location: { lat: -34.377, lng: 150.674 } },
    ];
    
    setContacts(simulatedContacts);

    // Obtener la ubicación del usuario
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude }); // Establecer la ubicación del usuario
        },
        (error) => {
          console.error("Error obteniendo la ubicación: ", error);
          // Aquí puedes manejar errores, como el caso en que el usuario no permite la geolocalización.
        }
      );
    } else {
      console.error("Geolocalización no es soportada en este navegador.");
    }
  }, []);

  return (
    <Box textAlign="center" mt={5}>
      <Typography variant="h4" component="h2" gutterBottom>
        Red de Apoyo
      </Typography>
      <Typography variant="body1" gutterBottom>
        Mujeres en peligro.
      </Typography>

      {/* Mapa */}
      <LoadScript googleMapsApiKey="AIzaSyBnZ5RQASMNgj0gB6XjlJdiOR9tzHiXwXs"> {/* Sustituye con tu clave de API */}
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={userLocation || { lat: 21.8853, lng: -102.2914 }} // Centro del mapa es la ubicación del usuario o una predeterminada
          zoom={12}
        >
          {/* Marcador para la ubicación del usuario */}
          {userLocation && (
            <Marker
              position={userLocation}
              title="Tu Ubicación"
              icon={{
                url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" // Cambia el icono si deseas
              }}
            />
          )}
          {/* Marcadores para los contactos */}
          {contacts.map(contact => (
            <Marker
              key={contact.id}
              position={contact.location}
              title={contact.name}
            />
          ))}
        </GoogleMap>
      </LoadScript>

      {/* Lista de contactos */}
      <List>
        {contacts.map(contact => (
          <ListItem key={contact.id}>
            <ListItemText primary={contact.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default SupportNetwork;
