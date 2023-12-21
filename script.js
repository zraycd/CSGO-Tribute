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
const animeBackground = document.querySelector('.animeBackground')
let timesClicked = 0
document.querySelector('#mapsContainer').addEventListener('click', (event) => {
    timesClicked += 1
    if (timesClicked === 1) {
        document.querySelectorAll('.map').forEach(map => {
            if (map.id !== event.target.id) {
                map.style.display = 'none'
            } else {
                document.querySelectorAll('.hidden').forEach(mapInfo => {
                    if (map.id === mapInfo.id) {
                        mapInfo.style.display = 'flex'
                    }
                })
            }
        })
    } else {
        document.querySelectorAll('.map').forEach(map => {
            map.style.display = 'flex'
        })
        document.querySelectorAll('.hidden').forEach(mapInfo => {
            mapInfo.style.display = 'none'
        })
        timesClicked += -2
    } 
    switch (event.target.id) {
        case 'mirage':
            document.querySelectorAll('.background').forEach(element => {
                element.style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)) no-repeat fixed, url('images/mirage.jpg') no-repeat center center fixed`;
            });
            animeBackground.style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)) no-repeat fixed, url('images/mirageAnime.jpg') no-repeat center center fixed`;
            animeBackground.style.backgroundSize = `cover`
            break;
        case 'dust2':
            document.querySelectorAll('.background').forEach(element => {
                element.style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)) no-repeat fixed, url('images/dust2.jpg') no-repeat center center fixed`;
            });
            animeBackground.style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)) no-repeat fixed, url('images/dust2Anime.jpg') no-repeat center center fixed`;
            animeBackground.style.backgroundSize = `cover`;
            break;
        case 'inferno':
            document.querySelectorAll('.background').forEach(element => {
                element.style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)) no-repeat fixed, url('images/inferno.png') no-repeat center center fixed`;
            });
            animeBackground.style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)) no-repeat fixed, url('images/infernoAnime.jpg') no-repeat center center fixed`;
            animeBackground.style.backgroundSize = `cover`
            break;
        case 'vertigo':
            document.querySelectorAll('.background').forEach(element => {
                element.style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)) no-repeat fixed, url('images/vertigo.webp') no-repeat center center fixed`;
            });
            animeBackground.style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)) no-repeat fixed, url('images/vertigoAnime.jpg') no-repeat center center fixed`;
            animeBackground.style.backgroundSize = `cover`
            break;
        case 'overpass':
            document.querySelectorAll('.background').forEach(element => {
                element.style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)) no-repeat fixed, url('images/overpass.jpg') no-repeat center center fixed`;
            });
            animeBackground.style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)) no-repeat fixed, url('images/overpassAnime.jpg') no-repeat center center fixed`;
            animeBackground.style.backgroundSize = `cover`
            break;
        case 'nuke':
            document.querySelectorAll('.background').forEach(element => {
                element.style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)) no-repeat fixed, url('images/nuke.jpg') no-repeat center center fixed`;
            });
            animeBackground.style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)) no-repeat fixed, url('images/nukeAnime.jpg') no-repeat center center fixed`;
            animeBackground.style.backgroundSize = `cover`
            break;
        case 'ancient':
            document.querySelectorAll('.background').forEach(element => {
                element.style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)) no-repeat fixed, url('images/ancient.webp') no-repeat center center fixed`;
            });
            animeBackground.style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)) no-repeat fixed, url('images/ancientAnime.jpg') no-repeat center center fixed`;
            animeBackground.style.backgroundSize = `cover`
            break;
        case 'anubis':
            document.querySelectorAll('.background').forEach(element => {
                element.style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)) no-repeat fixed, url('images/anubis.jpg') no-repeat center center fixed`;
                element.style.backgroundSize = `cover`
            });
            animeBackground.style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)) no-repeat fixed, url('images/anubisAnime.jpg') no-repeat center center fixed`;
            animeBackground.style.backgroundSize = `cover`
            break;
        case 'train':
            document.querySelectorAll('.background').forEach(element => {
                element.style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)) no-repeat fixed, url('images/train.webp') no-repeat center center fixed`;
            });
            animeBackground.style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)) no-repeat fixed, url('images/trainAnime.jpg') no-repeat center center fixed`;
            animeBackground.style.backgroundSize = `cover`
            break;
        case 'cache':
            document.querySelectorAll('.background').forEach(element => {
                element.style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)) no-repeat fixed, url('images/cache.jpg') no-repeat center center fixed`;
            });
            animeBackground.style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)) no-repeat fixed, url('images/cacheAnime.jpg') no-repeat center center fixed`;
            animeBackground.style.backgroundSize = `cover`
            break;
    }
});