// import {CTSClient} from "command.ts-rewrite";
// import {Manager, Payload} from 'erela.js';
// import {Intents} from "discord.js";

process.on('unhandledRejection', console.error)
process.on('uncaughtException', console.error)

// declare module 'discord.js' {
//     interface Client {
//         manager: Manager
//     }
// }

// const client = new CTSClient({prefix: 'S'})



// client.loadExtension(require.resolve('./extensions/Music'), true)

// client.login('Your Token' /* 여기 토큰 */)

import SystemClient from "./client";

new SystemClient()
