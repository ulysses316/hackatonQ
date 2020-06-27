const typewriter = new Typewriter('#typewriter', {
    loop: true,
    delay: 80,
    deleteSpeed: 2
  });

  typewriter.typeString('<h1>Hello World, soy H. Ulises G.M</h1><br>')
    .typeString('<h1>un programador </h1>')
    .typeString('<h1>Frontend</h1>')
    .pauseFor(1000)
    .deleteChars(8)
    .typeString('<h1>Backend</h1>')
    .pauseFor(1000)
    .deleteChars(23)
    .typeString('<h1>Music Lover</h1>')
    .pauseFor(1000)
    .deleteChars(11)
    //
    .typeString('<h1>Bloguero casual</h1>')
    .pauseFor(1000)
    .deleteChars(15)
    //
    .typeString('<h1>Sensei</h1>')
    .pauseFor(1000)
    .deleteChars(6)
    .typeString('<h1>Miembro de comunidad</h1>')
    .pauseFor(1000)
    .deleteChars(20)
    .pauseFor(1000)
    .start();