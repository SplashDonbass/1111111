import { Telegraf, Markup } from 'telegraf'

const token = '7610051906:AAFYjBTQHZ6EGOyR5344zAd3uJsP_X1Q2YI'
const webAppUrl = 'https://tapalka-pro.web.app'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
    ctx.reply(
        'Привет, запускай приложение и получи приветсвенный бонус 500 монет!',
        Markup.inlineKeyboard([
            Markup.button.webApp('Начать тапать', `${webAppUrl}?ref=${ctx.payload}`
            ),
        ])
    )
})

bot.launch()