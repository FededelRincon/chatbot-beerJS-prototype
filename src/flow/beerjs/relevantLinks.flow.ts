import { addKeyword, EVENTS } from "@builderbot/bot";
import { Database, Provider } from "~/types/genericTypes";


export const relevantLinksFlow = addKeyword<Provider, Database>(EVENTS.ACTION)
    .addAnswer('Estas son las redes de BeerJS CBA 🍻')
    .addAnswer(`
    1. *BuilderBot*: https://builderbot.vercel.app/
    2. *ChatWoot*: https://www.chatwoot.com/
    3. *MetaBussinesSuite*: https://business.whatsapp.com/products/platform-pricing?country=Argentina&currency=D%C3%B3lar%20(USD)&category=Servicio
    4. *Railway*: https://railway.app/
        `,{ delay: 1 })
    .addAnswer(`👉 Escribe *menu* para volver al menu`)
