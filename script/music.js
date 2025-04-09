var repeat = false;
var randomMode = false
var pause = true;
var usuarios = [];
var playList = [];
var currentIndex = 0;
const user = document.getElementById("nombre");
const comentario = document.getElementById("comentarios");

//play list de canciones
var jsonPlayList = [
    {

        "id": 0,
        "titulo":"Wake Up in the Sky",
        "cantante":"Gucci Mane, Bruno Mars, Kodak Black",
        "path":"http://127.0.0.1:5500/bucket/Gucci_Mane_Bruno_Mars_Kodak_Black_-_Wake_Up_In_The_Sky_Official_Audio_[_YouConvert.net_].mp3",
        "port":"http://127.0.0.1:5500/bucket/wake_up.jfif"
    
    },
    {
        
        "id": 1,
        "titulo":"Civilian",
        "cantante":"Wye Oak",
        "path":"http://127.0.0.1:5500/bucket/Wye_Oak_Civilian_[_YouConvert.net_].mp3",
        "port":"http://127.0.0.1:5500/bucket/civilian.jfif"
    
    },
    {
    
        "id": 2,
        "titulo":"Too Manny Nights (feat.Don Toliver & with Future)",
        "cantante":"Metro Boomin, Future, Don Toliver",
        "path":"http://127.0.0.1:5500/bucket/Metro_Boomin_Future_-_Too_Many_Nights_Visualizer_ft_Don_Toliver_[_YouConvert.net_].mp3",
        "port":"http://127.0.0.1:5500/bucket/heroes.jfif"
    
    },
    {
    
        "id": 3,
        "titulo":"All Star",
        "cantante":"Smash Mouth",
        "path":"http://127.0.0.1:5500/bucket/Smash_Mouth_-_All_Star_Official_Music_Video_[_YouConvert.net_].mp3",
        "port":"http://127.0.0.1:5500/bucket/all_star.jfif"
    
    },
    {
    
        "id": 4,
        "titulo":"My Way (2008 Remastered)",
        "cantante":"Frank Sinatra",
        "path":"http://127.0.0.1:5500/bucket/My_Way_2008_Remastered_[_YouConvert.net_].mp3",
        "port":"http://127.0.0.1:5500/bucket/my_way.jfif"
    
    },
    {
    
        "id": 5,
        "titulo":"The Housebuilding Song",
        "cantante":"David Ferguson",
        "path":"http://127.0.0.1:5500/bucket/The_Housebuilding_Song_[_YouConvert.net_].mp3",
        "port":"http://127.0.0.1:5500/bucket/housebuilding.jfif"
    
    },
    {
    
        "id": 6,
        "titulo":"My Way of Life",
        "cantante":"Frank Sinatra",
        "path":"http://127.0.0.1:5500/bucket/My_Way_Of_Life_[_YouConvert.net_].mp3",
        "port":"http://127.0.0.1:5500/bucket/my_way_of_life.jfif"
    
    },
    {
    
        "id": 7,
        "titulo":"Lost on You",
        "cantante":"LP",
        "path":"http://127.0.0.1:5500/bucket/LP_-_Lost_On_You_Official_Music_Video_[_YouConvert.net_].mp3",
        "port":"http://127.0.0.1:5500/bucket/lost.jfif"
    
    },
    {
    
        "id": 8,
        "titulo":"AT THE PARTY(feat.Pharrell Williams & Travis Scott)",
        "cantante":"Kid Cudi, Pharrell Williams, Travis Scott",
        "path":"http://127.0.0.1:5500/bucket/Kid_Cudi_-_At_The_Party_ft_Pharrell_Travis_Scott_Official_Audio_[_YouConvert.net_].mp3",
        "port":"http://127.0.0.1:5500/bucket/kid_cudi.jfif"
    
    },
    {
    
        "id": 9,
        "titulo":"family ties (with Kendrick Lamar)",
        "cantante":"Baby Keem, Kendrick Lamar",
        "path":"http://127.0.0.1:5500/bucket/Baby_Keem_Kendrick_Lamar_-_family_ties_Lyrics_[_YouConvert.net_].mp3",
        "port":"http://127.0.0.1:5500/bucket/family_ties.jfif"
    
    },
    {
    
        "id": 10,
        "titulo":"MY EYES",
        "cantante":"Travis Scott",
        "path":"http://127.0.0.1:5500/bucket/Travis_Scott_-_MY_EYES_Official_Audio-(youconvert.net).mp3",
        "port":"http://127.0.0.1:5500/bucket/my_eyes.jfif"
    
    },
    {
    
        "id": 11,
        "titulo":"Amarte Es Un Placer",
        "cantante":"Luis Miguel",
        "path":"http://127.0.0.1:5500/bucket/Luis_Miguel_-_Amarte_Es_Un_Placer_Video_Con_Letra-(youconvert.net).mp3",
        "port":"http://127.0.0.1:5500/bucket/amarte.jfif"
    
    },
    {
    
        "id": 12,
        "titulo":"Vigilante Shit",
        "cantante":"Taylor Swift",
        "path":"http://127.0.0.1:5500/bucket/Taylor_Swift_-_Vigilante_Shit_Official_Lyric_Video-(youconvert.net).mp3",
        "port":"http://127.0.0.1:5500/bucket/vigilante.jfif"
    
    },
    {
    
        "id": 13,
        "titulo":"I Wanna Be Yours",
        "cantante":"Artic Monkeys",
        "path":"http://127.0.0.1:5500/bucket/I_Wanna_Be_Yours-(youconvert.net).mp3",
        "port":"http://127.0.0.1:5500/bucket/be_yours.jfif"
    
    },
    {
    
        "id": 14,
        "titulo":"Take Us Back",
        "cantante":"Alela Diane",
        "path":"http://127.0.0.1:5500/bucket/Take_Us_Back_-_Alela_Diane_Lyrics_Letra_en_espa_ol-(youconvert.net).mp3",
        "port":"http://127.0.0.1:5500/bucket/take_us.jfif"
    
    },
    {
    
        "id": 15,
        "titulo":"Bye",
        "cantante":"Ariana Grande",
        "path":"http://127.0.0.1:5500/bucket/Ariana_Grande_-_bye_lyric_visualizer-(youconvert.net).mp3",
        "port":"http://127.0.0.1:5500/bucket/bye.jfif"
    
    },
    {
    
        "id": 16,
        "titulo":"Bye Bye Bye",
        "cantante":"NSYNC",
        "path":"http://127.0.0.1:5500/bucket/NSYNC_-_Bye_Bye_Bye_Official_Video-(youconvert.net).mp3",
        "port":"http://127.0.0.1:5500/bucket/bye_bye.jfif"
    
    },
    {
    
        "id": 17,
        "titulo":"rockstar (feat. 21 Savage)",
        "cantante":"Post Malone, 21 Savage",
        "path":"http://127.0.0.1:5500/bucket/Post_Malone_ft_21_Savage_-_rockstar_Official_Music_Video-(youconvert.net).mp3",
        "port":"http://127.0.0.1:5500/bucket/malone.jfif"
    
    },
    {
    
        "id": 18,
        "titulo":"Goddess",
        "cantante":"Laufey",
        "path":"http://127.0.0.1:5500/bucket/laufey_-_Goddess_Official_Music_Video-(youconvert.net).mp3",
        "port":"http://127.0.0.1:5500/bucket/laufey.jfif"
    
    },
    {
    
        "id": 19,
        "titulo":"Young And Beutiful",
        "cantante":"Lana Del Rey",
        "path":"http://127.0.0.1:5500/bucket/Lana_Del_Rey_-_Young_and_beautiful-(youconvert.net).mp3",
        "port":"http://127.0.0.1:5500/bucket/young.jfif"
    
    },
    {
    
        "id": 20,
        "titulo":"Cardigan",
        "cantante":"Taylor Swift",
        "path":"http://127.0.0.1:5500/bucket/Taylor_Swift_-_cardigan-(youconvert.net).mp3",
        "port":"http://127.0.0.1:5500/bucket/cardi.jfif"
    
    },
    {
    
        "id": 21,
        "titulo":"Closer to You(feat. Major Lazer)",
        "cantante":"Jung Kook, Major Lazer",
        "path":"http://127.0.0.1:5500/bucket/Jung_Kook_feat_Major_Lazer_-_Closer_to_You_Official_Audio-(youconvert.net).mp3",
        "port":"http://127.0.0.1:5500/bucket/closer.jfif"
    
    },
    {
    
        "id": 22,
        "titulo":"Popular(with Playboi Carti & Madonna)",
        "cantante":"The Weeknd, Playboi Carti, Madonna",
        "path":"http://127.0.0.1:5500/bucket/The_Weeknd_Madonna_Playboi_Carti_-_Popular_Official_Music_Video-(youconvert.net).mp3",
        "port":"http://127.0.0.1:5500/bucket/popular.jfif"
    
    },
    {
    
        "id": 23,
        "titulo":"SomeWhere Only We Know",
        "cantante":"Keane",
        "path":"http://127.0.0.1:5500/bucket/Keane_-_Somewhere_Only_We_Know_Official_Music_Video-(youconvert.net).mp3",
        "port":"http://127.0.0.1:5500/bucket/somewhere.jfif"
    
    },
    {
    
        "id": 24,
        "titulo":"Bloody Mary",
        "cantante":"Lady Gaga",
        "path":"http://127.0.0.1:5500/bucket/Lady_Gaga_-_Bloody_Mary_Official_Audio-(youconvert.net).mp3",
        "port":"http://127.0.0.1:5500/bucket/gaga.jfif"
    
    },
    {
    
        "id": 25,
        "titulo":"Careless Whisper",
        "cantante":"George Michael",
        "path":"http://127.0.0.1:5500/bucket/George_Michael_-_Careless_Whisper_Official_Video_[_YouConvert.net_].mp3",
        "port":"http://127.0.0.1:5500/bucket/careless.jfif"
    
    },
    {
    
        "id": 26,
        "titulo":"Chit Chat",
        "cantante":"Beach Weather",
        "path":"http://127.0.0.1:5500/bucket/Beach_Weather_-_Chit_Chat-(youconvert.net).mp3",
        "port":"http://127.0.0.1:5500/bucket/chit.jfif"
    
    },
    {
    
        "id": 27,
        "titulo":"Until I Found You (with Em Beihold)",
        "cantante":"Stephen Sanchez, Em Beihold",
        "path":"http://127.0.0.1:5500/bucket/Stephen_Sanchez_Em_Beihold_-_Until_I_Found_You_Sub_Espa_ol_Lyrics-(youconvert.net).mp3",
        "port":"http://127.0.0.1:5500/bucket/until.jfif"
    
    },
    {
    
        "id": 28,
        "titulo":"From Now On",
        "cantante":"Hugh Jackman, The Greatest Showman",
        "path":"http://127.0.0.1:5500/bucket/The_Greatest_Showman_Cast_-_From_Now_On_Official_Audio_[_YouConvert.net_].mp3",
        "port":"http://127.0.0.1:5500/bucket/hugh.jfif"
    
    },
    {
    
        "id": 29,
        "titulo":"Better Now",
        "cantante":"Post Malone",
        "path":"http://127.0.0.1:5500/bucket/Post_Malone_-_Better_Now-(youconvert.net).mp3",
        "port":"http://127.0.0.1:5500/bucket/malone.jfif"
    
    },
    {
    
        "id": 30,
        "titulo":"Heaven",
        "cantante":"Niall Horan",
        "path":"http://127.0.0.1:5500/bucket/Niall_Horan_-_Heaven_Official_Video-(youconvert.net).mp3",
        "port":"http://127.0.0.1:5500/bucket/heaven.jfif"
    
    },
    {
    
        "id": 31,
        "titulo":"Breakfast",
        "cantante":"Dove Cameron",
        "path":"http://127.0.0.1:5500/bucket/Dove_Cameron_-_Breakfast_Official_Video-(youconvert.net).mp3",
        "port":"http://127.0.0.1:5500/bucket/dove.jfif"
    
    },
    {
    
        "id": 32,
        "titulo":"Fine Line",
        "cantante":"Harry Styles",
        "path":"http://127.0.0.1:5500/bucket/Harry_Styles_-_Fine_Line_Official_Audio-(youconvert.net).mp3",
        "port":"http://127.0.0.1:5500/bucket/fine.jfif"
    
    },
    {
    
        "id": 33,
        "titulo": "Can I Call You Tonight",
        "cantante":"Dayglow",
        "path":"http://127.0.0.1:5500/bucket/Dayglow_-_Can_I_Call_You_Tonight_Official_Video-(youconvert.net).mp3",
        "port":"http://127.0.0.1:5500/bucket/can_i.jfif"
    
    },
    {
    
        "id": 34,
        "titulo":"Sex, Drugs, Etc",
        "cantante":"Beach Weather",
        "path":"http://127.0.0.1:5500/bucket/Beach_Weather_-_Sex_Drugs_Etc_Official_Video-(youconvert.net).mp3",
        "port":"http://127.0.0.1:5500/bucket/chit.jfif"
    
    },
    {
    
        "id": 35,
        "titulo":"What Is Love-7 Mix",
        "cantante":"Haddaway",
        "path":"http://127.0.0.1:5500/bucket/Haddaway_-_What_Is_Love_7_Mix-(youconvert.net).mp3",
        "port":"http://127.0.0.1:5500/bucket/love.jfif"
    
    },
    {
    
        "id": 36,
        "titulo":"Judas",
        "cantante":"Lady Gaga",
        "path":"http://127.0.0.1:5500/bucket/Lady_Gaga_-_Judas_Official_Music_Video_[_YouConvert.net_].mp3",
        "port":"http://127.0.0.1:5500/bucket/gaga.jfif"
    
    },
    {
    
        "id": 37,
        "titulo":"The Night We Met",
        "cantante":"Lord Huron",
        "path":"http://127.0.0.1:5500/bucket/Lord_Huron_-_The_Night_We_Met_Official_Audio-(youconvert.net).mp3",
        "port":"http://127.0.0.1:5500/bucket/night.jfif"
    
    },
    {
    
        "id": 38,
        "titulo":"Daylight",
        "cantante":"David Kushner",
        "path":"http://127.0.0.1:5500/bucket/David_Kushner_-_Daylight_Official_Music_Video-(youconvert.net).mp3",
        "port":"http://127.0.0.1:5500/bucket/daylight.jfif"
    
    },
    {
    
        "id": 39,
        "titulo":"Only You",
        "cantante":"The Platters",
        "path":"http://127.0.0.1:5500/bucket/The_Platters_-_Only_You_Video_Letra-(youconvert.net).mp3",
        "port":"http://127.0.0.1:5500/bucket/only_you.jfif"
    
    },
    {
    
        "id": 40,
        "titulo":"Trance (with Travis Scott & Young Thug)",
        "cantante":"Metro Boomin, Travis Scott, Young Thug",
        "path":"http://127.0.0.1:5500/bucket/Metro_Boomin_Travis_Scott_Young_Thug_-_Trance_Visualizer-(youconvert.net).mp3",
        "port":"http://127.0.0.1:5500/bucket/heroes.jfif"
    
    },
    {
    
        "id": 41,
        "titulo":"Lovesick Girls",
        "cantante":"BLACKPINK",
        "path":"http://127.0.0.1:5500/bucket/BLACKPINK_-_Lovesick_Girls_M_V-(youconvert.net).mp3",
        "port":"http://127.0.0.1:5500/bucket/black.jfif"
    
    }    

];

