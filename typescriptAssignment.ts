 
console.log(" \n---------------Typescript Assignment-----------\n");
console.log(" \n--------------- 45 Question-Answer----------\n");
console.log("Name: Syed Ahmed");
console.log("Timing: Thursday 9:00AM to 12:00AM");
console.log("\n");



// Q1:Succesfully installed everything
console.log("\n Q1:");
console.log("Output:");
console.log("successfully installed");

 //Q2:
console.log("\n Q2:");
console.log("Output:");
 let person_name:String="Ahmed";
 console.log("Hello " +person_name+",would you like to learn some typescript today?");

//  Q3:
console.log("\n Q3:");
console.log("Output:");
let per_name="Syed Ahmed";
console.log("Person Name:"+per_name);
console.log("UppercCase:"+ per_name.toLocaleUpperCase());
console.log("LowerCase:"+per_name.toLocaleLowerCase());

var firstLetter=per_name[0].toUpperCase();
var remainingletter=per_name.slice(1,per_name.length);
console.log("TitleCase:"+firstLetter+remainingletter.toLocaleLowerCase());

// Q4:
console.log("\n Q4:");
console.log("Output:");
const famous_quote1:String='"Focus more on your desire than on your doubt, and the dream will take care of itself."';
console.log('Mark Twain once said ,'+famous_quote1);


// Q5:
console.log("\n Q5:");
console.log("Output:");
const famous_person:String="Oscar Wilde";
const famous_quote2:String='"To live is the rarest thing in the world. Most people exist, that is all."';
const message:String=famous_person+" once said ,"+famous_quote2; 
console.log(message);

// Q6:
console.log("\n Q6:");
console.log("Output:");
let personName:String="\n\t\tSyed Ahmed \n\t";
console.log("Person name with  whitespace:");
console.log(personName);

console.log("Person name after striping the whitespaces:");
console.log(personName.trim());

// Q7:
console.log("\n Q7:");
console.log("Output:");
var add=5+3;
var sub=16-8;
var mul=2*4;
var div=16/2;

console.log("The Addition of 5 and 3 is "+add);
console.log("The Subtraction of 16 and 8 is "+sub);
console.log("The Multiplication of 2 and 4 is "+mul);
console.log("The division of 16 and 2 is "+div);



// Q8:
console.log("\n Q8:");
console.log("Output:");
console.log(`Console.log(5+3) : ${5+3}`);
console.log(`Console.log(91-83) : ${91-83}`);
console.log(`Console.log(2*4) : ${2*4}`);
console.log(`Console.log(32/4) : ${32/4}`);

// Q9:
console.log("\n Q9:");
console.log("Output:");
const favourite_number:number=6;
var msg:String="My Favourite number is "+favourite_number;
console.log(msg);

// Q10:
console.log("\n Q10:");
console.log("Output:");
// 1.

// name:Syed Ahmed
// Date: March 5, 2024

// Define a custom message
let customMessage = "Hello, world! This is a custom message."

// Print the custom message
console.log("1.");
console.log("Custom Message:");
console.log(customMessage);
console.log("\n");

// 2.Sum of Two Lists using Spread Operator

// name:Syed Ahmed
// Date: March 5, 2024

// Define two lists
let list1:number[] = [1, 2, 3];
let list2:number[] = [4, 5, 6];

// Sum the two lists using the spread operator
let sum_of_lists = [...list1,...list2];

// Print the sum of the two lists
console.log("2.");
console.log("Sum of the two lists: ");
console.log(sum_of_lists);

   

// Q11:
console.log("\n Q11:");
console.log("Output:");
let names=["Ahmed","Saad","Moiz","Kashif"];
for(let i:number=0;i<names.length;i++){
    console.log(names[i]);
}

// Q12:
console.log("\n Q12:");
console.log("Output:");
for(let i:number=0;i<names.length;i++){
    let message="Hello, "+names[i]+"! I hope you're doing well.";
    console.log(message);
    console.log("\n");
}

// Q13:
console.log("\n Q13:");
console.log("Output:");
let favourite_transportation=["car","Motorcycle","Plane","Bicycle"];
for(let i:number=0;i<favourite_transportation.length;i++){
    console.log("I would like to own a"+ favourite_transportation[i]);
}

// Q14:
console.log("\n Q14:");
console.log("Output:");
let members=["Moiz","Hamza","Saad"];


