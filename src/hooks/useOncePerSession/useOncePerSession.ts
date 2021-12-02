export const useOncePerSession = (f: Function) => {
  const name = `oncePerSession-${f.name}`;

  if (!(typeof sessionStorage.getItem(name) === "string")) f();

  sessionStorage.setItem(name, name);
};
