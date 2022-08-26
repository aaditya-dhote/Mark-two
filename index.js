var readlineSync = require('readline-sync');
var score = 0;
function play (question,answer)
{var userAnswer = readlineSync.question(question);
 if(userAnswer===answer)
 {console.log("Great you are right");
 score= score+1;}
else{console.log("Oops you are wrong");
    score=score;}
}  
  var que = ["Real name of superhero who is also a student? ",
                 "What superpower does he/she have? ",
                  "Whats is their costume color? ",
            "Who gave them their superpower? ",
            "What is his uncle's name? "];
var ans = ["Peter parker","Web","Red","Spider","Ben"];
for (var i=0;i < que.length;i=i+1)
play(que[i],ans[i]);
console.log("Your final score: " + score)