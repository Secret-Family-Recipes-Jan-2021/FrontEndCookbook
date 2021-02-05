import React from "react";
import ninjacup from "../images/ninjacup.jpg";
//import App from "../App.css";

function RecipeHome(){

    return(
        <div 
        className= "photoContainer"
        style = {{
            backgroundImage: `url(${ninjacup})`,
            backgroundSize: "99%",
            backgroundPosition: "center",
            height: "50rem",
            width: "100%",
            backgroundRepeat: "no-repeat"
            
        }}
        >
      </div>

    );
}

export default RecipeHome;

{/* <img src = {ninjacup} alt="ninjas on cupcakes" /> */}