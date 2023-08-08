import styles from './Ingredients.module.css';




function RecipeIngredients() {
 let ingredients = ['Graham Cracker', 'Sugar', 'Butter', "Key Lime Juice", 'Sweetened Condensed Milk', 'Egg Yolks', 'Whipped Cream'];

    return (
        <div>
            <h3>Recipe Ingredients</h3>
            <ul className= {StyleSheet.ingredientList}>
                <li>{ingredients[0]}</li>
                <li>{ingredients[1]}</li>
                <li>{ingredients[2]}</li>
                <li>{ingredients[3]}</li>
                <li>{ingredients[4]}</li>
                <li>{ingredients[5]}</li>
                <li>{ingredients[6]}</li>
                
            </ul>
        </div>
    );
}


export default RecipeIngredients;