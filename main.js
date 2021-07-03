const nextBtn = document.querySelector('.next')
const prevBtn = document.querySelector('.prev')
const people = document.querySelectorAll('.person')

nextBtn.addEventListener('click', function(){
    // people[0].classList.add('hide')
    // people[1].classList.remove('hide')
    for(let i=0; i<people.length; i++){
        people[i].classList.toggle('hide')
    }
})
prevBtn.addEventListener('click', function(){
    // people[1].classList.add('hide')
    // people[0].classList.remove('hide')
    for(let i=0; i<people.length; i++){
        people[i].classList.toggle('hide')
    }
})