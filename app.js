// --- Variables de Referencia del DOM ---
const landingPage = document.getElementById('landingPage');
const mainContent = document.getElementById('mainContent');
const alertLog = document.getElementById('alertLog');

// --- Funciones de Navegación ---

/**
 * Muestra el Dashboard y oculta la página de inicio de sesión.
 */
function showDashboard() {
    // Aplicar la clase 'hidden' y el estilo 'opacity: 0' para iniciar la transición
    landingPage.classList.add('hidden');
    landingPage.style.opacity = 0;

    // Remover 'hidden' y aplicar el estilo de opacidad para el Dashboard
    mainContent.classList.remove('hidden');
    mainContent.style.opacity = 0;

    // Pequeño retraso para asegurar que la clase 'hidden' fue removida antes de iniciar la animación
    setTimeout(() => {
        mainContent.style.transition = 'opacity 0.5s ease-in-out';
        mainContent.style.opacity = 1;
    }, 10);
}

/**
 * Muestra la página de inicio de sesión y oculta el Dashboard.
 */
function showLanding() {
    // Aplicar transición al ocultar
    mainContent.style.transition = 'opacity 0.3s ease-in-out';
    mainContent.style.opacity = 0;

    // Ocultar después de la transición
    setTimeout(() => {
        mainContent.classList.add('hidden');
        landingPage.classList.remove('hidden');

        // Mostrar la página de inicio de sesión con transición
        setTimeout(() => {
            landingPage.style.transition = 'opacity 0.5s ease-in-out';
            landingPage.style.opacity = 1;
        }, 10);

    }, 300); // Espera 300ms, la duración de la transición
}

// --- Funciones de Simulación ---

/**
 * Simula una alerta crítica de caducidad y la añade al log de alertas.
 */
function mostrarAlertaCaducidad() {
    const alertHtml = `
        <div class="alert-item border-red-500 bg-red-100/70 text-red-800 flex justify-between items-center transition-opacity duration-300 opacity-0">
            <div>
                <span class="font-bold">¡CRÍTICO!</span> El Lote HUEVO-A102 caduca en 3 días. Despacho urgente requerido.
            </div>
            <span class="text-xs text-red-600 font-semibold cursor-pointer hover:underline" onclick="this.parentElement.remove()">
                X
            </span>
        </div>
    `;

    // 1. Añadir la alerta
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = alertHtml.trim();
    const newAlert = tempDiv.firstChild;

    // Asegurar que el log de alertas está limpio (remover el mensaje inicial si existe)
    if (alertLog.querySelector('.text-center')) {
        alertLog.innerHTML = '';
    }

    alertLog.prepend(newAlert);

    // 2. Animar la entrada (fade-in)
    setTimeout(() => {
        newAlert.style.opacity = 1;
    }, 50);

    // Opcional: Limitar el número de alertas para evitar desbordamiento
    while (alertLog.children.length > 5) {
        alertLog.lastChild.remove();
    }
}

/**
 * Muestra el mensaje modal de Trazabilidad.
 */
function simularTrazabilidad() {
    const trazabilidadModal = document.getElementById('trazabilidad-msg');
    trazabilidadModal.classList.remove('hidden');
    trazabilidadModal.classList.add('flex');
}

// Inicializar la vista al cargar
window.onload = () => {
    // Asegura que al cargar la página se muestre la landing page
    showLanding();
    // Prepara el mainContent para ocultarse, forzando la opacidad 0 al inicio
    mainContent.style.opacity = 0;
};