const Discord = require('discord.js')
const bot = new Discord.Client()

var Bakann = 0
var retard = 0
var bidolo1 = 0
var Kant = 0
var lardfumé = 0
var KamiSensei = 0
var KaizukoInaha = 0
var total = 0
var pourcent = 0
var moyenne = 0

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
              'XD',
              'cochonne',
              'kokine',
              'penis',
              'dedans',
              'inside',
              'orgasme',
              'soif',
              'sab',
              'Adrien',
              'Celeshine',
              'glisser',
              'dessus',
              'dessous',
              'entre',
              'doucement',
              'brusquement',
              'taper',
              'punir',
              'punition',
              'maitre',
              'esclave',
              'bondage',
              'sm',
              'bdsm',
              'masochisme',
              'sadique',
              'chatte',
              'miaou',
              'minou',
              'huitre',
              'moule',
              'boule',
              'boules',
              'bambou',
              'saber',
              'sabant',
              'kokine',
              'kokin',
              'cochone',
              'cochonne',
              'cochon',
              'pervers',
              'loli',
              'lolicon',
              'moccori',
              'MOCCORI',
              'kabedon',
              'carresser',
              'carresse',
              'oeudipe',
              'lesbienne',
              'homosexuel',
              'pedophile',
              'baveux',
              'bave',
              'abricot',
              'goutte',
              'gouter',
              'leche',
              'lèche',
              'lecher',
              'lécher',
              'langue',
              'lick',
              'fontaine',
              'enfant',
              'cave',
              'boire',
              'Céleshine',
              'Céléshine',
              'mou',
              'chaud',
              'chaude',
              'fraiche',
              'fraîche',
              'Pyper',
              'hentai',
              'porno',
              'pornographique',
              'pornographie',
              'sale',
              'salasse',
              'saleté',
              'salope',
              'salement',
              'laver',
              'savon',
              'liquide',
              'blanc',
              'blanchatre',
              'sécrétion',
              'vagin',
              'vagina',
              'vaginal',
              'vaginale',
              'règles',
              'menstruations',
              'entretenir',
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
        for (var i = 0; i < 140 ; i++){
            if (words[a] === banword[i]) {
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
            if ((words[a] === 'Ruby' && words[a+1] === 'Rose') || (words[a] === 'X' && words[a+1] === 'D') || (words[a] === 'petite' && words[a+1] === 'salope') || (words[a] === 'pyper' && words[a+1] === 'america') || (words[a] === 'Vlad' && words[a+1] === 'x' && words[a+2] === 'Vince') || (words[a] === 'chaud' && words[a+1] === 'bouillant') || (words[a] === 'pere' && words[a+1] === 'noel')){
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

    total = Bakann + retard + KamiSensei + KaizukoInaha + lardfumé + Kant + bidolo1

    if (str === '!moy'){
        moyenne = 0
        moyenne = total/7
        message.channel.send('Nombre de point saletés moyen : '+ Number.parseFloat(moyenne).toFixed(0))
    }

    if (str === '!%'){
        if (sender === 'Bakann'){
            pourcent = 0
            pourcent = (Bakann/total)*100
            message.channel.send('Bakann est corrompu à : '+ Number.parseFloat(pourcent).toFixed(0) + '%')
        }
        if (sender === 'lard fumé'){
            pourcent = 0
            pourcent = (lardfumé/total)*100
            message.channel.send('lard fumé est corrompu à : '+ Number.parseFloat(pourcent).toFixed(0) + '%')
        }
        if (sender === 'bidolo1'){
            pourcent = 0
            pourcent = (bidolo1/total)*100
            message.channel.send('bidolo1 est corrompu à : '+ Number.parseFloat(pourcent).toFixed(0) + '%')
        }
        if (sender === 'Kami-Sensei'){
            pourcent = 0
            pourcent = (KamiSensei/total)*100
            message.channel.send('Kami-Sensei est corrompu à : '+ Number.parseFloat(pourcent).toFixed(0) + '%')
        }
        if (sender === 'retard'){
            pourcent = 0
            pourcent = (retard/total)*100
            message.channel.send('retard est corrompu à : '+ Number.parseFloat(pourcent).toFixed(0) + '%')
        }
        if (sender === 'Kant'){
            pourcent = 0
            pourcent = (Kant/total)*100
            message.channel.send('Kant est corrompu à : '+ Number.parseFloat(pourcent).toFixed(0) + '%')
        }
        if (sender === 'Kaizuko-Inaha'){
            pourcent = 0
            pourcent = (KaizukoInaha/total)*100
            message.channel.send('Kaizuko-Inaha est corrompu à : '+ Number.parseFloat(pourcent).toFixed(0) + '%')
        }
    }

    if (str === '!% Bakann'){
                pourcent = 0
                pourcent = (Bakann/total)*100
                message.channel.send('Bakann est corrompu à : '+ Number.parseFloat(pourcent).toFixed(0) + '%')
    }
    if (str === '!% Kaizuko-Inaha'){
                pourcent = 0
                pourcent = (KaizukoInaha/total)*100
                message.channel.send('Kaizuko-Inaha est corrompu à : '+ Number.parseFloat(pourcent).toFixed(0) + '%')
    }
    if (str === '!% Kant'){
        pourcent = 0
        pourcent = (Kant/total)*100
        message.channel.send('Kant est corrompu à : '+ Number.parseFloat(pourcent).toFixed(0) + '%')
    }
    if (str === '!% retard'){
        pourcent = 0
        pourcent = (retard/total)*100
        message.channel.send('retard est corrompu à : '+ Number.parseFloat(pourcent).toFixed(0) + '%')
    }
    if (str === '!% Kami-Sensei'){
        pourcent = 0
        pourcent = (KamiSensei/total)*100
        message.channel.send('Kami-Sensei est corrompu à : '+ Number.parseFloat(pourcent).toFixed(0) + '%')
    }
    if (str === '!% bidolo1'){
        pourcent = 0
        pourcent = (bidolo1/total)*100
        message.channel.send('bidolo1 est corrompu à : '+ Number.parseFloat(pourcent).toFixed(0) + '%')
    }
    if (str === '!% lard fumé'){
        pourcent = 0
        pourcent = (lardfumé/total)*100
        message.channel.send('lard fumé est corrompu à : '+ Number.parseFloat(pourcent).toFixed(0) + '%')
    }

    if (str === '!stats'){
        if (sender === 'Bakann')
            message.channel.send(('Point de saletés : ') + Bakann)
        if (sender === 'retard')
            message.channel.send(('Point de saletés : ') + retard)
        if (sender === 'Kami-Sensei')
                    message.channel.send(('Point de saletés : ') + KamiSensei)
        if (sender === 'Kaizuko-Inaha')
                    message.channel.send(('Point de saletés : ') + KaizukoInaha)
        if (sender === 'Kant')
                    message.channel.send(('Point de saletés : ') + Kant)
        if (sender === 'bidolo1')
                    message.channel.send(('Point de saletés : ') + bidolo1)
        if (sender === 'lard fumé')
                    message.channel.send(('Point de saletés : ') + lardfumé)
    }
    if (str === '!stats Bakann'){
        message.channel.send(('Point de saletés : ') + Bakann)
    }
    if (str === '!stats retard'){
        message.channel.send(('Point de saletés : ') + retard)
        }
    if (str === '!stats Kami-Sensei'){
        message.channel.send(('Point de saletés : ') + KamiSensei)
        }
    if (str === '!stats Kaizuko-Inaha'){
        message.channel.send(('Point de saletés : ') + KaizukoInaha)
        }
    if (str === '!stats Kant'){
        message.channel.send(('Point de saletés : ') + Kant)
        }
    if (str === '!stats bidolo1'){
        message.channel.send(('Point de saletés : ') + bidolo1)
        }
    if (str === '!stats lard fumé'){
        message.channel.send(('Point de saletés : ') + lardfumé)
        }


       if (str === '!help'){
            message.channel.send('!% : Pour afficher votre pourcentage de saleté parmi la plèbe')
            message.channel.send('!stats : Pour afficher le nombre de vos points de saleté')
            message.channel.send('Vous pouvez ajouter le pseudo de la personne que vous souhaitez analyser derrière les commandes précendentes. ex : !stats retard')
            }

})

bot.login(process.env.TOKEN)
