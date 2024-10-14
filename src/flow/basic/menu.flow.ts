import { addKeyword, EVENTS } from "@builderbot/bot";
import { Database, Provider } from "~/types/genericTypes";

import { registerFlow } from "../examples/register.flow";
import { byeFlow } from "./bye.flow";

import { networksFlow } from "../beerjs/networksFlow";
import { AssetsBeerJsFlow } from "../beerjs/assetsBeerJsFlow";




export const menuFlow = addKeyword<Provider, Database>(['menu', 'Menu', 'MENU', EVENTS.ACTION])
    .addAnswer(
        [
            '🙏 Elegi una opcion:\n',
            'Toca 1 para ver *redes* de beer JS\n',
            'Toca 2 para *descargar* assets de la Beer JS\n',
            'Toca 3 para ver links de la charla, builderbot, chatwoot, metaBussinesSuite \n',
            'Toca 7 para ver como te ven los demas?... ctx... \n',
            'Toca 8 para... idea de states?? \n',
            'Toca 3 para ollama con langchain ??\n',
            'Toca 5 para ver datos del creador del bot \n',
            'Toca 0 para "Salir"\n',
        ],
        { capture: true, delay: Math.random() * (3000 - 1000) },
        async (ctx, { gotoFlow, flowDynamic }) => {
            console.log('desde hiFlow, opción seleccionada:', ctx.body);

            switch (ctx.body) {
                case '1':
                    return gotoFlow(networksFlow);
                case '2':
                    return gotoFlow(AssetsBeerJsFlow);
                case '0':
                    return gotoFlow(byeFlow);
                default:
                    await flowDynamic('Por favor, selecciona una opción válida. Intenta nuevamente');
                    return gotoFlow(menuFlow);  //hago asi para que vuelva a aparecer el menu en pantalla
                    
                    // return fallBack('Respuesta no válida, por favor selecciona una opción válida.'); //Aca no muestra el menu nuevamente
            }
        }
    )