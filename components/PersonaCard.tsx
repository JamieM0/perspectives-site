import React from 'react';
import { Persona } from '../types';

interface PersonaCardProps {
    persona: Persona;
}

const PersonaCard: React.FC<PersonaCardProps> = ({ persona }) => {
    return (
        <div className="bg-obsidian p-6 md:p-8 aspect-[3/2] md:aspect-square hover:bg-white/5 transition-colors duration-500 group relative overflow-hidden border-b border-r border-white/10 flex flex-col justify-between">
            {/* Number ID with specific color */}
            <div className={`font-mono text-xs mb-2 transition-colors duration-300 ${persona.colorClass}`}>
                {persona.id}
            </div>
            
            <div className="flex-1 flex flex-col justify-center">
                <h3 className="font-sans text-lg md:text-xl font-bold tracking-widest mb-2 md:mb-4">
                    {persona.name}
                </h3>
                
                <p className="font-serif text-white/60 text-base md:text-lg leading-snug line-clamp-3 md:line-clamp-none">
                    {persona.description}
                </p>
            </div>

            {/* Keyword Reveal */}
            <div className={`absolute bottom-6 right-6 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity font-mono text-[10px] tracking-widest ${persona.colorClass}`}>
                {persona.keyword}
            </div>
        </div>
    );
};

export default PersonaCard;