playList.push(jsonPlayList);
console.log(playList.length);

//mostrar la lista de canciones
function PlayList() {
     var output = "";
    var data = jsonPlayList;

    for (var i in data) {
        console.log(data[i])

        output += "<tr>"+
                "<td>"+
                "<button class='btnMusic' id='btn" + data[i].id + "' onclick='showOptions(" + data[i].id + "); playMusic(" + JSON.stringify(data[i]) + ")'>" + 
                //imagen que se muestra con el album de la cancion en el boton para tocar
                "<img src='" + data[i].port + "' alt='" + data[i].titulo + "' width='50' height='50'>" + 
                data[i].titulo + "</button>"+
                "</td>"+
            "</tr>";
    }

    document.getElementById("tbody").innerHTML = output;
}

//funcion para mostrar las opciones de la cancion que se este reproduciendo junto su imagen
function showOptions(id) {
    let optionElement = document.getElementById("option" + id);
    console.log(optionElement);
    if (optionElement) {
      optionElement.style.display = "block";
    }
}

//funcion para ocultar las opciones de la cancion que se omitio o se termino 
function hideOptions(id) {
    
    let optionElement = document.getElementById("option" + id);
    if (optionElement) {
      optionElement.style.display = "none";
    }
  }

//funcion para tocar las canciones
function playMusic(audio) {
    
    var player = document.getElementById("player");

    document.getElementById("ti").innerHTML = audio.titulo;
    document.getElementById("ar").innerHTML = audio.cantante;
    document.getElementById("imagen").src = audio.port;
    
    //para apagar el modo aleatorio
    randomMode = false;
    player.src = audio.path;
    player.play();

    //ocultar la cancion que se termino
    hideOptions(currentIndex);

    //variable que usando una arrow function encuentra la cancion que se esta reproduciendo actualmente
    var currentMusic = jsonPlayList.find(song => song.path === player.src);
    // se actualiza el valor del indice de la cancion para determinar la que sigue en la lista
    currentIndex = jsonPlayList.indexOf(currentMusic);
    //mostrar la cancion que se esta reproduciendo
  showOptions(currentIndex);

  //mostrar los comentarios de la cancion actual
  mostrarComentarios(currentMusic.id);

    //funcion que al terminar una cancion determine si empezar la siguiente o repetir la actual
    player.onended = function() {
        //variable para determinar la cancion que se esta reproduciendo
        let repeater = document.getElementById("player");
        let currentIndex = jsonPlayList.indexOf(currentMusic);
        //ocultar la cancion actual
        hideOptions(currentIndex);
        let nextIndex = currentIndex + 1;
        //si la funcion repeatMusic se acciona repeat pasa a ser true dando a la cancion tener que repetirse 
        if (repeat){

            //se repite la cancion
            repeater.play();

        }
        //condicion para que si repetir es falso y la siguiente cancion se encuentra en los parametros del json se reproduzca
        else if (!repeat && nextIndex < jsonPlayList.length) {
            let nextMusic = jsonPlayList[nextIndex];
            playMusic(nextMusic);
            showOptions(nextIndex);
        }
        //condicion para que si repetir es falso y la siguiente cancion esta fuera de los parametros del json pase a la primera cancion 
        else if (!repeat && nextIndex === jsonPlayList.length) {
            nextIndex = 0;
            let nextMusic = jsonPlayList[nextIndex];
            playMusic(nextMusic);
            showOptions(nextIndex);
        }
    };

}
  //funcion para pausar y reaundar la cancion actual
