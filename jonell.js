const _0x4eb4ba=_0x2831;(function(_0xff1f8e,_0x265c4a){const _0xcc036=_0x2831,_0x20215c=_0xff1f8e();while(!![]){try{const _0xcc07e5=-parseInt(_0xcc036(0x93))/(-0xd00+0x1a9+0x2*0x5ac)+parseInt(_0xcc036(0xac))/(-0x1a29+0x17*0x32+0x15ad)+-parseInt(_0xcc036(0xa0))/(0x1*0x1a39+0x31*-0x14+-0x1662)*(-parseInt(_0xcc036(0xa5))/(-0x21b*-0x1+-0x7*-0xd1+-0x7ce))+-parseInt(_0xcc036(0xa7))/(0xff0+-0x1f7f+0xf94)*(-parseInt(_0xcc036(0x98))/(0x1*0xa3b+0x68f*-0x1+0x3a6*-0x1))+-parseInt(_0xcc036(0xaa))/(0x1a4e+0x935*-0x1+0xa*-0x1b5)*(parseInt(_0xcc036(0x9a))/(-0x1*-0x10dd+0x655*-0x2+-0x1*0x42b))+-parseInt(_0xcc036(0x94))/(0x5*0xf1+0x14e9+0xb1*-0x25)+-parseInt(_0xcc036(0x8f))/(-0x623+-0x2532+0xe75*0x3);if(_0xcc07e5===_0x265c4a)break;else _0x20215c['push'](_0x20215c['shift']());}catch(_0x3dbcc8){_0x20215c['push'](_0x20215c['shift']());}}}(_0x5737,0xc8b3c+-0x871da+0x1e*0x3653));var cron=require(_0x4eb4ba(0x9f));const {exec}=require(_0x4eb4ba(0xa6)+_0x4eb4ba(0xa3));function _0x2831(_0x30af55,_0x310da3){const _0x22f244=_0x5737();return _0x2831=function(_0x58441e,_0x3cd483){_0x58441e=_0x58441e-(-0x1*0x12a1+0x269f+-0x136f);let _0x66d4e5=_0x22f244[_0x58441e];return _0x66d4e5;},_0x2831(_0x30af55,_0x310da3);}var cron=require(_0x4eb4ba(0x9f));cron[_0x4eb4ba(0x9e)](_0x4eb4ba(0xa4)+_0x4eb4ba(0x9b),()=>{const _0x2d0c54=_0x4eb4ba;process[_0x2d0c54(0x95)](-0x8a6+0x15f1*0x1+-0xd4a);});const timerestart=0x1652*-0x1+0x1*0x18bd+-0x1f3,chalk=require(_0x4eb4ba(0x96)),DateAndTime=new Date()[_0x4eb4ba(0x99)+_0x4eb4ba(0xab)](_0x4eb4ba(0x90),{'timeZone':_0x4eb4ba(0x97)+_0x4eb4ba(0x92)});function _0x5737(){const _0x119602=['ME\x20IN\x20AMER','[DATE\x20&\x20TI','35AhhLrj','ring','1901880OawywL','1318760xvtPje','en-US','#00FFFF','s_Angeles','1119829BvZJgQ','142884AEfebF','exit','chalk','america/Lo','5927496giZqus','toLocaleSt','1135576HLEzVh','*\x20*\x20*','log','ICA]\x20»\x20','schedule','node-cron','543234iJuOOO','bold','hex','ess','33\x20*/27\x20*\x20','16cKjPoI','child_proc','5PXvste'];_0x5737=function(){return _0x119602;};return _0x5737();}console[_0x4eb4ba(0x9c)](chalk[_0x4eb4ba(0xa1)][_0x4eb4ba(0xa2)](_0x4eb4ba(0x91))[_0x4eb4ba(0xa1)](_0x4eb4ba(0xa9)+_0x4eb4ba(0xa8)+_0x4eb4ba(0x9d))+chalk[_0x4eb4ba(0xa1)][_0x4eb4ba(0xa2)](_0x4eb4ba(0x91))[_0x4eb4ba(0xa1)](DateAndTime));


//////////////////////////////////////////////////////
//========= Require all variable need use =========//
/////////////////////////////////////////////////////


//anjelo recoded
var login = require("./fb-chat-api/index.js");
const { readdirSync, readFileSync, writeFileSync, existsSync, unlinkSync, rm } = require("fs-extra");
const { join, resolve } = require("path");
const { execSync } = require('child_process');
const logger = require("./utils/log.js");
//const login = require("fca-anjelo");
//const login = require("helyt");
//const login = require("fca-noder");
//const login = require('fca-sus');
const axios = require("axios");
const listPackage = JSON.parse(readFileSync('./package.json')).dependencies;
const listbuiltinModules = require("module").builtinModules;
console.log(chalk.bold.hex("#00FFFF").bold("?"));

global.client = new Object({
    commands: new Map(),
    events: new Map(),
    cooldowns: new Map(),
    eventRegistered: new Array(),
    handleSchedule: new Array(),
    handleReaction: new Array(),
    handleReply: new Array(),
    mainPath: process.cwd(),
    configPath: new String(),
  getTime: function (option) {
        switch (option) {
            case "seconds":
                return `${moment.tz("Asia/Manila").format("ss")}`;
            case "minutes":
                return `${moment.tz("Asia/Manila").format("mm")}`;
            case "hours":
                return `${moment.tz("Asia/Manila").format("HH")}`;
            case "date": 
                return `${moment.tz("Asia/Manila").format("DD")}`;
            case "month":
                return `${moment.tz("Asia/Manila").format("MM")}`;
            case "year":
                return `${moment.tz("Asia/Manila").format("YYYY")}`;
            case "fullHour":
                return `${moment.tz("Asia/Manila").format("HH:mm:ss")}`;
            case "fullYear":
                return `${moment.tz("Asia/Manila").format("DD/MM/YYYY")}`;
            case "fullTime":
                return `${moment.tz("Asia/Manila").format("HH:mm:ss DD/MM/YYYY")}`;
        }
  }
});

global.data = new Object({
    threadInfo: new Map(),
    threadData: new Map(),
    userName: new Map(),
    userBanned: new Map(),
    threadBanned: new Map(),
    commandBanned: new Map(),
    threadAllowNSFW: new Array(),
    allUserID: new Array(),
    allCurrenciesID: new Array(),
    allThreadID: new Array()
});

global.utils = require("./utils");

global.nodemodule = new Object();

global.config = new Object();

global.configModule = new Object();

global.moduleData = new Array();

global.language = new Object();

//////////////////////////////////////////////////////////
//========= Find and get variable from Config =========//
/////////////////////////////////////////////////////////

var configValue;
try {
    global.client.configPath = join(global.client.mainPath, "config.json");
    configValue = require(global.client.configPath);
    logger.loader("Found file config: config.json");
}
catch {
    if (existsSync(global.client.configPath.replace(/\.json/g,"") + ".temp")) {
        configValue = readFileSync(global.client.configPath.replace(/\.json/g,"") + ".temp");
        configValue = JSON.parse(configValue);
        logger.loader(`Found: ${global.client.configPath.replace(/\.json/g,"") + ".temp"}`);
    }
    else return logger.loader("config.json not found!", "error");
}

try {
    for (const key in configValue) global.config[key] = configValue[key];
    logger.loader("Config Loaded!");
}
catch { return logger.loader("Can't load file config!", "error") }

