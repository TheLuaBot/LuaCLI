// (C) PerfectTea - All Rights Reserved.
// src/index.ts

import { Command } from "commander";
import { showPanel } from "./utils/panel.ts";
import LuaClient from "./utils/LuaClient.ts";
import chalk from "chalk";
import os from "node:os";

const CLI = new Command();
const user = os.userInfo().username;
const lua = new LuaClient(user);

CLI.name("LuaCLI")
  .description("Uma CLI Feita para a LuaBot, está no terminal e no Discord!")
  .version("1.0.0")
  .option("-s, --setup", "Inicia o painel de Inicialização da LuaCLI.")
  .option("--help", "Mostra mais informações sobre a CLI.");

CLI.parse(process.argv);

const options = CLI.opts();

async function main() {
  if (options.setup) {
    console.log(`💻 Iniciando Configuração...`);
    await lua.start();
    await lua.setup();
  } else {
    console.log(`❌ ${chalk.red("Não foi possível iniciar o setup!")}`);
  }

  if (options.help) {
    await lua.help();
  } else {
    console.log(`❌ ${chalk.red("Ocorreu um Erro!")}`);
  }

  showPanel();
}

main();
