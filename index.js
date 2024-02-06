import { Client, GatewayIntentBits } from "discord.js"
import dotenv from "dotenv"
dotenv.config({ path: ".env" })
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
})

client.on("messageCreate", (message) => {
  if (message.content === "ping") {
    message.reply("Pong!")
  }
})

client.on("interactionCreate", (interaction) => {
  if (!interaction.isCommand()) return
  if (interaction.commandName === "hi") {
    interaction.reply("Ram Ram Bhai")
  }
})

client.login(process.env.TOKEN)
