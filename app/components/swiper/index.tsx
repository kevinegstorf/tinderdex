import pikachu from './assets/pikachu.jpg';

export default function Swiper(pokemon: any) {
    return (
        <main>
            <img style={{ width: '300px'}} src={pikachu} alt="Profile Picture">
            </img>
            <h1>Pikachu</h1>
            <p>Level 9999</p>
            <p>Type: Electric</p>
            <p>Area: Forest</p>
        </main>
    );
}