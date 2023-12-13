const iframe = document.createElement('iframe')
const text = document.createElement('div')

const popup1 = document.querySelector('#popup1 div')
const popup2 = document.querySelector('#popup2 div')
const popup3 = document.querySelector('#popup3 div')
const popup4 = document.querySelector('#popup4 div')

const linkContainer = document.querySelector('#s3Content')

linkContainer.addEventListener('click', (event) => {
    let target = event.target

    switch(target.id) {
        case 'link1':
            popup1.appendChild(iframe)
            iframe.src = "https://www.youtube.com/embed/DqB95s47f1w?si=zMqAyDszoToOjVdy"
            iframe.allowFullscreen = true
            popup1.appendChild(text)
            text.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ratione quisquam dignissimos. Tempora itaque in deleniti, quos iusto officia ipsa maiores modi corrupti, dolorum tenetur obcaecati sunt eaque omnis veniam!"
            text.classList.add('popupText')
            console.log('clicked')
            break;
        case 'link2':
            popup2.appendChild(iframe)
            iframe.src = "https://www.youtube.com/embed/OaFk8XkgZik?si=AIO-JdGYaGeUucnP"
            iframe.allowFullscreen = true
            popup2.appendChild(text)
            text.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ratione quisquam dignissimos. Tempora itaque in deleniti, quos iusto officia ipsa maiores modi corrupti, dolorum tenetur obcaecati sunt eaque omnis veniam!"
            text.classList.add('popupText')
            break;
        case 'link3':
            popup3.appendChild(iframe)
            iframe.src = "https://www.youtube.com/embed/DF20qyZVpss?si=oxSD6Ldd2dtyeAcn"
            iframe.allowFullscreen = true
            popup3.appendChild(text)
            text.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ratione quisquam dignissimos. Tempora itaque in deleniti, quos iusto officia ipsa maiores modi corrupti, dolorum tenetur obcaecati sunt eaque omnis veniam!"
            text.classList.add('popupText')
            break;
        case 'link4':
            popup4.appendChild(iframe)
            iframe.src = "https://www.youtube.com/embed/163sJtJecZI?si=i3eB5gvmqtkXNZ0W"
            iframe.allowFullscreen = true
            popup4.appendChild(text)
            text.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ratione quisquam dignissimos. Tempora itaque in deleniti, quos iusto officia ipsa maiores modi corrupti, dolorum tenetur obcaecati sunt eaque omnis veniam!"
            text.classList.add('popupText')
            break;

    }
})

// document.querySelector('#link1').addEventListener('click', () => {
//     popup1.appendChild(iframe)
//     iframe.src = "https://www.youtube.com/embed/DqB95s47f1w?si=zMqAyDszoToOjVdy"
//     iframe.allowFullscreen = true
//     popup1.appendChild(text)
//     text.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ratione quisquam dignissimos. Tempora itaque in deleniti, quos iusto officia ipsa maiores modi corrupti, dolorum tenetur obcaecati sunt eaque omnis veniam!"
//     text.classList.add('popupText')

//     console.log('clicked')
// });
// document.querySelector('#link2').addEventListener('click', () => {
//     popup2.appendChild(iframe)
//     iframe.src = "https://www.youtube.com/embed/OaFk8XkgZik?si=AIO-JdGYaGeUucnP"
//     iframe.allowFullscreen = true
//     popup2.appendChild(text)
//     text.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ratione quisquam dignissimos. Tempora itaque in deleniti, quos iusto officia ipsa maiores modi corrupti, dolorum tenetur obcaecati sunt eaque omnis veniam!"
//     text.classList.add('popupText')
// });
// document.querySelector('#link3').addEventListener('click', () => {
//     popup3.appendChild(iframe)
//     iframe.src = "https://www.youtube.com/embed/DF20qyZVpss?si=oxSD6Ldd2dtyeAcn"
//     iframe.allowFullscreen = true
//     popup3.appendChild(text)
//     text.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ratione quisquam dignissimos. Tempora itaque in deleniti, quos iusto officia ipsa maiores modi corrupti, dolorum tenetur obcaecati sunt eaque omnis veniam!"
//     text.classList.add('popupText')
// });
// document.querySelector('#link4').addEventListener('click', () => {
//     popup4.appendChild(iframe)
//     iframe.src = "https://www.youtube.com/embed/163sJtJecZI?si=i3eB5gvmqtkXNZ0W"
//     iframe.allowFullscreen = true
//     popup4.appendChild(text)
//     text.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ratione quisquam dignissimos. Tempora itaque in deleniti, quos iusto officia ipsa maiores modi corrupti, dolorum tenetur obcaecati sunt eaque omnis veniam!"
//     text.classList.add('popupText')
// });

document.querySelector('#popup1').addEventListener('click', () => {
    popup1.removeChild(iframe)
});
document.querySelector('#popup2').addEventListener('click', () => {
    popup2.removeChild(iframe)
});
document.querySelector('#popup3').addEventListener('click', () => {
    popup3.removeChild(iframe)
});
document.querySelector('#popup4').addEventListener('click', () => {
    popup4.removeChild(iframe)
});
