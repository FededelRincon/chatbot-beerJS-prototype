import { addKeyword, EVENTS } from "@builderbot/bot";
import { Database, Provider } from "~/types/genericTypes";
// import { menuFlow } from "./menu.flow";
import { MenuIAFlow } from "../IA/5ManuallyWay/MenuIA.flow";


export const hiFlow = addKeyword<Provider, Database>(EVENTS.WELCOME)
    .addAnswer(
        [
            '👋 Hola, bienvenido al bot de *BeerJS Bot* 🍺',
        ],
        null,
        async (ctx, { gotoFlow, flowDynamic }) => {
            // return gotoFlow(menuFlow);
            return gotoFlow(MenuIAFlow);
        }
    )