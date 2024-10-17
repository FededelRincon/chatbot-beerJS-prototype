import ollama from 'ollama';

export const ollamaIA = async (history: Array<{ role: string, content: string }>, prompt: string) => {
    try {
        const messages = [
            { role: "system", content: prompt },
            ...history
        ];

        const response = await ollama.chat({
            model: 'llama3.1', 
            // model: 'llama3.1',
            // model: 'codeqwen',
            // model: 'phi3', 

            messages: messages
        });

        return response.message.content;

    } catch (error) {
        console.error('Error al obtener respuesta de la IA:', error);
        return "ERROR";
    }
};
