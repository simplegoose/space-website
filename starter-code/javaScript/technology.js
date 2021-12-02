const imageWrapper = document.querySelector('.image-wrapper')
const carousels = document.querySelector('.carousel-container')
const descriptionContainer = document.querySelector('.description-container')
const header6 = descriptionContainer.querySelector('h6')
const header3 = descriptionContainer.querySelector('h3')
const paragraph = descriptionContainer.querySelector('.description--paragraph')
const carouselDivs = carousels.querySelectorAll('div')

const techImage = document.createElement('img')
techImage.classList = 'technology--image'
imageWrapper.appendChild(techImage)

carouselDivs[0].classList += 'carousel-div--active'
carouselDivs[1].classList = ''
carouselDivs[2].classList = ''

fetch('data.json')
    .then( res => res.json())
    .then( data => {
        techImage.src = data.technology[0].images.portrait
        techImage.srcset = `${data.technology[0].images.portrait} 300w , ${data.technology[0].images.landscape} 600w , ${data.technology[0].images.portrait} 1200w, ${data.technology[0].images.portrait} 2000w`
        header6.textContent = 'The terminology ...'
        header3.textContent = data.technology[0].name
        paragraph.textContent  = data.technology[0].description
    })


carouselDivs.forEach( (div, index) => {
   
    div.addEventListener('click', () => {
        console.log(index)
        if(index === 0){
            carouselDivs[0].classList = 'carousel-div--active'
            carouselDivs[1].classList = ''
            carouselDivs[2].classList = ''
            
            fetch('data.json')
                .then( res => res.json())
                .then( data => {
                    techImage.src = data.technology[0].images.landscape
                    techImage.srcset = `${data.technology[0].images.portrait} 300w , ${data.technology[0].images.portrait} 600w , ${data.technology[0].images.portrait} 1200w, ${data.technology[0].images.portrait} 2000w`
                    header6.textContent = 'The terminology ...'
                    header3.textContent = data.technology[0].name
                    paragraph.textContent  = data.technology[0].description
                })
            } else if (index === 1) {
                carouselDivs[0].classList = ''
                carouselDivs[1].classList = 'carousel-div--active'
                carouselDivs[2].classList = ''
                
                fetch('data.json')
                    .then( res => res.json())
                    .then( data => {
                        techImage.src = data.technology[1].images.portrait
                        techImage.srcset = `${data.technology[1].images.portrait} 300w , ${data.technology[1].images.landscape} 600w , ${data.technology[1].images.portrait} 1200w, ${data.technology[1].images.portrait} 2000w`
                        header6.textContent = 'The terminology ...'
                        header3.textContent = data.technology[1].name
                        paragraph.textContent  = data.technology[1].description
                    })
            } else if (index === 2) {
                carouselDivs[0].classList = ''
                carouselDivs[1].classList = ''
                carouselDivs[2].classList = 'carousel-div--active'
                
                fetch('data.json')
                    .then( res => res.json())
                    .then( data => {
                        techImage.src = data.technology[2].images.portrait
                        techImage.srcset = `${data.technology[2].images.portrait} 300w , ${data.technology[2].images.landscape} 600w , ${data.technology[2].images.portrait} 1200w, ${data.technology[2].images.portrait} 2000w`
                        header6.textContent = 'The terminology ...'
                        header3.textContent = data.technology[2].name
                        paragraph.textContent  = data.technology[2].description
                    })
            }
        })
    })
