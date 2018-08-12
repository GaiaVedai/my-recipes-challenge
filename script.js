var RecipeApp = function () {

    var recipes = [
        {
            id: 1,
            name: 'Best Chicken Soup!',
            image: 'https://static01.nyt.com/images/2016/11/29/dining/recipelab-chick-noodle-still/recipelab-chick-noodle-still-master675.jpg',
            ingredients: [
                { name: 'whole chicken' },
                { name: 'medium carrots' },
                { name: 'onions' },
            ]
        }
    ];

    var $recipes = $('.recipes');

    //id's for recipes
    var recId = 2;

    //id's for ingredients
    var ingId = 0;

    var _findRecipeIndexById = function(postId) {
        for (let i=0;  i< recipes.length; i++) {
            if (recipes[i].id === postId) {
                console.log(i);
                return i;
            }
        }
        return undefined;
    }
    var createRecipe = function (name, image) {
        var recipe = {
            name: name,
            image: image,
            ingredients: [],
            id: recId
        };

        //keeps recipe ids unique 
        recId++;

        recipes.push(recipe);
    };

    var createIngredients = function (text, postId) {
        let newIngredient = {
            name: text
        } ;
        let i = _findRecipeIndexById(postId);
        recipes[i].ingredients.push(newIngredient);
    };

    var _getIngredientsHTML = function (recipe) {
        var recipesHTML = "";
        // for (let i in recipes) {
        //     if (recipes[i].id === $(this).closest('.recipe').data.id) {
        //         recipes.forEach(function (ingredients) {
        //             $('ul .ingredients').append('<li>' + recipes[i].ingredients + '</li>')
        //         })
        //     }
        // }


        //add code
        return recipesHTML;
    };

    var renderRecipes = function () {
        //empty recipes div
        $recipes.empty();

        for (var i = 0; i < recipes.length; i++) {
            //current recipe in iteration
            var recipe = recipes[i];

            //return HTML for all ingredients
            var ingredients = _getIngredientsHTML(); //add code

            $recipes.append(
                '<div class="recipe col-md-6  offset-md-3 img-fluid shadow" data-id="' + recipe.id + '">' +
                '<h4 class="text-capitalize font-italic text-center">' + recipe.name + '</h4>' +
                '<img class="recipe-img" src="' + recipe.image + '"/>' +
                '<hr>' +
                '<h5 class="font-italic font-bold text-center">ingredients</h5>' +
                '<div class="input-group mb-3">' +
                '<div class="input-group-prepend">' +
                '<span type="button" class="add-ingredients input-group-text" id="basic-addon3">Add Ingredients</span>' +
                '</div>' +
                '<input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">' +

                '</div>' +
                '<ul class="ingredients">' + ingredients + '</ul>' +
                '</div>'
            );
        }
        ;
    }
        return {
            createRecipe: createRecipe,
            renderRecipes: renderRecipes,
            createIngredients: createIngredients,
            }
}
    var app = RecipeApp();


    //--------EVENTS

    //add a recipe
    $('.add-recipe').on('click', function () {
        //collect input text
        var name = $('#recipe-name').val();
        var image = $('#recipe-image').val();

        //add recipe to array and render
        app.createRecipe(name, image);
        app.renderRecipes();
    });

    // let addIngredient = function (text, ){
    //     var closestPost = ('.add-ingredients').closest('recipe')
    //     for (let value of recipes) {
    //         if (recipes[i].id === id) {
    //             recipes.push()
    //         }
    //     }
    //     $('.recipe'.id).find('.add-ingredients')

    // }
    $('.recipes').on('click', '.add-ingredients', function() {
        let text = $(this).closest('.input-group').find('#basic-url').val();
        let postId = $(this).closest('.recipe').data().id;
        console.log(postId, text)
    // let newIngredient = $('.ingredients').closest('form-control')
    app.createIngredients(text, postId);

})

