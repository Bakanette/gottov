const Discord = require('discord.js')
const bot = new Discord.Client()

var Bakann = 0
var retard = 0
var bidolo1 = 0
var Kant = 0
var lardfumé = 0
var KamiSensei = 0
var KaizukoInaha = 0

var banword = ['mouillé',
              'mouillée',
              'mouillés',
              'mouillées',
              'mouille',
              'dur',
              'sperme',
              'sexe',
              'bite',
              'pénis',
              'suce',
              'vagin',
              'viol',
              'baiser',
              'sucer',
              'bande',
              'bander',
              'koker',
              'koke',
              'RR',
              'Ruby Rose',
              'Michael',
              'coquine',
              'salope',
              'grenouille',
              'branler',
              'branle',
              'branles',
              'cul',
              'pénétrer',
              'pénétration',
              'lécher',
              'gorge',
              'avaler',
              'avalé',
              'gober',
              'gobé',
              'touche',
              'tkt',
              'pk',
              'bambou',
              'cyprine',
              'XD'
              ]

bot.on('ready', function(){
    bot.user.setActivity('Gotto judge you')
    bot.user.setUsername("GOTTO")
})

bot.on('message', function (message){
    var sender = message.author.username
    var str = message.content
    var words = str.split(' ')
    for (var a = 0; a < 30 ; a++){
        for (var i = 0; i < 43 ; i++){
            if (words[a] === banword[i]) {
               // console.log(words[a])
                message.channel.send('Gotto is watching you : "Vous me dégoûtez." :expressionless: ')
                 if (sender === 'Bakann')
                                     Bakann++
                                if (sender === 'retard')
                                     retard++
                                if (sender === 'Kami-Sensei')
                                            KamiSensei++
                                if (sender === 'Kaizuko-Inaha')
                                            KaizukoInaha++
                                if (sender === 'Kant')
                                            Kant++
                                if (sender === 'bidolo1')
                                            bidolo1++
                                if (sender === 'lard fumé')
                                            lardfumé++

                                return
            }
            if (words[a] === 'Ruby' && words[a+1] === 'Rose'){
                message.channel.send('Gotto is watching you : "Vous me dégoûtez." :expressionless: ')
                if (sender === 'Bakann')
                     Bakann++
                if (sender === 'retard')
                     retard++
                if (sender === 'Kami-Sensei')
                            KamiSensei++
                if (sender === 'Kaizuko-Inaha')
                            KaizukoInaha++
                if (sender === 'Kant')
                            Kant++
                if (sender === 'bidolo1')
                            bidolo1++
                if (sender === 'lard fumé')
                            lardfumé++

                return
            }
        }
    }

    if (str === '!stats'){
        if (sender === 'Bakann')
            message.channel.send(Bakann)
        if (sender === 'retard')
            message.channel.send(retard)
        if (sender === 'Kami-Sensei')
                    message.channel.send(KamiSensei)
        if (sender === 'Kaizuko-Inaha')
                    message.channel.send(KaizukoInaha)
        if (sender === 'Kant')
                    message.channel.send(Kant)
        if (sender === 'bidolo1')
                    message.channel.send(bidolo1)
        if (sender === 'lard fumé')
                    message.channel.send(lardfumé)
    }
    if (str === '!stats Bakann'){
        message.channel.send('Points de saletés : ')
        message.channel.send(Bakann)
    }
    if (str === '!stats retard'){
                                        message.channel.send('Points de saletés : ')
        message.channel.send(retard)
        }
    if (str === '!stats Kami-Sensei'){
                                             message.channel.send('Points de saletés : ')
        message.channel.send(KamiSensei)
        }
    if (str === '!stats Kaizuko-Inaha'){
                                               message.channel.send('Points de saletés : ')
        message.channel.send(KaizukoInaha)
        }
    if (str === '!stats Kant'){
                                      message.channel.send('Points de saletés : ')
        message.channel.send(Kant)
        }
    if (str === '!stats bidolo1'){
                                         message.channel.send('Points de saletés : ')
        message.channel.send(bidolo1)
        }
    if (str === '!stats lard fumé'){
                                           message.channel.send('Points de saletés : ')
        message.channel.send(lardfumé)
        }
})

bot.login(process.env.TOKEN)
