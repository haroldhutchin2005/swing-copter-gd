const axios = require('axios');

module.exports.config = {
    name: "dailylevel",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Jonell Magallanes",
    description: "Get the daily level gdph",
    usePrefix: true,
    commandCategory: "GDPH",
    cooldowns: 10
};

module.exports.run = async function ({ api, event, args }) {
    try {
        const waitMessage = await api.sendMessage("🔍 | 𝖢𝗁𝖾𝖼𝗄𝗂𝗇𝗀...", event.threadID, event.messageID);
        const levelID = args[0]; 

        const response = await axios.get(`https://daily-levels.onrender.com/dl?id=${levelID}`);
        const data = response.data;

        if (!data.ID) {
            await api.editMessage("| No Daily Level Detected on GDPH", waitMessage.messageID, event.threadID);
        } else {
            const formattedResponse = `𝖣𝖺𝗂𝗅𝗒 𝖫𝖾𝗏𝖾𝗅 𝖥𝗂𝗅𝗂𝗉𝗂𝗇𝗈 𝖯𝖲\n━━━━━━━━━━━━━━━━━━\n\n📝 𝖫𝖾𝗏𝖾𝗅 𝖨𝖣: ${data.ID}\n👤 𝖠𝗎𝗍𝗁𝗈𝗋: ${data.Author}\n🎵 𝖲𝗈𝗇𝗀: ${data.Song}\n😶 𝖣𝗂𝖿𝖿𝗂𝖼𝗎𝗅𝗍𝗒: ${data.Difficulty}\n📅 𝖣𝖺𝗂𝗅𝗒 𝖲𝗂𝗇𝖼𝖾: ${data.Daily_Since}`;
            await api.editMessage(formattedResponse, waitMessage.messageID, event.threadID, event.messageID);
        }
    } catch (error) {
        console.error(error);
        api.sendMessage("An error occurred while fetching information.", event.threadID);
    }
};
