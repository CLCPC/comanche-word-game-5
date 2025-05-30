const DAILY_WORDS = [
  "akwʉ̠si",
  "anabi",
  "anapʉ",
  "anitʉ",
  "arabʉ̠",
  "aratsi",
  "arʉka",
  "ataki",
  "atapu",
  "atsabi",
  "awepʉ",
  "awetʉ",
  "binai",
  "ebutʉ̠",
  "eetii",
  "ekapa",
  "ekawi",
  "eka̠sa",
  "etsipʉ̠",
  "eʔree",
  "haabi",
  "haaka",
  "haaki",
  "haame",
  "hahka",
  "haitsi̠",
  "hakai",
  "haʔii",
  "heekwi",
  "hiini",
  "hiopi",
  "hiʔoo",
  "hoikwa",
  "hokhʉ̠",
  "hooki̠",
  "hoora",
  "huhku̠",
  "hunai",
  "huuba",
  "huuku",
  "huuna",
  "huupi",
  "huutsi",
  "huutsi̠",
  "huʔko",
  "huʔsi",
  "hʉitsi",
  "hʉkai",
  "hʉʉbi",
  "hʉʉsʉ",
  "hʉʉti",
  "hʉʉtʉ",
  "ibutu",
  "ibutʉ̠",
  "ikarʉ",
  "ikʉ̠hu",
  "inakwʉ̠",
  "inanʉ̠",
  "inapʉ̠",
  "inaru",
  "inasʉ",
  "iniku",
  "itsina̠",
  "itsini",
  "itsinʉ̠",
  "itʉkwʉ̠",
  "itʉtsa",
  "iʔana",
  "kaarʉ",
  "kaatʉ̠",
  "kahni",
  "kahpe",
  "kahuu",
  "kaiwa",
  "karoo",
  "kenai",
  "keyuu",
  "kiipʉ̠",
  "kohno",
  "kohto",
  "koobe",
  "koobe̠",
  "kooko",
  "koono",
  "kootsa",
  "kooʔi",
  "kuhma",
  "kuhtsu",
  "kuhtu",
  "kuitsi̠",
  "kuitsʉ̠",
  "kukaa",
  "kuuna",
  "kuuna̠",
  "kuupʉ̠",
  "kuutsu",
  "kwana",
  "kwarʉ",
  "kweyai",
  "kwihne",
  "kwiipʉ̠",
  "kwiitʉ̠",
  "kwʉhti",
  "kʉarʉ",
  "kʉhwʉ",
  "kʉnua",
  "kʉʉka",
  "maabo",
  "maaka",
  "maatu",
  "mabʉa",
  "mahri",
  "mahrʉ",
  "makʉ̠a",
  "marii",
  "marʉa",
  "marʉʉ",
  "masʉa",
  "matsai",
  "matua",
  "mawai",
  "maʔai",
  "meeku",
  "miarʉ",
  "miarʉ̠",
  "mihtsi̠",
  "miitsi",
  "monsi",
  "mooka",
  "moowi",
  "mopai",
  "muhbi",
  "muhka",
  "muhpe",
  "muhyʉ",
  "muhyʉ̠",
  "mukwii",
  "mutsii",
  "muubi",
  "muura",
  "muutsi",
  "muʔra",
  "mʉʉrʉ",
  "naaka",
  "naape",
  "naape̠",
  "naboo",
  "nahuu",
  "nahyu",
  "nahyu̠",
  "naikwʉ",
  "naikwʉ̠",
  "naiya",
  "naken",
  "nakia",
  "namsi",
  "nanaa",
  "naroi",
  "narua",
  "natai",
  "naʔaa",
  "naʔru",
  "nehki̠",
  "nekhi",
  "niikwi",
  "nikwai",
  "nimai",
  "nipʉa",
  "nitui",
  "nokia",
  "noobi",
  "nooma",
  "noona",
  "noopʉ̠",
  "noorʉ",
  "nooyo",
  "nuarʉ̠",
  "nuhye",
  "nuraa",
  "nuuki",
  "nʉena",
  "nʉepi",
  "nʉetʉ",
  "nʉnʉʉ",
  "nʉʉmʉ",
  "nʉʉmʉ̠",
  "obetʉ",
  "obotu",
  "ohape",
  "okwetʉ",
  "onakwʉ̠",
  "oohpe",
  "ooʔri",
  "orʉkwʉ̠",
  "orʉtsa",
  "otʉtsa",
  "oyetʉ̠",
  "oyorʉ",
  "oʔoʔa",
  "paaka",
  "paaka̠",
  "paanʉ̠",
  "paapi",
  "paapi̠",
  "pahmu",
  "pahtsi",
  "paitsi",
  "parua",
  "parʉa",
  "peeka",
  "peekwi",
  "piabʉ̠",
  "piapʉ",
  "piapʉ̠",
  "pihka̠",
  "pinai",
  "pinko",
  "pitsii",
  "pohya",
  "poiya",
  "pokoo",
  "pooro",
  "poorʉ",
  "poosa",
  "posia",
  "poʔko",
  "poʔro",
  "puhwʉ",
  "pusia",
  "puuku",
  "puʔtsi",
  "pʉarʉ",
  "pʉesu̠",
  "pʉesʉ",
  "pʉhpi",
  "pʉhtsa",
  "pʉkai",
  "pʉyʉn",
  "pʉʉka",
  "pʉʉpi",
  "pʉʉpi̠",
  "pʉʉra",
  "pʉʉyu",
  "pʉʉyʉ",
  "pʉʔne",
  "saabe",
  "saanʉ̠",
  "saapʉ",
  "saapʉ̠",
  "saatʉ",
  "sahki̠",
  "saraa",
  "sarii",
  "setʉʉ",
  "siiko",
  "siiku",
  "siinʉ̠",
  "siipʉ̠",
  "sikoo",
  "sinai",
  "sitoo",
  "sitʉʉ",
  "soomo",
  "soona̠",
  "sooni",
  "sooti",
  "sootʉ",
  "suabe̠",
  "suabi",
  "suana",
  "suapʉ",
  "suapʉ̠",
  "suarʉ̠",
  "suatsʉ̠",
  "suatʉ̠",
  "surʉʉ",
  "sutai",
  "suuta",
  "suʔats",
  "suʔhi",
  "suʔta",
  "sʉatʉ",
  "sʉkui",
  "sʉʉki̠",
  "taabe",
  "taaki",
  "taama",
  "taama̠",
  "taasi",
  "taatsa",
  "tahni",
  "tahwi",
  "taina̠",
  "tainʉ",
  "tainʉ̠",
  "taiʔi",
  "tanua",
  "tasaa",
  "tasia",
  "tataa",
  "tatsii",
  "tatua",
  "tawoi",
  "taʔoo",
  "tokoo",
  "tomsi",
  "tonaʔ",
  "tooko",
  "toorʉ",
  "tootsa",
  "tooyo",
  "tooyʉ",
  "topee",
  "tsaaku",
  "tsaana",
  "tsaatʉ",
  "tsaʔwi",
  "tseena",
  "tseʔna",
  "tsiapʉ̠",
  "tsiira",
  "tsiisi",
  "tsikaa",
  "tsiwai",
  "tsiyaa",
  "tsoapʉ̠",
  "tsohkwe",
  "tsohpe",
  "tsoomo",
  "tsumai",
  "tuanʉ̠",
  "tuhhu",
  "tuhui",
  "tukah",
  "tunaa",
  "tuuku",
  "tuumu",
  "tuumu̠",
  "tuupʉ̠",
  "tuurʉ",
  "tuʔku",
  "tuʔpa",
  "tʉasʉ",
  "tʉawe",
  "tʉboo",
  "tʉetsi̠",
  "tʉetʉ",
  "tʉhka",
  "tʉhtsʉ",
  "tʉkii",
  "tʉmoa",
  "tʉmuh",
  "tʉnah",
  "tʉnoo",
  "tʉnua",
  "tʉrʉe",
  "tʉsaa",
  "tʉtsʉʉ",
  "tʉwai",
  "tʉʉka",
  "tʉʉki",
  "tʉʉma",
  "tʉʉmi",
  "tʉʉpe",
  "tʉʉpi",
  "uhʔtu",
  "urarʉ",
  "uruka",
  "urʉkwʉ̠",
  "usuni",
  "utsana̠",
  "uwihi",
  "uwihi̠",
  "uʔaru",
  "waani",
  "waapi",
  "waapi̠",
  "waata̠",
  "waate",
  "waatsa̠",
  "waatsʉ",
  "wahta",
  "waʔoo",
  "waʔwa",
  "weeki",
  "weesi",
  "wehai",
  "wianʉ",
  "wiapʉ̠",
  "wihnu",
  "wiyaa",
  "wohya",
  "woinu",
  "woinu̠",
  "woobi",
  "woone",
  "woonʉ̠",
  "woosa",
  "wotas",
  "wotsia",
  "woʔhi",
  "woʔne",
  "wʉhki",
  "wʉnua",
  "wʉwia",
  "wʉʉnʉ",
  "yaapʉ̠",
  "yaarʉ",
  "yaarʉ̠",
  "yuhhu",
  "yuuta",
  "yuʔai",
  "yʉhnʉ",
  "yʉika",
  "yʉitʉ̠",
  "yʉʉkwi",
  "yʉʉnʉ",
  "yʉʉtsʉ",
  "yʉʉtsʉ̠",
  "yʉʔha",
  "ʉhʉkʉ",
  "ʉkwitʉ",
  "ʉkʉna",
  "ʉkʉpʉ",
  "ʉkʉ̠sʉ",
  "ʉmapʉ̠",
  "ʉmarʉ",
  "ʉnʉ̠ha",
  "ʉrako",
  "ʉrʉtsi",
  "ʉʔbʉi"
];
