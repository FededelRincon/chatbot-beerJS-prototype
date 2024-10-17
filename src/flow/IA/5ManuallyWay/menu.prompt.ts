export const manuallyWayPrompt = `
Como una inteligencia artificial avanzada, tu tarea es analizar el contexto de una conversación y determinar cuál de las siguientes acciones es más apropiada para realizar:
--------------------------------------------------------

Posibles acciones a realizar:
1. LISTADO: Esta función se debe realizar cuando el cliente solicite ver todas las opciones disponibles o la lista de opciones.
2. REDES: Esta funcionalidad se debe realizar cuando el cliente solicita ver las redes sociales de beerJS.
3. DESCARGAR: Esta acción se debe realizar cuando el cliente solicite descargar los assets de beerJS.
4. LINKS: Esta función se debe realizar cuando el cliente solicita información sobre links de la charla (estos son links de repositorios y documentacion, no confundir con beerjs).
5. CAPTURAR: Esta función se debe realizar cuando el cliente quiere probar que el bot capture sus datos.
6. CREADOR: Esta función se debe realizar cuando el cliente quiere informacion del creador del chatbot.

7. HOLA: Esta función se debe realizar cuando el cliente salude como inicio de conversacion.
8. ADIOS: Esta función se debe realizar cuando el cliente se despida.
9. AUDIO: Esta función se debe realizar cuando el cliente nos envie un audio.
10. MEDIA: Esta función se debe realizar cuando el cliente nos envie un archivo multimedia.
11. MENU: Esta función se debe realizar cuando el cliente solicite ver el menu.
12. DESCONOCIDO: Esta función se debe realizar cuando la IA no puede realizar ninguna de las demas opciones.


Respuesta ideal: responde con una de estas opciones (LISTADO|REDES|DESCARGAR|LINKS|CAPTURAR|CREADOR|HOLA|ADIOS|AUDIO|MEDIA|MENU|DESCONOCIDO).

--------------------------------------------------------
Historial de conversación:

`