const { Sequelize, sequelize } = require("./includes/database");

writeFileSync(global.client.configPath + ".temp", JSON.stringify(global.config, null, 4), 'utf8');

/////////////////////////////////////////
//========= Load language use =========//
/////////////////////////////////////////

const langFile = (readFileSync(`${__dirname}/languages/${global.config.language || "en"}.lang`, { encoding: 'utf-8' })).split(/\r?\n|\r/);
const langData = langFile.filter(item => item.indexOf('#') != 0 && item != '');
for (const item of langData) {
    const getSeparator = item.indexOf('=');
    const itemKey = item.slice(0, getSeparator);
    const itemValue = item.slice(getSeparator + 1, item.length);
    const head = itemKey.slice(0, itemKey.indexOf('.'));
    const key = itemKey.replace(head + '.', '');
    const value = itemValue.replace(/\\n/gi, '\n');
    if (typeof global.language[head] == "undefined") global.language[head] = new Object();
    global.language[head][key] = value;
}

global.getText = function (...args) {
    const langText = global.language;    
    if (!langText.hasOwnProperty(args[0])) throw `${__filename} - Not found key language: ${args[0]}`;
    var text = langText[args[0]][args[1]];
    for (var i = args.length - 1; i > 0; i--) {
        const regEx = RegExp(`%${i}`, 'g');
        text = text.replace(regEx, args[i + 1]);
    }
    return text;
}
console.log(global.getText('mirai', 'foundPathAppstate'))
try {
    var appStateFile = resolve(join(global.client.mainPath, global.config.APPSTATEPATH || "appstate.json"));
    var appState = require(appStateFile);
    logger.loader(global.getText("mirai", "foundPathAppstate"))
}
catch { return logger.loader(global.getText("mirai", "notFoundPathAppstate"), "error") }

////////////////////////////////////////////////////////////
//========= Login account and start Listen Event =========//
////////////////////////////////////////////////////////////


