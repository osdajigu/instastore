const app = require('../app.js');

const storedb = app.storedb;
const mongoose = app.mongoose;

var storeSchema = new mongoose.Schema({
    id_company: String,
    stores: [
        {
            formatted_address: String,
            latitude: Number,
            longitude: Number,
            name: String,
            time_open: Number,
            time_close: Number
        }
    ]
    
});
var Store = storedb.model('Store', storeSchema);

module.exports.storeModel = Store;
module.exports.fillDatabase = function () {
    storedb.dropCollection('stores');

    stores.forEach((element, index) => {
        var store = new Store(element);
        store.save();
    });
}

var stores = [
    {
        id_company: "Soriana",
        stores: [
            {
                "formatted_address": "Av. Eugenio Garza Sada Sur 699, Contry, 64860 Monterrey, N.L., Mexico",
                "latitude": 25.6390802,
                "longitude": -100.2826874,
                "name": "Soriana Híper",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "001, Carr Nacional 500B, Sin Nombre de Col 50, 64984 Monterrey, N.L., Mexico",
                "latitude": 25.5761772,
                "longitude": -100.2484462,
                "name": "Soriana Plaza Serena",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Av Abraham Lincoln s/n, Mitras Nte., 64320 Monterrey, N.L., Mexico",
                "latitude": 25.7148938,
                "longitude": -100.3483878,
                "name": "Soriana Híper",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Av. Los Angeles 1732, Sin Nombre de Col 21, 64510 Monterrey, N.L., Mexico",
                "latitude": 25.7074453,
                "longitude": -100.2852656,
                "name": "Soriana Híper - Felix U Gomez",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Av. Félix U. Gómez 4100, Sin Nombre de Col 21, 64510 Monterrey, N.L., Mexico",
                "latitude": 25.707073,
                "longitude": -100.2842764,
                "name": "Soriana Felix",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Av Abraham Lincoln 4001, 64461 Monterrey, N.L., Mexico",
                "latitude": 25.7629077,
                "longitude": -100.410068,
                "name": "Soriana Híper Patio Lincoln",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Blvd. Rogelio Cantú Gómez 900, Colinas de San Jerónimo, 64630 Monterrey, N.L., Mexico",
                "latitude": 25.6942145,
                "longitude": -100.3794982,
                "name": "Soriana Híper San Jeronimo",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Carr Nacional 7877, La Estanzuela, 64988 Monterrey, N.L., Mexico",
                "latitude": 25.5865172,
                "longitude": -100.2565722,
                "name": "Soriana Híper Estanzuela",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Paseo de los Descubridores S/N, Campanario Cumbres, 64610 Monterrey, N.L., Mexico",
                "latitude": 25.7204639,
                "longitude": -100.3816563,
                "name": "Soriana Súper",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Av. Eugenio Garza Sada 699, Residencial La Florida, 64000 Monterrey, N.L., Mexico",
                "latitude": 25.6605384,
                "longitude": -100.2963741,
                "name": "Soriana Híper - Garza Sada",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Av Insurgentes 1600, San Jeronimo, 64630 Monterrey, N.L., Mexico",
                "latitude": 25.6803188,
                "longitude": -100.3648754,
                "name": "Soriana Súper - Insurgentes",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Av. Cristóbal Colón 790, Industrial, 64000 Monterrey, N.L., Mexico",
                "latitude": 25.6877077,
                "longitude": -100.3248233,
                "name": "Soriana Híper",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Calle Alejandro de Rodas 3102, Cerradas de Cumbres, 64610 Monterrey, N.L., Mexico",
                "latitude": 25.7275553,
                "longitude": -100.3889231,
                "name": "Soriana Hipermart",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Calle Av. Aztlán 200, Nueva Galicia, 64160 Monterrey, N.L., Mexico",
                "latitude": 25.7321104,
                "longitude": -100.3477148,
                "name": "Soriana Mercado - Aztlan",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Av. Ruiz Cortines 2401, Bernardo Reyes, 64190 Monterrey, N.L., Mexico",
                "latitude": 25.7058174,
                "longitude": -100.3385432,
                "name": "Soriana Híper - Mitras",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Av Francisco I. Madero 1515, Centro, 64020 Monterrey, N.L., Mexico",
                "latitude": 25.6829467,
                "longitude": -100.2996003,
                "name": "Soriana Super Fundidora",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Av. Simón Bolívar 1750, Mitras Centro, 64460 Monterrey, N.L., Mexico",
                "latitude": 25.6971495,
                "longitude": -100.3438913,
                "name": "Soriana Súper",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Av Abraham Lincoln 5000, Villa Mitras, 64150 Monterrey, N.L., Mexico",
                "latitude": 25.7266974,
                "longitude": -100.364998,
                "name": "Soriana Híper - Santa Cecilia",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Calle Dr. Enrique C. Livas 801, Vista Hermosa, 64620 Monterrey, N.L., Mexico",
                "latitude": 25.6919118,
                "longitude": -100.3553093,
                "name": "Soriana Súper",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Avenida la Esperanza s/n, Ampliación Municipal, 64218 Monterrey, N.L., Mexico",
                "latitude": 25.7589198,
                "longitude": -100.3542219,
                "name": "Soriana",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Av Lázaro Cárdenas 2801, Sin Nombre de Col 39, 64764 Monterrey, N.L., Mexico",
                "latitude": 25.6291435,
                "longitude": -100.2956111,
                "name": "Soriana Híper",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Av Fidel Velázquez 1513, Central, 64190 Monterrey, N.L., Mexico",
                "latitude": 25.7178671,
                "longitude": -100.3402977,
                "name": "Soriana Fidel Velazquez",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Av. Luis Donaldo Colosio Murrieta 1900, Barrio San Luis, 66050 Monterrey, N.L., Mexico",
                "latitude": 25.778131,
                "longitude": -100.388259,
                "name": "Soriana Híper - Solidaridad",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Calle Alejandro de Rodas 3102, CUMBRES SECTOR 8, 64610 Monterrey, N.L., Mexico",
                "latitude": 25.7273976,
                "longitude": -100.3898589,
                "name": "Soriana Híper",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Bartolomé Mitre 6600, Libertadores de América, 64210 Monterrey, N.L., Mexico",
                "latitude": 25.7587372,
                "longitude": -100.3539389,
                "name": "Soriana Híper - Topo Chico",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Calle Paseo de Los Triunfadores 3200-S HOME DEPOT, Cumbres 6o. Sector Secc a, 64619 Monterrey, N.L., Mexico",
                "latitude": 25.7262087,
                "longitude": -100.3905991,
                "name": "Soriana Cumbres",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Avenida Humberto Lobo 520, Del Valle, 66200 San Pedro Garza García, N.L., Mexico",
                "latitude": 25.66408,
                "longitude": -100.3838744,
                "name": "Soriana Híper San Pedro",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Av. Real San Agustin 314, Zona San Agustín, 66260 San Pedro Garza García, N.L., Mexico",
                "latitude": 25.6499589,
                "longitude": -100.3388788,
                "name": "Soriana Híper San Agustin",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Av Antiguos Ejidatarios 709, La Alianza, 64100 Monterrey, N.L., Mexico",
                "latitude": 25.779344,
                "longitude": -100.4086634,
                "name": "Mercado Soriana Alianza",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Av. Cristóbal Colón 790, Centro, 64000 Monterrey, N.L., Mexico",
                "latitude": 25.6861645,
                "longitude": -100.3194089,
                "name": "Soriana Express - Colon Mty",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Calle Alejandro de Rodas 3102A, Sin Nombre de Col 58, 64610 Monterrey, N.L., Mexico",
                "latitude": 25.7272933,
                "longitude": -100.3898496,
                "name": "Soriana Cumbres",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Av. Alfonso Reyes, Bernardo Reyes, 64280 Monterrey, N.L., Mexico",
                "latitude": 25.70567,
                "longitude": -100.3387811,
                "name": "SORIANA MITRAS",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Av Alfonso Reyes 601, El Roble, 66450 San Nicolás de los Garza, N.L., Mexico",
                "latitude": 25.7455577,
                "longitude": -100.3021856,
                "name": "Soriana San Nicolas",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Av. Benito Juárez 601, La Huerta, 67140 Monterrey, N.L., Mexico",
                "latitude": 25.680293,
                "longitude": -100.2519374,
                "name": "Soriana Híper",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Chopos 110, Santa Engracia, 66267 Monterrey, Santa Engracia, 66267 Monterrey, N.L., Mexico",
                "latitude": 25.6499188,
                "longitude": -100.3388257,
                "name": "Soriana San Agustin",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Calle Alejandro de Rodas 3102-A, Sin Nombre de Col 58, 64619 Monterrey, N.L., Mexico",
                "latitude": 25.727201,
                "longitude": -100.3897784,
                "name": "Mercado Soriana",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Av. Anillo Periferico, Sin Nombre de Col 72, Monterrey, N.L., Mexico",
                "latitude": 25.6957342,
                "longitude": -100.3798594,
                "name": "Soriana Híper",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Av Adolfo Ruiz Cortines Pte 600, Sin Nombre de Col 45, 67120 Guadalupe, N.L., Mexico",
                "latitude": 25.701452,
                "longitude": -100.2387046,
                "name": "Soriana Linda Vista",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Av. Humberto Lobo y, Río Guadalquivir 520, Del Valle, 66200 San Pedro Garza García, N.L., Mexico",
                "latitude": 25.6555706,
                "longitude": -100.3844045,
                "name": "Soriana Súper Marne",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Paseo de los Descubridores 310, Campanario Cumbres, 64610 Monterrey, N.L., Mexico",
                "latitude": 25.7204288,
                "longitude": -100.3816797,
                "name": "366 Soriana discoverers",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "S. Andrés 111, Villas de Santo Domingo, 66437 Monterrey, N.L., Mexico",
                "latitude": 25.750154,
                "longitude": -100.2569124,
                "name": "Soriana Santo Domingo",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Av. Manuel L. Barragan S-N, Anáhuac, 66450 San Nicolás de los Garza, N.L., Mexico",
                "latitude": 25.744264,
                "longitude": -100.3130396,
                "name": "Soriana Súper",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Camino a La Banda 201, Cordillera, 66196 Santa Catarina, N.L., Mexico",
                "latitude": 25.658354,
                "longitude": -100.4414712,
                "name": "Soriana Súper Valle Poniente",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Av. Parque Industrial, Mirasur, Parque Industrial Escobedo, 66050 Cd Gral Escobedo, N.L., Mexico",
                "latitude": 25.8038197,
                "longitude": -100.3425909,
                "name": "Soriana Hiper - Industrial Park",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Av. Sendero Divisorio s/n, Joyas de Anahuac, 66428 Cd Gral Escobedo, N.L., Mexico",
                "latitude": 25.7688938,
                "longitude": -100.3020507,
                "name": "Soriana Híper - Sendero Escobedo",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Av Abraham Lincoln 5000, Valle de Santa Cecilia, 64150 Monterrey, N.L., Mexico",
                "latitude": 25.7261142,
                "longitude": -100.3659264,
                "name": "Soriana Tienda 273 Santa Cecilia",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Av. Félix Galván Ote. 400, Sin Nombre de Col 21, 67164 San Nicolás de los Garza, N.L., Mexico",
                "latitude": 25.7074166,
                "longitude": -100.2852454,
                "name": "Soriana Hiper Felix U. Gómez",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Industrial, 64440 Monterrey, Nuevo Leon, Mexico",
                "latitude": 25.6869991,
                "longitude": -100.3236015,
                "name": "Soriana Hiper Industrial",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Sendero Poniente, Misión Lincoln, Cd Gral Escobedo, N.L., Mexico",
                "latitude": 25.7641203,
                "longitude": -100.4113586,
                "name": "Soriana Sendero Lincoln",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Calle Alejandro de Rodas 3102-A, Colonial Cumbres, 64610 Monterrey, Nuevo León, Mexico",
                "latitude": 25.72695,
                "longitude": -100.3892842,
                "name": "Soriana Corporativo",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Av Juan Pablo II 180, Sin Nombre de Col 2, Arboledas de San Jorge, 66465 San Nicolás de los Garza, N.L., Mexico",
                "latitude": 25.7362305,
                "longitude": -100.2884628,
                "name": "Soriana Citadina",
                "time_open": 420,
                "time_close": 1320
            },
            {
                "formatted_address": "Carretera Monterrey Reynosa, 29 de Julio 101, 67190 Guadalupe, N.L., Mexico",
                "latitude": 25.6629414,
                "longitude": -100.151667,
                "name": "Soriana Santa Cruz",
                "time_open": 420,
                "time_close": 1320
            }
        ]
    }
];