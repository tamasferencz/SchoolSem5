const questions = [
    // --- 1. OLDAL ---
    {
        category: "C# Alapok",
        type: "single",
        question: "Melyik láthatóság szint nem létezik C#-ban?",
        options: ["internal", "package", "public", "private"],
        correct: [1]
    },
    {
        category: "Kivételkezelés",
        type: "single",
        question: "Mely esetben hajtódik végre a kivételkezelő finally ága?",
        options: [
            "A finally ág minden esetben lefut.",
            "Csak abban az esetben, ha a try ágban kivétel váltódik ki.",
            "Csak abban az esetben, ha a try ágban nem váltódik ki kivétel.",
            "Csak abban az esetben, ha a catch végrehajtása során újabb kivétel váltódik ki."
        ],
        correct: [0]
    },
    {
        category: "Interfészek",
        type: "single",
        question: "Melyik állítás igaz az alábbiak közül az interfészekre?",
        options: [
            "Egy osztály legfeljebb egy másik osztályból és egy interfészből származhat le.",
            "Az interfészek minden tartalmazott eleme publikus vagy internal láthatóságú.",
            "Az interfészek nem tartalmazhatnak adattagokat.",
            "Az interfészek neve kötelezően I (nagy i) prefixszel kezdődik"
        ],
        correct: [2]
    },
    {
        category: "Típusok",
        type: "single",
        question: "Melyik típusnak felel meg C#-ban az int kulcsszóval rövidített típus?",
        options: ["Implementáció (fordító) függő.", "System.Int64", "System.UInt32", "System.Int32"],
        correct: [3]
    },
    {
        category: "C# Nyelv",
        type: "single",
        question: "Az alábbiak közül melyik állítás helyes a C# nyelvre?",
        options: [
            "A C# nyelvben egy osztály implementálhat több interfészt.",
            "Az osztály alapértelmezett láthatósága public.",
            "A C# nyelv támogatja a többszörös öröklődést.",
            "A struktúra referencia szerint kezelt."
        ],
        correct: [0]
    },
    {
        category: "Lambda",
        type: "single",
        question: "Melyik típus lehet helyes a lambda változóra? var lambda = x => {x=x*x; return x % 2==0; };",
        options: ["Func<double, bool>", "Func<bool, double>", "Func<double>", "Func<bool>"],
        correct: [0]
    },
    {
        category: "C# Nyelv",
        type: "single",
        question: "Melyik állítás igaz a C# nyelvre az alábbiak közül?",
        options: [
            "AC# nyelv és a .NET keretrendszer kezdetben elsődlegesen a C/C++ nyelvekből nyert inspirációt.",
            "A C# megvalósítja a többszörös öröklődést.",
            "A C# nyelv gyengén típusos.",
            "A C# szemétgyűjtéssel (garbage collection) valósítja meg a biztonságos memóriakezelést."
        ],
        correct: [3]
    },
    {
        category: "Tulajdonságok",
        type: "single",
        question: "Mit nevezünk tulajdonságoknak (property) C#-ban?",
        options: [
            "Az objektumok osztály szintű adattagjait.",
            "Olyan objektumokat, amelyekkel entitásokat jelölhetünk meg.",
            "Az osztályok statikus adattagjait.",
            "A lekérdező és beállító műveletek (getter / setter) speciális nyelvi absztrakcióját."
        ],
        correct: [3]
    },
    {
        category: "Típusok",
        type: "single",
        question: "Melyik nem beépített (bulit-in) típus C#-ban?",
        options: ["System.Single", "string", "short", "System.Numerics.BigInteger"],
        correct: [3]
    },
    // --- 2. OLDAL ---
    {
        category: "Algoritmusok",
        type: "single",
        question: "Az alábbi kódrészletek közül melyik alkalmas 2 egész szám felcserélésére?",
        options: [
            "void swap(ref int a, ref int b) { int tmp = a; a = b; b = tmp; }",
            "void swap(in int a, in int b) { int tmp = a; a = b; b = tmp; }",
            "void swap(int a, int b) { int tmp = a; a = b; b = tmp; }",
            "void swap(out int a, out int b) { int tmp = a; a = b; b = tmp; }"
        ],
        correct: [0]
    },
    {
        category: "Események",
        type: "single",
        question: "Melyik állítás hamis az alábbiak közül az eseményekre C#-ban?",
        options: [
            "Egy eseménykezelő több eseményre is feliratkoztatható.",
            "Egy eseményre több eseménykezelő is feliratkozhat",
            "Az eseményeket nyelvi szinten valósítja meg a C# nyelv.",
            "Az eseményekre különböző szignatúrájú eseménykezelők is feliratkoztathatóak."
        ],
        correct: [3]
    },
    {
        category: "Delegáltak",
        type: "single",
        question: "Mi az a delegált (delegate)?",
        options: [
            "Metódus szignatúra definíció, amellyel az esményekre feliratkoztatható eljárások is definiálhatóak.",
            "Az eseménykezelők.",
            "Egy primitív típus."
        ],
        correct: [0]
    },
    {
        category: "WinForms",
        type: "single",
        question: "Mi az a modális dialógusablak Windows Formsban?",
        options: [
            "Olyan alkalmazás ablak, amely leválasztott modell réteggel rendelkezik.",
            "Az alkalmazás összeomlása esetén megjelenő hibaüzenet ablak.",
            "A MessageBox osztállyal létrehozott felugró ablak",
            "Olyan alkalmazás ablak, amelynek bezárásig az őt megnyitó eljárás nem folytatódhat."
        ],
        correct: [3]
    },
    // --- 3. OLDAL ---
    {
        category: "WinForms",
        type: "single",
        question: "Mi a feladata a Windows Forms Designer használatával létrejövő InitializeComponent() metódusnak?",
        options: [
            "Inicializálja az ablakot, a meghívása nélkül mindenképpen fordítási hibát kapunk.",
            "Inicializálja az alkalmazást, a meghívása nélkül nem indítható el az alkalmazás",
            "Inicializálja a tervezőfelületen hozzáadott vezérlőket és tulajdonságaikat.",
            "Inicializálja az ablakot, a meghívása nélkül mindenképpen futási idejű hibát kapunk."
        ],
        correct: [2]
    },
    {
        category: "C# Nyelv",
        type: "single",
        question: "Mit nevezünk parciális osztályoknak C#-ban?",
        options: [
            "Az interfészeket",
            "Az absztrakt osztályokat",
            "A Visual Studio felülettervezője által generált osztályokat.",
            "Azon osztályokat, amelyek definícióját több forrásfájlban adjuk meg."
        ],
        correct: [3]
    },
    {
        category: "WinForms",
        type: "single",
        question: "Melyik nem építőeleme a Windows Forms alkalmazásonak?",
        options: [
            "vezérlők (controls)",
            "alkalmazás (application)",
            "ablakok (forms)",
            "oldalak (pages)"
        ],
        correct: [3]
    },
    {
        category: "LINQ",
        type: "single",
        question: "Mi lesz a következő LINQ lekérdezés eredménye? people.Where(p => p.Age >= 18).Select(p => p.Name).OrderBy(p => p);",
        options: [
            "A tartalmazott nagykorú személyek nevei, név szerint rendezve.",
            "A tartalmazott nagykorú személyek nevei, életkor szerint rendezve.",
            "Fordítási hiba.",
            "A tartalmazott nagykorú személyek objektumai."
        ],
        correct: [0]
    },
    {
        category: "Architektúra",
        type: "single",
        question: "Melyik nem a modell réteg feladata modell-nézet (MV) architektúrában?",
        options: [
            "állapotkezelés",
            "üzleti logika",
            "megjelenítési logika",
            "adatkezelés"
        ],
        correct: [2]
    },
    {
        category: "WinForms",
        type: "single",
        question: "Melyik nem billentyűzetkezelési esemény Windows Forms keretrendszerben?",
        options: [
            "KeyPush",
            "KeyPress",
            "KeyDown",
            "KeyUp"
        ],
        correct: [0]
    },
    {
        category: "Események",
        type: "single",
        question: "Mikor példányosul egy esemény?",
        options: [
            "nem példányosul, mert az event primitív típus",
            "deklarációkor",
            "eseménykezelő hozzárendelésekor",
            "a konstruktor explicit meghívásakor"
        ],
        correct: [2]
    },
    // --- 4. OLDAL ---
    {
        category: "Architektúra",
        type: "single",
        question: "Melyik állítás igaz a szoftver architektúrára?",
        options: [
            "A szoftver architektúra a rendszer magas szintű komponenseinek és kapcsolataiknak meghatározása.",
            "A szoftver architektúrát a program osztálydiagramja alapján határozzuk meg.",
            "A szoftver architektúra jellemzően folyamatosan változik, fejlődik a projekt fejlesztése folyamán.",
            "A szoftver architektúra célja a feladat megoldásához leginkább alkalmas programozási nyelv meghatározása."
        ],
        correct: [0]
    },
    {
        category: "Architektúra",
        type: "single",
        question: "Melyik állítás igaz a modell-nézet (MV) architektúra helyes felépítésére?",
        options: [
            "A modell ismeri a nézetet, de nézet nem ismeri a modellt.",
            "A nézet ismeri a modellt, de a modell nem ismeri a nézetet.",
            "A nézet és a modell nem ismerheti egymást.",
            "A nézet és a modell kölcsönösen ismeri egymást."
        ],
        correct: [1]
    },
    {
        category: "WinForms",
        type: "single",
        question: "Mikor kerül megjelenítésre egy vezérlő Windows Formsban?",
        options: [
            "Amikor hozzáadásra kerül a tartalmazó ablak vagy elrendező vezérlő Controls gyűjteményéhez.",
            "A vezérlő Dispose() metódusának meghívásakor.",
            "Amikor a vezérlő példányosításra kerül.",
            "A tartalmazó ablak Load eseményének kiváltásakor."
        ],
        correct: [0]
    },
    {
        category: "WinForms",
        type: "single",
        question: "Melyik állítás igaz a vezérlőkre Windows Formsban?",
        options: [
            "Az ablakok (formok) nem a Control osztály leszármazottai.",
            "Saját vezérlőt csak a UserControl osztályból származtathatunk.",
            "A vezérlők teljes leszármazási hierarchiába szerveződnek, amelynek ösosztálya a Control.",
            "Az elrendező vezérlők nem ágyazhatóak egymásba."
        ],
        correct: [2]
    },
    {
        category: "WinForms",
        type: "single",
        question: "Melyik nem egérkezelési esemény Windows Forms keretrendszerben?",
        options: [
            "MouseDown",
            "MouseExit",
            "MouseEnter",
            "MouseLeave"
        ],
        correct: [1]
    },
    {
        category: "Grafika",
        type: "single",
        question: "Melyik állítás hamis az elemi grafikai műveletekre Windows Formsban?",
        options: [
            "Bármely vezérlőre rajzolhatunk.",
            "Az ecsetek (Brush) területek kitöltésére használható.",
            "A grafikai műveletek végrehajtásának sebessége függ a grafikus kártyától.",
            "A tollak (Pen) vonalak rajzolására használható."
        ],
        correct: [2]
    },
    {
        category: "WinForms",
        type: "single",
        question: "Melyik állítás igaz a Windows Forms használatára?",
        options: [
            "A Windows Forms Designerben tervezésekor hozzáadott vezérlők az ablakhoz tartozó resx állományban kerülnek definiálásra.",
            "A Designerben hozzáadott vezérlők állapotát futásidőben már nem módosíthatjuk.",
            "A Windows Forms Designerrel elkészített ablakokhoz is adhatunk dinamikusan hozzá vezérlőket futási időben."
        ],
        correct: [2]
    },
    // --- 5. OLDAL ---
    {
        category: "Tesztelés",
        type: "single",
        question: "Az alábbi állítások közül melyik hamis a mockolás vonatkozásában?",
        options: [
            "A Moq lehetőséget nyújt a hívások nyomkövetésére.",
            "A Moq esetén a mock objektumok előállításához nincs szükség a függőséggel rendelkező programegység osztályára vagy interfészére.",
            "A függőséget helyettesítjük annak szimulációjával (mock objektum).",
            "A mock objektum megvalósítja a függőség interfészét."
        ],
        correct: [1]
    },
    {
        category: "Architektúra",
        type: "single",
        question: "Az alábbí, alkalmazások architektúrájára vonatkozó állítások közül melyik hamis?",
        options: [
            "A függőségeket úgy kell megvalósítani, hogy a konkrét megvalósítástól függjenek.",
            "A befecskendezésnek különböző módjai lehetnek (például: konstruktor, metódus).",
            "A dependency injection jelentése, hogy a rétegek a függőségeknek csak az absztrakcióját látják.",
            "Az egyes rétegek között függőségek alakulnak ki."
        ],
        correct: [0]
    },
    {
        category: "Tesztelés",
        type: "single",
        question: "Milyen tesztelés nem létezik?",
        options: [
            "Egységteszt",
            "Integrációs teszt",
            "Rendszerteszt",
            "Dekompozíciós teszt"
        ],
        correct: [3]
    },
    {
        category: "Tesztelés",
        type: "single",
        question: "Melyik párosítás nem helyes a teszt attribútumoknál (MSTest - xUnit)?",
        options: [
            "[TestMethod] - [Fact]",
            "[TestCleanup] - Dispose",
            "[TestInitialize] - Konstruktor",
            "[TestClass] - [Theory]"
        ],
        correct: [3]
    },
    {
        category: ".NET",
        type: "single",
        question: "Az alábbi, C# nyelvre és .NET keretrendszerre vonatkozó állítások közül melyik hamis?",
        options: [
            "A szerelvényekre történő felbontást célszerű a rétegek és függőségek mentén elvégezni.",
            "A StreamReader nem implementálja az IDisposable interfészt.",
            "Az egységteszt lehetőséget nyújt osztályok viselkedésének ellenőrzésére.",
            "A C# tartalmaz using blokkot a Dispose automatikus lefutására."
        ],
        correct: [1]
    },
    {
        category: "Tesztelés",
        type: "single",
        question: "Mi az egységteszt?",
        options: [
            "Az alkalmazás komponensei (egységei) közötti integráció tesztelése.",
            "Egyes osztályok és objektumok önálló viselkedésének tesztelése.",
            "A teljes alkalmazás egy egységben történő tesztelése.",
            "A forráskód egységes kódolási stílusának ellenőrzése."
        ],
        correct: [1]
    },
    // --- 6. OLDAL ---
    {
        category: "Tesztelés",
        type: "single",
        question: "Mely keretrendszer nem használható egységtesztek írásához?",
        options: [
            "NUnit",
            "xUnit",
            "MSTest",
            "MSUnit"
        ],
        correct: [3]
    },
    {
        category: "Tesztelés",
        type: "single",
        question: "Milyen attribútummal jelöljük a unit tesztesetek eljárásait MSTest keretrendszer alatt?",
        options: [
            "IsTrue",
            "TestClass",
            "TestMethod",
            "Test"
        ],
        correct: [2]
    },
    {
        category: "Szálkezelés",
        type: "single",
        question: "Mi a különbség a folyamat (process) és a szál (thread) között?",
        options: [
            "Egy szál több folyamatot is tartalmazhat.",
            "A folyamatokat Linux operációs rendszeren szálaknak hívjuk",
            "A folyamatoknak saját végrehajtási kömyezetük (pl. memória) van, a szálak osztozkodnak ezen.",
            "Nincs különbség, a kettő egymás szinonimája."
        ],
        correct: [2]
    },
    {
        category: "Szálkezelés",
        type: "single",
        question: "Mely állítás hamis az aszinkron tevékenységekkel kapcsolatban?",
        options: [
            "A tevékenység külön szálon fut.",
            "Az eredményt később kapjuk meg.",
            "A hívő szál blokkolódik, amíg a tevékenység fut.",
            "A tevékenység kezdeményezője nem várja meg a lefutást."
        ],
        correct: [2]
    },
    {
        category: "Szálkezelés",
        type: "single",
        question: "Melyik állítás igaz a kölcsönös kizárásra (mutual exclusion)?",
        options: [
            "A kölcsönös kizárás célja, hogy a többszálú program egyszerre mindig csak egy szál futhasson.",
            "A kölcsönös kizárás garantálja, hogy a közös erőforráshoz egyszerre csak egy szál férhessen hozzá.",
            "Célja a szálak szinkronizációja: a kritikus szakasz mindig ugyanazon a szálon fusson le.",
            "Nincsen olyan többszálú program, amely kölcsönös kizárás nélkül helyesen tud működni."
        ],
        correct: [1]
    },
    {
        category: "Szálkezelés",
        type: "single",
        question: "Melyik probléma nem igaz az alacsony absztrakciós szintű szálkezelésre .NET-ben (Thread)?",
        options: [
            "Nincs lehetőség erősen típusos paraméterátadásra.",
            "Nincs lehetőség a kivételek továbbítására.",
            "Nincs lehetőség az eredmény visszaadására.",
            "Nincs lehetőség a gyerek szál megszakítására."
        ],
        correct: [3]
    },
    {
        category: "Szálkezelés",
        type: "single",
        question: "Mely állítás hamis a szinkron tevékenységekkel kapcsolatban?",
        options: [
            "A tevékenység külön szálon fut.",
            "A tevékenység kezdeményezője megvárja annak lefutását.",
            "A hívó szál blokkolódik, amíg a tevékenység fut.",
            "Ha sokáig tart a tevékenység, akkor az a program felületén is észrevehető."
        ],
        correct: [0]
    },
    // --- 7. OLDAL ---
    {
        category: "Időzítők",
        type: "single",
        question: "Az alábbiak közül melyik állítás igaz a System.Timers.Timer időzítővel kapcsolatban?",
        options: [
            "Amennyiben grafikus felületű alkalmazással használjuk, szinkronizálást kell végeznünk a felülettel.",
            "Egy osztályon belül csak egy időzítő használható.",
            "Az intervallum a Tick property segítségével adható meg.",
            "Az időzítő által kiváltott Elapsed eseményhez kötelező eseménykezelőt hozzárendelni."
        ],
        correct: [0]
    },
    {
        category: "WinForms",
        type: "single",
        question: "Mikor szükséges az Invoke / BeginInvoke eljárást meghívni egy WinForms felületi vezérlőn?",
        options: [
            "Ha nem ugyanarról a szálról próbáljuk a vezérlőt elérni, amelyiken kiváltásra került az esemény.",
            "Ha nem ugyanarról a szálról próbáljuk a vezérlőt elérni, amelyik létrehozta azt.",
            "Ha ugyanarról a szálról próbáljuk a vezérlőt elérni, amelyik létrehozta azt.",
            "Ha eseménykezelő eljárásból próbáljuk a vezérlőt elérni, akkor mindig."
        ],
        correct: [1]
    },
    {
        category: "C# Nyelv",
        type: "single",
        question: "Melyik C# attribútum segítségével tudjuk automatikusan behelyettesíteni a hívó metódus vagy tulajdonság nevét?",
        options: [
            "CallerMemberName",
            "Property",
            "OnPropertyChanged",
            "Name"
        ],
        correct: [0]
    },
    {
        category: "Adatkötés",
        type: "single",
        question: "Melyik állítás igaz az ObservableCollection kollekcióra?",
        options: [
            "Olyan objektumok gyűjteménye, amelyek megvalósítják az INotifyPropertyChanged interfészt.",
            "Az ICollection Observable> generikus típus egyszerűbb álneve.",
            "A figyelő (observer) tervezési mintát megvalósító objektum, ami eseményvezérelt módon jelzi a változásokat.",
            "Olyan ősosztály, amelynek tetszőleges eleme konstans műveletigénnyel lekérdezhető."
        ],
        correct: [2]
    },
    {
        category: "Adatkötés",
        type: "single",
        question: "Mi az adatkötés (data binding)?",
        options: [
            "Amikor az alkalmazásban található adattagok kezdeti értéket kapnak a modelltől.",
            "Adatbányászat, az alkalmazásban a nézet és a modell között történik.",
            "A megjelenített és az üzleti logikában tárolt adat értesítés alapú összekötése.",
            "Az adattagok automatikus validációja a nézeten."
        ],
        correct: [2]
    },
    {
        category: "Adatkötés",
        type: "single",
        question: "Az alábbi osztályok közül melyik .NET osztály implementálja az INotifyCollectionChanged interfészt?",
        options: [
            "Vector",
            "ObservableCollection",
            "Label",
            "List"
        ],
        correct: [1]
    },
    {
        category: "WPF",
        type: "single",
        question: "Hogyan történik az adatkötés (data binding) a WPF alkalmazásban?",
        options: [
            "Implementációfüggő.",
            "Ezt a nézetmodell (viewmodel) feladata meghatározni.",
            "A tulajdonság (property) nevének egyezésével.",
            "A modellben megadott logika segítségével."
        ],
        correct: [2]
    },
    // --- PART 1 VÉGE, FOLYTATÁS A KÖVETKEZŐ ÜZENETBEN ---
    // --- 8. OLDAL ---
    {
        category: "Architektúra",
        type: "single",
        question: "A modell-nézet-nézetmodell-perzisztencia architektúrában melyik NEM a modell felelőssége?",
        options: [
            "Az adatok tartós tárolása az alkalmazás leállítása esetére.",
            "Jelzés küldése egy adattag értékének változásáról.",
            "Az üzleti logika megvalósítása.",
            "A kapott adatok validációja."
        ],
        correct: [0]
    },
    {
        category: "MVVM",
        type: "single",
        question: "Az MVVM architektúrában melyik biztosan NEM a nézetmodell felelőssége?",
        options: [
            "Adatok szolgáltatása a nézet számára.",
            "A kapott adatok 'elő-validációja', úgy mint a bemenet hossza, típusa.",
            "Az üzleti logika megvalósítása.",
            "Navigációs logika megvalósítása nézetek között."
        ],
        correct: [2]
    },
    {
        category: "WPF",
        type: "single",
        question: "Melyik állítás igaz a stílusokra WPF-ben?",
        options: [
            "Az explicit stílusok az összes megadott típusú elemre érvényesek.",
            "A stílusokat Setter és Getter elemek segítségével függőségi tulajdonságokra definiáljuk.",
            "A stílusok megadhatóak elemenként (vezérlőnként) vagy erőforrásként is.",
            "A stílusokat CSS szintaxissal definiáljuk."
        ],
        correct: [2]
    },
    {
        category: "WPF",
        type: "single",
        question: "Melyik állítás igaz az animációkra WPF-ben?",
        options: [
            "Jellemzően a nézetmodell rétegben definiáljuk.",
            "Megjelenítésükért a CPU felel.",
            "Bármely függőségi tulajdonság animálható.",
            "Kizárólag az időben lineáris animációs mód támogatott."
        ],
        correct: [2]
    },
    {
        category: "WPF",
        type: "single",
        question: "Melyik nem a Windows Presentation Foundation (WPF) erőforrás?",
        options: [
            "Manifest",
            "Template",
            "Style",
            "Storyboard"
        ],
        correct: [0]
    },
    {
        category: "WPF",
        type: "single",
        question: "Mely kulcsszó teszi lehetővé WPF alkalmazások esetén az adatkötést?",
        options: [
            "Source",
            "Binding",
            "Target",
            "Path"
        ],
        correct: [1]
    },
    {
        category: "LINQ",
        type: "single",
        question: "Melyik nyelvbe ágyazott lekérdezés (LINQ) adja meg a pozitív számok átlagát a list változóban tárolt listára (List<double>)?",
        options: [
            "list.Sum(x => x > 0)",
            "list.Average(x => x).Where(x => x > 0)",
            "list.Where(x => x > 0).Sum(y => y / x.Count())",
            "list.Where(x => x > 0).Average(x => x)"
        ],
        correct: [3]
    },
    {
        category: "Adatbázis",
        type: "single",
        question: "Milyen adatbáziskezelési mód nincsen .NET Core keretrendszerben?",
        options: [
            "logikai relációs modell",
            "objektumrelációs modell",
            "aggregációs modell",
            "natív kapcsolat"
        ],
        correct: [2]
    },
    // --- 9. OLDAL ---
    {
        category: "Entity Framework",
        type: "single",
        question: "Az alábbi utasítások közül melyik szolgál a csatolt adatok betöltésére Entity Frameworkben?",
        options: [
            "Add",
            "Include",
            "Load",
            "Attach"
        ],
        correct: [1]
    },
    {
        category: "Entity Framework",
        type: "single",
        question: "A modell-nézet-nézetmodell-perzisztencia architektúrában melyik nem a modell felelőssége?",
        options: [
            "Az adatbázis sémájának leírása.",
            "Jelzés küldése egy adattag értékének változásáról.",
            "A kapott adatok validációja.",
            "Az üzleti logika megvalósítása."
        ],
        correct: [0]
    },
    {
        category: "Entity Framework",
        type: "single",
        question: "Az alábbiak közül melyik megközelítési mód nem létezik entitás adatmodellek létrehozására?",
        options: [
            "object first",
            "code first",
            "database first",
            "modell first"
        ],
        correct: [0]
    },
    {
        category: "Xamarin",
        type: "single",
        question: "Mi a DependencyService osztály feladata Xamarinban?",
        options: [
            "Betölti a platform specifikus (pl. Android) függőségeket Xamarinba.",
            "Letölti a szükséges NuGet függőségeket futási időben.",
            "Regisztrálja az interfészek és implementációik függőségét, azokat kérésre példányosítja és kiszolgálja.",
            "Betölti a platform specifikus alkalmazás platform-független függőségeit."
        ],
        correct: [2]
    },
    {
        category: "UWP",
        type: "single",
        question: "Windows operációs rendszeren milyen adatokat érdemes a ApplicationData.Current.RoamingFolder könyvtárban tárolni?",
        options: [
            "Amelyeket csak ideiglenesen hoztunk létre.",
            "Amelyeket mobil adatkapcsolaton, roamingolva nem szabad elküldeni.",
            "Amelyeket szeretnénk a felhasználó eszközei között szinkronizálni.",
            "Amelyeket szeretnénk titkosítani."
        ],
        correct: [2]
    },
    {
        category: "Mobil",
        type: "single",
        question: "Melyik állítás igaz az alábbiak közül mobil alkalmazások életciklusára?",
        options: [
            "A felfüggesztett alkalmazások memóriafoglalása felszabadításra kerül.",
            "A felhasználó nem állíthat le alkalmazásokat.",
            "Az operációs rendszer leállíthat egy felfüggesztett alkalmazást annak értesítése nélkül.",
            "Az alkalmazás nem tudja megkülönböztetni, hogy felfüggesztett vagy terminált állapotból lett elindítva."
        ],
        correct: [2]
    },
    {
        category: "Xamarin",
        type: "single",
        question: "Melyik állítás igaz az Application.Properties kulcs-érték tárolóra Xamarin Forms alkalmazásokban?",
        options: [
            "A tárolt adatok perzisztens tárolásra kerülnek.",
            "A tárolt adatok csak az alkalmazás felfüggesztéséig maradnak meg.",
            "Az Application Properties csak Windows Forms alkalmazásokban használható.",
            "A tárolt adatok csak az alkalmazás terminálásáig maradnak meg."
        ],
        correct: [0]
    },
    // --- 10. OLDAL ---
    {
        category: "Architektúra",
        type: "single",
        question: "Minek a rövidítése az IoC az IoC konténerben?",
        options: [
            "Initial Operational Capability",
            "Index of Components",
            "Implementation of Classes",
            "Inversion Of Control"
        ],
        correct: [3]
    },
    {
        category: "WinForms",
        type: "single",
        question: "Windows Forms alkalmazásokban hogyan akadályozható meg egy Form ablak bezárása az X gombra kattintáskor?",
        options: [
            "A FormClosing esemény kezelőjében a Cancel tulajdonságot igazra állítjuk.",
            "A Form.Close() metódust kell felüldefiniálni.",
            "A Closing eseményt kell letiltani.",
            "Az Enabled tulajdonságot false értékre állítjuk"
        ],
        correct: [0]
    },
    {
        category: "WPF",
        type: "single",
        question: "Melyik fájlformátumot használják leggyakrabban a fordítások tárolására WPF alkalmazásokban?",
        options: [
            "RESX",
            "TXT",
            "XML",
            "JSON"
        ],
        correct: [0]
    },
    {
        category: "WPF",
        type: "single",
        question: "Melyik Binding tulajdonságot kell megadni ahhoz, hogy a változások propagálódjanak a nézetmodellbe (azonnal)?",
        options: [
            "Mode",
            "Path",
            "UpdateSourceTrigger",
            "ElementName"
        ],
        correct: [2]
    },
    {
        category: "C# Nyelv",
        type: "single",
        question: "Mi lesz a x változó típusa az alábbi példában? int a=42; double b=12.3; string c='alma'; var x = a > b ? a : c;",
        options: [
            "Fordítási hiba",
            "string",
            "int",
            "object"
        ],
        correct: [0]
    },
    {
        category: "Típusok",
        type: "single",
        question: "Melyik nem beépített (bulit-in) tipus C#-ban?",
        options: [
            "System.Numerics.BigInteger",
            "string",
            "System.Single",
            "short"
        ],
        correct: [0]
    },
    // --- 11. OLDAL ---
    {
        category: ".NET",
        type: "single",
        question: "Az alábbi, C# nyelvre és .NET keretrendszerre vonatkozó állítások közül melyik hamis? (Ismétlés)",
        options: [
            "A szerelvényekre történő felbontást célszerű a rétegek és függőségek befecskendezés mentén elvégezni.",
            "A C# nyelv nem tartalmaz olyan blokk-kezelési technikát, amely garantálja a Dispose() automatikus lefutását.",
            "A StreamReader implementálja az IDisposable interfészt.",
            "Az egységteszt lehetőséget nyújt osztályok viselkedésének ellenőrzésére."
        ],
        correct: [1]
    },
    {
        category: "WinForms",
        type: "single",
        question: "Mikor válik felszabadítható a szemétgyűjtő (garbage collector) számára egy felületi vezérlő?",
        options: [
            "Ha töröltük a delete operátorral.",
            "Ha eltávolítottuk a tartalmazó ablak vagy panel Controls gyűjteményéből.",
            "Ha törölhetőnek jelöltük a Dispose() eljárás meghívásával.",
            "Ha már nincsen rá elérhető hivatkozás."
        ],
        correct: [3]
    },
    {
        category: "Reaktív Prog",
        type: "single",
        question: "Mi a Publish() operátor szerepe a reaktív programozásban Rx.NET használatakor?",
        options: [
            "Aszinkron adatfolyam több megfigyelő számára történő elérhetővé tétele (multicast).",
            "Szinkronizálja több aszinkron adatfolyam eseményeit a megfigyelők felé.",
            "Aszinkron adatfolyamok megfigyelhetőségének elindítása.",
            "Több aszinkron adatfolyam eseményeinek egyesítése a megfigyelő felé."
        ],
        correct: [0]
    },
    {
        category: "Adatkötés",
        type: "single",
        question: "Melyik állítás igaz az Observable Collection kollekcióra?",
        options: [
            "Olyan kollekció, amely automatikusan értesíti a nézetet, amikor hozzáadunk, eltávolítunk vagy módosítunk elemeket.",
            "Olyan objektumok gyűjteménye, amelyek megvalósítják az INotifyPropertyChanged interfészt.",
            "Megfigyelhető elemek kollekciója, kizárólag egyirányú adatkötés támogatásával.",
            "Olyan kollekció, amelyben az elemek tulajdonság (property) változásai megfigyelhetővé válnak, azokról a nézetet értesíti."
        ],
        correct: [0]
    },
    {
        category: "WinForms",
        type: "single",
        question: "Melyik attribútumot használhatjuk WinForms vezérlők lokalizációjának engedélyezésére a tervezőben?",
        options: [
            "[Serializable(true)]",
            "[LocalizedControl]",
            "[Localizable(true)]",
            "[Bindable(true)]"
        ],
        correct: [2]
    },
    // --- 12. OLDAL ---
    {
        category: ".NET",
        type: "single",
        question: "Az alábbiak közül melyik a .NET Framework hátránya a .NET Core keretrendszerrel szemben?",
        options: [
            "A monolitikus felépítés megnehezíti a beágyazott rendszerekben történő alkalmazást.",
            "A nyílt forráskód miatt a keretrendszerrel fejlesztett programok kereskedelmi licencelése nehézkes.",
            "Nem elérhetőek Linux alapú implementációi.",
            "A zárt forráskód miatt a az alkalmazásaink forráskódja sem tehető nyílt forráskódú licenc alatt."
        ],
        correct: [2]
    },
    {
        category: "C# Nyelv",
        type: "single",
        question: "Melyik állítás igaz egy metódus felüldefiniálására öröklődésnél?",
        options: [
            "Felüldefiniálni a virtual kulcsszóval lehet egy metódust.",
            "Lezárt metódus (sealed) nem definiálható felül.",
            "A felüldefiniált metódus a statikus típuson kerül kiértékelésre.",
            "Felüldefiniálni csak statikus metódust lehet."
        ],
        correct: [1]
    },
    {
        category: "Avalonia",
        type: "single",
        question: "Hogyan lehet egy Button vezérlő kattintáseseményéhez eseménykezelőt hozzárendelni MVVM mintában Avalonia UI-ban?",
        options: [
            "A Command nevű tulajdonságot kell megkötni a ViewModel-ben lévő parancsra.",
            "Egy globális eseménykezelőt kell definiálni a MainWindow osztályban.",
            "A DataContext-et kell egy eseménykezelő objektumra állítani.",
            "Az eseménykezelőt közvetlenül a Click eseményhez rendeljük hozzá az XAML-ben."
        ],
        correct: [0]
    },
    {
        category: "C# Nyelv",
        type: "single",
        question: "Mi lesz az alábbi kódrészlet kimenete? struct Person { public int Age { get; init; } } ... p.Age = 42;",
        options: [
            "Fordítási hiba",
            "42",
            "20",
            "Futtatási hiba"
        ],
        correct: [0]
    },
    {
        category: "Események",
        type: "single",
        question: "Melyik állítás hamis az alábbiak közül az eseményekre C#-ban?",
        options: [
            "Az eseményekről az eseménykezelő le is iratkozhat.",
            "Az eseményeket nem nyelvi szinten valósítja meg a C# nyelv.",
            "Egy eseménykezelő több eseményre is feliratkoztatható.",
            "Egy eseményre több eseménykezelő is feliratkozhat."
        ],
        correct: [1]
    },
    {
        category: "MVVM",
        type: "single",
        question: "Melyik állítás igaz az MVVM (Model-View-ViewModel) architektúrára?",
        options: [
            "A ViewModel közvetlenül hivatkozhat a Model komponensre.",
            "A ViewModel mindig örökli a View-t.",
            "A Model közvetlenül hivatkozhat a ViewModel komponensre.",
            "A ViewModel közvetlenül hivatkozhat a View komponensre."
        ],
        correct: [0]
    },
    // --- 13. OLDAL ---
    {
        category: "WPF",
        type: "single",
        question: "Mi a felület deklaratív leírásának előnye WPF keretrendszerben?",
        options: [
            "Különválasztja a megjelenést annak vezérlésétől.",
            "A felületi vezérlők imperatív, C# kóddal történő leírására nincsen lehetőség.",
            "Lehetővé teszi a 3D grafikus kártyák kihasználását.",
            "A deklaratív megközelítés az alkalmazott funkcionális paradigma révén kevesebb hibalehetőséget rejt."
        ],
        correct: [0]
    },
    {
        category: "Lokalizáció",
        type: "single",
        question: "Mi a különbség a CultureInfo.CurrentCulture és a CultureInfo.CurrentUICulture között?",
        options: [
            "A CultureInfo.CurrentCulture az operációs rendszer nyelvi beállítását adja meg, a CurrentUICulture pedig az alkalmazásét.",
            "A CultureInfo.CurrentCulture a felületi nyelvi beállítást adja meg, a CurrentUICulture pedig a területi beállításokat.",
            "A CultureInfo.CurrentCulture a területi beállításokat adja meg, a CultureInfo.CurrentUICulture pedig a felületi nyelvi beállítást.",
            "A CultureInfo.CurrentUICulture csak Avalonia alatt érhető el."
        ],
        correct: [2]
    },
    {
        category: "C# Nyelv",
        type: "single",
        question: "Melyik állítás nem igaz struktúrákra (struct) C#-ban?",
        options: [
            "Csak elemi típusokat tartalmazhat az adattagjaiban.",
            "Mindig létezik alapértelmezett konstruktora.",
            "Nem származhat le belőle másik struktúra típus.",
            "Paraméterátadáskor érték szerint van kezelve."
        ],
        correct: [0]
    },
    {
        category: "Adatkötés",
        type: "single",
        question: "Mi lehet az oka egy ObservableCollection-t használatkor, ha a nézet nem frissül a tartalmazott elemek módosításakor?",
        options: [
            "Az ObservableCollection-t tartalmazó nézetmodell nem valósítja meg az INotifyPropertyChanged interfészt.",
            "A tartalmazott elemtípus nem valósítja meg az INotifyPropertyChanged interfészt.",
            "Ez az ObservableCollection normális viselkedése, nem lehet megoldani.",
            "Az ObservableCollection-t tartalmazó nézetmodell nem valósítja meg az INotifyCollectionChanged interfészt."
        ],
        correct: [1]
    },
    {
        category: "C# Nyelv",
        type: "single",
        question: "Mi a ?. operátor célja a C# nyelvben?",
        options: [
            "Amennyiben az operátor bal operandusaként szereplő objektum null, nem értékeli ki a jobb operandusként megadott tagot (nullt ad vissza).",
            "Amennyiben az operátor bal operandusaként szereplő, dinamikus típusozású objektum nem tartalmazza a jobb tagot, nem értékeli.",
            "Amennyiben az operátor bal operandusaként szereplő objektum referencia szerint kezelt, azt érték típusúként dereferálja.",
            "Amennyiben az operátor bal operandusaként szereplő objektum null, a jobb operandusként megadott értéket adja vissza."
        ],
        correct: [0]
    },
    {
        category: "Parancsok",
        type: "single",
        question: "Mikor kell kiváltani az ICommand interfészt megvalósító osztályok CanExecuteChanged eseményét?",
        options: [
            "Amikor a parancs végrehajthatósága bizonyosan megváltozott.",
            "A parancsban foglalt tulajdonságok (property) bármelyikének érték változásakor.",
            "Nem a programnak kell kiváltania, a .NET keretrendszer hívja meg.",
            "Amikor a parancs végrehajthatósága lehetséges, hogy megváltozott."
        ],
        correct: [3]
    },
    // --- 14. OLDAL ---
    {
        category: "WinForms",
        type: "single",
        question: "Windows Forms alkalmazásokban melyik esemény használható egy Form inicializálásához, de még a felhasználó által láthatóvá válás előtt?",
        options: [
            "VisibleChanged",
            "Load",
            "Shown",
            "Activated"
        ],
        correct: [1]
    },
    {
        category: "C# Nyelv",
        type: "single",
        question: "Mi a különbség a string és a string? típusok között?",
        options: [
            "A string? típusra végez null-state analízist a fordító, a string típusra nem (vagyis jelzi a null veszélyt).",
            "A string? típus tartalmazhat null értéket, a string típus nem.",
            "A string típus tartalmazhat null értéket, a string? típus nem.",
            "A string? típus tartalmazhat üres karakterláncot, a string típus nem."
        ],
        correct: [0]
    },
    {
        category: "Szálkezelés",
        type: "single",
        question: "Az alábbi, kölcsönös kizárást biztosító C#/.NET elemek közül melyik használható folyamatok (processek) közötti kölcsönös kizárásra is?",
        options: [
            "Mutex",
            "lock",
            "Semaphore",
            "Monitor"
        ],
        correct: [0]
    },
    {
        category: "Események",
        type: "single",
        question: "Hogyan lehet programozottan megszüntetni egy vezérlőhöz kötött eseménykezelőt?",
        options: [
            "this.MyButton.Click = new EventHandler(MyHandler);",
            "this.MyButton.Click = null;",
            "this.MyButton.Click.Remove(MyHandler);",
            "this.MyButton.Click -= new EventHandler(MyHandler);"
        ],
        correct: [3]
    },
    {
        category: "Szálkezelés",
        type: "single",
        question: "Mely állítás hamis az aszinkron tevékenységekkel kapcsolatban? (Task/Async)",
        options: [
            "Amennyiben meg szeretnénk várni a művelet eredményét, Task-ot kell megadni visszatérési típusként.",
            "Szinkron művelet is futtatható aszinkron módon a Task.Run(...) művelet segítségével.",
            "A művelet Task-kal tér vissza, amely tartalmazhat eredményt is.",
            "Az aszinkronitást az interfészben is kell jelölni az async kulcsszóval, nem csak a megvalósításban."
        ],
        correct: [3]
    }
];