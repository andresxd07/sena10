document.addEventListener('DOMContentLoaded', function () {
    const cursoTitulo = document.getElementById('curso-titulo');
    const cursoImagen = document.getElementById('curso-imagen');
    const cursoDuracion = document.getElementById('curso-duracion');
    const cursoFrameworks = document.getElementById('curso-frameworks');

    const parametros = new URLSearchParams(window.location.search);
    const curso = parametros.get('curso');

    if (curso) {
        mostrarDetalleCurso(curso);
    }
});

function mostrarDetalleCurso(curso) {
    const detallesCurso = {
        'python': {
            titulo: 'Curso de Python',
            imagen: 'https://cms.rootstack.com/sites/default/files/inline-images/Python-Symbol_0.png',
            duracion: 'Duración: 8 semanas',
            frameworks: 'Frameworks: Django, Flask, PyTorch'
        },
        'php': {
            titulo: 'Curso de PHP',
            imagen: 'https://www.anerbarrena.com/wp-content/uploads/2016/05/logo-programacion-1280x720.jpg',
            duracion: 'Duración: 6 semanas',
            frameworks: 'Frameworks: Laravel, Symfony, CodeIgniter'
        },
        'javascript': {
            titulo: 'Curso de JavaScript',
            imagen: 'https://cms.rootstack.com/sites/default/files/inline-images/javascript%20logo.png',
            duracion: 'Duración: 10 semanas',
            frameworks: 'Frameworks: React, Angular, Vue.js'
        }
    };

    const detalle = detallesCurso[curso];
    if (detalle) {
        cursoTitulo.textContent = detalle.titulo;
        cursoImagen.src = detalle.imagen;
        cursoDuracion.textContent = detalle.duracion;
        cursoFrameworks.textContent = detalle.frameworks;
    }
}
