import { addKeyword, EVENTS } from "@builderbot/bot";
import { Database, Provider } from "~/types/genericTypes";


export const byeFlow = addKeyword<Provider, Database>(EVENTS.ACTION)
    .addAnswer('Adios, gracias por utilizar el *BeerJS Bot*, hasta luego 🍻👋',)