for(let i:number=0;i<members.length;i++){
            console.log("Dear "+members[i]+",\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\nSincerely,\nSyed Ahmed");
            console.log("\n");
        }


//  Q15:
console.log("\n Q15:");
console.log("Output:");

let member=["Moiz","Hamza","Saad"];

console.log("Original Invitations:");
for(let i:number=0;i<members.length;i++){
    console.log("Dear "+members[i]+" guest, please come to my dinner party!");
    console.log("\n");
}



// i:
let member_cant_make_it="Saad";
console.log("\nUnfortunately,"+member_cant_make_it+ " can't make it to the dinner.\n");

//  ii:
member[member.indexOf(member_cant_make_it)]="Sonu";

// iii:
console.log("Updated Invitations:")
for(let i:number=0;i<member.length;i++){
    console.log("Dear"+member[i]+", please come to my dinner party!");
    console.log("\n");
}


//  Q16:
console.log("\n Q16:");
console.log("Output:");
member.unshift("Khasif");
member.push("Rauf");
member.splice(Math.floor(member.length / 2), 0, 'jawed');

for(let i=0;i<member.length;i++){
    console.log("Dear "+member[i]+", please come to my dinner party!");
}
let length_of__invited_members:number=member.length;

//  Q17:
console.log("\n Q17:");
console.log("Output:");

console.log("\nUh oh! Only space for two guests now.");

while(member.length>2){
        let remove_member=member.pop();
        console.log("Sorry, " +remove_member+ ", there's no room at the table.");
    
}

for(let mem of member){
    console.log("Dear "+mem+", you are still invited to dinner.");

}

member=[];
console.log("Guest list is now empty:");
console.log(member);


//  Q18:
console.log("\n Q18:");
console.log("Output:");

let locations:string[]=["Karachi","lahore","Islamabad","Multan","Quetta"];

console.log("Original Order:"+locations+"\n");

var duplicate_list=locations.slice(0,locations.length);
var aphabetical_order=duplicate_list.sort();

console.log("Aplhabetical Order:"+aphabetical_order);
console.log("Original Order:"+locations+"\n");


console.log("Reverse Aplhabetical Order:"+aphabetical_order.reverse());
console.log("Original Order:"+locations+"\n");

console.log("Reverse Order:"+locations.reverse()+"\n");

console.log("original order :"+locations.reverse()+"\n");

var aphabetic_order=locations.sort();
console.log("Aphabetical Order :"+aphabetic_order+"\n");

console.log("Reverse Aphabetical Order :"+aphabetic_order.reverse()+"\n");


//  Q19:
console.log("\n Q19:");
console.log("Output:");

console.log("Number of guests invited to dinner:"+length_of__invited_members);


//  Q20:
console.log("\n Q20:");
console.log("Output:");

let languages:String[]=["Sindhi","Urdu","Punjabi","Balochi","English","Chinese","Hindi"];
console.log("List of languages:");
for(let lang of languages){
    console.log(lang);
}


//  Q21:
console.log("\n Q21:");
console.log("Output:");

interface Student_data{
    id:number,
    studentName:String,
    fatherName:String,
    Address:String,
    PhoneNumber:Number,
    Email:String

}

let student1:Student_data={

    id:234462,
    studentName:"Ahmed",
    fatherName:"Anwer",
    Address:"Ghazi_Arcade A-1 405",
    PhoneNumber:12346789,
    Email:"SyedAhmed123@gmail.com"

}


let student2:Student_data={
    id:12856784,
    studentName:"Saad",
    fatherName:"Afzal",
    Address:"Gulshan-e-memar Block-2",
    PhoneNumber:1234577439,
    Email:"saad998@gmail.com"

}

console.log(`Student1 data: `);
console.log(student1);
console.log(`Student2 data: `);
console.log(student2);



//  Q22:
console.log("\n Q22:");
console.log("Output:");

let userName:String[]=["Ahmed","Anwer","Hamza","Arfa","Ali","Saad"];
let indexNumber:number=12;
let checkIndex=userName[indexNumber];
   
if(userName.length>indexNumber){
    console.log(`user name at index ${indexNumber} is ${checkIndex}`);
   }
  
else{
    console.log("Index Error: "+indexNumber+" is out of range for the list of user name");
   }


//  Q23:
console.log("\n Q23:");
console.log("Output:");

let car = 'subaru';
let car_length=car.length;

// 1:
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True

