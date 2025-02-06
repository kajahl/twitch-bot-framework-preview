import { ChatListenerExecutionData, ChatListener, ChatListenerExecution } from "twitch-bot-framework";


@ChatListener({
    name: 'chatlog'
})
export default class ChatLogListener implements ChatListenerExecution {
    async execution(data: ChatListenerExecutionData) {
        const { event } = data;
        console.log(`[ChatLog] #${event.broadcaster_user_name} | ${event.chatter_user_name}:\t ${event.message.text}`);
        return;
    }
}