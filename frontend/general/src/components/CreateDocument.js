const fs = require('fs');
const path = require('path');
const { Document, Packer, Paragraph, TextRun, Alignment } = require('docx');

// Create the header text for the document
const headerText = 'FREUD IA una inteligencia artificial al servicio de la humanidad';

async function createDocx() {
    // Create a new Document
    const doc = new Document({
        sections: [
            {
                properties: {},
                children: [
                    // Header Section
                    new Paragraph({
                        text: headerText,
                        heading: 'Heading1',
                        alignment: Alignment.CENTER,
                    }),
                    new Paragraph({
                        text: '',
                    }), // Empty paragraph for spacing

                    // Report Title
                    new Paragraph({
                        text: 'Reporte Psicológico',
                        heading: 'Heading2',
                        spacing: { after: 200 },
                    }),

                    // Patient Information
                    new Paragraph({
                        text: 'Información del Paciente:',
                        heading: 'Heading3',
                    }),
                    new Paragraph('Nombre: [Nombre del Paciente]'),
                    new Paragraph('Edad: [Edad del Paciente]'),
                    new Paragraph('Género: [Género del Paciente]'),
                    new Paragraph('Fecha: [Fecha del Reporte]'),
                    new Paragraph('Motivo de Consulta: [Descripción del motivo de consulta]'),

                    // Clinical History
                    new Paragraph({
                        text: 'Historia Clínica:',
                        heading: 'Heading3',
                    }),
                    new Paragraph('[Descripción detallada de la historia clínica del paciente.]'),

                    // Evaluación Psicológica
                    new Paragraph({
                        text: 'Evaluación Psicológica:',
                        heading: 'Heading3',
                    }),
                    new Paragraph('[Resultados de pruebas psicológicas y observaciones.]'),

                    // Diagnóstico
                    new Paragraph({
                        text: 'Diagnóstico:',
                        heading: 'Heading3',
                    }),
                    new Paragraph('[Descripción del diagnóstico basado en la evaluación.]'),

                    // Recomendaciones
                    new Paragraph({
                        text: 'Recomendaciones:',
                        heading: 'Heading3',
                    }),
                    new Paragraph('[Sugerencias para el tratamiento o seguimiento.]'),

                    // Conclusiones
                    new Paragraph({
                        text: 'Conclusiones:',
                        heading: 'Heading3',
                    }),
                    new Paragraph('[Resumen de la evaluación y conclusiones finales.]'),

                    // Footer
                    new Paragraph({
                        text: 'Elaborado por: [Tu nombre]',
                        spacing: { before: 200, after: 200 },
                    }),
                ],
            },
        ],
    });

    // Create the .docx file
    const buffer = await Packer.toBuffer(doc);
    fs.writeFileSync('Reporte_Psicológico.docx', buffer);
    console.log('Reporte_Psicológico.docx creado con éxito!');
}

// Run the function to create the Word document
createDocx().catch((error) => {
    console.error('Error creando el documento:', error);
});
