import pikachu from './assets/pikachu.jpg';

export default function Tinderdex() {
    return (
        <main>
            <h1>Tinderdex</h1>
            <img style={{ width: '300px'}} src={pikachu} alt="Profile Picture">
            </img>
            <h1>Pikachu</h1>
            <p>Level 9999</p>
            <p>Type: Electric</p>
            <p>Area: Forest</p>
        </main>
    );
}