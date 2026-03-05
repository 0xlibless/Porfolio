import { useState } from 'react';
import '../assets/Home.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={`navbar glass${isOpen ? ' open' : ''}`}>
            <button className="hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Menú">
                {isOpen ? '✕' : '☰'}
            </button>
            <ul className={isOpen ? 'open' : ''}>
                <li><a href="#inicio"    onClick={() => setIsOpen(false)}>Inicio</a></li>
                <li><a href="#sobre-mi"  onClick={() => setIsOpen(false)}>Sobre mi</a></li>
                <li><a href="#proyectos" onClick={() => setIsOpen(false)}>Proyectos</a></li>
                <li><a href="#contacto"  onClick={() => setIsOpen(false)}>Contacto</a></li>
            </ul>
        </nav>
    );
}