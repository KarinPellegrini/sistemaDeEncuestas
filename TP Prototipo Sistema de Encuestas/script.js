// Datos JSON simulados
const data = {
  zonas: [
    {
      zona: "San Miguel",
      id: 1,
      coordinador: {
        datos_personales: {
          nombre: "María",
          apellido: "López",
          email: "maria.lopez@example.com"
        },
        nro_legajo: "C001",
        clave: "coordinador123"
      },
      centros_atencion: [
        {
          nombre: "Hospital Central",
          pacientes: [
            {
              datos_personales: {
                nombre: "Juan",
                apellido: "Pérez",
                dni: "12345678",
                email: "juan.perez@example.com"
              },
              clave: "clave123",
              fecha_atencion: "2024-11-01",
              completoEncuesta: true
            }
          ]
        }
      ]
    },
    {
      zona: "Zona Sur",
      id: 2,
      coordinador: {
        datos_personales: {
          nombre: "Dra.",
          apellido: "Pérez",
          email: "dra.perez@example.com"
        },
        nro_legajo: "C002",
        clave: "draP123"
      },
      centros_atencion: [
        {
          nombre: "Hospital Sur",
          pacientes: [
            {
              datos_personales: {
                nombre: "Carlos",
                apellido: "Gómez",
                dni: "87654321",
                email: "carlos.gomez@example.com"
              },
              clave: "clave456",
              fecha_atencion: "2024-11-02",
              completoEncuesta: false
            }
          ]
        }
      ]
    }
  ]
};

  
 // Lógica para iniciar sesión del paciente
const loginPacienteForm = document.getElementById("loginPacienteForm");
if (loginPacienteForm) {
  loginPacienteForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const dni = document.getElementById("dni").value;
    const clave = document.getElementById("clave").value;
    let userFound = false;

    data.zonas.forEach(zona => {
      zona.centros_atencion.forEach(centro => {
        centro.pacientes.forEach(paciente => {
          if (paciente.datos_personales.dni === dni && paciente.clave === clave) {
            userFound = true;

            // Redirigir a la página según el DNI
            if (dni === "12345678") {
              window.location.href = "paciente.html";  // Redirigir a paciente.html
            } else if (dni === "87654321") {
              window.location.href = "paciente_2.html"; // Redirigir a paciente2.html
            } else {
              window.location.href = "paciente.html";  // Redirigir a una página por defecto
            }
          }
        });
      });
    });

    if (!userFound) {
      document.getElementById("error-message").innerText = "DNI o clave incorrecta. Intente de nuevo.";
    }
  });
}

  
// Lógica para iniciar sesión del coordinador
const loginCoordinadorForm = document.getElementById("loginCoordinadorForm");
if (loginCoordinadorForm) {
  loginCoordinadorForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const nro_legajo = document.getElementById("nro_legajo").value;
    const clave = document.getElementById("clave").value;
    let userFound = false;

    data.zonas.forEach(zona => {
      const coord = zona.coordinador;
      if (coord.nro_legajo === nro_legajo && coord.clave === clave) {
        userFound = true;

        // Redirigir según la zona del coordinador
        switch (zona.id) {
          case 1:
            window.location.href = "coordinador.html"; // Redirigir a la página de la zona 1
            break;
          case 2:
            window.location.href = "coordinadorZona2.html"; // Redirigir a la página de la zona 2
            break;
          default:
            window.location.href = "coordinador.html"; // Redirigir a una página general si no se encuentra una zona específica
        }
      }
    });

    if (!userFound) {
      document.getElementById("error-message").innerText = "Número de legajo o clave incorrecta. Intente de nuevo.";
    }
  });
}

  
