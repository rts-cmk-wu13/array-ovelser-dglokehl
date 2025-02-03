document.addEventListener("DOMContentLoaded", function() {
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

    // --- Løs opgaverne herunder --- 

    // ----- opgave 1 -----
    function filterNums(value) {
        return value >= 20;
    }
    let newNumbers = numbersArray.filter(filterNums);
    console.log("Opgave 1:", newNumbers);
    
    
    // ----- opgave 2 -----
    catsArray.push("Sniffles");
    console.log("Opgave 2:", catsArray);


    // ----- opgave 3a -----
    console.log("Opgave 3a:", dogsArray.includes("Trixie")); 

    // ----- opgave 3b -----
    console.log("Opgave 3b:", dogsArray.includes("Baxter"));


    // ----- opgave 4a -----
    function findCat(catName) {
        console.log("Opgave 4:", catsArray.find((cat) => cat === catName));
    }
    findCat("Bagheera");
    
    // ----- opgave 4b -----
    findCat("Salem");
    
    
    // ----- opgave 5 -----
    let numbersArray3 = numbersArray.map((number) => number * 3);
    console.log("Opgave 5:", numbersArray3);
    
    
    // ----- opgave 6 -----
    let dogsArrayShort = dogsArray.join('');
    console.log("Opgave 6:", dogsArrayShort);
    
    
    // ----- opgave 7a -----
    console.log("Opgave 7a:", fruitsArray.indexOf("Mango"));
    
    // ----- opgave 7b -----
    console.log("Opgave 7b:", fruitsArray.indexOf("Blåbær"), "(Blåbær er ikke i arrayet så derfor siger den -1)");
    
    
    // ----- opgave 8 -----
    let dog = dogsArray.indexOf("Polly");
    if (dog !== -1) {
        dogsArray.splice(dog, 1);
    }
    console.log("Opgave 8:", dogsArray);
    
    
    // ----- ekstra-opgave -----
    let numbersArraySum = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log("Ekstra-opgave:", numbersArraySum);


}) // ends DOMContentLoaded