(async function(){
    let Bot = require('./index'),
        bot = new Bot();

    await bot.start();
})();