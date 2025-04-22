
import React, { useState } from "react";
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";

const urlImagenPortada = "https://1000marcas.net/wp-content/uploads/2022/01/UNID-Logo.png";

const imagenesPaneles = {
  izquierdo: "https://hardzone.es/app/uploads-hardzone.es/2019/11/Memorias-RAM.jpg",
  central: "https://micarrerauniversitaria.com/wp-content/uploads/2018/02/images1590772congnghe_HWUG.jpg",
  derecho: "https://www.shutterstock.com/image-vector/one-continuous-line-drawing-teacher-600nw-2527134325.jpg",
};

export default function Aplicacion() {
  const [mostrarPortada, setMostrarPortada] = useState(true);
  const [panelEnfocado, setPanelEnfocado] = useState(null);

  const paneles = [
    {
      id: "izquierdo",
      titulo: "Tipos de memoria.",
      contenido: "Existen diferentes tipos de memoria dentro de nuestras computadoras, cada una con una funcion especifica. Ninguna de las memorias es la solucion absoluta para nuestras necesidades de almacenamiento por lo que me deja intrigado cuales seran los avances en este tema. En cuanto a los tipos tenemos a la real y la virtual, para los cuales existen maneras de organizarlas segun a conveniencia del usuario.",
      imagen: imagenesPaneles.izquierdo,
    },
    {
      id: "central",
      titulo: "Herramientas de Software.",
      contenido: "Este tema hace referencia a las tecnologias que tenemos disponibles hoy en dia para el desarrollo de Software, las cuales estan orientadas a las necesidades labolares de los ingenieros en la actualidad. Su importancia esta en que pueden agilizar nuestros procesos dentro de la industria, de este modo podemos entregar Software con mejor calidad, rapidez y a su vez reduciendo costos.",
      imagen: imagenesPaneles.central,
    },
    {
      id: "derecho",
      titulo: "Experiencia del docente.",
      contenido: "Este no es un tema como tal, pero no podia hablar de lo que mas disfrute de la materia sin mencionar todo el conocimiento general acerca de ingenieria que el maestro Aldo nos hacia razonar en clases. Fue muy interesante como gracias a la experiencia del profesor los temas eran expandidos mas haya de lo que es la lectura de la plataforma, haciendo que nosostros los alumnos pudieramos llegar a un mejor entendimiento de como es el perfil de un ingeniero de Software.",
      imagen: imagenesPaneles.derecho,
    },
  ];

  const enfocarPanel = (id) => setPanelEnfocado(id);
  const quitarEnfoque = () => setPanelEnfocado(null);

  return (
    <main className="w-screen h-screen overflow-auto bg-yellow-400 flex items-center justify-center p-4">
      <AnimatePresence mode="wait">
        {mostrarPortada ? (
          <motion.div
            className="bg-white p-10 rounded-2xl shadow-2xl text-center border border-black w-full max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <img
              src={urlImagenPortada}
              alt="Portada"
              className="w-full h-60 object-cover rounded-xl mb-6 border border-black"
            />
            <h1 className="text-3xl font-extrabold mb-4 text-black uppercase">Triptico</h1>
            <ul className="text-black text-lg text-left mb-6 space-y-2 font-medium">
              <li>✪ Examen final: Herramientas de Software y Sistemas opertivos.</li>
              <li>✪ Alumno: Jorge Andrés Faisal Sulub.</li>
              <li>✪ Docente: Aldo Roberto Echeverria Carrera.</li>
            </ul>
            <button
              className="px-6 py-3 bg-black text-yellow-400 rounded-xl hover:bg-gray-800 font-bold uppercase"
              onClick={() => setMostrarPortada(false)}
            >
              Ver Tríptico
            </button>
          </motion.div>
        ) : (
          <>
            <AnimatePresence>
              {panelEnfocado && (
                <motion.div
                  className="fixed inset-0 flex items-center justify-center bg-yellow-200/70 backdrop-blur-md z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-lg w-full text-center border border-black">
                    <img
                      src={paneles.find((p) => p.id === panelEnfocado)?.imagen}
                      alt="Imagen del panel"
                      className="w-full h-48 object-cover rounded-xl mb-4 border"
                    />
                    <h2 className="text-2xl font-bold mb-4 text-black uppercase">
                      {paneles.find((p) => p.id === panelEnfocado)?.titulo}
                    </h2>
                    <p className="text-base mb-6 text-black text-justify">
                      {paneles.find((p) => p.id === panelEnfocado)?.contenido}
                    </p>
                    <button
                      className="px-4 py-2 bg-black text-yellow-400 rounded-xl hover:bg-gray-800 font-semibold"
                      onClick={quitarEnfoque}
                    >
                      Volver
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl px-4 ${panelEnfocado ? "blur-sm" : ""}`}>
              {paneles.map((panel) => (
                <motion.section
                  key={panel.id}
                  className={`bg-white p-6 rounded-2xl shadow-lg border border-black hover:bg-yellow-200 cursor-pointer ${
                    panelEnfocado ? "pointer-events-none" : ""
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  layout
                  onClick={() => enfocarPanel(panel.id)}
                >
                  <img
                    src={panel.imagen}
                    alt={`Imagen de ${panel.titulo}`}
                    className="w-full h-40 md:h-48 object-cover rounded-lg mb-3 border"
                  />
                  <h2 className="text-xl font-bold mb-2 text-black uppercase">{panel.titulo}</h2>
                  <p className="text-base text-black text-justify">{panel.contenido}</p>
                </motion.section>
              ))}
            </div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
