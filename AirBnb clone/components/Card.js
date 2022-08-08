import React from "react"


export default function Card(props) {
    let badgeText
    if (props.item.openSpots ===0){
        badgeText = "Sold Out"
    } else if (props.item.location ==="online"){
        badgeText = "Online"
    }
    
    return (
        <div className="card">
            {badgeText && <div className= "card-badge">{badgeText}</div>}
            <img src={`../images/${props.item.img}`} className="card-img" />
            <div className="card-stats">
                <img src="../images/star.png" className="card-star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">{props.item.stats.reviews} • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card-tittle">{props.item.tittle}</p>
            <p className="card-price"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}