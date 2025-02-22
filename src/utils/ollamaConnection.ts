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

    const response = await ollama.chat({
      model: "llama3.2:3b",
      // model: "deepseek-r1:1.5b ",  //falla porque usa <think></think> todo el tiempo
      // model: "llama3.2:latest  ",
      // model: "phi3:latest",
      // model: "codeqwen:latest ",
      messages: messages,
    });

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
