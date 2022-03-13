let editType = '';
let number = '';

document.addEventListener("DOMContentLoaded", function(event) {
    var rowText;
    var list = document.getElementById('list');
    recipes = getRecipes();
    for (var row of recipes) {
        var rowText = document.createElement('ion-item');
        rowText.innerHTML = `<ion-label>${row.number}</ion-label>
        <ion-label>${row.doctor}</ion-label>
        <ion-label>${row.patient}</ion-label>
        <ion-button class="edit" color="primary" size="medium"
                            rowid="${row.number}">
            <ion-icon name="create"></ion-icon>
        </ion-button>
        <ion-button class="delete" color="danger" size="medium"
                    rowid="${row.number}">
            <ion-icon name="trash"></ion-icon>
        </ion-button>`;
        list.appendChild(rowText);
    }

    document.querySelector('#main').style.display ="";
    document.querySelector('#edit').style.display ="none";

    document.querySelectorAll('.edit')
        .forEach (input => input.addEventListener('click',
        ({target})=> {
            editType = "edit";
            number = target.getAttribute('rowid');
            let recipe = recipes.find((g)=>g.number == number);

            document.getElementById('number').value = recipe.number;
            document.getElementById('doctor').value = recipe.doctor;
            document.getElementById('patient').value = recipe.patient;
            document.getElementById('birth').value = recipe.birth;
            
            document.querySelector('#main').style.display = "none";
            document.querySelector('#edit').style.display = "";
            
        }
        ));

        document.querySelectorAll('.delete')
            .forEach(input => input.addEventListener('click',
            ({target})=> {
                number = target.getAttribute('rowid');
                saveRecipes(recipes.filter((g)=>g.number != number));
                location.reload();
            }
            ));

        document.querySelector('#save').addEventListener('click',
        () => {
            if (editType == "add") {
                recipes.push({
                    number: document.getElementById('number').value,
                    doctor: document.getElementById('doctor').value,
                    patient: document.getElementById('patient').value,
                    birth: document.getElementById('birth').value
                });
            } else {
                let recipe = recipes.find((g)=>g.number == number);
                recipe.number = document.getElementById('number').value;
                recipe.doctor = document.getElementById('doctor').value;
                recipe.patient = document.getElementById('patient').value;
                recipe.birth = document.getElementById('birth').value
            }
            saveRecipes(recipes);
            location.reload();
        }
        );

        document.querySelector('#add').addEventListener('click',
        () => {

            editType="add"
            
            document.querySelector('#main').style.display = "none";
            document.querySelector('#edit').style.display = "";
            
            document.getElementById('number').value = recipe.number;
            document.getElementById('doctor').value = recipe.doctor;
            document.getElementById('patient').value = recipe.patient;
            document.getElementById('birth').value = recipe.birth;
            
        })




})