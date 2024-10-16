// importacion manual de archivos
import { createFlow } from '@builderbot/bot';
import { registerFlow } from './examples/register.flow';
import { hiFlow } from './basic/hi.flow';
import { menuFlow } from './basic/menu.flow';
import { byeFlow } from './basic/bye.flow';
import { mediaFlow } from './basic/media.flow';
import { audioFlow } from './basic/audio.flow';
import { networksFlow } from './beerjs/networks.flow';
import { downloadAssetsFlow } from './beerjs/downloadAssets.flow';
import { AssetsBeerJsFlow } from './beerjs/assetsBeerJs.flow';
import { relevantLinksFlow } from './beerjs/relevantLinks.flow';
import { RecolectingDataUserFlow } from './beerjs/recolectingDataUser.flow';
import { dataCreatorFlow } from './beerjs/dataCreator.flow';




export const adapterFlow = createFlow([
  // discordFlow,
  // fullSamplesFlow,
  registerFlow,
  // welcomeFlow

  // basic
  hiFlow, 
  menuFlow,
  byeFlow,
  mediaFlow,
  audioFlow,

  // beerjs
  networksFlow,
  AssetsBeerJsFlow,
  downloadAssetsFlow,
  relevantLinksFlow,
  RecolectingDataUserFlow,
  dataCreatorFlow,
  
]);


// importacion automatica de archivos
// src/flow/index.ts
// import { createFlow } from '@builderbot/bot';
// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath, pathToFileURL } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// async function loadFlows() {
//   try {
//     const flowFiles = fs.readdirSync(__dirname).filter(file => file.endsWith('.flow.ts'));

//     const flows = await Promise.all(
//       flowFiles.map(async file => {
//         try {
//           const filePath = path.join(__dirname, file);
//           const fileUrl = pathToFileURL(filePath).href;

//           const flowModule = await import(fileUrl);
//           const flow = flowModule.default || flowModule[Object.keys(flowModule)[0]];

//           if (!flow || typeof flow !== 'object') {
//             throw new Error(`The file ${file} does not export an valid object`);
//           }

//           return flow;
//         } catch (error) {
//           console.error(`Error when try to load from ${file}:`, error);
//           return null; // Retorna null para los flujos que no se pudieron cargar
//         }
//       })
//     );

//     // Filtra los flujos nulos (los que fallaron al cargar)
//     const validFlows = flows.filter(flow => flow !== null);

//     if (validFlows.length === 0) {
//       throw new Error("Can't load any flow");
//     }

//     return createFlow(validFlows);
//   } catch (error) {
//     console.error('Error trying to load:', error);
//     throw error;
//   }
// }

// export const adapterFlow = loadFlows().catch(error => {
//   console.error('Error al crear el flujo adaptador:', error);
//   return null;
// });