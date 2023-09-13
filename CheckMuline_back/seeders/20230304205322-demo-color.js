'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('colors', [
      {
        "id": 1,
        "color": "#FFFFFF",
        "name": "blanc",
        "name_color_eng": "White",
        "name_color_ru": "Белый"
      },
      {
        "id": 2,
        "color": "#E9E9D4",
        "name": "Ecru",
        "name_color_eng": "Ecru",
        "name_color_ru": "Кремовый"
      },
      {
        "id": 3,
        "color": "#FFFFFF",
        "name": "B5200",
        "name_color_eng": "Ultra white",
        "name_color_ru": "Белоснежный"
      },
      {
        "id": 4,
        "color": "#9F3845",
        "name": "150",
        "name_color_eng": "Dusty Rose — ultra vy dk",
        "name_color_ru": "Пыльная роза, ультра очень тёмный (оч. Т. )"
      },
      {
        "id": 5,
        "color": "#F2BCC5",
        "name": "151",
        "name_color_eng": "Dusty Rose — vy lt",
        "name_color_ru": "Пыльная роза, очень светлый (оч. Св. )"
      },
      {
        "id": 6,
        "color": "#CFA296",
        "name": "152",
        "name_color_eng": "Shell Pink — med lt",
        "name_color_ru": "Розовых ракушек, средне светлый (ср. Св. )"
      },
      {
        "id": 7,
        "color": "#DEBCD9",
        "name": "153",
        "name_color_eng": "Violet — vy lt",
        "name_color_ru": "Фиолетовый, очень светлый (оч. Св)"
      },
      {
        "id": 8,
        "color": "#4D2E3D",
        "name": "154",
        "name_color_eng": "Grape — vy dk",
        "name_color_ru": "Красного винограда, оч. Т. "
      },
      {
        "id": 9,
        "color": "#908BC3",
        "name": "155",
        "name_color_eng": "Blue Violet — med dk",
        "name_color_ru": "Сине-фиолетовый, ср. Т. "
      },
      {
        "id": 10,
        "color": "#8B9AC5",
        "name": "156",
        "name_color_eng": "Blue Violet — med lt",
        "name_color_ru": "Сине-фиолетовый, ср. Св. "
      },
      {
        "id": 11,
        "color": "#ABC2DE",
        "name": "157",
        "name_color_eng": "Cornflower Blue — vy lt",
        "name_color_ru": "Васильковый, кобальтовый, оч. Св. "
      },
      {
        "id": 12,
        "color": "#465082",
        "name": "158",
        "name_color_eng": "Cornflower Blue-med vy dk",
        "name_color_ru": "Васильковый, кобальтовый, ср. Оч. Т. "
      },
      {
        "id": 13,
        "color": "#A7B4CD",
        "name": "159",
        "name_color_eng": "Gray Blue-lt",
        "name_color_ru": "Серо-синий, св. "
      },
      {
        "id": 14,
        "color": "#8290AE",
        "name": "160",
        "name_color_eng": "Gray Blue-med",
        "name_color_ru": "Серо-синий, ср. "
      },
      {
        "id": 15,
        "color": "#667594",
        "name": "161",
        "name_color_eng": "Gray Blue",
        "name_color_ru": "Серо-синий"
      },
      {
        "id": 16,
        "color": "#BDDBE6",
        "name": "162",
        "name_color_eng": "Blue-ultra vy lt",
        "name_color_ru": "Голубой, ультра оч. Св. "
      },
      {
        "id": 17,
        "color": "#569571",
        "name": "163",
        "name_color_eng": "Celadon Green-med",
        "name_color_ru": "Серовато-зеленый, ср. "
      },
      {
        "id": 18,
        "color": "#9FCC8D",
        "name": "164",
        "name_color_eng": "Forest Green-lt",
        "name_color_ru": "Зеленый лесной, св. "
      },
      {
        "id": 19,
        "color": "#DAD878",
        "name": "165",
        "name_color_eng": "Moss Green-vylt",
        "name_color_ru": "Мох, оч. Св. "
      },
      {
        "id": 20,
        "color": "#BFBB20",
        "name": "166",
        "name_color_eng": "Moss Green-med lt",
        "name_color_ru": "Мох, ср. Св. "
      },
      {
        "id": 21,
        "color": "#9F8447",
        "name": "167",
        "name_color_eng": "Yellow Beige-vy dk",
        "name_color_ru": "Желтовато-бежевый, оч. Т. "
      },
      {
        "id": 22,
        "color": "#B4C3C1",
        "name": "168",
        "name_color_eng": "Pewter-vy lt",
        "name_color_ru": "Оловянный, оч. Св. "
      },
      {
        "id": 23,
        "color": "#8B9A94",
        "name": "169",
        "name_color_eng": "Pewter-lt",
        "name_color_ru": "Оловянный, св. "
      },
      {
        "id": 24,
        "color": "#9870AC",
        "name": "208",
        "name_color_eng": "Lavender-vy dk",
        "name_color_ru": "Лаванда, оч. Т. "
      },
      {
        "id": 25,
        "color": "#B693B6",
        "name": "209",
        "name_color_eng": "Lavender-dk",
        "name_color_ru": "Лаванда, т. "
      },
      {
        "id": 26,
        "color": "#C9AFDD",
        "name": "210",
        "name_color_eng": "Lavender-med",
        "name_color_ru": "Лаванда, ср. "
      },
      {
        "id": 27,
        "color": "#D4C3E4",
        "name": "211",
        "name_color_eng": "Lavender-lt",
        "name_color_ru": "Лаванда, св. "
      },
      {
        "id": 28,
        "color": "#884238",
        "name": "221",
        "name_color_eng": "Shel lPink-vy dk",
        "name_color_ru": "Розовых ракушек, оч. Т. "
      },
      {
        "id": 29,
        "color": "#BB817B",
        "name": "223",
        "name_color_eng": "Shell Pink-lt",
        "name_color_ru": "Розовых ракушек, св. "
      },
      {
        "id": 30,
        "color": "#DFB3A6",
        "name": "224",
        "name_color_eng": "ShellPink-vy lt",
        "name_color_ru": "Розовых ракушек, оч. Св. "
      },
      {
        "id": 31,
        "color": "#784E24",
        "name": "225",
        "name_color_eng": "ShellPink-ultra vy lt",
        "name_color_ru": "Розовых ракушек, ультра св. "
      },
      {
        "id": 32,
        "color": "#784E24",
        "name": "300",
        "name_color_eng": "Mahogany-vy dk",
        "name_color_ru": "Красного дерева, оч. Т. "
      },
      {
        "id": 33,
        "color": "#AA6730",
        "name": "301",
        "name_color_eng": "Mahogany-med",
        "name_color_ru": "Красного дерева, ср. "
      },
      {
        "id": 34,
        "color": "#9E3332",
        "name": "304",
        "name_color_eng": "Christmas Red-med",
        "name_color_ru": "Рождественский красный, ср. "
      },
      {
        "id": 35,
        "color": "#F6E311",
        "name": "307",
        "name_color_eng": "Lemon",
        "name_color_ru": "Лимонный"
      },
      {
        "id": 36,
        "color": "#B84351",
        "name": "309",
        "name_color_eng": "Rose-dk",
        "name_color_ru": "Розы, т. "
      },
      {
        "id": 37,
        "color": "#000000",
        "name": "310",
        "name_color_eng": "Black",
        "name_color_ru": "Черный"
      },
      {
        "id": 38,
        "color": "#30506F",
        "name": "311",
        "name_color_eng": "Navy Blue-med",
        "name_color_ru": "Темно-синий, ср. "
      },
      {
        "id": 39,
        "color": "#386189",
        "name": "312",
        "name_color_eng": "Navy Blue-lt",
        "name_color_ru": "Темно-синий, св. "
      },
      {
        "id": 40,
        "color": "#8E5D5C",
        "name": "315",
        "name_color_eng": "Antique Mauve-med dk",
        "name_color_ru": "Античный розовато-лиловый, ср. Т. "
      },
      {
        "id": 41,
        "color": "#BF889C",
        "name": "316",
        "name_color_eng": "Antique Mauve-med",
        "name_color_ru": "Античный розовато-лиловый, ср. "
      },
      {
        "id": 42,
        "color": "#697275",
        "name": "317",
        "name_color_eng": "Pewter Grey",
        "name_color_ru": "Оловянносерый"
      },
      {
        "id": 43,
        "color": "#A0A7B0",
        "name": "318",
        "name_color_eng": "Steel Grey-lt",
        "name_color_ru": "Стальной, св. "
      },
      {
        "id": 44,
        "color": "#35633D",
        "name": "319",
        "name_color_eng": "Pistachio Green-vy dk",
        "name_color_ru": "Фисташково-зеленый, оч. Т. "
      },
      {
        "id": 45,
        "color": "#71a072",
        "name": "320",
        "name_color_eng": "Pistachio Green-med",
        "name_color_ru": "Фисташково-зеленый, ср. "
      },
      {
        "id": 46,
        "color": "#ce1f32",
        "name": "321",
        "name_color_eng": "Christmas Red",
        "name_color_ru": "Рождественскийкрасный"
      },
      {
        "id": 47,
        "color": "#647e9d",
        "name": "322",
        "name_color_eng": "NavyBlue-vy lt",
        "name_color_ru": "Темно-синий, оч. Св. "
      },
      {
        "id": 48,
        "color": "#a92332",
        "name": "326",
        "name_color_eng": "Rose-vy dk",
        "name_color_ru": "Розы, оч. Т. "
      },
      {
        "id": 49,
        "color": "#723657",
        "name": "327",
        "name_color_eng": "Violet-vy dk",
        "name_color_ru": "Фиолетовый, оч. Т. "
      },
      {
        "id": 50,
        "color": "#6c5086",
        "name": "333",
        "name_color_eng": "BlueViolet-vy dk",
        "name_color_ru": "Сине-фиолетовый, оч. Т. "
      },
      {
        "id": 51,
        "color": "#4c698c",
        "name": "334",
        "name_color_eng": "BabyBlue-med",
        "name_color_ru": "Нежноголубой, ср. "
      },
      {
        "id": 52,
        "color": "#e56d7f",
        "name": "335",
        "name_color_eng": "Rose",
        "name_color_ru": "Розы"
      },
      {
        "id": 53,
        "color": "#0c1225",
        "name": "336",
        "name_color_eng": "Navy Blue",
        "name_color_ru": "Темно-синий"
      },
      {
        "id": 54,
        "color": "#9389c1",
        "name": "340",
        "name_color_eng": "Blue Violet-med",
        "name_color_ru": "Сине-фиолетовый, ср. "
      },
      {
        "id": 55,
        "color": "#a2accd",
        "name": "341",
        "name_color_eng": "Blue Violet-lt",
        "name_color_ru": "Сине-фиолетовый, св. "
      },
      {
        "id": 56,
        "color": "#bf3e31",
        "name": "347",
        "name_color_eng": "Salmon — vy dk",
        "name_color_ru": "Лососевый, оч. Т. "
      },
      {
        "id": 57,
        "color": "#c24731",
        "name": "349",
        "name_color_eng": "Coral-dk",
        "name_color_ru": "Коралловокрасный, т. "
      },
      {
        "id": 58,
        "color": "#e46647",
        "name": "350",
        "name_color_eng": "Coral-med",
        "name_color_ru": "Кораллово красный, ср. "
      },
      {
        "id": 59,
        "color": "#f78465",
        "name": "351",
        "name_color_eng": "Coral",
        "name_color_ru": "Кораллово красный"
      },
      {
        "id": 60,
        "color": "#f69d80",
        "name": "352",
        "name_color_eng": "Coral-lt",
        "name_color_ru": "Коралловокрасный, св. "
      },
      {
        "id": 61,
        "color": "#fdbca1",
        "name": "353",
        "name_color_eng": "Peach",
        "name_color_ru": "Персиковый"
      },
      {
        "id": 62,
        "color": "#9a3b2d",
        "name": "355",
        "name_color_eng": "TerraCotta-dk",
        "name_color_ru": "Терракотовый, т. "
      },
      {
        "id": 63,
        "color": "#a06757",
        "name": "356",
        "name_color_eng": "TerraCotta-med",
        "name_color_ru": "Терракотовый, ср. "
      },
      {
        "id": 64,
        "color": "#4c7047",
        "name": "367",
        "name_color_eng": "PistachioGreen-dk",
        "name_color_ru": "Фисташково-зеленый, т. "
      },
      {
        "id": 65,
        "color": "#91ab84",
        "name": "368",
        "name_color_eng": "PistachioGreen-lt",
        "name_color_ru": "Фисташково-зеленый, св. "
      },
      {
        "id": 66,
        "color": "#ccdcbe",
        "name": "369",
        "name_color_eng": "PistachioGreen-vy lt",
        "name_color_ru": "Фисташково-зеленый, оч. Св. "
      },
      {
        "id": 67,
        "color": "#bbaa55",
        "name": "370",
        "name_color_eng": "Mustard-med",
        "name_color_ru": "Горчичный, ср. "
      },
      {
        "id": 68,
        "color": "#a08f4d",
        "name": "371",
        "name_color_eng": "Mustard",
        "name_color_ru": "Горчичный"
      },
      {
        "id": 69,
        "color": "#9c8c4a",
        "name": "372",
        "name_color_eng": "Mustard — lt",
        "name_color_ru": "Горчичный, св. "
      },
      {
        "id": 70,
        "color": "#934d29",
        "name": "400",
        "name_color_eng": "Mahogany — dk",
        "name_color_ru": "Красного дерева, т. "
      },
      {
        "id": 71,
        "color": "#e8a76d",
        "name": "402",
        "name_color_eng": "Mahogany — vy lt",
        "name_color_ru": "Красного дерева, оч. Св. "
      },
      {
        "id": 72,
        "color": "#c49a87",
        "name": "407",
        "name_color_eng": "Desert Sand — dk",
        "name_color_ru": "Пустынного песка, т. "
      },
      {
        "id": 73,
        "color": "#535657",
        "name": "413",
        "name_color_eng": "Pewter Grey — dk",
        "name_color_ru": "Оловянно серый, т. "
      },
      {
        "id": 74,
        "color": "#95909d",
        "name": "414",
        "name_color_eng": "Steel Grey — dk",
        "name_color_ru": "Стальной, т. "
      },
      {
        "id": 75,
        "color": "#d3d4db",
        "name": "415",
        "name_color_eng": "Pearl Grey",
        "name_color_ru": "Жемчужно серый"
      },
      {
        "id": 76,
        "color": "#866226",
        "name": "420",
        "name_color_eng": "Hazelnut Brown — dk",
        "name_color_ru": "Фундука, т. "
      },
      {
        "id": 77,
        "color": "#d0ba79",
        "name": "422",
        "name_color_eng": "Hazelnut Brown — lt",
        "name_color_ru": "Фундука, св. "
      },
      {
        "id": 78,
        "color": "#775437",
        "name": "433",
        "name_color_eng": "Brown — med",
        "name_color_ru": "Коричневый, ср. "
      },
      {
        "id": 79,
        "color": "#b78237",
        "name": "434",
        "name_color_eng": "Brown — lt",
        "name_color_ru": "Коричневый, св. "
      },
      {
        "id": 80,
        "color": "#c4863a",
        "name": "435",
        "name_color_eng": "Brown — vy lt",
        "name_color_ru": "Коричневый, оч. Св. "
      },
      {
        "id": 81,
        "color": "#c09557",
        "name": "436",
        "name_color_eng": "Tan",
        "name_color_ru": "Желто-коричневый"
      },
      {
        "id": 82,
        "color": "#d9b879",
        "name": "437",
        "name_color_eng": "Tan — lt",
        "name_color_ru": "Желто-коричневый, св. "
      },
      {
        "id": 83,
        "color": "#f5d500",
        "name": "444",
        "name_color_eng": "Lemon — dk",
        "name_color_ru": "Лимонный, т. "
      },
      {
        "id": 84,
        "color": "#f0ed85",
        "name": "445",
        "name_color_eng": "Lemon — lt",
        "name_color_ru": "Лимонный, св. "
      },
      {
        "id": 85,
        "color": "#978b81",
        "name": "451",
        "name_color_eng": "Shell Grey — dk",
        "name_color_ru": "Серых ракушек, т. "
      },
      {
        "id": 86,
        "color": "#bbaea6",
        "name": "452",
        "name_color_eng": "Shell Grey — med",
        "name_color_ru": "Серых ракушек, ср. "
      },
      {
        "id": 87,
        "color": "#e3dcdb",
        "name": "453",
        "name_color_eng": "Shell Grey — lt",
        "name_color_ru": "Серых ракушек, св. "
      },
      {
        "id": 88,
        "color": "#798738",
        "name": "469",
        "name_color_eng": "Avocado Green",
        "name_color_ru": "Авокадо"
      },
      {
        "id": 89,
        "color": "#98a859",
        "name": "470",
        "name_color_eng": "Avocado Green — lt",
        "name_color_ru": "Авокадо, св. "
      },
      {
        "id": 90,
        "color": "#929937",
        "name": "471",
        "name_color_eng": "Avocado Green — vy lt",
        "name_color_ru": "Авокадо, оч. Св. "
      },
      {
        "id": 91,
        "color": "#dee077",
        "name": "472",
        "name_color_eng": "Avocado Green — ultra lt",
        "name_color_ru": "Авокадо, ультра св. "
      },
      {
        "id": 92,
        "color": "#98232c",
        "name": "498",
        "name_color_eng": "Christmas Red — dk",
        "name_color_ru": "Рождественский красный, т. "
      },
      {
        "id": 93,
        "color": "#14361e",
        "name": "500",
        "name_color_eng": "Blue Green — vy dk",
        "name_color_ru": "Сине-зеленый, оч. Т. "
      },
      {
        "id": 94,
        "color": "#496f5c",
        "name": "501",
        "name_color_eng": "Blue Green — dk",
        "name_color_ru": "Сине-зеленый, т. "
      },
      {
        "id": 95,
        "color": "#799a83",
        "name": "502",
        "name_color_eng": "Blue Green",
        "name_color_ru": "Сине-зеленый"
      },
      {
        "id": 96,
        "color": "#8ebea9",
        "name": "503",
        "name_color_eng": "Blue Green — med",
        "name_color_ru": "Сине-зеленый, ср. "
      },
      {
        "id": 97,
        "color": "#d1e2d7",
        "name": "504",
        "name_color_eng": "Blue Green — vy lt",
        "name_color_ru": "Сине-зеленый, оч. Св. "
      },
      {
        "id": 98,
        "color": "#418253",
        "name": "505",
        "name_color_eng": "Jade",
        "name_color_ru": "Нефрит"
      },
      {
        "id": 99,
        "color": "#166d92",
        "name": "517",
        "name_color_eng": "Wedgwood — dk",
        "name_color_ru": "Пыльно-синий, т. "
      },
      {
        "id": 100,
        "color": "#6b9cb9",
        "name": "518",
        "name_color_eng": "Wedgwood — lt",
        "name_color_ru": "Пыльно-синий, св. "
      },
      {
        "id": 101,
        "color": "#a8c6d8",
        "name": "519",
        "name_color_eng": "Sky Blue",
        "name_color_ru": "Небесно голубой"
      },
      {
        "id": 102,
        "color": "#4f6035",
        "name": "520",
        "name_color_eng": "Fern Green — dk",
        "name_color_ru": "Папоротниковый, т. "
      },
      {
        "id": 103,
        "color": "#93a181",
        "name": "522",
        "name_color_eng": "Fern Green",
        "name_color_ru": "Папоротниковый"
      },
      {
        "id": 104,
        "color": "#a5a888",
        "name": "523",
        "name_color_eng": "Fern Green — lt",
        "name_color_ru": "Папоротниковый, св. "
      },
      {
        "id": 105,
        "color": "#bec0a8",
        "name": "524",
        "name_color_eng": "Fern Green — vy lt",
        "name_color_ru": "Папоротниковый, оч. Св. "
      },
      {
        "id": 106,
        "color": "#504f50",
        "name": "535",
        "name_color_eng": "Ash Grey — vy lt",
        "name_color_ru": "Пепельный, оч. Св. "
      },
      {
        "id": 107,
        "color": "#f0e3d4",
        "name": "543",
        "name_color_eng": "Beige Brown — ultra vy lt",
        "name_color_ru": "Бежево-коричневый, ультра св. "
      },
      {
        "id": 108,
        "color": "#541244",
        "name": "550",
        "name_color_eng": "Violet — vy dk",
        "name_color_ru": "Фиолетовый, оч. Т. "
      },
      {
        "id": 109,
        "color": "#7b3f6c",
        "name": "552",
        "name_color_eng": "Violet — med",
        "name_color_ru": "Фиолетовый, ср. "
      },
      {
        "id": 110,
        "color": "#a772a4",
        "name": "553",
        "name_color_eng": "Violet",
        "name_color_ru": "Фиолетовый"
      },
      {
        "id": 111,
        "color": "#ae99b1",
        "name": "554",
        "name_color_eng": "Violet — lt",
        "name_color_ru": "Фиолетовый, св. "
      },
      {
        "id": 112,
        "color": "#377557",
        "name": "561",
        "name_color_eng": "Jade — vy dk",
        "name_color_ru": "Нефрит, оч. Т. "
      },
      {
        "id": 113,
        "color": "#599b6d",
        "name": "562",
        "name_color_eng": "Jade — med",
        "name_color_ru": "Нефрит, ср. "
      },
      {
        "id": 114,
        "color": "#87c39e",
        "name": "563",
        "name_color_eng": "Jade — lt",
        "name_color_ru": "Нефрит, св. "
      },
      {
        "id": 115,
        "color": "#9cd0ab",
        "name": "564",
        "name_color_eng": "Jade — vy lt",
        "name_color_ru": "Нефрит, оч. Св. "
      },
      {
        "id": 116,
        "color": "#68772d",
        "name": "580",
        "name_color_eng": "Moss Green — dk",
        "name_color_ru": "Мох, т. "
      },
      {
        "id": 117,
        "color": "#9fa146",
        "name": "581",
        "name_color_eng": "Moss Green",
        "name_color_ru": "Мох"
      },
      {
        "id": 118,
        "color": "#70aeb4",
        "name": "597",
        "name_color_eng": "Turquoise",
        "name_color_ru": "Бирюзовый"
      },
      {
        "id": 119,
        "color": "#97ccca",
        "name": "598",
        "name_color_eng": "Turquoise — lt",
        "name_color_ru": "Бирюзовый, св. "
      },
      {
        "id": 120,
        "color": "#bf1c48",
        "name": "600",
        "name_color_eng": "Cranberry — vy dk",
        "name_color_ru": "Клюквенный, оч. Т. "
      },
      {
        "id": 121,
        "color": "#d34067",
        "name": "601",
        "name_color_eng": "Cranberry — dk",
        "name_color_ru": "Клюквенный, т. "
      },
      {
        "id": 122,
        "color": "#ca0b51",
        "name": "602",
        "name_color_eng": "Cranberry — med",
        "name_color_ru": "Клюквенный, ср. "
      },
      {
        "id": 123,
        "color": "#ef7ba1",
        "name": "603",
        "name_color_eng": "Cranberry",
        "name_color_ru": "Клюквенный"
      },
      {
        "id": 124,
        "color": "#ec9ab9",
        "name": "604",
        "name_color_eng": "Cranberry — lt",
        "name_color_ru": "Клюквенный, св. "
      },
      {
        "id": 125,
        "color": "#faccdb",
        "name": "605",
        "name_color_eng": "Cranberry — vy lt",
        "name_color_ru": "Клюквенный, оч. Св. "
      },
      {
        "id": 126,
        "color": "#ea592c",
        "name": "606",
        "name_color_eng": "Bright Orange Red",
        "name_color_ru": "Яркий красно-оранжевый"
      },
      {
        "id": 127,
        "color": "#f06e46",
        "name": "608",
        "name_color_eng": "Bright Orange",
        "name_color_ru": "Ярко оранжевый"
      },
      {
        "id": 128,
        "color": "#806638",
        "name": "610",
        "name_color_eng": "Drab Brown — vy dk",
        "name_color_ru": "Тускло-коричневый, оч. Т. "
      },
      {
        "id": 129,
        "color": "#9e9072",
        "name": "611",
        "name_color_eng": "Drab Brown — dk",
        "name_color_ru": "Тускло-коричневый, т. "
      },
      {
        "id": 130,
        "color": "#917d4a",
        "name": "612",
        "name_color_eng": "Drab Brown — med",
        "name_color_ru": "Тускло-коричневый, ср. "
      },
      {
        "id": 131,
        "color": "#bcae83",
        "name": "613",
        "name_color_eng": "Drab Brown — lt",
        "name_color_ru": "Тускло-коричневый, св. "
      },
      {
        "id": 132,
        "color": "#8c593e",
        "name": "632",
        "name_color_eng": "Desert Sand — ultra vy dk",
        "name_color_ru": "Пустынного песка, ультра т. "
      },
      {
        "id": 133,
        "color": "#938962",
        "name": "640",
        "name_color_eng": "Beige Grey — vy dk",
        "name_color_ru": "Бежево-серый, оч. Т. "
      },
      {
        "id": 134,
        "color": "#bab599",
        "name": "642",
        "name_color_eng": "Beige Grey — dk",
        "name_color_ru": "Бежево-серый, т. "
      },
      {
        "id": 135,
        "color": "#d6d3c1",
        "name": "644",
        "name_color_eng": "Beige Grey — med",
        "name_color_ru": "Бежево-серый, ср. "
      },
      {
        "id": 136,
        "color": "#747e65",
        "name": "645",
        "name_color_eng": "Beaver Grey — vy dk",
        "name_color_ru": "Боброво-серый, оч. Т. "
      },
      {
        "id": 137,
        "color": "#97978e",
        "name": "646",
        "name_color_eng": "Beaver Grey — dk",
        "name_color_ru": "Боброво-серый, т. "
      },
      {
        "id": 138,
        "color": "#abafa3",
        "name": "647",
        "name_color_eng": "Beaver Grey — med",
        "name_color_ru": "Боброво-серый, ср. "
      },
      {
        "id": 139,
        "color": "#babfad",
        "name": "648",
        "name_color_eng": "Beaver Grey — lt",
        "name_color_ru": "Боброво-серый, св. "
      },
      {
        "id": 140,
        "color": "#d12627",
        "name": "666",
        "name_color_eng": "Christmas Red — bright",
        "name_color_ru": "Рождественский красный, яркий"
      },
      {
        "id": 141,
        "color": "#eed7a1",
        "name": "676",
        "name_color_eng": "Old Gold — lt",
        "name_color_ru": "Старого золота, св. "
      },
      {
        "id": 142,
        "color": "#ede0ba",
        "name": "677",
        "name_color_eng": "Old Gold — vy lt",
        "name_color_ru": "Старого золота, оч. Св. "
      },
      {
        "id": 143,
        "color": "#af8334",
        "name": "680",
        "name_color_eng": "Old Gold — dk",
        "name_color_ru": "Старого золота, т. "
      },
      {
        "id": 144,
        "color": "#015731",
        "name": "699",
        "name_color_eng": "Christmas Green",
        "name_color_ru": "Рождественский зеленый"
      },
      {
        "id": 145,
        "color": "#2e9148",
        "name": "700",
        "name_color_eng": "Christmas Green — bright",
        "name_color_ru": "Рождественский зеленый, яркий"
      },
      {
        "id": 146,
        "color": "#007a3f",
        "name": "701",
        "name_color_eng": "Christmas Green — lt",
        "name_color_ru": "Рождественский зеленый, св. "
      },
      {
        "id": 147,
        "color": "#59a052",
        "name": "702",
        "name_color_eng": "Kelly Green",
        "name_color_ru": "Мутновато-зеленый"
      },
      {
        "id": 148,
        "color": "#81b85e",
        "name": "703",
        "name_color_eng": "Chartreuse",
        "name_color_ru": "Бледно-зеленый"
      },
      {
        "id": 149,
        "color": "#bad765",
        "name": "704",
        "name_color_eng": "Chartreuse — bright",
        "name_color_ru": "Бледно-зеленый, яркий"
      },
      {
        "id": 150,
        "color": "#e1e1d9",
        "name": "712",
        "name_color_eng": "Cream",
        "name_color_ru": "Кремовый"
      },
      {
        "id": 151,
        "color": "#9f2d6f",
        "name": "718",
        "name_color_eng": "Plum",
        "name_color_ru": "Сливовый"
      },
      {
        "id": 152,
        "color": "#ec6810",
        "name": "720",
        "name_color_eng": "Orange Spice — dk",
        "name_color_ru": "Красновато-рыжеватый, т. "
      },
      {
        "id": 153,
        "color": "#e4752b",
        "name": "721",
        "name_color_eng": "Orange Spice — med",
        "name_color_ru": "Красновато-рыжеватый, ср. "
      },
      {
        "id": 154,
        "color": "#faa463",
        "name": "722",
        "name_color_eng": "Orange Spice — lt",
        "name_color_ru": "Красновато-рыжеватый, св. "
      },
      {
        "id": 155,
        "color": "#fad558",
        "name": "725",
        "name_color_eng": "Topaz",
        "name_color_ru": "Топаз"
      },
      {
        "id": 156,
        "color": "#ffe35f",
        "name": "726",
        "name_color_eng": "Topaz — lt",
        "name_color_ru": "Топаз, св. "
      },
      {
        "id": 157,
        "color": "#feee89",
        "name": "727",
        "name_color_eng": "Topaz — vy lt",
        "name_color_ru": "Топаз, оч. Св. "
      },
      {
        "id": 158,
        "color": "#ecbf3b",
        "name": "728",
        "name_color_eng": "Topaz",
        "name_color_ru": "Топаз"
      },
      {
        "id": 159,
        "color": "#cc993d",
        "name": "729",
        "name_color_eng": "Old Gold — med",
        "name_color_ru": "Старого золота, ср. "
      },
      {
        "id": 160,
        "color": "#746d2b",
        "name": "730",
        "name_color_eng": "Olive Green — vy dk",
        "name_color_ru": "Оливково-зеленый, оч. Т. "
      },
      {
        "id": 161,
        "color": "#837d2f",
        "name": "731",
        "name_color_eng": "Olive Green — dk",
        "name_color_ru": "Оливково-зеленый, т. "
      },
      {
        "id": 162,
        "color": "#91852a",
        "name": "732",
        "name_color_eng": "Olive Green",
        "name_color_ru": "Оливково-зеленый"
      },
      {
        "id": 163,
        "color": "#a6a036",
        "name": "733",
        "name_color_eng": "Olive Green — med",
        "name_color_ru": "Оливково-зеленый, ср. "
      },
      {
        "id": 164,
        "color": "#d1c66d",
        "name": "734",
        "name_color_eng": "Olive Green — lt",
        "name_color_ru": "Оливково-зеленый, св. "
      },
      {
        "id": 165,
        "color": "#d9c38f",
        "name": "738",
        "name_color_eng": "Tan — vy lt",
        "name_color_ru": "Желто-коричневый, оч. Св. "
      },
      {
        "id": 166,
        "color": "#e5dab2",
        "name": "739",
        "name_color_eng": "Tan — ultra vy lt",
        "name_color_ru": "Желто-коричневый, ультра св. "
      },
      {
        "id": 167,
        "color": "#ff7600",
        "name": "740",
        "name_color_eng": "Tangerine",
        "name_color_ru": "Мандариновый"
      },
      {
        "id": 168,
        "color": "#f69726",
        "name": "741",
        "name_color_eng": "Tangerine — med",
        "name_color_ru": "Мандариновый, ср. "
      },
      {
        "id": 169,
        "color": "#ffc33a",
        "name": "742",
        "name_color_eng": "Tangerine — lt",
        "name_color_ru": "Мандариновый, св. "
      },
      {
        "id": 170,
        "color": "#ffda5a",
        "name": "743",
        "name_color_eng": "Yellow — med",
        "name_color_ru": "Желтый, ср. "
      },
      {
        "id": 171,
        "color": "#ffe276",
        "name": "744",
        "name_color_eng": "Yellow — pale",
        "name_color_ru": "Желтый, бледный"
      },
      {
        "id": 172,
        "color": "#ffeda9",
        "name": "745",
        "name_color_eng": "Yellow — lt pale",
        "name_color_ru": "Желтый, бледно св. "
      },
      {
        "id": 173,
        "color": "#f5f0df",
        "name": "746",
        "name_color_eng": "Off White",
        "name_color_ru": "Белесый"
      },
      {
        "id": 174,
        "color": "#d3e9e7",
        "name": "747",
        "name_color_eng": "Sky Blue — vy lt",
        "name_color_ru": "Небесно голубой, оч. Св. "
      },
      {
        "id": 175,
        "color": "#efc1aa",
        "name": "754",
        "name_color_eng": "Peach — lt",
        "name_color_ru": "Персиковый, св. "
      },
      {
        "id": 176,
        "color": "#eac0b4",
        "name": "758",
        "name_color_eng": "Terra Cotta — vy lt",
        "name_color_ru": "Терракотовый, оч. Св. "
      },
      {
        "id": 177,
        "color": "#e29690",
        "name": "760",
        "name_color_eng": "Salmon",
        "name_color_ru": "Лососевый"
      },
      {
        "id": 178,
        "color": "#f4c4c1",
        "name": "761",
        "name_color_eng": "Salmon — lt",
        "name_color_ru": "Лососевый, св. "
      },
      {
        "id": 179,
        "color": "#e9e9eb",
        "name": "762",
        "name_color_eng": "Pearl Grey — vy lt",
        "name_color_ru": "Жемчужно серый, оч. Св. "
      },
      {
        "id": 180,
        "color": "#f3f6d4",
        "name": "772",
        "name_color_eng": "Yellow Green — vy lt",
        "name_color_ru": "Желто-зеленый, оч. Св. "
      },
      {
        "id": 181,
        "color": "#ceddea",
        "name": "775",
        "name_color_eng": "Baby Blue — vy lt",
        "name_color_ru": "Нежно голубой, оч. Св. "
      },
      {
        "id": 182,
        "color": "#eeaeb0",
        "name": "776",
        "name_color_eng": "Pink — med",
        "name_color_ru": "Розовый, ср. "
      },
      {
        "id": 183,
        "color": "#8a373b",
        "name": "777",
        "name_color_eng": "Raspberry — vy dk",
        "name_color_ru": "Малина оч. Т"
      },
      {
        "id": 184,
        "color": "#ddb3b1",
        "name": "778",
        "name_color_eng": "Antique Mauve — vy lt",
        "name_color_ru": "Античный розовато-лиловый, оч. Св. "
      },
      {
        "id": 185,
        "color": "#6d5748",
        "name": "779",
        "name_color_eng": "Cocoa — dk",
        "name_color_ru": "Какао т. "
      },
      {
        "id": 186,
        "color": "#936626",
        "name": "780",
        "name_color_eng": "Topaz — ultra vy dk",
        "name_color_ru": "Топаз, ультра т. "
      },
      {
        "id": 187,
        "color": "#ba8225",
        "name": "781",
        "name_color_eng": "Topaz — vy dk",
        "name_color_ru": "Топаз, оч. Т. "
      },
      {
        "id": 188,
        "color": "#b38132",
        "name": "782",
        "name_color_eng": "Topaz — dk",
        "name_color_ru": "Топаз, т. "
      },
      {
        "id": 189,
        "color": "#d19d2f",
        "name": "783",
        "name_color_eng": "Topaz — med",
        "name_color_ru": "Топаз, ср. Т. "
      },
      {
        "id": 190,
        "color": "#161151",
        "name": "791",
        "name_color_eng": "Cornflower Blue — vy dk",
        "name_color_ru": "Васильковый, кобальтовый, оч. Т. "
      },
      {
        "id": 191,
        "color": "#7971a0",
        "name": "792",
        "name_color_eng": "Cornflower Blue — dk",
        "name_color_ru": "Васильковый, кобальтовый, т. "
      },
      {
        "id": 192,
        "color": "#686d8d",
        "name": "793",
        "name_color_eng": "Cornflower Blue — med",
        "name_color_ru": "Васильковый, кобальтовый, ср. "
      },
      {
        "id": 193,
        "color": "#8ea7c0",
        "name": "794",
        "name_color_eng": "Cornflower Blue — lt",
        "name_color_ru": "Васильковый, кобальтовый, св. Т. "
      },
      {
        "id": 194,
        "color": "#181f66",
        "name": "796",
        "name_color_eng": "Royal Blue — dk",
        "name_color_ru": "Чисто синий, т. "
      },
      {
        "id": 195,
        "color": "#2c4180",
        "name": "797",
        "name_color_eng": "Royal Blue",
        "name_color_ru": "Чисто синий"
      },
      {
        "id": 196,
        "color": "#445997",
        "name": "798",
        "name_color_eng": "Delft — dk",
        "name_color_ru": "Фарфоровый, т. "
      },
      {
        "id": 197,
        "color": "#6e8db5",
        "name": "799",
        "name_color_eng": "Delft — med",
        "name_color_ru": "Фарфоровый, ср. "
      },
      {
        "id": 198,
        "color": "#c1d3df",
        "name": "800",
        "name_color_eng": "Delft — pale",
        "name_color_ru": "Фарфоровый, бледный"
      },
      {
        "id": 199,
        "color": "#63461f",
        "name": "801",
        "name_color_eng": "Coffee Brown — dk",
        "name_color_ru": "Кофейный, т. "
      },
      {
        "id": 200,
        "color": "#437490",
        "name": "806",
        "name_color_eng": "Peacock Blue — dk",
        "name_color_ru": "Переливчатый синий, т. "
      },
      {
        "id": 201,
        "color": "#70a8b3",
        "name": "807",
        "name_color_eng": "Peacock Blue",
        "name_color_ru": "Переливчатый синий"
      },
      {
        "id": 202,
        "color": "#6c91c0",
        "name": "809",
        "name_color_eng": "Delft",
        "name_color_ru": "Фарфоровый"
      },
      {
        "id": 203,
        "color": "#91b4ce",
        "name": "813",
        "name_color_eng": "Blue — lt",
        "name_color_ru": "Синий, св. "
      },
      {
        "id": 204,
        "color": "#711f2e",
        "name": "814",
        "name_color_eng": "Garnet — dk",
        "name_color_ru": "Гранатовый, т. "
      },
      {
        "id": 205,
        "color": "#9d3030",
        "name": "815",
        "name_color_eng": "Garnet — med",
        "name_color_ru": "Гранатовый, ср. "
      },
      {
        "id": 206,
        "color": "#811024",
        "name": "816",
        "name_color_eng": "Garnet",
        "name_color_ru": "Гранатовый"
      },
      {
        "id": 207,
        "color": "#bd2e2e",
        "name": "817",
        "name_color_eng": "Coral Red — vy dk",
        "name_color_ru": "Кораллово красный, оч. Т. "
      },
      {
        "id": 208,
        "color": "#f9d6dd",
        "name": "818",
        "name_color_eng": "Baby Pink",
        "name_color_ru": "Нежно розовый"
      },
      {
        "id": 209,
        "color": "#fbe2df",
        "name": "819",
        "name_color_eng": "Baby Pink — lt",
        "name_color_ru": "Нежно розовый, св. "
      },
      {
        "id": 210,
        "color": "#190f60",
        "name": "820",
        "name_color_eng": "Royal Blue — vy dk",
        "name_color_ru": "Чисто синий, оч. Т. "
      },
      {
        "id": 211,
        "color": "#e2dfd3",
        "name": "822",
        "name_color_eng": "Beige Grey — lt",
        "name_color_ru": "Бежево-серый, св. "
      },
      {
        "id": 212,
        "color": "#124477",
        "name": "823",
        "name_color_eng": "Navy Blue — dk",
        "name_color_ru": "Темно-синий, т. "
      },
      {
        "id": 213,
        "color": "#3b6292",
        "name": "824",
        "name_color_eng": "Blue — vy dk",
        "name_color_ru": "Синий, оч. Т. "
      },
      {
        "id": 214,
        "color": "#366390",
        "name": "825",
        "name_color_eng": "Blue — dk",
        "name_color_ru": "Синий, т. "
      },
      {
        "id": 215,
        "color": "#5a82a2",
        "name": "826",
        "name_color_eng": "Blue — med",
        "name_color_ru": "Синий, ср. "
      },
      {
        "id": 216,
        "color": "#b4d3e3",
        "name": "827",
        "name_color_eng": "Blue — vy lt",
        "name_color_ru": "Синий, оч. Св. "
      },
      {
        "id": 217,
        "color": "#cae2eb",
        "name": "828",
        "name_color_eng": "Blue — ultra vy lt",
        "name_color_ru": "Синий, ультра св. "
      },
      {
        "id": 218,
        "color": "#6f5422",
        "name": "829",
        "name_color_eng": "Golden Olive — vy dk",
        "name_color_ru": "Оливково-золотой, оч. Т. "
      },
      {
        "id": 219,
        "color": "#806c26",
        "name": "830",
        "name_color_eng": "Golden Olive — dk",
        "name_color_ru": "Оливково-золотой, т. "
      },
      {
        "id": 220,
        "color": "#957b2f",
        "name": "831",
        "name_color_eng": "Golden Olive — med",
        "name_color_ru": "Оливково-золотой, ср. "
      },
      {
        "id": 221,
        "color": "#b19a3f",
        "name": "832",
        "name_color_eng": "Golden Olive",
        "name_color_ru": "Оливково-золотой"
      },
      {
        "id": 222,
        "color": "#bfa43a",
        "name": "833",
        "name_color_eng": "Golden Olive — lt",
        "name_color_ru": "Оливково-золотой, св. "
      },
      {
        "id": 223,
        "color": "#cab751",
        "name": "834",
        "name_color_eng": "Golden Olive — vy lt",
        "name_color_ru": "Оливково-золотой, оч. Св. "
      },
      {
        "id": 224,
        "color": "#573c2a",
        "name": "838",
        "name_color_eng": "Beige Brown — vy dk",
        "name_color_ru": "Бежево-коричневый, оч. Т. "
      },
      {
        "id": 225,
        "color": "#684e37",
        "name": "839",
        "name_color_eng": "Beige Brown — dk",
        "name_color_ru": "Бежево-коричневый, т. "
      },
      {
        "id": 226,
        "color": "#977e65",
        "name": "840",
        "name_color_eng": "Beige Brown — med",
        "name_color_ru": "Бежево-коричневый, ср. "
      },
      {
        "id": 227,
        "color": "#b39f8c",
        "name": "841",
        "name_color_eng": "Beige Brown — lt",
        "name_color_ru": "Бежево-коричневый, св. "
      },
      {
        "id": 228,
        "color": "#cdb9a4",
        "name": "842",
        "name_color_eng": "Beige Brown — vy lt",
        "name_color_ru": "Бежево-коричневый, оч. Св. "
      },
      {
        "id": 229,
        "color": "#6c6e58",
        "name": "844",
        "name_color_eng": "Beaver Grey — ultra dk",
        "name_color_ru": "Боброво-серый, ультра т. "
      },
      {
        "id": 230,
        "color": "#775820",
        "name": "869",
        "name_color_eng": "Hazelnut Brown — vy dk",
        "name_color_ru": "Фундука, оч. Т. "
      },
      {
        "id": 231,
        "color": "#043810",
        "name": "890",
        "name_color_eng": "Pistachio Green — ultra dk",
        "name_color_ru": "Фисташково зеленый, ультра т. "
      },
      {
        "id": 232,
        "color": "#ef4949",
        "name": "891",
        "name_color_eng": "Carnation — dk",
        "name_color_ru": "Гвоздичный, т. "
      },
      {
        "id": 233,
        "color": "#f85b64",
        "name": "892",
        "name_color_eng": "Carnation — med",
        "name_color_ru": "Гвоздичный, ср. "
      },
      {
        "id": 234,
        "color": "#fc6a84",
        "name": "893",
        "name_color_eng": "Carnation — lt",
        "name_color_ru": "Гвоздичный, св. "
      },
      {
        "id": 235,
        "color": "#f999a5",
        "name": "894",
        "name_color_eng": "Carnation — vy lt",
        "name_color_ru": "Гвоздичный, оч. Св. "
      },
      {
        "id": 236,
        "color": "#29542f",
        "name": "895",
        "name_color_eng": "Hunter Green — vy dk",
        "name_color_ru": "Защитный, грязновато зеленый, оч. Т. "
      },
      {
        "id": 237,
        "color": "#502f1b",
        "name": "898",
        "name_color_eng": "Coffee Brown — vy dk",
        "name_color_ru": "Кофейный, оч. Т. "
      },
      {
        "id": 238,
        "color": "#ee8593",
        "name": "899",
        "name_color_eng": "Rose — med",
        "name_color_ru": "Розы, ср. "
      },
      {
        "id": 239,
        "color": "#d45d28",
        "name": "900",
        "name_color_eng": "Burnt Orange — dk",
        "name_color_ru": "Оранжево-жженный, т. "
      },
      {
        "id": 240,
        "color": "#6b3b33",
        "name": "902",
        "name_color_eng": "Garnet — vy dk",
        "name_color_ru": "Гранатовый, оч. Т. "
      },
      {
        "id": 241,
        "color": "#4f6c33",
        "name": "904",
        "name_color_eng": "Parrot Green — vy dk",
        "name_color_ru": "Зеленый попугаевый, оч. Т. "
      },
      {
        "id": 242,
        "color": "#759a3e",
        "name": "905",
        "name_color_eng": "Parrot Green — dk",
        "name_color_ru": "Зеленый попугаевый, т. "
      },
      {
        "id": 243,
        "color": "#82ae44",
        "name": "906",
        "name_color_eng": "Parrot Green — med",
        "name_color_ru": "Зеленый попугаевый, ср. "
      },
      {
        "id": 244,
        "color": "#a9c33e",
        "name": "907",
        "name_color_eng": "Parrot Green — lt",
        "name_color_ru": "Зеленый попугаевый, св. "
      },
      {
        "id": 245,
        "color": "#00793b",
        "name": "909",
        "name_color_eng": "Emerald Green — vy dk",
        "name_color_ru": "Изумрудный, оч. Т. "
      },
      {
        "id": 246,
        "color": "#008c4c",
        "name": "910",
        "name_color_eng": "Emerald Green — dk",
        "name_color_ru": "Изумрудный, т. "
      },
      {
        "id": 247,
        "color": "#40a756",
        "name": "911",
        "name_color_eng": "Emerald Green — med",
        "name_color_ru": "Изумрудный, ср. "
      },
      {
        "id": 248,
        "color": "#58a96b",
        "name": "912",
        "name_color_eng": "Emerald Green — lt",
        "name_color_ru": "Изумрудный, св. "
      },
      {
        "id": 249,
        "color": "#88c78d",
        "name": "913",
        "name_color_eng": "Nile Green — med",
        "name_color_ru": "Мутно-зеленый, ср. "
      },
      {
        "id": 250,
        "color": "#800137",
        "name": "915",
        "name_color_eng": "Plum — dk",
        "name_color_ru": "Сливовый, т. "
      },
      {
        "id": 251,
        "color": "#832a58",
        "name": "917",
        "name_color_eng": "Plum — med",
        "name_color_ru": "Сливовый, ср. "
      },
      {
        "id": 252,
        "color": "#8c3b1a",
        "name": "918",
        "name_color_eng": "Red Copper — dk",
        "name_color_ru": "Красной меди, т. "
      },
      {
        "id": 253,
        "color": "#9b3b1b",
        "name": "919",
        "name_color_eng": "Red Copper",
        "name_color_ru": "Красной меди"
      },
      {
        "id": 254,
        "color": "#a74f2a",
        "name": "920",
        "name_color_eng": "Copper — med",
        "name_color_ru": "Медный, ср. "
      },
      {
        "id": 255,
        "color": "#c36b29",
        "name": "921",
        "name_color_eng": "Copper",
        "name_color_ru": "Медный"
      },
      {
        "id": 256,
        "color": "#d6834d",
        "name": "922",
        "name_color_eng": "Copper — lt",
        "name_color_ru": "Медный, св. "
      },
      {
        "id": 257,
        "color": "#42605c",
        "name": "924",
        "name_color_eng": "Grey Green — vy dk",
        "name_color_ru": "Серо-зеленый, оч. Т. "
      },
      {
        "id": 258,
        "color": "#789899",
        "name": "926",
        "name_color_eng": "Grey Green — med",
        "name_color_ru": "Серо-зеленый, ср. "
      },
      {
        "id": 259,
        "color": "#c5d2cf",
        "name": "927",
        "name_color_eng": "Grey Green — lt",
        "name_color_ru": "Серо-зеленый, св. "
      },
      {
        "id": 260,
        "color": "#e5eae9",
        "name": "928",
        "name_color_eng": "Grey Green — vy lt",
        "name_color_ru": "Серо-зеленый, оч. Св. "
      },
      {
        "id": 261,
        "color": "#435e67",
        "name": "930",
        "name_color_eng": "Antique Blue — dk",
        "name_color_ru": "Античный синий, т. "
      },
      {
        "id": 262,
        "color": "#678997",
        "name": "931",
        "name_color_eng": "Antique Blue — med",
        "name_color_ru": "Античный синий, ср. "
      },
      {
        "id": 263,
        "color": "#8faeb9",
        "name": "932",
        "name_color_eng": "Antique Blue — lt",
        "name_color_ru": "Античный синий, св. "
      },
      {
        "id": 264,
        "color": "#4d4c34",
        "name": "934",
        "name_color_eng": "Black Avocado Green — dk",
        "name_color_ru": "Черно-зеленого авокадо, т. "
      },
      {
        "id": 265,
        "color": "#4b5035",
        "name": "935",
        "name_color_eng": "Black Avocado Green — med",
        "name_color_ru": "Черно-зеленого авокадо, ср. "
      },
      {
        "id": 266,
        "color": "#5d5c2b",
        "name": "936",
        "name_color_eng": "Avocado Green — vy dk",
        "name_color_ru": "Авокадо, оч. Т. "
      },
      {
        "id": 267,
        "color": "#4f5925",
        "name": "937",
        "name_color_eng": "Avocado Green — med",
        "name_color_ru": "Авокадо, ср. "
      },
      {
        "id": 268,
        "color": "#3b2811",
        "name": "938",
        "name_color_eng": "Coffee Brown — ultra dk",
        "name_color_ru": "Кофейный, ультра т. "
      },
      {
        "id": 269,
        "color": "#02101c",
        "name": "939",
        "name_color_eng": "Navy Blue — vy dk",
        "name_color_ru": "Темно-синий, оч. Т. "
      },
      {
        "id": 270,
        "color": "#009a7b",
        "name": "943",
        "name_color_eng": "Aquamarine — med",
        "name_color_ru": "Аквамарин, ср. "
      },
      {
        "id": 271,
        "color": "#e3be8e",
        "name": "945",
        "name_color_eng": "Tawny",
        "name_color_ru": "Рыжевато-коричневый"
      },
      {
        "id": 272,
        "color": "#e15729",
        "name": "946",
        "name_color_eng": "Burnt Orange — med",
        "name_color_ru": "Оранжево-жженный, ср. "
      },
      {
        "id": 273,
        "color": "#f26922",
        "name": "947",
        "name_color_eng": "Burnt Orange",
        "name_color_ru": "Оранжево-жженный"
      },
      {
        "id": 274,
        "color": "#feebe2",
        "name": "948",
        "name_color_eng": "Peach — vy lt",
        "name_color_ru": "Персиковый, оч. Св. "
      },
      {
        "id": 275,
        "color": "#e7ceb9",
        "name": "950",
        "name_color_eng": "Desert Sand — lt",
        "name_color_ru": "Пустынного песка, св. "
      },
      {
        "id": 276,
        "color": "#f2e0ce",
        "name": "951",
        "name_color_eng": "Tawny — lt",
        "name_color_ru": "Рыжевато-коричневый, св. "
      },
      {
        "id": 277,
        "color": "#abd58b",
        "name": "954",
        "name_color_eng": "Nile Green",
        "name_color_ru": "Мутно-зеленый"
      },
      {
        "id": 278,
        "color": "#b4e8b3",
        "name": "955",
        "name_color_eng": "Nile Green — lt",
        "name_color_ru": "Мутно-зеленый, св. "
      },
      {
        "id": 279,
        "color": "#ff7a90",
        "name": "956",
        "name_color_eng": "Geranium",
        "name_color_ru": "Герань"
      },
      {
        "id": 280,
        "color": "#f9afb7",
        "name": "957",
        "name_color_eng": "Geranium — pale",
        "name_color_ru": "Герань, бледный"
      },
      {
        "id": 281,
        "color": "#51c0bb",
        "name": "958",
        "name_color_eng": "Seagreen — dk",
        "name_color_ru": "Морской воды, т. "
      },
      {
        "id": 282,
        "color": "#8fd3d4",
        "name": "959",
        "name_color_eng": "Seagreen — med",
        "name_color_ru": "Морской воды, ср. "
      },
      {
        "id": 283,
        "color": "#df6877",
        "name": "961",
        "name_color_eng": "Dusty Rose — dk",
        "name_color_ru": "Пыльной розы, т. "
      },
      {
        "id": 284,
        "color": "#f08d9f",
        "name": "962",
        "name_color_eng": "Dusty Rose — med",
        "name_color_ru": "Пыльной розы, ср. "
      },
      {
        "id": 285,
        "color": "#fad0d5",
        "name": "963",
        "name_color_eng": "Dusty Rose — ultra vy lt",
        "name_color_ru": "Пыльной розы, очень св. "
      },
      {
        "id": 286,
        "color": "#9cd3cc",
        "name": "964",
        "name_color_eng": "Seagreen — lt",
        "name_color_ru": "Морской воды, св. "
      },
      {
        "id": 287,
        "color": "#bbd7ae",
        "name": "966",
        "name_color_eng": "Baby Green — med",
        "name_color_ru": "Нежно зеленый, ср. "
      },
      {
        "id": 288,
        "color": "#fbdbcd",
        "name": "967",
        "name_color_eng": "Apricot — vy lt",
        "name_color_ru": "Абрикосовый оч. Св. "
      },
      {
        "id": 289,
        "color": "#ff781e",
        "name": "970",
        "name_color_eng": "Pumpkin — bright",
        "name_color_ru": "Тыквенный, яркий"
      },
      {
        "id": 290,
        "color": "#fc7e0c",
        "name": "971",
        "name_color_eng": "Pumpkin",
        "name_color_ru": "Тыквенный"
      },
      {
        "id": 291,
        "color": "#ffb401",
        "name": "972",
        "name_color_eng": "Canary — deep",
        "name_color_ru": "Канареечный, глубокий"
      },
      {
        "id": 292,
        "color": "#ffe21a",
        "name": "973",
        "name_color_eng": "Canary — bright",
        "name_color_ru": "Канареечный, яркий"
      },
      {
        "id": 293,
        "color": "#945c2d",
        "name": "975",
        "name_color_eng": "Golden Brown — dk",
        "name_color_ru": "Золотисто-коричневый, т. "
      },
      {
        "id": 294,
        "color": "#e6973f",
        "name": "976",
        "name_color_eng": "Golden Brown — med",
        "name_color_ru": "Золотисто-коричневый, ср. "
      },
      {
        "id": 295,
        "color": "#e59034",
        "name": "977",
        "name_color_eng": "Golden Brown — lt",
        "name_color_ru": "Золотисто-коричневый, св. "
      },
      {
        "id": 296,
        "color": "#1f561f",
        "name": "986",
        "name_color_eng": "Forest Green — vy dk",
        "name_color_ru": "Зеленый лесной, оч. Т. "
      },
      {
        "id": 297,
        "color": "#568357",
        "name": "987",
        "name_color_eng": "Forest Green — dk",
        "name_color_ru": "Зеленый лесной, т. "
      },
      {
        "id": 298,
        "color": "#76996c",
        "name": "988",
        "name_color_eng": "Forest Green — med",
        "name_color_ru": "Зеленый лесной, ср. "
      },
      {
        "id": 299,
        "color": "#87a462",
        "name": "989",
        "name_color_eng": "Forest Green",
        "name_color_ru": "Зеленый лесной"
      },
      {
        "id": 300,
        "color": "#176a59",
        "name": "991",
        "name_color_eng": "Aquamarine — dk",
        "name_color_ru": "Аквамарин, т. "
      },
      {
        "id": 301,
        "color": "#6cbfa8",
        "name": "992",
        "name_color_eng": "Aquamarine — lt",
        "name_color_ru": "Аквамарин, св. "
      },
      {
        "id": 302,
        "color": "#8ec2b3",
        "name": "993",
        "name_color_eng": "Aquamarine — vy lt",
        "name_color_ru": "Аквамарин, оч. Св. "
      },
      {
        "id": 303,
        "color": "#0064b0",
        "name": "995",
        "name_color_eng": "Electric Blue — dk",
        "name_color_ru": "Электрик синий, т. "
      },
      {
        "id": 304,
        "color": "#57baf5",
        "name": "996",
        "name_color_eng": "Electric Blue — med",
        "name_color_ru": "Электрик синий, ср. "
      },
      {
        "id": 305,
        "color": "#635f2f",
        "name": "3011",
        "name_color_eng": "Khaki Green — dk",
        "name_color_ru": "Хаки, т. "
      },
      {
        "id": 306,
        "color": "#9b9648",
        "name": "3012",
        "name_color_eng": "Khaki Green — med",
        "name_color_ru": "Хаки, ср. "
      },
      {
        "id": 307,
        "color": "#999c6c",
        "name": "3013",
        "name_color_eng": "Khaki Green — lt",
        "name_color_ru": "Хаки, св. "
      },
      {
        "id": 308,
        "color": "#3b2e08",
        "name": "3021",
        "name_color_eng": "Brown Grey — vy dk",
        "name_color_ru": "Коричнево-серый, оч. Т. "
      },
      {
        "id": 309,
        "color": "#938e6e",
        "name": "3022",
        "name_color_eng": "Brown Grey — med",
        "name_color_ru": "Коричнево-серый, ср. "
      },
      {
        "id": 310,
        "color": "#b2ae95",
        "name": "3023",
        "name_color_eng": "Brown Grey — lt",
        "name_color_ru": "Коричнево-серый, св. "
      },
      {
        "id": 311,
        "color": "#dcdcd7",
        "name": "3024",
        "name_color_eng": "Brown Grey — vy lt",
        "name_color_ru": "Коричнево-серый, оч. Св. "
      },
      {
        "id": 312,
        "color": "#442e10",
        "name": "3031",
        "name_color_eng": "Mocha Brown — vy dk",
        "name_color_ru": "Мокка, оч. Т. "
      },
      {
        "id": 313,
        "color": "#ada183",
        "name": "3032",
        "name_color_eng": "Mocha Brown — med",
        "name_color_ru": "Мокка, ср. "
      },
      {
        "id": 314,
        "color": "#d7d0c2",
        "name": "3033",
        "name_color_eng": "Mocha Brown — vy lt",
        "name_color_ru": "Мокка, оч. Св. "
      },
      {
        "id": 315,
        "color": "#966e6e",
        "name": "3041",
        "name_color_eng": "Antique Violet — med",
        "name_color_ru": "Антично фиолетовый, ср. "
      },
      {
        "id": 316,
        "color": "#ccc1d0",
        "name": "3042",
        "name_color_eng": "Antique Violet — lt",
        "name_color_ru": "Антично фиолетовый, св. "
      },
      {
        "id": 317,
        "color": "#b19563",
        "name": "3045",
        "name_color_eng": "Yellow Beige — dk",
        "name_color_ru": "Желтовато-бежевый, т. "
      },
      {
        "id": 318,
        "color": "#ccbc7d",
        "name": "3046",
        "name_color_eng": "Yellow Beige — med",
        "name_color_ru": "Желтовато-бежевый, ср. "
      },
      {
        "id": 319,
        "color": "#ececd2",
        "name": "3047",
        "name_color_eng": "Yellow Beige — lt",
        "name_color_ru": "Желтовато-бежевый, св. "
      },
      {
        "id": 320,
        "color": "#6d6f42",
        "name": "3051",
        "name_color_eng": "Green Grey — dk",
        "name_color_ru": "Серо-зеленый, т. "
      },
      {
        "id": 321,
        "color": "#899770",
        "name": "3052",
        "name_color_eng": "Green Grey — med",
        "name_color_ru": "Серо-зеленый, ср. "
      },
      {
        "id": 322,
        "color": "#bac28b",
        "name": "3053",
        "name_color_eng": "Green Grey",
        "name_color_ru": "Серо-зеленый"
      },
      {
        "id": 323,
        "color": "#cda072",
        "name": "3064",
        "name_color_eng": "Desert Sand",
        "name_color_ru": "Пустынного песка"
      },
      {
        "id": 324,
        "color": "#e3e6dc",
        "name": "3072",
        "name_color_eng": "Beaver Grey — vy lt",
        "name_color_ru": "Боброво-серый, оч. Св. "
      },
      {
        "id": 325,
        "color": "#fff3ad",
        "name": "3078",
        "name_color_eng": "Golden Yellow — vy lt",
        "name_color_ru": "Желтый золотой, оч. Св. "
      },
      {
        "id": 326,
        "color": "#c6d3e1",
        "name": "3325",
        "name_color_eng": "Baby Blue — lt",
        "name_color_ru": "Нежно голубой, св. "
      },
      {
        "id": 327,
        "color": "#f7b4b7",
        "name": "3326",
        "name_color_eng": "Rose — lt",
        "name_color_ru": "Розы, св. "
      },
      {
        "id": 328,
        "color": "#c36154",
        "name": "3328",
        "name_color_eng": "Salmon — dk",
        "name_color_ru": "Лососевый, т. "
      },
      {
        "id": 329,
        "color": "#f38351",
        "name": "3340",
        "name_color_eng": "Apricot — med",
        "name_color_ru": "Абрикосовый, ср. "
      },
      {
        "id": 330,
        "color": "#fbbe9d",
        "name": "3341",
        "name_color_eng": "Apricot",
        "name_color_ru": "Абрикосовый"
      },
      {
        "id": 331,
        "color": "#486131",
        "name": "3345",
        "name_color_eng": "Hunter Green — dk",
        "name_color_ru": "Защитный, грязновато зеленый, т. "
      },
      {
        "id": 332,
        "color": "#6a823d",
        "name": "3346",
        "name_color_eng": "Hunter Green",
        "name_color_ru": "Защитный, грязновато зеленый"
      },
      {
        "id": 333,
        "color": "#78983b",
        "name": "3347",
        "name_color_eng": "Yellow Green — med",
        "name_color_ru": "Желто-зеленый, ср. "
      },
      {
        "id": 334,
        "color": "#e3ee9f",
        "name": "3348",
        "name_color_eng": "Yellow Green — lt",
        "name_color_ru": "Желто-зеленый, св. "
      },
      {
        "id": 335,
        "color": "#b95569",
        "name": "3350",
        "name_color_eng": "Dusty Rose — ultra dk",
        "name_color_ru": "Пыльной розы, ультра т. "
      },
      {
        "id": 336,
        "color": "#e3a5aa",
        "name": "3354",
        "name_color_eng": "Dusty Rose — lt",
        "name_color_ru": "Пыльной розы, св. "
      },
      {
        "id": 337,
        "color": "#2e3d1a",
        "name": "3362",
        "name_color_eng": "Pine Green — dk",
        "name_color_ru": "Сосновый, т. "
      },
      {
        "id": 338,
        "color": "#72885f",
        "name": "3363",
        "name_color_eng": "Pine Green — med",
        "name_color_ru": "Сосновый, ср. "
      },
      {
        "id": 339,
        "color": "#85905c",
        "name": "3364",
        "name_color_eng": "Pine Green",
        "name_color_ru": "Сосновый"
      },
      {
        "id": 340,
        "color": "#2d1705",
        "name": "3371",
        "name_color_eng": "Black Brown",
        "name_color_ru": "Черно-коричневый"
      },
      {
        "id": 341,
        "color": "#b34e8c",
        "name": "3607",
        "name_color_eng": "Plum — lt",
        "name_color_ru": "Сливовый, св. "
      },
      {
        "id": 342,
        "color": "#c07ba3",
        "name": "3608",
        "name_color_eng": "Plum — vy lt",
        "name_color_ru": "Сливовый, оч. Св. "
      },
      {
        "id": 343,
        "color": "#e9afd3",
        "name": "3609",
        "name_color_eng": "Plum — ultra lt",
        "name_color_ru": "Сливовый, ультра св. "
      },
      {
        "id": 344,
        "color": "#7d3248",
        "name": "3685",
        "name_color_eng": "Mauve — vy dk",
        "name_color_ru": "Розовато-лиловый, оч. Т. "
      },
      {
        "id": 345,
        "color": "#c2596d",
        "name": "3687",
        "name_color_eng": "Mauve",
        "name_color_ru": "Розовато-лиловый"
      },
      {
        "id": 346,
        "color": "#e6849a",
        "name": "3688",
        "name_color_eng": "Mauve — med",
        "name_color_ru": "Розовато-лиловый, ср. "
      },
      {
        "id": 347,
        "color": "#e8b9c5",
        "name": "3689",
        "name_color_eng": "Mauve — lt",
        "name_color_ru": "Розовато-лиловый, св. "
      },
      {
        "id": 348,
        "color": "#f65d5b",
        "name": "3705",
        "name_color_eng": "Melon — dk",
        "name_color_ru": "Дыни, т. "
      },
      {
        "id": 349,
        "color": "#ff988e",
        "name": "3706",
        "name_color_eng": "Melon — med",
        "name_color_ru": "Дыни, ср. "
      },
      {
        "id": 350,
        "color": "#fcbbc1",
        "name": "3708",
        "name_color_eng": "Melon — lt",
        "name_color_ru": "Дыни, св. "
      },
      {
        "id": 351,
        "color": "#db7d73",
        "name": "3712",
        "name_color_eng": "Salmon — med",
        "name_color_ru": "Лососевый, ср. "
      },
      {
        "id": 352,
        "color": "#fcdcda",
        "name": "3713",
        "name_color_eng": "Salmon — vy lt",
        "name_color_ru": "Лососевый, оч. Св. "
      },
      {
        "id": 353,
        "color": "#fcb1ba",
        "name": "3716",
        "name_color_eng": "Dusty Rose — vy lt",
        "name_color_ru": "Пыльной розы, оч. Св. "
      },
      {
        "id": 354,
        "color": "#aa5048",
        "name": "3721",
        "name_color_eng": "Shell Pink — dk",
        "name_color_ru": "Розовых ракушек, т. "
      },
      {
        "id": 355,
        "color": "#a45d55",
        "name": "3722",
        "name_color_eng": "Shell Pink — med",
        "name_color_ru": "Розовых ракушек, ср. "
      },
      {
        "id": 356,
        "color": "#874c49",
        "name": "3726",
        "name_color_eng": "Antique Mauve — dk",
        "name_color_ru": "Античный розовато-лиловый, т. "
      },
      {
        "id": 357,
        "color": "#e6bcc3",
        "name": "3727",
        "name_color_eng": "Antique Mauve — lt",
        "name_color_ru": "Античный розовато-лиловый, св. "
      },
      {
        "id": 358,
        "color": "#c65a6b",
        "name": "3731",
        "name_color_eng": "Dusty Rose — vy dk",
        "name_color_ru": "Пыльной розы, оч. Т. "
      },
      {
        "id": 359,
        "color": "#eda6ac",
        "name": "3733",
        "name_color_eng": "Dusty Rose",
        "name_color_ru": "Пыльной розы"
      },
      {
        "id": 360,
        "color": "#72535a",
        "name": "3740",
        "name_color_eng": "Antique Violet — dk",
        "name_color_ru": "Антично фиолетовый, т. "
      },
      {
        "id": 361,
        "color": "#c7bac7",
        "name": "3743",
        "name_color_eng": "Antique Violet — vy lt",
        "name_color_ru": "Антично фиолетовый, оч. Св. "
      },
      {
        "id": 362,
        "color": "#8572a4",
        "name": "3746",
        "name_color_eng": "Blue Violet — dk",
        "name_color_ru": "Сине-фиолетовый, т. "
      },
      {
        "id": 363,
        "color": "#bcc0d8",
        "name": "3747",
        "name_color_eng": "Blue Violet — vy lt",
        "name_color_ru": "Сине-фиолетовый, оч. Св. "
      },
      {
        "id": 364,
        "color": "#444d58",
        "name": "3750",
        "name_color_eng": "Antique Blue — vy dk",
        "name_color_ru": "Античный синий, оч. Т. "
      },
      {
        "id": 365,
        "color": "#bbc8d6",
        "name": "3752",
        "name_color_eng": "Antique Blue — vy lt",
        "name_color_ru": "Античный синий, оч. Св. "
      },
      {
        "id": 366,
        "color": "#ccd5da",
        "name": "3753",
        "name_color_eng": "Antique Blue — ultra vy lt",
        "name_color_ru": "Античный синий, ультра св. "
      },
      {
        "id": 367,
        "color": "#9fbbd5",
        "name": "3755",
        "name_color_eng": "Baby Blue",
        "name_color_ru": "Нежно голубой"
      },
      {
        "id": 368,
        "color": "#e8edf3",
        "name": "3756",
        "name_color_eng": "Baby Blue — ultra vy lt",
        "name_color_ru": "Нежно голубой, ультра св. "
      },
      {
        "id": 369,
        "color": "#4f819d",
        "name": "3760",
        "name_color_eng": "Wedgwood — med",
        "name_color_ru": "Пыльно-синий, ср. (гжель)"
      },
      {
        "id": 370,
        "color": "#b8dae9",
        "name": "3761",
        "name_color_eng": "Sky Blue — lt",
        "name_color_ru": "Небесно голубой, св. "
      },
      {
        "id": 371,
        "color": "#296e87",
        "name": "3765",
        "name_color_eng": "Peacock Blue — vy dk",
        "name_color_ru": "Переливчатый синий, оч. Т. "
      },
      {
        "id": 372,
        "color": "#7cbec6",
        "name": "3766",
        "name_color_eng": "Peacock Blue — lt",
        "name_color_ru": "Переливчатый синий, св. "
      },
      {
        "id": 373,
        "color": "#6b8084",
        "name": "3768",
        "name_color_eng": "Grey Green — dk",
        "name_color_ru": "Серо-зеленый"
      },
      {
        "id": 374,
        "color": "#f8eedc",
        "name": "3770",
        "name_color_eng": "Tawny — vy lt",
        "name_color_ru": "Рыжевато-коричневый, оч. Св. "
      },
      {
        "id": 375,
        "color": "#e8b58f",
        "name": "3771",
        "name_color_eng": "Terra Cotta — ultra vy lt",
        "name_color_ru": "Терракотовый, ультра оч. Св. "
      },
      {
        "id": 376,
        "color": "#b8846c",
        "name": "3772",
        "name_color_eng": "Desert Sand — vy dk",
        "name_color_ru": "Пустынного песка, оч. Т. "
      },
      {
        "id": 377,
        "color": "#d8b39d",
        "name": "3773",
        "name_color_eng": "Desert Sand — med",
        "name_color_ru": "Пустынного песка, ср. "
      },
      {
        "id": 378,
        "color": "#f6e1d0",
        "name": "3774",
        "name_color_eng": "Desert Sand — vy lt",
        "name_color_ru": "Пустынного песка, оч. Св. "
      },
      {
        "id": 379,
        "color": "#c27d45",
        "name": "3776",
        "name_color_eng": "Mahogany — lt",
        "name_color_ru": "Красного дерева, св. "
      },
      {
        "id": 380,
        "color": "#892b21",
        "name": "3777",
        "name_color_eng": "Terra Cotta — vy dk",
        "name_color_ru": "Терракотовый, оч. Т. "
      },
      {
        "id": 381,
        "color": "#c4856f",
        "name": "3778",
        "name_color_eng": "Terra Cotta — lt",
        "name_color_ru": "Терракотовый, св. "
      },
      {
        "id": 382,
        "color": "#f2c6b8",
        "name": "3779",
        "name_color_eng": "Terra Cotta — ultra vy lt",
        "name_color_ru": "Терракотовый, ультра св. "
      },
      {
        "id": 383,
        "color": "#5c4c2d",
        "name": "3781",
        "name_color_eng": "Mocha Brown — dk",
        "name_color_ru": "Мокка, т. "
      },
      {
        "id": 384,
        "color": "#d2caba",
        "name": "3782",
        "name_color_eng": "Mocha Brown — lt",
        "name_color_ru": "Мокка, св. "
      },
      {
        "id": 385,
        "color": "#605b45",
        "name": "3787",
        "name_color_eng": "Brown Grey — dk",
        "name_color_ru": "Коричнево-серый, т. "
      },
      {
        "id": 386,
        "color": "#978266",
        "name": "3790",
        "name_color_eng": "Beige Grey — ultra dk",
        "name_color_ru": "Бежево-серый, ультра т. "
      },
      {
        "id": 387,
        "color": "#2f3b36",
        "name": "3799",
        "name_color_eng": "Pewter Grey — vy dk",
        "name_color_ru": "Оловянно серый, оч. Т. "
      },
      {
        "id": 388,
        "color": "#e65952",
        "name": "3801",
        "name_color_eng": "Christmas Red — lt",
        "name_color_ru": "Рождественский красный, св. "
      },
      {
        "id": 389,
        "color": "#6f2e35",
        "name": "3802",
        "name_color_eng": "Antique Mauve — vy dk",
        "name_color_ru": "Античный розовато-лиловый, оч. Т. "
      },
      {
        "id": 390,
        "color": "#863248",
        "name": "3803",
        "name_color_eng": "Mauve — dk",
        "name_color_ru": "Розовато-лиловый, т. "
      },
      {
        "id": 391,
        "color": "#c33c62",
        "name": "3804",
        "name_color_eng": "Cyclamen Pink — dk",
        "name_color_ru": "Розового цикламена, т. "
      },
      {
        "id": 392,
        "color": "#ce507f",
        "name": "3805",
        "name_color_eng": "Cyclamen Pink",
        "name_color_ru": "Розового цикламена"
      },
      {
        "id": 393,
        "color": "#f19ac2",
        "name": "3806",
        "name_color_eng": "Cyclamen Pink — lt",
        "name_color_ru": "Розового цикламена, св. "
      },
      {
        "id": 394,
        "color": "#073563",
        "name": "3807",
        "name_color_eng": "Cornflower Blue",
        "name_color_ru": "Васильковый, кобальтовый"
      },
      {
        "id": 395,
        "color": "#0c464b",
        "name": "3808",
        "name_color_eng": "Turquoise — ultra vy dk",
        "name_color_ru": "Бирюзовый, ультра т. "
      },
      {
        "id": 396,
        "color": "#1c869b",
        "name": "3809",
        "name_color_eng": "Turquoise — vy dk",
        "name_color_ru": "Бирюзовый, оч. Т. "
      },
      {
        "id": 397,
        "color": "#4fa1a9",
        "name": "3810",
        "name_color_eng": "Turquoise — dk",
        "name_color_ru": "Бирюзовый, т. "
      },
      {
        "id": 398,
        "color": "#c4e7e8",
        "name": "3811",
        "name_color_eng": "Turquoise — vy lt",
        "name_color_ru": "Бирюзовый, оч. Св. "
      },
      {
        "id": 399,
        "color": "#008679",
        "name": "3812",
        "name_color_eng": "Seagreen — vy dk",
        "name_color_ru": "Морской воды, оч. Т. "
      },
      {
        "id": 400,
        "color": "#b8cebe",
        "name": "3813",
        "name_color_eng": "Blue Green — lt",
        "name_color_ru": "Сине-зеленый, св. "
      },
      {
        "id": 401,
        "color": "#3f8878",
        "name": "3814",
        "name_color_eng": "Aquamarine",
        "name_color_ru": "Аквамарин"
      },
      {
        "id": 402,
        "color": "#538a6d",
        "name": "3815",
        "name_color_eng": "Celadon Green — dk",
        "name_color_ru": "Серовато-зеленый, т. "
      },
      {
        "id": 403,
        "color": "#699d85",
        "name": "3816",
        "name_color_eng": "Celadon Green",
        "name_color_ru": "Серовато-зеленый"
      },
      {
        "id": 404,
        "color": "#a6c5b4",
        "name": "3817",
        "name_color_eng": "Celadon Green — lt",
        "name_color_ru": "Серовато-зеленый, св. "
      },
      {
        "id": 405,
        "color": "#005d2e",
        "name": "3818",
        "name_color_eng": "Emerald Green — ultra vy dk",
        "name_color_ru": "Изумрудный, ультра т. "
      },
      {
        "id": 406,
        "color": "#d2d057",
        "name": "3819",
        "name_color_eng": "Moss Green — lt",
        "name_color_ru": "Мох, св. "
      },
      {
        "id": 407,
        "color": "#ddb442",
        "name": "3820",
        "name_color_eng": "Straw — dk",
        "name_color_ru": "Соломенный, т. "
      },
      {
        "id": 408,
        "color": "#e2b73a",
        "name": "3821",
        "name_color_eng": "Straw",
        "name_color_ru": "Соломенный"
      },
      {
        "id": 409,
        "color": "#f1d863",
        "name": "3822",
        "name_color_eng": "Straw — lt",
        "name_color_ru": "Соломенный, св. "
      },
      {
        "id": 410,
        "color": "#fffcdc",
        "name": "3823",
        "name_color_eng": "Yellow — ultra pale",
        "name_color_ru": "Желтый, ультра бледный"
      },
      {
        "id": 411,
        "color": "#fbccb8",
        "name": "3824",
        "name_color_eng": "Apricot — lt",
        "name_color_ru": "Абрикосовый, св. "
      },
      {
        "id": 412,
        "color": "#fdc391",
        "name": "3825",
        "name_color_eng": "Pumpkin — pale",
        "name_color_ru": "Тыквенный, бледный"
      },
      {
        "id": 413,
        "color": "#c38c55",
        "name": "3826",
        "name_color_eng": "Golden Brown",
        "name_color_ru": "Золотовато-коричневый"
      },
      {
        "id": 414,
        "color": "#e8aa5f",
        "name": "3827",
        "name_color_eng": "Golden Brown — pale",
        "name_color_ru": "Золотовато-коричневый, бледный"
      },
      {
        "id": 415,
        "color": "#af8846",
        "name": "3828",
        "name_color_eng": "Hazelnut Brown",
        "name_color_ru": "Фундука"
      },
      {
        "id": 416,
        "color": "#a47829",
        "name": "3829",
        "name_color_eng": "Old Gold — vy dk",
        "name_color_ru": "Старого золота, оч. Т. "
      },
      {
        "id": 417,
        "color": "#b97161",
        "name": "3830",
        "name_color_eng": "Terra Cotta",
        "name_color_ru": "Терракотовый"
      },
      {
        "id": 418,
        "color": "#b33034",
        "name": "3831",
        "name_color_eng": "Raspberry — dk",
        "name_color_ru": "Малиновый, т. "
      },
      {
        "id": 419,
        "color": "#b33034",
        "name": "3832",
        "name_color_eng": "Raspberry — med",
        "name_color_ru": "Малиновый, ср. "
      },
      {
        "id": 420,
        "color": "#e8868c",
        "name": "3833",
        "name_color_eng": "Raspberry — lt",
        "name_color_ru": "Малиновый, св. "
      },
      {
        "id": 421,
        "color": "#642441",
        "name": "3834",
        "name_color_eng": "Grape — dk",
        "name_color_ru": "Красного винограда, т. "
      },
      {
        "id": 422,
        "color": "#784775",
        "name": "3835",
        "name_color_eng": "Grape — med",
        "name_color_ru": "Красного винограда, ср. "
      },
      {
        "id": 423,
        "color": "#c1aec2",
        "name": "3836",
        "name_color_eng": "Grape — lt",
        "name_color_ru": "Красного винограда, св. "
      },
      {
        "id": 424,
        "color": "#7c4087",
        "name": "3837",
        "name_color_eng": "Lavender — ultra dk",
        "name_color_ru": "Лаванда, ультра тёмный"
      },
      {
        "id": 425,
        "color": "#62669a",
        "name": "3838",
        "name_color_eng": "Lavender Blue — dk",
        "name_color_ru": "Лавандово-синий, т. "
      },
      {
        "id": 426,
        "color": "#94a8c9",
        "name": "3839",
        "name_color_eng": "Lavender Blue — med",
        "name_color_ru": "Лавандово-синий, ср. "
      },
      {
        "id": 427,
        "color": "#c1d4ec",
        "name": "3840",
        "name_color_eng": "Lavender Blue — lt",
        "name_color_ru": "Лавандово-синий, св. "
      },
      {
        "id": 428,
        "color": "#cbdde7",
        "name": "3841",
        "name_color_eng": "Baby Blue — pale",
        "name_color_ru": "Нежно голубой, бледный"
      },
      {
        "id": 429,
        "color": "#12557e",
        "name": "3842",
        "name_color_eng": "Wedgwood — dk",
        "name_color_ru": "Пыльно-синий, т. "
      },
      {
        "id": 430,
        "color": "#0095d3",
        "name": "3843",
        "name_color_eng": "Electric Blue",
        "name_color_ru": "Волнующе синий"
      },
      {
        "id": 431,
        "color": "#0095d3",
        "name": "3844",
        "name_color_eng": "Bright Turquoise — dk",
        "name_color_ru": "Ярко-бирюзовый, т. "
      },
      {
        "id": 432,
        "color": "#01cbec",
        "name": "3845",
        "name_color_eng": "Bright Turquoise — med",
        "name_color_ru": "Ярко-бирюзовый, ср. "
      },
      {
        "id": 433,
        "color": "#63d3e1",
        "name": "3846",
        "name_color_eng": "Bright Turquoise — lt",
        "name_color_ru": "Ярко-бирюзовый, св. "
      },
      {
        "id": 434,
        "color": "#00604e",
        "name": "3847",
        "name_color_eng": "Teal Green — dk",
        "name_color_ru": "Цвет рабочего стола Windows, т. "
      },
      {
        "id": 435,
        "color": "#42917f",
        "name": "3848",
        "name_color_eng": "Teal Green — med",
        "name_color_ru": "Цвет рабочего стола Windows, ср. "
      },
      {
        "id": 436,
        "color": "#6eb2a7",
        "name": "3849",
        "name_color_eng": "Teal Green — lt",
        "name_color_ru": "Цвет рабочего стола Windows, св. "
      },
      {
        "id": 437,
        "color": "#08926f",
        "name": "3850",
        "name_color_eng": "Bright Green — dk",
        "name_color_ru": "Ярко-зеленый, т. "
      },
      {
        "id": 438,
        "color": "#56b69c",
        "name": "3851",
        "name_color_eng": "Bright Green — lt",
        "name_color_ru": "Ярко-зеленый, св. "
      },
      {
        "id": 439,
        "color": "#cc972b",
        "name": "3852",
        "name_color_eng": "Straw — vy dk",
        "name_color_ru": "Соломенный, оч. Т. "
      },
      {
        "id": 440,
        "color": "#fc9749",
        "name": "3853",
        "name_color_eng": "Autumn Gold — dk",
        "name_color_ru": "Золотой осенний, т. "
      },
      {
        "id": 441,
        "color": "#f7b25c",
        "name": "3854",
        "name_color_eng": "Autumn Gold — med",
        "name_color_ru": "Золотой осенний, ср. "
      },
      {
        "id": 442,
        "color": "#f7ca84",
        "name": "3855",
        "name_color_eng": "Autumn Gold — lt",
        "name_color_ru": "Золотой осенний, св. "
      },
      {
        "id": 443,
        "color": "#ebbc9a",
        "name": "3856",
        "name_color_eng": "Mahogany — ultra vy lt",
        "name_color_ru": "Красного дерева, ультра св. "
      },
      {
        "id": 444,
        "color": "#804133",
        "name": "3857",
        "name_color_eng": "Rosewood — dk",
        "name_color_ru": "Розового дерева, т. "
      },
      {
        "id": 445,
        "color": "#8d5745",
        "name": "3858",
        "name_color_eng": "Rosewood — med",
        "name_color_ru": "Розового дерева, ср. "
      },
      {
        "id": 446,
        "color": "#b68472",
        "name": "3859",
        "name_color_eng": "Rosewood — lt",
        "name_color_ru": "Розового дерева, св. "
      },
      {
        "id": 447,
        "color": "#947974",
        "name": "3860",
        "name_color_eng": "Cocoa",
        "name_color_ru": "Какао"
      },
      {
        "id": 448,
        "color": "#9e887f",
        "name": "3861",
        "name_color_eng": "Cocoa — lt",
        "name_color_ru": "Какао, св. "
      },
      {
        "id": 449,
        "color": "#845f2e",
        "name": "3862",
        "name_color_eng": "Mocha Beige — dk",
        "name_color_ru": "Темно-коричневый бежевый, т. "
      },
      {
        "id": 450,
        "color": "#a4866c",
        "name": "3863",
        "name_color_eng": "Mocha Beige — med",
        "name_color_ru": "Темно-коричневый бежевый, ср. "
      },
      {
        "id": 451,
        "color": "#c9af93",
        "name": "3864",
        "name_color_eng": "Mocha Beige — lt",
        "name_color_ru": "Темно-коричневый бежевый, св. "
      },
      {
        "id": 452,
        "color": "#faf9f5",
        "name": "3865",
        "name_color_eng": "Winter White",
        "name_color_ru": "Снежно белый"
      },
      {
        "id": 453,
        "color": "#e7e5dd",
        "name": "3866",
        "name_color_eng": "Mocha Brown — ultra vy lt",
        "name_color_ru": "Мокка, ультра св. "
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('colors', null, {})
  }
};
