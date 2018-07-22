/*
міста, райони, метро - 1 або 2 слова
вулиці - 1, 2 або 3 слова

Порядок груп змінено! В регулярці він наступний:
1 мова (збігається) 
2 область (збігається)
3 місто (збігається)
4 район (збігається)
5 метро (збігається)
6 берег (збігається)
7 біля метро (збігається)
8 вулиця (збігається)
9 здані в експлуатацію (змінено)
10 в процесі будівництва (змінено)
11 тип об"єкта (змінено)
12 клас об"єкта (збігається)
13 кімнатність (змінено)
14 розтермінування виплат (збігається)
15 з ремонтом (збігається)
*/

let langMas = ['ru','uk'];
let langStr =  langMas.join('|');

let oblMas = ['vinnitskaya','zhitomirskaya','ternopolskaya','khmelnitskaya','lvovskaya','chernigovskaya',
'kharkovskaya','sumskaya','rovenskaya','kiyevskaya','dnepropetrovskaya','odesskaya','zaporozhskaya',
'ivano-frankovskaya','kirovogradskaya','volynskaya','nikolayevskaya','poltavskaya','zakarpatskaya',
'khersonskaya','cherkasskaya','chernovitskaya','donetskaya','luganskaya'];
let oblStr =  oblMas.join('|');

let paramCityMas = ['rayon','metro','bereg','vozle-metro','ulitsa'];
let paramCityStr = paramCityMas.join('|');

let readyStr = 'sdannyye';
let notReadyStr = 'stroyashchiyesya';

let typeMas = ['kvartiry','kottedzhi','taunkhausy','pomeshcheniya'];
let typeStr = typeMas.join('|');

let classMas = ['ekonom-klassa','standart','biznes-klassa','elit-klassa','dachnyy','komfort-klassa','premium'];
let classStr = classMas.join('|');

let roomsMas = ['odnokomnatnyye','dvukhkomnatnyye','trekhkomnatnyye','chetyrekhkomnatnyye'];
let roomsStr = roomsMas.join('|');

let rassrStr = 'rassrochka';
let remontStr = 's-remontom';

let allKeys = paramCityStr+'|'+readyStr+'|'+notReadyStr+'|'+typeStr+'|'+classStr+'|'+roomsStr+'|'+rassrStr+'|'+remontStr;  

let regular = new RegExp('^/('+langStr+')/novostroyki(?:-('+oblStr+')-(?:oblast))?(?:(?:-(?!'+allKeys+')([a-z]*-?(?:(?!'+allKeys+')[a-z]*)))?(?:(?:(?:-rayon)-([a-z]*-?(?:(?!'+allKeys+')[a-z]*)))|(?:(?:-metro)-([a-z]*-?(?:(?!'+allKeys+')[a-z]*)))|(?:-([a-z]*)-(?:bereg))|(?:-(vozle-metro))|(?:(?:-ulitsa)-([a-z]*-?(?:(?!'+allKeys+')[a-z]*-?(?:(?!'+allKeys+')[a-z]*)))))?)?(?:(?:-(sdannyye))?(?:-(stroyashchiyesya))?(?:-('+typeStr+'))?(?:-('+classStr+'))?(?:-('+roomsStr+'))?(?:-(rassrochka))?(?:-(s-remontom))?)?$');

let str = '/ru/novostroyki-ivano-frankovsk-ulitsa-pushkina-poeta-kvartiry-chetyrekhkomnatnyye-s-remontom';

let out = new RegExp(regular,"g").exec(str);

console.log(out);


