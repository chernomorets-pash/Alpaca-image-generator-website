import './Parts.css';

function Parts () {
    const imagesNeck = [
        {name: 'default',
        src: './img/neck/default.png'
        },
        {name: 'bend-backward',
        src: './img/neck/bend-backward.png'
        },
        {name: 'bend-forward',
        src: './img/neck/bend-forward.png'
        },
        {name: 'thick',
        src: './img/neck/thick.png'
        },
    ];
    const imagesEyes = [
        {
            name: 'default',
            src: './img/eyes/default.png'
        },
        {
            name: 'angry',
            src: './img/eyes/angry.png'
        },
        {
            name: 'naughty',
            src: './img/eyes/naughty.png'
        },
        {
            name: 'smart',
            src: './img/eyes/smart.png'
        },
        {
            name: 'panda',
            src: './img/eyes/panda.png'
        },
    ]
// Function chosing random source
    function randomPart (arr){
        const randomNumber = Math.floor(Math.random() * arr.length);
        return arr[randomNumber].src;
    };

    // randomNeck(imagesNeck);

    return (
        <div className="parts">
            <img src={randomPart(imagesEyes)} alt="eyes" id='eyes' />
            <img src={randomPart(imagesNeck)} alt="neck" id='neck' />
        </div>
    )
};

export default Parts;