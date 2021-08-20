console.log("Hello!!");
var readlineSync = require('readline-sync');
var userName = readlineSync.question("Please Enter Your Name? ");
console.log(" Welcome " + userName);
console.log("Let us see How well do you know Jaanvi !");
console.log("Let's Start the Quiz ");
console.log("\n");
var score =0;

function check(correctanswer,enteredanswer)
   { 
     if(correctanswer === enteredanswer)
     {
       console.log("You are Right !!");
       score++;
     }
     else
     {
       console.log("You are wrong!");

     }
   }
var question =[
  {
    question : "Where does jaanvi Stay? \n    a.Mumbai \n    b.Delhi \n    c.Bangalore",
    
     answer  : "a",
  },
  {
    question : "Does Jaanvi loves exploring new places? \n    a.Yes \n    b.No \n    c.Maybe" ,
    
     answer  : "a",
  },
  {
    question : "Which is Jaanvi's Birthday Month? \n    a.July  \n    b.October \n    c.March",
    
     answer  : "b",
  },
  {
    question : "Is Jaanvi a morning person or night person \n    a.Morning  \n    b.Night \n    c.None of the above",
    
     answer  : "a",
  },
  {
    question : "What is Jaanvi's Favourite cuisine? \n    a.South Indian  \n    b.North Indian \n    c.Chinese",
    
     answer  : "c",
  },
  {
    question : "Which was Jaanvi's  First company in IT career? \n    a.Accenture  \n    b.CapGemini \n    c.MAQ",
    
     answer  : "b",
  },
  
  {
    question : "Which of these item does Jaanvi avoid in sandwich? \n    a.Onion  \n    b.Beetroot \n    c.Tomato",
    
     answer  : "a",
  },
  {
    question : "Does Jaanvi Believe in Astrology? \n    a.Yes  \n    b.No \n    c.MayBe",
    
     answer  : "a",
  },
{
    question : "What is the nickname that Jaanvi's childhood friends call her by? \n    a.Richu  \n    b.Jaanu \n    c.Bhoji",
    
     answer  : "c",
  },
  {
    question : "Which is Jaanvi's favorite school subject? \n    a.Science  \n    b.Math \n    c.Art",
    
     answer  : "b",
  },  
]


for(i=0;i<question.length;i++)
{
console.log( "Q" + (i+1)+ ". " +question[i].question);
var useranswer = readlineSync.question("Please Enter Your answer? ");
var checkone = question[i].answer;
//console.log(checkone);
check(checkone,useranswer);
console.log("\n");
   console.log("--------------------");
    console.log("\n")
  
}

console.log("\n");
 console.log("Your Final Score is "+ score);console.log("\n");
 console.log("Here is the list of people with high scores ");
  var highScores=[
    {
      Name:"Nikhil",
    hs : 9
    },
    {
      Name:"Reyaan",
    hs : 8
    }
     ]

     console.log("Name   " + "Score");
     for(i=0;i<highScores.length;i++)
     {
       
       console.log(highScores[i]. Name +"   " + highScores[i].hs)
     }