import dotenv from 'dotenv';
import { join } from 'path';
dotenv.config({ path: join(__dirname, '../.env')});
if (!process.env.BOT_TOKEN) throw new Error('[BOT] No token found.');
if (!process.env.MAIN_GUILD_ID) throw new Error('[BOT] No main guild ID found.');

// Import and initialize the client.
import Mail from './lib/structures/Mail';
const Client = new Mail(process.env.BOT_TOKEN);

// Login to Discord.
Client.login();
