let ALL_BRICKLINK_SOLID_COLORS = [
    /**不顯示的顏色註解掉 */
    /*
    {
        name: "White",
        hex: "#ffffff",
        id: 1,
    },
    {
        name: "Very Light Gray",
        hex: "#e8e8e8",
        id: 49,
    },
    {
        name: "Very Light Bluish Gray",
        hex: "#e4e8e8",
        id: 99,
    },
    {
        name: "Light Bluish Gray",
        hex: "#afb5c7",
        id: 86,
    },
    {
        name: "Light Gray",
        hex: "#9c9c9c",
        id: 9,
    },
    {
        name: "Dark Gray",
        hex: "#6b5a5a",
        id: 10,
    },
    {
        name: "Dark Bluish Gray",
        hex: "#595d60",
        id: 85,
    },
    {
        name: "Black",
        hex: "#212121",
        id: 11,
    },
    {
        name: "Dark Red",
        hex: "#6a0e15",
        id: 59,
    },
    {
        name: "Red",
        hex: "#b30006",
        id: 5,
    },
    {
        name: "Rust",
        hex: "#b52c20",
        id: 27,
    },
    {
        name: "Coral",
        hex: "#f88379",
        id: 220,
    },
    {
        name: "Salmon",
        hex: "#f45c40",
        id: 25,
    },
    {
        name: "Light Salmon",
        hex: "#ffdedc",
        id: 26,
    },
    {
        name: "Sand Red",
        hex: "#8c6b6b",
        id: 58,
    },
    {
        name: "Reddish Brown",
        hex: "#89351d",
        id: 88,
    },
    {
        name: "Brown",
        hex: "#532115",
        id: 8,
    },
    {
        name: "Dark Brown",
        hex: "#330000",
        id: 120,
    },
    {
        name: "Dark Tan",
        hex: "#907450",
        id: 69,
    },
    {
        name: "Tan",
        hex: "#dec69c",
        id: 2,
    },
    {
        name: "Light Nougat",
        hex: "#feccb0",
        id: 90,
    },
    {
        name: "Nougat",
        hex: "#ffaf7d",
        id: 28,
    },
    {
        name: "Medium Nougat",
        hex: "#e3a05b",
        id: 150,
    },
    {
        name: "Dark Nougat",
        hex: "#e78b3e",
        id: 225,
    },
    {
        name: "Medium Brown",
        hex: "#a16c42",
        id: 91,
    },
    {
        name: "Fabuland Brown",
        hex: "#b3694e",
        id: 106,
    },
    {
        name: "Fabuland Orange",
        hex: "#ef9121",
        id: 160,
    },
    {
        name: "Earth Orange",
        hex: "#e6881d",
        id: 29,
    },
    {
        name: "Dark Orange",
        hex: "#b35408",
        id: 68,
    },
    {
        name: "Neon Orange",
        hex: "#fa5947",
        id: 165,
    },
    {
        name: "Orange",
        hex: "#ff7e14",
        id: 4,
    },
    {
        name: "Medium Orange",
        hex: "#ffa531",
        id: 31,
    },
    {
        name: "Bright Light Orange",
        hex: "#f7ba30",
        id: 110,
    },
    {
        name: "Light Orange",
        hex: "#f7ad63",
        id: 32,
    },
    {
        name: "Very Light Orange",
        hex: "#e6c05d",
        id: 96,
    },
    {
        name: "Dark Yellow",
        hex: "#dd982e",
        id: 161,
    },
    {
        name: "Yellow",
        hex: "#f7d117",
        id: 3,
    },
    {
        name: "Bright Light Yellow",
        hex: "#f3e055",
        id: 103,
    },
    {
        name: "Light Yellow",
        hex: "#ffe383",
        id: 33,
    },
    {
        name: "Light Lime",
        hex: "#ebee8f",
        id: 35,
    },
    {
        name: "Yellowish Green",
        hex: "#dfeea5",
        id: 158,
    },
    {
        name: "Neon Green",
        hex: "#bcef66",
        id: 166,
    },
    {
        name: "Medium Lime",
        hex: "#bdc618",
        id: 76,
    },
    {
        name: "Lime",
        hex: "#a6ca55",
        id: 34,
    },
    {
        name: "Olive Green",
        hex: "#7c9051",
        id: 155,
    },
    {
        name: "Dark Green",
        hex: "#2e5543",
        id: 80,
    },
    {
        name: "Green",
        hex: "#00642e",
        id: 6,
    },
    {
        name: "Bright Green",
        hex: "#10cb31",
        id: 36,
    },
    {
        name: "Medium Green",
        hex: "#62f58e",
        id: 37,
    },
    {
        name: "Light Green",
        hex: "#a5dbb5",
        id: 38,
    },
    {
        name: "Sand Green",
        hex: "#76a290",
        id: 48,
    },
    {
        name: "Dark Turquoise",
        hex: "#008a80",
        id: 39,
    },
    {
        name: "Light Turquoise",
        hex: "#31b5ca",
        id: 40,
    },
    {
        name: "Aqua",
        hex: "#b5d3d6",
        id: 41,
    },
    {
        name: "Light Aqua",
        hex: "#ccffff",
        id: 152,
    },
    {
        name: "Dark Blue",
        hex: "#143044",
        id: 63,
    },
    {
        name: "Blue",
        hex: "#0057a6",
        id: 7,
    },
    {
        name: "Dark Azure",
        hex: "#3399ff",
        id: 153,
    },
    {
        name: "Medium Azure",
        hex: "#42c0fb",
        id: 156,
    },
    {
        name: "Medium Blue",
        hex: "#61afff",
        id: 42,
    },
    {
        name: "Maersk Blue",
        hex: "#6badd6",
        id: 72,
    },
    {
        name: "Bright Light Blue",
        hex: "#9fc3e9",
        id: 105,
    },
    {
        name: "Light Blue",
        hex: "#b4d2e3",
        id: 62,
    },
    {
        name: "Sky Blue",
        hex: "#7dbfdd",
        id: 87,
    },
    {
        name: "Sand Blue",
        hex: "#5a7184",
        id: 55,
    },
    {
        name: "Blue-Violet",
        hex: "#506cef",
        id: 97,
    },
    {
        name: "Dark Blue-Violet",
        hex: "#2032b0",
        id: 109,
    },
    {
        name: "Violet",
        hex: "#3448a4",
        id: 43,
    },
    {
        name: "Medium Violet",
        hex: "#9391e4",
        id: 73,
    },
    {
        name: "Light Violet",
        hex: "#c9cae2",
        id: 44,
    },
    {
        name: "Dark Purple",
        hex: "#5f2683",
        id: 89,
    },
    {
        name: "Purple",
        hex: "#a5499c",
        id: 24,
    },
    {
        name: "Light Purple",
        hex: "#da70d6",
        id: 93,
    },
    {
        name: "Medium Lavender",
        hex: "#885e9e",
        id: 157,
    },
    {
        name: "Clikits Lavender",
        hex: "#e0aad9",
        id: 227,
    },
    {
        name: "Lavender",
        hex: "#b18cbf",
        id: 154,
    },
    {
        name: "Sand Purple",
        hex: "#b57da5",
        id: 54,
    },
    {
        name: "Magenta",
        hex: "#b52952",
        id: 71,
    },
    {
        name: "Dark Pink",
        hex: "#c87080",
        id: 47,
    },
    {
        name: "Medium Dark Pink",
        hex: "#f785b1",
        id: 94,
    },
    {
        name: "Bright Pink",
        hex: "#ffbbff",
        id: 104,
    },
    {
        name: "Pink",
        hex: "#ffc0cb",
        id: 23,
    },
    {
        name: "Light Pink",
        hex: "#ffe1ff",
        id: 56,
    },
    {
        name: "Neon Yellow",
        hex: "#fffc00",
        id: 236,
    },
    // add in some pearl colors to support specific sets,
    // but avoid the other pearl colors for now since they
    // may weirdly replace similar solid non pearl
    {
        name: "Pearl Gold",
        hex: "#e79500",
        id: 115,
    },
    {
        name: "Pearl Dark Gray",
        hex: "#666660",
        id: 77,
    },
    {
        name: "Flat Silver",
        hex: "#898788",
        id: 95,
    },
    // The 2 below are new in 2022
    // {
    //     name: "Medium Brown",
    //     hex: "#A16C42",
    //     id: 240,
    // },
    {
        name: "Medium Tan",
        hex: "#D9C594",
        id: 241,
    }, 
    */{
        name: "test1",
        hex: "#f7f0e3",
        id: 500,
    }, {
        name: "test2",
        hex: "#a3a9aa",
        id: 501,
    }, {
        name: "test3",
        hex: "#6f7176",
        id: 502,
    }, {
        name: "test4",
        hex: "#4b4c50",
        id: 503,
    }, {
        name: "test5",
        hex: "#302e32",
        id: 504,
    }, {
        name: "test6",
        hex: "#523e37",
        id: 505,
    }, {
        name: "test7",
        hex: "#73483a",
        id: 506,
    }, {
        name: "test8",
        hex: "#ab5827",
        id: 507,
    }, {
        name: "test9",
        hex: "#b37c51",
        id: 508,
    }, {
        name: "test10",
        hex: "#de9064",
        id: 509,
    }, {
        name: "test11",
        hex: "#eca279",
        id: 510,
    }, {
        name: "test12",
        hex: "#f1b993",
        id: 511,
    }, {
        name: "test13",
        hex: "#ebc0a4",
        id: 512,
    }, {
        name: "test14",
        hex: "#ffd7c3",
        id: 513,
    }, {
        name: "test15",
        hex: "#fdede7",
        id: 514,
    }, {
        name: "test16",
        hex: "#dfc790",
        id: 515,
    }, {
        name: "test17",
        hex: "#998769",
        id: 516,
    }, {
        name: "test18",
        hex: "#ff7e30",
        id: 517,
    }, {
        name: "test19",
        hex: "#ffae11",
        id: 518,
    }, {
        name: "test20",
        hex: "#ffd300",
        id: 519,
    }, {
        name: "test21",
        hex: "#f1c277",
        id: 520,
    }, {
        name: "test22",
        hex: "#fff076",
        id: 521,
    }, {
        name: "test23",
        hex: "#cbf193",
        id: 522,
    }, {
        name: "test24",
        hex: "#9cbb27",
        id: 523,
    }, {
        name: "test25",
        hex: "#00a64d",
        id: 524,
    }, {
        name: "test26",
        hex: "#00863a",
        id: 525,
    }, {
        name: "test27",
        hex: "#1a4d3b",
        id: 526,
    }, {
        name: "test28",
        hex: "#8d8f63",
        id: 527,
    }, {
        name: "test29",
        hex: "#749883",
        id: 528,
    }, {
        name: "test30",
        hex: "#c1efe3",
        id: 529,
    }, {
        name: "test31",
        hex: "#00b5cc",
        id: 530,
    }, {
        name: "test32",
        hex: "#93bce6",
        id: 531,
    }, {
        name: "test33",
        hex: "#58a3da",
        id: 532,
    }, {
        name: "test34",
        hex: "#0094d0",
        id: 533,
    }, {
        name: "test35",
        hex: "#0065b2",
        id: 534,
    }, {
        name: "test36",
        hex: "#23415d",
        id: 535,
    }, {
        name: "test37",
        hex: "#7b91a5",
        id: 536,
    }, {
        name: "test38",
        hex: "#673e87",
        id: 537,
    }, {
        name: "test39",
        hex: "#8154ac",
        id: 538,
    }, {
        name: "test40",
        hex: "#ae78c2",
        id: 539,
    }, {
        name: "test41",
        hex: "#c0aedf",
        id: 540,
    }, {
        name: "test42",
        hex: "#edaad6",
        id: 541,
    }, {
        name: "test43",
        hex: "#d85fa5",
        id: 542,
    }, {
        name: "test44",
        hex: "#b72c75",
        id: 543,
    }, {
        name: "test45",
        hex: "#cd2928",
        id: 544,
    }, {
        name: "test46",
        hex: "#853433",
        id: 545,
    }, {
        name: "test47",
        hex: "#b4823e",
        id: 546,
    }, {
        name: "test48",
        hex: "#484649",
        id: 547,
    }, {
        name: "test49",
        hex: "#7e7a85",
        id: 548,
    }, {
        name: "test50",
        hex: "#bfc3c9",
        id: 549,
    }, {
        name: "test51",
        hex: "#959ba3",
        id: 550,
    }, {
        name: "test52",
        hex: "#f79570",
        id: 551,
    }, {
        name: "test53",
        hex: "#ff7680",
        id: 552,
    }, {
        name: "test54",
        hex: "#009790",
        id: 553,
    }, {
        name: "test55",
        hex: "#dfc8df",
        id: 554,
    }, {
        name: "test56",
        hex: "#ca9fb1",
        id: 555,
    }, {
        name: "test57",
        hex: "#c081a1",
        id: 556,
    }, {
        name: "test58",
        hex: "#e27ba2",
        id: 557,
    }, {
        name: "test59",
        hex: "#c55285",
        id: 558,
    }, {
        name: "test60",
        hex: "#e054a1",
        id: 559,
    }, {
        name: "test61",
        hex: "#e14585",
        id: 560,
    }, {
        name: "test62",
        hex: "#c2535c",
        id: 561,
    }, {
        name: "test63",
        hex: "#e18b80",
        id: 562,
    }, {
        name: "test64",
        hex: "#9899b3",
        id: 563,
    }, {
        name: "test65",
        hex: "#8b76a6",
        id: 564,
    }, {
        name: "test66",
        hex: "#7474ba",
        id: 565,
    }, {
        name: "test67",
        hex: "#a73aa2",
        id: 566,
    }, {
        name: "test68",
        hex: "#724a5f",
        id: 567,
    }, {
        name: "test69",
        hex: "#724345",
        id: 568,
    }, {
        name: "test70",
        hex: "#aa8b6e",
        id: 569,
    }, {
        name: "test71",
        hex: "#ecd7d5",
        id: 570,
    }, {
        name: "test72",
        hex: "#ed502a",
        id: 571,
    }, {
        name: "test73",
        hex: "#f2962f",
        id: 572,
    }, {
        name: "test74",
        hex: "#fff999",
        id: 573,
    }, {
        name: "test75",
        hex: "#e7b067",
        id: 574,
    }, {
        name: "test76",
        hex: "#c0bba2",
        id: 575,
    }, {
        name: "test77",
        hex: "#b9a16d",
        id: 576,
    }, {
        name: "test78",
        hex: "#ffd4b9",
        id: 577,
    }, {
        name: "test79",
        hex: "#26828d",
        id: 578,
    }, {
        name: "test80",
        hex: "#1e4b70",
        id: 579,
    }, {
        name: "test81",
        hex: "#2675a5",
        id: 580,
    }, {
        name: "test82",
        hex: "#00b4d1",
        id: 581,
    }, {
        name: "test83",
        hex: "#5482be",
        id: 582,
    }, {
        name: "test84",
        hex: "#38453a",
        id: 583,
    }, {
        name: "test85",
        hex: "#445c37",
        id: 584,
    }, {
        name: "test86",
        hex: "#99a444",
        id: 585,
    }, {
        name: "test87",
        hex: "#56852f",
        id: 586,
    }, {
        name: "test88",
        hex: "#70ad92",
        id: 587,
    }, {
        name: "test89",
        hex: "#97d4b7",
        id: 588,
    }, {
        name: "test90",
        hex: "#77adb2",
        id: 589,
    }, {
        name: "test91",
        hex: "#bccfdf",
        id: 590,
    }, {
        name: "test92",
        hex: "#96accb",
        id: 591,
    }, {
        name: "test93",
        hex: "#54de37",
        id: 592,
    }, {
        name: "test94",
        hex: "#d4ec65",
        id: 593,
    }, {
        name: "test95",
        hex: "#778b98",
        id: 594,
    }, {
        name: "test96",
        hex: "#576c7a",
        id: 595,
    }, {
        name: "test97",
        hex: "#868684",
        id: 596,
    },
];

