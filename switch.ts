import inquirer  from "inquirer";
import chalk from "chalk"

console.log(chalk.underline.bold.italic.bold.bgBlackBright("Welcome to number guess game"));

let randomNumber = Math.floor(Math.random() * 4) +1

console.log("You have picked a number!");


let num = await inquirer.prompt
(
    [
        {
            name: "numb",
            type: 'list',
            message:'Please select a number!',
            choices: ["1", "2", "3", "4"]
        }
    ]
)
let num1: number = parseInt(num.numb) // change string into a number 

switch(true){
    case num1 === randomNumber:
        console.log(chalk.bold.italic.bgBlue("You guessed right number"));
        break;
        default :
        console.log(chalk.bold.italic.bgGray("Your guessed is wrong!"));
        
}



