import { addKeyword, EVENTS } from "@builderbot/bot";
import { menuFlow } from "../basic/menu.flow";
import { getOllamaResponse } from "~/utils/ollamaConnection";

export const ollamaFlow = addKeyword(EVENTS.WELCOME).addAnswer(
  "Escribe tu pregunta para la IA o escribir *salir*:\n(esto puede tardar).",
  { capture: true },
  async (ctx, { flowDynamic, gotoFlow }) => {
    const userInput = ctx.body.trim();

    // Si el usuario escribe "volver", sal del flow y regresa al menú.
    if (userInput.toLowerCase() === "volver") {
      return gotoFlow(menuFlow);
    }

    // Construye el prompt con la restricción de caracteres.
    const fullPrompt = `${userInput}\n\n,PERO TU RESPUESTA NO PUEDE SUPERAR LOS 200 CARACTERES`;

    try {
      // Llama a la función externa para obtener la respuesta de la IA.
      const aiResponse = await getOllamaResponse(fullPrompt);
      await flowDynamic(aiResponse);

      // Pide al usuario otra pregunta o la palabra clave para salir.
      //   await flowDynamic("Para salir escribi *volver*, sino");

      // Vuelve a invocar el mismo flow para seguir en bucle.
      return gotoFlow(ollamaFlow);
    } catch (error) {
      console.error("Error en ollamaFlow:", error);
      await flowDynamic(
        "Lo siento, ocurrió un error al procesar tu solicitud."
      );
      return gotoFlow(ollamaFlow);
    }
  }
);
