const Presentacion = () => {
    return ( 
        <div id="readme" className="  flex center flex-col gap-0 w-full p-0 font-mono">
            <div className="flex items-center p-2 gap-1 bg-slate-100 rounded-t-xl ring-1 ring-slate-300 shadow-sm border-2 border-black border-b-0">
                    <div className="w-3 h-3 rounded-full bg-red-400 border border-black/20"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400 border border-black/20"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400 border border-black/20"></div>
                <h1 className="text-md ml-1 text-slate-700 ">README.txt </h1>
            </div>

         


            <div className="flex flex-col-reverse sm:flex-row bg-slate-50 border-2 border-black rounded-b-xl shadow-[0_3px_0_0_rgba(0,0,0,1)] overflow-hidden">
                
                    


                <div className="flex flex-col p-6 sm:p-10 gap-6 bg-slate-50 justify-center  border-t-2 sm:border-0 border-black w-full sm:w-1/2">
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-end items-center gap-3 text-2xl sm:text-3xl font-medium text-gray-600">
                            <h1 className="font-mono text-5xl sm:text-6xl bg-slate-900 text-blue-600 typewriter-text text-[clamp(2.5rem,5vw,5rem)]"></h1>
                            <img src="https://images.emojiterra.com/google/noto-emoji/animated-emoji/1f44b.gif" alt="Mano saludando" className="w-16 h-16 object-contain" />
                        </div>

                        <h1 className="  text-[clamp(2.5rem,3vw,3.5rem)] font-black leading-none text-slate-900 drop-shadow-sm mt-2">  
                            Soy Luis Galvan
                        </h1>

                        <h1 className="text-xl sm:text-3xl text-gray-700 font-bold leading-tight flex flex-wrap  sm:items-baseline gap-x-2">
                            Ingeniero en
                            <span className="text-2xl font-black sm:text-4xl text-blue-700 drop-shadow-md whitespace-nowrap">
                                Mecatrónica
                            </span>
                        </h1>
                    </div>



                                                

                    <div className="flex flex-wrap items-center gap-5 mt-4 justify-center sm:justify-start">
                        <a 
                        
                        href="./assets/docs/curriculum/CV_Luis_Fernando_Galvan_Coss.pdf" 

                        download="CV_Luis_Fernando_Galvan_Coss.pdf"
                        
                        className="bg-white text-black py-2 px-4 border-2 border-black 
                        rounded-lg shadow-[0_4px_0_0_rgba(0,0,0,1)]
                         hover:bg-black hover:text-white hover:shadow-[0_4px_0_0_rgba(255,255,255,1)] 
                         active:translate-y-[4px] active:shadow-none transition-all text-s font-bold uppercase
                          tracking-widest flex flex-col items-center justify-center min-w-[100px]
                          ">
                            <span>Descargar</span>
                            <span>CV</span>
                        </a>

                        <a 
                        
                        href="./assets/docs/curriculum/Resume_Luis_Fernando_Galvan_Coss.pdf" 

                        download="Resume_Luis_Fernando_Galvan_Coss.pdf"
                        
                        className="bg-white text-black py-2 px-4 border-2 border-black 
                        rounded-lg shadow-[0_4px_0_0_rgba(0,0,0,1)]
                         hover:bg-black hover:text-white hover:border-white 
                         hover:shadow-[0_4px_0_0_rgba(255,255,255,1)] active:translate-y-[4px] 
                         active:shadow-none transition-all text-s font-bold uppercase tracking-widest
                          flex flex-col items-center justify-center min-w-[100px]
                          ">
                            <span>Download</span>
                            <span>Resume</span>
                        </a>


                                

                        <div className="flex flex-col sm:items-start gap-4 ml-0 sm:ml-4 pt-1 sm:pt-0">
                            <div className="flex gap-3 self-center">
                                <a href="https://www.linkedin.com/in/luisgalcoss/" target="_blank" className="group">
                                    <div className="w-12 h-12 flex items-center justify-center border-2
                                     border-black rounded bg-white hover:bg-black hover:border-white
                                      transition-colors shadow-sm">
                                        <svg className="w-6 h-6 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                    </div>
                                </a>
                                <a href="https://github.com/LusiGalCoss" target="_blank" className="group">
                                    <div className="w-12 h-12 flex items-center justify-center border-2 border-black rounded bg-white hover:bg-black hover:border-white transition-colors shadow-sm">
                                        <svg className="w-7 h-7 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                    </div>
                                </a>
                            </div>
                            <span className="no-underline text-sm font-medium text-slate-600">luisgalcoss@outlook.com</span>
                        </div>
                    </div>
                </div>





                <div className="w-full sm:w-1/2 bg-slate-200 sm:border-l-2 border-black flex flex-col items-center justify-between p-4 gap-4
                ">
<div className="relative w-60  md:w-64 aspect-square mx-auto md:mx-0 rounded-xl border-2 border-black shadow-[0px_2px_0_0_rgba(0,0,0,1)] overflow-hidden bg-white transition-transform hover:scale-105">
    
   <img src="./assets/img/Principales/potfile_picture.webp" 
        alt="Foto de perfil" 
        className="w-full h-full object-cover object-top"/>
        </div>


                                  
                    <div className="flex gap-4 items-end">
                        <div className="anim-fast flex items-center justify-center w-10 h-10 p-2
                         bg-white text-black border-2 border-black rounded-md ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" fill="none" className="w-7 h-7">
                                <path d="M5.3335 1.3335V0.833496V0.833496V1.3335ZM9.3335 5.3335H9.8335V5.3335H9.3335ZM8.979 6.979L8.5234 6.77303C8.43769 6.96261 8.47834 7.18544 8.62545 7.33256L8.979 6.979ZM13.5005 11.5005L13.8541 11.147L13.854 11.1469L13.5005 11.5005ZM13.5005 13.8335L13.854 14.187L13.8541 14.187L13.5005 13.8335ZM6.49463 9.16162L6.84818 8.80807C6.71778 8.67766 6.52618 8.62963 6.34968 8.68309L6.49463 9.16162ZM5.3335 9.3335V9.8335V9.8335V9.3335ZM1.3335 5.3335H0.833496V5.3335H1.3335ZM1.72314 3.60889L2.0767 3.25533C1.96197 3.14061 1.79871 3.08868 1.63878 3.11605C1.47886 3.14343 1.34216 3.2467 1.27213 3.39305L1.72314 3.60889ZM4.6333 6.51904L4.27975 6.8726C4.47501 7.06786 4.79159 7.06786 4.98685 6.8726L4.6333 6.51904ZM6.51904 4.6333L6.8726 4.98685C7.06786 4.79159 7.06786 4.47501 6.8726 4.27975L6.51904 4.6333ZM3.60889 1.72314L3.39305 1.27213C3.2467 1.34216 3.14343 1.47886 3.11605 1.63878C3.08868 1.79871 3.14061 1.96197 3.25533 2.0767L3.60889 1.72314ZM5.3335 1.3335V1.8335C7.26649 1.8335 8.8335 3.4005 8.8335 5.3335H9.3335H9.8335C9.8335 2.84821 7.81878 0.833496 5.3335 0.833496V1.3335ZM9.3335 5.3335H8.8335C8.8335 5.84707 8.722 6.33373 8.5234 6.77303L8.979 6.979L9.43461 7.18498C9.68993 6.62022 9.8335 5.99345 9.8335 5.3335H9.3335ZM8.979 6.979L8.62545 7.33256L13.1469 11.854L13.5005 11.5005L13.854 11.1469L9.33256 6.62545L8.979 6.979ZM13.5005 11.5005L13.1468 11.8539C13.5957 12.3031 13.5957 13.0311 13.1469 13.48L13.5005 13.8335L13.854 14.187C14.6934 13.3475 14.6932 11.9865 13.8541 11.147L13.5005 11.5005ZM13.5005 13.8335L13.1469 13.4799C12.6979 13.929 11.9691 13.929 11.5201 13.4799L11.1665 13.8335L10.813 14.187C11.6525 15.0266 13.0144 15.0266 13.854 14.187L13.5005 13.8335ZM11.1665 13.8335L11.5201 13.4799L6.84818 8.80807L6.49463 9.16162L6.14108 9.51517L10.813 14.187L11.1665 13.8335ZM6.49463 9.16162L6.34968 8.68309C6.02804 8.78052 5.68714 8.8335 5.3335 8.8335V9.3335V9.8335C5.78763 9.8335 6.22614 9.76539 6.63958 9.64015L6.49463 9.16162ZM5.3335 9.3335V8.8335C3.4005 8.8335 1.8335 7.26649 1.8335 5.3335H1.3335H0.833496C0.833496 7.81878 2.84821 9.8335 5.3335 9.8335V9.3335ZM1.3335 5.3335H1.8335C1.8335 4.79215 1.95588 4.28085 2.17416 3.82472L1.72314 3.60889L1.27213 3.39305C0.990641 3.98127 0.833496 4.6398 0.833496 5.3335H1.3335ZM1.3335 5.3335H1.8335C1.8335 4.79215 1.95588 4.28085 2.17416 3.82472L1.72314 3.60889L1.27213 3.39305C0.990641 3.98127 0.833496 4.6398 0.833496 5.3335H1.3335ZM1.72314 3.60889L1.36959 3.96244L4.27975 6.8726L4.6333 6.51904L4.98685 6.16549L2.0767 3.25533L1.72314 3.60889ZM4.6333 6.51904L4.98685 6.8726L6.8726 4.98685L6.51904 4.6333L6.16549 4.27975L4.27975 6.16549L4.6333 6.51904ZM6.51904 4.6333L6.8726 4.27975L3.96244 1.36959L3.60889 1.72314L3.25533 2.0767L6.16549 4.98685L6.51904 4.6333ZM3.60889 1.72314L3.82472 2.17416C4.28085 1.95588 4.79215 1.8335 5.3335 1.8335V1.3335V0.833496C4.6398 0.833496 3.98127 0.990641 3.39305 1.27213L3.60889 1.72314Z" fill="currentColor"/>
                            </svg>
                        </div>

                                     

                        <div className="anim-toggle flex items-center justify-center px-4 h-10
                         bg-white text-black border-2 border-black rounded-md 
                         shadow-[0_4px_0_0_rgba(0,0,0,1)] text-xs font-bold uppercase tracking-widest cursor-default">
                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
);
}
 
export default Presentacion;