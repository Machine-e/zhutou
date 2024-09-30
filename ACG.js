const resizePage = ()=> {
    const base =window.ontouchstart === undefined?1200:800
    const rate = Math.min(window,innerWidth / base, window.innerHeight / base, 1)
    const body= document.getElementsByTagName('body')[0]
    body.style.width =window.innerwidth /rate + 'px'
    body.style.height =window.innerHeight /rate + 'px'
    body.style.position = 'absolute'
    body.style.left =(window.innerWidth- window.innerWidth / rate)/ 2 + 'px'
    body.style.top=(window.innerHeight -window.innerHeight / rate)/ 2 + 'px'
    body.style.transform= `scale(${rate})`
    body.style.transformOrigin= `center center`
    body.style.transition='0.5s transform'
    }
    
