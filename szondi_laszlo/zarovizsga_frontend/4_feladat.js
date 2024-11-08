//1.
function osszesOszto(szam) {
    var szamOsztoi = [];
    for (var i = 0; i <= szam; i++) {
        if (szam % i == 0) {
            szamOsztoi.push(i);
        }
    }
    return szamOsztoi;
}
//2.
function parosDarab(szamok) {
    var parosSzamokDb = 0;
    for (var i = 0; i < szamok.length; i++) {
        if (szamok[i] % 2 == 0) {
            parosSzamokDb++;
        }
    }
    return parosSzamokDb;
}
//3.
function fuggvenyhivasPalindrom(fuggveny) {
    var eredmeny = false;
    var szoveg = fuggveny();
    szoveg = szoveg.replace(/[ ]/g, "");
    for (var i = 0; i < szoveg.length; i++) {
        if (szoveg[i] == szoveg[szoveg.length - 1 - i]) {
            eredmeny = true;
        }
    }
    return eredmeny;
}
