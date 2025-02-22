// src/flows/beerjs/ollama.flow.js
import { addKeyword, EVENTS } from "@builderbot/bot";
import { menuFlow } from "../basic/menu.flow";
import { getOllamaResponse } from "~/utils/ollamaConnection";
import { manuallyWayPrompt } from "~/prompts/inferir.prompt";

export const ollamaInfiereFlow = addKeyword(EVENTS.WELCOME).addAnswer(
  "Escribe tu mensaje y la IA 🤖 inferira tu intencion:\n(Escribe *volver* para regresar al menú)",
  { capture: true },
  async (ctx, { flowDynamic, gotoFlow }) => {
    const userInput = ctx.body.trim();

    // Si el usuario escribe "volver", regresa al menú
    if (userInput.toLowerCase() === "volver") {
      return gotoFlow(menuFlow);
    }

    try {
      // Construimos el prompt completo con el input del usuario
      const fullPrompt = `${manuallyWayPrompt}\n\n-----------------------------------------\nMensaje del usuario: ${userInput}\n-----------------------------------------\n\nIMPORTANTE: Solo debes responder con UNA de las palabras clave mencionadas arriba, nada más.`;

      // Obtenemos la intención detectada por Ollama
      const detectedIntent = await getOllamaResponse(fullPrompt);

      // Mostramos la intención detectada al usuario
      await flowDynamic(
        ["🎯 Intención detectada: *" + detectedIntent.trim() + "*"].join("\n")
      );

      // Volvemos al mismo flow para mantener el ciclo
      return gotoFlow(ollamaInfiereFlow);
    } catch (error) {
      console.error("Error en ollamaFlow:", error);
      await flowDynamic(
        [
          "❌ Ocurrió un error al procesar tu mensaje.",
          "Por favor, intenta nuevamente o escribe *volver* para regresar al menú",
        ].join("\n")
      );
      return gotoFlow(ollamaInfiereFlow);
    }
  }
);

export default ollamaInfiereFlow;
