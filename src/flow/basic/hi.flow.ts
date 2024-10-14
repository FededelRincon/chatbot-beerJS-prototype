import { addKeyword, EVENTS } from "@builderbot/bot";
import { menuFlow } from "./menu.flow";
import { Database, Provider } from "~/types/genericTypes";


export const hiFlow = addKeyword<Provider, Database>(EVENTS.WELCOME)
    .addAnswer(
        [
            '👋 Hola, bienvenido al bot de *BeerJS Bot* 🍺',
        ],
        null,
        async (ctx, { gotoFlow, flowDynamic }) => {
            return gotoFlow(menuFlow);
        }
    )