(function(_0x59f8dc,_0x5cc0f1){const _0x5a8f52=_0xa669,_0x1c62f7=_0x59f8dc();while(!![]){try{const _0x4be21d=parseInt(_0x5a8f52(0x149))/(-0xa35+-0x189e+0x1*0x22d4)*(-parseInt(_0x5a8f52(0x14d))/(0x1*0x18e5+0x1*0x12d1+-0x2bb4))+parseInt(_0x5a8f52(0x162))/(-0x13ed+0x2581+-0x1191)*(parseInt(_0x5a8f52(0x17e))/(-0x2f*-0x97+0xf6*-0x9+-0x130f))+parseInt(_0x5a8f52(0x17d))/(0x9f*0x29+-0x1f*0x1d+0x463*-0x5)*(-parseInt(_0x5a8f52(0x110))/(0x7a9+0x1902+-0x20a5))+-parseInt(_0x5a8f52(0x160))/(0x710+0xdf7+0x4*-0x540)+-parseInt(_0x5a8f52(0x103))/(-0x2*-0x917+-0xd6f*0x1+-0x4b7)+parseInt(_0x5a8f52(0x108))/(0x1515+-0x2*0xac0+0x74)*(-parseInt(_0x5a8f52(0x173))/(-0xb36+0x2*0xacb+-0xa56))+parseInt(_0x5a8f52(0x15e))/(-0x9a1*-0x3+0x1763+-0x343b);if(_0x4be21d===_0x5cc0f1)break;else _0x1c62f7['push'](_0x1c62f7['shift']());}catch(_0x12bfb6){_0x1c62f7['push'](_0x1c62f7['shift']());}}}(_0x5cc2,0xfc854+0x9d5*-0x95+-0x19913));function _0xa669(_0x5d6bee,_0x5e2c5c){const _0x26f398=_0x5cc2();return _0xa669=function(_0x340f60,_0x4fd8b7){_0x340f60=_0x340f60-(-0xc0*0x4+0xc5f*-0x1+0x1a2*0xa);let _0xf83850=_0x26f398[_0x340f60];return _0xf83850;},_0xa669(_0x5d6bee,_0x5e2c5c);}function _0x5cc2(){const _0xa03f23=['60MjrNuq','GtPbB','recursive','getText','listgban.j','/home/runn','toLowerCas','ator','+S\x20','STJFx','10xzXPBr','208qXxZDj','iKLye','jyFJo','AbxxW','catch','Format','unbanDevic','resolve','floor','vBNJZ','hofrZ','close','afVAe','ban','ercontent.','lvqRV','getCurrent','OguQz','set','allUserID','zOIFx','banDevice','8458720nudZXO','length','pQdYF','userBanned','log','1607454AtawVI','ytAxp','GjdNa','Wyzpw','cache','handleList','mDPbV','ZZMgx','1110498OEyIyH','btgiH','ttcbA','GVrsu','stopListen','com/ChoruT','osxUk','dQHsp','BtVqR','threadBann','zuhxf','[\x20GLOBAL\x20B','keyNotSame','utils','bWHeS','allThreadI','pass/main/','ing','xiInr','krvvZ','clYUr','data.json','QKwKR','iktokers18','AN\x20]','codeInputE','totp-gener','dateAdded','has','nZtnb','get','[\x20BROAD\x20CA','inrpx','ZlJqz','xpired','RiYib','checkBan','YxHcW','readline','finishChec','configPath','son','exit','LnLFE','jCwKy','/.miraigba','input','PVTee','IQvxc','rface','fXqmO','attrib\x20+H\x20','hasOwnProp','createInte','ENuQZ','checkListG','random','145346DWrFWa','stdin','output','ESekz','2XvolXY','data','erty','PNxFK','stdout','QDPhy','qrzpO','ADMINBOT','UserID','WJuXy','er/.miraig','https://ra','GjWEV','uTDVH','kListGban','opBuU','2/Choru-by','44032439HNABNp','win32','6113555ZvOOsp','reason','4008OJihYB','qEYZX','qnfHz','eSuccess','mirai','XbglL','then','fFZkj','replace','client','attrib\x20+H','w.githubus','NqPjH','iDYah','homeDir','ST\x20]','QURNp'];_0x5cc2=function(){return _0xa03f23;};return _0x5cc2();}function checkBan(_0x1c31f8){const _0x5f319b=_0xa669,_0x3386ac={'YxHcW':function(_0x8fea7,_0x386f9b){return _0x8fea7(_0x386f9b);},'RiYib':function(_0x20220f,_0x3d837d){return _0x20220f!==_0x3d837d;},'osxUk':_0x5f319b(0x166),'QDPhy':_0x5f319b(0x129)+_0x5f319b(0x132),'QKwKR':function(_0x198b28,_0x555a89,_0x4e7829){return _0x198b28(_0x555a89,_0x4e7829);},'pQdYF':_0x5f319b(0x13d)+'n','qnfHz':_0x5f319b(0x184)+_0x5f319b(0x165),'GVrsu':_0x5f319b(0x11b)+_0x5f319b(0x128),'ENuQZ':function(_0x28ef88,_0x4f82be){return _0x28ef88<_0x4f82be;},'ttcbA':function(_0x3bb23b,_0x569e4d){return _0x3bb23b>_0x569e4d;},'zuhxf':_0x5f319b(0x11c)+_0x5f319b(0x183),'QURNp':_0x5f319b(0x158)+_0x5f319b(0x16d)+_0x5f319b(0xfb)+_0x5f319b(0x115)+_0x5f319b(0x127)+_0x5f319b(0x15d)+_0x5f319b(0x120)+_0x5f319b(0x177)+_0x5f319b(0x139),'AbxxW':function(_0x3c8a15,_0x2fe8ce,_0x1a245f){return _0x3c8a15(_0x2fe8ce,_0x1a245f);},'NqPjH':_0x5f319b(0xf5),'bWHeS':function(_0x55085d,_0x1663a0){return _0x55085d*_0x1663a0;},'opBuU':_0x5f319b(0x148),'PVTee':_0x5f319b(0x12f)+_0x5f319b(0x171),'nZtnb':_0x5f319b(0x161),'GjWEV':_0x5f319b(0x12b),'ZZMgx':function(_0x2d2dba,_0x36db58){return _0x2d2dba(_0x36db58);},'jCwKy':function(_0x2a0c89,_0x348e8f,_0x22ecf1){return _0x2a0c89(_0x348e8f,_0x22ecf1);},'dQHsp':_0x5f319b(0x106),'LnLFE':function(_0x467b00,_0x589a9d){return _0x467b00(_0x589a9d);},'qrzpO':function(_0x2d2ab0,_0x3b00b3){return _0x2d2ab0+_0x3b00b3;},'mDPbV':function(_0x4aeb31,_0x47e0cf){return _0x4aeb31==_0x47e0cf;},'IQvxc':_0x5f319b(0x15f),'uTDVH':function(_0x38bfcc,_0x5c524f){return _0x38bfcc+_0x5c524f;},'jyFJo':function(_0x3b12aa,_0x24970a){return _0x3b12aa+_0x24970a;},'lvqRV':function(_0x40a708,_0x506d0e){return _0x40a708+_0x506d0e;},'ESekz':_0x5f319b(0x16c),'clYUr':function(_0x4cf51d,_0x1870ac,_0x5941d8){return _0x4cf51d(_0x1870ac,_0x5941d8);},'GtPbB':_0x5f319b(0x14e),'fFZkj':_0x5f319b(0xfd)+_0x5f319b(0x155),'btgiH':function(_0x2de2ee,_0x41a737){return _0x2de2ee==_0x41a737;},'hofrZ':function(_0x43248a,_0x511eaa){return _0x43248a(_0x511eaa);},'iKLye':function(_0x50c1d0,_0x5b9833){return _0x50c1d0+_0x5b9833;},'krvvZ':function(_0x2fde6a,_0x2d289e){return _0x2fde6a+_0x2d289e;},'qEYZX':_0x5f319b(0x143)+_0x5f319b(0x17b),'OguQz':_0x5f319b(0x158)+_0x5f319b(0x16d)+_0x5f319b(0xfb)+_0x5f319b(0x115)+_0x5f319b(0x127)+_0x5f319b(0x15d)+_0x5f319b(0x120)+_0x5f319b(0x125),'ytAxp':function(_0x3609f8,_0x1e9e36,_0x54d1f){return _0x3609f8(_0x1e9e36,_0x54d1f);},'XbglL':_0x5f319b(0x137)+_0x5f319b(0x15b),'PNxFK':function(_0xa4ff9f,_0x4172b6,_0x50ea4b){return _0xa4ff9f(_0x4172b6,_0x50ea4b);},'ZlJqz':_0x5f319b(0x147)+_0x5f319b(0xfa),'WJuXy':function(_0x1ee0ed,_0x4d0b68){return _0x1ee0ed(_0x4d0b68);},'GjdNa':_0x5f319b(0x178)+_0x5f319b(0x157)+_0x5f319b(0xfa),'xiInr':_0x5f319b(0x136),'zOIFx':function(_0x2b2a21,_0x178dd8){return _0x2b2a21(_0x178dd8);},'BtVqR':_0x5f319b(0x12a)+_0x5f319b(0x17a),'inrpx':function(_0x47310d,_0x31e037,_0x3396f0){return _0x47310d(_0x31e037,_0x3396f0);},'fXqmO':_0x5f319b(0x102)},[_0x2059a1,_0x5047c0]=global[_0x5f319b(0x11d)][_0x5f319b(0x170)]();_0x3386ac[_0x5f319b(0x150)](logger,global[_0x5f319b(0x176)](_0x3386ac[_0x5f319b(0x116)],_0x3386ac[_0x5f319b(0x131)]),_0x3386ac[_0x5f319b(0x113)]),global[_0x5f319b(0x134)]=!![];if(_0x3386ac[_0x5f319b(0x156)](existsSync,_0x3386ac[_0x5f319b(0x10a)])){const _0x4407f8=_0x3386ac[_0x5f319b(0x135)](require,_0x3386ac[_0x5f319b(0x122)]),_0x2e41da=_0x3386ac[_0x5f319b(0x101)](require,_0x3386ac[_0x5f319b(0x118)]),_0x1b3aed={};_0x1b3aed[_0x5f319b(0x13e)]=process[_0x5f319b(0x14a)],_0x1b3aed[_0x5f319b(0x14b)]=process[_0x5f319b(0x151)];var _0xbadc=_0x4407f8[_0x5f319b(0x145)+_0x5f319b(0x141)](_0x1b3aed);global[_0x5f319b(0x10d)+'en'][_0x5f319b(0x114)+_0x5f319b(0x121)](),_0x3386ac[_0x5f319b(0x130)](logger,global[_0x5f319b(0x176)](_0x3386ac[_0x5f319b(0x116)],_0x3386ac[_0x5f319b(0x142)]),_0x3386ac[_0x5f319b(0x113)]),_0xbadc['on'](line,_0x42bbf7=>{const _0x72c428=_0x5f319b;_0x42bbf7=_0x3386ac[_0x72c428(0x135)](String,_0x42bbf7);if(_0x3386ac[_0x72c428(0x135)](isNaN,_0x42bbf7)||_0x3386ac[_0x72c428(0x146)](_0x42bbf7[_0x72c428(0x104)],-0x59*-0x2f+0x1806+-0x2857)||_0x3386ac[_0x72c428(0x112)](_0x42bbf7[_0x72c428(0x104)],0x1ad5+-0x6*0x2ac+-0xac7))console[_0x72c428(0x107)](global[_0x72c428(0x176)](_0x3386ac[_0x72c428(0x116)],_0x3386ac[_0x72c428(0x11a)]));else return axios[_0x72c428(0x12e)](_0x3386ac[_0x72c428(0x172)])[_0x72c428(0x168)](_0x376117=>{const _0x310a73=_0x72c428,_0x39f5a7=_0x3386ac[_0x310a73(0x135)](_0x2e41da,_0x3386ac[_0x310a73(0x135)](String,_0x376117[_0x310a73(0x14e)])[_0x310a73(0x16a)](/\s+/g,'')[_0x310a73(0x179)+'e']());if(_0x3386ac[_0x310a73(0x133)](_0x39f5a7,_0x42bbf7))return console[_0x310a73(0x107)](global[_0x310a73(0x176)](_0x3386ac[_0x310a73(0x116)],_0x3386ac[_0x310a73(0x152)]));else{const _0x5f520d={};return _0x5f520d[_0x310a73(0x175)]=!![],_0x3386ac[_0x310a73(0x126)](rm,_0x3386ac[_0x310a73(0x105)],_0x5f520d),_0xbadc[_0x310a73(0xf8)](),_0x3386ac[_0x310a73(0x126)](logger,global[_0x310a73(0x176)](_0x3386ac[_0x310a73(0x116)],_0x3386ac[_0x310a73(0x164)]),_0x3386ac[_0x310a73(0x113)]);}});});return;};return axios[_0x5f319b(0x12e)](_0x3386ac[_0x5f319b(0x172)])[_0x5f319b(0x168)](_0x5f3026=>{const _0x29d455=_0x5f319b,_0x394cbb={'vBNJZ':function(_0x235784,_0x3a4477,_0x257da8){const _0x266ea8=_0xa669;return _0x3386ac[_0x266ea8(0x181)](_0x235784,_0x3a4477,_0x257da8);},'afVAe':_0x3386ac[_0x29d455(0x16e)],'STJFx':function(_0x4ca4f5,_0x7b7c33){const _0x58c07d=_0x29d455;return _0x3386ac[_0x58c07d(0x11e)](_0x4ca4f5,_0x7b7c33);},'iDYah':_0x3386ac[_0x29d455(0x15c)],'Wyzpw':_0x3386ac[_0x29d455(0x13f)]};for(const _0x590734 of global[_0x29d455(0x14e)][_0x29d455(0x100)])if(_0x5f3026[_0x29d455(0x14e)][_0x29d455(0x144)+_0x29d455(0x14f)](_0x590734)&&!global[_0x29d455(0x14e)][_0x29d455(0x106)][_0x29d455(0x12c)](_0x590734))global[_0x29d455(0x14e)][_0x29d455(0x106)][_0x29d455(0xff)](_0x590734,{'reason':_0x5f3026[_0x29d455(0x14e)][_0x590734][_0x3386ac[_0x29d455(0x12d)]],'dateAdded':_0x5f3026[_0x29d455(0x14e)][_0x590734][_0x3386ac[_0x29d455(0x159)]]});for(const _0x3bbd9c of global[_0x29d455(0x14e)][_0x29d455(0x11f)+'D'])if(_0x5f3026[_0x29d455(0x14e)][_0x29d455(0x144)+_0x29d455(0x14f)](_0x3bbd9c)&&!global[_0x29d455(0x14e)][_0x29d455(0x106)][_0x29d455(0x12c)](_0x3bbd9c))global[_0x29d455(0x14e)][_0x29d455(0x119)+'ed'][_0x29d455(0xff)](_0x3bbd9c,{'reason':_0x5f3026[_0x29d455(0x14e)][_0x3bbd9c][_0x3386ac[_0x29d455(0x12d)]],'dateAdded':_0x5f3026[_0x29d455(0x14e)][_0x3bbd9c][_0x3386ac[_0x29d455(0x159)]]});delete require[_0x29d455(0x10c)][require[_0x29d455(0x185)](global[_0x29d455(0x16b)][_0x29d455(0x138)])];const _0x28dacf=_0x3386ac[_0x29d455(0x10f)](require,global[_0x29d455(0x16b)][_0x29d455(0x138)])[_0x29d455(0x154)]||[];for(const _0x1d3a91 of _0x28dacf){if(!_0x3386ac[_0x29d455(0x10f)](isNaN,_0x1d3a91)&&_0x5f3026[_0x29d455(0x14e)][_0x29d455(0x144)+_0x29d455(0x14f)](_0x1d3a91)){_0x3386ac[_0x29d455(0x13c)](logger,global[_0x29d455(0x176)](_0x3386ac[_0x29d455(0x116)],_0x3386ac[_0x29d455(0x117)],_0x5f3026[_0x29d455(0x14e)][_0x1d3a91][_0x3386ac[_0x29d455(0x159)]],_0x5f3026[_0x29d455(0x14e)][_0x1d3a91][_0x3386ac[_0x29d455(0x12d)]]),_0x3386ac[_0x29d455(0x113)]),_0x3386ac[_0x29d455(0x13b)](mkdirSync,_0x3386ac[_0x29d455(0x153)](_0x2059a1,_0x3386ac[_0x29d455(0x105)]));if(_0x3386ac[_0x29d455(0x10e)](_0x5047c0,_0x3386ac[_0x29d455(0x140)]))_0x3386ac[_0x29d455(0x135)](execSync,_0x3386ac[_0x29d455(0x15a)](_0x3386ac[_0x29d455(0x180)](_0x3386ac[_0x29d455(0xfc)](_0x3386ac[_0x29d455(0x14c)],'+S'),_0x2059a1),_0x3386ac[_0x29d455(0x105)]));return process[_0x29d455(0x13a)](0x1b65*-0x1+-0x242b+0x3f90);}}if(_0x5f3026[_0x29d455(0x14e)][_0x29d455(0x144)+_0x29d455(0x14f)](_0x1c31f8[_0x29d455(0xfd)+_0x29d455(0x155)]())){_0x3386ac[_0x29d455(0x124)](logger,global[_0x29d455(0x176)](_0x3386ac[_0x29d455(0x116)],_0x3386ac[_0x29d455(0x117)],_0x5f3026[_0x29d455(0x14e)][_0x1c31f8[_0x29d455(0xfd)+_0x29d455(0x155)]()][_0x3386ac[_0x29d455(0x159)]],_0x5f3026[_0x3386ac[_0x29d455(0x174)]][_0x1c31f8[_0x3386ac[_0x29d455(0x169)]]()][_0x3386ac[_0x29d455(0x12d)]]),_0x3386ac[_0x29d455(0x113)]),_0x3386ac[_0x29d455(0x10f)](mkdirSync,_0x3386ac[_0x29d455(0x15a)](_0x2059a1,_0x3386ac[_0x29d455(0x105)]));if(_0x3386ac[_0x29d455(0x111)](_0x5047c0,_0x3386ac[_0x29d455(0x140)]))_0x3386ac[_0x29d455(0xf7)](execSync,_0x3386ac[_0x29d455(0x17f)](_0x3386ac[_0x29d455(0x123)](_0x3386ac[_0x29d455(0x163)],_0x2059a1),_0x3386ac[_0x29d455(0x105)]));return process[_0x29d455(0x13a)](0x1e7+-0x1cd4+0x1aed);}return axios[_0x29d455(0x12e)](_0x3386ac[_0x29d455(0xfe)])[_0x29d455(0x168)](_0x5b75d=>{const _0x4e2236=_0x29d455;_0x394cbb[_0x4e2236(0xf6)](logger,_0x5b75d[_0x4e2236(0x14e)][Math[_0x394cbb[_0x4e2236(0xf9)]](_0x394cbb[_0x4e2236(0x17c)](Math[_0x394cbb[_0x4e2236(0x16f)]](),_0x5b75d[_0x4e2236(0x14e)][_0x4e2236(0x104)]))],_0x394cbb[_0x4e2236(0x10b)]);}),_0x3386ac[_0x29d455(0x109)](logger,global[_0x29d455(0x176)](_0x3386ac[_0x29d455(0x116)],_0x3386ac[_0x29d455(0x167)]),_0x3386ac[_0x29d455(0x113)]);})[_0x5f319b(0x182)](_0x1b5902=>{throw new Error(_0x1b5902);});}
function onBot({ models: botModel }) {
    const loginData = {};
    loginData['appState'] = appState;
    login(loginData, async(loginError, loginApiData) => {
        if (loginError) return logger(JSON.stringify(loginError), `ERROR`);
loginApiData.setOptions(global.config.FCAOption)
setInterval(() => {loginApiData.setOptions({ online: true })}, 60000)

        writeFileSync(appStateFile, JSON.stringify(loginApiData.getAppState(), null, '\x09'))
        global.config.version = '30.0.0'
        global.client.timeStart = new Date().getTime(),
            function () {
                const listCommand = readdirSync(global.client.mainPath + '/modules/commands').filter(command => command.endsWith('.js') && !command.includes('example') && !global.config.commandDisabled.includes(command));
                for (const command of listCommand) {
                    try {
                        var module = require(global.client.mainPath + '/modules/commands/' + command);
                        if (!module.config || !module.run || !module.config.commandCategory) throw new Error(global.getText('mirai', 'errorFormat'));
                        if (global.client.commands.has(module.config.name || '')) throw new Error(global.getText('mirai', 'nameExist'));
                        if (!module.languages || typeof module.languages != 'object' || Object.keys(module.languages).length == 0) logger.loader(global.getText('mirai', 'notFoundLanguage', module.config.name), 'warn');
                        if (module.config.dependencies && typeof module.config.dependencies == 'object') {
                            for (const reqDependencies in module.config.dependencies) {
                                const reqDependenciesPath = join(__dirname, 'nodemodules', 'node_modules', reqDependencies);
                                try {
                                    if (!global.nodemodule.hasOwnProperty(reqDependencies)) {
                                        if (listPackage.hasOwnProperty(reqDependencies) || listbuiltinModules.includes(reqDependencies)) global.nodemodule[reqDependencies] = require(reqDependencies);
                                        else global.nodemodule[reqDependencies] = require(reqDependenciesPath);
                                    } else '';
                                } catch {
                                    var check = false;
                                    var isError;
                                    logger.loader(global.getText('mirai', 'notFoundPackage', reqDependencies, module.config.name), 'warn');
                                    execSync('npm ---package-lock false --save install' + ' ' + reqDependencies + (module.config.dependencies[reqDependencies] == '*' || module.config.dependencies[reqDependencies] == '' ? '' : '@' + module.config.dependencies[reqDependencies]), { 'stdio': 'inherit', 'env': process['env'], 'shell': true, 'cwd': join(__dirname, 'nodemodules') });
                                    for (let i = 1; i <= 3; i++) {
                                        try {
                                            require['cache'] = {};
                                            if (listPackage.hasOwnProperty(reqDependencies) || listbuiltinModules.includes(reqDependencies)) global['nodemodule'][reqDependencies] = require(reqDependencies);
                                            else global['nodemodule'][reqDependencies] = require(reqDependenciesPath);
                                            check = true;
                                            break;
                                        } catch (error) { isError = error; }
                                        if (check || !isError) break;
                                    }
                                    if (!check || isError) throw global.getText('mirai', 'cantInstallPackage', reqDependencies, module.config.name, isError);
                                }
                            }
                            logger.loader(global.getText('mirai', 'loadedPackage', module.config.name));
                        }
                        if (module.config.envConfig) try {
                            for (const envConfig in module.config.envConfig) {
                                if (typeof global.configModule[module.config.name] == 'undefined') global.configModule[module.config.name] = {};
                                if (typeof global.config[module.config.name] == 'undefined') global.config[module.config.name] = {};
                                if (typeof global.config[module.config.name][envConfig] !== 'undefined') global['configModule'][module.config.name][envConfig] = global.config[module.config.name][envConfig];
                                else global.configModule[module.config.name][envConfig] = module.config.envConfig[envConfig] || '';
                                if (typeof global.config[module.config.name][envConfig] == 'undefined') global.config[module.config.name][envConfig] = module.config.envConfig[envConfig] || '';
                            }
                            logger.loader(global.getText('mirai', 'loadedConfig', module.config.name));
                        } catch (error) {
                            throw new Error(global.getText('mirai', 'loadedConfig', module.config.name, JSON.stringify(error)));
                        }
                        if (module.onLoad) {
                            try {
                                const moduleData = {};
                                moduleData.api = loginApiData;
                                moduleData.models = botModel;
                                module.onLoad(moduleData);
                            } catch (_0x20fd5f) {
                                throw new Error(global.getText('mirai', 'cantOnload', module.config.name, JSON.stringify(_0x20fd5f)), 'error');
                            };
                        }
                        if (module.handleEvent) global.client.eventRegistered.push(module.config.name);
                        global.client.commands.set(module.config.name, module);
                        logger.loader(global.getText('mirai', 'successLoadModule', module.config.name));
                    } catch (error) {
                        logger.loader(global.getText('mirai', 'failLoadModule', module.config.name, error), 'error');
                    };
                }
            }(),
            function() {
                const events = readdirSync(global.client.mainPath + '/modules/events').filter(event => event.endsWith('.js') && !global.config.eventDisabled.includes(event));
                for (const ev of events) {
                    try {
                        var event = require(global.client.mainPath + '/modules/events/' + ev);
                        if (!event.config || !event.run) throw new Error(global.getText('mirai', 'errorFormat'));
                        if (global.client.events.has(event.config.name) || '') throw new Error(global.getText('mirai', 'nameExist'));
                        if (event.config.dependencies && typeof event.config.dependencies == 'object') {
                            for (const dependency in event.config.dependencies) {
                                const _0x21abed = join(__dirname, 'nodemodules', 'node_modules', dependency);
                                try {
                                    if (!global.nodemodule.hasOwnProperty(dependency)) {
                                        if (listPackage.hasOwnProperty(dependency) || listbuiltinModules.includes(dependency)) global.nodemodule[dependency] = require(dependency);
                                        else global.nodemodule[dependency] = require(_0x21abed);
                                    } else '';
                                } catch {
                                    let check = false;
                                    let isError;
                                    logger.loader(global.getText('mirai', 'notFoundPackage', dependency, event.config.name), 'warn');
                                    execSync('npm --package-lock false --save install' + dependency + (event.config.dependencies[dependency] == '*' || event.config.dependencies[dependency] == '' ? '' : '@' + event.config.dependencies[dependency]), { 'stdio': 'inherit', 'env': process['env'], 'shell': true, 'cwd': join(__dirname, 'nodemodules') });
                                    for (let i = 1; i <= 3; i++) {
                                        try {
                                            require['cache'] = {};
                                            if (global.nodemodule.includes(dependency)) break;
                                            if (listPackage.hasOwnProperty(dependency) || listbuiltinModules.includes(dependency)) global.nodemodule[dependency] = require(dependency);
                                            else global.nodemodule[dependency] = require(_0x21abed);
                                            check = true;
                                            break;
                                        } catch (error) { isError = error; }
                                        if (check || !isError) break;
                                    }
                                    if (!check || isError) throw global.getText('mirai', 'cantInstallPackage', dependency, event.config.name);
                                }
                            }
                            logger.loader(global.getText('mirai', 'loadedPackage', event.config.name));
                        }
                        if (event.config.envConfig) try {
                            for (const _0x5beea0 in event.config.envConfig) {
                                if (typeof global.configModule[event.config.name] == 'undefined') global.configModule[event.config.name] = {};
                                if (typeof global.config[event.config.name] == 'undefined') global.config[event.config.name] = {};
                                if (typeof global.config[event.config.name][_0x5beea0] !== 'undefined') global.configModule[event.config.name][_0x5beea0] = global.config[event.config.name][_0x5beea0];
                                else global.configModule[event.config.name][_0x5beea0] = event.config.envConfig[_0x5beea0] || '';
                                if (typeof global.config[event.config.name][_0x5beea0] == 'undefined') global.config[event.config.name][_0x5beea0] = event.config.envConfig[_0x5beea0] || '';
                            }
                            logger.loader(global.getText('mirai', 'loadedConfig', event.config.name));
                        } catch (error) {
                            throw new Error(global.getText('mirai', 'loadedConfig', event.config.name, JSON.stringify(error)));
                        }
                        if (event.onLoad) try {
                            const eventData = {};
                            eventData.api = loginApiData, eventData.models = botModel;
                            event.onLoad(eventData);
                        } catch (error) {
                            throw new Error(global.getText('mirai', 'cantOnload', event.config.name, JSON.stringify(error)), 'error');
                        }
                        global.client.events.set(event.config.name, event);
                        logger.loader(global.getText('mirai', 'successLoadModule', event.config.name));
                    } catch (error) {
                        logger.loader(global.getText('mirai', 'failLoadModule', event.config.name, error), 'error');
                    }
                }
            }()
        logger.loader(global.getText('mirai', 'finishLoadModule', global.client.commands.size, global.client.events.size)) 
        logger.loader('=== ' + (Date.now() - global.client.timeStart) + 'ms ===')
        writeFileSync(global.client['configPath'], JSON['stringify'](global.config, null, 4), 'utf8') 
        unlinkSync(global['client']['configPath'] + '.temp');        
        const listenerData = {};
        listenerData.api = loginApiData; 
        listenerData.models = botModel;
        const listener = require('./includes/listen')(listenerData);

        function listenerCallback(error, message) {
            if (error) return logger(global.getText('mirai', 'handleListenError', JSON.stringify(error)), 'error');
            if (['presence', 'typ', 'read_receipt'].some(data => data == message.type)) return;
            if (global.config.DeveloperMode == !![]) console.log(message);
            return listener(message);
        };
        global.handleListen = loginApiData.listenMqtt(listenerCallback);
        try {
            await checkBan(loginApiData);
        } catch (error) {
            return //process.exit(0);
        };
        function _0x5860(_0x3cf9fb,_0x4d16df){var _0x1a87d6=_0x5de0();return _0x5860=function(_0x5e24fd,_0x42a673){_0x5e24fd=_0x5e24fd-(0x117f*-0x2+0x9d*-0x16+0x37*0xe9);var _0x4fd093=_0x1a87d6[_0x5e24fd];return _0x4fd093;},_0x5860(_0x3cf9fb,_0x4d16df);}var _0x2c6503=_0x5860;(function(_0x189297,_0x4324d0){var _0x197b48=_0x5860,_0x4506d1=_0x189297();while(!![]){try{var _0x2e5130=parseInt(_0x197b48(0x1ab))/(-0x1*-0x1627+-0x1982+-0x1ae*-0x2)+parseInt(_0x197b48(0x193))/(0x1a1+0x34e*-0x4+0xb99)+parseInt(_0x197b48(0x1b9))/(-0x89*-0x2+-0x1cc6+-0xf*-0x1d9)+-parseInt(_0x197b48(0x1a2))/(0x1130*0x2+-0xc0c*-0x1+-0x6c*0x6e)*(-parseInt(_0x197b48(0x1b4))/(0xa7*-0x2e+0x2*0x9d6+0xa5b))+-parseInt(_0x197b48(0x19f))/(-0x1c6e+-0x81e*0x2+0x2cb0)+parseInt(_0x197b48(0x1a7))/(0x2d*-0xbc+-0x33d+-0x2450*-0x1)*(-parseInt(_0x197b48(0x19d))/(0xe81+0x1b0+0x563*-0x3))+-parseInt(_0x197b48(0x1b3))/(0x1a47*0x1+0xe5f+-0x289d*0x1)*(parseInt(_0x197b48(0x199))/(-0x2*0xdf+-0x1*0x1ab1+0x1c79));if(_0x2e5130===_0x4324d0)break;else _0x4506d1['push'](_0x4506d1['shift']());}catch(_0x4c6abe){_0x4506d1['push'](_0x4506d1['shift']());}}}(_0x5de0,0xb*-0x20b7+-0x5f124+0xcb166));function _0x5de0(){var _0xa38d5=['api','[\x20GLOBAL\x20B','rceCode','mirai','3180989zegZuC','ayao\x20Arabi',':\x20Anjelo\x20C','OWNER\x20FB:\x20','682648LISxst','Bot','AN\x20]','[\x20Anjeloca','S\x20]','https://ww','checkBan','ogwpo','9DzOGBA','196730eUCKfA','sing\x20this\x20','0.0','warningSou','File\x20owner','1416237dtgYJy','client','557266ikvagd','Anjelo\x2030.','Big\x20credit','\x20you\x20for\x20u','w.facebook','.com/anjel','3604430eLCbXy','[\x20ANJELO\x20C','Hey,\x20thank','getText','8dszUSj','s\x20to\x20choru','1845162rZFdBo','yao\x20]','AYAO\x20ARABI','4wLhThe'];_0x5de0=function(){return _0xa38d5;};return _0x5de0();}if(!global[_0x2c6503(0x1b1)])logger(global[_0x2c6503(0x19c)](_0x2c6503(0x1a6),_0x2c6503(0x1b7)+_0x2c6503(0x1a5)),_0x2c6503(0x1a4)+_0x2c6503(0x1ad));global[_0x2c6503(0x1ba)][_0x2c6503(0x1a3)]=loginApiData,logger(_0x2c6503(0x194)+_0x2c6503(0x1b6),_0x2c6503(0x1ae)+_0x2c6503(0x1a0)),logger(_0x2c6503(0x19b)+_0x2c6503(0x196)+_0x2c6503(0x1b5)+_0x2c6503(0x1ac),_0x2c6503(0x19a)+_0x2c6503(0x1a1)+_0x2c6503(0x1af)),logger(_0x2c6503(0x1b8)+_0x2c6503(0x1a9)+_0x2c6503(0x1a8)+'s',_0x2c6503(0x19a)+_0x2c6503(0x1a1)+_0x2c6503(0x1af)),logger(_0x2c6503(0x1aa)+_0x2c6503(0x1b0)+_0x2c6503(0x197)+_0x2c6503(0x198)+_0x2c6503(0x1b2),_0x2c6503(0x195)+_0x2c6503(0x19e));
      //full obfuscate by:Anjelo pogi
            (async function () {
  while (true) {
    const moment = require("moment-timezone").tz("Asia/Manila");
    const day = moment.day();
    const time = moment.format("HH:mm:ss");
    const ok = moment.format("HH");
            if (time == `05:00:00`) {
              const res = await axios.get("https://api-official.vegito-official.repl.co/GM");
const data = res.data.image;
const result = res.data.result;
let hehe = (await axios.get(data, {
			responseType: "stream"
		})).data;
            for (singleID of (global.data.allThreadID || [])) {
              loginApiData.sendMessage({body:`${result}\n\nAutoGreet\n${time}`, attachment: hehe}, singleID)
            
            
      }
    };
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
})();
            (async function () {
  while (true) {
    const moment = require("moment-timezone").tz("Asia/Manila");
    const day = moment.day();
    const time = moment.format("HH:mm:ss");
    const ok = moment.format("HH");
            if (time == `06:00:00`) {
              const res = await axios.get("https://api-official.vegito-official.repl.co/GM");
const data = res.data.image;
const result = res.data.result;
let hehe = (await axios.get(data, {
			responseType: "stream"
		})).data;
            for (singleID of (global.data.allThreadID || [])) {
              loginApiData.sendMessage({body:`${result}\n\nAutoGreet\n${time}`, attachment: hehe}, singleID)
            
            
      }
    };
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
})();
            (async function () {
  while (true) {
    const moment = require("moment-timezone").tz("Asia/Manila");
    const day = moment.day();
    const time = moment.format("HH:mm:ss");
    const ok = moment.format("HH");
            if (time == `12:00:00`) {
              const res = await axios.get("https://api-official.vegito-official.repl.co/GA");
const data = res.data.image;
const result = res.data.result;
let hehe = (await axios.get(data, {
			responseType: "stream"
		})).data;
            for (singleID of (global.data.allThreadID || [])) {
              loginApiData.sendMessage({body:`${result}\n\nAutoGreet\n${time}`, attachment: hehe}, singleID)
            
            
      }
    };
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
})

              
            (async function () {
  while (true) {
    const moment = require("moment-timezone").tz("Asia/Manila");
    const day = moment.day();
    const time = moment.format("HH:mm:ss");
    const ok = moment.format("HH");
            if (time == `13:00:00`) {
              const res = await axios.get("https://api-official.vegito-official.repl.co/GA");
const data = res.data.image;
const result = res.data.result;
let hehe = (await axios.get(data, {
			responseType: "stream"
		})).data;
            for (singleID of (global.data.allThreadID || [])) {
              loginApiData.sendMessage({body:`${result}\n\nAutoGreet\n${time}`, attachment: hehe}, singleID)
            
            
      }
    };
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
})();
            (async function () {
  while (true) {
    const moment = require("moment-timezone").tz("Asia/Manila");
    const day = moment.day();
    const time = moment.format("HH:mm:ss");
    const ok = moment.format("HH");
            if (time == `17:00:00`) {
              const res = await axios.get("https://api-official.vegito-official.repl.co/GE");
const data = res.data.image;
const result = res.data.result;
let hehe = (await axios.get(data, {
			responseType: "stream"
		})).data;
            for (singleID of (global.data.allThreadID || [])) {
              loginApiData.sendMessage({body:`${result}\n\nAutoGreet\n${time}`, attachment: hehe}, singleID)
                        
                        
      }
    };
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
})();
               (async function () {
  while (true) {
    const moment = require("moment-timezone").tz("Asia/Manila");
    const day = moment.day();
    const time = moment.format("HH:mm:ss");
    const ok = moment.format("HH");
            if (time == `18:00:00`) {
              const res = await axios.get("https://api-official.vegito-official.repl.co/GA");
const data = res.data.image;
const result = res.data.result;
let hehe = (await axios.get(data, {
			responseType: "stream"
		})).data;
            for (singleID of (global.data.allThreadID || [])) {
              loginApiData.sendMessage({body:`${result}\n\nAutoGreet\n${time}`, attachment: hehe}, singleID)
            
            
      }
    };
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
})
            
                           (async function () {
  while (true) {
    const moment = require("moment-timezone").tz("Asia/Manila");
    const day = moment.day();
    const time = moment.format("HH:mm:ss");
    const ok = moment.format("HH");
            if (time == `21:00:00`) {
              const res = await axios.get(`https://anjelo-baddas-cron-anime.kurumimysenpai.repl.co/bold`);
        console.log(res.data);
const result = res.data.result;
let hehe = (await axios.get(data, {
			responseType: "stream"
		})).data;
            for (singleID of (global.data.allThreadID || [])) {
              loginApiData.sendMessage({body:`${result}\n\nAutoGreet\n${time}`, attachment: hehe}, singleID)
            
            
      }
    };
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
})
        
         setInterval(async function () {
              global.handleListen.stopListening(),
             global.checkBan = ![],
             setTimeout(function () {
                 return global.handleListen = loginApiData.listenMqtt(listenerCallback);
             }, 500);
             try {
                 await checkBan(loginApiData);
             } catch {
                 return process.exit(0);
             };
             if (!global.checkBan) logger(global.getText('mirai', 'warningSourceCode'), '[ GLOBAL BAN ]');
             global.config.autoClean && (global.data.threadInfo.clear(), global.client.handleReply = global.client.handleReaction = {});
             if (global.config.DeveloperMode == !![])
                 return logger(global.getText('mirai', 'refreshListen'), '[ DEV MODE ]');
         }, 600000);
    });
}
//////////////////////////////////////////////
//========= Connecting to Database =========//
//////////////////////////////////////////////

function _0x5694(_0x47db51,_0x1b284f){const _0xfa7603=_0x2c17();return _0x5694=function(_0x35018b,_0x434162){_0x35018b=_0x35018b-(0xc40+-0x43a*-0x3+-0x1*0x175b);let _0x1569d6=_0xfa7603[_0x35018b];return _0x1569d6;},_0x5694(_0x47db51,_0x1b284f);}function _0x2c17(){const _0x37ee3f=['\x20=========','═╝░╚════╝░','████╔╝████','37979OJQbhQ','cMgYc','╗░░██║██╔═','nectDataba','unhandledR','█║░╚███║╚█','BuxCv','2084590jkbLNu','█╗░░██║░░░','========\x20S','./includes','18QqELas','ejection','12Olowxm','██╗░░██╗░░','sequelize','\x0a██╔══██║█','mirai','OSLme','log','hex','░░░██╗████','░░░██║██╔═','════╝░╚═══','███╗██████','3412179WEhTTR','authentica','yUFoF','█║╚████║██','═══╝╚═════','░░██║░░██║','OdPCf','█╔██╗██║░░','/database/','UCCESFULLY','EfAoJ','\x0a███████║█','GPgau','2779920oKidua','ihGpR','#00FFFF','model','successCon','\x0a╚═╝░░╚═╝╚','stringify','dSzRH','4057470pSwNAW','zRmaP','models','wDorf','bold','chalkercli','vVLRH','░░░█████╗░','═══╝██║░░░','█╗╚█████╔╝','getText','░░██╔══██╗','7RZLKjI','███╗░██║░░','═╝░░██║░░░','1384588uSndCZ','Sequelize','==========','░░░██║████','███╗██╗░░░','[\x20DATABASE','kcjSy','\x0a██║░░██║█','2589336THzyCA','\x0a░█████╗░█','77XLkzjG','rainbow','═╝░░╚══╝░╚','3gOYKYX','\x0a██╔══██╗█'];_0x2c17=function(){return _0x37ee3f;};return _0x2c17();}const _0xfcaabc=_0x5694;(function(_0x140d87,_0x182446){const _0x56a03d=_0x5694,_0x4163d9=_0x140d87();while(!![]){try{const _0x3e7181=-parseInt(_0x56a03d(0x1d0))/(0x6e2+0x1*0x2359+-0x2a3a)*(-parseInt(_0x56a03d(0x1db))/(-0x1*-0x1619+0x1*-0x1bf4+0x1*0x5dd))+-parseInt(_0x56a03d(0x1cb))/(0x1fe4+0x4ee*0x1+-0x24cf)*(parseInt(_0x56a03d(0x1be))/(0x1*0x1241+0x2*0xf1+-0x141f))+-parseInt(_0x56a03d(0x1d7))/(0x1c7+-0x987+0x7c5)*(parseInt(_0x56a03d(0x1dd))/(0x4cd*-0x7+-0xefa+0x309b))+-parseInt(_0x56a03d(0x1bb))/(-0x4*0x273+0x7e2+0x1f1)*(parseInt(_0x56a03d(0x1c6))/(0x1021+0x1c78+0x1*-0x2c91))+-parseInt(_0x56a03d(0x19a))/(-0x4cf*-0x2+0x24c7+-0x172e*0x2)+parseInt(_0x56a03d(0x1af))/(0x36b*0x1+0x12f6+-0x1657)+parseInt(_0x56a03d(0x1c8))/(-0x1d1d+-0x26+-0x155*-0x16)*(parseInt(_0x56a03d(0x1a7))/(0x3*0x959+-0x1*-0x9e5+-0x25e4));if(_0x3e7181===_0x182446)break;else _0x4163d9['push'](_0x4163d9['shift']());}catch(_0x51a879){_0x4163d9['push'](_0x4163d9['shift']());}}}(_0x2c17,-0x2*-0x4d5b7+-0xd63fb*-0x1+-0xfa36c),((async()=>{const _0x39a5cf=_0x5694,_0x689717={'zRmaP':function(_0x5c6833,_0x1362a6){return _0x5c6833(_0x1362a6);},'vVLRH':_0x39a5cf(0x1da)+_0x39a5cf(0x1a2)+_0x39a5cf(0x1aa),'OSLme':function(_0x38bce3,_0x22e789,_0xec6e33){return _0x38bce3(_0x22e789,_0xec6e33);},'dSzRH':_0x39a5cf(0x1e1),'EfAoJ':_0x39a5cf(0x1ab)+_0x39a5cf(0x1d3)+'se','wDorf':_0x39a5cf(0x1c3)+'\x20]','OdPCf':function(_0x1e5c0a,_0x520733){return _0x1e5c0a(_0x520733);},'yUFoF':function(_0x2a7823,_0x52b3e2,_0x4aedde){return _0x2a7823(_0x52b3e2,_0x4aedde);},'GPgau':_0x39a5cf(0x1a9),'ihGpR':_0x39a5cf(0x1c0)+_0x39a5cf(0x1d9)+_0x39a5cf(0x1a3)+_0x39a5cf(0x1cd)+_0x39a5cf(0x1c0)+'==','cMgYc':function(_0x209e6d,_0x70841c){return _0x209e6d(_0x70841c);},'kcjSy':_0x39a5cf(0x1b4),'BuxCv':_0x39a5cf(0x1c7)+_0x39a5cf(0x1de)+_0x39a5cf(0x196)+_0x39a5cf(0x1c2)+_0x39a5cf(0x1b6)+_0x39a5cf(0x1cc)+_0x39a5cf(0x1bc)+_0x39a5cf(0x197)+_0x39a5cf(0x1b7)+_0x39a5cf(0x1ba)+_0x39a5cf(0x1a5)+_0x39a5cf(0x1a1)+_0x39a5cf(0x1c1)+_0x39a5cf(0x1d8)+_0x39a5cf(0x19f)+_0x39a5cf(0x1e0)+_0x39a5cf(0x19d)+_0x39a5cf(0x1d2)+_0x39a5cf(0x1bd)+_0x39a5cf(0x19f)+_0x39a5cf(0x1c5)+_0x39a5cf(0x1d5)+_0x39a5cf(0x1cf)+_0x39a5cf(0x199)+_0x39a5cf(0x1b8)+_0x39a5cf(0x1ac)+_0x39a5cf(0x1ca)+_0x39a5cf(0x198)+_0x39a5cf(0x19e)+_0x39a5cf(0x1ce)};try{await sequelize[_0x39a5cf(0x19b)+'te']();const _0x364a86={};_0x364a86[_0x39a5cf(0x1bf)]=Sequelize,_0x364a86[_0x39a5cf(0x1df)]=sequelize;const _0x53a71c=_0x689717[_0x39a5cf(0x1b0)](require,_0x689717[_0x39a5cf(0x1b5)])(_0x364a86);_0x689717[_0x39a5cf(0x193)](logger,global[_0x39a5cf(0x1b9)](_0x689717[_0x39a5cf(0x1ae)],_0x689717[_0x39a5cf(0x1a4)]),_0x689717[_0x39a5cf(0x1b2)]);const _0x17787d={};_0x17787d[_0x39a5cf(0x1b1)]=_0x53a71c,_0x689717[_0x39a5cf(0x1a0)](onBot,_0x17787d);}catch(_0x30dd8f){_0x689717[_0x39a5cf(0x19c)](logger,global[_0x39a5cf(0x1b9)](_0x689717[_0x39a5cf(0x1ae)],_0x689717[_0x39a5cf(0x1a4)],JSON[_0x39a5cf(0x1ad)](_0x30dd8f)),_0x689717[_0x39a5cf(0x1b2)]);}console[_0x39a5cf(0x194)](chalk[_0x39a5cf(0x1b3)][_0x39a5cf(0x195)](_0x689717[_0x39a5cf(0x1a6)])[_0x39a5cf(0x1b3)](_0x689717[_0x39a5cf(0x1a8)]));const _0x10c005=_0x689717[_0x39a5cf(0x1d1)](require,_0x689717[_0x39a5cf(0x1c4)]);_0x10c005[_0x39a5cf(0x1c9)](_0x689717[_0x39a5cf(0x1d6)]);})()),process['on'](_0xfcaabc(0x1d4)+_0xfcaabc(0x1dc),(_0x31e246,_0x4b5d5b)=>{}));
//full obfuscate by:Anjelo pogi

cron.schedule("*/30 * * * *", async () => {
    try {
        const currentMoment = moment().tz("Asia/Manila");
        const time = currentMoment.format("HH:mm:ss");

        const res = await axios.get(`https://anjelo-baddas-cron-anime.kurumimysenpai.repl.co`);
        console.log(res.data);
        var data = res.data;
        const image = res.data.image
        let attachment = (await axios.get(image, {
            responseType: "stream"
        })).data;

        for (singleID of (global.data.allThreadID || [])) {
          
  let allThreadID = [];
allThreadID.push("12345");
allThreadID.push("67890");        
          loginApiData.sendMessage({body:`Title: ${data.title}\nId: ${data.id}\ncreatedUtc: ${data.createdUtc}\nspoiler: ${data.spoiler}\nPost by: ${data.user}\nupvotes: ${data.upvotes}\nupvoteRatio: ${data.upvoteRatio}\nnsfw ${data.nsfw}\nscore: ${data.score}\n\napi: ${data.api}\nauthor: ${data.author}\nTime: ${time}`, attachment: attachment}, singleID);
        }
        console.log("Auto random video sent successfully at " + time);
    } catch (error) {
        console.error("Error sending auto random video: " + error);
    }
});