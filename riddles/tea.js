function checkIngredient() {
    var ingredients = ["VODKA", "RUM", "TEQUILA", "ORANGENLIKÖR", "LIMETTENSAFT", "SIMPLESYRUP", "ZUCKERSIRUP", "SIRUP", "ZITRONENSAFT", "COLA", "ORANGENLIKOER",
  "COCACOLA", "PEPSI", "SYRUP", "LIMETTE", "ZITRONE", "ZITRONEN", "LIMETTEN"];

    let areCorrect = true;

    for (let i = 1; i < 8; i++) {
        const currID = "ingredient" + i;
        const ingredient = document.getElementById(currID).value;
        const isCorrect = ingredients.includes(ingredient.toUpperCase().trim())
 
        if (isCorrect) { 
            document.getElementById(currID).style.backgroundColor="green"
        } else {
            document.getElementById(currID).style.backgroundColor="red"
            areCorrect = false;
        }
    }
    
    if (areCorrect) {
        window.location.href = "teaSuccess.html";
    }
}