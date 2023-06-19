from aiogram.types import KeyboardButton, ReplyKeyboardMarkup, InlineKeyboardMarkup
from aiogram import types

but_start = KeyboardButton('start')

catalog_list = InlineKeyboardMarkup(row_width=2)

#ряд с одной кнопкой    
row1_button = types.InlineKeyboardButton(text='⚡️Купить⚡️', callback_data="button_pressed")
catalog_list.add(row1_button)

# Второй ряд с двумя кнопками
row2_button1 = types.InlineKeyboardButton(text='🏆Хочу Заработать!🏆', callback_data='earnings')
row2_button2 = types.InlineKeyboardButton(text='👨‍💻Помощь [ЛС]👨‍💻', url='https://app.leadteh.ru/w/rXrc?k=FM7fI05E')
catalog_list.add(row2_button1, row2_button2)

# Третий ряд с одной кнопкой
row3_button = types.InlineKeyboardButton(text='🔥Наш Сайт[Можно купить, Есть тех.поддержка]🔥', url='https://app.leadteh.ru/w/rXrd?k=rPvgw4ib')
catalog_list.add(row3_button)

#клавиатура на кнопке купить
buy_list = InlineKeyboardMarkup(row_width=2)

row2_button1 = types.InlineKeyboardButton(text='💜Nitro FULL [1 год]💜', callback_data='buy_message')
row2_button2 = types.InlineKeyboardButton(text='💜Nitro Basic [1месяц]💜', callback_data='buy_message')
buy_list.add(row2_button1, row2_button2)

row2_button1 = types.InlineKeyboardButton(text='💚Бейдж"Активный Разработчик"💚', callback_data='buy_message')
row2_button2 = types.InlineKeyboardButton(text='Помощь [ЛС]', callback_data='buy_message')
buy_list.add(row2_button1, row2_button2)

row3_button = types.InlineKeyboardButton(text='💜Nitro FULL[1 Мес]💜(99 руб, если не было Нитро 12 мес.)', callback_data='buy_message')
buy_list.add(row3_button)

row3_button = types.InlineKeyboardButton(text='💎Создать Бота В ДС & ТГ💎', callback_data='bot_tg_and_ds')
buy_list.add(row3_button)

#хочешь заработать
earnings_list = InlineKeyboardMarkup(row_width=2)

earnings_button1 = types.InlineKeyboardButton(text='Читать в Дискорде', url='https://app.leadteh.ru/w/r5Ms?k=CxnJGQS6')
earnings_button2 = types.InlineKeyboardButton(text='Читать в ВК', url='https://app.leadteh.ru/w/r5Mt?k=mmURbDLQ')
earnings_list.add(earnings_button1, earnings_button2)


keyboard_bot_tg_and_ds = InlineKeyboardMarkup(row_width=2)

keyboard_bot_tg_and_ds_button1 = types.InlineKeyboardButton(text='💜Дискрод Сервер💜', url='https://app.leadteh.ru/w/sqlw?k=RscY4wOB')
keyboard_bot_tg_and_ds_button2 = types.InlineKeyboardButton(text='💎Телеграм💎', url='https://app.leadteh.ru/w/sqlx?k=9chwJnzh')



by_keyboard = InlineKeyboardMarkup(row_width=1)
by_keyboard_button1 = types.InlineKeyboardButton(text='подтвердить', url='https://app.leadteh.ru/w/sqlw?k=RscY4wOB')
keyboard_bot_tg_and_ds.add(keyboard_bot_tg_and_ds_button1, keyboard_bot_tg_and_ds_button2)
    