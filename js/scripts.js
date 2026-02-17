// Este es el "seguro": espera a que el HTML esté totalmente dibujado
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Buscamos los elementos en el HTML
    const caja = document.getElementById('marquee-container');
    const bGrid = document.getElementById('btn-grid');
    const bAnimar = document.getElementById('btn-marquee');

    // 2. Verificación de seguridad (QA)
    if (!caja || !bGrid || !bAnimar) {
        console.warn("⚠️ Advertencia: No se encontraron todos los elementos. Revisa los IDs en el HTML.");
        return;
    }

    console.log("✅ JavaScript conectado y elementos encontrados.");

    // 3. Lógica para el botón VER TODO
    bGrid.addEventListener('click', () => {
        // Quitamos la animación
        caja.classList.remove('animate-marquee', 'whitespace-nowrap');
        // Acomodamos en cuadrícula
        caja.classList.add('flex-wrap', 'justify-start');
        
        // Feedback visual en botones
        bGrid.classList.add('bg-blue-400');
        bAnimar.classList.remove('bg-yellow-400');
        bAnimar.classList.add('bg-white');
    });

    // 4. Lógica para el botón ANIMAR
    bAnimar.addEventListener('click', () => {
        // Regresamos a modo marquesina
        caja.classList.add('animate-marquee', 'whitespace-nowrap');
        caja.classList.remove('flex-wrap', 'justify-start');
        
        // Feedback visual en botones
        bAnimar.classList.add('bg-yellow-400');
        bGrid.classList.remove('bg-blue-400');
        bGrid.classList.add('bg-white');
    });
});