//1.
function osszesOszto(szam:number):number[] {
    let szamOsztoi:number[] = [];

    for(let i:number = 0; i <=szam; i++){
        if(szam % i == 0){
            szamOsztoi.push(i);
        }
    }

    return szamOsztoi;
}


//2.
function parosDarab(szamok:number[]):number {
    let parosSzamokDb:number = 0;

    for(let i:number = 0; i < szamok.length; i++){
        if(szamok[i] % 2 == 0){
            parosSzamokDb++;
        }
    }

    return parosSzamokDb;
}


//3.
function fuggvenyhivasPalindrom(fuggveny:() => string):boolean {
    let eredmeny:boolean = false;
    let szoveg:string = fuggveny();
    szoveg = szoveg.replace(/[ ]/g, "");

    for(let i:number = 0; i < szoveg.length; i++){
        if(szoveg[i] == szoveg[szoveg.length - 1 - i]){
            eredmeny = true;
        }
    }

    return eredmeny;
}