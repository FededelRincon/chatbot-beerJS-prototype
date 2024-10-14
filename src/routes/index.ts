import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

// Obtener la ruta del directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function loadRouteHandlers() {
    try {
        // Filtra los archivos que terminen en .routes.ts
        const routeFiles = fs.readdirSync(__dirname).filter(file => file.endsWith('.routes.ts'));

        // Importa dinámicamente cada módulo de ruta
        const handlers = await Promise.all(
            routeFiles.map(async file => {
                try {
                    const filePath = path.join(__dirname, file);
                    const fileUrl = pathToFileURL(filePath).href;

                    // Importa el módulo y obtiene el manejador
                    const routeModule = await import(fileUrl);

                    // Verifica si el módulo exporta una función
                    const handler = routeModule.default || routeModule[Object.keys(routeModule)[0]];
                    if (typeof handler !== 'function') {
                        throw new Error(`The file ${file} does not export a valid function.`);
                    }

                    return handler;
                } catch (error) {
                    console.error(`Error when try to load file in route ${file}:`, error);
                    return null; 
                }
            })
        );

        // Filtra los manejadores nulos (los que fallaron al cargar)
        return handlers.filter(handler => handler !== null);
    } catch (error) {
        console.error('Error al cargar los manejadores de ruta:', error);
        return []; // Retorna un array vacío si hay un error general
    }
}

export const routeHandlers = await loadRouteHandlers();