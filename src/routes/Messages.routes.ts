import { adapterProvider } from "~/providers";

export const MessagesRoutes = (handleCtx: Function) => {
    adapterProvider.server.post(
        "/v1/messages",
        handleCtx(async (bot: any, req: any, res: any) => {
            const { number, message, urlMedia } = req.body;
            await bot.sendMessage(number, message, { media: urlMedia ?? null });
            return res.end("sended");
        })
    );
}