/*
Сама регулярка в сборі (в кінці стрічок - переноси для зручності сприйняття)
^\/(ru|uk)\/novostroyki(?:-(vinnitskaya|zhitomirskaya|ternopolskaya|khmelnitskaya|lvovskaya|chernigovskaya|kharkovskaya|sumskaya
|rovenskaya|kiyevskaya|dnepropetrovskaya|odesskaya|zaporozhskaya|ivano-frankovskaya|kirovogradskaya|volynskaya|nikolayevskaya|
poltavskaya|zakarpatskaya|khersonskaya|cherkasskaya|chernovitskaya|donetskaya|luganskaya)-(?:oblast))?(?:(?:-(?!rayon|metro|bereg|
vozle-metro|ulitsa|sdannyye|stroyashchiyesya|kvartiry|kottedzhi|taunkhausy|pomeshcheniya|ekonom-klassa|standart|biznes-klassa|elit-klassa|
dachnyy|komfort-klassa|premium|odnokomnatnyye|dvukhkomnatnyye|trekhkomnatnyye|chetyrekhkomnatnyye|rassrochka|s-remontom)([a-z]*-?(?:
(?!rayon|metro|bereg|vozle-metro|ulitsa|sdannyye|stroyashchiyesya|kvartiry|kottedzhi|taunkhausy|pomeshcheniya|ekonom-klassa|standart|
biznes-klassa|elit-klassa|dachnyy|komfort-klassa|premium|odnokomnatnyye|dvukhkomnatnyye|trekhkomnatnyye|chetyrekhkomnatnyye|rassrochka|
s-remontom)[a-z]*)))?(?:(?:(?:-rayon)-([a-z]*-?(?:(?!rayon|metro|bereg|vozle-metro|ulitsa|sdannyye|stroyashchiyesya|kvartiry|kottedzhi|
taunkhausy|pomeshcheniya|ekonom-klassa|standart|biznes-klassa|elit-klassa|dachnyy|komfort-klassa|premium|odnokomnatnyye|dvukhkomnatnyye|
trekhkomnatnyye|chetyrekhkomnatnyye|rassrochka|s-remontom)[a-z]*)))|(?:(?:-metro)-([a-z]*-?(?:(?!rayon|metro|bereg|vozle-metro|ulitsa|
sdannyye|stroyashchiyesya|kvartiry|kottedzhi|taunkhausy|pomeshcheniya|ekonom-klassa|standart|biznes-klassa|elit-klassa|dachnyy|komfort-klassa|
premium|odnokomnatnyye|dvukhkomnatnyye|trekhkomnatnyye|chetyrekhkomnatnyye|rassrochka|s-remontom)[a-z]*)))|(?:-([a-z]*)-(?:bereg))|(?:-(
vozle-metro))|(?:(?:-ulitsa)-([a-z]*-?(?:(?!rayon|metro|bereg|vozle-metro|ulitsa|sdannyye|stroyashchiyesya|kvartiry|kottedzhi|taunkhausy|
pomeshcheniya|ekonom-klassa|standart|biznes-klassa|elit-klassa|dachnyy|komfort-klassa|premium|odnokomnatnyye|dvukhkomnatnyye|trekhkomnatnyye|
chetyrekhkomnatnyye|rassrochka|s-remontom)[a-z]*-?(?:(?!rayon|metro|bereg|vozle-metro|ulitsa|sdannyye|stroyashchiyesya|kvartiry|kottedzhi|
taunkhausy|pomeshcheniya|ekonom-klassa|standart|biznes-klassa|elit-klassa|dachnyy|komfort-klassa|premium|odnokomnatnyye|dvukhkomnatnyye|
trekhkomnatnyye|chetyrekhkomnatnyye|rassrochka|s-remontom)[a-z]*)))))?)?(?:(?:-(sdannyye))?(?:-(stroyashchiyesya))?(?:-(kvartiry|kottedzhi|
taunkhausy|pomeshcheniya))?(?:-(ekonom-klassa|standart|biznes-klassa|elit-klassa|dachnyy|komfort-klassa|premium))?(?:-(odnokomnatnyye|
dvukhkomnatnyye|trekhkomnatnyye|chetyrekhkomnatnyye))?(?:-(rassrochka))?(?:-(s-remontom))?)?$
*/

