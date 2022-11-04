const express = require("express");
const path = require("path")

const router = express.Router();

const groupElement1 = [
    {symbol: "H" , name: "Hidrógeno", group: "OtrosNoMetales", number: 1},
    {symbol: "Li" , name: "Litio", group: "Alcalinos", number: 3 },
    {symbol: "Na" , name: "Sodio", group: "Alcalinos", number: 11 },
    {symbol: "K" , name: "Potasio", group: "Alcalinos", number: 19 },
    {symbol: "Rb" , name: "Rubidio", group: "Alcalinos", number: 37 },
    {symbol: "Cs" , name: "Cesio", group: "Alcalinos", number: 55 },
    {symbol: "Fr" , name: "Francio", group: "Alcalinos", number: 87 },
]

const groupElement2 = [
    {symbol: "Be" , name: "Berilio", group: "Alcalinoterreos", number: 4},
    {symbol: "Mg" , name: "Magnesio", group: "Alcalinoterreos", number: 12},
    {symbol: "Ca" , name: "Calcio", group: "Alcalinoterreos", number: 20},
    {symbol: "Sr" , name: "Estroncio", group: "Alcalinoterreos", number: 38},
    {symbol: "Ba" , name: "Bario", group: "Alcalinoterreos", number: 56},
    {symbol: "Ra" , name: "Radio", group: "Alcalinoterreos", number: 88},
]
const groupElement3 = [
    {symbol: "Sc" , name: "Escandio", group: "Metales de Transicion", number: 21},
    {symbol: "Ti" , name: "Titanio", group: "Metales de Transicion", number: 22},
    {symbol: "V" , name: "Vanadio", group: "Metales de Transicion", number: 23},
    {symbol: "Cr" , name: "Cromo", group: "Metales de Transicion", number: 24},
    {symbol: "Mn" , name: "Manganeso", group: "Metales de Transicion", number: 25},
    {symbol: "Fe" , name: "Hierro", group: "Metales de Transicion", number: 26},
    {symbol: "Co" , name: "Cobalto", group: "Metales de Transicion", number: 27},
    {symbol: "Ni" , name: "Niquel", group: "Metales de Transicion", number: 28},
    {symbol: "Cu" , name: "Cobre", group: "Metales de Transicion", number: 29},
    {symbol: "Zn" , name: "Zinc", group: "Metales de Transicion", number: 30},

    {symbol: "Y" , name: "Itlio", group: "Metales de Transicion", number: 39},
    {symbol: "Zr" , name: "Circonio", group: "Metales de Transicion", number: 40},
    {symbol: "Nb" , name: "Niobio", group: "Metales de Transicion", number: 41},
    {symbol: "Mo" , name: "Molibdeno", group: "Metales de Transicion", number: 42},
    {symbol: "Tc" , name: "Tecnecio", group: "Metales de Transicion", number: 43},
    {symbol: "Ru" , name: "Rutenio", group: "Metales de Transicion", number: 44},
    {symbol: "Rh" , name: "Rodio", group: "Metales de Transicion", number: 45},
    {symbol: "Pd" , name: "Paladio", group: "Metales de Transicion", number: 46},
    {symbol: "Ag" , name: "Plata", group: "Metales de Transicion", number: 47},
    {symbol: "Cd" , name: "Cadmio", group: "Metales de Transicion", number: 48},

    {symbol: "La-Lu" , name: "Lantanidos", group: "Lantanidos", number: "57-71"},

    {symbol: "Hf" , name: "Hafnio", group: "Metales de Transicion", number: 72},
    {symbol: "Ta" , name: "Tántalo", group: "Metales de Transicion", number: 73},
    {symbol: "W" , name: "Wolframio", group: "Metales de Transicion", number: 74},
    {symbol: "Re" , name: "Renio", group: "Metales de Transicion", number: 75},
    {symbol: "Os" , name: "Osmio", group: "Metales de Transicion", number: 76},
    {symbol: "Ir" , name: "Iridio", group: "Metales de Transicion", number: 77},
    {symbol: "Pt" , name: "Platino", group: "Metales de Transicion", number: 78},
    {symbol: "Au" , name: "Oro", group: "Metales de Transicion", number: 79},
    {symbol: "Hg" , name: "Mercurio", group: "Metales de Transicion", number: 80},

    {symbol: "Ac-Lr" , name: "Actinidos", group: "Actinidos", number: "89-103"},

    {symbol: "Rf" , name: "Rutherfordio", group: "Metales de Transicion", number: 104},
    {symbol: "Db" , name: "Dubnio", group: "Metales de Transicion", number: 105},
    {symbol: "Sg" , name: "Seaborgio", group: "Metales de Transicion", number: 106},
    {symbol: "Bh" , name: "Bohrio", group: "Metales de Transicion", number: 107},
    {symbol: "Hs" , name: "Hasio", group: "Metales de Transicion", number: 108},
    {symbol: "Mt" , name: "Meitnerio", group: "Metales de Transicion", number: 109},
    {symbol: "Ds" , name: "Darmstatio", group: "Metales de Transicion", number: 110},
    {symbol: "Rg" , name: "Roentgenio", group: "Metales de Transicion", number: 111},
    {symbol: "Cn" , name: "Copernicio", group: "Metales de Transicion", number: 112},
]
const groupElement4 = [
    {symbol: "B" , name: "Boro", group: "Metaloides", number: 5},
    {symbol: "C" , name: "Carbono", group: "OtrosNoMetales", number: 6},
    {symbol: "N" , name: "Nitrógeno", group: "OtrosNoMetales", number: 7},
    {symbol: "O" , name: "Oxígeno", group: "OtrosNoMetales", number: 8},
    {symbol: "F" , name: "Flúor", group: "Halogenos", number: 9},

    {symbol: "Al" , name: "Aluminio", group: "OtrosMetales", number: 13},
    {symbol: "Si" , name: "Silicio", group: "Metaloides", number: 14},
    {symbol: "P" , name: "Fósforo", group: "OtrosNoMetales", number: 15},
    {symbol: "S" , name: "Azufre", group: "OtrosNoMetales", number: 16},
    {symbol: "Cl" , name: "Cloro", group: "Halogenos", number: 17},
    
    {symbol: "Ga" , name: "Galio", group: "OtrosMetales", number: 31},
    {symbol: "Ge" , name: "Germanio", group: "Metaloides", number: 32},
    {symbol: "As" , name: "Arsénico", group: "Metaloides", number: 33},
    {symbol: "Se" , name: "Selenio", group: "OtrosNoMetales", number: 34},
    {symbol: "Br" , name: "Bromo", group: "Halogenos", number: 35},

    {symbol: "In" , name: "Indio", group: "OtrosMetales", number: 49},
    {symbol: "Sn" , name: "Estaño", group: "OtrosMetales", number: 50},
    {symbol: "Sb" , name: "Antimonio", group: "Metaloides", number: 51},
    {symbol: "Te" , name: "Telurio", group: "Metaloides", number: 52},
    {symbol: "I" , name: "Yodo", group: "Halogenos", number: 53},

    {symbol: "Tl" , name: "Talio", group: "OtrosMetales", number: 81},
    {symbol: "Pb" , name: "Plomo", group: "OtrosMetales", number: 82},
    {symbol: "Bi" , name: "Bismuto", group: "OtrosMetales", number: 83},
    {symbol: "Po" , name: "Polonio", group: "Metaloides", number: 84},
    {symbol: "At" , name: "Astato", group: "Halogenos", number: 85},


    {symbol: "Nh" , name: "Nihonio", group: "OtrosMetales", number: 113},
    {symbol: "Fl" , name: "Flerovio", group: "OtrosMetales", number: 114},
    {symbol: "Mc" , name: "Moscovio", group: "OtrosMetales", number: 115},
    {symbol: "Lv" , name: "Livermonio", group: "OtrosMetales", number: 116},
    {symbol: "Ts" , name: "Teneso", group: "Halogenos", number: 117},
]
const groupElement5 = [
    {symbol: "He" , name: "Helio", group: "GasesNobles", number: 2},
    {symbol: "Ne" , name: "Neón", group: "GasesNobles", number: 10},
    {symbol: "Ar" , name: "Argón", group: "GasesNobles", number: 18},
    {symbol: "Kr" , name: "Kriptón", group: "GasesNobles", number: 36},
    {symbol: "Xe" , name: "Xenón", group: "GasesNobles", number: 54},
    {symbol: "Rn" , name: "Radón", group: "GasesNobles", number: 86},
    {symbol: "Og" , name: "Oganesón", group: "GasesNobles", number: 118},
]
const groupElement6 = [
    {symbol: "La" , name: "Lantano", group: "Lantanidos", number: 57},
    {symbol: "Ce" , name: "Cerio", group: "Lantanidos", number: 58},
    {symbol: "Pr" , name: "Praseodimio", group: "Lantanidos", number: 59},
    {symbol: "Nd" , name: "Neodimio", group: "Lantanidos", number: 60},
    {symbol: "Pm" , name: "Prometio", group: "Lantanidos", number: 61},
    {symbol: "Sm" , name: "Samario", group: "Lantanidos", number: 62},
    {symbol: "Eu" , name: "Europio", group: "Lantanidos", number: 63},
    {symbol: "Gd" , name: "Gadolinio", group: "Lantanidos", number: 64},
    {symbol: "Tb" , name: "Terbio", group: "Lantanidos", number: 65},
    {symbol: "Dy" , name: "Disprosio", group: "Lantanidos", number: 66},
    {symbol: "Ho" , name: "Holmio", group: "Lantanidos", number: 67},
    {symbol: "Er" , name: "Erbio", group: "Lantanidos", number: 68},
    {symbol: "Tm" , name: "Tulio", group: "Lantanidos", number: 69},
    {symbol: "Yb" , name: "Iterbio", group: "Lantanidos", number: 70},
    {symbol: "Lu" , name: "Lutecio", group: "Lantanidos", number: 71},

    {symbol: "Ac" , name: "Actinio", group: "Actinidos", number: 89},
    {symbol: "Th" , name: "Torio", group: "Actinidos", number: 90},
    {symbol: "Pa" , name: "Protactinio", group: "Actinidos", number: 91},
    {symbol: "U" , name: "Uranio", group: "Actinidos", number: 92},
    {symbol: "Np" , name: "Neptuno", group: "Actinidos", number: 93},
    {symbol: "Pu" , name: "Plutonio", group: "Actinidos", number: 94},
    {symbol: "Am" , name: "Americio", group: "Actinidos", number: 95},
    {symbol: "Cm" , name: "Curlo", group: "Actinidos", number: 96},
    {symbol: "Bk" , name: "Berkelio", group: "Actinidos", number: 97},
    {symbol: "Cf" , name: "Californio", group: "Actinidos", number: 98},
    {symbol: "Es" , name: "Einstenio", group: "Actinidos", number: 99},
    {symbol: "Fm" , name: "Fermio", group: "Actinidos", number: 100},
    {symbol: "Md" , name: "Mendelevio", group: "Actinidos", number: 101},
    {symbol: "No" , name: "Nobelio", group: "Actinidos", number: 102},
    {symbol: "Lr" , name: "Lawrencio", group: "Actinidos", number: 103},
]
let Elements = [groupElement1, groupElement2, groupElement3, groupElement4, groupElement5, groupElement6]




const ValidateElements = function(element){
    
     // groupElement2.forEach(groupElement1 => console.log(groupElement1.number));
    // groupElement3.forEach(groupElement1 => console.log(groupElement1.number));
    // groupElement4.forEach(groupElement1 => console.log(groupElement1.number));
    // groupElement5.forEach(groupElement1 => console.log(groupElement1.number));
    // groupElement6.forEach(groupElement1 => console.log(groupElement1.number));
    // groupElement1.forEach(groupElement1 => console.log(groupElement1.number));   
}


router.get("/", (req, res, next) =>{
    res.render('home',
     {layout: false,
        groupElement1: groupElement1,
        groupElement2: groupElement2,
        groupElement3: groupElement3,
        groupElement4: groupElement4,
        groupElement5: groupElement5,
        groupElement6: groupElement6,
    })
});

exports.route = router;
