import React from "react"
import Navbar from "./components/NavBar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"


export default function App(){
    const cards = data.map(i => 
        <Card
            key={i.id}
            item={item}
         />)
    
    return(
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}