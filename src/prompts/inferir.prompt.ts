import { readFileSync } from "fs";

// Prompt para detección de intenciones
export const manuallyWayPrompt = `Como una inteligencia artificial avanzada, tu tarea es analizar el contexto de una conversación y determinar la acción más apropiada:

Posibles acciones a realizar:
1. LISTADO: Esta función se debe realizar cuando el cliente solicite ver todas las opciones disponibles o ayuda.
2. REDES: Esta función se debe realizar cuando el cliente solicita ver las redes sociales de beerJS.
3. DESCARGAR: Esta acción se debe realizar cuando el cliente solicite descargar los archivos de beerJS.
4. LINKS: Esta función se debe realizar cuando el cliente necesite información sobre links de la charla.
5. CAPTURAR: Esta función se debe realizar cuando el cliente quiere probar que el bot capture sus datos.
6. CREADOR: Esta función se debe realizar cuando el cliente quiere información del creador del chatbot.

7. HOLA: Esta función se debe realizar cuando el cliente salude como inicio de conversación.
8. ADIOS: Esta función se debe realizar cuando el cliente se despida.
9. AUDIO: Esta función se debe realizar cuando el cliente nos envíe un audio.
10. MEDIA: Esta función se debe realizar cuando el cliente nos envíe un archivo multimedia.
11. MENU: Esta función se debe realizar cuando el cliente solicite ver el menu.

12. DESCONOCIDO: Esta función se debe realizar cuando la IA no pueda realizar ninguna de las demás opciones.

Respuesta ideal: responde con una de estas opciones (LISTADO|REDES|DESCARGAR|LINKS|CAPTURAR|CREADOR|HOLA|ADIOS|AUDIO|MEDIA|MENU|DESCONOCIDO)`;

// quiero ver las redes

// audio

// quiero ver todas las opciones

// foto

// quiero descargar archivos

// sticker

// Quien es mejor messi o ronaldo

// que es mejor deepssek o chatgpt ?

// donde queda argentina ?

// quiero mas links
