import { BlackListRoutes } from "./Blacklist.routes";
import { SamplesRoutes } from "./fullSamples.routes";
import { MessagesRoutes } from "./Messages.routes";
import { qrRoutes } from "./qr.routes";
import { RegisterRoutes } from "./Register.routes";

export const routeHandlers = [
  qrRoutes,
  BlackListRoutes,
  SamplesRoutes,
  MessagesRoutes,
  RegisterRoutes,
];