function stopMusic(){

    var stopper = document.getElementById("player");

    if(pause){

        stopper.pause();
        pause = false;
    }
    else{

        stopper.play();
        pause = true;

    }

}
//funcion para repetir la cancion actual "n" cantidad de veces
function repeatMusic(){

    if(repeat){

        repeat = false;

    }
    else {

        repeat = true;

    }
    

}

//arreglo de objetos para almacenar los comentarios
var comentariosPorCancion = [{}];

//funcion para almacenar los comentarios
function comentarios(audio){
    const name = user.value; 
    const comento = comentario.value;
    const fecha = new Date();
  
    //creamos un objeto para el comentario
    var comentarioObj = {
      "user": name,
      "comment": comento,
      "date": fecha.toLocaleString()
    };
  
    //si no existe un arreglo de comentarios para la canción actual lo creamos
    if (!comentariosPorCancion[currentIndex]) {
      comentariosPorCancion[currentIndex] = [];
    }
  
    comentariosPorCancion[currentIndex].push(comentarioObj);

    mostrarComentarios(currentIndex);
  
    document.getElementById("nombre").value = "";
    document.getElementById("comentarios").value = "";
  }
  
  //funcion para mostrar los comentarios en base a la id de la cancion asignado en el json
  function mostrarComentarios(idCancion){
    var commentsHtml = "";
    //si la cancion existe y tiene comentarios procede a hacer un for para mostrar todos los comentarios de la cancion
    if (comentariosPorCancion[idCancion]) {
      for (var i = 0; i < comentariosPorCancion[idCancion].length; i++) {
        commentsHtml += "<p>" + comentariosPorCancion[idCancion][i].user + " : " + comentariosPorCancion[idCancion][i].comment + "<br />" + comentariosPorCancion[idCancion][i].date + "</p>";
      }
    }
    document.getElementById("comment").innerHTML = commentsHtml;
  }

