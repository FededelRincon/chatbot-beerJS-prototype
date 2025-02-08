import ollama from "ollama";

export const getOllamaResponse = async (prompt, history = []) => {
  try {
    let messages;
    // Si no hay historial, usamos un mensaje de sistema con instrucciones y otro de usuario con la consulta
    if (history.length === 0) {
      messages = [
        {
          role: "system",
          content: "Responde la siguiente pregunta en menos de 200 caracteres:",
        },
        { role: "user", content: prompt },
      ];
    } else {
      // Si se tiene historial, se asume que ya se configuraron los roles apropiadamente
      messages = [{ role: "system", content: prompt }, ...history];
    }
    // console.log("Enviando mensajes a ollama:", messages);

    const response = await ollama.chat({
      model: "llama3.2:3b",
      messages: messages,
    });

    // console.log("Respuesta de ollama:", response);
    if (response && response.message && response.message.content) {
      return response.message.content;
    } else {
      console.error("La respuesta no tiene el formato esperado:", response);
      return "ERROR: Formato de respuesta inesperado.";
    }
  } catch (error) {
    console.error("Error al obtener respuesta de la IA:", error);
    throw error;
  }
};
