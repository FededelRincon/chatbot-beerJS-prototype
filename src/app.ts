import { createBot } from '@builderbot/bot'
import { adapterFlow } from './flow'

import { adapterProvider } from './providers';

import { PORT } from './config';

import { routeHandlers } from './routes';
import { adapterDB } from './databse';


const main = async () => {
    try {
        // Espera a que `adapterFlow` y `routeHandlers` se resuelvan
        const flow = await adapterFlow;
        const routes = await routeHandlers;

        const { handleCtx, httpServer } = await createBot({
            flow: flow,
            provider: adapterProvider,
            database: adapterDB,
        }, {
            queue: {
                timeout: 3000,
                concurrencyLimit: 50
            }
        })

        // agrega rutas
        routes.forEach((handler) => {
            if (typeof handler === 'function') {
                handler(handleCtx);
            } else {
                console.warn('handler not valid:', handler);
            }
        });

        httpServer(+PORT)
    } catch (error) {
        console.error('Error when bot iniciated:', error);
        process.exit(1);
    }
}

main().catch(error => {
    console.error('Not captured error:', error);
    process.exit(2);
});
