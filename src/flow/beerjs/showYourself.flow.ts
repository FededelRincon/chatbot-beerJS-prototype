import { addKeyword, EVENTS } from "@builderbot/bot";
import { Database, Provider } from "~/types/genericTypes";
import { downloadAssetsFlow } from "./downloadAssets.flow";
import { menuFlow } from "../basic/menu.flow";



export const ShowYourselfFlow = addKeyword<Provider, Database>(EVENTS.ACTION)
.addAnswer(`👉 Este es un ejemplo para que vean la potencialidad`)
.addAnswer('Escribe algo para ser capturado\n',
    { capture: true },
    async (ctx, { flowDynamic }) => {
        const { body, from, host, name } = ctx;
        await flowDynamic(`Tu nombre en Whatsapp es: ${name}\nTu numero es: ${from}\nTu mensaje para capturar fue: "${body}"\n. Y el numero del bot es ${host}`);
    }
)
.addAnswer(`👉 Escribe *menu* para volver al menu`)