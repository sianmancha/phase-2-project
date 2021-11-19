import React from "react";
import coffeemug from "../coffeemug.jpeg"

function Home() {
    return(
    <div className="welcomePage">
        
        <h2 id="welcomeMessage">Hi and Welcome!</h2>
        <img id="coffeeImage" src={coffeemug} alt="a mug of coffee and a book on a table with the sunrise reflecting on a lake in the background" />
        <p className="intro">
            This web application is designed to help you keep track of your emotions and daily activities.
        </p>
        <p className="intro">
            Click on Mood Board or To-Do-List at the top of the page to get started.
        </p>
    </div>
    )
}

export default Home;