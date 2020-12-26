import lscache from "lscache";

export const storageService = (key, data) => {
  if (!lscache.supported()) {
    return;
  }

  if (process.env.NODE_ENV !== "production") {
    lscache.enableWarnings(true);
  }

  storageService.set = (key, data) => lscache.set(key, data);

  storageService.get = (key) => lscache.get(key);

  storageService.remove = (key) => lscache.remove(key);

  storageService.flush = () => lscache.flush();

  return {
    set,
    get,
    remove,
    flush
  };
};
