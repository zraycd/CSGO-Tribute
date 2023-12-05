const popup2 = document.querySelector('#popup2')
const popup3 = document.querySelector('#popup3')
const popup4 = document.querySelector('#popup4')

const iframe = document.createElement('iframe')

const link1 = document.querySelector('#link1')
const link2 = document.querySelector('#link2')
const link3 = document.querySelector('#link3')
const link4 = document.querySelector('#link4')

link1.addEventListener('click', () => {
    const popup1 = document.querySelector('#popup1 div')
    popup1.appendChild(iframe)
    iframe.src = "https://www.youtube.com/embed/DqB95s47f1w?si=zMqAyDszoToOjVdy"
});
link2.addEventListener('click', () => {
    const popup2 = document.querySelector('#popup2 div')
    popup2.appendChild(iframe)
    iframe.src = "https://www.youtube.com/embed/OaFk8XkgZik?si=AIO-JdGYaGeUucnP"
});
link3.addEventListener('click', () => {
    const popup3 = document.querySelector('#popup3 div')
    popup3.appendChild(iframe)
    iframe.src = "https://www.youtube.com/embed/DF20qyZVpss?si=oxSD6Ldd2dtyeAcn"
});
link4.addEventListener('click', () => {
    const popup4 = document.querySelector('#popup4 div')
    popup4.appendChild(iframe)
    iframe.src = "https://www.youtube.com/embed/163sJtJecZI?si=i3eB5gvmqtkXNZ0W"
});



