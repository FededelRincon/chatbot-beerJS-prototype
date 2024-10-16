import { addKeyword, EVENTS } from "@builderbot/bot";
import { Database, Provider } from "~/types/genericTypes";


export const dataCreatorFlow = addKeyword<Provider, Database>(['creator', EVENTS.ACTION])
    .addAnswer(`🤖 El bot fue creado por Federico del Rincon`)
    .addAnswer(`Send audio from URL`, { media: 'https://cdn.freesound.org/previews/432/432972_4157918-lq.mp3'})
    .addAnswer(`🎵 Ohh que sorpresa, quien lo diria... 🎶`)
    .addAnswer(`Te dejo mi linkedin por si queres contactar: https://www.linkedin.com/in/federico-del-rincon/`)
    .addAnswer(`O te dejo mi Instagram que es donde paso mas tiempo: https://www.instagram.com/fede_dr21/`)
    .addAnswer(`👉 Escribe *menu* para volver al menu`)
