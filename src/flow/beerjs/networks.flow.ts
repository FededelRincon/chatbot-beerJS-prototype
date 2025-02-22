import { addKeyword, EVENTS } from "@builderbot/bot";
import { Database, Provider } from "~/types/genericTypes";

export const networksFlow = addKeyword<Provider, Database>(EVENTS.ACTION)
  .addAnswer("Estas son las redes de BeerJS CBA 🍻")
  .addAnswer(
    `
    1. *Instagram*: https://www.instagram.com/beerjscba
    2. *Youtube*: https://www.youtube.com/@BeerJSCba
    3. *X*: https://x.com/beerjscba
    4. *Meetup*: https://www.meetup.com/beerjscba/
    5. *Tienda*: https://www.beerjscba.com/tienda
    6. *Mail*: hola@beerjscba.com 📩
        `,
    { delay: 1 }
  )
  .addAnswer(`Recuerden mandar un mail aca para proponer sus charlas 😎!!!`)
  .addAnswer(`👉 Escribe *menu* para volver al menu`);
