import { z } from "zod";
import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";


export const openAI = new ChatOpenAI({
    modelName: 'gpt-4',
    openAIApiKey: 'YOUR_API_KEY_HERE',
});

const SYSTEM_STRUCT= `Solo basado en el historial:
{history}
Responde la pregunta del usuario lo mejor que se pueda`;

export const PROMPT_STRUCT = ChatPromptTemplate.fromMessages([
    ["system", SYSTEM_STRUCT],
    ["human", "{question}"]
]);

const catchIntention = z.object(
    {
        intention: z.enum(['UNKNOWN', 'HI', 'REDES', 'DOWNLOAD', 'LINKS', 'CAPTURE', 'DOWNLOAD', 'CREATOR'])
            .describe(`Categoriza la siguiente conversación y decide que intención tiene`)
    }
).describe(`Dado los siguientes productos, debes estructurarlos de la mejor manera, no alteres ni edites nada.`);

const llmWithToolsCatchIntention = openAI.withStructuredOutput(catchIntention, {
    name: "CatchIntention",
});

export const LangChaingGetIntention = async (text: string, state: any): Promise<string> => {
    try {
        const { intention } = await PROMPT_STRUCT.pipe(llmWithToolsCatchIntention).invoke({
            question: text,
            history: await history.getHistory(state)
        });

        return Promise.resolve(String(intention).toLocaleLowerCase());
    } catch (errorIntention) {
        return Promise.resolve('unknown');
    }
};


const history = {
    getHistory: (state) => {
        // Aquí podrías recuperar el historial de conversaciones basado en algún estado o variable
        // Ejemplo simple: podrías devolver una lista de mensajes anteriores
        return state ? state.conversations || [] : [];
    }
};