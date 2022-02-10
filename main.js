function start(){
    if (annyang) {
        annyang.setLanguage("es-PE")
        annyang.start({ autoRestart: true, continuous: false }); 
        console.log("Listening...")
        annyang.addCommands(comandos);
        annyang.debug()
        document.getElementById("btn").style.display = "none"   
    }
}
let bandera = false;
annyang.addCallback('soundstart', function () {
    if (!bandera){
        document.getElementById("all2").style.display="block"
        setTimeout(() => {
            voz('Bienvenido de nuevo')
            bandera = true;
        }, 1000);
    }
    console.log("sound detected")
});
annyang.addCallback('result', function () {
    console.log('sound stopped');
});

const comandos = {

    // SALUDO(NADIE LO HACE , PERO IGUAL)

    "okey Aruna": () => {
        voz("Bienvenido de nuevo");
    },

    "hey Aruna": () => {
        voz("Bienvenido de nuevo");
    },

    "Buenos días Aruna": () => {
        voz("Bienvenido de nuevo");
    },

    "Buenas tardes Aruna": () => {
        voz("Bienvenido de nuevo");
    },

    "Buenas noches Aruna": () => {
        voz("Bienvenido de nuevo");
    },

    // DESPEDIDA(NADIE SE DESPIDE, PERO IGUAL)

    "Hasta mañana Aruna": () => {
        voz("Hasta mañana");
        annyang.abort()
    },

    "Hasta luego Aruna": () => {
        voz("Hasta luego");
        annyang.abort()
    },

    "Adios Aruna": () => {
        voz("Hasta luego");
        annyang.abort()
    },

    "apágate": () => {
        voz('ok, hasta luego')
        annyang.abort();
    },

    "apágate por *tiempo minutos": tiempo => {
        voz('ok, vuelvo en' + tiempo + 'minutos');
        annyang.abort();
        setTimeout(() => {
            annyang.start();
            voz('Hola, he vuelto, ¿me extrañaste?')
        }, tiempo * 60000);
    },

    // PREGUNTAS (DIA ,FECHA,EXISTENCIA,ELSE BUSCAR DATO NO ENTENDIDO)

    "qué hora es": () => {
        var date = new Date;
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;

        voz('son las ' + strTime)
    },

    "quién te creo": () => {
        voz("Mi desarrolador , o mejor dicho el que robo el codigo fuente de mi existencia es Josue");
    },
    "quién es tu creador": () => {
        voz("Mi desarrolador , o mejor dicho el que robo el codigo fuente de mi existencia es Josue,jaja");
    },

    "qué eres": () => {
        voz("soy un asistente virtual, no tan capaz como alexa siri o cortana ,,pero igual me esfuerzo");
    },
    
    "cuál es tu nombre": () => {
        voz("mi nombre es Aruna");
    },

    "qué fecha es hoy": () => {
        var date = new Date;
        var mes = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
        voz("hoy es " + date.getDate() + " de "+ mes[date.getMonth()] + "del" + date.getFullYear());
    },

    "qué día es hoy": () => {
        var date = new Date;
        var dia = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
        voz("hoy es "+ dia[date.getDay()-1]);
    },

    // ORDENES

    "cuéntame un chiste": () => {
        voz("Podria hacerlo, pero mi utilidad no se reduce a eso, lo siento...");
    },

    "reiniciate": () => {
        voz("entendido");
        location.reload();
    },

    "limpia la consola": () => {
        voz("entendido");
        console.clear();
    },

    "abre *busqueda": busqueda => {
       switch(busqueda){
        case 'WhatsApp':
            voz("ok, abriendo " + busqueda +" ");
            window.open("https://web.whatsapp.com/")
            break;
        case ('anime FLV' || 'animeFLV' || 'animeflv'):
            voz("ok, abriendo " + busqueda +" ");
            window.open("https://www3.animeflv.net/")
            break;
        case 'Spotify':  
            voz("ok, abriendo " + busqueda +" ");
            window.open("https://open.spotify.com/")
            break;
        default:
            voz("ok, abriendo " + busqueda +" ");
            window.open("https://www."+ busqueda +".com")
       }
    },

    "busca en google *busqueda": busqueda => {
        voz("ok, buscando " + busqueda +" ");
        window.open("https://www.google.com/search?q=" + busqueda)
    },

    "busca en facebook *nombre": busqueda => {
        voz("ok, buscando a " + busqueda + " ");
        window.open("https://www.facebook.com/search/top?q=" + busqueda)
    },

    "busca en youtube *busqueda": busqueda => {
        voz("ok, buscando " + busqueda + " ");
        window.open("https://www.youtube.com/results?search_query=" + busqueda)
    },

    "llama al *telefono": telefono => {
        voz("ok, con gusto llamando al" + telefono);
        window.open("tel:" + telefono)
    },

    "di *frase": frase => {
        voz(frase);
    },

    "escribe *dicto": dicto =>{
        document.getElementById("text").innerHTML = dicto;
    },

    // AMABILIDAD

    "gracias": () => {
        voz("Para servirte");
    },

    "ulala": () => {
        voz('señor frances')
    },

    "Cómo estás": () => {
        voz('mejor que ayer, espero que usted tambien lo esté')
    },

    "Te presento a *nombre": nombre => {
        voz("Hola" + nombre +", mi nombre es Aruna, es un placer conocerte");
    },

    // LLAMADA A LA ACCIÓN
    
    "Aruna": () => {
        voz("aquí estoy");
    },

    "Hey": () => {
        voz("aquí estoy");
    },

    "Hola": () => {
        voz("aquí estoy");
    },

    "Me puedes ayudar": () => {
        voz("A ver, de que se trata?");
    },

    "Oye": () => {
        voz("aquí estoy");
    },

    "Oe": () => {
        voz("Que fue?");
    },
    
    "Estás ahí": () => {
        voz("aquí estoy");
    }

}

function voz(texto) {
    document.getElementById("all2").style.visibility = "hidden";
    var textoAEscuchar = texto;
    var mensaje = new SpeechSynthesisUtterance();
    mensaje.text = textoAEscuchar;
    mensaje.volume = 1;
    mensaje.rate = 0.9;
    mensaje.pitch = 1;
   //  ¡Parla!
    document.getElementById("all").style.visibility = "visible";
    setTimeout(() => {
       document.getElementById("all").style.visibility = "hidden";  
        document.getElementById("all2").style.visibility = "visible";      
    }, 4000);
    speechSynthesis.speak(mensaje);
    
}