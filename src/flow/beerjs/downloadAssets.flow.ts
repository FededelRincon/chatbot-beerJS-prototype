import { addKeyword, EVENTS } from "@builderbot/bot";
import { join } from "path";
import { Database, Provider } from "~/types/genericTypes";



export const downloadAssetsFlow = addKeyword<Provider, Database>(EVENTS.ACTION)
    .addAnswer(`Cerveza`, { media: join(process.cwd(), 'assets', 'cerveza.png') })
    .addAnswer(`Chancho`, { media: join(process.cwd(), 'assets', 'chancho.png') })
    .addAnswer(`Muchas Gracias por utilizar el *BeerJS Bot*, si quieres seguir utilizando el bot, escribe *Menu*`, )

