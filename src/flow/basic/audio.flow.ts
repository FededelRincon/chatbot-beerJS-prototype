import { addKeyword, EVENTS } from "@builderbot/bot";
import { Database, Provider } from "~/types/genericTypes";




export const audioFlow = addKeyword<Provider, Database>(EVENTS.VOICE_NOTE)
    .addAnswer(' ⛔ A *BeerJS Bot* le da fiaca escuchar audios de mas de 1 segundo',)
    .addAnswer(' 🔙 escribe *menu* para volver al menu',)


