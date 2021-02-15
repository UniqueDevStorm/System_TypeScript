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

// client.login('Nzc0NjMyMDk4OTY2NjY3MzA0.X6amXA.IYlk2_Xjhysk3evpryDJEukv77s' /* 여기 토큰 */)

import SystemClient from "./client";

new SystemClient()
