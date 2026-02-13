// (C) PerfectTea - All Rights Reserved.

// utils/panel.ts

import chalk from "chalk";

export function showPanel() {
  const logo = `
    _        _    _            _____  _       _____ 
   | |      | |  | |    /\\    / ____|| |     |_   _|
   | |      | |  | |   /  \\  | |     | |       | |  
   | |      | |  | |  / /\\ \\ | |     | |       | |  
   | |____  | |__| | / ____ \\| |____ | |____  _| |_ 
   |______|  \\____/ /_/    \\_\\_____||______||_____|
  `;

  console.clear();

  console.log(chalk.blueBright(logo));

  console.log("Coisas para começar:");
  console.log("1. Use comandos ou faça o setup da CLI;");
  console.log("2. Use o comando help para mais informações da CLI;");
  console.log(chalk.magenta("> Lembrando que a CLI está em beta!"));
}
