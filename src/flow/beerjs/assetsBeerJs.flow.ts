import { addKeyword, EVENTS } from "@builderbot/bot";
import { Database, Provider } from "~/types/genericTypes";
import { downloadAssetsFlow } from "./downloadAssets.flow";
import { menuFlow } from "../basic/menu.flow";



export const AssetsBeerJsFlow = addKeyword<Provider, Database>(EVENTS.ACTION)
.addAnswer(
    [
        'Estas seguro que quieres ver las imagenes?:\n',
        'Toca 1, para que te envie las imagenes 💾\n',
        'Toca 0, para *volver* al menu 🔙 \n',
    ],
    { capture: true, delay: 1},
    async (ctx, { gotoFlow, flowDynamic }) => {
        console.log('desde hiFlow, opción seleccionada:', ctx.body);

        switch (ctx.body) {
            case '1':
                return gotoFlow(downloadAssetsFlow);
            case '0':
                return gotoFlow(menuFlow);
            default:
                await flowDynamic('🤔 Si o No, no hay 3era opcion');
                return gotoFlow(AssetsBeerJsFlow);  //hago asi para que vuelva a aparecer el menu en pantalla
                // return fallBack('Respuesta no válida, por favor selecciona una opción válida.'); //Aca no muestra el menu nuevamente
        }
    }
)