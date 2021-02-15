import {Command} from "discord-akairo";
import {Message} from "discord.js";

export default class extends Command {
    constructor() {
        super('test', {
            aliases: ['test']
        })
    }

    exec(msg: Message, args: any): any {
        msg.reply('asdf')
    }
}