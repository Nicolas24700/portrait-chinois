document.addEventListener('DOMContentLoaded', function () {
    fetch('analogies.json').then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            generation(data);
        })
    })
    numCase = 0;
    function generation(data) {
        data.forEach(function afficheNote(analogie) {
            var debutphrase = "Si j'étais " + analogie["analogie"] + "...";
            var finphrase = "je serais " + analogie["valeursAnalogie"];
            var sectionId = numCase;
            var pclass = 'p' + numCase;

            var image = "<img src='" + analogie["url"] + "' alt='' class='img" + numCase + "'>";

            document.querySelector('.liste-analogies').innerHTML += "<section id='" + sectionId + "'>" + image + "<h2>" + debutphrase + "</h2>" + "<br>" + "<h3>" + finphrase + "</h3>" + "<p class='" + pclass + "'>" + analogie["texteExplicatif"] + "</p>" + "<p class='" + pclass + "'>" + "↓" + "</p>" + "</section>";
            numCase = numCase + 1
        })
    };
    // créer par une Intelligence Artificielle et modifié par mes soins
    var formulaire = document.getElementById('formulaire');
    formulaire.addEventListener('submit', function (event) {
        event.preventDefault();
        var iAnalogie = document.getElementById('analogie');
        var iValeurAnalogie = document.getElementById('valeurAnalogie');
        var iArgumentation = document.getElementById('argumentationForm');
        var LienImage = document.getElementById('imgLink');

        var vAnalogie = iAnalogie.value
        var vValeurAnalogie = iValeurAnalogie.value
        var vArgumentation = iArgumentation.value
        var vImg = LienImage.value

        iAnalogie.value = ''
        iValeurAnalogie.value = ''
        iArgumentation.value = ''
        LienImage.value = ''
        fetch('https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&?analogie=' + vAnalogie + '&?valeurAnalogie=' + vValeurAnalogie + '&?argumentationForm=' + vArgumentation + '&?imgLink=' + vImg, {
            method: 'GET',
        })
            .then((response) => {
                console.log(response);
            })
    })


});