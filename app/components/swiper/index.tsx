import pikachu from './assets/pikachu.jpg';
import happy from './assets/happy.png';
import sad from './assets/sad.png';

function swipeLeft() {
    console.log("You swiped Left !");
}

function swipeRight() {
    console.log("You swiped Right !");
}

export default function Swiper(pokemon: any) {
    if (!pokemon) return (<div></div>);
    console.log(pokemon);
    return (
        <main>
            <div className="flex flex-col">
            <img style={{ width: '300px'}} src={pikachu} alt="Profile Picture">
            </img>
            <div className="flex flex-row"><h1>Pikachu</h1><h1>Level: 10</h1></div>
            <div className="flex flex-row"><p>Type: Electric</p></div>
            </div>
            <div className="flex flex-row"><img onClick={swipeLeft} style={{width: '80px'}} src={happy}></img><img onClick={swipeRight} style={{width: '80px'}} src={sad}></img></div>
        </main>
    );
}