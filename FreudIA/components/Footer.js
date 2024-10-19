import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';

const Footer = () => {
  const [showContact, setShowContact] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showManual, setShowManual] = useState(false);

  const toggleContact = () => setShowContact(!showContact);
  const toggleTerms = () => setShowTerms(!showTerms);
  const togglePrivacy = () => setShowPrivacy(!showPrivacy);
  const toggleManual = () => setShowManual(!showManual);

  return (
    <View style={styles.footer}>
      <View style={styles.footerNav}>
        <TouchableOpacity onPress={toggleContact}>
          <Text style={styles.title}>Contacto</Text>
        </TouchableOpacity>
        {showContact && (
          <View style={styles.content}>
            <Text style={styles.infoText}>
              Síguenos en nuestras redes sociales y si necesitas alguna información, no dudes en preguntar!
            </Text>
            <View style={styles.contactInfo}>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/freudia24')}>
                <Text style={styles.icon}>📘</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/@freud-ia')}>
                <Text style={styles.icon}>🎥</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://t.me/freud_ia')}>
                <Text style={styles.icon}>📱</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('mailto:freudiaweb@gmail.com')}>
                <Text style={styles.icon}>✉️</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/company/102857368/')}>
                <Text style={styles.icon}>🔗</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://wa.me/1234567890')}>
                <Text style={styles.icon}>💬</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        <TouchableOpacity onPress={toggleTerms}>
          <Text style={styles.title}>Términos y Condiciones de Uso</Text>
        </TouchableOpacity>
        {showTerms && (
          <View style={styles.content}>
            <Text style={styles.subTitle}>Términos y Condiciones de Uso</Text>
            <Text style={styles.text}>Bienvenido a Freud IA, una plataforma dedicada a ofrecer herramientas de salud mental basadas en inteligencia artificial. Al acceder y utilizar nuestros servicios, usted acepta los siguientes términos y condiciones:</Text>
            <Text style={styles.text}>• <Text style={styles.bold}>Propósito del Servicio:</Text> Freud IA proporciona acceso a recursos psicológicos y promueve el bienestar emocional.</Text>
            <Text style={styles.text}>• <Text style={styles.bold}>Uso Responsable:</Text> Los usuarios deben utilizar la plataforma de manera ética y respetuosa.</Text>
            <Text style={styles.text}>• <Text style={styles.bold}>Colaboraciones:</Text> Freud IA colabora con clínicas, proveedores de seguros, farmacias y psicólogos certificados.</Text>
            <Text style={styles.text}>• <Text style={styles.bold}>Datos Personales y Seguridad:</Text> La información de los usuarios está protegida y encriptada.</Text>
            <Text style={styles.text}>• <Text style={styles.bold}>Uso Sostenible:</Text> Contribuyes a la sostenibilidad al acceder a recursos psicológicos sin transportarte físicamente.</Text>
            <Text style={styles.text}>• <Text style={styles.bold}>Responsabilidad Económica y Social:</Text> Freud IA se compromete con la sostenibilidad financiera y social.</Text>
          </View>
        )}

        <TouchableOpacity onPress={togglePrivacy}>
          <Text style={styles.title}>Privacidad</Text>
        </TouchableOpacity>
        {showPrivacy && (
          <View style={styles.content}>
            <Text style={styles.subTitle}>Política de Privacidad</Text>
            <Text style={styles.text}>En Freud IA, tu privacidad es de suma importancia. Nos comprometemos a proteger los datos personales de nuestros usuarios y a garantizar un entorno seguro para la interacción con nuestra plataforma.</Text>
            <Text style={styles.text}>• <Text style={styles.bold}>Recopilación de Datos:</Text> Solo recopilamos la información necesaria para ofrecer nuestros servicios.</Text>
            <Text style={styles.text}>• <Text style={styles.bold}>Protección y Seguridad de los Datos:</Text> Tus datos están protegidos mediante encriptación en nuestra base de datos PostgreSQL.</Text>
            <Text style={styles.text}>• <Text style={styles.bold}>No Compartimos Datos con Terceros:</Text> Nos comprometemos a no compartir, vender ni ceder los datos personales a terceros.</Text>
            <Text style={styles.text}>• <Text style={styles.bold}>Acceso Sostenible:</Text> Al utilizar Freud IA, reduces tu huella de carbono al no requerir transporte físico.</Text>
            <Text style={styles.text}>• <Text style={styles.bold}>Derechos del Usuario:</Text> Tienes derecho a acceder, rectificar o eliminar tus datos en cualquier momento.</Text>
            <Text style={styles.text}>• <Text style={styles.bold}>Modificaciones:</Text> Nos reservamos el derecho de modificar esta política para mejorar la seguridad.</Text>
          </View>
        )}

        <TouchableOpacity onPress={toggleManual}>
          <Text style={styles.title}>Manual de Uso</Text>
        </TouchableOpacity>
        {showManual && (
          <View style={styles.content}>
            <Text style={styles.subTitle}>Manual de Uso</Text>
            <Text style={styles.text}>Este manual proporciona instrucciones sobre cómo utilizar nuestra plataforma de manera efectiva. Aquí hay algunos puntos clave:</Text>
            <Text style={styles.text}>• <Text style={styles.bold}>Registro:</Text> Crea una cuenta para acceder a todas las funcionalidades.</Text>
            <Text style={styles.text}>• <Text style={styles.bold}>Navegación:</Text> Explora las diferentes secciones utilizando el menú principal.</Text>
            <Text style={styles.text}>• <Text style={styles.bold}>Soporte:</Text> Si necesitas ayuda, visita la sección de contacto o consulta nuestro FAQ.</Text>
            <Text style={styles.text}>• <Text style={styles.bold}>Seguridad:</Text> Asegúrate de utilizar contraseñas seguras y no compartas tus credenciales.</Text>
          </View>
        )}
      </View>
      <Text style={styles.copyright}>&copy; {new Date().getFullYear()} Freud IA. Todos los derechos reservados.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    padding: 1,
    backgroundColor: 'linear-gradient(150deg, rgba(80, 40, 175, 1) 0%, rgba(77, 34, 150, 1) 16%, rgba(65, 32, 137, 1) 33%, rgba(47, 23, 99, 1) 50%, rgba(31, 13, 65, 1) 65%, rgba(31, 12, 66, 1) 100%)', // Note: gradients in React Native require libraries
  },
  footerNav: {
    marginBottom: 3,
  },
  title: {
    fontSize: 10,
    fontWeight: 'bold',
    marginLeft: 16,
    marginVertical: 10,
    color: '#ffffff', // White color for the title
  },
  content: {
    marginBottom: 15,
    paddingLeft: 10,
  },
  text: {
    color: '#ffffff', // White color for regular text
  },
  infoText: {
    marginBottom: 10,
    color: '#ffffff', // White color for the info text
  },
  contactInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  icon: {
    fontSize: 10,
    marginHorizontal: 5,
    color: '#ffffff', // Ensure icons are white
  },
  subTitle: {
    fontSize: 10,
    color: '#ffffff', // White color for subtitles
    fontWeight: 'bold',
    marginVertical: 5,
  },
  bold: {
    fontWeight: 'bold',
    color: '#ffffff', // Ensure bold text is also white
  },
  copyright: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 10,
    color: '#ffffff', // White color for copyright text
  },
});

export default Footer;
