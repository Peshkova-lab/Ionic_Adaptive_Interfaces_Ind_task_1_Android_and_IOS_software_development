function getInitialRecipes() {
    return [
        {
            number: 1,
            doctor: 'Doctor_1',
            patient: 'Patient_1',
            birth: '12.12.2000'
        },
        {
            number: '2',
            doctor: 'Doctor_2',
            patient: 'Patient_2',
            birth: '01.09.1998'
        }
    ];
}

function saveRecipes(recipes) {
    localStorage.setItem("recipes_data", JSON.stringify(recipes));
}

function getSavedRecipes() {
    let recipes = localStorage.getItem("recipes_data");
    if (recipes != null) {
        recipes = JSON.parse(recipes);
    }
    return recipes;
}

function getRecipes() {
    let recipes = getSavedRecipes();
    if (recipes == null) {
        recipes = getInitialRecipes();
        saveRecipes(recipes);
    }

    console.log(recipes);
    return recipes;
} 