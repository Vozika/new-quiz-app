const initialData = [
    {
        country: "Afghanistan",
        capital: "Kabul",
        id: 0
    },
    {
        country: "Albania",
        capital: "Tirana",
        id: 1
    },
    {
        country: "Algeria",
        capital: "Algiers",
        id: 2
    },
    {
        country: "Andorra",
        capital: "Andorra la Vella",
        id: 3
    },
    {
        country: "Angola",
        capital: "Luanda",
        id: 4
    },
    {
        country: "Antigua and Barbuda",
        capital: "Saint John's",
        id: 5
    },
    {
        country: "Argentina",
        capital: "Buenos Aires",
        id: 6
    },
    {
        country: "Armenia",
        capital: "Yerevan",
        id: 7
    },
    {
        country: "Australia",
        capital: "Canberra",
        id: 8
    },
    {
        country: "Austria",
        capital: "Vienna",
        id: 9
    },
    {
        country: "Azerbaijan",
        capital: "Baku",
        id: 10
    },
    {
        country: "Bahamas",
        capital: "Nassau",
        id: 11
    },
    {
        country: "Bahrain",
        capital: "Manama",
        id: 12
    },
    {
        country: "Bangladesh",
        capital: "Dhaka",
        id: 13
    },
    {
        country: "Barbados",
        capital: "Bridgetown",
        id: 14
    },
    {
        country: "Belarus",
        capital: "Minsk",
        id: 15
    },
    {
        country: "Belgium",
        capital: "Brussels",
        id: 16
    },
    {
        country: "Belize",
        capital: "Belmopan",
        id: 17
    },
    {
        country: "Benin",
        capital: "Porto-Novo",
        id: 18
    },
    {
        country: "Bhutan",
        capital: "Thimphu",
        id: 19
    },
    {
        country: "Bolivia",
        capital: "Sucre",
        id: 20
    },
    {
        country: "Bosnia and Herzegovina",
        capital: "Sarajevo",
        id: 21
    },
    {
        country: "Botswana",
        capital: "Gaborone",
        id: 22
    },
    {
        country: "Brazil",
        capital: "Brasilia",
        id: 23
    },
    {
        country: "Brunei",
        capital: "Bandar Seri Begawan",
        id: 24
    },
    {
        country: "Bulgaria",
        capital: "Sofia",
        id: 25
    },
    {
        country: "Burkina Faso",
        capital: "Ouagadougou",
        id: 26
    },
    {
        country: "Burundi",
        capital: "Gitega",
        id: 27
    },
    {
        country: "Cabo Verde",
        capital: "Praia",
        id: 28
    },
    {
        country: "Cambodia",
        capital: "Phnom Penh",
        id: 29
    },
    {
        country: "Cameroon",
        capital: "Yaounde",
        id: 30
    },
    {
        country: "Canada",
        capital: "Ottawa",
        id: 31
    },
    {
        country: "Central African Republic",
        capital: "Bangui",
        id: 32
    },
    {
        country: "Chad",
        capital: "N'Djamena",
        id: 33
    },
    {
        country: "Chile",
        capital: "Santiago",
        id: 34
    },
    {
        country: "China",
        capital: "Beijing",
        id: 35
    },
    {
        country: "Colombia",
        capital: "Bogota",
        id: 36
    },
    {
        country: "Comoros",
        capital: "Moroni",
        id: 37
    },
    {
        country: "Congo",
        capital: "Brazzaville",
        id: 38
    },
    {
        country: "Costa Rica",
        capital: "San Jose",
        id: 39
    },
    {
        country: "Croatia",
        capital: "Zagreb",
        id: 40
    },
    {
        country: "Cuba",
        capital: "Havana",
        id: 41
    },
    {
        country: "Cyprus",
        capital: "Nicosia",
        id: 42
    },
    {
        country: "Czech Republic",
        capital: "Praha",
        id: 43
    },
    {
        country: "Denmark",
        capital: "Copenhagen",
        id: 44
    },
    {
        country: "Djibouti",
        capital: "Djibouti",
        id: 45
    },
    {
        country: "Dominica",
        capital: "Roseau",
        id: 46
    },
    {
        country: "Dominican Republic",
        capital: "Santo Domingo",
        id: 47
    },
    {
        country: "Ecuador",
        capital: "Quito",
        id: 48
    },
    {
        country: "Egypt",
        capital: "Cairo",
        id: 49
    },
    {
        country: "El Salvador",
        capital: "San Salvador",
        id: 50
    },
    {
        country: "Equatorial Guinea",
        capital: "Malabo",
        id: 51
    },
    {
        country: "Eritrea",
        capital: "Asmara",
        id: 52
    },
    {
        country: "Estonia",
        capital: "Tallinn",
        id: 53
    },
    {
        country: "Eswatini",
        capital: "Mbabane",
        id: 54
    },
    {
        country: "Ethiopia",
        capital: "Addis Ababa",
        id: 55
    },
    {
        country: "Fiji",
        capital: "Suva",
        id: 56
    },
    {
        country: "Finland",
        capital: "Helsinki",
        id: 57
    },
    {
        country: "France",
        capital: "Paris",
        id: 58
    },
    {
        country: "Gabon",
        capital: "Libreville",
        id: 59
    },
    {
        country: "Gambia",
        capital: "Banjul",
        id: 60
    },
    {
        country: "Georgia",
        capital: "Tbilisi",
        id: 61
    },
    {
        country: "Germany",
        capital: "Berlin",
        id: 62
    },
    {
        country: "Ghana",
        capital: "Accra",
        id: 63
    },
    {
        country: "Greece",
        capital: "Athens",
        id: 64
    },
    {
        country: "Grenada",
        capital: "Saint George's",
        id: 65
    },
    {
        country: "Guatemala",
        capital: "Guatemala City",
        id: 66
    },
    {
        country: "Guinea",
        capital: "Conakry",
        id: 67
    },
    {
        country: "Guinea-Bissau",
        capital: "Bissau",
        id: 68
    },
    {
        country: "Guyana",
        capital: "Georgetown",
        id: 69
    },
    {
        country: "Haiti",
        capital: "Port-au-Prince",
        id: 70
    },
    {
        country: "Honduras",
        capital: "Tegucigalpa",
        id: 71
    },
    {
        country: "Hungary",
        capital: "Budapest",
        id: 72
    },
    {
        country: "Iceland",
        capital: "Reykjavik",
        id: 73
    },
    {
        country: "India",
        capital: "New Delhi",
        id: 74
    },
    {
        country: "Indonesia",
        capital: "Jakarta",
        id: 75
    },
    {
        country: "Iran",
        capital: "Tehran",
        id: 76
    },
    {
        country: "Iraq",
        capital: "Baghdad",
        id: 77
    },
    {
        country: "Ireland",
        capital: "Dublin",
        id: 78
    },
    {
        country: "Israel",
        capital: "Jerusalem",
        id: 79
    },
    {
        country: "Italy",
        capital: "Roma",
        id: 80
    },
    {
        country: "Ivory Coast",
        capital: "Yamoussoukro",
        id: 81
    },
    {
        country: "Jamaica",
        capital: "Kingston",
        id: 82
    },
    {
        country: "Japan",
        capital: "Tokyo",
        id: 83
    },
    {
        country: "Jordan",
        capital: "Amman",
        id: 84
    },
    {
        country: "Kazakhstan",
        capital: "Nur-Sultan",
        id: 85
    },
    {
        country: "Kenya",
        capital: "Nairobi",
        id: 86
    },
    {
        country: "Kiribati",
        capital: "South Tarawa",
        id: 87
    },
    {
        country: "Kosovo",
        capital: "Pristina",
        id: 88
    },
    {
        country: "Kuwait",
        capital: "Kuwait City",
        id: 89
    },
    {
        country: "Kyrgyzstan",
        capital: "Bishkek",
        id: 90
    },
    {
        country: "Laos",
        capital: "Vientiane",
        id: 91
    },
    {
        country: "Latvia",
        capital: "Riga",
        id: 92
    },
    {
        country: "Lebanon",
        capital: "Beirut",
        id: 93
    },
    {
        country: "Lesotho",
        capital: "Maseru",
        id: 94
    },
    {
        country: "Liberia",
        capital: "Monrovia",
        id: 95
    },
    {
        country: "Libya",
        capital: "Tripoli",
        id: 96
    },
    {
        country: "Liechtenstein",
        capital: "Vaduz",
        id: 97
    },
    {
        country: "Lithuania",
        capital: "Vilnius",
        id: 98
    },
    {
        country: "Luxembourg",
        capital: "Luxembourg",
        id: 99
    },
    {
        country: "Madagascar",
        capital: "Antananarivo",
        id: 100
    },
    {
        country: "Malawi",
        capital: "Lilongwe",
        id: 101
    },
    {
        country: "Malaysia",
        capital: "Kuala Lumpur",
        id: 102
    },
    {
        country: "Maldives",
        capital: "Male",
        id: 103
    },
    {
        country: "Mali",
        capital: "Bamako",
        id: 104
    },
    {
        country: "Malta",
        capital: "Valletta",
        id: 105
    },
    {
        country: "Marshall Islands",
        capital: "Majuro",
        id: 106
    },
    {
        country: "Martinique",
        capital: "Fort-de-France",
        id: 107
    },
    {
        country: "Mauritania",
        capital: "Nouakchott",
        id: 108
    },
    {
        country: "Mauritius",
        capital: "Port Louis",
        id: 109
    },
    {
        country: "Mayotte",
        capital: "Mamoutzou",
        id: 110
    },
    {
        country: "Mexico",
        capital: "Mexico City",
        id: 111
    },
    {
        country: "Micronesia",
        capital: "Palikir",
        id: 112
    },
    {
        country: "Moldova",
        capital: "Chisinau",
        id: 113
    },
    {
        country: "Monaco",
        capital: "Monaco",
        id: 114
    },
    {
        country: "Mongolia",
        capital: "Ulaanbaatar",
        id: 115
    },
    {
        country: "Montenegro",
        capital: "Podgorica",
        id: 116
    },
    {
        country: "Morocco",
        capital: "Rabat",
        id: 117
    },
    {
        country: "Mozambique",
        capital: "Maputo",
        id: 118
    },
    {
        country: "Myanmar",
        capital: "Nay Pyi Taw",
        id: 119
    },
    {
        country: "Namibia",
        capital: "Windhoek",
        id: 120
    },
    {
        country: "Nauru",
        capital: "Yaren",
        id: 121
    },
    {
        country: "Nepal",
        capital: "Kathmandu",
        id: 122
    },
    {
        country: "Netherlands",
        capital: "Amsterdam",
        id: 123
    },
    {
        country: "New Zealand",
        capital: "Wellington",
        id: 124
    },
    {
        country: "Nicaragua",
        capital: "Managua",
        id: 125
    },
    {
        country: "Niger",
        capital: "Niamey",
        id: 126
    },
    {
        country: "Nigeria",
        capital: "Abuja",
        id: 127
    },
    {
        country: "North Korea",
        capital: "Pyongyang",
        id: 128
    },
    {
        country: "North Macedonia",
        capital: "Skopje",
        id: 129
    },
    {
        country: "Norway",
        capital: "Oslo",
        id: 130
    },
    {
        country: "Oman",
        capital: "Muscat",
        id: 131
    },
    {
        country: "Pakistan",
        capital: "Islamabad",
        id: 132
    },
    {
        country: "Palau",
        capital: "Ngerulmud",
        id: 133
    },
    {
        country: "Panama",
        capital: "Panama City",
        id: 134
    },
    {
        country: "Papua New Guinea",
        capital: "Port Moresby",
        id: 135
    },
    {
        country: "Paraguay",
        capital: "Asuncion",
        id: 136
    },
    {
        country: "Peru",
        capital: "Lima",
        id: 137
    },
    {
        country: "Philippines",
        capital: "Manila",
        id: 138
    },
    {
        country: "Pitcairn",
        capital: "Adamstown",
        id: 139
    },
    {
        country: "Poland",
        capital: "Warsaw",
        id: 140
    },
    {
        country: "Portugal",
        capital: "Lisbon",
        id: 141
    },
    {
        country: "Qatar",
        capital: "Doha",
        id: 142
    },
    {
        country: "Romania",
        capital: "Bucharest",
        id: 143
    },
    {
        country: "Russia",
        capital: "Moscow",
        id: 144
    },
    {
        country: "Rwanda",
        capital: "Kigali",
        id: 145
    },
    {
        country: "Saint Kitts and Nevis",
        capital: "Basseterre",
        id: 146
    },
    {
        country: "Saint Lucia",
        capital: "Castries",
        id: 147
    },
    {
        country: "Saint Vincent and the Grenadines",
        capital: "Kingstown",
        id: 148
    },
    {
        country: "Samoa",
        capital: "Apia",
        id: 149
    },
    {
        country: "San Marino",
        capital: "San Marino",
        id: 150
    },
    {
        country: "Sao Tome and Principe",
        capital: "Sao Tome",
        id: 151
    },
    {
        country: "Saudi Arabia",
        capital: "Riyadh",
        id: 152
    },
    {
        country: "Senegal",
        capital: "Dakar",
        id: 153
    },
    {
        country: "Serbia",
        capital: "Belgrade",
        id: 154
    },
    {
        country: "Seychelles",
        capital: "Victoria",
        id: 155
    },
    {
        country: "Sierra Leone",
        capital: "Freetown",
        id: 156
    },
    {
        country: "Singapore",
        capital: "Singapore",
        id: 157
    },
    {
        country: "Slovakia",
        capital: "Bratislava",
        id: 158
    },
    {
        country: "Slovenia",
        capital: "Ljubljana",
        id: 159
    },
    {
        country: "Solomon Islands",
        capital: "Honiara",
        id: 160
    },
    {
        country: "Somalia",
        capital: "Mogadishu",
        id: 161
    },
    {
        country: "South Africa",
        capital: "Pretoria",
        id: 162
    },
    {
        country: "South Korea",
        capital: "Seoul",
        id: 163
    },
    {
        country: "South Sudan",
        capital: "Juba",
        id: 164
    },
    {
        country: "Spain",
        capital: "Madrid",
        id: 165
    },
    {
        country: "Sudan",
        capital: "Khartum",
        id: 166
    },
    {
        country: "Suriname",
        capital: "Paramaribo",
        id: 167
    },
    {
        country: "Sri Lanka",
        capital: "Sri Jayawardenepura Kotte",
        id: 168
    },
    {
        country: "Sweden",
        capital: "Stockholm",
        id: 169
    },
    {
        country: "Switzerland",
        capital: "Bern",
        id: 170
    },
    {
        country: "Syria",
        capital: "Damascus",
        id: 171
    },
    {
        country: "Tajikistan",
        capital: "Dushanbe",
        id: 172
    },
    {
        country: "Tanzania",
        capital: "Dodoma",
        id: 173
    },
    {
        country: "Thailand",
        capital: "Bangkok",
        id: 174
    },
    {
        country: "Togo",
        capital: "Lome",
        id: 175
    },
    {
        country: "Tonga",
        capital: "Nuku'alofa",
        id: 176
    },
    {
        country: "Trinidad and Tobago",
        capital: "Port of Spain",
        id: 177
    },
    {
        country: "Tunisia",
        capital: "Tunis",
        id: 178
    },
    {
        country: "Turkey",
        capital: "Ankara",
        id: 179
    },
    {
        country: "Turkmenistan",
        capital: "Ashgabat",
        id: 180
    },
    {
        country: "Tuvalu",
        capital: "Funafuti",
        id: 181
    },
    {
        country: "Uganda",
        capital: "Kampala",
        id: 182
    },
    {
        country: "Ukraine",
        capital: "Kiev",
        id: 183
    },
    {
        country: "United Arab Emirates",
        capital: "Abu Dhabi",
        id: 184
    },
    {
        country: "United Kingdom",
        capital: "London",
        id: 185
    },
    {
        country: "United States",
        capital: "Washington",
        id: 186
    },
    {
        country: "Uruguay",
        capital: "Montevideo",
        id: 187
    },
    {
        country: "Uzbekistan",
        capital: "Tashkent",
        id: 188
    },
    {
        country: "Vanuatu",
        capital: "Port Vila",
        id: 189
    },
    {
        country: "Venezuela",
        capital: "Caracas",
        id: 190
    },
    {
        country: "Vietnam",
        capital: "Hanoi",
        id: 191
    },
    {
        country: "Yemen",
        capital: "Sanaa",
        id: 192
    },
    {
        country: "Zambia",
        capital: "Lusaka",
        id: 193
    },
    {
        country: "Zimbabwe",
        capital: "Harare",
        id: 194
    }
];

export default initialData;