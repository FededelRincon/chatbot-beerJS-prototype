import { createReadStream } from "fs";
import { join } from "path";
import { adapterProvider } from "~/providers";

export const qrRoutes = (handleCtx: Function) => {
  adapterProvider.server.get(
    "/qr",
    handleCtx(async (bot, req, res) => {
      const PATH_QR = join(process.cwd(), `bot.qr.png`);
      const fileStream = createReadStream(PATH_QR);
      res.writeHead(200, { "Content-Type": "image/png" });
      return fileStream.pipe(res);
    })
  );
};
