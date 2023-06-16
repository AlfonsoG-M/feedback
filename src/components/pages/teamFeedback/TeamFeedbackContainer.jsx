import { useState } from "react";
import TeamFeedback from "./TeamFeedback"

const TeamFeedbackContainer = () => {
  const [array, setArray] = useState([]);
  const [crecimiento, setCrecimiento] = useState(0);

  const agregarElemento = () => {
    setArray(prevArray => {
      // Copia el array existente y agrega un nuevo elemento
      const newArray = [...prevArray, 'Nuevo elemento'];

      // Calcula el crecimiento del array
      const nuevoCrecimiento = newArray.length - prevArray.length;

      // Actualiza el estado del array y el crecimiento
      setCrecimiento(nuevoCrecimiento);
      return newArray;
    });
  };

  return (
    <div> estoy en TeamFeedbackContainer
        <TeamFeedback agregarElemento={agregarElemento} array={array} crecimiento={crecimiento} />
    </div>
  )
}

export default TeamFeedbackContainer