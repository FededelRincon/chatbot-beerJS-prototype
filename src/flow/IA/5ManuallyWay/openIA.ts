import OpenAI from "openai";

  const client = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'], 
  });

  export const chatGPT = async (history: Array<{ role: string, content: string }>, prompt: string) => {
    try {
        const messages = [
            ...history,
            { role: "system", content: prompt }
        ];

        const response = await client.chat.completions.create({
            model: 'gpt-3.5-turbo', 
            messages: messages as Array<{ role: 'system' | 'user', content: string }>,
          });

          return response.choices[0].message.content;

    } catch (error) {
        console.error('Error al obtener respuesta de la IA:', error);
        return "ERROR";
    }
};
