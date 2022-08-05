import "./style.css";
import typescriptLogo from "./typescript.svg";

import { sum } from "@examples/import-vite-build/math";
import { logger } from "@examples/import-vite-build/logger";

import { sum as sum2 } from "@examples/single-vite-config/math";
import { logger as logger2 } from "@examples/single-vite-config/logger";

logger.log(`Sum of 1 and 2 is ${sum(1, 2)}`);

logger2.log(`Sum of 1 and 2 is ${sum2(1, 2)}`);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;
