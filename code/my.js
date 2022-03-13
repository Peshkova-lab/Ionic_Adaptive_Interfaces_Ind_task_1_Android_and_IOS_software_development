$('document').ready(function() {
    var rowText;
    var content = $('#recipes');
    const recipes = getRecipes();
    for(let row of recipes) {
        rowText =
            `<tr>
            <td>${row.number}</td>
            <td>${row.doctor}</td>
            <td>${row.patient}</td>
            <td class="text-right">
            <a class="button primary"
            href="recipe.html?number=${row.number}">
            <i class="fi fi-pencil"></i>
            </a>
            
            <button type="button" class="button alert"
            rowid="${row.number}">
            <i class="fi fi-trash"></i>
            </button>
            </td>
            </tr>`;
            content.append(rowText);
    }

    $('.rem-row').click(function() {
        let number = $(this).attr('rowid');
        saveRecipes(recipes.filter((g)=>g.number != number));
        location.reload();
    })
});