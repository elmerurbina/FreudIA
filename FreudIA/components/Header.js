import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, FlatList } from 'react-native';

const Header = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentDropdown, setCurrentDropdown] = useState(null);

  const dropdownData = {
    Psicologos: ['Contactar un Psicologo', 'Perfil', 'Reportes', 'Directiva'],
    Usuarios: ['Agentes de IA', 'Objetivos', 'Expediente', 'Red de Apoyo', 'Historial', 'Notificaciones', 'Cuenta'],
    Lugares: ['Para correr', 'Relajarme', 'Meditar', 'Lugares turísticos cerca de mí'],
    Socios: ['Aseguradoras', 'Clinicas', 'Farmacias'],
  };

  const handleItemClick = (item) => {
    if (item === 'Agentes de IA') {
      navigation.navigate('AgentesIA'); // Adjust to your screen name
    } else if (item === 'Objetivos') {
      navigation.navigate('GoalsManager'); // Adjust to your screen name
    } else {
      // Handle other items similarly
      // For example, using navigation.navigate(item);
    }
    setModalVisible(false); // Close dropdown modal
  };

  return (
    <View style={styles.header}>
      <View style={styles.logo}>
        <Text style={styles.freud}>FREUD</Text>
        <Text style={styles.ia}>IA</Text>
      </View>
      <Text style={styles.slogan}>Inteligencia Artificial al Servicio de la Humanidad</Text>
      <View style={styles.navbar}>
        {Object.keys(dropdownData).map((category) => (
          <View key={category} style={styles.navItem}>
            <TouchableOpacity onPress={() => {
              setCurrentDropdown(currentDropdown === category ? null : category);
              setModalVisible(true);
            }}>
              <Text style={styles.navText}>{category}</Text>
            </TouchableOpacity>
            {currentDropdown === category && (
              <Modal
                transparent={true}
                visible={modalVisible}
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
              >
                <View style={styles.modalContainer}>
                  <FlatList
                    data={dropdownData[category]}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                      <TouchableOpacity onPress={() => handleItemClick(item)} style={styles.dropdownItem}>
                        <Text style={styles.dropdownText}>{item}</Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </Modal>
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'linear-gradient(150deg, rgba(80, 40, 175, 1) 0%, rgba(77, 34, 150, 1) 16%, rgba(65, 32, 137, 1) 33%, rgba(47, 23, 99, 1) 50%, rgba(31, 13, 65, 1) 65%, rgba(31, 12, 66, 1) 100%)', // Note: gradients in React Native require libraries
    color: 'white',
    padding: 20,
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    zIndex: 1000,
  },
  logo: {
    fontSize: 48,
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  freud: {
    color: '#ffffff',
    marginRight: 5,
    marginTop: 10,
    fontSize: 20,
  },
  ia: {
    color: '#ee13c4',
    fontSize: 20,
  },
  slogan: {
    fontSize: 20,
    marginVertical: 10,
    color: '#ffffff',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  navItem: {
    position: 'relative',
  },
  navText: {
    color: '#ffffff',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dropdownItem: {
    backgroundColor: 'white',
    padding: 5,
    width: '80%',
    marginVertical: 5,
    borderRadius: 5,
  },
  dropdownText: {
    color: 'black',
  },
});

export default Header;
