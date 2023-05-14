import { ServerActions } from "./server-actions";

const isBrowser =
  typeof window !== "undefined" && typeof document !== "undefined";

export function ServerAction() {
  return function (target: any, key: string, d: TypedPropertyDescriptor<any>) {
    if (isBrowser && d.value) {
      d.value = async () => {
        const res = await fetch(`/server-actions/${key}`, {
          method: "POST",
        });
        const data = await res.json();
        return data;
      };
      return d;
    }

    ServerActions.addAction({ target: target.name, method: key });
    return;
  };
}
