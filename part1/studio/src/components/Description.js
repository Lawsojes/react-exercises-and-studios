import styles from './Description.module.css';
import React from 'react';



function RecipeAuthor() {
    let authorLink = "https://www.livewellbakeoften.com/classic-key-lime-pie/";
    let authorPhoto = "https://i0.wp.com/www.livewellbakeoften.com/wp-content/uploads/2020/08/Danielle-Live-Well-Bake-Often.jpg?resize=1024%2C682&ssl=1";
    let authorName = "Danielle";
    return (
        <div>
            <img src={authorPhoto} alt = "danielle photo" className={StyleSheet.imageUpdates}/>
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Live Well Bake Often</a>
            </div>
        </div>
    );
    
}



class RecipeDescription extends React.Component {
    render() {
        return (
            <div> 
                <div>
                    <h1>Key Lime Pie</h1>
                    <p>A delicious tasty treat.</p>
                </div>
                <RecipeAuthor />
            </div>
        );
    }
}




export default RecipeDescription; 