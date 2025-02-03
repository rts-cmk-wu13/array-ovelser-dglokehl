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
    function findBagheera(cat) {
        return cat === "Bagheera";
    }
    console.log("Opgave 4a:", catsArray.find(findBagheera));
    // ----- opgave 4b -----
    function findSalem(cat) {
        return cat === "Salem";
    }
    console.log("Opgave 4b:", catsArray.find(findSalem));


    // ----- opgave 5 -----


    // ----- opgave 6 -----


    // ----- opgave 7 -----


    // ----- opgave 8 -----


}) // ends DOMContentLoaded