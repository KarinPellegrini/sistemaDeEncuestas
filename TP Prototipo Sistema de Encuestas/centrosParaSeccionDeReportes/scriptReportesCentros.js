// El JSON con los datos de los centros y usuarios
const data = {
    "zonas": [
      {
        "nombre": "Zona 1",
        "centros": [
          {
            "nombre": "Hospital Central",
            "usuarios": [
              {
                "id": 1,
                "respuestas": [3, 8, 5, 6, 2, 7, 9, 10, 4, 1],
                "comentario": "Buena atención."
              },
              {
                "id": 2,
                "respuestas": [6, 4, 7, 1, 3, 9, 5, 2, 10, 8],
                "comentario": "Excelente servicio."
              }
            ]
          },
          {
            "nombre": "Clínica San José",
            "usuarios": [
              {
                "id": 3,
                "respuestas": [5, 9, 1, 7, 3, 10, 2, 6, 8, 4],
                "comentario": "Personal amable."
              },
              {
                "id": 4,
                "respuestas": [2, 7, 4, 10, 1, 5, 9, 6, 8, 3],
                "comentario": "Instalaciones limpias."
              }
            ]
          },
          {
            "nombre": "Centro de Salud Norte",
            "usuarios": [
              {
                "id": 5,
                "respuestas": [8, 3, 10, 2, 6, 9, 1, 4, 7, 5],
                "comentario": "Tiempo de espera adecuado."
              },
              {
                "id": 6,
                "respuestas": [7, 2, 5, 8, 4, 1, 10, 9, 6, 3],
                "comentario": "Muy buena experiencia."
              }
            ]
          }
        ]
      },
      {
        "nombre": "Zona 2",
        "centros": [
          {
            "nombre": "Hospital Norte",
            "usuarios": [
              {
                "id": 7,
                "respuestas": [1, 6, 9, 3, 8, 7, 4, 10, 2, 5],
                "comentario": "Personal atento."
              },
              {
                "id": 8,
                "respuestas": [4, 5, 2, 10, 7, 8, 3, 9, 1, 6],
                "comentario": "Rápido y eficiente."
              }
            ]
          },
          {
            "nombre": "Clínica Este",
            "usuarios": [
              {
                "id": 9,
                "respuestas": [9, 4, 6, 5, 1, 10, 2, 3, 7, 8],
                "comentario": "Muy satisfecho."
              },
              {
                "id": 10,
                "respuestas": [10, 2, 8, 1, 5, 3, 7, 9, 4, 6],
                "comentario": "Buena atención médica."
              }
            ]
          }
        ]
      },
      {
        "nombre": "Zona 3",
        "centros": [
          {
            "nombre": "Centro de Salud Sur",
            "usuarios": [
              {
                "id": 11,
                "respuestas": [7, 10, 3, 6, 2, 8, 5, 1, 9, 4],
                "comentario": "Muy atentos."
              },
              {
                "id": 12,
                "respuestas": [5, 8, 6, 2, 9, 3, 7, 4, 10, 1],
                "comentario": "Servicio de calidad."
              }
            ]
          },
          {
            "nombre": "Clínica Oeste",
            "usuarios": [
              {
                "id": 13,
                "respuestas": [3, 9, 5, 7, 6, 2, 10, 1, 4, 8],
                "comentario": "Muy buen trato."
              },
              {
                "id": 14,
                "respuestas": [8, 1, 4, 9, 5, 6, 2, 7, 10, 3],
                "comentario": "Recomendaría este centro."
              }
            ]
          }
        ]
      }
    ]
  };
  
  
  // Función para mostrar los datos
  function mostrarDatosCentro() {
    // Buscar el centro dentro del JSON
    const centros = data.zonas.reduce((acc, zona) => acc.concat(zona.centros), []);
    const centro = centros.find(centro => centro.nombre === centroBuscado);
  
    if (centro) {
        let htmlContent = "";
  
        // Iterar sobre los usuarios del centro y mostrar sus respuestas y comentarios
        centro.usuarios.forEach(usuario => {
            htmlContent += `
              <div class="card mb-3">
                <div class="card-body">
                  <h5 class="card-title">Usuario ${usuario.id}</h5>
                  <p><strong>Respuestas:</strong> ${usuario.respuestas.join(", ")}</p>
                  <p><strong>Comentario:</strong> ${usuario.comentario}</p>
                </div>
              </div>
            `;
        });
  
        // Insertar los datos en el contenedor
        document.getElementById('usersData').innerHTML = htmlContent;
    } else {
        document.getElementById('usersData').innerHTML = "<p>No se encontraron datos para este centro.</p>";
    }
  }
  
  // Llamar a la función para mostrar los datos al cargar la página
  mostrarDatosCentro();
  

  
  