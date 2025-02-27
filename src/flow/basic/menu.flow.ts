import { addKeyword, EVENTS } from "@builderbot/bot";
import { Database, Provider } from "~/types/genericTypes";

import { registerFlow } from "../examples/register.flow";
import { byeFlow } from "./bye.flow";

import { networksFlow } from "../beerjs/networks.flow";
import { AssetsBeerJsFlow } from "../beerjs/assetsBeerJs.flow";
import { relevantLinksFlow } from "../beerjs/relevantLinks.flow";
import { RecolectingDataUserFlow } from "../beerjs/recolectingDataUser.flow";
import { dataCreatorFlow } from "../beerjs/dataCreator.flow";
import { noDisponibleFlow } from "../beerjs/noDisponible.flow";

export const menuFlow = addKeyword<Provider, Database>([
  "menu",
  "Menu",
  "MENU",
  EVENTS.ACTION,
]).addAnswer(
  [
    "🙏 Elegi una opcion:\n",
    "Toca 1 para ver *REDES* de beer JS\n",
    "Toca 2 para *DESCARGAR* assets de la Beer JS\n",
    "Toca 3 para ver *LINKS* relevantes de la charla\n",
    "Toca 4 para *CAPTURAR* tus datos \n",
    "Toca 5 para ver usar *builderbot* con *IA* \n",
    "Toca 9 para ver datos del *CREADOR* del bot\n",
    'Toca 0 para "Salir"\n',
  ],
  { capture: true, delay: Math.random() * (3000 - 1000) },
  async (ctx, { gotoFlow, flowDynamic }) => {
    console.log("desde hiFlow, opción seleccionada:", ctx.body);

    switch (ctx.body) {
      case "1":
        return gotoFlow(networksFlow);
      case "2":
        return gotoFlow(AssetsBeerJsFlow);
      case "3":
        return gotoFlow(relevantLinksFlow);
      case "4":
        return gotoFlow(RecolectingDataUserFlow);
      case "5":
        return gotoFlow(noDisponibleFlow);
      case "9":
        return gotoFlow(dataCreatorFlow);
      case "0":
        return gotoFlow(byeFlow);
      default:
        await flowDynamic(
          "Por favor, selecciona una opción válida. Intenta nuevamente"
        );
        return gotoFlow(menuFlow); //hago asi para que vuelva a aparecer el menu en pantalla

      // return fallBack('Respuesta no válida, por favor selecciona una opción válida.'); //Aca no muestra el menu nuevamente
    }
  }
);
