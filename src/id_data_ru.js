const initialDataRU = [
    {
        country: "Афганистан",
        capital: "Кабул",
        id: 0
    },
    {
        country: "Албания",
        capital: "Тирана",
        id: 1
    },
    {
        country: "Алжир",
        capital: "Алжир",
        id: 2
    },
    {
        country: "Андорра",
        capital: "Андорра-ла-Велья",
        id: 3
    },
    {
        country: "Ангола",
        capital: "Луанда",
        id: 4
    },
    {
        country: "Антигуа и Барбуда",
        capital: "Сент-Джонс",
        id: 5
    },
    {
        country: "Аргентина",
        capital: "Буэнос-Айрес",
        id: 6
    },
    {
        country: "Армения",
        capital: "Ереван",
        id: 7
    },
    {
        country: "Австралия",
        capital: "Канберра",
        id: 8
    },
    {
        country: "Австрия",
        capital: "Вена",
        id: 9
    },
    {
        country: "Азербайджан",
        capital: "Баку",
        id: 10
    },
    {
        country: "Багамские Острова",
        capital: "Нассау",
        id: 11
    },
    {
        country: "Бахрейн",
        capital: "Манама",
        id: 12
    },
    {
        country: "Бангладеш",
        capital: "Дакка",
        id: 13
    },
    {
        country: "Барбадос",
        capital: "Бриджтаун",
        id: 14
    },
    {
        country: "Беларусь",
        capital: "Минск",
        id: 15
    },
    {
        country: "Бельгия",
        capital: "Брюссель",
        id: 16
    },
    {
        country: "Белиз",
        capital: "Бельмопан",
        id: 17
    },
    {
        country: "Бенин",
        capital: "Порто-Ново",
        id: 18
    },
    {
        country: "Бутан",
        capital: "Тхимпху",
        id: 19
    },
    {
        country: "Боливия",
        capital: "Сукре",
        id: 20
    },
    {
        country: "Босния и Герцеговина",
        capital: "Сараево",
        id: 21
    },
    {
        country: "Ботсвана",
        capital: "Габороне",
        id: 22
    },
    {
        country: "Бразилия",
        capital: "Бразилиа",
        id: 23
    },
    {
        country: "Бруней",
        capital: "Бандар-Сери-Бегаван",
        id: 24
    },
    {
        country: "Болгария",
        capital: "София",
        id: 25
    },
    {
        country: "Буркина-Фасо",
        capital: "Уагадугу",
        id: 26
    },
    {
        country: "Бурунди",
        capital: "Гитега",
        id: 27
    },
    {
        country: "Кабо-Верде",
        capital: "Прая",
        id: 28
    },
    {
        country: "Камбоджа",
        capital: "Пномпень",
        id: 29
    },
    {
        country: "Камерун",
        capital: "Яунде",
        id: 30
    },
    {
        country: "Канада",
        capital: "Оттава",
        id: 31
    },
    {
        country: "Центральноафриканская Республика",
        capital: "Банги",
        id: 32
    },
    {
        country: "Чад",
        capital: "Нджамена",
        id: 33
    },
    {
        country: "Чили",
        capital: "Сантьяго",
        id: 34
    },
    {
        country: "Китай",
        capital: "Пекин",
        id: 35
    },
    {
        country: "Колумбия",
        capital: "Богота",
        id: 36
    },
    {
        country: "Коморы",
        capital: "Морони",
        id: 37
    },
    {
        country: "Конго",
        capital: "Браззавиль",
        id: 38
    },
    {
        country: "Коста-Рика",
        capital: "Сан-Хосе",
        id: 39
    },
    {
        country: "Хорватия",
        capital: "Загреб",
        id: 40
    },
    {
        country: "Куба",
        capital: "Гавана",
        id: 41
    },
    {
        country: "Cyprus",
        capital: "Южная Никосия",
        id: 42
    },
    {
        country: "Чехия",
        capital: "Прага",
        id: 43
    },
    {
        country: "Дания",
        capital: "Копенгаген",
        id: 44
    },
    {
        country: "Джибути",
        capital: "Джибути",
        id: 45
    },
    {
        country: "Доминика",
        capital: "Розо",
        id: 46
    },
    {
        country: "Доминиканская Республика",
        capital: "Санто-Доминго",
        id: 47
    },
    {
        country: "Эквадор",
        capital: "Кито",
        id: 48
    },
    {
        country: "Египет",
        capital: "Каир",
        id: 49
    },
    {
        country: "Сальвадор",
        capital: "Сан-Сальвадор",
        id: 50
    },
    {
        country: "Экваториальная Гвинея",
        capital: "Малабо",
        id: 51
    },
    {
        country: "Эритрея",
        capital: "Асмэра",
        id: 52
    },
    {
        country: "Эстония",
        capital: "Таллин",
        id: 53
    },
    {
        country: "Эсватини",
        capital: "Мбабане",
        id: 54
    },
    {
        country: "Эфиопия",
        capital: "Аддис-Абеба",
        id: 55
    },
    {
        country: "Фиджи",
        capital: "Сува",
        id: 56
    },
    {
        country: "Финляндия",
        capital: "Хельсинки",
        id: 57
    },
    {
        country: "Франция",
        capital: "Париж",
        id: 58
    },
    {
        country: "Габон",
        capital: "Либревиль",
        id: 59
    },
    {
        country: "Гамбия",
        capital: "Банжул",
        id: 60
    },
    {
        country: "Грузия",
        capital: "Тбилиси",
        id: 61
    },
    {
        country: "Германия",
        capital: "Берлин",
        id: 62
    },
    {
        country: "Гана",
        capital: "Аккра",
        id: 63
    },
    {
        country: "Греция",
        capital: "Афины",
        id: 64
    },
    {
        country: "Гренада",
        capital: "Сент-Джорджес",
        id: 65
    },
    {
        country: "Гватемала",
        capital: "Гватемала",
        id: 66
    },
    {
        country: "Гвинея",
        capital: "Конакри",
        id: 67
    },
    {
        country: "Гвинея-Бисау",
        capital: "Бисау",
        id: 68
    },
    {
        country: "Гайана",
        capital: "Джорджтаун",
        id: 69
    },
    {
        country: "Гаити",
        capital: "Порт-о-Пренс",
        id: 70
    },
    {
        country: "Гондурас",
        capital: "Тегусигальпа",
        id: 71
    },
    {
        country: "Венгрия",
        capital: "Будапешт",
        id: 72
    },
    {
        country: "Исландия",
        capital: "Рейкьявик",
        id: 73
    },
    {
        country: "Индия",
        capital: "Нью-Дели",
        id: 74
    },
    {
        country: "Индонезия",
        capital: "Джакарта",
        id: 75
    },
    {
        country: "Иран",
        capital: "Тегеран",
        id: 76
    },
    {
        country: "Ирак",
        capital: "Багдад",
        id: 77
    },
    {
        country: "Ирландия",
        capital: "Дублин",
        id: 78
    },
    {
        country: "Израиль",
        capital: "Иерусалим",
        id: 79
    },
    {
        country: "Италия",
        capital: "Рим",
        id: 80
    },
    {
        country: "Кот-д’Ивуар",
        capital: "Ямусукро",
        id: 81
    },
    {
        country: "Ямайка",
        capital: "Кингстон",
        id: 82
    },
    {
        country: "Япония",
        capital: "Токио",
        id: 83
    },
    {
        country: "Иордания",
        capital: "Амман",
        id: 84
    },
    {
        country: "Казахстан",
        capital: "Астана",
        id: 85
    },
    {
        country: "Кения",
        capital: "Найроби",
        id: 86
    },
    {
        country: "Кирибати",
        capital: "Южная Тарава",
        id: 87
    },
    {
        country: "Косово",
        capital: "Приштина",
        id: 88
    },
    {
        country: "Кувейт",
        capital: "Эль-Кувейт",
        id: 89
    },
    {
        country: "Киргизия",
        capital: "Бишкек",
        id: 90
    },
    {
        country: "Лаос",
        capital: "Вьентьян",
        id: 91
    },
    {
        country: "Латвия",
        capital: "Рига",
        id: 92
    },
    {
        country: "Ливан",
        capital: "Бейрут",
        id: 93
    },
    {
        country: "Лесото",
        capital: "Масеру",
        id: 94
    },
    {
        country: "Либерия",
        capital: "Монровия",
        id: 95
    },
    {
        country: "Ливия",
        capital: "Триполи",
        id: 96
    },
    {
        country: "Лихтенштейн",
        capital: "Вадуц",
        id: 97
    },
    {
        country: "Литва",
        capital: "Вильнюс",
        id: 98
    },
    {
        country: "Люксембург",
        capital: "Люксембург",
        id: 99
    },
    {
        country: "Мадагаскар",
        capital: "Антананариву",
        id: 100
    },
    {
        country: "Малави",
        capital: "Лилонгве",
        id: 101
    },
    {
        country: "Малайзия",
        capital: "Куала-Лумпур",
        id: 102
    },
    {
        country: "Мальдивы",
        capital: "Мале",
        id: 103
    },
    {
        country: "Мали",
        capital: "Бамако",
        id: 104
    },
    {
        country: "Мальта",
        capital: "Валлетта",
        id: 105
    },
    {
        country: "Маршалловы Острова",
        capital: "Маджуро",
        id: 106
    },
    {
        country: "Мартиника",
        capital: "Форт-Де-Франс",
        id: 107
    },
    {
        country: "Мавритания",
        capital: "Нуакшот",
        id: 108
    },
    {
        country: "Маврикий",
        capital: "Порт-Луи",
        id: 109
    },
    {
        country: "Майотта",
        capital: "Мамуцу",
        id: 110
    },
    {
        country: "Мексика",
        capital: "Мехико",
        id: 111
    },
    {
        country: "Микронезия",
        capital: "Паликир",
        id: 112
    },
    {
        country: "Молдавия",
        capital: "Кишинёв",
        id: 113
    },
    {
        country: "Монако",
        capital: "Монако",
        id: 114
    },
    {
        country: "Монголия",
        capital: "Улан-Батор",
        id: 115
    },
    {
        country: "Черногория",
        capital: "Подгорица",
        id: 116
    },
    {
        country: "Марокко",
        capital: "Рабат",
        id: 117
    },
    {
        country: "Мозамбик",
        capital: "Мапуту",
        id: 118
    },
    {
        country: "Мьянма",
        capital: "Нейпьидо",
        id: 119
    },
    {
        country: "Намибия",
        capital: "Виндхук",
        id: 120
    },
    {
        country: "Науру",
        capital: "Ярен",
        id: 121
    },
    {
        country: "Непал",
        capital: "Катманду",
        id: 122
    },
    {
        country: "Нидерланды",
        capital: "Амстердам",
        id: 123
    },
    {
        country: "Новая Зеландия",
        capital: "Веллингтон",
        id: 124
    },
    {
        country: "Никарагуа",
        capital: "Манагуа",
        id: 125
    },
    {
        country: "Нигер",
        capital: "Ниамей",
        id: 126
    },
    {
        country: "Нигерия",
        capital: "Абуджа",
        id: 127
    },
    {
        country: "Северная Корея",
        capital: "Пхеньян",
        id: 128
    },
    {
        country: "Северная Македония",
        capital: "Скопье",
        id: 129
    },
    {
        country: "Норвегия",
        capital: "Осло",
        id: 130
    },
    {
        country: "Оман",
        capital: "Маскат",
        id: 131
    },
    {
        country: "Пакистан",
        capital: "Исламабад",
        id: 132
    },
    {
        country: "Палау",
        capital: "Нгерулмуд",
        id: 133
    },
    {
        country: "Панама",
        capital: "Панама",
        id: 134
    },
    {
        country: "Папуа - Новая Гвинея",
        capital: "Порт-Морсби",
        id: 135
    },
    {
        country: "Парагвай",
        capital: "Асунсьон",
        id: 136
    },
    {
        country: "Перу",
        capital: "Лима",
        id: 137
    },
    {
        country: "Филиппины",
        capital: "Манила",
        id: 138
    },
    {
        country: "Питкэрн",
        capital: "Адамстаун",
        id: 139
    },
    {
        country: "Польша",
        capital: "Варшава",
        id: 140
    },
    {
        country: "Португалия",
        capital: "Лиссабон",
        id: 141
    },
    {
        country: "Катар",
        capital: "Доха",
        id: 142
    },
    {
        country: "Румыния",
        capital: "Бухарест",
        id: 143
    },
    {
        country: "Россия",
        capital: "Москва",
        id: 144
    },
    {
        country: "Руанда",
        capital: "Кигали",
        id: 145
    },
    {
        country: "Сент-Китс и Невис",
        capital: "Бастер",
        id: 146
    },
    {
        country: "Сент-Люсия",
        capital: "Кастри",
        id: 147
    },
    {
        country: "Сент-Винсент и Гренадины",
        capital: "Кингстаун",
        id: 148
    },
    {
        country: "Самоа",
        capital: "Апиа",
        id: 149
    },
    {
        country: "Сан-Марино",
        capital: "Сан-Марино",
        id: 150
    },
    {
        country: "Сан-Томе и Принсипи",
        capital: "Сан-Томе",
        id: 151
    },
    {
        country: "Саудовская Аравия",
        capital: "Эр-Рияд",
        id: 152
    },
    {
        country: "Сенегал",
        capital: "Дакар",
        id: 153
    },
    {
        country: "Сербия",
        capital: "Белград",
        id: 154
    },
    {
        country: "Сейшельские Острова",
        capital: "Виктория",
        id: 155
    },
    {
        country: "Сьерра-Леоне",
        capital: "Фритаун",
        id: 156
    },
    {
        country: "Сингапур",
        capital: "Сингапур",
        id: 157
    },
    {
        country: "Словакия",
        capital: "Братислава",
        id: 158
    },
    {
        country: "Словения",
        capital: "Любляна",
        id: 159
    },
    {
        country: "Соломоновы Острова",
        capital: "Хониара",
        id: 160
    },
    {
        country: "Сомали",
        capital: "Могадишо",
        id: 161
    },
    {
        country: "Южно-Африканская Республика",
        capital: "Претория",
        id: 162
    },
    {
        country: "Южная Корея",
        capital: "Сеул",
        id: 163
    },
    {
        country: "Южный Судан",
        capital: "Джуба",
        id: 164
    },
    {
        country: "Испания",
        capital: "Мадрид",
        id: 165
    },
    {
        country: "Судан",
        capital: "Хартум",
        id: 166
    },
    {
        country: "Суринам",
        capital: "Парамарибо",
        id: 167
    },
    {
        country: "Шри-Ланка",
        capital: "Шри-Джаяварденепура-Котте",
        id: 168
    },
    {
        country: "Швеция",
        capital: "Стокгольм",
        id: 169
    },
    {
        country: "Швейцария",
        capital: "Берн",
        id: 170
    },
    {
        country: "Сирия",
        capital: "Дамаск",
        id: 171
    },
    {
        country: "Таджикистан",
        capital: "Душанбе",
        id: 172
    },
    {
        country: "Танзания",
        capital: "Додома",
        id: 173
    },
    {
        country: "Таиланд",
        capital: "Бангкок",
        id: 174
    },
    {
        country: "Того",
        capital: "Ломе",
        id: 175
    },
    {
        country: "Тонга",
        capital: "Нукуалофа",
        id: 176
    },
    {
        country: "Тринидад и Тобаго",
        capital: "Порт-оф-Спейн",
        id: 177
    },
    {
        country: "Тунис",
        capital: "Тунис",
        id: 178
    },
    {
        country: "Турция",
        capital: "Анкара",
        id: 179
    },
    {
        country: "Туркмения",
        capital: "Ашхабад",
        id: 180
    },
    {
        country: "Тувалу",
        capital: "Фунафути",
        id: 181
    },
    {
        country: "Уганда",
        capital: "Кампала",
        id: 182
    },
    {
        country: "Украина",
        capital: "Киев",
        id: 183
    },
    {
        country: "Объединённые Арабские Эмираты",
        capital: "Абу-Даби",
        id: 184
    },
    {
        country: "Великобритания",
        capital: "Лондон",
        id: 185
    },
    {
        country: "Соединённые Штаты Америки",
        capital: "Вашингтон",
        id: 186
    },
    {
        country: "Уругвай",
        capital: "Монтевидео",
        id: 187
    },
    {
        country: "Узбекистан",
        capital: "Ташкент",
        id: 188
    },
    {
        country: "Вануату",
        capital: "Порт-Вила",
        id: 189
    },
    {
        country: "Венесуэла",
        capital: "Каракас",
        id: 190
    },
    {
        country: "Вьетнам",
        capital: "Ханой",
        id: 191
    },
    {
        country: "Йемен",
        capital: "Сана",
        id: 192
    },
    {
        country: "Замбия",
        capital: "Лусака",
        id: 193
    },
    {
        country: "Зимбабве",
        capital: "Хараре",
        id: 194
    }
];

export default initialDataRU;