// 2: 
console.log("Is car != 'Suzuki'? I predict True.");
console.log(car != 'Suzuki'); // True

// 3
console.log("Is car == 'Subaru'? I predict False.");
console.log(car == 'Subaru'); // False

// 4:
console.log("Is car.length == 6? I predict true.");
console.log(car_length == 6); // true

// 5:
console.log("Is car.length != 5? I predict True.");
console.log(car_length != 5); // True

// 6:
console.log("Is car_length==5 && car_length!=5? I predict false.");
console.log(car_length==5 && car_length!=5) // false

// 7:
console.log("Is car==car.toLocaleUpperCase()? I predict fasle.");
console.log(car==car.toLocaleUpperCase()); // false
  

// 8: 
console.log("Is car==car.toLocaleLowerCase()? I predict true.");
console.log(car==car.toLocaleLowerCase()); // true

// 9:
console.log("Is car.length <5? I predict false.");
console.log(car_length<5) // false

// 10:
console.log("Is car.length > 5? I predict true.");
console.log(car_length> 5); // true


//  Q24:
console.log("\n Q24:");
console.log("Output:");

let language:String="Urdu";

// • Tests for equality and inequality with strings

console.log("Is language==Urdu I predict True.");
console.log(language=="Urdu");//True

console.log("Is language!=Urdu I predict false.");
console.log(language!="Urdu");//false

// • Tests using the lower case function
console.log("Is language.toLocaleLowerCase()==Urdu I predict False.");
console.log(language.toLocaleLowerCase()=="Urdu");//False

// • Numerical tests involving equality and inequality, greater than and less than, 
//   greater than or equal to, and less than or equal to

let num1:number=2;
let num2:number=4;

console.log("Is num1==num2 I predict False.");
console.log(num1==num2);//False

console.log("Is num1!=num2 I predict True.");
console.log(num1!=num2);//True

console.log("Is num1<num2 I predict True.");
console.log(num1<num2);//True


console.log("Is num1>num2 I predict False.");
console.log(num1>num2);//False


console.log("Is num1<=num2 I predict True.");
console.log(num1<=num2);// True


console.log("Is num1>=num2 I predict False.");
console.log(num1>=num2);//False

// • Tests using "and" and "or" operators

console.log("Is num1==num2 && num1<num2I predict False.");
console.log(num1==num2 && num1>num2);//False


console.log("Is num1==num2 || num1<num2I predict True.");
console.log(num1==num2 || num1<num2);//True

// • Test whether an item is in a array
let fruitNames:String[]=["Apple","Banana","Mango","Grapes"];
console.log("Is 'Banana' in the fruits array? I predict True.");
if(fruitNames.indexOf("Banana")!==-1){
      console.log(true);//True
} 

// • Test whether an item is not in a array
console.log("Is 'Orange' in the fruits array? I predict false.");
if(fruitNames.indexOf("Orange")==-1){
    console.log(false);//false
}  



//  Q25:
console.log("\n Q25:");
console.log("Output:");

//version that passes 
let alien_color ="green";
if(alien_color=="green"){
    console.log("Congratulations! You just earned 5 points.");
}
 // version that fails 
let alien_clr ="red";
if(alien_clr=="green"){
    console.log("Congratulations! You just earned 5 points.");
}


//  Q26:
console.log("\n Q26:");
console.log("Output:");


