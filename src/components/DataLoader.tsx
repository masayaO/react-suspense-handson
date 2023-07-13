import { FC } from "react";
import { useData } from "../hooks/useData";
import { fetchData1 } from "../data/fetchData1";
import { Loadable } from "../utils/Loadable";

export const DataLoader: FC<{ data: Loadable<string> }> = ({ data }) => {
  const value = data.getOrThrow();
  return (
    <div>
      <div>Data is {value}</div>
    </div>
  );
};
