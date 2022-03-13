$('document').ready(function() {
    let searchParams = new URLSearchParams(window.location.search);
    let number = 0;
    if (searchParams.has('number')) {
        doctor = searchParams.get('number');
        const recipes = getRecipes();
        let recipe = recipes.find((g)=>g.number == number);
        $('#number').val(recipe.number);
        $('#doctor').val(recipe.doctor);
        $('#patient').val(recipe.patient);
        $('#birth').val(recipe.birth);
    }

    $('#save').click(function() {
        const recipes = getRecipes();
        if (number === 0) {
            recipes.push({
                number: $('#number').val(),
                doctor: $('#doctor').val(),
                patient: $('#patient').val(),
                birth: $('#birth').val()
            });
        } else {
            let recipe = recipes.find((g)=>g.number == number);
            recipe.number = $('#number').val();
            recipe.doctor = $('#doctor').val();
            recipe.patient = $('#patient').val();
            recipe.birth = $('#birth').val();
        }
        saveRecipes(recipes);
        $(location).attr('href', 'index.html');
    });
});