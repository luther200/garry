import { Client, GatewayIntentBits, Events } from 'discord.js';
import 'dotenv/config';

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds
    ] 
});

client.once(Events.ClientReady, (readyClient) => {
    console.log(`Logged in as : ${readyClient.user.tag}\n`);
})

client.login(process.env.TOKEN);

