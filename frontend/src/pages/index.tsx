import React from 'react';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <Navbar />
            <h1 className="text-4xl font-bold mt-10">Bienvenido a la App de Partidos de Fútbol</h1>
            <p className="mt-4 text-lg">Únete a partidos y mejora tus habilidades en el fútbol.</p>
            <div className="mt-8">
                <a href="/login" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Iniciar Sesión
                </a>
            </div>
        </div>
    );
};

export default Home;