import { createFlowRouting } from "@builderbot-plugins/langchain";
import { EVENTS } from "@builderbot/bot";
// import { configDotenv } from "dotenv";

export const FlowRoutingFlow = createFlowRouting
.setKeyword(EVENTS.WELCOME)
.setIntentions({
    intentions:[`Saludos`, "Despedida", "Consultas", ],
    description: `Saludos: Saluda si el usuario saluda.
    Despedida: si el usuario se despide, dile adios cortesmente.
    Consulta: si el usuario consulta algo que no sabes, dile que lo vas a comunicar con un agente humano`
})
.setAIModel({
    modelName:"gemini",
    args:{
        modelName:"gemini-1.5-flash",
        apikey:'123123',
        temperature:0.7,
    }
})
.create({
    afterEnd(flow) {
        return flow.addAction({},
            async (ctx, {state}) => {
            console.log(state.get('intention'))
            state.clear()
        })
    }
})