export default function delay<T>(
  time: number,
  callback: () => T = () => true as T
): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (typeof callback === "function") {
        resolve(callback());
      } else {
        resolve(callback);
      }
    }, time);
  });
}