const HEX_TO_COLOR_NAME = {};
ALL_BRICKLINK_SOLID_COLORS.forEach((color) => {
    HEX_TO_COLOR_NAME[color.hex] = color.name;
});

const COLOR_NAME_TO_ID = {};
ALL_BRICKLINK_SOLID_COLORS.forEach((color) => {
    COLOR_NAME_TO_ID[color.name] = color.id;
});

const KNOWN_BRICKLINK_STUD_COLOR_NAMES = [
    "test1",
    "test2",
    "test3",
    "test4",
    "test5",
    "test6",
    "test7",
    "test8",
    "test9",
    "test10",
    "test11",
    "test12",
    "test13",
    "test14",
    "test15",
    "test16",
    "test17",
    "test18",
    "test19",
    "test20",
    "test21",
    "test22",
    "test23",
    "test24",
    "test25",
    "test26",
    "test27",
    "test28",
    "test29",
    "test30",
    "test31",
    "test32",
    "test33",
    "test34",
    "test35",
    "test36",
    "test37",
    "test38",
    "test39",
    "test40",
    "test41",
    "test42",
    "test43",
    "test44",
    "test45",
    "test46",
    "test47",
    "test48",
    "test49",
    "test50",
    "test51",
    "test52",
    "test53",
    "test54",
    "test55",
    "test56",
    "test57",
    "test58",
    "test59",
    "test60",
    "test61",
    "test62",
    "test63",
    "test64",
    "test65",
    "test66",
    "test67",
    "test68",
    "test69",
    "test70",
    "test71",
    "test72",
    "test73",
    "test74",
    "test75",
    "test76",
    "test77",
    "test78",
    "test79",
    "test80",
    "test81",
    "test82",
    "test83",
    "test84",
    "test85",
    "test86",
    "test87",
    "test88",
    "test89",
    "test90",
    "test91",
    "test92",
    "test93",
    "test94",
    "test95",
    "test96",
    "test97",
    "Black",
    "Blue",
    "Bright Green",
    "Bright Light Yellow",
    "Bright Pink",
    "Brown",
    "Dark Blue",
    "Dark Bluish Gray",
    "Dark Brown",
    "Dark Gray",
    "Dark Orange",
    "Dark Pink",
    "Dark Purple",
    "Dark Red",
    "Dark Tan",
    "Green",
    "Light Bluish Gray",
    "Light Gray",
    "Lime",
    "Magenta",
    "Medium Azure",
    "Medium Lime",
    "Medium Nougat",
    "Olive Green",
    "Orange",
    "Red",
    "Reddish Brown",
    "Sand Blue",
    "Sand Green",
    "Tan",
    "White",
    "Yellow",
    "Yellowish Green",
    "Trans-Black",
    "Trans-Bright Green",
    "Trans-Clear",
    "Trans-Dark Blue",
    "Trans-Dark Pink",
    "Trans-Green",
    "Trans-Light Blue",
    "Trans-Medium Blue",
    "Trans-Neon Green",
    "Trans-Neon Orange",
    "Trans-Neon Yellow",
    "Trans-Orange",
    "Trans-Purple",
    "Trans-Red",
    "Trans-Yellow",
    "Chrome Antique Brass",
    "Chrome Gold",
    "Chrome Silver",
    "Flat Silver",
    "Pearl Dark Gray",
    "Pearl Gold",
    "Pearl Light Gray",
    "Metallic Silver",
    "Glow In Dark Opaque",
    "Glow In Dark White",
    "Medium Lavender", // manually added from Batman
    "Light Aqua", // manually added from Batman
];

