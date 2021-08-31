React app készítése

Készítsd el az alábbi alkalmazást. Használd a kezdő repot, és az eredményt töltsd fel egy saját repoba.

Minden api hívás mockolva van! Nem próbáld postmannel, csak lokális környezetben működnek.

Hozz létre egy címet az `<App />`-ban: "Which Star Wars character are you?"

Készíts egy formot. Legyen rajta 2 select.
Az elsőn lehessen kiválasztani, hogy milyen színű kardot szeretne a felhasználó - kék, zöld vagy piros.
A másodikon lehessen választani hogy Sith, Jedi vagy egyik sem.
Legyen még egy kipipálható négyzet is, ahol a felhasználható bejelölheti, az élőlényeket, vagy a robotokat preferálja.
Ezen kívül meg kell adnia az email címét is.

Amíg bármelyik adat nincs megadva, a küldés gomb ne működjön.

A küldés gombra kattintva induljon meg egy POST kérést a backend felé a /api/calculate végpontra.
A kérés a következő adatokat küldje JSON formátumban:
{
  "lightsabre": "red",
  "type": "Jedi",
  "isLiving": true,
  "email": "whatever@theuser.wrote"
}

Amíg nem érkezik meg a válasz, se a gomb ne működjön, se a különböző bemeneti mezők.
Az input mezőn ezekben a pillanatokban csak 3 pont látszódjon.

Amikor megérkezik a válasz, tűnjön el a form, és válaszul érkező karakterek minden tulajdonságukkal együtt legyenek megjelenítve egy-egy <Character /> komponensben.
{
  "name": "Yoda",
  "type": "Jedi",
  "chance": "70%"
}

Megjelenített karakterek legyenek a valószínűség szerint sorrendbe rendezve.