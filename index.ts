#! /usr/bin/env node
import inquirer from "inquirer";

class Person{
     private personality:string;

     constructor(){
        this.personality = "Mystery";
     }

     public askQuestion(answer:number):void{
        if(answer === 1){
            this.personality = "Extrovert";
        } else if(answer === 2){
            this.personality = "Introvert";
        } else {
            this.personality = "You are still a Mystery"
        }
     }
     public getPersonality():string{
        return this.personality;
     }
}

class Student extends Person{
    private name:string;
    constructor(){
        super();
        this.name = "";
    }
    public get Name():string{
        return this.name
    }
    public set Name(value:string){
        this.name = value;
    }
}
async function Program(){
    try{
        const answers = await inquirer.prompt({
            type : "input",
            name : "personality",
            message : "Type 1 if you like to talk to others and type 2 if you would rather keep to yourself: ",
            validate: (input) => {
                const value = parseInt(input.trim());
                if (isNaN(value) || (value !== 1 && value !== 2)) {
                    return 'Please enter 1 or 2';
                }
                return true;
            }
        });
        const nameAns = await inquirer.prompt({
            type: "input",
            name: "name",
            message: "What is your name?"
        });
        
        let myPerson = new Person();
        myPerson.askQuestion(parseInt(answers.personality));
        console.log("You are " + myPerson.getPersonality());

        let myStudent = new Student();
        myStudent.Name = nameAns.name;
        console.log(`Your name is ${myStudent.Name} and your personality type is ${myStudent.getPersonality()}`);
    
    } catch(error){
        console.log(`An error occured ${error}`);
    }
}
Program();


