import React, { useState, useEffect } from 'react';
import { Box, Typography, List, ListItem, ListItemText, Paper, Divider } from '@mui/material';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import PersonIcon from '@mui/icons-material/Person';

const mapContainerStyle = {
  height: "450px",
  width: "100%",
  borderRadius: "10px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
};

function SupportNetwork() {
  const [contacts, setContacts] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [center, setCenter] = useState({ lat: 21.8853, lng: -102.2914 }); // Coordenadas iniciales

  useEffect(() => {
    // Simulación de contactos con coordenadas y direcciones válidas
    const simulatedContacts = [
      { id: 1, name: 'Martha', location: { lat: 21.8858, lng: -102.2916 }, address: 'Calle Falsa 123, Ciudad' },
      { id: 2, name: 'Joana', location: { lat: 21.8860, lng: -102.2920 }, address: 'Av. Siempre Viva 742, Ciudad' },
      { id: 3, name: 'Fernanda', location: { lat: 21.8845, lng: -102.2905 }, address: 'Calle Principal 456, Ciudad' },
    ];
    setContacts(simulatedContacts);

    if (navigator.geolocation) {
      const id = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const newLocation = { lat: latitude, lng: longitude };
          setUserLocation(newLocation);
          setCenter(newLocation);
        },
        (error) => {
          console.error("Error obteniendo la ubicación: ", error);
          setCenter({ lat: 21.8853, lng: -102.2914 });
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
      return () => {
        navigator.geolocation.clearWatch(id);
      };
    } else {
      console.error("Geolocalización no es soportada en este navegador.");
    }
  }, []);

  return (
    <Box mt={5} px={3} maxWidth="md" mx="auto">
      <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
        Red de Apoyo
      </Typography>
      <Typography variant="body1" gutterBottom align="center" sx={{ mb: 3, color: '#424242' }}>
        Ubica a las personas más cercanas para obtener ayuda.
      </Typography>

      {/* Mapa */}
      <Paper elevation={3} sx={{ mb: 4, borderRadius: '10px', overflow: 'hidden' }}>
        <LoadScript googleMapsApiKey="AIzaSyBnZ5RQASMNgj0gB6XjlJdiOR9tzHiXwXs">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={userLocation || center}
            zoom={15}
            options={{
              styles: [
                { "featureType": "water", "stylers": [{ "color": "#a4d6e1" }] },
                { "featureType": "landscape", "stylers": [{ "color": "#e4f1f1" }] },
                { "featureType": "road", "stylers": [{ "color": "#ffffff" }] },
                { "featureType": "road", "elementType": "geometry", "stylers": [{ "visibility": "simplified" }] },
                { "featureType": "poi", "stylers": [{ "visibility": "off" }] },
              ],
              mapTypeId: 'roadmap',
            }}
          >
            {userLocation && (
              <Marker
                position={userLocation}
                title="Tu Ubicación"
                icon={{
                  url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                  scaledSize: { width: 40, height: 40 },
                }}
              />
            )}
            {contacts.map(contact => (
              <Marker
                key={contact.id}
                position={contact.location}
                title={contact.name}
                icon={{
                  url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                  scaledSize: { width: 30, height: 30 },
                }}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      </Paper>

      {/* Lista de contactos */}
      <Paper elevation={1} sx={{ borderRadius: '10px', p: 2 }}>
        <Typography variant="h6" component="h3" gutterBottom align="center" sx={{ fontWeight: 'bold', color: '#424242' }}>
          Contactos Cercanos
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <List>
          {contacts.map(contact => (
            <ListItem key={contact.id} divider>
              <PersonIcon sx={{ mr: 1, color: '#1976d2' }} />
              <ListItemText 
                primary={contact.name} 
                secondary={contact.address} // Muestra la dirección debajo del nombre
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}

export default SupportNetwork;
