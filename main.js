console.log ("Hola mundo! desde la consola");

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString( 'Desarrolladora Frontend Jr | Ingeniera en sistemas computacionales | Arquitectura')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡Si lo puedes imaginar, lo puedes crear! ')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('<strong>programar!</strong>')
    .pauseFor(2500)
    .start();