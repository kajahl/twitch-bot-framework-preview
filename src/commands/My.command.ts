import { Chat, ChatCommandExecution, ChatCommandExecutionData, ChatCommand } from "twitch-bot-framework";

@ChatCommand({
    name: 'mycommand',
    keyword: 'my'
})
export default class MyCommand implements ChatCommandExecution {
    async execution(data: ChatCommandExecutionData) {
        const chat = await Chat.byId(data.event.broadcaster_user_id);
        chat.message.send('Hello World!');
    }
}