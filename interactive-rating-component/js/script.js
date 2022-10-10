const ratingForm = document.getElementById("ratingForm")
const given = document.querySelector(".given")
const ratingCard = document.querySelector(".ratingCard")
const resultCard = document.querySelector(".resultCard")

function result(e) {
    ratingCard.classList.add("notVisible")
    resultCard.classList.add("Visible")
    const rateNumber = document.querySelector("input[type='radio']:checked").nextElementSibling.textContent
    given.innerHTML = `You selected ${rateNumber} out of 5`
    console.log(rateNumber);

    
    e.preventDefault()

}

ratingForm.addEventListener("submit", result)