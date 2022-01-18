const readline = require('readline');
const {stdin: input, stdout: output} = require('process');

const rl = readline.createInterface({input, output});

const me = {};

rl.question('What is your name? ', (answer) => {
  me.name = answer;
  
  rl.question('What is your favorite activity? ', (answer) => {
    me.activity = answer;
    
    rl.question('What do you listen to while doing that? ', (answer) => {
      me.music = answer;
      
      rl.question('Which meal is your favorite? ', (answer) => {
        me.meal = answer;
        
        rl.question('What do you like to eat for it? ', (answer) => {
          me.food = answer;
          
          rl.question('What is your favorite sport? ', (answer) => {
            me.sport = answer;
            
            rl.question('What is your superpower? ', (answer) => {
              me.talent = answer;
              rl.close();
              
              let profileStr = `${me.name} likes listening to ${me.music} while ${me.activity}, devouring ${me.food} for ${me.meal}, prefers ${me.sport} over any other sport, and is amazing at ${me.talent}!`;
              
              output.write(` \nProfile: \n\n${profileStr}\n\n`);
            });
          });
        });
      });
    });
  });
});