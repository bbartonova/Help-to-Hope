import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function PageGdpr() {
  return (
    <>
      <Head>
        <title>Soukromí a cookies</title>
        <meta name="GDPR" content="ochrana osobních údajů Help to Hope" />
      </Head>
      <Layout isLandingPage={false}>
        <main className="p-8">
          <h1 className="font-title text-green text-5xl">Soukromí a cookies</h1>
          <h2 className="font-title text-grey text-4xl pt-4">
            Zásady zpracování osobních údajů
          </h2>
          <h2 className="font-title text-grey text-4xl pt-4">
            Seznámení s informacemi o zpracování osobních údajů
          </h2>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            Projekt Help to Hope, zastoupen Martinou Chromou a Blankou
            Bartoňovou, provozovateli webové aplikace{' '}
            <a href="https://www.helptohope.cz/">helptohope.cz</a>, dostupné na
            internetové adrese{' '}
            <a href="https://www.helptohope.cz/">https://www.helptohope.cz</a>{' '}
            (dále jen „webové stránky“) prohlašuje, že Veškeré zpracovávané
            osobní údaje jsou považovány za přísně důvěrné a je s nimi nakládáno
            v souladu s platnými právními předpisy v oblasti ochrany osobních
            údajů. Bezpečí Vašich osobních údajů je naší prioritou.
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            Pro účely těchto Zásad zpracování osobních údajů (dále jen „Zásady")
            mají níže uvedené termíny následující význam:
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            Osobními údaji jsou jakékoliv znaky, které člověka identifikují a
            odlišují. Jedná se např. o jméno, příjmení, rodné číslo, datum
            narození, věk, pohlaví, adresu, telefon, e-mail, osobní stav a
            občanství.
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            Zpracováním osobních údajů se rozumí zejména shromažďování, ukládání
            na nosiče informací, zpřístupňování, úprava nebo pozměňování,
            vyhledávání, používání, předávání, šíření, zveřejňování, uchovávání,
            výměna, třídění nebo kombinování, blokování a likvidace.
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            Správcem se rozumí osoba, která určuje účely a prostředky zpracování
            osobních údajů.
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            Zpracovatelem je osoba, která zpracovává osobní údaje pro správce v
            souladu s jeho pokyny.
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            Nařízením se rozumí Nařízení Evropského parlamentu a Rady (EU)
            2016/679 ze dne 27. dubna 2016 o ochraně fyzických osob v
            souvislosti se zpracováním osobních údajů a o volném pohybu těchto
            údajů a o zrušení směrnice 95/46/ES (obecné nařízení o ochraně
            osobních údajů), známé také pod zkratkou GDPR.
          </p>

          <h3 className="font-title text-grey text-3xl pt-4">1. Správce</h3>
          <p className="font-body text-grey-dark text-base leading-relaxed">
            Help to Hope je správcem osobních údajů ve vztahu ke všem službám
            poskytovaným prostřednictvím webových stránek{' '}
            <a href="https://www.helptohope.cz/">helptohope.cz</a>, s výjimkou
            služeb uvedených čl. 7. těchto Zásad, ve kterých má Help to Hope
            postavení zpracovatele. Help to Hope spravuje osobní údaje přímo.
            Help to Hope nejmenovala pověřence pro ochranu osobních údajů.
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            Ve všech záležitostech souvisejících se zpracováním Vašich osobních
            údajů nebo výkonem Vašich práv podle Nařízení se můžete obracet na
            kontaktní e-mailovou adresu{' '}
            <a href="mailto:helptohope.info@gmail.com">
              helptohope.info@gmail.com
            </a>
            .
          </p>

          <h3 className="font-title text-grey text-3xl pt-4">
            2. Zpracovávané osobní údaje
          </h3>
          <p className="font-body text-grey-dark text-base leading-relaxed">
            Help to Hope zpracovává osobní údaje, které ji klienti poskytli nebo
            osobní údaje, které získala o klientech na základě plnění smluvních
            povinností sjednaných s klienty. Konkrétně Help to Hope zpracovává
            následující kategorie osobních údajů, případně další kategorie,
            je-li tak uvedeno v čl. 7 těchto Zásad níže:
          </p>

          <ul className="font-body text-grey-dark text-base leading-relaxed">
            <span className="font-extrabold">
              {' '}
              Kategorie osobních údajů - Účel zpracování
            </span>
            <li className="list-disc list-inside pl-4">
              <span className="font-extrabold">
                Jméno, příjmení (příp. rodné příjmení), název, název organizace
              </span>{' '}
              - plnění závazku zprostředkování, zvýšení bezpečnosti
              poskytovaných služeb, zasílání obchodních a marketingových sdělení
            </li>
            <li className="list-disc list-inside pl-4">
              <span className="font-extrabold">IP adresa</span> - zvýšení
              bezpečnosti poskytovaných služeb, provádění analýz a měření
            </li>
            <li className="list-disc list-inside pl-4">
              <span className="font-extrabold">E-mail</span> - plnění závazku
              zprostředkování, zvýšení bezpečnosti poskytovaných služeb,
              zasílání obchodních a marketingových sdělení, účetní a daňové
              účely
            </li>
            <li className="list-disc list-inside pl-4">
              <span className="font-extrabold">Telefon</span> - plnění závazku
              zprostředkování, zvýšení bezpečnosti poskytovaných služeb
            </li>
            <li className="list-disc list-inside pl-4">
              <span className="font-extrabold">Odkazy, další odkazy</span> -
              zlepšení kvality poskytovaných služeb
            </li>
            <li className="list-disc list-inside pl-4">
              <span className="font-extrabold">
                Oblast činnosti, popis vaší činnosti
              </span>{' '}
              - zlepšení kvality poskytovaných služeb
            </li>
            <li className="list-disc list-inside pl-4">
              <span className="font-extrabold">Popis činnosti</span> - zlepšení
              kvality poskytovaných služeb
            </li>
            <li className="list-disc list-inside pl-4">
              <span className="font-extrabold">Reference</span> - zlepšení
              kvality poskytovaných služeb
            </li>
            <li className="list-disc list-inside pl-4">
              <span className="font-extrabold">Stávající web</span> - zlepšení
              kvality poskytovaných služeb
            </li>
            <li className="list-disc list-inside pl-4">
              <span className="font-extrabold">Preference zkušeností</span> -
              zlepšení kvality poskytovaných služeb
            </li>
            <li className="list-disc list-inside pl-4">
              <span className="font-extrabold">Možná odměna</span> - zlepšení
              kvality poskytovaných služeb
            </li>
          </ul>

          <h3 className="font-title text-grey text-3xl pt-4">
            3. Účely zpracování osobních údajů
          </h3>
          <p className="font-body text-grey-dark text-base leading-relaxed">
            Vaše osobní údaje mohou být zpracovávány za následujícími účely:
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            Plnění závazku zprostředkování, zvýšení bezpečnosti poskytovaných
            služeb (především zvýšení bezpečnosti uživatelských účtů, ověření
            identity uživatele a předcházení podvodům), zlepšení kvality
            poskytovaných služeb (zjištění nepovinných doplňujících informací),
            provádění analýz a měření (v anonymizované podobě sbíráme
            statistická data např. o počtu zhlédnutí jednotlivých inzerátů,
            celkové návštěvnosti stránek, času stráveném na stránkách a
            zařízeních, prostřednictvím kterých jsou webové stránky prohlíženy),
            zasílání obchodních a marketingových sdělení (v souladu s platnou
            legislativou Vám na základě Vašeho souhlasu nebo oprávněného zájmu
            správce mohou být zasílána obchodní a marketingová sdělení, z
            jejichž odběru se můžete kdykoliv odhlásit).
          </p>

          <h3 className="font-title text-grey text-3xl pt-4">
            4. Doba uchování
          </h3>
          <p className="font-body text-grey-dark text-base leading-relaxed">
            Vaše osobní údaje jsou zpracovávány a uchovávány po dobu poskytování
            příslušné služby (tj. po dobu plnění smlouvy) a tři roky po jejím
            skončení, a dále po dobu, po kterou je Help to Hope povinna jakožto
            správce uchovávat osobní údaje podle obecně závazných právních
            předpisů nebo na kterou byl ke zpracování udělen souhlas. V
            ostatních případech vyplývá doba zpracování z účelu zpracování anebo
            je dána právními předpisy v oblasti ochrany osobních údajů.
          </p>

          <ul className="font-body text-grey-dark text-base leading-relaxed">
            <span className="font-extrabold">
              Osobní údaje zpracováváme dle účelu jejich zpracování po níže
              uvedenou dobu:
            </span>
            <li className="list-disc list-inside pl-4">
              plnění závazku zprostředkování – po dobu plnění smlouvy a po 5 let
              po jejím splnění,
            </li>
            <li className="list-disc list-inside pl-4">
              zlepšení kvality poskytovaných služeb - max. 6 měsíců,
            </li>
            <li className="list-disc list-inside pl-4">
              provádění analýz a měření - max. 6 měsíců,
            </li>
            <li className="list-disc list-inside pl-4">
              zvýšení bezpečnosti poskytovaných služeb – max. 5 let,
            </li>
            <li className="list-disc list-inside pl-4">
              zasílání obchodních a marketingových sdělení - max. 1 rok po
              udělení souhlasu,
            </li>
            <li className="list-disc list-inside pl-4">
              zveřejnění doplňujících údajů v profilu na základě souhlasu –
              dokud údaje sami nesmažete,
            </li>
          </ul>

          <h3 className="font-title text-grey text-3xl pt-4">
            5. Příjemci osobních údajů
          </h3>
          <p className="font-body text-grey-dark text-base leading-relaxed">
            Osobní údaje jsou zpřístupněny pouze oprávněným zaměstnancům Help to
            Hope a v míře nezbytné pro účely zpracování také dalším příjemcům
            podílejícím se na poskytování služeb. Jedná se o tyto kategorie
            příjemců:
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            IT specialisté zajišťující provoz webových stránek{' '}
            <a href="https://www.helptohope.cz/">helptohope.cz</a>, marketingové
            analýzy a e-mailing, poskytovatelé platebních služeb, obchodní
            partneři zajišťující realizaci jednotlivých služeb (např.
            fotografové, advokáti, osoby zajišťující službu KOMFORT, asistenti
            prodeje, zpracovatelé energetických štítků apod.), osoby ze skupiny
            Help to Hope podílející se na poskytování služeb uživatelů, se
            kterými komunikujete přes zprávy (v rozsahu jméno, příjmení,
            telefonní číslo, e-mail, vyplněné Doplňující informace).
          </p>

          <h3 className="font-title text-grey text-3xl pt-4">
            6. Práva subjektů údajů
          </h3>
          <p className="font-body text-grey-dark text-base leading-relaxed">
            V souvislosti se zpracováním Vašich osobních údajů ze strany Help to
            Hope jako správce máte následující práva, která můžete kdykoliv
            uplatnit:
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            Právo požadovat přístup ke svým osobním údajům, tedy Vaše právo
            získat na základě Vaší žádosti informaci (potvrzení), zda jsou či
            nejsou Vaše osobní údaje zpracovávány. Pokud Vaše osobní údaje
            zpracovávány jsou, máte právo získat přístup k těmto osobním údajům
            a zároveň máte právo získat následující informace:
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            a) účely zpracování;
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            b) kategorie dotčených osobních údajů;
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            c) příjemci nebo kategorie příjemců, kterým Vaše osobní údaje byly
            nebo budou zpřístupněny, zejména příjemci ve třetích zemích nebo v
            mezinárodních organizacích;
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            d) plánovaná doba, po kterou budou Vaše osobní údaje uloženy, nebo
            není-li ji možné určit, kritéria použitá ke stanovení této doby;
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            e) existence práva požadovat od Help to Hope opravu nebo výmaz
            Vašich osobních údajů nebo omezení jejich zpracování anebo vznést
            námitku proti tomuto zpracování;
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            f) veškeré dostupné informace o zdroji osobních údajů, pokud je Help
            to Hope nezískala od Vás;
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            g) skutečnost, že dochází k automatizovanému rozhodování, včetně
            profilování, uvedenému v čl. 22 odst. 1 a 4 Nařízení, a přinejmenším
            v těchto případech smysluplné informace týkající se použitého
            postupu, jakož i významu a předpokládaných důsledků takového
            zpracování pro Vás.
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            Právo požadovat opravu svých osobních údajů, tedy právo, aby Help to
            Hope bez zbytečného odkladu opravila nepřesné osobní údaje, které se
            Vás týkají; dále máte právo na doplnění neúplných osobních údajů, a
            to i poskytnutím dodatečného prohlášení.
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            Právo požadovat výmaz svých osobních údajů, tedy právo, aby Help to
            Hope bez zbytečného odkladu vymazala osobní údaje, které se Vás
            týkají, pokud je dán jeden z těchto důvodů:
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            a) Vaše osobní údaje již nejsou potřebné pro účely, pro které byly
            shromážděny nebo jinak zpracovány;
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            b) pokud odvoláte souhlas, na jehož základě byly Vaše osobní údaje
            zpracovány, a neexistuje žádný další právní důvod pro jejich
            zpracování;
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            c) vznesete námitky proti zpracování Vašich osobních údajů podle čl.
            21 odst. 1 Nařízení a nebudou existovat žádné převažující oprávněné
            důvody pro zpracování podle čl. 21 odst. 2 Nařízení;
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            d) Vaše osobní údaje byly zpracovány protiprávně;
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            e) Vaše osobní údaje musí být vymazány ke splnění právní povinnosti
            stanovené v právu Evropské unie nebo členského státu, které se na
            Help to Hope vztahuje;
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            f) Vaše osobní údaje byly shromážděny v souvislosti s nabídkou
            služeb informační společnosti podle čl. 8 odst. 1. Nařízení.
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            Právo na omezení zpracování Vašich osobních údajů, tedy právo, aby
            Help to Hope omezila zpracování Vašich osobních údajů, v kterémkoli
            z těchto případů:
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            a) pokud popíráte přesnost Vašich osobních údajů, a to na dobu
            potřebnou k tomu, aby Help to Hope mohla přesnost Vašich osobních
            údajů ověřit;
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            b) zpracování je protiprávní a Vy odmítnete výmaz Vašich osobních
            údajů a místo toho budete žádat o omezení použití Vašich osobních
            údajů;
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            c) pokud Help to Hope již Vaše osobní údaje nepotřebuje pro účely
            zpracování, ale Vy je požadujete pro určení, výkon nebo obhajobu
            právních nároků;
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            d) pokud vznesete námitku proti zpracování Vašich osobních údajů
            podle čl. 21 odst. 1 Nařízení, dokud nebude ověřeno, zda oprávněné
            důvody Help to Hope převažují nad Vašimi oprávněnými důvody.
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            Právo na přenositelnost Vašich osobních údajů, tedy právo, získat
            osobní údaje, které se Vás týkají, které jste poskytl/a Help to
            Hope, a to ve strukturovaném, běžně používaném a strojově čitelném
            formátu, a právo předat tyto údaje jinému správci, aniž by tomu Help
            to Hope bránila, a to v případě, že:
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            a) zpracování je založeno na souhlasu podle čl. 6 odst. 1 písm. a)
            Nařízení nebo čl. 9 odst. 2 písm. a) Nařízení nebo na smlouvě podle
            čl. 6 odst. 1 písm. b) Nařízení; a
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            b) zpracování se provádí automatizovaně.
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            Při výkonu svého práva na přenositelnost údajů máte právo na to, aby
            osobní údaje byly předány přímo Help to Hope správci druhému, je-li
            to technicky proveditelné.
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            Právo vznést námitku, tedy právo, z důvodů týkajících se Vaší
            konkrétní situace, kdykoli vznést námitku proti zpracování Vašich
            osobních údajů, které jsou zpracovávány na základě právních důvodů:
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            - zpracování je nezbytné pro plnění úkolu prováděného ve veřejném
            zájmu nebo při výkonu veřejné moci, kterým je správce pověřen, nebo
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            - zpracování je nezbytné pro účely oprávněných zájmů příslušného
            správce či třetí strany.
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            Vznesete-li námitku proti zpracování Vašich osobních údajů, Help to
            Hope nebude Vaše osobní údaje dále zpracovávat, pokud neprokáže
            závažné oprávněné důvody pro jejich zpracování, které převažují nad
            Vašimi zájmy nebo právy a svobodami, nebo pro určení, výkon nebo
            obhajobu právních nároků.
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            Námitku lze vznést i proti zpracování osobních údajů pro účely
            přímého marketingu nebo profilování. Pokud vznesete námitku proti
            zpracování pro účely přímého marketingu, nebudou již Vaše osobní
            údaje pro tyto účely zpracovávány.
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            Právo podat stížnost u dozorového úřadu, tedy u Úřadu na ochranu
            osobních údajů, na adrese Pplk. Sochora 27, 170 00 Praha 7,
            oficiální www: <a href="https://www.uoou.cz">https://www.uoou.cz</a>
            .
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            Při realizaci Vašich práv se obracejte na e-mail{' '}
            <a href="mailto:helptohope.info@gmail.com">
              helptohope.info@gmail.com
            </a>
            .
          </p>

          <h3 className="font-title text-grey text-3xl pt-4">7. Cookies</h3>
          <h3 className="font-title text-grey text-3xl pt-4">
            Poučení o zpracování osobních údajů prostřednictvím cookies
          </h3>

          <h4 className="font-title text-grey text-2xl pt-4">
            1. Poučení o zpracování osobních údajů prostřednictvím cookies
          </h4>
          <p className="font-body text-grey-dark text-base leading-relaxed">
            Projekt Help to Hope, jakožto provozovatel této webové stránky,
            využívá na těchto webových stránkách soubory cookie za následujícím
            účelem:
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            měření návštěvnosti webových stránek a vytváření statistik
            týkajících se návštěvnosti a chování návštěvníků na webových
            stránkách; fungování webových stránek; cílení reklamy a marketingu a
            jejich zobrazování uživatelům, kteří s tím vyjádří souhlas.
          </p>
          <p className="font-body text-grey-dark text-base leading-relaxed">
            Sběr cookies za účelem uvedeným v odst. 1 lze považovat za
            zpracování osobních údajů. Takové zpracování je možné na základě
            zákonného důvodu - oprávněného zájmu Správce a umožňuje ho čl. 6
            odst. 1 písm. f) nařízení Evropského parlamentu a Rady (EU) č.
            2016/679 o ochraně fyzických osob v souvislosti se zpracováním
            osobních údajů a o volném pohybu těchto údajů a o zrušení směrnice
            95/46/ES (obecné nařízení o ochraně osobních údajů) (dále jen
            „Nařízení“).
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            Webové stránky lze používat i v režimu, který neumožňuje sbírání
            údajů o chování návštěvníků webu – tento režim je možný buď nastavit
            v rámci nastavení prohlížeče, nebo je možné vznést proti takovému
            sběru na základě oprávněného zájmu Společných správců námitku dle
            čl. 21 Nařízení, zasláním na kontaktní adresu
            <a href="mailto:helptohope.info@gmail.com">
              helptohope.info@gmail.com
            </a>
            . Vaše námitka bude poté vyhodnocena bezodkladně, nejpozději do 30
            dní od obdržení. Cookies nezbytné pro funkčnost webu budou uchovány
            pouze po dobu nezbytně nutnou pro fungování webu.
          </p>
          <p className="font-body text-grey-dark text-base leading-relaxed">
            Vznesete-li námitku proti zpracování technických cookies nezbytných
            pro fungování webových stránek, nelze v takovém případě zaručit
            plnou funkčnost a kompatibilitu webových stránek.
          </p>
          <p className="font-body text-grey-dark text-base leading-relaxed">
            Cookies, které jsou sbírány za účelem měření návštěvnosti webu a
            vytváření statistik týkajících se návštěvnosti a chování návštěvníků
            na webu, jsou posuzovány v podobě hromadného celku a
            pseudonymizované podobě, která umožňuje identifikaci jednotlivce jen
            při vynaložení značného a odborného úsilí.
          </p>
          <p className="font-body text-grey-dark text-base leading-relaxed">
            Cookies pro cílení reklamy (marketingové cookies) jsou zpracovávány
            na základě vašeho souhlasu. Souhlas udělujete na dobu, která je
            uvedena dále u marketingových cookies. Souhlas se sbíráním údajů
            souborů cookies pro marketingové účely lze vzít kdykoliv zpět, a to
            pomocí změny nastavení příslušného internetového prohlížeče.
            Podrobnější informace o této možnosti naleznete na konci tohoto
            dokumentu.
          </p>
          <p className="font-body text-grey-dark text-base leading-relaxed">
            Cookies jsou ukládány po dobu, která je uvedena dále u jednotlivých
            typů cookies.
          </p>

          <ul className="font-body text-grey-dark text-base leading-relaxed">
            <span className="font-extrabold">
              Vezměte, prosím, na vědomí, že podle Nařízení máte právo:
            </span>
            <li className="list-disc list-inside pl-4">
              požadovat po Správci informaci, jaké vaše osobní údaje zpracovává,
              případně si vyžádat kopii,
            </li>
            <li className="list-disc list-inside pl-4">
              vyžádat si u Správce přístup k těmto údajům a tyto nechat
              aktualizovat nebo opravit, případně omezit zpracování,
            </li>
            <li className="list-disc list-inside pl-4">
              požadovat po Správci výmaz těchto osobních údajů – výmaz provedou,
              pokud výmaz není v rozporu s platnými právními předpisy a
              oprávněnými zájmy Správce,
            </li>
            <li className="list-disc list-inside pl-4">
              v případě zpracování osobních údajů na základě souhlasu žádat
              přenos těchto údajů,
            </li>
            <li className="list-disc list-inside pl-4">
              v případě pochybností o dodržování povinností souvisejících se
              zpracováním osobních údajů obrátit se na Správce nebo na Úřad pro
              ochranu osobních údajů, případně soud.
            </li>
          </ul>
          <p className="font-body text-grey-dark text-base leading-relaxed">
            Shromážděné cookies soubory jsou zpracovány dalšími zpracovateli:
            Google Inc., Facebook, Seznam.cz, Adform, Yottlyscript.com, Hotjar,
            MailChimp, SendGrid a externí dodavatelé IT služeb.
          </p>
          <h4 className="font-title text-grey text-2xl pt-4">
            2. Co jsou to soubory cookies
          </h4>
          <p className="font-body text-grey-dark text-base leading-relaxed">
            Jedná se o malé textové soubory, které ukládají informace ve vašem
            prohlížeči a běžně slouží k rozlišování jednotlivých uživatelů.
            Cookies si lze představit jako paměť webové stránky, která podle
            nich při další návštěvě uživatele stejného počítače pozná. Osoba
            uživatele však není na základě těchto informací identifikovatelná.
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            Cookies nezabírají na disku počítače téměř žádné místo, jejich
            velikost činí zpravidla několik kilobajtů. Cookies neslouží k
            získávání jakýchkoli citlivých osobních údajů.
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            Standardní webové prohlížeče podporují správu cookies. Pro
            detailnější informace prosím použijte nápovědu Vašeho prohlížeče.
            Pokud bude mít Váš prohlížeč použití cookies povoleno, budeme
            vycházet z toho, že souhlasíte s využíváním standardních cookies ze
            strany našich serverů.
          </p>

          <h4 className="font-title text-grey text-2xl pt-4">
            3. Jaké soubory cookie využíváme
          </h4>
          <p className="font-body text-grey-dark text-base leading-relaxed">
            Soubory cookie používané na našich stránkách lze z hlediska jejich
            životnosti rozdělit na dva základní typy. Krátkodobé, tzv. „session
            cookie“, které jsou pouze dočasné a zůstávají uloženy ve vašem
            prohlížeči pouze do té doby, než prohlížeč zavřete, a dlouhodobé,
            tzv. „persistent cookie“, které zůstávají uloženy ve vašem zařízení
            mnohem déle nebo dokud je ručně neodstraníte (doba ponechání souborů
            cookie ve vašem zařízení závisí na nastavení samotné cookie a
            nastavení vašeho prohlížeče).
          </p>

          <ul className="font-body text-grey-dark text-base">
            <span className="font-extrabold">
              Z hlediska funkce, kterou jednotlivé cookie plní, lze cookie
              rozdělit na:
            </span>
            <li className="list-disc list-inside pl-4">
              <span className="font-extrabold">konverzní</span>, které nám
              umožňují analyzovat výkon různých prodejních kanálů
            </li>
            <li className="list-disc list-inside pl-4">
              <span className="font-extrabold">trackingové (sledovací)</span>,
              které v kombinaci s konverzními pomáhají analyzovat výkon různých
              prodejních kanálů
            </li>
            <li className="list-disc list-inside pl-4">
              <span className="font-extrabold">marketingové</span>, které
              používáme pro personalizaci obsahu reklam a jejich správnému
              zacílení a remarketing (resp. retargeting)
            </li>
            <li className="list-disc list-inside pl-4">
              <span className="font-extrabold">analytické</span>, které nám
              pomáhají zvýšit uživatelské pohodlí našeho webu tím, že pochopíme,
              jak jej uživatelé používají
            </li>
            <li className="list-disc list-inside pl-4">
              <span className="font-extrabold">nezbytné</span>, které jsou
              důležité pro základní funkčnost webu
            </li>
          </ul>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            Některé soubory cookie mohou shromažďovat informace, které jsou
            následně využity třetími stranami a které např. přímo podporují naše
            reklamní aktivity (tzv. „cookie třetích stran“). Například informace
            o produktech kupovaných návštěvníky na našich stránkách mohou být
            zobrazeny reklamní agenturou, abychom mohli lépe uzpůsobit zobrazení
            internetových reklamních bannerů na Vámi zobrazovaných webových
            stránkách. Podle těchto údajů Vás však nelze identifikovat.
          </p>

          <ul className="font-body text-grey-dark text-base leading-relaxed">
            <span className="font-extrabold">
              Na našich stránkách jsou použity tyto cookies:
            </span>
            <li className="list-disc list-inside pl-4">
              Důležité cookies – uchovávány pouze po dobu nezbytně nutnou pro
              fungování webu
            </li>
            <li className="list-disc list-inside pl-4">
              Umožňují vám pohybovat se na webových stránkách a využívat všechny
              jejich funkce.
            </li>
            <li className="list-disc list-inside pl-4">
              Funkční cookies - Zaznamenávají informace o volbách, které jste
              provedli.
            </li>
            <li className="list-disc list-inside pl-4">
              Analytické cookies - Pomáhají zlepšit výkon webových stránek.
            </li>
            <li className="list-disc list-inside pl-4">Google Analytics</li>
            <li className="list-disc list-inside pl-4">
              Marketingové cookies - Používají se pro zobrazování relevantních a
              personalizovaných reklamních nabídek na sociálních sítích.
            </li>
            <li className="list-disc list-inside pl-4">Google Ads</li>
            <li className="list-disc list-inside pl-4">Facebook</li>
            <li className="list-disc list-inside pl-4">Sklik</li>
          </ul>

          <h4 className="font-title text-grey text-2xl pt-4">
            4. Jak nastavit správu cookies ve vašem zařízení
          </h4>
          <p className="font-body text-grey-dark text-base leading-relaxed">
            Vše je o nastavení vašeho internetového prohlížeče. Většina
            prohlížečů soubory cookie automaticky přijímá již ve výchozím
            nastavení. Soubory cookie lze pomocí vašeho webového prohlížeče
            odmítnout nebo nastavit užívání jen některých souborů cookie.
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            Informace o prohlížečích a o způsobu nastavení předvoleb pro soubory
            cookie můžete nalézt na následujících webových stránkách:
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            <a href="https://support.google.com/accounts/answer/61416?hl=cs">
              Chrome
            </a>
          </p>
          <p className="font-body text-grey-dark text-base leading-relaxed">
            <a href="https://www.mozilla.org/cs/privacy/websites/#cookies">
              Mozilla Firefox
            </a>
          </p>
          <p className="font-body text-grey-dark text-base leading-relaxed">
            <a href="https://privacy.microsoft.com/cs-cz/privacystatement">
              Internet Explorer{' '}
            </a>
          </p>
          <p className="font-body text-grey-dark text-base leading-relaxed">
            <a href="https://support.google.com/chrome/answer/2392709?visit_id=1-636270856459123937-2696746637&rd=1&co=GENIE.Platform%3DAndroid&oco=1">
              Android
            </a>
          </p>
          <p className="font-body text-grey-dark text-base leading-relaxed">
            <a href="https://support.apple.com/cs-cz/HT210675">Safari </a>
          </p>

          <h3 className="font-title text-grey text-3xl pt-4">
            8. Sběr provozních a jiných dat
          </h3>
          <p className="font-body text-grey-dark text-base leading-relaxed">
            Projekt Help to Hope nad rámec výše popsaných osobních údajů dále
            shromažďuje a zpracovává rovněž další údaje, na základě kterých není
            možné uživatele webové stránky a/nebo aplikace (ať už registrované
            a/nebo neregistrované) jakkoliv identifikovat (dále jen „ostatní
            data“).
          </p>

          <ul className="font-body text-grey-dark text-base leading-relaxed">
            Tato ostatní data slouží k zasílání notifikací na dané zařízení a
            usnadňují opravy chyb v kódu aplikace a/nebo webové stránky. Jedná
            se zejména o:
            <li className="list-inside pl-4">ID zařízení (UDID)</li>
            <li className="list-inside pl-4">FCM token</li>
            <li className="list-inside pl-4">datum a čas prvního přístupu</li>
            <li className="list-inside pl-4">
              datum a čas posledního přihlášení
            </li>
            <li className="list-inside pl-4">platforma (Android/iOS)</li>
            <li className="list-inside pl-4">model zařízení</li>
            <li className="list-inside pl-4">verze mobilní aplikace.</li>
          </ul>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            Dále sbíráme rovněž analytická data a informace o používání aplikace
            / webové stránky. Zde se jedná zejména o údaje:
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            vztahující se k četnosti navštívené určitá sekce, počtu „kliknutí“
            na určité tlačítko webové stránky / aplikace.
          </p>
          <p className="font-body text-grey-dark text-base leading-relaxed">
            Tato data jsou od počátku anonymní, slouží čistě k identifikaci
            potencionálních problémů a chyb v aplikaci (webové stránce) a jejímu
            zdokonalení pro pohodlnější a plynulejší uživatelské ovládání.
          </p>

          <p className="font-body text-grey-dark text-base leading-relaxed">
            Všechna tato ostatní data uchováváme po dobu neurčitou. Uživatel
            nemá možnost si tato data prohlédnout, ani nemá možnost tato data
            smazat. Pokud uživatel aplikaci odinstaluje a opět nainstaluje, jsou
            vygenerovány nové údaje.
          </p>
        </main>
      </Layout>
    </>
  );
}
