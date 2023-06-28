const pug = require('pug');
const fs = require('fs');

// Annahme: Das Pokémon-Array ist bereits vorhanden und enthält die Daten der 20 Pokémon
const pokemonData = [{
            "Id": "001",
            "Name": "Bisasam",
            "Typ": "Pflanze/Gift",
            "Beschreibung": "Bisasam nimmt während der Entwicklung Energie aus seiner Umgebung auf. Die Knospe auf seinem Rücken wird größer und entwickelt sich zu einem Blütenstand.",
            "Größe": "0.7 m",
            "Kategorie":"Samen",
            "Gewicht": "6,9kg",
            "Fähigkeit": "Notdünger",
            "Geschlecht": "m, w",
            "Bild":"/public/images/001.png",
            "Link":"/public/html/pokemon1.html"
        },
        {
            "Id": "002",
            "Name": "Bisaknosp",
            "Typ": "Pflanze/Gift",
            "Beschreibung": "Bisaknosp besitzt einen großen Blütenstand auf seinem Rücken. In diesem Blütenstand befinden sich Pflanzen, die das Pokémon mit Nährstoffen versorgen.",
            "Größe": "1.0 m",
            "Kategorie":"Samen",
            "Gewicht": "13,0kg",
            "Fähigkeit": "Notdünger",
            "Geschlecht": "m, w",
            "Bild":"/public/images/002.png",
            "Link":"/public/html/pokemon2.html"
        },
        {
            "Id": "003",
            "Name": "Bisaflor",
            "Typ": "Pflanze/Gift",
            "Beschreibung": "Bisaflor sammelt Sonnenlicht mit seinen Blütenblättern und wandelt es in Energie um. Es ist in der Lage, einen starken Duft zu verströmen, um Feinde abzuschrecken.",
            "Größe": "2.0 m",
            "Kategorie":"Samen",
            "Gewicht": "100,0kg",
            "Fähigkeit": "Notdünger",
            "Geschlecht": "m, w",
            "Bild":"/public/images/003.png",
            "Link":"/public/html/pokemon3.html"
        },
        {
            "Id": "004",
            "Name": "Glumanda",
            "Typ": "Feuer",
            "Beschreibung": "Glumanda speichert Flammen in seinem Bauch, die als Indikator für seine Gesundheit dienen. Es ist äußerst selten in freier Wildbahn anzutreffen.",
            "Größe": "0.6 m",
            "Kategorie":"Echse",
            "Gewicht": "8,5kg",
            "Fähigkeit": "Großbrand",
            "Geschlecht": "m, w",
            "Bild":"/public/images/004.png",
            "Link":"/public/html/pokemon4.html"
        },
        {
            "Id": "005",
            "Name": "Glutexo",
            "Typ": "Feuer",
            "Beschreibung": "Glutexo hat ein starkes Feuer in seinem Inneren, das von Tag zu Tag größer wird. Es wird schnell wütend und ist ein hartnäckiger Kämpfer.",
            "Größe": "1.1 m",
            "Kategorie":"Echse",
            "Gewicht": "19,0kg",
            "Fähigkeit": "Großbrand",
            "Geschlecht": "m, w",
            "Bild":"/public/images/005.png",
            "Link":"/public/html/pokemon5.html"
        },
        {
            "Id": "006",
            "Name": "Glurak",
            "Typ": "Feuer/Flug",
            "Beschreibung": "Glurak ist ein gefährliches und beeindruckendes Pokémon. Mit seinen mächtigen Flügeln kann es Feuerbälle erzeugen, die ganze Landschaften in Brand setzen können.",
            "Größe": "1.7 m",
            "Kategorie":"Echse",
            "Gewicht": "90,5kg",
            "Fähigkeit": "Großbrand",
            "Geschlecht": "m, w",
            "Bild":"/public/images/006.png",
            "Link":"/public/html/pokemon6.html"
        },
        {
            "Id": "007",
            "Name": "Schiggy",
            "Typ": "Wasser",
            "Beschreibung": "Schiggy ist ein kleines und süßes Pokémon, das eine harte Schale trägt. Es kann in Gewässern leben und mit seinen Flossen schnell schwimmen.",
            "Größe": "0.5 m",
            "Kategorie":"Minikröte",
            "Gewicht": "9,0kg",
            "Fähigkeit": "Sturzbach",
            "Geschlecht": "m, w",
            "Bild":"/public/images/007.png",
            "Link":"/public/html/pokemon7.html"
        },
        {
            "Id": "008",
            "Name": "Schillok",
            "Typ": "Wasser",
            "Beschreibung": "Schillok ist das entwickelte Form von Schiggy. Sein Panzer hat sich vergrößert und bietet besseren Schutz. Es kann seine Schwimmfähigkeiten weiter verbessern.",
            "Größe": "1.0 m",
            "Kategorie":"Kröte",
            "Gewicht": "22,5kg",
            "Fähigkeit": "Sturzbach",
            "Geschlecht": "m, w",
            "Bild":"/public/images/008.png",
            "Link":"/public/html/pokemon8.html"
        },
        {
            "Id": "009",
            "Name": "Turtok",
            "Typ": "Wasser",
            "Beschreibung": "Turtok ist die finale Entwicklungsstufe von Schiggy. Mit seinem gewaltigen Panzer und seinen starken Schwimmfähigkeiten kann es sich selbst vor den stärksten Angriffen schützen.",
            "Größe": "1.6 m",
            "Kategorie":"Samen",
            "Gewicht": "6,9kg",
            "Fähigkeit": "Notdünger",
            "Geschlecht": "m, w",
            "Bild":"/public/images/009.png",
            "Link":"/public/html/pokemon9.html"
        },
        {
            "Id": "010",
            "Name": "Raupy",
            "Typ": "Käfer",
            "Beschreibung": "Raupy besitzt einen starken Appetit und frisst ständig Blätter. Es ist schwach und vorsichtig, sodass es bei Gefahr seinen Körper mit einem Seidenfaden schützt.",
            "Größe": "0.3 m",
            "Kategorie":"Wurm",
            "Gewicht": "2,9kg",
            "Fähigkeit": "Puderabwehr",
            "Geschlecht": "m, w",
            "Bild":"/public/images/010.png",
            "Link":"/public/html/pokemon10.html"
        },
        {
            "Id": "011",
            "Name": "Safcon",
            "Typ": "Käfer",
            "Beschreibung": "Safcon hat einen schützenden Kokon um seinen Körper gewebt. Es bleibt in diesem Kokon verborgen und entwickelt sich langsam weiter.",
            "Größe": "0.7 m",
            "Kategorie":"Kokon",
            "Gewicht": "9,9kg",
            "Fähigkeit": "Expidermis",
            "Geschlecht": "m, w",
            "Bild":"/public/images/011.png",
            "Link":"/public/html/pokemon11.html"
        },
        {
            "Id": "012",
            "Name": "Smettbo",
            "Typ": "Käfer/Flug",
            "Beschreibung": "Smettbo ist das entwickelte Form von Safcon. Es hat zarte Flügel und ist ein geschickter Flieger. Es saugt Nektar aus Blumen, um seine Kräfte wiederherzustellen.",
            "Größe": "1.1 m",
            "Kategorie":"Falter",
            "Gewicht": "32,0kg",
            "Fähigkeit": "Facettenauge",
            "Geschlecht": "m, w",
            "Bild":"/public/images/012.png",
            "Link":"/public/html/pokemon12.html"
        },
        {
            "Id": "013",
            "Name": "Hornliu",
            "Typ": "Käfer/Gift",
            "Beschreibung": "Hornliu besitzt einen giftigen Stachel auf seinem Kopf. Es nutzt seinen Stachel zum Schutz vor Feinden und zur Verteidigung.",
            "Größe": "0.3 m",
            "Kategorie":"Raupe",
            "Gewicht": "3,2kg",
            "Fähigkeit": "Puderabwehr",
            "Geschlecht": "m, w",
            "Bild":"/public/images/013.png",
            "Link":"/public/html/pokemon13.html"
        },
        {
            "Id": "014",
            "Name": "Kokuna",
            "Typ": "Käfer/Gift",
            "Beschreibung": "Kokuna hat sich in einen dicken Kokon eingewebt. Während dieser Phase findet keine Entwicklung statt, es wartet nur auf den richtigen Zeitpunkt, um sich weiterzuentwickeln.",
            "Größe": "0.6 m",
            "Kategorie":"Kokon",
            "Gewicht": "10,0kg",
            "Fähigkeit": "Expidermis",
            "Geschlecht": "m, w",
            "Bild":"/public/images/014.png",
            "Link":"/public/html/pokemon14.html"
        },
        {
            "Id": "015",
            "Name": "Bibor",
            "Typ": "Käfer/Gift",
            "Beschreibung": "Bibor ist das entwickelte Form von Hornliu. Es hat scharfe Klingen an seinen Armen und kann mit seinen Giftstacheln tödliche Angriffe durchführen.",
            "Größe": "1.0 m",
            "Kategorie":"Giftbiene",
            "Gewicht": "29,5kg",
            "Fähigkeit": "Hexaplaga",
            "Geschlecht": "m, w",
            "Bild":"/public/images/015.png",
            "Link":"/public/html/pokemon15.html"
        },
        {
            "Id": "016",
            "Name": "Taubsi",
            "Typ": "Normal/Flug",
            "Beschreibung": "Taubsi hat einen ausgezeichneten Orientierungssinn und kann immer den Weg nach Hause finden, selbst über weite Entfernungen. Es ist ein häufiges Pokémon.",
            "Größe": "0.3 m",
            "Kategorie":"Kleinvogel",
            "Gewicht": "1,8kg",
            "Fähigkeit": "Adlerauge & Taumelschritt",
            "Geschlecht": "m, w",
            "Bild":"/public/images/016.png",
            "Link":"/public/html/pokemon16.html"
        },
        {
            "Id": "017",
            "Name": "Tauboga",
            "Typ": "Normal/Flug",
            "Beschreibung": "Tauboga ist das entwickelte Form von Taubsi. Es hat eine größere Flügelspannweite und kann längere Strecken fliegen. Es gilt als treuer Begleiter.",
            "Größe": "1.2 m",
            "Kategorie":"Vogel",
            "Gewicht": "30,0kg",
            "Fähigkeit": "Adlerauge & Taumelschritt",
            "Geschlecht": "m, w",
            "Bild":"/public/images/017.png",
            "Link":"/public/html/pokemon17.html"
        },
        {
            "Id": "018",
            "Name": "Tauboss",
            "Typ": "Normal/Flug",
            "Beschreibung": "Tauboss ist die finale Entwicklungsstufe von Taubsi. Es hat einen majestätischen Flug und kann hohe Geschwindigkeiten erreichen. Es verteidigt sein Territorium energisch.",
            "Größe": "1.5 m",
            "Kategorie":"Vogel",
            "Gewicht": "39,5kg",
            "Fähigkeit": "Adlerauge & Taumelschritt",
            "Geschlecht": "m, w",
            "Bild":"/public/images/018.png",
            "Link":"/public/html/pokemon18.html"
        },
        {
            "Id": "019",
            "Name": "Rattfratz",
            "Typ": "Normal",
            "Beschreibung": "Rattfratz hat große Vorderzähne, mit denen es alles anknabbern kann. Es ist nachtaktiv und sucht in der Dunkelheit nach Nahrung.",
            "Größe": "0.3 m",
            "Kategorie":"Maus",
            "Gewicht": "3,5kg",
            "Fähigkeit": "Angsthase",
            "Geschlecht": "m, w",
            "Bild":"/public/images/019.png",
            "Link":"/public/html/pokemon19.html"
        },
        {
            "Id": "020",
            "Name": "Rattikarl",
            "Typ": "Normal",
            "Beschreibung": "Rattikarl ist das entwickelte Form von Rattfratz. Es hat scharfe Zähne und kann damit mühelos durch harte Gegenstände beißen. Es ist ein geschickter Jäger.",
            "Größe": "0.7 m",
            "Kategorie":"Maus",
            "Gewicht": "18,5kg",
            "Fähigkeit": "Angsthase",
            "Geschlecht": "m, w",
            "Bild":"/public/images/020.png",
            "Link":"/public/html/pokemon20.html"
}
]

// Schleife über die Pokémon-Daten
pokemonData.forEach((pokemon, index) => {
    // Verwende die Pug-Vorlage, um das HTML zu generieren
    const html = pug.renderFile('index.pug', { pokemon });
  
    // Speichere das generierte HTML in einer Datei
    fs.writeFileSync(`public/html/pokemon${index + 1}.html`, html);
  });
