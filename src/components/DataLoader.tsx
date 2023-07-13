import { FC } from "react";
import { useData } from "../hooks/useData";
import { fetchData1 } from "../data/fetchData1";

export const DataLoader1: FC = () => {
  const data = useData("DataLoader1", fetchData1);
  return (
    <div>
      <div>Data is {data}</div>
    </div>
  );
};

export const DataLoader2: FC = () => {
  const data = useData("DataLoader2", fetchData1);
  return (
    <div>
      <div>Data is {data}</div>
    </div>
  );
};
