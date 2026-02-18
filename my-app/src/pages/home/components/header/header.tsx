const Header = () => {
    return ( 
    <div id="inicio" className="snap-center  flex flex-col  max-w-4xl min-w-0 mx-auto  w-fit sm:w-full ">
        <div className="flex justify-end items-center p-2 gap-1.5
        bg-slate-100 rounded-t-xl  border-2
        border-black border-b-0 
        ">
            <p className="text-slate-700 text-[10px] flex  items-center gap-1 tracking-widest font-mono ">
                made with PENE 
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#EF4444"/>
                </svg>
        </p>
        </div>

        <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:items-end  px-6 py-4
                    bg-slate-300 text-black border-2 border-black rounded-b-xl 
                    shadow-[0_2px_0_0_rgba(0,0,0,1)] mb-8 gap-2">
                
            <div className="flex items-center gap-x-4 mb-4 md:mb-0">
                
                <div className="flex shrink-0  items-center justify-center w-24 h-24 sm:w-28 sm:h-28 bg-slate-900 border-4 border-slate-600 rounded shadow-[4px_4px_0_0_rgba(0,0,0,1)] overflow-hidden">
                    <div className=" text-5xl sm:text-6xl font-bold select-none">  
                        <span className="flex items-center tracking-tighter translate-y-[-12px]">
                            <span className="text-blue-600">{">"}</span>
                            <span className="translate-y-[8px] text-slate-500">-</span>
                            <span className="translate-y-[16px] text-slate-300 ">L</span>
                        </span>
                    </div>
                </div>

            </div>
            <nav className="flex flex-wrap justify-center gap-4 text-sm font-semibold pb-1">
                <a href="#readme" className="px-1 py-2 bg-slate-100     text-black rounded-lg border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-blue-50 hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] active:translate-y-[4px] active:shadow-none transition-all">
                    Hola c : 
                </a>
                <a href="#proyectos" className="px-1 py-2 bg-slate-100 text-black rounded-lg border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-blue-50 hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] active:translate-y-[4px] active:shadow-none transition-all">
                    Proyectos
                </a>

                <a href="#habilidades" className="px-1 py-2 bg-slate-100 text-black rounded-lg border-2 border-black 
                shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-blue-50 hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] active:translate-y-[4px] active:shadow-none transition-all">
                    Habilidades
                </a>
            </nav>
        </div>
    </div>   
);
}
 
export default Header;