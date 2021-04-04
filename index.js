const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const command = require('./command')
const privateMessage = require('./private-message')

client.on('ready', () => {
    console.log('El bot esta activado.')





////////////////////////////// PING //////////////////////////////
    command(client, 'ping', (message) => {
        message.channel.send('**Estoy activo!**')
    })
//////////////////////////////////////////////////////////////////





    ////////////////////////////// SERVIDORES //////////////////////////////
    command(client, 'servers', (message) => {
        client.guilds.cache.forEach((guild) => {
            console.log(guild)
            message.channel.send(`${guild.name} **Tiene un total de** ${guild.memberCount} **miembros**`)
        })
    })
    /////////////////////////////////////////////////////////////////////////






    ////////////////// CLEARCHANNEL //////////////////////////////
    command(client, ['cc', 'clearchannel'], (message) => {
        if (message.member.hasPermission('ADMINISTRATOR')) {
            message.channel.messages.fetch().then((results)=> {
                console.log(results)
                message.channel.bulkDelete(results)
            })
            
        }
    })
    ////////////////////////////////////////////////////////////





    ////////////////// PRIV //////////////////
    privateMessage(client, '!invitacion', 'https://discord.gg/VkHfcR3SNW')
    //////////////////////////////////////////////////////





////////////////// TWITCH GUECHURABA //////////////////
command(client, 'Twitchg', (message) => {
    const embed = new Discord.MessageEmbed()
    .setTitle('Guechuraba')
    .setColor('#572364')
    .setURL('https://www.twitch.tv/guechuraba')
    .setDescription('**Twitch de Guechuraba**')
    .setThumbnail('https://cdn.discordapp.com/attachments/821400883198951446/828062626826551336/twitch.png')
    .setImage('https://cdn.discordapp.com/attachments/821400883198951446/828062856574009374/Untitled-2.png')
    .setTimestamp()
    .setFooter('Ohiggins team', 'https://cdn.discordapp.com/attachments/780918441708224522/828060480869236846/Untitled-2.png' )
    .addField('__SEGUIR__', 'Para ir al canal presionar en el nombre (azul)', true);


    message.channel.send(embed)
})
/////////////////////////////////////////////////////




////////////////// TWITCH PERRO //////////////////
command(client, 'Twitchp', (message) => {
    const embed2 = new Discord.MessageEmbed()
    .setTitle('Perro_Bomba)')
    .setColor('#572364')
    .setURL('https://www.twitch.tv/perroo_bomba')
    .setDescription('**Twitch de Perro_Bomba**')
    .setThumbnail('https://cdn.discordapp.com/attachments/821400883198951446/828062626826551336/twitch.png')
    .setImage('https://cdn.discordapp.com/attachments/821400883198951446/828062856574009374/Untitled-2.png')
    .setTimestamp()
    .setFooter('Ohiggins team', 'https://cdn.discordapp.com/attachments/780918441708224522/828060480869236846/Untitled-2.png' )
    .addField('__SEGUIR__', 'Para ir al canal presionar en el nombre (azul)', true);

    message.channel.send(embed2)
})
/////////////////////////////////////////////////////

///////////////////////// HELP ////////////////////////////
command(client, 'help', (message) => {
    message.channel.send(`
    ------------------------- AYUDA ------------------------- 
        **!help** - Muestra la guia de todos los comandos.
        **!Twitchg** - Muestra el canal de twitch de Guechuraba.
        **!Twitchp** - Muestra el canal de twitch de Perro_Bomba.
        **!cc / !clearchannel** - Elimina una cierta cantidad del chat donde uses el comando (**SOLO PARA ADMINS**)
        **!invitacion** - Te manda un mensaje al privado con la invitacion del servidor.
        **!servers** - Muestra en los servidores que esta el bot y cuanta gente tiene cada uno.
        **!ping** - Comando para ver si esta activo.
    ---------------------------------------------------------
    `)
})
//////////////////////////////////////////////////////////


/////////////////////// STATUS ////////////////////////////////
const { prefix } = config

client.user.setPresence({
    activity: {
        name: `"${prefix}help" para ayuda`
    }
})

//////////////////////////////////////////////////////////
})

client.login(config.token)