const KNOWN_BRICKLINK_TILE_COLOR_NAMES = [
    "test1",
    "test2",
    "test3",
    "test4",
    "test5",
    "test6",
    "test7",
    "test8",
    "test9",
    "test10",
    "test11",
    "test12",
    "test13",
    "test14",
    "test15",
    "test16",
    "test17",
    "test18",
    "test19",
    "test20",
    "test21",
    "test22",
    "test23",
    "test24",
    "test25",
    "test26",
    "test27",
    "test28",
    "test29",
    "test30",
    "test31",
    "test32",
    "test33",
    "test34",
    "test35",
    "test36",
    "test37",
    "test38",
    "test39",
    "test40",
    "test41",
    "test42",
    "test43",
    "test44",
    "test45",
    "test46",
    "test47",
    "test48",
    "test49",
    "test50",
    "test51",
    "test52",
    "test53",
    "test54",
    "test55",
    "test56",
    "test57",
    "test58",
    "test59",
    "test60",
    "test61",
    "test62",
    "test63",
    "test64",
    "test65",
    "test66",
    "test67",
    "test68",
    "test69",
    "test70",
    "test71",
    "test72",
    "test73",
    "test74",
    "test75",
    "test76",
    "test77",
    "test78",
    "test79",
    "test80",
    "test81",
    "test82",
    "test83",
    "test84",
    "test85",
    "test86",
    "test87",
    "test88",
    "test89",
    "test90",
    "test91",
    "test92",
    "test93",
    "test94",
    "test95",
    "test96",
    "test97",
    "Black",
    "Blue",
    "Bright Light Blue",
    "Bright Light Orange",
    "Bright Pink",
    "Coral",
    "Dark Blue",
    "Dark Bluish Gray",
    "Dark Brown",
    "Dark Orange",
    "Dark Red",
    "Dark Tan",
    "Lavender",
    "Light Bluish Gray",
    "Light Nougat",
    "Lime",
    "Medium Blue",
    "Medium Nougat",
    "Nougat",
    "Olive Green",
    "Orange",
    "Red",
    "Reddish Brown",
    "Sand Blue",
    "Tan",
    "White",
    "Yellow",
    "Trans-Black",
    "Trans-Bright Green",
    "Trans-Clear",
    "Trans-Dark Blue",
    "Trans-Dark Pink",
    "Trans-Green",
    "Trans-Light Blue",
    "Trans-Orange",
    "Trans-Purple",
    "Trans-Red",
    "Trans-Yellow",
    "Flat Silver",
    "Pearl Gold",
    "Satin Trans-Light Blue",
    "Satin White",
    "Glow In Dark White",
    "Glitter Trans-Clear",
    "Glitter Trans-Dark Pink",
    "Glitter Trans-Light Blue",
    "Dark Bluish Gray", // manually added from Warhol
    "Dark Pink", // manually added from Warhol
    "Magenta", // manually added from Warhol
    "Medium Azure", // manually added from Warhol
    "Neon Yellow", // manually added from dots
    "Dark Azure", // manually added from art project
    "Light Aqua", // manually added from art project
    "Bright Light Yellow", // manually added from art project
    "Bright Green", // manually added from art project
    "Dark Turquoise", // manually added from dots
    "Yellowish Green", // manually added from dots
];

