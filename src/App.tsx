import "./App.css";
import React, { Suspense } from "react";
import { DataLoader1, DataLoader2 } from "./components/DataLoader";

function App() {
  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <DataLoader1 />
        <DataLoader2 />
      </Suspense>
    </div>
  );
}

export default App;
