import { addKeyword, EVENTS } from "@builderbot/bot";
import { Database, Provider } from "~/types/genericTypes";
import { registerFlow } from "../examples/register.flow";
import { byeFlow } from "./bye.flow";




export const menuFlow = addKeyword<Provider, Database>(EVENTS.ACTION)
    .addAnswer(
        [
            '🙏 Elegi una opcion:\n',
            'Toca 1 para "explicar mi funcionamiento"\n',
            'Toca 2 para ver los supermercados de los que extraigo los datos\n',
            'Toca 3 para para *buscar* el precio de un producto\n',
            'Toca 4 para ver mas *información* sobre el crador del Bot\n',
            'Toca 5 para ver usar *ollama* \n',
            'Toca 0 para "Salir"\n',
        ],
        { capture: true, delay: Math.random() * (3000 - 1000) },
        async (ctx, { gotoFlow, flowDynamic }) => {
            console.log('desde hiFlow, opción seleccionada:', ctx.body);

            switch (ctx.body) {
                case '1':
                    return gotoFlow(registerFlow);
                case '2':
                    return gotoFlow(registerFlow);
                case '3':
                    return gotoFlow(registerFlow);
                case '4':
                    return gotoFlow(registerFlow);
                case '5':
                    return gotoFlow(registerFlow);
                case '0':
                    return gotoFlow(byeFlow);
                default:
                    await flowDynamic('Por favor, selecciona una opción válida. Intenta nuevamente');
                    return gotoFlow(menuFlow);  //hago asi para que vuelva a aparecer el menu en pantalla
                    
                    // return fallBack('Respuesta no válida, por favor selecciona una opción válida.'); //Aca no muestra el menu nuevamente
            }
        }
    )