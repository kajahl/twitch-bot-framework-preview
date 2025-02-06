import dotenv from 'dotenv';
import TwitchBotFramework, { InMemoryTokenRepository, PingCommand } from 'twitch-bot-framework';
import ChatLogListener from './listeners/ChatLog.listener';
import MyCommand from './commands/My.command';
dotenv.config();

const clientId = process.env.CLIENT_ID as string;
const clientSecret = process.env.CLIENT_SECRET as string;
const userId = process.env.USER_ID as string;
const userRefreshToken = process.env.USER_REFRESH_TOKEN as string;

const app = new TwitchBotFramework({
    bot: {
        userId,
        clientId,
        clientSecret
    },
    channels: {
        listenChannels: []
    },
    chat: {
        commands: [PingCommand, MyCommand],
        listeners: [ChatLogListener]
    },
    repository: {
        tokenClass: InMemoryTokenRepository
    }
});