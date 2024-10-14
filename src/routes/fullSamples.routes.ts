import { adapterProvider } from "~/providers";

export const SamplesRoutes = (handleCtx: Function) => {
    adapterProvider.server.post(
        '/v1/samples',
        handleCtx(async (bot, req, res) => {
            const { number, name } = req.body
            await bot.dispatch('SAMPLES', { from: number, name })
            return res.end('trigger')
        })
    )
}