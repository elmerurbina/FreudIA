import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, FlatList, ScrollView } from 'react-native';
import {useNavigation} from "expo-router";


const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentDropdown, setCurrentDropdown] = useState(null);
  const navigation = useNavigation();

  const dropdownData = {
    Psicologos: ['Contactar un Psicologo', 'Perfil', 'Reportes', 'Directiva'],
    Usuarios: [
      { name: 'Agentes de IA', route: 'AgentesIA' },
      { name: 'Objetivos', route: 'GoalsManager' },
      { name: 'Expediente', route: 'Expediente' },
      { name: 'Red de Apoyo', route: 'RedDeApoyo' },
      { name: 'Historial', route: 'Historial' },
      { name: 'Notificaciones', route: 'Notificaciones' },
      { name: 'Cuenta', route: 'Cuenta' },
    ],
    Lugares: ['Para correr', 'Relajarme', 'Meditar', 'Lugares turísticos cerca de mí'],
    Socios: ['Aseguradoras', 'Clinicas', 'Farmacias'],
  };

  const handleItemClick = (item) => {
    if (typeof item === 'string') {
      // Handle string items (e.g., Psicologos, Lugares, Socios)
      console.log(item); // Replace with appropriate action if needed
    } else {
      // Handle object items (e.g., Usuarios)
      navigation.navigate(item.route);
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
                  <ScrollView style={styles.dropdownContainer}>
                    <FlatList
                      data={dropdownData[category]}
                      keyExtractor={(item) => (typeof item === 'string' ? item : item.name)}
                      renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleItemClick(item)} style={styles.dropdownItem}>
                          <Text style={styles.dropdownText}>{typeof item === 'string' ? item : item.name}</Text>
                        </TouchableOpacity>
                      )}
                    />
                  </ScrollView>
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
    backgroundColor: 'linear-gradient(150deg, rgba(80, 40, 175, 1) 0%, rgba(77, 34, 150, 1) 16%, rgba(65, 32, 137, 1) 33%, rgba(47, 23, 99, 1) 50%, rgba(31, 13, 65, 1) 65%, rgba(31, 12, 66, 1) 100%)',
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
  dropdownContainer: {
    backgroundColor: 'white',
    padding: 20,
    width: '80%',
    borderRadius: 8,
    maxHeight: '70%', // Allow scrolling
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  dropdownText: {
    color: 'black',
  },
});

export default Header;
