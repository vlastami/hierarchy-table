# README soubor

1) V kódu jsem použila následující technologie:

- **React.js**: pro tvorbu uživatelského rozhraní a komponent `HierarchyTable`, `HierarchyItem` a `RemoveButton`.
  - React hook **useState**, použitý pro sledování rozšíření a sbalení položek v hierarchickém zobrazení.

- **Redux**: pro správu stavu aplikace (v tomto rozsahu by stačilo sice použít useState, ale vycházela jsem z požadavku v zadání, že mám uvažovat středně velkou aplikaci)
  - React-Redux hooky **useSelector** a **useDispatch** použité pro získání dat ze stavu Redux store a pro odesílání akcí do store.
  - funkce **removeItem** pro odstranění položky z dat podle zadaného ID. Tato funkce je použita v reduceru pro akci "REMOVE_ITEM".

2) Problémy, které vyvstaly při řešení úkolu:

- V datech jsou dva téměř identické objekty (lišící se pouze hodnotou v jednom sloupci), takže mazání přes ID selhává. Při pokusu o odstranění jednoho z těchto objektů může dojít k nežádoucím výsledkům, jako je odstranění obou objektů nebo nemožnost odstranění jednoho z nich (v tomto scénáři jsem se zacyklila a vzhledem k času jsem tento problém nestihla dořešit). Kdybych měla více času, zkusila bych tuto situaci ošetřit (například přidáním opravdu unikátního ID všem objektům, případně filtrováním podle obsahu celého pole převedeného na string. Tento postup jsem sice částečně zkoušela, ale vyvstal pak problém s mazáním parentů v případě, že jsem mazala jejich děti, možná bych tedy musela zvolit jiný přístup a možná přepsat celou funkci vymazávání).
Nestihla jsem implementovat odstraňování dat přímo z json souboru. Pro tento úkol bych postupovala následujícím způsobem:


3) Nesplněný úkol: Mazání dat z json souboru; v současnosti mažu data pouze z jeho kopie v Redux Store, tj. neukládám
Postup, pokud bych měla čas implementovat tuto funkcionalitu:
- Po úspěšném smazání položky bych vytvořila nový JSON objekt obsahující aktuální stav dat.
- Poté bych uložila tento nový JSON objekt zpět do souboru, čímž bych aktualizovala data uložená v souboru. Toto by mohlo být provedeno například pomocí knihovny `fs` (File System) v Node.js prostředí nebo pomocí serverového API, které by mělo být schopno upravit a uložit JSON soubor na serveru. 


Vzhledem k tomu, že jsem se měla soustředit na frontend a toto už zasahuje i do backendu, rozhodla jsem se zpočátku pracovat bez této funkcionality, avšak později jsem usoudila, že jsem možnou budoucí implementaci měla promyslet. K tomu bych ale potřebovala více informací a konzultaci s backend vývojářem. Stejně tak bych více konzultovala, co se má stát s duplicitními daty a jestli není chyba na straně databáze. 
Celkově byl pro mě úkol zajímavou výzvou, avšak při skutečné práci bych při takovémto zadání potřebovala konzultovat nejasnosti, abych se vyhnula časovým prodlevám a zdlouhavé implementaci něčeho zbytečného.
