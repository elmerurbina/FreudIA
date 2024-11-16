import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Video } from 'expo-av'; // Ensure this package is installed

const Dashboard = () => {
  return (
    <ScrollView contentContainerStyle={styles.dashboard}>
      <View style={styles.videoSection}>
        <Video
          source={require('../../assets/videos/index.mp4')} // Ensure the path is correct
          style={styles.video}
          resizeMode="cover"
          muted
          repeat
          useNativeControls // Use this prop for controls
        />
      </View>

      <View style={styles.aboutUs}>
        <Text style={styles.title}>Acerca de Nosotros</Text>
        <Text style={styles.text}>
          Somos un equipo de profesionales dedicados a brindar herramientas
          de salud mental a través de la inteligencia artificial. Nuestro objetivo es
          facilitar el acceso a recursos psicológicos y promover el bienestar emocional
          de las personas. Trabajamos en colaboración con clínicas asociadas, proveedores
          de seguros, farmacias y psicólogos certificados.
        </Text>
        <Text style={styles.text}>
          La información de nuestros usuarios está asegurada y encriptada; no se comparte
          con terceros. No trabajamos con APIs para garantizar que los datos de los
          usuarios no sean compartidos con nadie, y no dependemos de otros servicios.
          Nuestro compromiso es ofrecer un entorno seguro y privado para todos nuestros
          usuarios.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  dashboard: {
    flexGrow: 1, // Allows the ScrollView to grow and fill available space
    backgroundColor: 'linear-gradient(135deg, rgba(65, 32, 137, 1), rgba(47, 23, 99, 1))',
    color: 'white',
    padding: 10,
  },
  aboutUs: {
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
    color: 'white', // Text color
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginLeft: '10%', // 10% margin for left and right
    marginRight: '10%',
    color: 'white', // Text color
  },
  videoSection: {
    marginBottom: 30,
    marginTop: 20,
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: 200, // Adjust height as needed
    borderRadius: 10,
    overflow: 'hidden', // For border radius
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
});

export default Dashboard;
