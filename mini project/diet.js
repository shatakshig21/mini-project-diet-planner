function generateDietPlan() {

    const name = prompt("Enter your name:");
    const age = parseInt(prompt("Enter your age:"));
    const weight = parseFloat(prompt("Enter your weight in kg:"));
    const height = parseFloat(prompt("Enter your height in cm:"));
    const gender = prompt("Enter your gender (M/F):").toUpperCase();

    
    const bmi = calculateBMI(weight, height);

    
    const dietPlan = generateDietPlanBasedOnBMI(bmi);

    
    displayDietPlan(name, age, weight, height, gender, bmi, dietPlan);
}

function calculateBMI(weight, height) {
    
    const heightInMeters = height/100;
    return weight/(heightInMeters * heightInMeters);
}

function generateDietPlanBasedOnBMI(bmi) {
    
    if (bmi < 18.5) {
        return "You are underweight. Include more protein and healthy fats in your diet.";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "You have a normal weight. Maintain a balanced diet for overall health.";
    } else if (bmi >= 25 && bmi < 30) {
        return "You are overweight. Focus on portion control and include more fruits and vegetables.";
    } else {
        return "You are obese. Consult with a nutritionist for a personalized diet plan.";
    }
}

function displayDietPlan(name, age, weight, height, gender, bmi, dietPlan) {
    const resultDiv = document.getElementById("generated-plan");

    resultDiv.innerHTML = `
        <h3>${name}'s Diet Plan</h3>
        <p><strong>Age:</strong> ${age} years</p>
        <p><strong>Weight:</strong> ${weight} kg</p>
        <p><strong>Height:</strong> ${height} cm</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>BMI:</strong> ${bmi.toFixed(2)}</p>
        <p><strong>Diet Plan:</strong> ${dietPlan}</p>
    `;
}

function displayRandomRecipe() {
    const recipeContainer = document.getElementById("recipe-container");
    const randomIndex = Math.floor(Math.random() * recipes.length);
    const randomRecipe = recipes[randomIndex];

    recipeContainer.innerHTML = `
        <h3>${randomRecipe.name}</h3>
        <p><strong>Ingredients:</strong> ${randomRecipe.ingredients.join(", ")}</p>
        <p><strong>Instructions:</strong> ${randomRecipe.instructions}</p>
    `;
}
const recipes = [
    {
        name:"Spiced Lentil and Vegetable Curry",
        ingredients: ["1 cup dry lentils","1 teaspoon cumin seeds","Salt to taste","Fresh cilantro, chopped (for garnish)"],
        instructions: "In a small pan, heat 1 tablespoon of oil for tempering. Add mustard seeds, cumin seeds."
    },
    {
        name: "Grilled Chicken Salad",
        ingredients: ["Chicken breast", "Mixed greens", "Cherry tomatoes", "Cucumber", "Avocado", "Olive oil"],
        instructions: "Grill the chicken, chop vegetables, and toss everything together with olive oil."
    },
    {
        name: "Quinoa Bowl",
        ingredients: ["Quinoa", "Black beans", "Corn", "Bell peppers", "Lime", "Cilantro"],
        instructions: "Cook quinoa, mix with black beans, corn, and chopped vegetables. Squeeze lime and add cilantro for flavor."
    },
    {
        name: "Baked Salmon",
        ingredients: ["Salmon fillet", "Lemon", "Garlic", "Dill", "Olive oil"],
        instructions: "Marinate salmon with lemon, garlic, and dill. Bake in the oven with a drizzle of olive oil."
    }
];
function bloodtest() {
   
    const name = prompt("Enter your name:");
    const age = parseInt(prompt("Enter your age:"));
    const Hemoglobin = prompt("Enter Hemoglobin(g/dl):");
    const WBC = prompt("Enter White Blood Cells(cells/μL):");
    const platelets = prompt("Enter platelets(mcL):");
    const gender = prompt("Enter your gender (M/F):").toUpperCase();

    const disease = generatebloodtest(Hemoglobin);

    
    displaybloodtest(name, age, WBC,Hemoglobin, platelets , gender,disease);
}


function generatebloodtest(Hemoglobin) {

    if (Hemoglobin < 18.5) {
        return "Possible anemia.";
    } else if (Hemoglobin >= 18.5 && Hemoglobin < 25) {
        return " Possible dehydration or other issues.";
    } else if (Hemoglobin >= 25 && Hemoglobin < 30) {
        return "Within normal range.";
    } else {
        return "Fit and Fine";
    }
}

function displaybloodtest(name, age,Hemoglobin, WBC, platelets , gender,disease) {
    const resultDiv = document.getElementById("blood-test");

    resultDiv.innerHTML = `
        <h3>${name}'s Blood Test Result</h3>
        <p><strong>Age:</strong> ${age} years</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Hemoglobin:</strong> ${Hemoglobin}  (g/dl).</p>
        <p><strong>White Blood Cells:</strong> ${WBC} (cells/μL).</p>
        <p><strong>Platelets:</strong> ${platelets} (mcL)</p>
        <p><strong>Type of Disease:</strong> ${disease} </p>
    `;
}