/* eslint-disable @typescript-eslint/no-explicit-any */

type ServerActionType = {
  target: any;
  method: string;
};

export class ServerActions {
  private static actions: Array<ServerActionType>;

  static addAction(action: ServerActionType) {
    if (!ServerActions.actions) ServerActions.actions = [];
    ServerActions.actions.push(action);
  }

  static getAllActions() {
    return ServerActions.actions;
  }
}
