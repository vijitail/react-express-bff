import { ServerAction } from "../core/server-action.decorator";

let counter = 0;

export class AppController {
  @ServerAction()
  static async incrementCounter(): Promise<{ counter: number }> {
    counter++;
    return { counter };
  }
}
