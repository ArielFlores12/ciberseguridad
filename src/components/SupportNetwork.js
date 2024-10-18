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
  const [center, setCenter] = useState({ lat: 21.8853, lng: -102.2914 }); // Estado para el centro del mapa, con una ubicación predeterminada.

  useEffect(() => {
    // Simulando la obtención de contactos (esto debería venir de un servidor o API)
    const simulatedContacts = [
      { id: 1, name: 'Usuario 1', location: { lat: -34.397, lng: 150.644 } },
      { id: 2, name: 'Usuario 2', location: { lat: -34.387, lng: 150.654 } },
      { id: 3, name: 'Usuario 3', location: { lat: -34.377, lng: 150.674 } },
    ];
    
    setContacts(simulatedContacts);

    // Obtener la ubicación en tiempo real del usuario
    if (navigator.geolocation) {
      const id = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const newLocation = { lat: latitude, lng: longitude };
          setUserLocation(newLocation); // Actualizar la ubicación del usuario en tiempo real
          setCenter(newLocation); // Mover el centro del mapa a la nueva ubicación
        },
        (error) => {
          console.error("Error obteniendo la ubicación: ", error);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
      
      // Limpieza del watchPosition cuando el componente se desmonte
      return () => {
        navigator.geolocation.clearWatch(id);
      };
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
          center={center} // Usamos el estado "center" para centrar el mapa en la ubicación más reciente
          zoom={15} // Zoom adecuado para seguir al usuario en tiempo real
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
