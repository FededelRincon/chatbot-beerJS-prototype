import { addKeyword, EVENTS } from "@builderbot/bot";
import { Database, Provider } from "~/types/genericTypes";
import { downloadAssetsFlow } from "./downloadAssets.flow";
import { menuFlow } from "../basic/menu.flow";



export const RecolectingDataUserFlow = addKeyword<Provider, Database>(EVENTS.ACTION)
.addAnswer(`👉 Este es un ejemplo para mostrar como se podria pedir info al usuario (usando ctx y state). Comencemos`)

.addAnswer(`Tu apellido?`, { capture: true }, async (ctx, { state }) => {
    await state.update({ lastName: ctx.body })
})

.addAnswer(`Tu nombre?`, { capture: true }, async (ctx, { state }) => {
    await state.update({ name: ctx.body })
})

.addAnswer(`¿Queres que te busque en alguna red social? (dejame user o @)`, { capture: true }, async (ctx, { state }) => {
    await state.update({ socialMedia: ctx.body })
})

.addAnswer(`Relax, no me interesa saber el numero de tu tarjeta de credito.... Aunquee... 🤔🤣`, { delay: 1000 })

.addAction(async (ctx, { flowDynamic, state }) => {
    await flowDynamic(`No te pido tu numero porque ya lo tengo: ${ctx.from}`, {delay: 1000})
})

.addAction(async (_, { flowDynamic, state }) => {
    await flowDynamic(`Bueno *${state.get('name')} ${state.get('lastName')}*, en breve te voy a estar agendando, gracias por tus datos! 👋`, { delay: 2000 })
})

.addAnswer(`👉 Escribe *menu* para volver al menu`)