import { ServerActions } from "./server-actions";

import { Router, Request, Response } from "express";

type AnyClass = new (...args: any[]) => any;

export const bffExpress = (options: { controllers: Array<AnyClass> }) => {
  const appRouter = Router();
  const controllers: Record<string, AnyClass> = {};

  options.controllers.forEach((controller) => {
    if (!controllers[controller.name]) {
      controllers[controller.name] = controller;
    }
  });

  const serverActions = ServerActions.getAllActions();

  serverActions.forEach((action) => {
    appRouter.post(
      `/server-actions/${action.method}`,
      (_req: Request, res: Response) => {
        const controller = controllers[action.target] as Record<string, any>;
        controller[action.method]().then((data: unknown) => {
          res.json(data);
        });
      }
    );
  });
  return appRouter;
};
