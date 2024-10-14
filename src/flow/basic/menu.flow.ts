import { addKeyword, EVENTS } from "@builderbot/bot";
import { Database, Provider } from "~/types/genericTypes";

import { registerFlow } from "../examples/register.flow";
import { byeFlow } from "./bye.flow";

import { networksFlow } from "../beerjs/networks.flow";
import { AssetsBeerJsFlow } from "../beerjs/assetsBeerJs.flow";
import { relevantLinksFlow } from "../beerjs/relevantLinks.flow";
import { ShowYourselfFlow } from "../beerjs/showYourself.flow";




export const menuFlow = addKeyword<Provider, Database>(['menu', 'Menu', 'MENU', EVENTS.ACTION])
    .addAnswer(
        [
            '🙏 Elegi una opcion:\n',
            'Toca 1 para ver *redes* de beer JS\n',
            'Toca 2 para *descargar* assets de la Beer JS\n',
            'Toca 3 para ver *links relevantes*\n',
            'Toca 4 para ver los datos *capturables*\n',
            'Toca 5 para... idea de states?? \n',
            'Toca 6 para ollama con langchain ??\n',
            'Toca 7 para ver datos del creador del bot \n',
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
                case '3':
                    return gotoFlow(relevantLinksFlow);
                case '4':
                    return gotoFlow(ShowYourselfFlow);
                case '0':
                    return gotoFlow(byeFlow);
                default:
                    await flowDynamic('Por favor, selecciona una opción válida. Intenta nuevamente');
                    return gotoFlow(menuFlow);  //hago asi para que vuelva a aparecer el menu en pantalla
                    
                    // return fallBack('Respuesta no válida, por favor selecciona una opción válida.'); //Aca no muestra el menu nuevamente
            }
        }
    )