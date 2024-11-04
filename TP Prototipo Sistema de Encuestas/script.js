// Datos JSON simulados
const data = {
    zonas: [
      {
        zona: "San Miguel",
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
              window.location.href = "paciente.html"; // Redirigir a la página del paciente
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
          window.location.href = "coordinador.html"; // Redirigir a la página del coordinador
        }
      });
  
      if (!userFound) {
        document.getElementById("error-message").innerText = "Número de legajo o clave incorrecta. Intente de nuevo.";
      }
    });
  }
  