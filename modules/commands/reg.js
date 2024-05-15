const axios = require('axios');
const fs = require('fs');
async function getUserName(api, senderID) {
  try {
    const userInfo = await api.getUserInfo(senderID);
    return userInfo[senderID]?.name || "User";
  } catch (error) {
    console.log(error);
    return "User";
  }
}


module.exports.config = {
    name: "register",
    version: "1.0",
    hasPermssion: 0,
    credits: "Jonell Magallanes",
    description: "Register an account",
    usePrefix: true,
    commandCategory: "GDPH TOOLS",
    usages: "username | password | email",
    cooldowns: 60,
};
 module.exports.run = async function ({ api, event, args }) {
        const { senderID, threadID } = event;

        if (senderID !== threadID) {
            api.shareContact(`✅ | Hello there ${await getUserName(api, event.senderID)}!  I am sending you a private message to register your account on GDPH for safety. Please check your message request or spam folder.`, event.senderID, event.threadID, event.messageID);
            return api.sendMessage("Please register your account via DM.\n\nExample: ?register username | password | email", senderID);
        }

        args = String(args).replace(/,/g, ''); 

        const [username, password, email] = args.split("|").map(args => args.trim());

        if (!username || !password || !email) {
            return api.sendMessage("Invalid format. Please provide username, password, and email separated by '|'.\n\nExample: register username | password | email", threadID);
        }

        const apiUrl = `https://gdph-register-accout-api-by-jonell-hp2b.onrender.com/gdphreg`;

        try {
            api.sendMessage("☁️ | Registering your account to database. Please wait...", threadID);

            const response = await axios.get(`${apiUrl}?username=${username}&password=${password}&fakeemail=${email}`);

            if (response.data.status === "error" && response.data.message === "Registration failed.") {
                const successMessage = `✅ | Successfully Account Registered. Please login In your Account On GDPH App\n\nUsername: ${username}\nPassword: ${password}\nEmail: ${email}\n\nEnjoyy!!`;

                // Save registration details to file system
                const userDetails = `Username: ${username}, Password: ${password}, Email: ${email}\n`;
                fs.appendFileSync('registered_users.txt', userDetails);

                return api.sendMessage(successMessage, threadID);
            } else {
                return api.sendMessage(response.data.message, threadID);
            }
        } catch (error) {
            console.error(error);
            api.sendMessage("An error occurred while processing your request.", threadID);
        }
    };
