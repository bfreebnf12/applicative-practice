 const data = {
     planets: [{
             id: 'uranus',
             name: 'Uranus',
             isPlanet: true,
             mass: { massValue: 8.68127, massExponent: 25 },
             vol: { volValue: 6.833, volExponent: 13 },
             gravity: 8.87,
             avgTemp: 76,
             moonsCount: 27,
             moons: [
                 'Ariel', 'Umbriel', 'Titania',
                 'Obéron', 'Miranda', 'Cordélia',
                 'Ophélie', 'Bianca', 'Cressida',
                 'Desdémone', 'Juliette', 'Portia',
                 'Rosalinde', 'Belinda', 'Puck',
                 'Caliban', 'Sycorax', 'Prospero',
                 'Setebos', 'Stephano', 'Trinculo',
                 'Francisco', 'Margaret', 'Ferdinand',
                 'Perdita', 'Mab', 'Cupid'
             ]
         },
         {
             id: 'neptune',
             name: 'Neptune',
             isPlanet: true,
             mass: { massValue: 1.02413, massExponent: 26 },
             vol: { volValue: 6.254, volExponent: 13 },
             gravity: 11.15,
             avgTemp: 55,
             moonsCount: 14,
             moons: [
                 'Triton', 'Néreïde',
                 'Naïade', 'Thalassa',
                 'Despina', 'Galatée',
                 'Larissa', 'Protée',
                 'Halimède', 'Psamathée',
                 'Sao', 'Laomédie',
                 'Néso', 'Hippocampe'
             ]
         },
         {
             id: 'jupiter',
             name: 'Jupiter',
             isPlanet: true,
             mass: { massValue: 1.89819, massExponent: 27 },
             vol: { volValue: 1.43128, volExponent: 15 },
             gravity: 24.79,
             avgTemp: 165,
             moonsCount: 80,
             moons: [
                 'Io', 'Europe', 'Ganymède',
                 'Callisto', 'Amalthée', 'Himalia',
                 'Élara', 'Pasiphaé', 'Sinopé',
                 'Lysithéa', 'Carmé', 'Ananké',
                 'Léda', 'Thébé', 'Adrastée',
                 'Métis', 'Callirrhoé', 'Thémisto',
                 'Mégaclité', 'Taygété', 'Chaldéné',
                 'Harpalyké', 'Kalyké', 'Iocasté',
                 'Erinomé', 'Isonoé', 'Praxidyké',
                 'Autonoé', 'Thyoné', 'Hermippé',
                 'Aitné', 'Eurydomé', 'Euanthé',
                 'Euporie', 'Orthosie', 'Spondé',
                 'Calé', 'Pasithée', 'Hégémone',
                 'Mnémé', 'Aoedé', 'Thelxinoé',
                 'Arché', 'Callichore', 'Hélicé',
                 'Carpo', 'Eukéladé', 'Cyllène',
                 'Coré', 'Hersé', 'S/2003 J 2',
                 'Euphémé', 'S/2003 J 4', 'Eiréné',
                 'S/2003 J 9', 'S/2003 J 10', 'S/2003 J 12',
                 'Philophrosyne', 'S/2003 J 16', 'S/2003 J 18',
                 'S/2003 J 19', 'S/2003 J 23', 'Dia',
                 'S/2010 J 1', 'S/2010 J 2', 'S/2011 J 1',
                 'S/2011 J 2', 'S/2017 J 1', 'S/2016 J 1',
                 'Valétudo', 'S/2017 J 2', 'S/2017 J 3',
                 'Pandia', 'S/2017 J 5', 'S/2017 J 6',
                 'S/2017 J 7', 'S/2017 J 8', 'S/2017 J 9',
                 'Ersa', 'S/2003 J 24'
             ]
         },
         {
             id: 'mars',
             name: 'Mars',
             isPlanet: true,
             mass: { massValue: 6.41712, massExponent: 23 },
             vol: { volValue: 1.6318, volExponent: 11 },
             gravity: 3.71,
             avgTemp: 210,
             moonsCount: 2,
             moons: ['Phobos', 'Deïmos']
         },
         {
             id: 'mercure',
             name: 'Mercure',
             isPlanet: true,
             mass: { massValue: 3.30114, massExponent: 23 },
             vol: { volValue: 6.083, volExponent: 10 },
             gravity: 3.7,
             avgTemp: 440
         },
         {
             id: 'saturne',
             name: 'Saturne',
             isPlanet: true,
             mass: { massValue: 5.68336, massExponent: 26 },
             vol: { volValue: 8.2713, volExponent: 14 },
             gravity: 10.44,
             avgTemp: 134,
             moonsCount: 82,
             moons: [
                 'Mimas', 'Encelade', 'Téthys',
                 'Dioné', 'Rhéa', 'Titan',
                 'Hypérion', 'Japet', 'Phœbé',
                 'Janus', 'Epiméthée', 'Hélène',
                 'Télesto', 'Calypso', 'Atlas',
                 'Prométhée', 'Pandore', 'Pan',
                 'Ymir', 'Paaliaq', 'Tarvos',
                 'Ijiraq', 'Suttungr', 'Kiviuq',
                 'Mundilfari', 'Albiorix', 'Skathi',
                 'Erriapo', 'Siarnaq', 'Thrymr',
                 'Narvi', 'Méthone', 'Pallène',
                 'Pollux', 'Daphnis', 'Aegir',
                 'Bebhionn', 'Bergelmir', 'Bestla',
                 'Farbauti', 'Fenrir', 'Fornjot',
                 'Hati', 'Hyrrokkin', 'Kari',
                 'Loge', 'Skoll', 'Surtur',
                 'Anthé', 'Jarnsaxa', 'Greip',
                 'Tarqeq', 'Égéon', 'S/2004 S 7',
                 'S/2004 S 12', 'S/2004 S 13', 'S/2004 S 17',
                 'S/2006 S 1', 'S/2006 S 3', 'S/2007 S 2',
                 'S/2007 S 3', 'S/2009 S 1', 'S/2004 S 22',
                 'S/2004 S 21', 'S/2004 S 20', 'S/2004 S 23',
                 'S/2004 S 24', 'S/2004 S 25', 'S/2004 S 26',
                 'S/2004 S 27', 'S/2004 S 28', 'S/2004 S 29',
                 'S/2004 S 30', 'S/2004 S 31', 'S/2004 S 32',
                 'S/2004 S 33', 'S/2004 S 34', 'S/2004 S 35',
                 'S/2004 S 36', 'S/2004 S 37', 'S/2004 S 38',
                 'S/2004 S 39'
             ]
         },
         {
             id: 'earth',
             name: 'Earth',
             isPlanet: true,
             mass: { massValue: 5.97237, massExponent: 24 },
             vol: { volValue: 1.08321, volExponent: 12 },
             gravity: 9.8,
             avgTemp: 288,
             moonsCount: 1,
             moons: ['La Lune']
         },
         {
             id: 'venus',
             name: 'Vénus',
             isPlanet: true,
             mass: { massValue: 4.86747, massExponent: 24 },
             vol: { volValue: 9.2843, volExponent: 11 },
             gravity: 8.87,
             avgTemp: 737
         }
     ],

     asteroids: [
         { name: '1 Ceres', discoveryYear: 1801, orbitalPeriod: 1681.63 },
         { name: '6 Hebe', discoveryYear: 1847, orbitalPeriod: 1380.373 },
         { name: '47171 Lempo', discoveryYear: 1999, orbitalPeriod: 91678 },
         { name: '762 Pulcova', discoveryYear: 1913, orbitalPeriod: 2049.475 },
         { name: '4179 Toutatis', discoveryYear: 1989, orbitalPeriod: 1463.14 },
         { name: '50000 Quaoar', discoveryYear: 2002, orbitalPeriod: 104347.575 },
         { name: '2867 Šteins', discoveryYear: 1969, orbitalPeriod: 1327.3582 },
         { name: '5 Astraea', discoveryYear: 1845, orbitalPeriod: 1507.279 },
         { name: '5145 Pholus', discoveryYear: 1992, orbitalPeriod: 33711 },
         { name: '4769 Castalia', discoveryYear: 1989, orbitalPeriod: 400.428 },
         { name: '624 Hektor', discoveryYear: 1907, orbitalPeriod: 4358.521 },
         { name: '216 Kleopatra', discoveryYear: 1880, orbitalPeriod: 1707 },
         { name: '3753 Cruithne', discoveryYear: 1986, orbitalPeriod: 364.019 },
         { name: '3 Juno', discoveryYear: 1804, orbitalPeriod: 1593.926 },
         { name: '10 Hygiea', discoveryYear: 1849, orbitalPeriod: 2029.776 },
         { name: '21 Lutetia', discoveryYear: 1852, orbitalPeriod: 1387.902 },
         { name: '253 Mathilde', discoveryYear: 1885, orbitalPeriod: 1572.491 },
         { name: '7 Iris', discoveryYear: 1847, orbitalPeriod: 1346.628 },
         { name: '433 Eros', discoveryYear: 1898, orbitalPeriod: 643.219 },
         { name: '90377 Sedna', discoveryYear: 2003, orbitalPeriod: 4154395 },
         { name: '10199 Chariklo', discoveryYear: 1997, orbitalPeriod: 23084 },
         { name: '87 Sylvia', discoveryYear: 1866, orbitalPeriod: 2381.639 },
         { name: '90482 Orcus', discoveryYear: 2004, orbitalPeriod: 89606 },
         { name: '5335 Damocles', discoveryYear: 1991, orbitalPeriod: 14880.9 },
         { name: '8 Flora', discoveryYear: 1847, orbitalPeriod: 1192.956 },
         { name: '2060 Chiron', discoveryYear: 1977, orbitalPeriod: 18429 },
         { name: '5261 Eureka', discoveryYear: 1990, orbitalPeriod: 686.829 },
         { name: '588 Achilles', discoveryYear: 1906, orbitalPeriod: 4320.803 },
         { name: '28978 Ixion', discoveryYear: 2001, orbitalPeriod: 90717 },
         { name: '9 Metis', discoveryYear: 1848, orbitalPeriod: 1346.815 },
         { name: '7066 Nessus', discoveryYear: 1993, orbitalPeriod: 44561 },
         { name: '25143 Itokawa', discoveryYear: 1998, orbitalPeriod: 556.38 },
         { name: '10370 Hylonome', discoveryYear: 1995, orbitalPeriod: 44561 },
         { name: '45 Eugenia', discoveryYear: 1857, orbitalPeriod: 1638.654 },
         { name: '(308933) 2006 SQ372', discoveryYear: 2006, orbitalPeriod: 11800000 },
         { name: '2 Pallas', discoveryYear: 1802, orbitalPeriod: 1685.927 },
         { name: '8405 Asbolus', discoveryYear: 1995, orbitalPeriod: 27796 },
         { name: '20000 Varuna', discoveryYear: 2000, orbitalPeriod: 103440 },
         { name: '4 Vesta', discoveryYear: 1807, orbitalPeriod: 1325.886 },
         { name: '243 Ida', discoveryYear: 1884, orbitalPeriod: 1767.564 },
         { name: '951 Gaspra', discoveryYear: 1916, orbitalPeriod: 1199.479 },
         { name: '15760 Albion', discoveryYear: 1992, orbitalPeriod: 105757 },
         { name: 'Arrokoth', discoveryYear: 2014, orbitalPeriod: 107847 },
         { name: '101955 Bennu', discoveryYear: 1999, orbitalPeriod: 436.604 }
     ],
 };


 // SPACE DATA EXERCISE 1
 // Return an array of all Planets' names
 // Return example: ['name1', 'name2', ... , 'nameN']

 function getPlanetNames(data) {
     // Your code goes here...
     const planets = ['Uranus', 'Neptune', 'Jupiter', 'Mars', 'Mercure', 'Saturne', 'Earth', 'Vénus'];

     const names = planets.map((planets) => planets.name).length;


     console.log(planets);
     return planets[0].name;
 }
 console.log(getPlanetNames(data));


 // === TEST YOURSELF ===
 // Once you're finished run the test with "npm run test-1"
 // If the test has all tests passed, switch to the next exercise file
 // If any of the tests fails, refactor the code and run the test command after you've fixed the function