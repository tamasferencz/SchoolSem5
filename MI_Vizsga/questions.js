const questions = [
    {
        "id": 1,
        "category": "1. MI fogalma",
        "question": "Az alábbiak közül melyik NEM utal a mesterséges intelligencia jelenlétére egy szoftverben?",
        "type": "single",
        "options": [
            "A megoldandó feladatnak hatalmas a problématere.",
            "A szoftver viselkedése intelligens jegyeket mutat.",
            "A szoftverbe különleges technológiák vannak beépítve.",
            "A szoftver optimális megoldást talál a kitűzött problémához"
        ],
        "correct": [
            3
        ]
    },
    {
        "id": 2,
        "category": "1. MI fogalma",
        "question": "Mire utal egy algoritmussal kapcsolatban a kombinatorikus robbanás fogalma?",
        "type": "single",
        "options": [
            "Az algoritmus NP-teljes.",
            "Az algoritmus végtelen ciklusba tud kerülni.",
            "Az algoritmus kezelhetetlenül nagy memóriát igényel és/vagy a futási ideje óriási.",
            "Az ilyen algoritmus nagyságrendekkel több megoldást tud előállítani adott időegység alatt."
        ],
        "correct": [
            2
        ]
    },
    {
        "id": 3,
        "category": "1. MI fogalma",
        "question": "Mit várunk el egy útkereső algoritmustól?",
        "type": "single",
        "options": [
            "Azt, hogy egy irányított gráfban egy adott csúcsból kiinduló megadott csúcsok valamelyikébe érkező irányított utat találjon meg.",
            "Azt, hogy megadja egy irányított gráfban egy adott csúcsból kiinduló összes többi csúcsba vezető optimális költségű utat.",
            "Azt, hogy egy irányított gráfban egy adott csúcsból kiinduló megadott csúcsok valamelyikébe érkező optimális költségű irányított utat találjon meg.",
            "Azt, hogy megadja egy irányított gráfban egy adott csúcsból kiinduló összes többi csúcsba vezető valamelyik utat."
        ],
        "correct": [
            0
        ]
    },
    {
        "id": 4,
        "category": "1. MI fogalma",
        "question": "Hogyan definiáljuk az optimális költség fogalmát?",
        "type": "single",
        "options": [
            "Egy csúcsból csúcsok halmazába vezető utak költségeinek infínuma.",
            "Egy csúcsból egy másik csúcsba vezető utak költségeinek minimuma.",
            "Egy csúcsból csúcsok halmazába vezető utak költségeinek minimuma.",
            "Egy csúcsból egy másik csúcsba vezető utak költségeinek infínuma."
        ],
        "correct": [
            1,
            2
        ]
    },
    {
        "id": 5,
        "category": "1. MI fogalma",
        "question": "Mely állítások igazak az alábbiak közül (Turing/Kínai szoba)?",
        "type": "multi",
        "options": [
            "A Turing kritérium cáfolataként született meg a kínai szoba elmélet.",
            "A kínai szoba elmélet az MI szkeptikusok érveit erősíti.",
            "A Turing kritérium az MI szkeptikusok érveit erősíti",
            "A Turing kritérium és a kínai szoba elmélet egyaránt az erős MI hívők érveit erősítik."
        ],
        "correct": [
            0,
            1
        ]
    },
    {
        "id": 6,
        "category": "1. MI fogalma",
        "question": "Mikor nevezhetünk egy feladatot útkeresési problémának?",
        "type": "multi",
        "options": [
            "Amikor egy gráfban keressük egy adott csúcsból az összes többibe vezető optimális utakat.",
            "Amikor a megoldás egy irányított gráf egy útjának feleltethető meg.",
            "Amikor a feladat problématerének elemei ugyanazon csúcsból kiinduló irányított utak.",
            "Csak akkor, ha a feladat olyan állapottér modellel rendelkezik, amelyben a megoldást egy műveletsorozat írja le."
        ],
        "correct": [
            1,
            2
        ]
    },
    {
        "id": 7,
        "category": "1. MI fogalma",
        "question": "Hogyan nyerhető ki egy útkeresési probléma megoldásakor kapott útból a feladat megoldása?",
        "type": "single",
        "options": [
            "Az út élei a feladat különböző megoldásait szimbolizálják.",
            "Az út csúcsai a feladat különböző megoldásai.",
            "Sokszor az út élei mutatják a feladat megoldásához szükséges lépéseket.",
            "Néha az út végpontja szimbolizálja a feladat egy megoldását."
        ],
        "correct": [
            2,
            3
        ]
    },
    {
        "id": 8,
        "category": "1. MI fogalma",
        "question": "Mely állítások igazak egy δ-gráfra?",
        "type": "multi",
        "options": [
            "Éleinek költsége pozitív valós szám.",
            "Csúcsaiból véges sok irányított él indul ki.",
            "Csúcsaiba véges sok irányított él fut be.",
            "Végtelen sok csúcsa lehet."
        ],
        "correct": [
            1,
            3
        ]
    },
    {
        "id": 9,
        "category": "1. MI fogalma",
        "question": "Egy útkeresési feladat gráfreprezentációjához meg kell adni a ...",
        "type": "multi",
        "options": [
            "megoldási utakat",
            "reprezentációs gráfot",
            "startcsúcsot",
            "alkalmazandó heurisztikákat"
        ],
        "correct": [
            1,
            2
        ]
    },
    {
        "id": 10,
        "category": "1. MI fogalma",
        "question": "Az alábbiak közül melyek tartoznak a Turing kritériumok közé?",
        "type": "multi",
        "options": [
            "természetes nyelvű kommunikáció",
            "automatikus következtetés",
            "megszerzett ismeret tárolása",
            "optimális megoldás megtalálása"
        ],
        "correct": [
            0,
            1,
            2
        ]
    },
    {
        "id": 11,
        "category": "1. MI fogalma",
        "question": "Állítsa párba: mely fogalmak kapcsolhatók egymáshoz!",
        "type": "multi",
        "options": [
            "hatalmas problématér: kombinatorikus robbanás",
            "kínai szoba elmélet: MI szkeptikusok",
            "útkeresési feladat: probléma modell",
            "heurisztika: intuíció"
        ],
        "correct": [
            0,
            1,
            2,
            3
        ]
    },
    {
        "id": 12,
        "category": "1. MI fogalma",
        "question": "Egy hiperút egy bejárása...",
        "type": "single",
        "options": [
            "nem lehet végtelen hosszú",
            "a hiperút egy hiperélét legfeljebb annyiszor érinti, ahány közönséges irányított út vezet a hiperútban a hiperél kezdőcsúcsából a hiperél kezdőcsúcsába",
            "a hiperút összes hiperélét legalább egyszer érinti.",
            "kört nem tartalmazhat"
        ],
        "correct": [
            1,
            2
        ]
    },
    {
        "id": 13,
        "category": "2. Modellezés",
        "question": "Hogyan nem csökkenthető egy állapottér modell bonyolultsága",
        "type": "single",
        "options": [
            "Szigorítjuk az állapotok invariáns tulajdonságát",
            "Csökkentjük a célállapotok számát",
            "Növeljük az állapotok számát, de új műveleteket vezetünk be",
            "Szigorítjuk a műveletek értelmezési tartományát"
        ],
        "correct": [
            1
        ]
    },
    {
        "id": 14,
        "category": "2. Modellezés",
        "question": "Mitől nem függ egy reprezentációs gráf bonyolultsága?",
        "type": "single",
        "options": [
            "A csúcsai ki-be fok számától",
            "A köreinek gyakoriságától, és hosszuk sokféleségétől",
            "A csúcsainak és éleinek számától",
            "A csúcsai be-fok számától"
        ],
        "correct": [
            3
        ]
    },
    {
        "id": 15,
        "category": "2. Modellezés",
        "question": "Melyik NEM része a probléma dekompozíciós modelleknek?",
        "type": "single",
        "options": [
            "Dekompozíciós műveletek definiálása",
            "Az állapotok definiálása",
            "A kiinduló probléma leírása",
            "Az egyszerű problémák megadása"
        ],
        "correct": [
            1
        ]
    },
    {
        "id": 16,
        "category": "2. Modellezés",
        "question": "Milyen egy dekompozíciós operátor",
        "type": "single",
        "options": [
            "Egy probléma-sorozatot részsorozatokra bont fel.",
            "Egy problémát megadott problémák egyikével helyettesít",
            "Egy problémát több problémának a halmazára képez le",
            "Egy problémát több problémának a sorozatára képez le"
        ],
        "correct": [
            3
        ]
    },
    {
        "id": 17,
        "category": "2. Modellezés",
        "question": "Az alábbiak közül melyek NEM elemei az állapottér modellnek?",
        "type": "single",
        "options": [
            "műveletgráf",
            "Állapotgráf",
            "kezdő állapot vagy annak leírása",
            "heurisztika"
        ],
        "correct": [
            1,
            3
        ]
    },
    {
        "id": 18,
        "category": "2. Modellezés",
        "question": "Mely állítások igazak az állapotgráfra az alábbiak közül?",
        "type": "multi",
        "options": [
            "Célcsúcsai a modellezett feladat megoldásai",
            "Csúcsai az állapotokat szimbolizálják",
            "Élei a műveletek végrehajtásait szimbolizálják",
            "Startcsúcsa a kezdőállapotot szimbolizálja"
        ],
        "correct": [
            1,
            2,
            3
        ]
    },
    {
        "id": 19,
        "category": "2. Modellezés",
        "question": "Az alábbi feladat-modellezések közül melyeknél NEM egyezett meg a problématér a reprezentációs gráf startcsúcsból kivezető útjaival?",
        "type": "single",
        "options": [
            "Hanoi-tornyai probléma",
            "integrálszámítás",
            "8-as kirakó játék",
            "n-királynő probléma"
        ],
        "correct": [
            1,
            3
        ]
    },
    {
        "id": 20,
        "category": "2. Modellezés",
        "question": "Melyik ok-okozati összefüggések igazak az alábbiak közül?",
        "type": "multi",
        "options": [
            "Az állapotgráfbeli körök hossza és száma kihat a problématér bonyolultságára.",
            "Az optimális megoldások száma kihat a megoldó algoritmus hatékonyságára.",
            "Az állapotgráf csúcsainak száma kihat a megoldó algoritmus hatékonyságára",
            "A megoldó algoritmus számítási bonyolultsága kihat a problématér bonyolultságára"
        ],
        "correct": [
            0,
            2
        ]
    },
    {
        "id": 21,
        "category": "2. Modellezés",
        "question": "Hogyan csökkenthető egy állapottér modellben a műveletek kiszámítási bonyolultsága?",
        "type": "single",
        "options": [
            "Az állapotok extra információval egészítjük ki.",
            "Több heurisztikát építünk a modellbe",
            "Szigorítjuk az állapotok invariáns állítását.",
            "Szigorítjuk a műveletek előfeltételét."
        ],
        "correct": [
            0,
            2
        ]
    },
    {
        "id": 22,
        "category": "2. Modellezés",
        "question": "Mely fogalmak kapcsolhatók egymáshoz",
        "type": "multi",
        "options": [
            "Dekompozíciós operátor: hiperél",
            "Állapot: Csúcs",
            "Művelet: irányított él",
            "dekompozíciós művelet: hiperút"
        ],
        "correct": [
            0,
            1,
            2,
            3
        ]
    },
    {
        "id": 23,
        "category": "2. Modellezés",
        "question": "Mely feltételei a visszafelé haladó keresésnek?",
        "type": "single",
        "options": [
            "A reprezentációs gráf kétirányú éleket tartalmazzon és legyen ismert az összes célállapot",
            "A reprezentációs gráf startcsúcsaiból az összes célcsúcsba vezető úton kétirányú élek legyenek",
            "A reprezentációs gráf kétirányú éleket tartalmazzon és legyen ismert valamelyik célállapot.",
            "A reprezentációs gráf startcsúcsaiból valamelyik célcsúcsba vezető úton kétirányú élek legyenek."
        ],
        "correct": [
            2
        ]
    },
    {
        "id": 24,
        "category": "2. Modellezés",
        "question": "Mi célt szolgál a probléma-redukciós operátor?",
        "type": "single",
        "options": [
            "Az állapottér modell egy műveletére megadja, hogy a művelet segítségével mely állapotokból lehet eljutni adott állapotok egyikébe.",
            "Megadja, hogy egy állapot mely állapotokból érhető el egy állapottér modellben",
            "Egy állapottér modell egy műveletének inverze.",
            "Egy problémát egyszerűbb problémákra vezet vissza."
        ],
        "correct": [
            0
        ]
    },
    {
        "id": 25,
        "category": "3. Lokális keresések",
        "question": "Az alábbi módszerek közül melyiknél változhat futás közben a globális munkaterület mérete?",
        "type": "single",
        "options": [
            "Szimultán hűtésnél",
            "Tabu keresésnél",
            "Hegymászó módszernél",
            "Véletlen újra indított hegymászó módszernél"
        ],
        "correct": [
            1
        ]
    },
    {
        "id": 26,
        "category": "3. Lokális keresések",
        "question": "Melyik állítás NEM igaz a lokális keresésekre az alábbiak közül?",
        "type": "single",
        "options": [
            "Az aktuális csúcs környezetéből választja az út aktuális csúcsot",
            "Memóriája az aktuális csúcs környezetének tárolására korlátozódik",
            "Ezek mohó stratégájú algoritmusok",
            "Csak egy lokálisan legjobb megoldást képes megtalálni"
        ],
        "correct": [
            2,
            3
        ]
    },
    {
        "id": 27,
        "category": "3. Lokális keresések",
        "question": "Tekinthető-e a hegymászó módszer a tabu keresés speciális változatának?",
        "type": "single",
        "options": [
            "Nem, mert a tabu keresés véletlen módon választ új csúcsot.",
            "Igen, amennyiben a hegymászó módszer tulajdonképpen egy egyelemű tabu halmazt használ, amely az előző aktuális csúcsot tárolja csak.",
            "Nem, amennyiben a hegymászó módszer nem tárolja el az eddig megtalált legjobb kiértékelő függvényértékű csúcsot",
            "Nem, mert a tabu keresés felismeri a köröket, a hegymászó algoritmus nem."
        ],
        "correct": [
            1,
            2
        ]
    },
    {
        "id": 28,
        "category": "3. Lokális keresések",
        "question": "Hány helyen használ a szimultán hűtés algoritmusa véletlenített módszert?",
        "type": "single",
        "options": [
            "Kettő. A következő csúcs kiválasztásához, illetve annak elfogadásához",
            "Egy. A következő aktuális csúcs kiválasztásához",
            "Három. A következő aktuális csúcs kiválasztásához, annak elfogadásához és a hűtési ütemterv változásához.",
            "Nulla. Ez ugyan egy nem-determinisztikus módszer, de nem használ véletlenítést"
        ],
        "correct": [
            0
        ]
    },
    {
        "id": 29,
        "category": "3. Lokális keresések",
        "question": "Mely állítások igazak az alábbiak közül?",
        "type": "multi",
        "options": [
            "A heurisztika garantálja, hogy az algoritmus hatékonysága jobb lesz.",
            "A heurisztikát a feladatot megoldó algoritmusba közvetlenül építjük be",
            "A heurisztika garantálja, hogy az algoritmus az optimális megoldást találja meg.",
            "A heurisztika egyszerre csökkentheti az algoritmus memória igényét és futási idejét"
        ],
        "correct": [
            1,
            3
        ]
    },
    {
        "id": 30,
        "category": "3. Lokális keresések",
        "question": "Melyek az alábbiak közül a tabu keresés hátrányai?",
        "type": "multi",
        "options": [
            "Zsákutcába érve a keresés megáll",
            "A tabu halmaz méretét csak kísérletezéssel lehet beállítani",
            "Képes felismerni, és elkerülni a kisebb köröket",
            "Kicsi a memória igénye"
        ],
        "correct": [
            0,
            1
        ]
    },
    {
        "id": 31,
        "category": "3. Lokális keresések",
        "question": "Mely állítások NEM igazak a lokális keresésre az alábbiak közül?",
        "type": "multi",
        "options": [
            "Talál megoldást, ha van megoldás",
            "Körmentes gráfokban nem akad el.",
            "Erősen összefüggő gráfokban nem akadnak el.",
            "Kicsi memóriát használnak"
        ],
        "correct": [
            0,
            1
        ]
    },
    {
        "id": 32,
        "category": "3. Lokális keresések",
        "question": "Melyek az alábbiak közül a hegymászó módszer hátrányai?",
        "type": "multi",
        "options": [
            "Kicsit a memória igénye",
            "Nem garantál optimális megoldást",
            "Körök mentén végtelen működésbe kezdhet",
            "Zsákutcába érve a keresés megáll"
        ],
        "correct": [
            1,
            2,
            3
        ]
    },
    {
        "id": 33,
        "category": "3. Lokális keresések",
        "question": "Hogyan hat a heurisztika információ tartalma egy kereső rendszer futási idejére?",
        "type": "multi",
        "options": [
            "Nagyobb információ tartalom mellett egy lépés futási ideje nő",
            "Minél nagyobb az információ tartalom, annál jobb lesz a hatékonysága",
            "Minél kisebb az információ tartalma, annál gyorsabban tud új lépést választani",
            "Nagyobb információ tartalom mellet a lépések száma csökkenhet"
        ],
        "correct": [
            0,
            2,
            3
        ]
    },
    {
        "id": 34,
        "category": "3. Lokális keresések",
        "question": "Mely algoritmusok születtek a hegymászó módszer zsákutcájában való beragadásának elkerülésére?",
        "type": "multi",
        "options": [
            "Lokális nyaláb keresés (local beam search)",
            "Véletlen újraindított keresés (random restart search)",
            "Szimultán hűtés algoritmusa",
            "Tabu keresés"
        ],
        "correct": [
            0,
            1,
            2
        ]
    },
    {
        "id": 35,
        "category": "3. Lokális keresések",
        "question": "Mi a lokális keresések általános vezérlési stratégiája?",
        "type": "single",
        "options": [
            "Az aktuális csúcs környezetéből válasszuk a legjobb csúcsot!",
            "Az aktuális csúcs(ok) környezetéből válasszunk egy (vagy több) viszonylag jó csúcsot!",
            "Az aktuális csúcs szomszédjai közül válasszuk a legjobb csúcsot",
            "Az aktuális csúcs(ok) környezetéből válasszuk a legjobb csúcsot (csúcsokat)"
        ],
        "correct": [
            1
        ]
    },
    {
        "id": 36,
        "category": "3. Lokális keresések",
        "question": "A tabu keresésnél használt kiértékelő függvény... heurisztikus stratégiának számít?",
        "type": "single",
        "options": [
            "A heurisztikának nincs köze a vezérlési stratégiához",
            "Nem mert, ezt csak olyan feladatoknál használhatjuk...",
            "Igen, ez a függvény a konkrét feladatból származik.",
            "Nem mert ilyen függvényt minden tabu keresés használ"
        ],
        "correct": [
            2
        ]
    },
    {
        "id": 37,
        "category": "4. Visszalépéses keresés",
        "question": "Mely fogalmak kapcsolhatók egymáshoz a visszalépéses keresés esetén?",
        "type": "multi",
        "options": [
            "Globális munkaterület: Irányított út",
            "keresési szabály: visszalépés",
            "másodlagos vezérlési stratégia: sorrendi szabály",
            "Második változat: mélységi korlát figyelés"
        ],
        "correct": [
            0,
            1,
            2,
            3
        ]
    },
    {
        "id": 38,
        "category": "4. Visszalépéses keresés",
        "question": "Mit tartalmaz a visszalépéses keresésnek a globális munkaterülete?",
        "type": "single",
        "options": [
            "A startcsúcsból kiinduló egyik utat és annak csúcsaiból kivezető még nem vizsgált éleket.",
            "Az eddig bejárt részgráfot és külön annak a startcsúcsból kiinduló egyik útját annak csúcsaiból kivezető még nem vizsgált élekkel együtt",
            "Ez eddig bejárt startcsúcsból kiinduló utakat azok csúcsaiból kivezető még nem vizsgált élekkel együtt",
            "A reprezentációs gráfot és külön annak a startcsúcsból kiinduló egyik útját"
        ],
        "correct": [
            0
        ]
    },
    {
        "id": 39,
        "category": "4. Visszalépéses keresés",
        "question": "Melyek a visszalépéses keresés keresési szabályai?",
        "type": "single",
        "options": [
            "A nyilvántartott út kiterjesztése, illetve a visszalépés",
            "A nyilvántartott út végcsúcsácsól kivezető egyik él hozzávétele az úthoz, illetve az út utolsó élének elvétele",
            "A nyilvántartott úthoz egy újabb kivezető él hozzávétele, illetve az utolsó él elvétele",
            "A nyilvántartott út utolsó csúcsának kiterjesztése, illetve az utolsó él elvétel"
        ],
        "correct": [
            1
        ]
    },
    {
        "id": 40,
        "category": "4. Visszalépéses keresés",
        "question": "Mi a visszalépéses keresés általános vezérlési stratégiája",
        "type": "multi",
        "options": [
            "A továbblépést meghatározó sorrendi és a vágó szabályok",
            "A visszalépés szabálya mindig elsőbbséget élvez a többi keresési szabállyal szemben",
            "Zsákutcába jutva mindig a visszalépés szabályát kell választani",
            "A visszalépés szabályát csak a legvégső esetben válasszuk"
        ],
        "correct": [
            3
        ]
    },
    {
        "id": 41,
        "category": "4. Visszalépéses keresés",
        "question": "Melyek az alábbiak közül a visszalépéses keresés hátrányai",
        "type": "multi",
        "options": [
            "Kezdetben hozott rossz döntést csak sok visszalépés árán korrigálja",
            "Nagy memória igénye",
            "Nehéz az implementációja",
            "Ugyanezt a részgráfot többször is bejárja"
        ],
        "correct": [
            0,
            3
        ]
    },
    {
        "id": 42,
        "category": "4. Visszalépéses keresés",
        "question": "4-királynő probléma 2. állapottér modellje: Hány startcsúcsból kivezető utat vizsgál meg ebben a visszalépéses keresés második változata, ha a mélységi korlát 2?",
        "type": "single",
        "options": [
            "20",
            "8",
            "21",
            "16"
        ],
        "correct": [
            2
        ]
    },
    {
        "id": 43,
        "category": "4. Visszalépéses keresés",
        "question": "Mely állítások igazak a visszalépéses keresés második változatára az alábbiak közül?",
        "type": "multi",
        "options": [
            "Minden g-gráfban talál megoldást, ha annak hossza rövidebb, mint a mélységi korlát",
            "Minden g-gráfban terminál",
            "Minden g-gráfban talál megoldást, ha van",
            "Minden g-gráfban megmutatja, hogy van-e megoldás"
        ],
        "correct": [
            0,
            1
        ]
    },
    {
        "id": 44,
        "category": "4. Visszalépéses keresés",
        "question": "Mely állítások NEM igazak a visszalépéses keresés második változatára?",
        "type": "multi",
        "options": [
            "Képes megtalálni a legrövidebb megoldást, ha van",
            "Ha van megoldást a mélységi korláton belül akkor talál megoldást",
            "A körfigyelés önmagában is elég ahhoz, hogy garantáltan termináljon",
            "A mélységi korlát figyelés önmagában is elég ahhoz, hogy garantáltan termináljon"
        ],
        "correct": [
            0,
            2
        ]
    },
    {
        "id": 45,
        "category": "4. Visszalépéses keresés",
        "question": "Melyek az alábbiak közül a visszalépéses keresés előnyei?",
        "type": "multi",
        "options": [
            "Véges g-gráfban optimális megoldást talált",
            "Mindig terminál",
            "Ha van (mélységi korláton belül) megoldása, akkor talál egyet",
            "Kicsi a memória igénye"
        ],
        "correct": [
            1,
            2,
            3
        ]
    },
    {
        "id": 46,
        "category": "4. Visszalépéses keresés",
        "question": "Mely állítások NEM igazak az alábbiak közül?",
        "type": "single",
        "options": [
            "A sorrendi szabály egy heurisztikus vezérlési szabály",
            "A mélységi korlát felfogható egy speciális vágó szabálynak",
            "A sorrendi és a vágó szabály egyaránt épülhet heurisztikára",
            "Vágó szabály nem alkalmazható sorrendi szabályokkal együtt"
        ],
        "correct": [
            0,
            3
        ]
    },
    {
        "id": 47,
        "category": "4. Visszalépéses keresés",
        "question": "Képzelje maga elé a Hanoi tornyai... hányat vizsgál meg... ha a mélységi korlát 3?",
        "type": "single",
        "options": [
            "15",
            "8",
            "14",
            "9"
        ],
        "correct": [
            0
        ]
    },
    {
        "id": 48,
        "category": "5. Gráfkeresés",
        "question": "Mit tartalmaz a gráfkeresés globális munkaterülete?",
        "type": "single",
        "options": [
            "A startcsúcsól kiinduló eddig felfedezett összes utat a nyílt csúcsokkal együtt",
            "A reprezentációs gráfot, de külön megcímkézve benne a már bejárt csúcsokkal",
            "A reprezentációs gráf egy tetszőleges részgráfját",
            "Csak a nyílt csúcsok halmazát"
        ],
        "correct": [
            0
        ]
    },
    {
        "id": 49,
        "category": "5. Gráfkeresés",
        "question": "Melyek a gráfkeresés keresési szabályai?",
        "type": "single",
        "options": [
            "A nyílt csúcsok kiterjesztései",
            "Egy újabb él hozzávétele a kereső gráf egyik csúcsához",
            "A továbblépés (újabb él felfedezése) és a visszalépés",
            "A továbblépés (egy csúcsból kivezető összes él felfedezése) és a visszalépés"
        ],
        "correct": [
            0
        ]
    },
    {
        "id": 50,
        "category": "5. Gráfkeresés",
        "question": "Mi a gráfkeresés általános vezérlési stratégiája",
        "type": "single",
        "options": [
            "Minden lépésben a legígéretesebb nyílt csúcsot választja kiterjesztésre",
            "A legutoljára felfedezett nyílt csúcs kiterjesztése",
            "A startcsúcsból legkisebb költségű úton elérhető nyílt csúcs kiterjesztése",
            "A startcsúcsból legkisebb költségű már felfedezett úton elérhető nyílt csúcs kiterjesztése"
        ],
        "correct": [
            0
        ]
    },
    {
        "id": 51,
        "category": "5. Gráfkeresés",
        "question": "mely csúcsokat nevezzük a gráfkereséseknél nyílt csúcsoknak?",
        "type": "single",
        "options": [
            "A keresőgráf azon csúcsait, amelyek gyermekeit még nem, vagy nem eléggé jól ismerjük, ennél fogva kiterjesztésre várnak",
            "A keresőgráf azon csúcsait, amelyekből kivezető éleket még nem fedeztük fel.",
            "A keresőgráf azon csúcsait, amelyeket még nem terjesztettünk ki",
            "A reprezentációs gráf azon csúcsait, amelyeket még nem terjesztettünk ki"
        ],
        "correct": [
            0
        ]
    },
    {
        "id": 52,
        "category": "5. Gráfkeresés",
        "question": "Mit mutat a gráfkereséseknél a szülőre visszamutató pointerfüggvény (pi)",
        "type": "single",
        "options": [
            "A keresőgráfbeli csúcsok egyik szülőjét",
            "A reprezentációs gráfbeli csúcsok legjobb szülőjét",
            "A keresőgráfbeli csúcsok legjobb szülőjét",
            "A reprezentációs gráfbeli csúcsok egyik szülőjét"
        ],
        "correct": [
            0
        ]
    },
    {
        "id": 53,
        "category": "5. Gráfkeresés",
        "question": "Mit mutat a gráfkereséseknél a költségfüggvény (g)?",
        "type": "single",
        "options": [
            "A startcsúcsból a keresőgráfbeli csúcsokhoz, a keresőgráfban vezető egyik út költségét",
            "A startcsúcsból a keresőgráfbeli csúcsokhoz vezető egyik új költségét",
            "A startcsúcsból a keresőgráfbeli csúcsokhoz, a keresőgráfban vezető legolcsóbb út költségét",
            "A startcsúcsból a keresőgráfbeli csúcsokhoz a szülőre visszamutató pointerfüggvény által kijelölt út költségét"
        ],
        "correct": [
            0
        ]
    },
    {
        "id": 54,
        "category": "5. Gráfkeresés",
        "question": "Mikor nevezünk egy kiértékelő függvény csökkenőnek",
        "type": "single",
        "options": [
            "Ha egy csúcs függvényértéke soha nem nő, viszont mindig csökken valahányszor olcsóbb odavezető utat találunk hozzá",
            "Ha egy csúcs értéke csak akkor változik, de akkor csökken, ha egy olcsóbb odavezető utat találunk hozzá",
            "Ha egy startcsúcsból kiinduló már felfedezett út mentén a csúcsok függvényértékei monoton csökkennek",
            "Ha az algoritmus által kiterjesztett csúcsok függvényértékei monoton csökkennek"
        ],
        "correct": [
            0
        ]
    },
    {
        "id": 55,
        "category": "5. Gráfkeresés",
        "question": "Hogyan lehet a keresőgráf korrektségét fenntartani?",
        "type": "single",
        "options": [
            "Minden kiterjesztés után bejárjuk a kiterjesztéssel elért gyerekcsúcsok leszármazottiat (ha vannak), és kijavítjuk azok korrektségét",
            "Olyan kiértékelő függvényt használunk, amely kizárja, hogy egy már korábban kiterjesztett csúcshoz minden addiginál olcsóbb odavezető utat találjunk a startcsúcsból",
            "Visszahelyezzük az OPEN halmazba azt a zárt csúcsot, amelyhez minden eddiginél olcsóbb odavezető utat találunk a startcsúcsból",
            "Amikor egy minden eddiginél olcsóbb odavezető utat találunk egy csúcshoz, akkor módosítjuk a szülőre visszamutató pointerfüggvény értékét és a költségfüggvény értékét"
        ],
        "correct": [
            0,
            1
        ]
    },
    {
        "id": 56,
        "category": "5. Gráfkeresés",
        "question": "Mikor mondjuk a keresőgráf egyik csúcsára, hogy korrekt?",
        "type": "single",
        "options": [
            "Ha a szülőre visszamutató pointerek a keresőgráfra nézve optimális utat jelölnek ki hozzá a startcsúcsból, és ennek az útnak a költségét mutatja a költségfüggvény",
            "Ha optimális és konzisztens",
            "Ha a gráfkeresés már kiterjesztette a gyerekeit is",
            "Ha a költségfüggvény értéke a visszamutató pointerfüggvény által kijelölt szülő csúcsánál mért költségfüggvény értékének és a szülőtől hozzávezető él költségének összege"
        ],
        "correct": [
            0,
            1
        ]
    },
    {
        "id": 57,
        "category": "5. Gráfkeresés",
        "question": "Mely állítások igazak az alábbiak közül a gráfkeresés általános algoritmusára?",
        "type": "multi",
        "options": [
            "Véges g-gráfban mindig terminál",
            "Egy csúcsot legfeljebb véges sokszor terjesztett ki még végtelen nagy g-gráfok esetén is",
            "Véges g-gráfban talál megoldást, ha van",
            "Véges g-gráfban optimális megoldást talál, ha van megoldást"
        ],
        "correct": [
            0,
            1,
            2
        ]
    },
    {
        "id": 58,
        "category": "5. Gráfkeresés",
        "question": "Melyik állítások NEM igazak az alábbiak közül a gráfkeresés általános algoritmusára?",
        "type": "multi",
        "options": [
            "Körmentes g-gráfban talál megoldást, ha van",
            "g-gráfban mindig terminál",
            "Csökkenthető kiértékelő függvényt használva soha nem terjeszt ki inkorrekt csúcsot",
            "Véges g-gráfban talál megoldást, ha van"
        ],
        "correct": [
            0,
            1
        ]
    },
    {
        "id": 59,
        "category": "5. Gráfkeresés",
        "question": "Mely fogalmak kapcsolhatók egymáshoz a gráfkereséseknél:",
        "type": "multi",
        "options": [
            "globális munkaterület: keresőgráf",
            "keresési szabály: kiterjesztés",
            "pointerfüggvény: szülőcsúcs",
            "csökkenő kiértékelő függvény: korrektség"
        ],
        "correct": [
            0,
            1,
            2,
            3
        ]
    },
    {
        "id": 60,
        "category": "6. A* algoritmus",
        "question": "Lehet-e sorrendi heurisztika egy nem informált gráfkeresés másodlagos vezérlési stratégiájában?",
        "type": "single",
        "options": [
            "Igen",
            "Nem",
            "Csak akkor, ha már az elsődleges vezérlési stratégia is alkalmaz heurisztikát",
            "A másodlagos stratégiában nem lehet heurisztikát beépíteni"
        ],
        "correct": [
            0
        ]
    },
    {
        "id": 61,
        "category": "6. A* algoritmus",
        "question": "Mit jelent a gráfkereséseknél a megengedhetőség fogalma",
        "type": "single",
        "options": [
            "Olyan heurisztikus függvényt, amely alulról becsüli egy reprezentációs gráfban a csúcsokból a célba vezető optimális út költségét",
            "Olyan gráfkereső algoritmus, amelyik optimális megoldást talál, ha van",
            "Olyan algoritmus, amely lépésről lépésre szűkíti a megoldások halmazát, amíg az már csak az optimális megoldásokat tartalmazza",
            "Olyan gráfkereséseket, amelyek kiértékelő függvényében megengedett a heurisztika használata"
        ],
        "correct": [
            0
        ]
    },
    {
        "id": 62,
        "category": "6. A* algoritmus",
        "question": "Melyik állítás NEM igaz az azonosan nulla függvényről?",
        "type": "single",
        "options": [
            "Nem választható kiértékelő függvénynek",
            "Becsüli a célba vezető optimális út költségét",
            "Megengedhető és monoton megszorításos",
            "Nem tartalmaz extra ismeretet, azaz heurisztikát"
        ],
        "correct": [
            0
        ]
    },
    {
        "id": 63,
        "category": "6. A* algoritmus",
        "question": "Melyik gráfkereső algoritmust nevezzük A* algoritmusnak?",
        "type": "single",
        "options": [
            "Amelyik kiértékelő függvénye g+h alakú, ahol h nem-negatív és megengedő",
            "Amelyik kiértékelő függvénye g+h alakú, ahol h nem-negatív, megengedő és monoton megszorításos",
            "Amelyik garantáltan optimális megoldást talál, ha van",
            "Amelyik kiértékelő függvénye g+h alakú, ahol h megengedhető, és garantáltan optimális megoldást talál, ha van"
        ],
        "correct": [
            0
        ]
    },
    {
        "id": 64,
        "category": "6. A* algoritmus",
        "question": "Mi az alábbiak közül az A algoritmus tulajdonsága?",
        "type": "single",
        "options": [
            "g-gráfban megengedhető heurisztikával optimális megoldást talál, ha van",
            "Heurisztikus függvénye megengedhető",
            "g-gráfban egy csúcsot legfeljebb egyszer terjeszt ki",
            "g-gráfban optimális megoldást talál, ha van"
        ],
        "correct": [
            0
        ]
    },
    {
        "id": 65,
        "category": "6. A* algoritmus",
        "question": "Mely állítás NEM igaz a következetes A^c algoritmusra?",
        "type": "single",
        "options": [
            "A kiterjesztéseinek száma akár a kiterjesztett csúcsok száma mínusz egynek a kettő hatványa is lehet.",
            "Egy csúcsot legfeljebb egyszer terjeszthet ki",
            "Amikor a csúcsot kiterjeszti, már ismeri a start csúcsból odavezető optimális utat",
            "Optimális megoldással terminál, ha van megoldás"
        ],
        "correct": [
            0
        ]
    },
    {
        "id": 66,
        "category": "6. A* algoritmus",
        "question": "Mennyi a B algoritmus kiterjesztéseinek száma legrosszabb esetben, ha a kiterjesztett csúcsok száma k?",
        "type": "single",
        "options": [
            "½ k^2",
            "2^(k-1)",
            "k",
            "k log2 k"
        ],
        "correct": [
            0
        ]
    },
    {
        "id": 67,
        "category": "6. A* algoritmus",
        "question": "Mikor mondunk egy A* algoritmust jobban informáltnak egy másiknál?",
        "type": "single",
        "options": [
            "Ha a heurisztikus függvényének értéke a nem célcsúcsokban nagyobb, mint a másik algoritmus heurisztikus függvényének értéke.",
            "Ha kevesebb csúcs kiterjesztése mellett terminál.",
            "Ha a memória igénye nem nagyobb a másikénál.",
            "Ha a heurisztikus függvényének értéke a nem célcsúcsokban közelebbi becslést ad, mint a másik algoritmus heurisztikus függvényének értéke."
        ],
        "correct": [
            0
        ]
    },
    {
        "id": 68,
        "category": "6. A* algoritmus",
        "question": "Mikor mondjuk a gráfkereséseknél egy heurisztikus függvényről azt, hogy monoton megszorításos?",
        "type": "single",
        "options": [
            "Ha bármelyik él költsége nagyobb-egyenlő, mint az a különbség, amit úgy kapunk, hogy az él kezdőcsúcsának függvényértékéből levonjuk a végcsúcsának függvényértékét.",
            "Ha a függvényt használó gráfkeresés működési grafikonja monoton növekedő.",
            "Ha a függvény megengedhető és nem negatív.",
            "Ha a függvény alulról becsüli minden csúcsban a hátralevő optimális költséget."
        ],
        "correct": [
            0
        ]
    },
    {
        "id": 69,
        "category": "6. A* algoritmus",
        "question": "Melyik állítás igaz az egyenletes gráfkeresésre?",
        "type": "multi",
        "options": [
            "Optimális megoldást talál, ha van.",
            "Egy már kiterjesztett csúcshoz soha nem talál minden addiginál olcsóbb utat.",
            "Kiértékelő függvénye az élek élköltségeit egységnyinek tekinti.",
            "Dijkstra legrövidebb utak algoritmusának szinonimája."
        ],
        "correct": [
            0,
            1
        ]
    },
    {
        "id": 70,
        "category": "6. A* algoritmus",
        "question": "Az alábbiak közül melyek a megengedhető gráfkereső algoritmusok?",
        "type": "multi",
        "options": [
            "A algoritmus",
            "B algoritmus",
            "Egyenletes gráfkeresés",
            "A** algoritmus"
        ],
        "correct": [
            0,
            1,
            2,
            3
        ]
    },
    {
        "id": 71,
        "category": "6. A* algoritmus",
        "question": "Mely fogalmak kapcsolhatók egymáshoz a gráfkereséseknél?",
        "type": "multi",
        "options": [
            "mélységi gráfkeresés: nem-informált gráfkeresés",
            "A* algoritmus: optimális megoldás",
            "B algoritmus: Martelli",
            "memória igény: zárt csúcsok száma"
        ],
        "correct": [
            0,
            1,
            2,
            3
        ]
    },
    {
        "id": 72,
        "category": "7. Kétszemélyes játékok",
        "question": "Az alábbiak közül melyik tulajdonság NEM volt érvényes a kurzuson tárgyalt játékokra?",
        "type": "single",
        "options": [
            "zéró összegű",
            "véges",
            "egyik játékosnak biztos van győztes stratégiája",
            "determinisztikus"
        ],
        "correct": [
            2
        ]
    },
    {
        "id": 73,
        "category": "7. Kétszemélyes játékok",
        "question": "Hogyan modellezzük a kétszemélyes játékokat?",
        "type": "single",
        "options": [
            "Probléma dekompozícióval",
            "ÉS/VAGY fákkal",
            "Állapottér modellel",
            "Korlát kielégítéses modellel"
        ],
        "correct": [
            2
        ]
    },
    {
        "id": 74,
        "category": "7. Kétszemélyes játékok",
        "question": "Mi a nyerő stratégiája egy játékosnak egy kétszemélyes játékban?",
        "type": "single",
        "options": [
            "Győztes végállásba vezető játszmáinak összessége",
            "A győztes végállásba vezető egyik játszmája",
            "Azon győztes végállásba vezető játszmáinak összessége, amelyeik közül valamelyiket biztosan végig tudja játszani, ha nem hibázik",
            "Győztes végállásainak összessége"
        ],
        "correct": [
            2
        ]
    },
    {
        "id": 75,
        "category": "7. Kétszemélyes játékok",
        "question": "Melyik állítás igaz az alábbiak közül egy játékos nyerő stratégiára?",
        "type": "single",
        "options": [
            "A játékfából készített ÉS/VAGY fában egy olyan hiperút amelyik a startcsúcsból csupa a játékos számára nyerő végállásba vezet",
            "Az egyik játékos biztosan rendelkezik vele",
            "Mindkét játékos számára előállítható",
            "A játékfából a játékos szempontjából készített ÉS/VAGY fában egy olyan hiperút amelyik a startcsúcsból csupa a játékos számára nyerő végállásba vezet"
        ],
        "correct": [
            3
        ]
    },
    {
        "id": 76,
        "category": "7. Kétszemélyes játékok",
        "question": "Hogyan lehet megtudni, hogy kinek van győztes stratégiája egy két kimenetelű kétszemélyes játékban?",
        "type": "single",
        "options": [
            "úgy, hogy a minimax algoritmust alkalmazzuk a teljes játékfára, úgy, hogy az első játékos győztes állásaihoz +1-et, a vesztes állásaihoz -1et rendelünk. Ha a gyökérbe felfutatot érték +1, akkor az első játékosnak van győztes stratégiája, egyébként a másodiknak.",
            "A játékfa leveleit megcímkézzük annak a játékosnak a nevével, aki a levélcsúccsal jelzet állásban nyerni fog. Szintről szintre felfelé haladva, az Y játékos szintjén lévő csúcs, ha van Y címkéjű gyereke, akkor Y címkét kap, különben a másik játékos nevét írjuk oda. A gyökér címkéje adja meg a választ.",
            "átalakítjuk a játékfát ÉS/VAGY fává és ebben keresünk olyan gyökérből induló hiperutat...",
            "Nem lehetséges véges lépésben megválaszolni ezt a kérdést."
        ],
        "correct": [
            0,
            1
        ]
    },
    {
        "id": 77,
        "category": "7. Kétszemélyes játékok",
        "question": "Mikor következik be vágás az alfa-béta algoritmus működése során?",
        "type": "single",
        "options": [
            "Ha az aktuális csúcs alfa értéke nagyobb vagy egyenlő az alatta, vagy felette levő csúcs béta értékével",
            "Ha az aktuális út egy alfa értéke nagyobb vagy egyenlő az út egy béta értékénél",
            "Ha az aktuális csúcs egy alfa értéke kisebb vagy egyenlő az út egy béta értékénél",
            "Ha az aktuális csúcs alfa értéke nagyobb vagy egyenlő a csúcs béta értékénél"
        ],
        "correct": [
            1
        ]
    },
    {
        "id": 78,
        "category": "7. Kétszemélyes játékok",
        "question": "Mi a nyugalmi teszt?",
        "type": "single",
        "options": [
            "A heurisztikus kiértékelő függvény konstruálásához használt lehetséges módszer",
            "Az alfa-béta algoritmus vágási feltételét ellenőrző teszt",
            "Váltakozó mélységű keresésnél a részfa felépítéséhez használt feltétel",
            "Egy szülőcsúcs és egy gyerekének kiértékelő függvényértékei különbséget vizsgáló teszt"
        ],
        "correct": [
            2,
            3
        ]
    },
    {
        "id": 79,
        "category": "7. Kétszemélyes játékok",
        "question": "Mely állítások igazak az alábbiak közül a játékfára?",
        "type": "multi",
        "options": [
            "Szintjei a soron következő játékost szimbolizáljak",
            "Levelei a győztes állásokat szimbolizálják",
            "Csúcsai a játék állásait szimbolizálják",
            "Ágai a lehetséges játszmákat szimbolizálják"
        ],
        "correct": [
            0,
            2,
            3
        ]
    },
    {
        "id": 80,
        "category": "7. Kétszemélyes játékok",
        "question": "Melyek az alábbiak közül a minimax algoritmusnak a lépései",
        "type": "multi",
        "options": [
            "Megadjuk a legnagyobb értékű levélcsúcshoz vezető ágat",
            "A saját szintjeink csúcsaihoz a gyerekeik értékeinek maximumát írjuk",
            "Kiértékeljük a felépített fa leveleit",
            "felépítjük a játékfát"
        ],
        "correct": [
            1,
            2
        ]
    },
    {
        "id": 81,
        "category": "7. Kétszemélyes játékok",
        "question": "Az alábbi részleges játékfa kiértékelő módszerek közül melyik ad a minimax-szal azonos eredményt",
        "type": "multi",
        "options": [
            "negamax algoritmus",
            "szelektív algoritmus",
            "Alfa-béta algoritmus",
            "(n,m) átlagoló algoritmus"
        ],
        "correct": [
            0,
            2
        ]
    },
    {
        "id": 82,
        "category": "7. Kétszemélyes játékok",
        "question": "Mi a játékfa?",
        "type": "single",
        "options": [
            "Olyan ÉS/VAGY fa, amelyik szintjeiről váltakozva, vagy csak ÉS kapcsolatú élek indulnak ki, vagy csak VAGY kapcsolatú élek",
            "Egy ÉS/VAGY fa",
            "Az összes játszmát irányított útként megjelenítő irányított fa",
            "A kétszemélyes játék modelljének állapotgráfjából kialakított irányított fa"
        ],
        "correct": [
            2,
            3
        ]
    },
    {
        "id": 83,
        "category": "7. Kétszemélyes játékok",
        "question": "Mely fogalmak kapcsolhatók egymáshoz a részleges játékfa-kiértékeléseknél",
        "type": "multi",
        "options": [
            "negamax algoritmus: könnyebb implementáció",
            "(n,m) átlagoló kiértékelés: kiértékelő függvény tévedései",
            "váltakozó mélységű kiértékelés: megbízhatóbb kiértékelés",
            "alfa-béta algoritmus: hatékonyabb módszer"
        ],
        "correct": [
            0,
            1,
            2,
            3
        ]
    },
    {
        "id": 84,
        "category": "8. Evolúciós algoritmusok",
        "question": "Milyen az általános vezérlési stratégiája az evolúciós algoritmusoknak?",
        "type": "single",
        "options": [
            "nem-módosítható",
            "mohó",
            "gráfkereső",
            "visszalépéses"
        ],
        "correct": [
            0
        ]
    },
    {
        "id": 85,
        "category": "8. Evolúciós algoritmusok",
        "question": "Mit tárol az evolúciós algoritmus a globális munkaterületén?",
        "type": "single",
        "options": [
            "A populációt.",
            "A rekombinációra kiválasztott egyedek halmazát.",
            "Az evolúciós operátorokat.",
            "Az egyedek alkotta problémateret."
        ],
        "correct": [
            0
        ]
    },
    {
        "id": 86,
        "category": "8. Evolúciós algoritmusok",
        "question": "Melyik NEM evolúciós operátor az alábbiak közül?",
        "type": "single",
        "options": [
            "Egy egyed kódolása.",
            "Rulett kerék algoritmus.",
            "Véletlen cseréje a kód két elemének.",
            "Kétpontos keresztezés."
        ],
        "correct": [
            0
        ]
    },
    {
        "id": 87,
        "category": "8. Evolúciós algoritmusok",
        "question": "Hogyan szokták az egyedeket kódolni?",
        "type": "multi",
        "options": [
            "Úgy, hogy a dekódolás gyors legyen, mert a fittnesz függvényt az egyedre lehet kiszámolni.",
            "Úgy, hogy a kód darabjai az egyed egy-egy tulajdonságát mutassa.",
            "Úgy, hogy a kódolás és a dekódolás is hatékony legyen.",
            "Úgy, hogy az egyed kódja egy kromoszóma legyen."
        ],
        "correct": [
            1
        ]
    },
    {
        "id": 88,
        "category": "8. Evolúciós algoritmusok",
        "question": "Hol épülhet véletlenített módszer az evolúciós algoritmusba?",
        "type": "single",
        "options": [
            "Csak a kezdeti populáció kialakításában és mind a négy evolúciós operátorban.",
            "Csak a populáció lecserélendő egyedeinek előállításában.",
            "Csak a keresztezési pontok megadásában.",
            "Csak a kiválasztásban, a rekombinációban, és a mutációban."
        ],
        "correct": [
            0
        ]
    },
    {
        "id": 89,
        "category": "8. Evolúciós algoritmusok",
        "question": "Hol van szerepe a kiválasztásnak az evolúciós algoritmusban?",
        "type": "multi",
        "options": [
            "A keresztezési pontok megadásában.",
            "A rekombinációhoz szükséges szülő egyedek előállításában és az új populáció kialakításában.",
            "A populáció lecserélendő egyedeinek előállításában.",
            "Ez az első lépése az evolúciós ciklusnak."
        ],
        "correct": [
            1,
            2,
            3
        ]
    },
    {
        "id": 90,
        "category": "8. Evolúciós algoritmusok",
        "question": "Mi a lényege a jó kiválasztási módszernek az evolúciós algoritmusokban?",
        "type": "single",
        "options": [
            "A rátermett egyedeket nagyobb valószínűséggel választja ki, de ad esélyt a kevésbé rátermettek kiválasztására is.",
            "Figyelembe veszi, hogy a kódban melyek az egyed tulajdonságait jelző szakaszok.",
            "A fittnesz függvény alapján rendezi sorba a populáció egyedeit.",
            "Megkeresi a populáció legjobb egyedét."
        ],
        "correct": [
            0
        ]
    },
    {
        "id": 91,
        "category": "8. Evolúciós algoritmusok",
        "question": "Mi a kapcsolat a keresztezés és a rekombináció között?",
        "type": "single",
        "options": [
            "A keresztezések speciális rekombinációk.",
            "A rekombináció a szülő egyedeken, míg a keresztezés azok kódjával dolgozik.",
            "A keresztezés mindig megelőzi a rekombinációt.",
            "A rekombinációk speciális keresztezések."
        ],
        "correct": [
            0
        ]
    },
    {
        "id": 92,
        "category": "8. Evolúciós algoritmusok",
        "question": "Melyek lehetnek a feltételei az evolúciós algoritmus leállásának?",
        "type": "multi",
        "options": [
            "A populáció összesített fittneszértéke már egy ideje nem változik.",
            "Célegyed megjelenése a populációban.",
            "A populáció minden egyedének fittneszértéke meghalad egy adott korlátot.",
            "Nincsen a populációnak adott korlátnál nagyobb fittneszértékű egyede."
        ],
        "correct": [
            0,
            1
        ]
    },
    {
        "id": 93,
        "category": "8. Evolúciós algoritmusok",
        "question": "Mely keresztezési módszerek őrizik meg permutáció tulajdonságot?",
        "type": "multi",
        "options": [
            "Parciálisan illesztett keresztezés.",
            "Egyenletes keresztezés.",
            "Egypontos keresztezés.",
            "Ciklikus keresztezés."
        ],
        "correct": [
            0,
            3
        ]
    },
    {
        "id": 94,
        "category": "8. Evolúciós algoritmusok",
        "question": "Az alábbiak közül, melyek alkalmas módszerek a permutáció tulajdonságot megőrző mutációra?",
        "type": "multi",
        "options": [
            "Kód egy szakaszának átrendezése.",
            "Kód növekvő sorba rendezése.",
            "Kód két véletlen választott elemének cseréje.",
            "Kód első két elemének cseréje."
        ],
        "correct": [
            0,
            2
        ]
    },
    {
        "id": 95,
        "category": "8. Evolúciós algoritmusok",
        "question": "Mely fogalmak kapcsolhatók egymáshoz az evolúciós algoritmusoknál?",
        "type": "multi",
        "options": [
            "kétpontos keresztezés: parciális illesztett keresztezés",
            "kiválasztás: fittnesz függvény",
            "egyed: kód",
            "stratégiai paraméter: populáció mérete"
        ],
        "correct": [
            0,
            1,
            2,
            3
        ]
    },
    {
        "id": 96,
        "category": "9. Automatikus következtetés",
        "question": "Mi a rezolúciós gráf?",
        "type": "single",
        "options": [
            "Az összes klóz előállítását bemutató gráf",
            "Logikai következtetést szimbolizáló ÉS/VAGY gráf",
            "Az útkeresési feladatot leíró irányított gráf",
            "Az üres klóz előállítását bemutató gráf"
        ],
        "correct": [
            0
        ]
    },
    {
        "id": 97,
        "category": "9. Automatikus következtetés",
        "question": "Melyek a p || q és a !p || !q rezolvensei?",
        "type": "single",
        "options": [
            "p || q || !q és q || p || !q",
            "p ||!q és q || !q",
            "üres klóz",
            "nem rezerválhatóak"
        ],
        "correct": [
            1
        ]
    },
    {
        "id": 98,
        "category": "9. Automatikus következtetés",
        "question": "Mi a globális munkaterülete a rezolúciónak",
        "type": "single",
        "options": [
            "A formalizációban részt vevő predikátumok halmaza",
            "A kiinduló és az eddig előállított klózok halmaza",
            "Az egyedek populációja",
            "Az axiómákból és a célállítás negáltjából kialakított klózok halmaza"
        ],
        "correct": [
            1
        ]
    },
    {
        "id": 99,
        "category": "9. Automatikus következtetés",
        "question": "Mi a keresési szabálya a rezolúciónak?",
        "type": "single",
        "options": [
            "A rezolvens képzés",
            "Az üres klóz előállítása",
            "A Skolemizálás",
            "Az üres klóz levezetése"
        ],
        "correct": [
            0
        ]
    },
    {
        "id": 100,
        "category": "9. Automatikus következtetés",
        "question": "Melyik az alábbiak közül a visszafelé haladó szabályalapú reprezentáció jellemzője",
        "type": "single",
        "options": [
            "A célállítás egy L_{1} ||...|| L_{n} egzisztenciálisan kvantált formula...",
            "A szabályok W->L alakúak, ahol W egy ÉS/VAGY formula, L egy literál és minden változó univerzálisan kvantált ",
            "A tényállás egy univerzálisan kvantált ÉS/VAGY formula",
            "A szabályok L->W alakúak, ahol W egy ÉS/VAGY formula, L egy literál és minden változó univerzálisan kvantált"
        ],
        "correct": [
            1
        ]
    },
    {
        "id": 101,
        "category": "9. Automatikus következtetés",
        "question": "Melyik az alábbiak közül az előrefelé haladó szabályalapú reprezentáció jellemzője",
        "type": "single",
        "options": [
            "A tényállás egy L_{1} ||...|| L_{n} egzisztenciálisan kvantált formula...",
            "A szabályok L->W alakúak, ahol W egy ÉS/VAGY formula, L egy literál és minden változó univerzálisan kvantált",
            "A célállás egy univerzálisan kvantált ÉS/VAGY formula",
            "A szabályok L->W alakúak, ahol W egy ÉS/VAGY formula, L egy literál, és minden változó univerzálisan kvantált"
        ],
        "correct": [
            1
        ]
    },
    {
        "id": 102,
        "category": "9. Automatikus következtetés",
        "question": "Hogyan kell a rezolúciót válaszadásra felhasználni",
        "type": "multi",
        "options": [
            "A rezolúció csak igen/nem jellegű választ képes adni",
            "A kérdésre adható választ egy külön predikátummal jelenítjük meg a célállításban",
            "Az A_{1},...,A_{n} => C kérdés helyett az A_{1} && ... && A_{n} && !C kielégíthetetlenségét vizsgáljuk",
            "A választ egy egzisztenciálisan kvantált változóval kell megjeleníteni a célállításban"
        ],
        "correct": [
            3
        ]
    },
    {
        "id": 103,
        "category": "9. Automatikus következtetés",
        "question": "Mi következik abból, hogy a rezolúció módszere helyes",
        "type": "single",
        "options": [
            "Ha elakad (nem tud újabb klózt előállítani), akkor a kiinduló klózhalmaz kielégíthető",
            "Ha üres klózzal terminál, akkor a kiinduló klózhalmaz kielégíthetetlen",
            "Kicsit a futási ideje",
            "Mindig elő tudja állítani az üres klózt"
        ],
        "correct": [
            0,
            1
        ]
    },
    {
        "id": 104,
        "category": "9. Automatikus következtetés",
        "question": "Mi következik abból, hogy a rezolúció módszere teljes",
        "type": "multi",
        "options": [
            "Ha a kiinduló klózhalmaz kielégíthetetlen, akkor véges lépésen belül terminál",
            "Ha a kiinduló klózhalmaz kielégíthetetlen, akkor levezethető az üres klóz",
            "Ha a kiinduló klózhalmaz kielégíthető, akkor nem állítja elő az üres klózt",
            "Minden A_{1}, ... ,A_{n} => C alakú tétel bizonyítására vagy cáfolására alkalmas"
        ],
        "correct": [
            1,
            2
        ]
    },
    {
        "id": 105,
        "category": "9. Automatikus következtetés",
        "question": "Melyek az alábbiak közül a rezolúció reprezentációs gráfjának különös tulajdonságai",
        "type": "multi",
        "options": [
            "Ha a startcsúcsból vezet út a célcsúcsba, akkor mindegyik startcsúcsból elérhető a csúcsból is vezet célcsúcsba út",
            "Nincs benne kör",
            "Nincs benne zsákutca",
            "Bármelyik csúcsból bármelyik csúcsba el lehet jutni"
        ],
        "correct": [
            0,
            1
        ]
    },
    {
        "id": 106,
        "category": "9. Automatikus következtetés",
        "question": "Melyek lehetnek az alábbiak közül a rezolúció modellfüggő vágó stratégiái",
        "type": "multi",
        "options": [
            "Mindig azt a klózpárt rezolváljuk előbb...",
            "Minden rezolúciós lépésben az egyik szülőklóz egyetlen literálból jön létre",
            "Minden rezolúciós lépésben az egyik szülőklóz azt utoljára előállított klóz legyen",
            "Soroljuk be szintekre a rezolúciós gráf klózait..."
        ],
        "correct": [
            1,
            2
        ]
    },
    {
        "id": 107,
        "category": "9. Automatikus következtetés",
        "question": "Melyik az alábbiak közül a rezolúció modellfüggő sorrendi stratégiái?",
        "type": "single",
        "options": [
            "Minden rezolúciós lépésben az egyik szülőklóz az utoljára előállított klóz legyen",
            "Soroljuk be szintekre...",
            "Mindig azt a klózpárt rezolváljuk előbb...",
            "Minden rezolúciós lépésben az egyik szülőklóz egyetlen literálból jön létre"
        ],
        "correct": [
            1,
            2
        ]
    },
    {
        "id": 108,
        "category": "10. Bizonytalanság kezelése",
        "question": "Hogyan szimuláljuk az A esemény valószínűségét feltéve, hogy B esemény – amely valószínűsége nagyobb, mint nulla – bekövetkezik?",
        "type": "single",
        "options": [
            "P(A|B) = P(A, B) / P(A)",
            "P(A|B) = P(A, B) / P(B)",
            "P(A|B) = P(A)P(B) / P(B)",
            "P(A|B) = P(B|A)P(B) / P(A)"
        ],
        "correct": [
            1
        ]
    },
    {
        "id": 109,
        "category": "10. Bizonytalanság kezelése",
        "question": "Mikor mondjuk, hogy A és B események feltételesen függetlenek E eseményre nézve?",
        "type": "single",
        "options": [
            "P(AB|E) = P(A|E)P(B|E)",
            "P(AB|E) = P(A|E)P(B|E) / P(E)",
            "P(AB|E) = P(A|E)",
            "P(AB|E) = P(B|E)"
        ],
        "correct": [
            0
        ]
    },
    {
        "id": 110,
        "category": "10. Bizonytalanság kezelése",
        "question": "Az alábbiak közül melyik a Bayes tétel?",
        "type": "single",
        "options": [
            "P(A|B) = P(B|A)P(B) / P(A)",
            "P(A|B) = P(B|A)P(A) / P(B)",
            "P(B|A,E) = P(A,B|E)P(A|E) / P(B|E)",
            "P(B|A,E) = P(A|B,E)P(A|E) / P(B|E)"
        ],
        "correct": [
            1
        ]
    },
    {
        "id": 111,
        "category": "10. Bizonytalanság kezelése",
        "question": "Az alábbiak közül melyik NEM igényel bizonytalanság kezelést?",
        "type": "single",
        "options": [
            "Hiányzó adatok alapján történő következtetés",
            "Ellentmondó adatokra épülő következtetés",
            "Elmosódott jelentésű állítások alapján...",
            "Axiómákból kiinduló logikai következtetés"
        ],
        "correct": [
            3
        ]
    },
    {
        "id": 112,
        "category": "10. Bizonytalanság kezelése",
        "question": "Milyen gráf a valószínűségi háló",
        "type": "single",
        "options": [
            "g-gráf",
            "Véges körmentes irányított gráf",
            "Véges fa-gráf",
            "Véges fa"
        ],
        "correct": [
            1
        ]
    },
    {
        "id": 113,
        "category": "10. Bizonytalanság kezelése",
        "question": "Mit mutat meg a valószínűségi háló feltételes valószínűségi táblája",
        "type": "single",
        "options": [
            "Azt, hogy egy csúcs valószínűségi változója milyen valószínűséggel vesz fel egy adott értéket feltéve, hogy a gyerek csúcsok...",
            "Azt, hogy egy él valószínűségi változója...",
            "Azt, hogy egy él valószínűségi változója...",
            "Azt, hogy egy csúcs valószínűségi változója milyen valószínűséggel vesz fel egy adott értéket feltéve, hogy a szülő csúcsok valószínűségi változói adott értékűek"
        ],
        "correct": [
            3
        ]
    },
    {
        "id": 114,
        "category": "10. Bizonytalanság kezelése",
        "question": "Mit jelent a normalizálás technikája?",
        "type": "single",
        "options": [
            "Adott összegű kifejezések közös együthatójának kiszámolását",
            "A kettes norma alkalmazását",
            "Adott kifejezések olyan együthatóval történő szorzását, hogy ezáltal az összegük 1 legyen",
            "Bayes hálók fa-gráfokká történő átalakítását"
        ],
        "correct": [
            0,
            2
        ]
    },
    {
        "id": 115,
        "category": "10. Bizonytalanság kezelése",
        "question": "Mit jelent az, hogy egy valószínűségi háló egyszeresen kötött?",
        "type": "single",
        "options": [
            "Azt, hogy a háló körmentes",
            "Azt, hogy a háló egy irányított fa",
            "Azt, hogy a háló egy fa-gráf",
            "Azt, hogy a háló éleinek irányítását megfordítva irányított fát kapunk"
        ],
        "correct": [
            2
        ]
    },
    {
        "id": 116,
        "category": "10. Bizonytalanság kezelése",
        "question": "Az alábbiak közül melyek igazak a valószínűségi hálókra",
        "type": "multi",
        "options": [
            "Egyetlen célcsúcsa van",
            "Irányított élei a valószínűségi változók közötti közvetlen ok-okozati összefüggések mutatják",
            "Az éleiről elhagyva az irányítást a hálóból egy irányítatlan fát kapunk",
            "Csúcsai egy adott tárgykör valószínűségét változóit reprezentálják"
        ],
        "correct": [
            1,
            3
        ]
    },
    {
        "id": 117,
        "category": "10. Bizonytalanság kezelése",
        "question": "Hogyan javítható a valószínűségi hálóban való számítás hatékonysága, ha a háló nem fa-gráf?",
        "type": "single",
        "options": [
            "Nem javítható",
            "A valószínűségi hálót példát generálására használjuk...",
            "Csúcsok elhagyásával több fa-gráfokra bontjuk...",
            "Csúcsok összevonásával fa-gráffá alakítjuk a valószínűségi hálót"
        ],
        "correct": [
            1,
            2,
            3
        ]
    },
    {
        "id": 118,
        "category": "10. Bizonytalanság kezelése",
        "question": "Milyen heurisztikus bizonytalanságkezelő technikákról hallott?",
        "type": "multi",
        "options": [
            "MYCIN szakértő rendszer következtetése",
            "Fuzzy következtetés",
            "Bayes-i frissítés módszere",
            "Zárt világ feltételezés"
        ],
        "correct": [
            0,
            1
        ]
    },
    {
        "id": 119,
        "category": "10. Bizonytalanság kezelése",
        "question": "Mely fogalmak kapcsolhatók egymáshoz a bizonytalanság kezelésénél",
        "type": "multi",
        "options": [
            "fa-gráf: csúcsok összevonása",
            "heurisztikus módszer: MYCIN",
            "bizonytalanság következmény: feltételes valószínűség",
            "valószínűségi háló: véges körmentes gráf"
        ],
        "correct": [
            0,
            1,
            2,
            3
        ]
    },
    {
        "id": 120,
        "category": "11. Gépi tanulás",
        "question": "Mit jelent az, hogy egy tanulás felügyelt?",
        "type": "single",
        "options": [
            "A tanulási folyamatnak ki kell számolni a tanító minták elvárt kimenetét is.",
            "A tanulás folyamata nem teljesen automatikus.",
            "A tanító minták elvárt kimenetét is felhasználja a tanulási folyamat.",
            "A tanulás folyamatát módosítani kell, ha az elvárt kimenet eltér a számítottól."
        ],
        "correct": [
            2
        ]
    },
    {
        "id": 121,
        "category": "11. Gépi tanulás",
        "question": "Mit jelent az, hogy egy tanulás felügyelet nélküli?",
        "type": "single",
        "options": [
            "A tanító minták elvárt kimenetét automatikusan számolja a tanulás módszere.",
            "A tanító mintákra kiszámolt kimenet eltérhet az elvárt kimenettől.",
            "A tanulás folyamata teljesen automatikus.",
            "A tanulásnak nincs szüksége a tanító minták elvárt kimenetére."
        ],
        "correct": [
            3
        ]
    },
    {
        "id": 122,
        "category": "11. Gépi tanulás",
        "question": "Mit jelent a zaj a tanító minták esetén?",
        "type": "single",
        "options": [
            "Amikor a tanítóminták elvárt kimenete hasonló.",
            "Amikor azonos attribútumokkal rendelkező minták eltérő elvárt kimenetekkel rendelkeznek.",
            "Amikor két vagy több eltérő attribútumokkal rendelkező minta elvárt kimenetei megegyeznek.",
            "Amikor a tanítóminták elvárt kimenetének jelentése elmosódott."
        ],
        "correct": [
            1
        ]
    },
    {
        "id": 123,
        "category": "11. Gépi tanulás",
        "question": "Különböző tanító minták halmazának mikor a legkisebb az információ (entrópia) tartalma a döntési fáknál?",
        "type": "single",
        "options": [
            "Ha a minták inputjai közötti legnagyobb távolság... kisebb...",
            "Ha mind azonos kimeneti értékkel rendelkezik.",
            "Ha a kimeneteik értékei mind különböznek.",
            "Ha a minták kimeneti értékei közötti legnagyobb távolság... kisebb..."
        ],
        "correct": [
            1
        ]
    },
    {
        "id": 124,
        "category": "11. Gépi tanulás",
        "question": "Hogyan értékelünk ki a döntési fa építése során egy levélcsúcsot akkor, ha nem tartoznak hozzá tanító minták?",
        "type": "single",
        "options": [
            "Iyen eset nem fordulhat elő.",
            "A szülőcsúcsához tartozó attribútumok alapján.",
            "A szülőcsúcsához tartozó tanítóminták alapján.",
            "A csúcshoz tartozó attribútumok alapján, ha vannak ilyenek..."
        ],
        "correct": [
            2
        ]
    },
    {
        "id": 125,
        "category": "11. Gépi tanulás",
        "question": "A döntési fa építése során az alábbiak közül milyen csúcsok fordulhatnak elő a fában?",
        "type": "multi",
        "options": [
            "Kiértékelt levélcsúcsok.",
            "Attribútummal címkézett levél csúcsok.",
            "Kiértékeletlen levélcsúcsok.",
            "Attribútummal címkézett belső csúcsok."
        ],
        "correct": [
            0,
            1,
            2
        ]
    },
    {
        "id": 126,
        "category": "11. Gépi tanulás",
        "question": "Mely állítások igazak a döntési fára?",
        "type": "multi",
        "options": [
            "Belső csúcsai egy-egy attribútumot reprezentálnak.",
            "Gyökércsúcsa a kiinduló problémát reprezentálja.",
            "Ágai egy probléma lehetséges megoldását adják.",
            "Egy csúcsból kivezető élei a csúcs attribútumának lehetséges értékeit szimbolizálják."
        ],
        "correct": [
            0,
            3
        ]
    },
    {
        "id": 127,
        "category": "11. Gépi tanulás",
        "question": "Mely állítások igazak a döntési fa módszerére?",
        "type": "single",
        "options": [
            "A mintákat a válaszadásnál is ismerni kell.",
            "Optimális megoldást ad.",
            "A tanulási idő hosszú.",
            "A válaszadási idő rövid."
        ],
        "correct": [
            2,
            3
        ]
    },
    {
        "id": 128,
        "category": "11. Gépi tanulás",
        "question": "Mely állítások igazak k-legközelebbi szomszéd módszerére?",
        "type": "multi",
        "options": [
            "A megtanult paraméter a minták összessége",
            "Egyszerű implementálni",
            "A tanulási idő hosszú",
            "A válaszadási idő rövid"
        ],
        "correct": [
            0,
            1
        ]
    },
    {
        "id": 129,
        "category": "11. Gépi tanulás",
        "question": "Milyen felügyelt tanulási módszereket ismert meg a kurzuson?",
        "type": "multi",
        "options": [
            "Véletlen erdő módszere.",
            "k-legközelebbi szomszéd módszere.",
            "k-közép módszer.",
            "Error backpropagation algoritmus."
        ],
        "correct": [
            0,
            1,
            3
        ]
    },
    {
        "id": 130,
        "category": "11. Gépi tanulás",
        "question": "Hol jutott szerepe a véletlennek a véletlen erdő módszerében?",
        "type": "multi",
        "options": [
            "Az erdő egy fájának felépítéséhez a minták attribútumai közül véletlen választott attribútumokat használ.",
            "Az erdő fáinak számát véletlen módon határozzák meg.",
            "A fa egy csúcsához rendelt attribútumot véletlen módon választja ki.",
            "Az erdő egy fájának felépítéséhez a minták véletlen választott részhalmazát használja."
        ],
        "correct": [
            0,
            3
        ]
    },
    {
        "id": 131,
        "category": "11. Gépi tanulás",
        "question": "Mely fogalmak kapcsolhatók össze az alábbiak közül a gépi tanulás témakörében?",
        "type": "multi",
        "options": [
            "Felügyelt tanulás: tanító minták elvárt kimenete",
            "kereszt entrópia: 2-es norma",
            "döntési fa: véletlen erdő",
            "k-közép módszer: osztályozási feladat"
        ],
        "correct": [
            0,
            1,
            2,
            3
        ]
    },
    {
        "id": 132,
        "category": "12. Neurális hálók",
        "question": "Az alábbiak közül melyik jellemzik a homogén többrétegű előrecsatolt hálózatot?",
        "type": "multi",
        "options": [
            "Az i-edik réteg egy neuronjának kimenete csak az i-1-dik réteg neuronjának lehet bemeneti értéke.",
            "Az azonos réteghez tartozó neuronok között nincs közvetlen kapcsolat.",
            "A különböző rétegek neuronjainak aktivációs (kimeneti) függvénye eltérhet, de egy réteghez tartozó neuronok esetében nem.",
            "Az i-dik réteg neuronjának kimenete csak az i+1-dik réteg neuronjának lehet bemeneti értéke."
        ],
        "correct": [
            1,
            3
        ]
    },
    {
        "id": 133,
        "category": "12. Neurális hálók",
        "question": "Mit jelent az input vektorizálása?",
        "type": "single",
        "options": [
            "A megoldandó probléma lineárisan szeparálható feladattá konvertálását.",
            "Az inputot egy síkvektorként fogjuk fel, amelynek kiinduló pontja az origó.",
            "Egy inputot a jellemzői (attribútumai) segítségével egy számsorozattal ábrázolunk.",
            "Az inputok azonos hosszúságú számsorozatok."
        ],
        "correct": [
            2
        ]
    },
    {
        "id": 134,
        "category": "12. Neurális hálók",
        "question": "Jellemezze a szigmoid kimeneti függvényt!",
        "type": "single",
        "options": [
            "Folytonos, majdnem mindenhol deriválható, monoton növekedő, ]0,1[ intervallumba képző függvény.",
            "Folytonos, mindenhol deriválható, monoton növekedő, [0,1] intervallumba képző függvény.",
            "Egyetlen szakadási ponttal rendelkező, máshol deriválható, monoton növekedő, [0,1] intervallumba képző függvény.",
            "Folytonos, mindenhol deriválható, szigorúan monoton növekedő, ]0,1[ intervallumba képző függvény."
        ],
        "correct": [
            3
        ]
    },
    {
        "id": 135,
        "category": "12. Neurális hálók",
        "question": "Az alábbiak közül melyik hálózatnak NEM lehet több rétegű topológiája?",
        "type": "single",
        "options": [
            "Rekurrens neurális hálózat.",
            "Konvolúciós neurális hálózat.",
            "Backpropagation modell hálózata.",
            "Hopfield neurális hálózat."
        ],
        "correct": [
            3
        ]
    },
    {
        "id": 136,
        "category": "12. Neurális hálók",
        "question": "Mi a delta tanulási szabály?",
        "type": "single",
        "options": [
            "Egy súly megváltoztatása a súlyhoz tartozó bemeneti értéknek és a súlynak szorzatától függ.",
            "Egy súly megváltoztatása a súlyhoz tartozó bemeneti értéknek és a súlyt tartalmazó neuron várt kimeneti értékének szorzatától függ.",
            "Egy súly megváltoztatása a súlyhoz tartozó bemeneti értéknek, és a súlyt tartalmazó neuron számított kimeneti értékének szorzatától függ.",
            "Egy súly megváltoztatása a súlyhoz tartozó bemeneti értéknek, és a súlyt tartalmazó neuron számított és várt kimeneti értékei különbségének szorzatától függ."
        ],
        "correct": [
            3
        ]
    },
    {
        "id": 137,
        "category": "12. Neurális hálók",
        "question": "Mire alkalmazzák a lineárisan szeparálható kifejezést?",
        "type": "single",
        "options": [
            "Arra, hogy a mintapontokhoz a legkisebb négyzetek módszerével meghatározott egyenes elválasztja egymástól a mintapontokat.",
            "A Rosenblatt-féle perceptronokból épített neurális hálózatokra.",
            "Arra, hogy a perceptronnal megoldható problémák két osztályba sorolhatóak be.",
            "Azokra a feladatokra, amelyek lehetséges bemeneti érték n-esei egy hipersíkkal elválaszthatók aszerint, hogy az ezekre elvárt válasz A vagy B."
        ],
        "correct": [
            3
        ]
    },
    {
        "id": 138,
        "category": "12. Neurális hálók",
        "question": "A mesterséges neuron hálózatokra felügyelt vagy felügyelet nélküli tanulási módszer alkalmazható?",
        "type": "single",
        "options": [
            "Csak felügyelt.",
            "Egyik sem.",
            "Mindkettő.",
            "Csak felügyelet nélkül."
        ],
        "correct": [
            2
        ]
    },
    {
        "id": 139,
        "category": "12. Neurális hálók",
        "question": "Hogyan lehet Rosenblatt-féle perceptronok felhasználásával... úgy osztályozni, hogy megmondjuk melyek esnek bele egy megadott háromszögbe...?",
        "type": "single",
        "options": [
            "Egy rétegű három neuront tartalmazó hálózattal.",
            "Olyan kétrétegű előrecsatolt hálózattal, ahol az első rétegben három, a második rétegben egy neuron van.",
            "Nem lehet, mert többrétegű Rosenblatt-féle perceptronokból álló hálózathoz nem ismerünk tanuló algoritmust.",
            "Nem lehet, mert a Rosenblatt-féle neuronokkal csak lineárisan szeparálható problémákat lehet megoldani."
        ],
        "correct": [
            1
        ]
    },
    {
        "id": 140,
        "category": "12. Neurális hálók",
        "question": "A mesterséges neuronhálózatot egy olyan paraméteres függvénynek tekinthetjük... Melyek ebben a paraméterek?",
        "type": "single",
        "options": [
            "A neuronok „bias” bemenete.",
            "A tanító minták száma és a tanulási együttható.",
            "A neuronokban használt kimeneti függvények.",
            "A neuronok súlytényzői."
        ],
        "correct": [
            3
        ]
    },
    {
        "id": 141,
        "category": "12. Neurális hálók",
        "question": "Mit értünk a hiba-visszaterjesztés (error-backpropagation) módszere alatt?",
        "type": "single",
        "options": [
            "Azt a folyamatot, amellyel a Hopfield modell stabil konfigurációba jut.",
            "Azt, amikor egy többrétegű előre csatolt hálózat kimeneti rétegének elvárt kimenetei alapján határozzuk meg, hogy a hálóbeli neuronoknak milyen elvárt kimenete van.",
            "Azt, amikor egy többrétegű előre csatolt hálózat kimeneti rétegének számított és várt outputjai alapján határozzuk meg, hogy hogyan kell a hálóbeli neuronok súlyait változtatni.",
            "Olyan többrétegű hálózat építését, amelyben megengedjük a visszacsatolást a szomszédos rétegek között."
        ],
        "correct": [
            2
        ]
    },
    {
        "id": 142,
        "category": "12. Neurális hálók",
        "question": "Mit értünk a Hopfield modell konfigurációs terén?",
        "type": "single",
        "options": [
            "A neuronok kimeneteinek összességét.",
            "A neuronok által felvett állapotok összességét.",
            "A neuronok bemeneteinek összességét.",
            "A neuronok súlyainak összességét."
        ],
        "correct": [
            0,
            1
        ]
    },
    {
        "id": 143,
        "category": "12. Neurális hálók",
        "question": "Az alábbiak közül mely állítások igazak a mesterséges neuronhálózatokra?",
        "type": "multi",
        "options": [
            "A válaszadási idő rövid.",
            "A tanulási idő hosszú.",
            "A mintákat egyesével el kell tárolni.",
            "Optimális megoldást ad."
        ],
        "correct": [
            0,
            1
        ]
    },
    {
        "id": 144,
        "category": "13. Egyéb talált kérdések",
        "question": "Mit nevezünk egy kereső rendszer globális munkaterületének?",
        "type": "multi",
        "options": [
            "A kereső rendszer által használt memóriaterületet.",
            "Azt a memóriaterületet, amelyen a keresés eltárolja a megszerzett, és megőrzésre hasznosnak ítélt ismereteket.",
            "A kereső rendszer algoritmusának globális változóit.",
            "A soron következő lépés kiválasztásánál használt memória területet."
        ],
        "correct": [
            1
        ]
    },
    {
        "id": 145,
        "category": "13. Egyéb talált kérdések",
        "question": "Melyek a hiperút tulajdonságai?",
        "type": "multi",
        "options": [
            "Egyetlen végcsúcsa van",
            "Csúcsaiból legfeljebb egyetlen hiperél indul",
            "Nem tartalmazhat irányított kört.",
            "Kezdőcsúcsából bármelyik csúcsába vezet hiperútbeli irányított út."
        ],
        "correct": [
            1,
            3
        ]
    },
    {
        "id": 146,
        "category": "13. Egyéb talált kérdések",
        "question": "Az alábbi algoritmusok közül melyek használnak módosítható stratégiát?",
        "type": "multi",
        "options": [
            "szélességi gráfkeresés",
            "tabu keresés",
            "evolúciós algoritmus",
            "rezolúció"
        ],
        "correct": [
            0
        ]
    },
    {
        "id": 147,
        "category": "13. Egyéb talált kérdések",
        "question": "Az alábbi módszerek közül melyekbe épült be visszalépéses keresés?",
        "type": "multi",
        "options": [
            "Mélységi gráfkeresésben.",
            "Alfa-béta kiértékelő algoritmusban a kétszemélyes játékoknál.",
            "A tabu keresésnél.",
            "Szabályalapú következtetésnél."
        ],
        "correct": [
            0,
            1
        ]
    },
    {
        "id": 148,
        "category": "13. Egyéb talált kérdések",
        "question": "Mit reprezentál egy kétszemélyes játéknak egy állapota?",
        "type": "single",
        "options": [
            "Egy állást és a soron következő játékost.",
            "Az aktuális állást az oda vezető lépésekkel együtt.",
            "Az aktuális állást az arra alkalmazható lépésekkel együtt.",
            "Az aktuális állást."
        ],
        "correct": [
            0
        ]
    },
    {
        "id": 149,
        "category": "13. Egyéb talált kérdések",
        "question": "Hogyan szokták az egyeneseket kódolni?",
        "type": "single",
        "options": [
            "Úgy, hogy a kód darabjai az egyed egy-egy tulajdonságát mutassa.",
            "Úgy, hogy az egyed kódja egy kromoszóma legyen.",
            "Úgy, hogy a kódolás és a dekódolás is hatékony legyen.",
            "Úgy, hogy az egyed kódja egy kromoszóma legyen."
        ],
        "correct": [
            0
        ]
    },
    {
        "id": 150,
        "category": "13. Egyéb talált kérdések",
        "question": "Hogyan nevezzük a gráfkeresések globális munkaterületén tárolt gráfot?",
        "type": "single",
        "options": [
            "keresőgráf",
            "cáfolati gráf",
            "reprezentációs gráf",
            "játékgráf"
        ],
        "correct": [
            0
        ]
    },
    {
        "id": 151,
        "category": "13. Egyéb talált kérdések",
        "question": "Mit nevezünk egy hiperút bejárásának?",
        "type": "single",
        "options": [
            "Olyan sorozatot, amelynek elemei a hiperút csúcsaiból álló sorozatok.",
            "A hiperút összes csúcsát egyszer tartalmazó meghatározott sorrendű sorozat.",
            "A hiperút összes hiperélét egyszer tartalmazó eghatározás.",
            "A hiperút összes csúcsából összeállított meghatározott sorrendű sorozatot."
        ],
        "correct": [
            0
        ]
    },
    {
        "id": 152,
        "category": "13. Egyéb talált kérdések",
        "question": "Az alábbiak közül melyik NEM modellfüggő vezérlési stratégia?",
        "type": "multi",
        "options": [
            "A legjobb csúcsot válasszuk a szomszédos csúcsok közül.",
            "A visszalépéses keresés részlegesen előre vizsgáló (FC) módszere.",
            "A szabályalapú következtetéseknél a tényliterál illesztése előzze meg a szabályillesztést.",
            "A rezolúciós lépés egyik klóza legyen mindig (egy literálból álló) egységklóz."
        ],
        "correct": [
            0
        ]
    },
    {
        "id": 153,
        "category": "13. Egyéb talált kérdések",
        "question": "Mit nem kell eltárolni egy döntési fa építése során egy levélcsúcsban?",
        "type": "single",
        "options": [
            "A csúcsra leképezhető tanító minták halmazát",
            "A csúcs gyökércsúcstól vett távolságát",
            "A csúcshoz vezető úton már felhasznált attribútumok kivételével az összes attribútumot",
            "A csúcshoz rendelt tanító minták információs tartalmát"
        ],
        "correct": [
            1
        ]
    },
    {
        "id": 154,
        "category": "13. Egyéb talált kérdések",
        "question": "Hány lépésből áll az evolúciós ciklus?",
        "type": "single",
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "correct": [
            3
        ]
    },
    {
        "id": 155,
        "category": "13. Egyéb talált kérdések",
        "question": "Melyik állítás igaz a mélységi gráfkeresésre?",
        "type": "single",
        "options": [
            "A csúcsokat a mélységi stratégia sorrendje alapján terjeszti ki",
            "A csúcsokat a mélységi bejárásnak megfelelő sorrendben terjeszti ki.",
            "Végtelen gráfokban is terminál.",
            "A csúcsokat a visszalépéses kereséssel történő bejárásnak megfelelő sorrendben terjeszti ki"
        ],
        "correct": [
            3
        ]
    },
    {
        "id": 156,
        "category": "13. Egyéb talált kérdések",
        "question": "Mit tartalmaz a visszalépéses keresések globális munkaterülete?",
        "type": "single",
        "options": [
            "A reprezentációs gráfot és külön annak a startcsúcsból kiinduló egyik útját.",
            "Az eddig bejárt részgráfot és külön annak a startcsúcsból kiinduló egyik útját annak csúcsaiból kivezető még nem vizsgált élekkel együtt.",
            "Az eddig bejárt startcsúcsból kiinduló utakat azok csúcsaiból kivezető még nem vizsgált élekkel együtt",
            "A startcsúcsból kiinduló egyik utat és annak csúcsaiból kivezető még nem vizsgált éleket"
        ],
        "correct": [
            3
        ]
    },
    {
        "id": 157,
        "category": "13. Egyéb talált kérdések",
        "question": "A korlátkielégítési modellhez az alábbiak közül melyik reprezentációs gráfot érdemes elkészíteni?",
        "type": "single",
        "options": [
            "Olyan egy mélységű ÉS/VAGY fát, amelyben a gyökérből egy-egy hiperél vezet a modell érték n-eseihez.",
            "Olyan irányított gráfot, amelyben a modell érték n-eseit irányított körök szimbolizálják.",
            "Egy n mélységű irányított fát, amely k-adik szintjének csúcsai a modell összes olyan érték n-esét szimbolizálja, amelyek első k eleme azonos.",
            "Olyan irányított gráfot, amelynek csúcsai a modellbeli érték n-esek, élei pedig az érték n-esek egy komponensének változását szimbolizálják."
        ],
        "correct": [
            2
        ]
    },
    {
        "id": 158,
        "category": "13. Egyéb talált kérdések",
        "question": "Hogyan lehet megtudni, hogy kinek van nem-vesztő stratégiája egy három esélyes (győzelem, vereség, döntetlen) kimenetelű kétszemélyes játékban?",
        "type": "multi",
        "options": [
            "Nem lehet véges lépésben megválaszolni ezt a kérdést.",
            "A játékfa leveleit megcímkézzük annak a játékosnak a nevével (A vagy B), aki a levél csúccsal jelzett állásban nyerni fog... A gyökér címkéje adja meg a választ.",
            "Átalakítjuk a játékfát és/vagy fává és ebben keresünk olyan gyökérből induló hiperutat...",
            "A minimax algoritmussal ha a teljes játékfára alkalmazzuk úgy, hogy az első játékos győztes állásaihoz +1-et, a vesztes állásaihoz -1-et rendelünk a döntetlen állásokhoz 0-t..."
        ],
        "correct": [
            1,
            3
        ]
    },
    {
        "id": 159,
        "category": "13. Egyéb talált kérdések",
        "question": "A félév során tanult módszerek közül melyik NEM tekinthető útkereső algoritmusnak?",
        "type": "single",
        "options": [
            "rezolúció",
            "szimultált hűtés",
            "B algoritmus",
            "k-legközelebbi szomszéd módszere"
        ],
        "correct": [
            3
        ]
    }
];