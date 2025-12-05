import React, { useState } from 'react';
import { Persona } from './types';
import PersonaCard from './components/PersonaCard';

// Data Definition
const personas: Persona[] = [
    {
        id: "01",
        name: "THE SOCIOPATH",
        description: "Zero-sum strategist. Detached from norms. Analyzes purely for power and advantage.",
        colorClass: "text-[#ff3333]", // Sociopath Red
        keyword: "RUTHLESS"
    },
    {
        id: "02",
        name: "THE MANIPULATOR",
        description: "Game theory expert. Exploits information asymmetry and hidden incentives.",
        colorClass: "text-purple-500", // Sneaky Purple
        keyword: "SNEAKY"
    },
    {
        id: "03",
        name: "THE EMPATH",
        description: "Prioritizes human impact. The conscience of the council. Rejects abstract efficiency.",
        colorClass: "text-[#d4af37]", // Empath Gold
        keyword: "CARES"
    },
    {
        id: "04",
        name: "THE DIPLOMAT",
        description: "Seeks synthesis. Bridges the gap between the ruthless and the righteous.",
        colorClass: "text-emerald-400", // Balanced Green
        keyword: "BALANCED"
    },
    {
        id: "05",
        name: "THE PRAGMATIST",
        description: "Evidence-driven. Impatient with theory. Demands data, case studies, and receipts.",
        colorClass: "text-blue-400", // Realistic Blue
        keyword: "REALISTIC"
    },
    {
        id: "06",
        name: "THE OPPORTUNIST",
        description: "Agile and unprincipled. Pivots instantly to align with the winning momentum.",
        colorClass: "text-orange-400", // Clever Orange
        keyword: "CLEVER"
    },
    {
        id: "07",
        name: "THE IDEALIST",
        description: "Uncompromising on values. Rejects \"necessary evils.\" Holds the moral line.",
        colorClass: "text-pink-400", // Principled Pink
        keyword: "PRINCIPLED"
    },
    {
        id: "08",
        name: "COMMUNITY ORGANIZER",
        description: "Focuses on power dynamics. Who is excluded? Who benefits? Demands equity.",
        colorClass: "text-indigo-400", // Inclusive Indigo
        keyword: "INCLUSIVE"
    }
];

const voteReasons = {
    pragmatist: "Secured victory by consolidating the centrist vote. The proposal's concrete metrics outweighed the Diplomat's abstract synthesis in the final round.",
    sociopath: "Eliminated early. The aggressive zero-sum strategy alienated the high-empathy coalition (Empath, Idealist) and failed to secure the necessary transfer votes.",
    diplomat: "Survived to the final round but ultimately conceded. While the consensus-building approach was popular, it lacked the specific implementation details demanded by the swing voters."
};

