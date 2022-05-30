for(let i = 1; i < 6; i++){
    document.querySelector(`.rating${i}`).addEventListener('click', addActive)
}

document.querySelector('button').addEventListener('click', submit)

function submit(){
    document.querySelector('.rating').classList.add('hide')
    document.querySelector('.thankYou').classList.remove('hide')
}

function addActive(){

    let ratings = document.querySelectorAll('li')
    ratings.forEach(el => {
        el.classList.remove('active')
    })

    this.classList.add('active')

    let ratingChosen = this.classList[0]
    let number = ratingChosen[ratingChosen.length - 1]

    document.querySelector('#rating').innerHTML = number
}