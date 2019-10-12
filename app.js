const moonPath = "M30 38.5C30 60.8675 40.5 79.4515 40.5 81.1314C18.1325 81.1314 0 62.999 0 40.6314C0 18.2639 18.1325 0.131426 40.5 0.131426C40.5 0.131426 30 16.1325 30 38.5Z";

const sunPath = "M81 40.5C81 62.8675 62.8675 81 40.5 81C18.1325 81 0 62.8675 0 40.5C0 18.1325 18.1325 0 40.5 0C62.8675 0 81 18.1325 81 40.5Z";

const darkMode = document.querySelector('#darkMode');

let toggle = false;

//use arrow function with event listener
darkMode.addEventListener('click', () => {
    //We need to use anime.js
    const timeline = anime.timeline({
        duration : 750,
        easing : 'easeOutExpo',
    });
    //add different animations to timeline
    timeline.add({
        targets: ".sun",
        d: [
            {value: toggle ? sunPath : moonPath}
        ]
    })
        .add({
                targets: '#darkMode',
                rotate: toggle ? 0 : 320
            }, '-= 350'
        )
        .add({
            targets: 'section',
            backgroundColor: toggle ? 'rgb(199, 199, 199)' : 'rgb(22, 22, 22)',
            color: toggle ? "rgb(22, 22, 22)" : "rgb(255, 255, 255)",
        }, '-= 700'),

    toggle = !toggle;
});