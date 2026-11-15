import { useState } from "react";
import type { SubmitEvent } from "react";
import { invoke } from "@tauri-apps/api/core";

import vite from "./assets/vite.svg";
import tauri from "./assets/tauri.svg";
import typescript from "./assets/typescript.svg";

export default function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  async function greet(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const result = await invoke<string>("greet", { name });
    setMessage(result);
  }

  return (
    <main className="container">
      <h1>Guitar Hub</h1>

      <div className="row">
        <a href="https://vite.dev" target="_blank">
          <img src={vite} className="logo vite" alt="Vite logo" />
        </a>

        <a href="https://tauri.app" target="_blank">
          <img src={tauri} className="logo tauri" alt="Tauri logo" />
        </a>

        <a href="https://www.typescriptlang.org/docs" target="_blank">
          <img
            src={typescript}
            className="logo typescript"
            alt="TypeScript logo"
          />
        </a>
      </div>

      <p>Click on the Tauri logo to learn more about the framework</p>

      <form className="row" id="greet-form" onSubmit={greet}>
        <input
          id="greet-input"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter a name..."
        />
        <button type="submit">Greet</button>
      </form>

      <p id="greet-msg">{message}</p>
    </main>
  );
}
