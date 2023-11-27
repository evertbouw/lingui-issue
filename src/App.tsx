import { Trans, t } from "@lingui/macro";
import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer nofollow">
          <img src={viteLogo} className="logo" alt={t`Vite logo`} />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer nofollow">
          <img src={reactLogo} className="logo react" alt={t`React logo`} />
        </a>
      </div>
      <h1>
        <Trans>Vite + React</Trans>
      </h1>
      <div className="card">
        <button
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          <Trans>count is {count}</Trans>
        </button>
        <p>
          <Trans>
            Edit <code>src/App.tsx</code> and save to test HMR
          </Trans>
        </p>
      </div>
      <p className="read-the-docs">
        <Trans>Click on the Vite and React logos to learn more</Trans>
      </p>
    </>
  );
}

export default App;
