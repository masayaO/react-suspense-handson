import { fetchData1 } from "../data/fetchData1";

const dataMap: Map<string, unknown> = new Map();

export const useData = <T>(cacheKey: string, featch: () => Promise<T>): T => {
  const cachedData = dataMap.get(cacheKey) as T | undefined;
  // dataがまだ無ければローディングを開始する
  if (cachedData === undefined) {
    throw fetchData1().then((d) => dataMap.set(cacheKey, d));
  }
  return cachedData;
};