//version that runs the if block
let alien_color2 ="green";
if(alien_color2=="green"){
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else{
    console.log("Congratulations! You just earned 10 points for shooting the green alien.");
}


//version that runs the else block
let alien_clr2 ="red";
if(alien_clr2=="green"){
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else{
    console.log("Congratulations! You just earned 10 points for shooting the green alien.");
}


//  Q27:
console.log("\n Q27:");
console.log("Output:");

// version that runs the if block
let alien_color3 ="green";
if(alien_color3=="green"){
    console.log("Congratulations! You just earned 5 points ");
}
else if(alien_color3=="yellow"){
    console.log("Congratulations! You just earned 10 points");
}
else{
    console.log("Congratulations! You just earned 15 points. ");
}

// version that runs the else-if block
let alienClr3 ="yellow";
if(alienClr3=="green"){
    console.log("Congratulations! You just earned 5 points ");
}
else if(alienClr3=="yellow"){
    console.log("Congratulations! You just earned 10 points");
}
else{
    console.log("Congratulations! You just earned 15 points. ");
}

// version that runs the else block
let alien_clr3 ="red";
if(alien_clr3=="green"){
    console.log("Congratulations! You just earned 5 points ");
}
else if(alien_clr3=="yellow"){
    console.log("Congratulations! You just earned 10 points");
}
else{
    console.log("Congratulations! You just earned 15 points. ");
}

//  Q28:
console.log("\n Q28:");
console.log("Output:");
let person:number=12;

if(person<2){
    console.log("The person is a baby.");
} else if(person>=2 && person<4){
    console.log("The person is a toddler.");
}
else if(person>=4 && person<13){
    console.log("The person is a kid. ");
} else if(person>=13 && person<20){
    console.log("The person is a  teenager.");
}
else if(person>=20 && person<65){
    console.log("The person is a  adult. ");
}
else {
    console.log("The person is an elder. ");
}

//  Q29:
console.log("\n Q29:");
console.log("Output:");
let favorite_fruits:String[]=["Banana","Orange","Apple"];
for(let fruit of favorite_fruits){
    if(fruit=="Apple"){
        console.log("You really like "+fruit+"s!");
    }else if(fruit=="Banana"){
        console.log("You really like "+fruit+"s!");
    }else if(fruit=="Orange"){
        console.log("You really like "+fruit+"s!");
    }else if(fruit=="Mango"){
        console.log("You really like "+fruit+"s!");
    }else if(fruit=="Grapes"){
        console.log("You really like "+fruit+"s!");
    }
}


//  Q30:
console.log("\n Q30:");
console.log("Output:");
let username:String[]=["Admin","Ahmed","Hamza","Ali","Moiz"];

for(let user_name of username){
    if(user_name=="Admin"){
        console.log("Hello "+user_name+", would you like to see a status report?");
    }
    else{
        console.log("Hello "+user_name+", thank you for logging in again.");
    }
}


//  Q31:
console.log("\n Q31:");
console.log("Output:");

let Length=username.length;
for(let i=0;i<Length;i++){
    username.pop();
}

let len=username.length;
if(len==0){
   console.log("We need to find some users!");  
}
else{
    for(let user_name of username){
    if(user_name=="Admin"){
        console.log("Hello "+user_name+", would you like to see a status report?");
    }
    else{
        console.log("Hello "+user_name+", thank you for logging in again.");
    }
  }

}

//  Q32:
console.log("\n Q32:");
console.log("Output:");
let  current_users:String[]=["Ahmed","Abrar","Arfa","Hamza","Kashif"];
let  new_users:String[]=["ahmed","Sonu","Ali","Hamza","Saad"];

for(let i=0;i<current_users.length;i++){
          if(current_users[i].toLocaleLowerCase()==new_users[i].toLocaleLowerCase()){
                console.log("Sorry, the username "+new_users[i]+" is not available. Please enter a new username");
          }
          else{
            console.log("The username "+new_users[i]+" is available.");
          }
}



//  Q33:
console.log("\n Q33:");
console.log("Output:");

var number:number[]=[1,2,3,4,5,6,7,8,9];

for(let num of number){
    if(num==1){
        console.log(num+"st");
    }else if(num==2){
        console.log(num+"nd");
    }else if(num==3){
        console.log(num+"rd");
    }else{
        console.log(num+"th");
    } 
}


//  Q34:
console.log("\n Q34:");
console.log("Output:");

let favorite_pizzas:String[]=["Margherita", "Pepperoni", "BBQ Chicken"];
console.log("Favorite Pizzas:");
for (let pizza of favorite_fruits){
    console.log(pizza);
 }
 console.log("\n");

 for (let pizza of favorite_fruits){
    console.log("I like"+pizza);
 }
console.log("I really love pizza!");


//  Q35:
console.log("\n Q35:");
console.log("Output:");

let animals:String[]=["Lion", "Dog", "Cat"];
console.log("Animals");
for (let ani of animals){
    console.log(ani);
 }
 console.log("\n");

 for (let ani of animals){
    console.log("A "+ ani+ " would make a great pet.");
 }
console.log("Any of these animals wouldmake a great pet!");


//  Q36:
console.log("\n Q36:");
console.log("Output:");
function make_shirt(size:String,message:String):void{
         console.log("The shirt size is "+size+" and the message printed on it is:"+message);
  }

make_shirt("medium","Keep Calm and Code On");

//  Q37:
console.log("\n Q37:");
console.log("Output:");
function makeShirt(size="Large",message="I love Typescript"){
    console.log("The shirt size is "+size+" and the message printed on it is:"+message);    
}
makeShirt();
makeShirt("medium");
makeShirt("small","Tpescript is awesome");

//  Q38:
console.log("\n Q38:");
console.log("Output:");
function describe_city(name_of_city:String,country:String="Pakistan"){
    console.log(name_of_city+" is in "+country);
}

describe_city("Karachi", "Pakistan");
describe_city("New York");
describe_city("London", "UK");

//  Q39:
console.log("\n Q39:");
console.log("Output:");
function city_country(name_of_city:String,country:String){
     return name_of_city+", "+country;
}
console.log(city_country("karachi","pakistan"));
console.log(city_country("Paris","France"));
console.log(city_country("Sydney","Australia"));

//  Q40:
console.log("\n Q40:");
console.log("Output:");

function make_album(artist_name :String,album_title:String,number_of_track?:number){

     type object_type={artistName:String,albumTitle:String,tracks?:number};

     let obj:object_type={
        artistName:artist_name,
        albumTitle:album_title
    };
    if (number_of_track!=undefined){
        obj.tracks=number_of_track;
    }
    return obj;
    
 }

 let album1=make_album("Michael Jackson","Thriller");
 let album2=make_album("The Beatles","Abbey Road");
 let album3=make_album("Pink Floyd","Dark Side of the Moon");
 let album4=make_album("The Beatles","Sgt. Pepper's Lonely Hearts Club Band",8);

 console.log("album1:");
 console.log(album1);
 console.log("\n"+"album2:");
 console.log(album2);
 console.log("\n"+"album3:");
 console.log(album3);
 console.log("\n"+"album4:");
 console.log(album4);

 //  Q41:
console.log("\n Q41:");
console.log("Output:");


function show_magicians(magiciansNames:Array<String>){
   for(let i=0;i<magiciansNames.length;i++){
       console.log(magiciansNames[i]);
   }
}

let magicians_names:String[]=["Ahmed","Jawad","Hamza","Saad"];
show_magicians(magicians_names);

//  Q42:
console.log("\n Q42:");
console.log("Output:");

function make_great(GreatMagiciansNames:Array<String>):void{
    for(let i=0;i<GreatMagiciansNames.length;i++){
       let GreatMagName="the Great "+GreatMagiciansNames[i];
       GreatMagiciansNames[i]=GreatMagName;
       
    }
    
    for(let i=0;i<GreatMagiciansNames.length;i++){
        console.log(GreatMagiciansNames[i]);
    }
}

make_great(magicians_names);

//  Q43:
console.log("\n Q43:");
console.log("Output:");


function makeGreat(magician_names:Array<String>){

    let magName=[];
    for(let i=0;i<magician_names.length;i++){
        magName[i]="the great "+magician_names[i];
    }
    return magName;

}

function ShowMagicians(great_Mag_Name:Array<String>,duplicate_array:Array<String>){
       console.log("Original Array:");
       for(let Mag_Name of great_Mag_Name){
            console.log(Mag_Name);
       }

       console.log("\nModified Array:");
       for(let Mag_Name of duplicate_array){
            console.log(Mag_Name);
       }
}


let magiciansNames:String[]=["Ahmed","Jawad","Hamza","Saad"];
let copy_array:Array<String>=magiciansNames.slice(0,magicians_names.length);

let great_Magicians_Name=makeGreat(copy_array);

ShowMagicians(magiciansNames,great_Magicians_Name);



//  Q44:
console.log("\n Q44:");
console.log("Output:");
function sandwiches(sand:Array<String>){
    console.log("Making a sandwich with the following items:");
    for(let item of sand){
        console.log(item);
    }
}

sandwiches(["Banana","Peanut Butter","jelly"]);
console.log("\n");
sandwiches(["Tomato","Cheese"]);
console.log("\n");
sandwiches(["Mango","potato","Apple"]);



//  Q45:
console.log("\n Q45:");
console.log("Output:");

type Car = {
    manufacturer: string;
    model: string;
    [key: string]: any; 
};

function createCar(manufacturer: string, model: string,options: { [key: string]: any }): Car {
    return { manufacturer, model, ...options };
}

const carInfo: Car = createCar("Toyota", "Camry", { color: "Blue", year: 2019, condition:"new" });
console.log(carInfo);



