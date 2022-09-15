import React from "react"


export default function Meme () {
    const [meme, setMeme] = React.useState({topText:"",
    bottomText:"",
    randomImg: "http://i.imgflip.com/1bij.jpg"})

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then (res => res.json())
            .then (data => setAllMemes(data.data.memes))
    }, [])

    function handleChange (event){
        const {name, value} = event.target
        setMeme (prevMeme =>({
            ...prevMeme, [name] : value
        }))
    }

    function getMeme(){
        const randomNum = Math.floor(Math.random()* allMemes.length)
        const url = (allMemes[randomNum].url)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImg : url}))
    }
    return(
        <main>
            <div className="form">
                <input type= "text" 
                    className="form-input" 
                    placeholder="Top text"
                    name = "topText"
                    value={meme.topText}
                    onChange= {handleChange}/>

                <input type= "text" 
                    className="form-input" 
                    placeholder="Bottom text"
                    name = "bottomText"
                    value= {meme.bottomText}/>

                <button className="form-btn" onClick= {getMeme}>
                    Generate new meme
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImg} className="meme-img" />
                <h2 className= "meme-text top">{meme.topText}</h2>
                <h2 className= "meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}