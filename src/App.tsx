import "./App.css";
import React, { Suspense } from "react";
import { DataLoader } from "./components/DataLoader";

function App() {
  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <DataLoader />
      </Suspense>
    </div>
  );
}

export default App;
