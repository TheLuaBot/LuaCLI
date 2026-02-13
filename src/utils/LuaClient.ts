// (C) PerfectTea - All rights reserved.

// utils/LuaClient.ts
// @ts-ignore

import chalk from "chalk";

export default class LuaClient {
  readonly name: string = "LuaCLI";
  private version: string = "1.0.0";

  constructor(public lua: string) {}

  start() {
    console.log(`🐶 ${chalk.bold("Iniciando LuaCLI")}...`);
    console.log(`💻 Versão: ${this.version}`);
  }

  async setup() {
    console.log(`🛠️ Iniciando Setup...`);

    const nickname = prompt("🐶Como a Lua deve chamar você?");
    const corFav = prompt("❓ Qual sua cor Favorita?");

    // Salva as alterações em um arquivo JSON
    const config = { nickname, corFav };
    await Bun.write("config.json", JSON.stringify(config, null, 2));

    console.log(
      chalk.green(`\n✅ Tudo pronto, ${nickname}! Perfil configurado.`),
    );
  }

  help() {
    console.log(`Parece que você quer saber mais sobre a CLI! Aqui vai:`);
    console.log(
      `A LuaCLI é inspirada em uma bot canina do Discord, e olha que essa CLI está no Terminal e no... Discord?`,
    );
  }
}
