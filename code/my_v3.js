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
            <td class="has-text-right">
            <a class="button is-link p-2"
            href="recipe_v3.html?number=${row.number}">
            <i class="material-icons">edit</i>
            </a>

            <a rowid="${row.number}"
            class="rem-row btn-floating waves-effect waves-light red>
            <i class="material-icons">delete</i>
            </a>
            </td>
            </tr>
            `;
            content.append(rowText);
    }

    $('.rem-row').click(function() {
        let number = $(this).attr('rowid');
        saveRecipes(recipes.filter((g)=>g.number != number));
        location.reload();
    })
});


/*<a rowid="${row.doctor}"
            class="rem-row btn-floating waves-effect waves-light red>
            <i class="material-icons">delete</i>
            </a>

        <button type="button
            class="button is-danger rem-row p-2"
            rowid="${row.doctor}>
            <i class="material-icons">delete</i>
            </button>
            */