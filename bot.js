const TelegramBot = require('node-telegram-bot-api');

const token = '6972954802:AAHL6ADJCzDD6aSOLdE8wIDLBlkHad5rHcs'; 
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  if (messageText === '/start') {
      bot.sendMessage(chatId, 'Добро пожаловать в бот! Пожалуйста, поделитесь своей контактной информацией для проверки:', {
          reply_markup: {
              keyboard: [
                  [{
                      text: 'Поделиться контактом',
                      request_contact: true,
                  }],
              ],
              resize_keyboard: true,
              one_time_keyboard: true,
          },
      });
  }
});

bot.on('contact', (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Выберите один из вариантов', {
      reply_markup: {
          keyboard: [
              [
                  { text: 'Мой номер' },
                  { text: 'Мой имя' }
              ],
              [
                  { text: 'Мой Email' },
                  { text: 'Мой портфолио' }
              ],
              [
                  { text: 'Обо Мне' },
              ]
          ],
          resize_keyboard: true,
          one_time_keyboard: true,
      },
  }).then(() => {
      bot.on('message', (msg) => {
          const chatId = msg.chat.id;
          const chosenOption = msg.text;

          if (chosenOption === 'Мой номер') {
              bot.sendMessage(chatId, `+998 99 603 21 41 `);
          } else if (chosenOption === 'Мой имя') {
              bot.sendMessage(chatId, `Ozodbek Jumayev `);
          } else if (chosenOption === 'Мой Email') {
              bot.sendMessage(chatId, `ozodbekjumayev50@gmail.com `);
          } else if (chosenOption === 'Мой портфолио') {
              bot.sendMessage(chatId, `https://portfoliosmy.netlify.app`);
          } else if (chosenOption === 'Обо Мне') {
              bot.sendMessage(chatId, `Я , Жумаев Озодбек , 21 год. Образования среднее-специальное. Самостоятельно изучал HTML , CSS , Js , React js и адаптивную вёрстку сайтов ( figma ). Изучаю Python. Хотелось бы работать с опытными программистами в команде. Теперь о плохом: Русским языком владею плохо (изучаю). Английским не владею.`);
          } else {
              bot.sendMessage(chatId, `Выберите один из вариантов !`);
          }
      });
  });
});
