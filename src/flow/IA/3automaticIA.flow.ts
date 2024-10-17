import { ConversationChain } from "langchain/chains";
import { Gemini } from "../services/Gemini.js";
import { BufferMemory } from "langchain/memory";
import { addKeyword, EVENTS } from "@builderbot/bot";



const chain = new ConversationChain({
    llm: Gemini,
    memory: new BufferMemory(),
})

export async function GenerarRespuesta(mensaje) {
    const respuesta= await chain.call({ input: mensaje})
    return respuesta.response
}

export const AutomaticIAFlow= addKeyword(EVENTS.WELCOME)
.addAction({capture:true},async (ctx, {flowDynamic}) => {
    const body = ctx.body;
    const respuesta= await GenerarRespuesta(body);
    await flowDynamic(respuesta)
})