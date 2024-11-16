import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';


const AgentesIA = ({ navigation }) => {
  const agents = [
    { name: "General", path: "AgenteGeneral", icon: require('../../assets/images/general-agent.png') },
    { name: "Diario Personal", path: "AgenteDiario", icon: require('../../assets/images/diary-agent.png') },
    { name: "Familia", path: "AgenteFamilia", icon: require('../../assets/images/family-agent.png') },
    { name: "Amigos", path: "AgenteAmigos", icon: require('../../assets/images/friends-agent.png') },
    { name: "Yo en el Amor", path: "AgenteLove", icon: require('../../assets/images/love-agent.png') },
    { name: "Pensamiento Negativo", path: "AgenteNegativo", icon: require('../../assets/images/negative-thought-agent.png') },
    { name: "Solo Quiero Desahogarme", path: "AgenteDesahogarme", icon: require('../../assets/images/agente-desahogo.png') },
    { name: "Necesito Motivacion", path: "AgenteMotivacion", icon: require('../../assets/images/motivation-agent.png') },
    { name: "Ayuda con Mis Planes", path: "AgenteObjetivos", icon: require('../../assets/images/goal-agent.png') },
  ];

  // Click event handler to select an agent and navigate to the corresponding path
  const handleAgentClick = (path) => {
    navigation.navigate(path); // Use navigate to change the route
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Agentes de IA</Text>

      <ScrollView contentContainerStyle={styles.agentsContainer}>
        {agents.map((agent, index) => (
          <TouchableOpacity
            key={index}
            style={styles.agentCard}
            onPress={() => handleAgentClick(agent.path)}
          >
            <Image source={agent.icon} style={styles.agentIcon} />
            <Text style={styles.agentName}>{agent.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'linear-gradient(135deg, rgba(0, 102, 204, 1), rgba(0, 51, 153, 1))', // Gradients aren't natively supported; consider using a library or setting a solid color
    color: 'white',
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
  agentsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 100,
  },
  agentCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    margin: 10,
    padding: 15,
    alignItems: 'center',
    width: 150,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  agentIcon: {
    width: 70,
    height: 70,
    marginBottom: 5,
  },
  agentName: {
    color: 'white',
    textAlign: 'center',
  },
});

export default AgentesIA;
