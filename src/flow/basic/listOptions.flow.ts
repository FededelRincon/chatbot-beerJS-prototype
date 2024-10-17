import { addKeyword, EVENTS } from "@builderbot/bot";
import { Database, Provider } from "~/types/genericTypes";
// import { menuFlow } from "./menu.flow";
import { MenuIAFlow } from "../IA/5ManuallyWay/MenuIA.flow";


export const listOptionsFlow = addKeyword<Provider, Database>(EVENTS.WELCOME)
    .addAnswer(
        [
`👋 Las opciones disponibles son: 
1. ver redes de beerjs, 
2. descargar assets, 
3. ver links de la charla, 
4. probar capturar tus datos, 
5. ver datos del creador del bot,`,
        ],
        null,
        async (ctx, { gotoFlow, flowDynamic }) => {
            // return gotoFlow(menuFlow);
            return gotoFlow(MenuIAFlow);
        }
    )