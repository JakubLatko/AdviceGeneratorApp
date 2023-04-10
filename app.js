const diceButton = document.querySelector(".diceButton")
let adviceNumber = document.querySelector(".adviceNumber")
let adviceText = document.querySelector(".adviceText")

diceButton.addEventListener("click", ()=>{
    let url = "https://api.adviceslip.com/advice"
    fetch(url)
        .then(res => res.json())
            .then(data=>{
                adviceText.innerHTML = `"` + data.slip.advice + `"`     
                adviceNumber.innerHTML = "Advice #" + data.slip.id 
            }
        )
    }
)