    const yesBtn = document.querySelector('#yesBtn');

    yesBtn.addEventListener('click',function () {
        alert('Muy bien mi amor ya nos casaremos civilemnte o si no te mato, el anillo cuando nos casemos religiosamente')
    });

    const noBtn = document.querySelector('#noBtn');

    noBtn.addEventListener('mouseover',function () {
        const randomX = parseInt(Math.random()*100);
        const randomY = parseInt(Math.random()*100);
        noBtn.style.setProperty('top',randomY+'%');
        noBtn.style.setProperty('left',randomX+'%');
        noBtnstyle.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
    })