const BRICKLINK_STUD_COLORS = ALL_BRICKLINK_SOLID_COLORS.filter((color) =>
    KNOWN_BRICKLINK_STUD_COLOR_NAMES.includes(color.name)
).sort((a, b) => {
    return a.name > b.name ? 1 : -1;
});

const BRICKLINK_TILE_COLORS = ALL_BRICKLINK_SOLID_COLORS.filter((color) =>
    KNOWN_BRICKLINK_TILE_COLOR_NAMES.includes(color.name)
).sort((a, b) => {
    return a.name > b.name ? 1 : -1;
});
/**預設顏色：改成test92自定義顏色 */
const ADDITIONAL_COLORS = ["test92"];//["Very Light Gray"];
let ALL_VALID_BRICKLINK_COLORS = ALL_BRICKLINK_SOLID_COLORS.sort((a, b) => {
    return a.name > b.name ? 1 : -1;
});
// .filter(
//     color =>
//         KNOWN_BRICKLINK_STUD_COLOR_NAMES.includes(color.name) ||
//         KNOWN_BRICKLINK_TILE_COLOR_NAMES.includes(color.name) ||
//         ADDITIONAL_COLORS.includes(color.name)
// ).sort((a, b) => {
//     return a.name > b.name ? 1 : -1;
// });

const PIXEL_TYPE_OPTIONS = [
    {
        name: "1x1 圆点光面",
        number: 98138,
    },
    {
        name: "1x1 圆点凸面",
        number: 4073,
    },
    {
        name: "1x1 光面板",
        number: "3070b",
    },
    {
        name: "1x1 矮砖",
        number: 3024,
    },
    {
        name: "1x1 厚砖",
        number: 3005,
    },
    {
        name: "光面板【多规格】",
        number: "variable_tile",
    },
    {
        name: "凸面板【多规格】",
        number: "variable_plate",
    },
    {
        name: "凸面砖【多规格】",
        number: "variable_brick",
    },
];

// use this for instructions - we prioritize readability over accuracy here
const PIXEL_TYPE_TO_FLATTENED = {
    98138: 98138,
    4073: 98138,
    3024: "3070b",
    "3070b": "3070b",
    3005: "3070b",
    variable_tile: "variable_tile",
    variable_plate: "variable_tile",
    variable_brick: "variable_tile",
};
