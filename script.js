const div = document.createElement('div')
const iframe = document.createElement('iframe')
div.className = "popupText"
iframe.allowFullscreen = true

const container = document.querySelector('#section3')

container.addEventListener('click', (event) => {
    let target = event.target;
    switch(target.id) {

        case 'link1':
            document.querySelector('#popup1').appendChild(iframe)
            iframe.src = "https://www.youtube.com/embed/DqB95s47f1w?si=zMqAyDszoToOjVdy"
            document.querySelector('#popup1').appendChild(div)
            div.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ratione quisquam dignissimos. Tempora itaque in deleniti, quos iusto officia ipsa maiores modi corrupti, dolorum tenetur obcaecati sunt eaque omnis veniam!"
            break;

        case 'link2':
            document.querySelector('#popup2').appendChild(iframe)
            iframe.src = "https://www.youtube.com/embed/OaFk8XkgZik?si=AIO-JdGYaGeUucnP"
            document.querySelector('#popup2').appendChild(div)
            div.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ratione quisquam dignissimos. Tempora itaque in deleniti, quos iusto officia ipsa maiores modi corrupti, dolorum tenetur obcaecati sunt eaque omnis veniam!"
            break;

        case 'link3':
            document.querySelector('#popup3').appendChild(iframe)
            iframe.src = "https://www.youtube.com/embed/DF20qyZVpss?si=oxSD6Ldd2dtyeAcn"
            document.querySelector('#popup3').appendChild(div)
            div.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ratione quisquam dignissimos. Tempora itaque in deleniti, quos iusto officia ipsa maiores modi corrupti, dolorum tenetur obcaecati sunt eaque omnis veniam!"
            break;

        case 'link4':
            document.querySelector('#popup4').appendChild(iframe)
            iframe.src = "https://www.youtube.com/embed/163sJtJecZI?si=i3eB5gvmqtkXNZ0W"
            document.querySelector('#popup4').appendChild(div)
            div.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ratione quisquam dignissimos. Tempora itaque in deleniti, quos iusto officia ipsa maiores modi corrupti, dolorum tenetur obcaecati sunt eaque omnis veniam!"
            break;
    }
})

document.addEventListener('click', (event) => {
    let target = event.target 
    
    switch(target.id) {
        case '#popup1':
            document.querySelector('#popup1').removeChild(iframe)
            document.querySelector('#popup1').removeChild(div)
        case '#popup2':
            document.querySelector('#popup2').removeChild(iframe)
            document.querySelector('#popup2').removeChild(div)
        case '#popup3':
            document.querySelector('#popup3').removeChild(iframe)
            document.querySelector('#popup3').removeChild(div)
        case '#popup4':
            document.querySelector('#popup4').removeChild(iframe)
            document.querySelector('#popup4').removeChild(div)
    }
})

