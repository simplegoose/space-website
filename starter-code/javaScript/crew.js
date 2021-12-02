const imageWrapper = document.querySelector('.image-wrapper')
const carousels = document.querySelector('.carousel-container')
const descriptionContainer = document.querySelector('.description-container')
const header6 = descriptionContainer.querySelector('h6')
const header3 = descriptionContainer.querySelector('h3')
const paragraph = descriptionContainer.querySelector('.description--paragraph')
const carouselDivs = carousels.querySelectorAll('div')

const heroImage = document.createElement('img')
heroImage.classList = 'crew--image'
imageWrapper.appendChild(heroImage)

carouselDivs[0].classList += 'carousel-div--active'
carouselDivs[1].classList = ''
carouselDivs[2].classList = ''
carouselDivs[3].classList = ''

fetch('data.json')
    .then( res => res.json())
    .then( data => {
        heroImage.src = data.crew[0].images.png
        heroImage.srcset = `${data.crew[0].images.png} 300w , ${data.crew[0].images.png} 600w , ${data.crew[0].images.webp} 1200w, ${data.crew[0].images.webp} 2000w`
        header6.textContent = data.crew[0].name
        header3.textContent = data.crew[0].role
        paragraph.textContent  = data.crew[0].bio
    })


carouselDivs.forEach( (div, index) => {
    div.addEventListener('click', () => {
        if(index === 0){
            carouselDivs[0].classList = 'carousel-div--active'
            carouselDivs[1].classList = ''
            carouselDivs[2].classList = ''
            carouselDivs[3].classList = ''
            
            fetch('data.json')
                .then( res => res.json())
                .then( data => {
                    heroImage.src = data.crew[0].images.png
                    heroImage.srcset = `${data.crew[0].images.png} 300w , ${data.crew[0].images.png} 600w , ${data.crew[0].images.webp} 1200w, ${data.crew[0].images.webp} 2000w`
                    header6.textContent = data.crew[0].name
                    header3.textContent = data.crew[0].role
                    paragraph.textContent  = data.crew[0].bio
                })
            } else if (index === 1) {
                carouselDivs[0].classList = ''
                carouselDivs[1].classList = 'carousel-div--active'
                carouselDivs[2].classList = ''
                carouselDivs[3].classList = ''
                
                fetch('data.json')
                    .then( res => res.json())
                    .then( data => {
                        heroImage.src = data.crew[1].images.png
                        heroImage.srcset = `${data.crew[1].images.png} 300w , ${data.crew[1].images.png} 600w , ${data.crew[1].images.webp} 1200w, ${data.crew[1].images.webp} 2000w`
                        header6.textContent = data.crew[1].name
                        header3.textContent = data.crew[1].role
                        paragraph.textContent  = data.crew[1].bio
                    })
            } else if (index === 2) {
                carouselDivs[0].classList = ''
                carouselDivs[1].classList = ''
                carouselDivs[2].classList = 'carousel-div--active'
                carouselDivs[3].classList = ''
                
                fetch('data.json')
                    .then( res => res.json())
                    .then( data => {
                        heroImage.src = data.crew[2].images.png
                        heroImage.srcset = `${data.crew[2].images.png} 300w , ${data.crew[2].images.png} 600w , ${data.crew[2].images.webp} 1200w, ${data.crew[2].images.webp} 2000w`
                        header6.textContent = data.crew[2].name
                        header3.textContent = data.crew[2].role
                        paragraph.textContent  = data.crew[2].bio
                    })
            } else if(index === 3) {
                carouselDivs[0].classList = ''
                carouselDivs[1].classList = ''
                carouselDivs[2].classList = ''
                carouselDivs[3].classList = 'carousel-div--active'
                
                fetch('data.json')
                    .then( res => res.json())
                    .then( data => {
                        heroImage.src = data.crew[3].images.png
                        heroImage.srcset = `${data.crew[3].images.png} 300w , ${data.crew[3].images.png} 600w , ${data.crew[3].images.webp} 1200w, ${data.crew[3].images.webp} 2000w`
                        header6.textContent = data.crew[3].name
                        header3.textContent = data.crew[3].role
                        paragraph.textContent  = data.crew[3].bio
                    })
            }
        })
    })
