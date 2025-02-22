import { addKeyword, EVENTS } from "@builderbot/bot";
import { menuFlow } from "../basic/menu.flow";

export const noDisponibleFlow = addKeyword(EVENTS.WELCOME)
  .addAnswer(
    "Lo siento, el servicio de IA no está disponible en este momento.",
    { capture: false }
  )
  .addAnswer(
    "*PERO* te invito a que descarges el repo, de paso dejes tu ⭐ y lo pruebes en tu PC",
    { capture: false }
  )
  .addAnswer(
    "Volviendo al menú...",
    { delay: 1500, capture: false },
    async (ctx, { gotoFlow }) => {
      return gotoFlow(menuFlow);
    }
  );