const App: React.FC = () => {
    const [activeReason, setActiveReason] = useState<string>(voteReasons.pragmatist);
    const [activePersona, setActivePersona] = useState<string>("PRAGMATIST");

    const handleBarClick = (persona: string, reason: string) => {
        setActivePersona(persona);
        setActiveReason(reason);
    };

    return (
        <div className="relative min-h-screen text-paper font-serif selection:bg-accent selection:text-white">
            {/* Fixed Noise Overlay */}
            <div className="fixed inset-0 w-full h-full bg-noise pointer-events-none z-50 mix-blend-overlay"></div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-40 border-b border-white/10 backdrop-blur-md bg-obsidian/80">
                <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
                    <div className="font-sans font-bold tracking-widest text-sm">
                        PERSPECTIVES<span className="text-accent">_</span>
                    </div>
                    <div className="hidden md:flex gap-8 font-mono text-xs tracking-wider text-white/60">
                        <a href="#council" className="hover:text-white transition-colors">THE COUNCIL</a>
                        <a href="#logic" className="hover:text-white transition-colors">THE LOGIC</a>
                        <a href="#access" className="hover:text-white transition-colors">ACCESS</a>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse-fast"></div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="relative min-h-[svh] flex items-center justify-center pt-24 md:pt-20 border-b border-white/10 bg-obsidian">
                {/* Background Grid */}
                <div className="absolute inset-0 grid-line opacity-20 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center relative z-10 w-full pb-16 md:pb-0">
                    {/* Left: Typography */}
                    <div className="lg:col-span-8">
                        <div className="font-mono text-accent text-sm mb-4 tracking-widest">
                            /// SYSTEM INITIALIZED
                        </div>
                        <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl leading-[0.9] mb-8 mix-blend-difference">
                            Escape the <br />
                            <span className="italic text-white/50">Echo Chamber.</span>
                        </h1>
                        <p className="font-mono text-sm md:text-base text-white/60 max-w-xl leading-relaxed mb-10 border-l border-accent pl-6">
                            Stop asking chatbots that agree with you. Deploy a
                            council of 8 distinct autonomous agents. From the
                            ruthless <span className="text-accent">Sociopath</span> to
                            the principled <span className="text-pink-400">Idealist</span>.
                            <br /><br />
                            They debate. They vote. You decide.
                        </p>

                        <form className="flex flex-col sm:flex-row gap-0 max-w-md" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="ENTER_EMAIL_ADDRESS"
                                className="bg-transparent border border-white/20 text-white font-mono text-sm px-6 py-4 w-full focus:outline-none focus:border-accent transition-colors placeholder:text-white/20"
                            />
                            <button
                                type="submit"
                                className="bg-white text-black font-sans font-bold px-8 py-4 hover:bg-accent hover:text-white transition-all duration-300"
                            >
                                JOIN_WAITLIST
                            </button>
                        </form>
                    </div>

                    {/* Right: The Artifact (Visual Representation) */}
                    <div className="lg:col-span-4 relative h-[350px] md:h-[400px] border border-white/10 bg-white/5 backdrop-blur-sm p-6 flex flex-col justify-between group overflow-hidden">
                        {/* Abstract Chat Interface */}
                        <div className="font-mono text-xs text-white/40 mb-4 border-b border-white/10 pb-2 flex justify-between">
                            <span>DEBATE_LOG_#9120</span>
                            <span>STATUS: RESOLVED</span>
                        </div>

                        <div className="space-y-4 font-mono text-xs">
                            <div className="opacity-100 transition-opacity duration-500">
                                <span className="text-pink-400 font-bold">07_IDEALIST</span>
                                <p className="text-white/80 mt-1 pl-4 border-l border-pink-400/30">
                                    Profit may rise, but dignity cannot be bought. When we trade trust for a 10% lift, we erode the foundation of honest exchange.
                                </p>
                            </div>
                            <div className="opacity-60 transition-opacity duration-500 delay-100">
                                <span className="text-blue-400 font-bold">05_PRAGMATIST</span>
                                <p className="text-white/80 mt-1 pl-4 border-l border-blue-400/30">
                                    We don’t build a system on philosophical ideals. We build one that shows measurable revenue without unacceptable harm.
                                </p>
                            </div>
                            <div className="opacity-40 transition-opacity duration-500 delay-200">
                                <span className="text-emerald-400 font-bold">04_DIPLOMAT</span>
                                <p className="text-white/80 mt-1 pl-4 border-l border-emerald-400/30">
                                    This is not a choice between profit and virtue. It is an opportunity to innovate while honoring the people who make our business possible.
                                </p>
                            </div>

                            <div className="pt-4 border-t border-white/10 text-accent animate-pulse">
                                {'>'} SYSTEM_AGENT: CONSENSUS REACHED...<span className="cursor-blink">_</span>
                            </div>
                        </div>

                        {/* Decorative corner accents */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white"></div>
                        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white"></div>
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white"></div>
                    </div>
                </div>
            </header>

            {/* The Council Section */}
            <section id="council" className="py-16 md:py-32 border-b border-white/10 bg-obsidian">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20">
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl">
                            The Assembly
                        </h2>
                        <p className="font-mono text-sm text-white/50 max-w-sm md:text-right mt-6 md:mt-0">
                            Eight diverse analytical frameworks. <br />
                            No RLHF safety filters. <br />
                            Pure strategic reasoning.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
                        {personas.map((persona) => (
                            <PersonaCard key={persona.id} persona={persona} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Logic Section */}
            <section id="logic" className="py-16 md:py-32 bg-paper text-obsidian">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
                        <div>
                            <div className="font-mono text-sm tracking-widest mb-6 border-b border-obsidian/20 pb-2 inline-block">
                                ARCHITECTURE
                            </div>
                            <h2 className="font-serif text-5xl md:text-6xl mb-12">
                                Consensus is<br />overrated.
                            </h2>

                            <div className="space-y-12">
                                <div className="group cursor-default">
                                    <h3 className="font-sans font-bold text-2xl mb-2 group-hover:text-accent transition-colors">
                                        01. BLIND PROPOSALS
                                    </h3>
                                    <p className="font-serif text-lg md:text-xl leading-relaxed opacity-70">
                                        To prevent groupthink, agents analyze your
                                        task independently before seeing others'
                                        work. No anchoring bias. Pure, divergent
                                        thought.
                                    </p>
                                </div>

                                <div className="group cursor-default">
                                    <h3 className="font-sans font-bold text-2xl mb-2 group-hover:text-accent transition-colors">
                                        02. THREADED DEBATE
                                    </h3>
                                    <p className="font-serif text-lg md:text-xl leading-relaxed opacity-70">
                                        A dynamic orchestration agent acts as a
                                        director, deciding who speaks next based on
                                        conflict levels and argument quality.
                                    </p>
                                </div>

                                <div className="group cursor-default">
                                    <h3 className="font-sans font-bold text-2xl mb-2 group-hover:text-accent transition-colors">
                                        03. RANKED CHOICE (STV)
                                    </h3>
                                    <p className="font-serif text-lg md:text-xl leading-relaxed opacity-70">
                                        No simple majority. Agents use Single
                                        Transferable Vote to find the solution that
                                        survives the rigorous scrutiny of the entire
                                        council.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center">
                            {/* Stylized Voting Diagram */}
                            <div className="w-full md:aspect-[3/4] border border-obsidian/10 relative p-6 md:p-8 flex flex-col justify-center bg-white shadow-2xl">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10"></div>

                                {/* Visualizing the STV flow */}
                                <div className="hidden md:flex items-end mb-4 font-mono text-xs opacity-50 relative z-10 px-4">
                                    <div className="w-28 shrink-0"></div>
                                    <div className="flex-1 grid grid-cols-3">
                                        <div className="text-right border-r border-obsidian/20 pr-4 pb-2">ROUND_01</div>
                                        <div className="text-right border-r border-obsidian/20 pr-4 pb-2">ROUND_02</div>
                                        <div className="text-right border-r border-obsidian/20 pr-4 pb-2">FINAL</div>
                                    </div>
                                </div>

                                <div className="space-y-3 mb-10 relative z-20">
                                    {/* Bar 1: Pragmatist (Winner) */}
                                    <div 
                                        onClick={() => handleBarClick("PRAGMATIST", voteReasons.pragmatist)}
                                        className={`h-12 w-full flex items-center px-4 font-mono text-xs group cursor-pointer transition-all duration-300 border ${activePersona === "PRAGMATIST" ? "border-obsidian bg-transparent" : "border-transparent bg-obsidian/5 hover:bg-obsidian/10"}`}
                                    >
                                        <span className={`w-24 md:w-28 shrink-0 transition-colors duration-300 ${activePersona === "PRAGMATIST" ? "text-blue-600 font-bold" : "text-obsidian"}`}>PRAGMATIST</span>
                                        <div className="flex-1 flex items-center">
                                            <div className={`h-1 transition-all duration-1000 ease-out w-[100%] ${activePersona === "PRAGMATIST" ? "bg-blue-400" : "bg-obsidian"}`}></div>
                                        </div>
                                    </div>
                                    
                                    {/* Bar 2: Sociopath (Loser) */}
                                    <div 
                                        onClick={() => handleBarClick("SOCIOPATH", voteReasons.sociopath)}
                                        className={`h-12 w-full flex items-center px-4 font-mono text-xs group cursor-pointer transition-all duration-300 border ${activePersona === "SOCIOPATH" ? "border-obsidian bg-transparent" : "border-transparent bg-obsidian/5 hover:bg-obsidian/10"} opacity-60 hover:opacity-100`}
                                    >
                                        <span className={`w-24 md:w-28 shrink-0 line-through transition-colors duration-300 ${activePersona === "SOCIOPATH" ? "decoration-accent text-accent font-bold" : "decoration-accent"}`}>SOCIOPATH</span>
                                        <div className="flex-1 flex items-center">
                                            <div className={`h-1 w-[33%] transition-all duration-1000 ease-out ${activePersona === "SOCIOPATH" ? "bg-accent" : "bg-accent"}`}></div>
                                        </div>
                                    </div>

                                    {/* Bar 3: Diplomat (Runner up) */}
                                    <div 
                                        onClick={() => handleBarClick("DIPLOMAT", voteReasons.diplomat)}
                                        className={`h-12 w-full flex items-center px-4 font-mono text-xs group cursor-pointer transition-all duration-300 border ${activePersona === "DIPLOMAT" ? "border-obsidian bg-transparent" : "border-transparent bg-obsidian/5 hover:bg-obsidian/10"}`}
                                    >
                                        <span className={`w-24 md:w-28 shrink-0 transition-colors duration-300 ${activePersona === "DIPLOMAT" ? "text-emerald-600 font-bold" : "text-obsidian"}`}>DIPLOMAT</span>
                                        <div className="flex-1 flex items-center">
                                            <div className={`h-1 transition-all duration-1000 ease-out w-[66%] ${activePersona === "DIPLOMAT" ? "bg-emerald-400" : "bg-obsidian"}`}></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 border-t border-obsidian/10 pt-6">
                                    <div className="font-mono text-xs text-obsidian/40 mb-2 tracking-widest uppercase">
                                         /// ANALYTICAL_RATIONALE: <span className="text-obsidian">{activePersona}</span>
                                    </div>
                                    <p className="font-serif text-lg leading-relaxed min-h-[6rem]">
                                        {activeReason}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Access Section / Footer */}
            <section id="access" className="py-20 bg-obsidian border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h3 className="font-sans text-2xl md:text-3xl font-bold mb-8">READY TO DEPLOY?</h3>
                    <p className="font-mono text-white/50 text-sm mb-8">Access is currently limited to research partners.</p>
                    <a href="#" className="inline-block border border-white/20 px-8 py-3 font-mono text-xs hover:bg-white hover:text-obsidian transition-colors">
                        REQUEST_ACCESS_KEY
                    </a>
                </div>
            </section>
        </div>
    );
};

export default App;