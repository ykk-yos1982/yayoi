const prefectures = [
    {
        name: '北海道（道北）',
        searchName: '北海道',
        left: 644,
        top: 1,
        right: 873,
        bottom: 46,
        city: [
            {
                name: '稚内',
                id: '011000'
            },
            {
                name: '旭川',
                id: '012010'
            },
            {
                name: '留萌',
                id: '012020'
            }
        ]
    },
    {
        name: '北海道（道東）',
        searchName: '北海道',
        left: 823,
        top: 47,
        right: 873,
        bottom: 154,
        city: [
            {
                name: '網走',
                id: '013010'
            },
            {
                name: '北見',
                id: '013020'
            },
            {
                name: '紋別',
                id: '013030'
            },
            {
                name: '根室',
                id: '014010'
            },
            {
                name: '釧路',
                id: '014020'
            },
            {
                name: '帯広',
                id: '014030'
            }
        ]
    },
    {
        name: '北海道（道央）',
        searchName: '北海道',
        left: 644,
        top: 47,
        right: 822,
        bottom: 99,
        city: [
            {
                name: '札幌',
                id: '016010'
            },
            {
                name: '岩見沢',
                id: '016020'
            },
            {
                name: '倶知安',
                id: '016030'
            }
        ]
    },
    {
        name: '北海道（道南）',
        searchName: '北海道',
        left: 644,
        top: 100,
        right: 822,
        bottom: 154,
        city: [
            {
                name: '室蘭',
                id: '015010'
            },
            {
                name: '浦河',
                id: '015020'
            },
            {
                name: '函館',
                id: '017010'
            },
            {
                name: '江差',
                id: '017020'
            }
        ]
    },
    {
        name: '青森県',
        left: 644,
        top: 167,
        right: 812,
        bottom: 221,
        city: [
            {
                name: '青森',
                id: '020010'
            },
            {
                name: 'むつ',
                id: '020020'
            },
            {
                name: '八戸',
                id: '020030'
            }
        ]
    },
    {
        name: '岩手県',
        left: 728,
        top: 222,
        right: 812,
        bottom: 274,
        city: [
            {
                name: '盛岡',
                id: '030010'
            },
            {
                name: '宮古',
                id: '030020'
            },
            {
                name: '大船渡',
                id: '030030'
            }
        ]
    },
    {
        name: '宮城県',
        left: 728,
        top: 275,
        right: 812,
        bottom: 326,
        city: [
            {
                name: '仙台',
                id: '040010'
            },
            {
                name: '白石',
                id: '040020'
            }
        ]
    },
    {
        name: '秋田県',
        left: 644,
        top: 223,
        right: 729,
        bottom: 273,
        city: [
            {
                name: '秋田',
                id: '050010'
            },
            {
                name: '横手',
                id: '050020'
            }
        ]
    },
    {
        name: '山形県',
        left: 644,
        top: 275,
        right: 727,
        bottom: 327,
        city: [
            {
                name: '山形',
                id: '060010'
            },
            {
                name: '米沢',
                id: '060020'
            },
            {
                name: '酒田',
                id: '060030'
            },
            {
                name: '新庄',
                id: '060040'
            }
        ]
    },
    {
        name: '福島県',
        left: 644,
        top: 327,
        right: 812,
        bottom: 380,
        city: [
            {
                name: '福島',
                id: '070010'
            },
            {
                name: '小名浜',
                id: '070020'
            },
            {
                name: '若松',
                id: '070030'
            }
        ]
    },
    {
        name: '茨城県',
        left: 776,
        top: 381,
        right: 813,
        bottom: 448,
        city: [
            {
                name: '水戸',
                id: '080010'
            },
            {
                name: '土浦',
                id: '080020'
            }
        ]
    },
    {
        name: '栃木県',
        left: 715,
        top: 381,
        right: 775,
        bottom: 448,
        city: [
            {
                name: '宇都宮',
                id: '090010'
            },
            {
                name: '大田原',
                id: '090020'
            }
        ]
    },
    {
        name: '群馬県',
        left: 644,
        top: 381,
        right: 714,
        bottom: 448,
        city: [
            {
                name: '前橋',
                id: '100010'
            },
            {
                name: 'みなかみ',
                id: '100020'
            }
        ]
    },
    {
        name: '埼玉県',
        left: 644,
        top: 449,
        right: 775,
        bottom: 478,
        city: [
            {
                name: 'さいたま',
                id: '110010'
            },
            {
                name: '熊谷',
                id: '110020'
            },
            {
                name: '秩父',
                id: '110030'
            }
        ]
    },
    {
        name: '千葉県',
        left: 776,
        top: 449,
        right: 813,
        bottom: 548,
        city: [
            {
                name: '千葉',
                id: '120010'
            },
            {
                name: '銚子',
                id: '120020'
            },
            {
                name: '館山',
                id: '120030'
            }
        ]
    },
    {
        name: '東京都',
        left: 644,
        top: 479,
        right: 775,
        bottom: 515,
        city: [
            {
                name: '東京',
                id: '130010'
            },
            {
                name: '大島',
                id: '130020'
            },
            {
                name: '八丈島',
                id: '130030'
            },
            {
                name: '父島',
                id: '130040'
            }
        ]
    },
    {
        name: '神奈川県',
        left: 644,
        top: 516,
        right: 775,
        bottom: 548,
        city: [
            {
                name: '横浜',
                id: '140010'
            },
            {
                name: '小田原',
                id: '140020'
            }
        ]
    },
    {
        name: '新潟県',
        left: 610,
        top: 298,
        right: 646,
        bottom: 365,
        city: [
            {
                name: '新潟',
                id: '150010'
            },
            {
                name: '長岡',
                id: '150020'
            },
            {
                name: '高田',
                id: '150030'
            },
            {
                name: '相川',
                id: '150040'
            }
        ]
    },
    {
        name: '富山県',
        left: 572,
        top: 298,
        right: 609,
        bottom: 365,
        city: [
            {
                name: '富山',
                id: '160010'
            },
            {
                name: '伏木',
                id: '160020'
            }
        ]
    },
    {
        name: '石川県',
        left: 534,
        top: 298,
        right: 571,
        bottom: 365,
        city: [
            {
                name: '金沢',
                id: '170010'
            },
            {
                name: '輪島',
                id: '170020'
            }
        ]
    },
    {
        name: '福井県',
        left: 534,
        top: 366,
        right: 593,
        bottom: 419,
        city: [
            {
                name: '福井',
                id: '180010'
            },
            {
                name: '敦賀',
                id: '180020'
            }
        ]
    },
    {
        name: '山梨県',
        left: 594,
        top: 420,
        right: 646,
        bottom: 464,
        city: [
            {
                name: '甲府',
                id: '190010'
            },
            {
                name: '河口湖',
                id: '190020'
            }
        ]
    },
    {
        name: '長野県',
        left: 594,
        top: 366,
        right: 646,
        bottom: 419,
        city: [
            {
                name: '長野',
                id: '200010'
            },
            {
                name: '松本',
                id: '200020'
            },
            {
                name: '飯田',
                id: '200030'
            }
        ]
    },
    {
        name: '岐阜県',
        left: 534,
        top: 420,
        right: 593,
        bottom: 464,
        city: [
            {
                name: '岐阜',
                id: '210010'
            },
            {
                name: '高山',
                id: '210020'
            }
        ]
    },
    {
        name: '静岡県',
        left: 594,
        top: 465,
        right: 646,
        bottom: 516,
        city: [
            {
                name: '静岡',
                id: '220010'
            },
            {
                name: '網代',
                id: '220020'
            },
            {
                name: '三島',
                id: '220030'
            },
            {
                name: '浜松',
                id: '220040'
            }
        ]
    },
    {
        name: '愛知県',
        left: 534,
        top: 465,
        right: 593,
        bottom: 516,
        city: [
            {
                name: '名古屋',
                id: '230010'
            },
            {
                name: '豊橋',
                id: '230020'
            }
        ]
    },
    {
        name: '三重県',
        left: 497,
        top: 449,
        right: 533,
        bottom: 539,
        city: [
            {
                name: '津',
                id: '240010'
            },
            {
                name: '尾鷲',
                id: '240020'
            }
        ]
    },
    {
        name: '滋賀県',
        left: 497,
        top: 374,
        right: 533,
        bottom: 448,
        city: [
            {
                name: '大津',
                id: '250010'
            },
            {
                name: '彦根',
                id: '250020'
            }
        ]
    },
    {
        name: '京都県',
        left: 451,
        top: 374,
        right: 496,
        bottom: 448,
        city: [
            {
                name: '京都',
                id: '260010'
            },
            {
                name: '舞鶴',
                id: '260020'
            }
        ]
    },
    {
        name: '大阪府',
        left: 413,
        top: 449,
        right: 450,
        bottom: 539,
        city: [
            {
                name: '大阪',
                id: '270000'
            }
        ]
    },
    {
        name: '兵庫県',
        left: 413,
        top: 374,
        right: 450,
        bottom: 448,
        city: [
            {
                name: '神戸',
                id: '280010'
            },
            {
                name: '豊岡',
                id: '280020'
            }
        ]
    },
    {
        name: '奈良県',
        left: 451,
        top: 449,
        right: 496,
        bottom: 539,
        city: [
            {
                name: '奈良',
                id: '290010'
            },
            {
                name: '風屋',
                id: '290020'
            }
        ]
    },
    {
        name: '和歌山県',
        left: 413,
        top: 540,
        right: 533,
        bottom: 593,
        city: [
            {
                name: '和歌山',
                id: '300010'
            },
            {
                name: '潮岬',
                id: '300020'
            }
        ]
    },
    {
        name: '鳥取県',
        left: 330,
        top: 394,
        right: 412,
        bottom: 434,
        city: [
            {
                name: '鳥取',
                id: '310010'
            },
            {
                name: '米子',
                id: '310020'
            }
        ]
    },
    {
        name: '島根県',
        left: 247,
        top: 394,
        right: 329,
        bottom: 434,
        city: [
            {
                name: '松江',
                id: '320010'
            },
            {
                name: '浜田',
                id: '320020'
            },
            {
                name: '西郷',
                id: '320030'
            }
        ]
    },
    {
        name: '岡山県',
        left: 330,
        top: 435,
        right: 412,
        bottom: 472,
        city: [
            {
                name: '岡山',
                id: '330010'
            },
            {
                name: '津山',
                id: '330020'
            }
        ]
    },
    {
        name: '広島県',
        left: 247,
        top: 435,
        right: 329,
        bottom: 472,
        city: [
            {
                name: '広島',
                id: '340010'
            },
            {
                name: '庄原',
                id: '340020'
            }
        ]
    },
    {
        name: '山口県',
        left: 200,
        top: 394,
        right: 246,
        bottom: 472,
        city: [
            {
                name: '下関',
                id: '350010'
            },
            {
                name: '山口',
                id: '350020'
            },
            {
                name: '柳井',
                id: '350030'
            },
            {
                name: '萩',
                id: '350040'
            }
        ]
    },
    {
        name: '徳島県',
        left: 300,
        top: 526,
        right: 374,
        bottom: 548,
        city: [
            {
                name: '徳島',
                id: '360010'
            },
            {
                name: '日和佐',
                id: '360020'
            }
        ]
    },
    {
        name: '香川県',
        left: 300,
        top: 495,
        right: 374,
        bottom: 525,
        city: [
            {
                name: '高松',
                id: '370000'
            }
        ]
    },
    {
        name: '愛媛県',
        left: 222,
        top: 495,
        right: 299,
        bottom: 548,
        city: [
            {
                name: '松山',
                id: '380010'
            },
            {
                name: '新居浜',
                id: '380020'
            },
            {
                name: '宇和島',
                id: '380030'
            }
        ]
    },
    {
        name: '高知県',
        left: 222,
        top: 549,
        right: 374,
        bottom: 579,
        city: [
            {
                name: '高知',
                id: '390010'
            },
            {
                name: '室戸岬',
                id: '390020'
            },
            {
                name: '清水',
                id: '390030'
            }
        ]
    },
    {
        name: '福岡県',
        left: 134,
        top: 395,
        right: 195,
        bottom: 470,
        city: [
            {
                name: '福岡',
                id: '400010'
            },
            {
                name: '八幡',
                id: '400020'
            },
            {
                name: '飯塚',
                id: '400030'
            },
            {
                name: '久留米',
                id: '400040'
            }
        ]
    },
    {
        name: '佐賀県',
        left: 104,
        top: 395,
        right: 133,
        bottom: 470,
        city: [
            {
                name: '佐賀',
                id: '410010'
            },
            {
                name: '伊万里',
                id: '410020'
            }
        ]
    },
    {
        name: '長崎県',
        left: 70,
        top: 395,
        right: 103,
        bottom: 470,
        city: [
            {
                name: '長崎',
                id: '420010'
            },
            {
                name: '佐世保',
                id: '420020'
            },
            {
                name: '厳原',
                id: '420030'
            },
            {
                name: '福江',
                id: '420040'
            }
        ]
    },
    {
        name: '熊本県',
        left: 70,
        top: 471,
        right: 133,
        bottom: 576,
        city: [
            {
                name: '熊本',
                id: '430010'
            },
            {
                name: '阿蘇乙姫',
                id: '430020'
            },
            {
                name: '牛深',
                id: '430030'
            },
            {
                name: '人吉',
                id: '430040'
            }
        ]
    },
    {
        name: '大分県',
        left: 134,
        top: 471,
        right: 195,
        bottom: 526,
        city: [
            {
                name: '大分',
                id: '440010'
            },
            {
                name: '中津',
                id: '440020'
            },
            {
                name: '日田',
                id: '440030'
            },
            {
                name: '佐伯',
                id: '440040'
            }
        ]
    },
    {
        name: '宮崎県',
        left: 134,
        top: 527,
        right: 195,
        bottom: 576,
        city: [
            {
                name: '宮崎',
                id: '450010'
            },
            {
                name: '延岡',
                id: '450020'
            },
            {
                name: '都城',
                id: '450030'
            },
            {
                name: '高千穂',
                id: '450040'
            }
        ]
    },
    {
        name: '鹿児島県',
        left: 70,
        top: 577,
        right: 195,
        bottom: 616,
        city: [
            {
                name: '鹿児島',
                id: '460010'
            },
            {
                name: '鹿屋',
                id: '460020'
            },
            {
                name: '種子島',
                id: '460030'
            },
            {
                name: '名瀬',
                id: '460040'
            }
        ]
    },
    {
        name: '沖縄県',
        left: 4,
        top: 569,
        right: 53,
        bottom: 677,
        city: [
            {
                name: '那覇',
                id: '471010'
            },
            {
                name: '名護',
                id: '471020'
            },
            {
                name: '久米島',
                id: '471030'
            },
            {
                name: '南大東',
                id: '472000'
            },
            {
                name: '宮古島',
                id: '473000'
            },
            {
                name: '石垣島',
                id: '474010'
            },
            {
                name: '与那国島',
                id: '474020'
            }
        ]
    }
];
