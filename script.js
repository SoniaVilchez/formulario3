document.getElementById("formulario").addEventListener("submit", function(event) {
    let valido = true;
    
    const nombreApellidos = document.getElementById("nombre_apellidos");
    const nombreEmpresa = document.getElementById("nombre_empresa");
    const cif = document.getElementById("cif");
    const telefono = document.getElementById("telefono");
    const comentario = document.getElementById("comentario");
    
    document.getElementById("error-nombre_apellidos").textContent = nombreApellidos.value ? "" : "El nombre y apellidos son obligatorios.";
    document.getElementById("error-nombre_empresa").textContent = nombreEmpresa.value ? "" : "El nombre de la empresa es obligatorio.";
    document.getElementById("error-cif").textContent = cif.validity.patternMismatch ? "Formato de CIF incorrecto." : "";
    document.getElementById("error-telefono").textContent = telefono.validity.patternMismatch ? "Debe ser un número de 9 dígitos." : "";
    document.getElementById("error-comentario").textContent = comentario.value ? "" : "El comentario es obligatorio.";
    
    if (!nombreApellidos.value || !nombreEmpresa.value || cif.validity.patternMismatch || telefono.validity.patternMismatch || !comentario.value) {
        valido = false;
    }
    
    if (!valido) {
        event.preventDefault();
    }
});