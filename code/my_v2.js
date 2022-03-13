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
            <td class="right-align">
            <a class="btn-floating waves-effect waves-light blue"
            href="recipe_v2.html?number=${row.number}"
            style="margin-right:10px;">
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
        saveRecipes(recipes.filter((g)=>g.number!= number));
        location.reload();
    })
});


/*<a rowid="${row.doctor}"
            class="rem-row btn-floating waves-effect waves-light red>
            <i class="material-icons">delete</i>
            </a>
            */