//funcion para pasar presionando el boton de siguiente cancion para ir a la siguiente cancion
function nextMusic() {
    //determina cual es la cancion actual
    let currentMusic = jsonPlayList.find(song => song.path === player.src);
    //se obtiene su index
    let currentIndex = jsonPlayList.indexOf(currentMusic);
    //se oculta la imagen y opciones de la cancion actual
    hideOptions(currentIndex);
    //si el modo aleatorio esta activo la siguiente cancion sera aleatoria
    if(randomMode){

        //funcion del modo aleatorio
        random();

    }
    else{
        //se determina el siguiente index
        let nextIndex = currentIndex + 1;
        //si el indice de la cancion no se encuentra en los parametros del json pasa a la primera cancion
        if (nextIndex >= jsonPlayList.length) {
          nextIndex = 0;
        }
        //determina la ruta de la siguiente cancion
        let nextMusic = jsonPlayList[nextIndex];
        //toca la siguiente cancion
        playMusic(nextMusic);
        //muestra la imagen de la siguiente cancion junto sus opciones
        showOptions(nextIndex);

    }
  }
  
  //funcion para devolverse a la cancio anterior
  function previusMusic() {
    //determina la cancion actual 
    let currentMusic = jsonPlayList.find(song => song.path === player.src);
    //ubica su index usando indexOf
    let currentIndex = jsonPlayList.indexOf(currentMusic);
    //se oculta las opciones de la cancion actual
    hideOptions(currentIndex);
    //se determina el indice de la cancion anterior
    let previusIndex = currentIndex - 1;
    showOptions(previusIndex);
    //condicion si la canion es de indice 0 (la primera) pase a la ultima cancion
    if (previusIndex < 0) {
      previusIndex = jsonPlayList.length - 1;
    }
    let previusMusic = jsonPlayList[previusIndex];
    playMusic(previusMusic);
  }
  //funcion del modo aleatorio
  function random() {

    var player = document.getElementById("player");
    //utilizando math.floor(redondea el valor al numero entero mas cercano) y math.random(saca un numero aleatorio ) para tocar una cancion de manera aleatoria
    const randomIndex = Math.floor(Math.random() * jsonPlayList.length);
    const randomSong = jsonPlayList[randomIndex];
    playMusic(randomSong);
    //si la canion termina la siguiente sera aleatoria
    player.onended = function() {
        random();
      };
      //se queda la condicion aleatoria
      randomMode = true;
  }
  //funcion para que la lista empiece a tocarse desde la primera cancion
  function playSong(){

    let firstIndex = 0;
    let firstMusic = jsonPlayList[firstIndex];
    playMusic(firstMusic);
    //para apagar el modo aleatorio
    randomMode = false;

  }