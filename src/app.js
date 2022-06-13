import tmi from 'tmi.js'
import { bot_username, oauth_token, channel_name, ban_words} from './constants';


const options = {

    options: { debug: true, messagesLogLevel: "info" },
	
	connection: {
		reconnect: true,
		secure: true
	},

	identity: {
		username: bot_username,
		password: oauth_token
	},

	channels: [ channel_name ]
};

const client = new tmi.Client(options);

client.connect().catch(console.error);

client.on('message', (channel, userstate, message, self) => {
	
	if(self) return;
	
	if (userstate.username === bot_username) return;

	checkChat(userstate, message, channel)
});


function checkChat(userstate, message, channel) {

    message = message.toLowerCase()

    let bannable = false

    bannable = ban_words.some(bannedwords => message.includes(bannedwords.toLowerCase()))

    if (bannable){
        client.say(channel, `@${userstate.username} docCBT`)
    }

	if(message === '!song') {
		client.say(channel, `кющ-баран-кющ гип-мири-мющ дющан мющ кющ-баран-кющ кищ мари-нари эээна охуенный военный унунунум кищ-баран-кищ кющ-бараш куш-бараш вот такая вкусная еда от пророка санбоя кищ-баран-кющ кющ-баран-кющ дашан миклющ баращ кищ-баран-кищ кющ-брамбищ-мунуманащ нулащ кущ-барандущ`);
	}

	if(message === 'q') {
		client.say(channel, `@${userstate.username} Kissahomie`);
	}

	if(message === '!dunk'){
		client.say(channel, 'за 25 рублей делаю ебейший данк под пососи https://youtu.be/_T-4-PfFLEM ')
	}
};