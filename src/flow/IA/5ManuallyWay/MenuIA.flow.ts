import { addKeyword, EVENTS } from "@builderbot/bot";
import { Database, Provider } from "~/types/genericTypes";
import { getHistoryParse, pushHistoryParse } from "./handleHistory";
import { ollamaIA } from "./ollamaIA";

import { manuallyWayPrompt } from "./menu.prompt";

import { networksFlow } from "~/flow/beerjs/networks.flow";
import { AssetsBeerJsFlow } from "~/flow/beerjs/assetsBeerJs.flow";
import { relevantLinksFlow } from "~/flow/beerjs/relevantLinks.flow";
import { RecolectingDataUserFlow } from "~/flow/beerjs/recolectingDataUser.flow";
import { dataCreatorFlow } from "~/flow/beerjs/dataCreator.flow";
import { hiFlow } from "~/flow/basic/hi.flow";
import { byeFlow } from "~/flow/basic/bye.flow";
import { audioFlow } from "~/flow/basic/audio.flow";
import { mediaFlow } from "~/flow/basic/media.flow";
import { listOptionsFlow } from "~/flow/basic/listOptions.flow";

export const MenuIAFlow = addKeyword<Provider, Database>(EVENTS.ACTION)
    .addAnswer(`*BeerJS Bot con IA* esta listo para escucharte...`, 
        { delay: 100, capture: true }, 
        async (ctx, { state }) => {
        // Guardamos el mensaje del usuario en el historial
        await pushHistoryParse(state, 'user', ctx.body);
    })
    .addAnswer(`🕧...`)
    .addAction(async (ctx, { state, gotoFlow }) => {
        // Usamos la función getHistoryParse para obtener el historial formateado
        const history = getHistoryParse(state);

        // Generamos el prompt utilizando el historial
        const prompt = manuallyWayPrompt;

        // Llamamos a la IA de Ollama con el historial y el prompt
        const aiResponse = await ollamaIA(history, prompt);
        await pushHistoryParse(state, 'system', aiResponse);

        switch (true) {
            case aiResponse.includes('LISTADO'):    return gotoFlow(listOptionsFlow);
            case aiResponse.includes('REDES'):      return gotoFlow(networksFlow);
            case aiResponse.includes('DESCARGAR'):  return gotoFlow(AssetsBeerJsFlow);
            case aiResponse.includes('LINKS'):      return gotoFlow(relevantLinksFlow);
            case aiResponse.includes('CAPTURAR'):   return gotoFlow(RecolectingDataUserFlow);
            case aiResponse.includes('CREADOR'):    return gotoFlow(dataCreatorFlow);
            case aiResponse.includes('HOLA'):       return gotoFlow(hiFlow);
            case aiResponse.includes('ADIOS'):      return gotoFlow(byeFlow);
            case aiResponse.includes('AUDIO'):      return gotoFlow(audioFlow);
            case aiResponse.includes('MEDIA'):      return gotoFlow(mediaFlow);
            default: return gotoFlow(MenuIAFlow);
          }
    });
