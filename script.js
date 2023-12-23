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
            text.textContent = `The Olofboost, an infamous CS:GO moment, unfolded during the 2014 DreamHack Winter tournament. Fnatic's Olof "olofmeister" Kajbjer Gustafsson exploited a pixel boost glitch on the Overpass map, enabling him to reach an inaccessible spot and secure a pivotal round for his team. Despite controversy surrounding the exploit's legality, it became an iconic and contentious moment in CS:GO history.`
            text.classList.add('popupText')
            console.log('clicked')
            break;
        case 'link2':
            popup2.appendChild(iframe)
            iframe.src = "https://www.youtube.com/embed/OaFk8XkgZik?si=AIO-JdGYaGeUucnP"
            iframe.allowFullscreen = true
            popup2.appendChild(text)
            text.textContent = `Tense1983's "GREEN GREEN what is your problem" is a humorous and iconic CS:GO moment originating from a match where a player, nicknamed Tense1983, vented his frustration at his teammate over the in-game voice chat. The exasperated line, delivered in a thick accent, gained notoriety within the CS:GO community and has since become a lighthearted symbol of the occasional frustrations and comedic moments that unfold in online multiplayer gaming.`
            text.classList.add('popupText')
            break;
        case 'link3':
            popup3.appendChild(iframe)
            iframe.src = "https://www.youtube.com/embed/DF20qyZVpss?si=oxSD6Ldd2dtyeAcn"
            iframe.allowFullscreen = true
            popup3.appendChild(text)
            text.textContent = `Xyp9x's 1v5 ninja defuse is etched in CS:GO lore as one of the most astonishing plays in competitive gaming. At the ELEAGUE Major in 2017, Astralis' clutch specialist Andreas "Xyp9x" Højsleth managed an improbable ninja defuse against FaZe Clan. Alone against all odds, Xyp9x patiently defused the bomb amidst the chaos, leaving the CS:GO community in awe of his composure and tactical brilliance.`
            text.classList.add('popupText')
            break;
        case 'link4':
            popup4.appendChild(iframe)
            iframe.src = "https://www.youtube.com/embed/163sJtJecZI?si=i3eB5gvmqtkXNZ0W"
            iframe.allowFullscreen = true
            popup4.appendChild(text)
            text.textContent = `XQC, a popular Twitch streamer and content creator, experienced a memorable and humorous moment in CS:GO often referred to as his "worst round in CSGO history". XQC's attempt to assist his teammate with a molotov backfired when he accidentally tossed the incendiary grenade directly onto his teammate. To compound the chaos, he followed up with a mistimed flashbang that disoriented and ultimately led to the inadvertent demise of his bewildered teammate. The comical sequence of events became a viral sensation, showcasing the unpredictability and comedic side of online gaming, with XQC's teammate left in utter confusion and amusement at the unexpected turn of events.`
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