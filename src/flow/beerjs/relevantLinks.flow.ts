import { addKeyword, EVENTS } from "@builderbot/bot";
import { Database, Provider } from "~/types/genericTypes";


export const relevantLinksFlow = addKeyword<Provider, Database>(EVENTS.ACTION)
.addAnswer('Estas son las redes de BeerJS CBA 🍻')
.addAnswer(`
1. *Repositorio*: https://github.com/FededelRincon/chatbot-beerJS-prototype/
2. *BuilderBot*: https://builderbot.vercel.app/
3. *ChatWoot*: https://www.chatwoot.com/
4. *Railway*: https://railway.app/
5. *MetaBussinesSuite*: https://business.whatsapp.com/products/platform-pricing?country=Argentina&currency=D%C3%B3lar%20(USD)&category=Servicio
    `,{ delay: 1 })
.addAnswer(`👉 Escribe *menu* para volver al menu`)
