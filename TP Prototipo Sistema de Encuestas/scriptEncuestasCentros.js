// JSON con la información de los centros y pacientes
const data = {
  "zonas": [
    {
      "zona": "Unificada",
      "coordinador": {
        "datos_personales": {
          "nombre": "María",
          "apellido": "López",
          "email": "maria.lopez@example.com"
        },
        "nro_legajo": "C001",
        "clave": "coordinador123"
      },
      "centros_atencion": [
        {
          "nombre": "Hospital Central",
          "pacientes": [
            {
              "datos_personales": {
                "nombre": "Juan",
                "apellido": "Pérez",
                "dni": "12345678",
                "email": "juan.perez@example.com"
              },
              "clave": "clave123",
              "fecha_atencion": "2024-11-01",
              "completoEncuesta": true
            },
            {
              "datos_personales": {
                "nombre": "Carlos",
                "apellido": "Fernández",
                "dni": "55667788",
                "email": "carlos.fernandez@example.com"
              },
              "clave": "nuevaClave321",
              "fecha_atencion": "2024-11-03",
              "completoEncuesta": false
            },
            {
              "datos_personales": {
                "nombre": "Sofía",
                "apellido": "Martínez",
                "dni": "33445566",
                "email": "sofia.martinez@example.com"
              },
              "clave": "claveSofia2024",
              "fecha_atencion": "2024-11-05",
              "completoEncuesta": false
            }
          ]
        },
        {
          "nombre": "Clínica San José",
          "pacientes": [
            {
              "datos_personales": {
                "nombre": "Ana",
                "apellido": "García",
                "dni": "87654321",
                "email": "ana.garcia@example.com"
              },
              "clave": "contraseña456",
              "fecha_atencion": "2024-10-28",
              "completoEncuesta": true
            },
            {
              "datos_personales": {
                "nombre": "Pedro",
                "apellido": "Gómez",
                "dni": "99887766",
                "email": "pedro.gomez@example.com"
              },
              "clave": "clavePedro321",
              "fecha_atencion": "2024-11-06",
              "completoEncuesta": false
            }
          ]
        },
        {
          "nombre": "Centro de Salud Norte",
          "pacientes": [
            {
              "datos_personales": {
                "nombre": "Luis",
                "apellido": "Rodríguez",
                "dni": "11223344",
                "email": "luis.rodriguez@example.com"
              },
              "clave": "seguro789",
              "fecha_atencion": "2024-09-15",
              "completoEncuesta": true
            },
            {
              "datos_personales": {
                "nombre": "Lucía",
                "apellido": "Giménez",
                "dni": "66778899",
                "email": "lucia.gimenez@example.com"
              },
              "clave": "claveLucia123",
              "fecha_atencion": "2024-11-07",
              "completoEncuesta": false
            }
          ]
        }
      ]
    },
    {
      "zona": "Zona Sur",
      "id": 2,
      "coordinador": {
        "datos_personales": {
          "nombre": "Dra.",
          "apellido": "Pérez",
          "email": "dra.perez@example.com"
        },
        "nro_legajo": "C002",
        "clave": "draP123"
      },
      "centros_atencion": [
        {
          "nombre": "Hospital Norte",
          "pacientes": [
            {
              "datos_personales": {
                "nombre": "Carlos",
                "apellido": "Gómez",
                "dni": "12312312",
                "email": "carlos.gomez@example.com"
              },
              "clave": "claveCarlos123",
              "fecha_atencion": "2024-11-01",
              "completoEncuesta": true
            },
            {
              "datos_personales": {
                "nombre": "Ana",
                "apellido": "Fernández",
                "dni": "23423423",
                "email": "ana.fernandez@example.com"
              },
              "clave": "claveAna456",
              "fecha_atencion": "2024-11-02",
              "completoEncuesta": false
            },
            {
              "datos_personales": {
                "nombre": "Luis",
                "apellido": "Martínez",
                "dni": "34534534",
                "email": "luis.martinez@example.com"
              },
              "clave": "claveLuis2024",
              "fecha_atencion": "2024-11-03",
              "completoEncuesta": false
            }
          ]
        },
        {
          "nombre": "Clínica Este",
          "pacientes": [
            {
              "datos_personales": {
                "nombre": "Pedro",
                "apellido": "Rodríguez",
                "dni": "45645645",
                "email": "pedro.rodriguez@example.com"
              },
              "clave": "clavePedro2024",
              "fecha_atencion": "2024-10-28",
              "completoEncuesta": true
            },
            {
              "datos_personales": {
                "nombre": "Lucía",
                "apellido": "Gómez",
                "dni": "56756756",
                "email": "lucia.gomez@example.com"
              },
              "clave": "claveLucia321",
              "fecha_atencion": "2024-11-04",
              "completoEncuesta": false
            }
          ]
        }
      ]
    }
  ]
};


function processPatientData() {
  const completedList = document.getElementById('completed-list');
  const notCompletedList = document.getElementById('not-completed-list');

  const centerName = document.body.getAttribute('data-center');

  let foundCenter = null;
  data.zonas.forEach(zona => {
    const centro = zona.centros_atencion.find(centro => centro.nombre === centerName);
    if (centro) {
      foundCenter = centro;
    }
  });

  if (foundCenter) {
    foundCenter.pacientes.forEach(paciente => {
      const li = document.createElement('li');
      li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

      const patientInfo = `${paciente.datos_personales.nombre} ${paciente.datos_personales.apellido} (DNI: ${paciente.datos_personales.dni}) - Fecha de atención: ${paciente.fecha_atencion}`;

      if (paciente.completoEncuesta) {
        li.textContent = patientInfo;
        li.classList.add('patient-completed'); 
        completedList.appendChild(li);
      } else {
        li.textContent = patientInfo;
        li.classList.add('patient-not-completed'); 

        const button = document.createElement('button');
        button.textContent = 'Enviar recordatorio';
        button.classList.add('btn', 'btn-warning', 'btn-sm');

        li.appendChild(button);
        notCompletedList.appendChild(li);
      }
    });
  } else {
    console.error('No se encontró el centro de atención: ' + centerName);
  }
}

document.addEventListener('DOMContentLoaded', processPatientData);

function redirectToCenterInfo(centerName) {
  switch (centerName) {
    case 'Hospital Norte':
      window.location.href = 'info_centro4.html'; 
      break;
    case 'Clínica Este':
      window.location.href = 'info_centro5.html'; 
      break;
    default:
      console.error('Centro de atención no válido: ' + centerName);
  }
}
