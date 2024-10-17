// import "dotenv/config"
import { EVENTS } from "@builderbot/bot"

import z from "zod"
import { createAIFlow } from "@builderbot-plugins/langchain"


export const LangChainFlow = createAIFlow
    .setKeyword(EVENTS.WELCOME)
    .setAIModel({ modelName: 'gemini',
        args:{
            modelName:"gemini-1.5-flash",
            apikey:process.env.GOOGLE_API_KEY,
            temperature:0.7,
        }
     }
    )
    .setZodSchema(
        z.object({
            intencion: z.string().nullable()
            .describe(`
Eres un asistente virtual en WhatsApp. Tu tarea es entender la intención del usuario y responder adecuadamente.
Posibles intenciones:
1. Saludo
2. Despedida
3. Consulta de información
4. Solicitud de ayuda
5. Queja
6. Otra
7. Indefinido
`),
            
            
        })
    )
    .create({
        afterEnd(flow) {
            return flow.addAction((_, { state }) => {
                console.log(state.get('aiAnswer'))
            })
        }
    })