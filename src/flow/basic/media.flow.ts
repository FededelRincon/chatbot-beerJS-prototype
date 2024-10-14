import { addKeyword, EVENTS } from "@builderbot/bot";
import { Database, Provider } from "~/types/genericTypes";




export const mediaFlow = addKeyword<Provider, Database>(EVENTS.MEDIA)
    .addAnswer(' ⛔ *BeerJS Bot* Mmmm no lo descargare, podria ser un virus !!',)
    .addAnswer(' 🔙 escribe *menu* para volver al menu',)


