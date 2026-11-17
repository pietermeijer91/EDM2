/**
 * De AI Solution Lifecycle op de pagina van de AI Value Architect (AI-Native EDSN).
 * Gebaseerd op de training AI-Native Value Architect (Scaled Agile, Inc.), in eigen woorden vertaald naar EDSN.
 */

/** Vier fasen. `form` verwijst naar het werkformulier, `pipe` naar de pagina in de AI Innovation Pipeline. */
export const PHASES = [
  {
    key: 'sense', title: 'Sense', nl: 'Signalen opvangen',
    what: 'Achter elke vraag zit een signaal. Een verzoek (“bouw een chatbot”) is iemands gok naar de oplossing; het signaal (“ik ben het mikpunt van elke klacht”) is het bewijs zelf. Wie alleen het verzoek hoort, bouwt het verkeerde.',
    moves: ['Schrijf het sterkste signaal op in hun woorden, niet de jouwe', 'Lees het door één van vier lenzen: hoe het werk nu gaat, wat er al is maar niet wordt gebruikt, waar anderen sneller zijn, wat leiding of wetgeving vraagt', 'Bepaal wie het signaal aan tafel trekt, en wat het verandert aan de uitkomst of de grenzen', 'De luidste stem is informatie, zelden het hele signaal'],
    out: 'Eerste versie van de Alignment Brief', form: 'brief', pipe: ['Discover', 'pipeline'],
  },
  {
    key: 'discover', title: 'Discover', nl: 'Verkennen en startpunt kiezen',
    what: 'Overeenstemming over de bedoeling, nog voordat er iets wordt ontworpen. Knikkende hoofden zijn geen akkoord; een opgeschreven uitkomst, rolverdeling en grenzen wel.',
    moves: ['Beschrijf de uitkomst zonder de oplossing voor te schrijven', 'Leg de kern-driehoek vast: Champion, Decision Maker en Value Architect', 'Maak de grenzen zichtbaar: binnen, buiten en niet hier besloten', 'Koppel mensen aan besluiten: live in de werksessie of vooraf schriftelijk, en zoek de verborgen stemmen', 'Stel drie open ontdekvragen. Minstens één moet je eigen lezing kunnen weerleggen', 'Eerst je eigen analyse, dan AI als toets', 'Kies het startpunt in het blueprint: waar de onzekerheid het grootst is'],
    out: 'Complete Alignment Brief met een gekozen startpunt', form: 'brief', pipe: ['Discover', 'pipeline'],
  },
  {
    key: 'design', title: 'Design', nl: 'Het Value Blueprint',
    what: 'In een werksessie vult de groep het Value Blueprint: één document met zes onderdelen, gelezen in samenhang. Het eindigt met een onderbouwd besluit. Zo blijft een initiatief uit het POC-kerkhof.',
    moves: ['Waardevoorstel eerst, haalbaarheid als laatste; de middelste vier volgen de energie in de groep', 'Elk antwoord specifiek, belegd en toetsbaar: een getal in plaats van een bijvoeglijk naamwoord, een naam in plaats van een afdeling', 'Zoek de spanning tussen onderdelen: daar sneuvelen initiatieven', 'Pas het document aan zodra de groep iets leert. Een blueprint dat nooit verandert, was geen werkdocument'],
    out: 'Value Blueprint en een besluit', form: 'blueprint', pipe: ['Specify en Embedded Policies', 'aipol'],
  },
  {
    key: 'deliver', title: 'Deliver', nl: 'Leveren en de werkelijkheid volgen',
    what: 'Het blueprint is het ontwerp, de tracker is de uitvoering: twee kanten van één initiatief. Het plan voorkomt de werkelijkheid niet, maar maakt je reactie snel, principieel en verdedigbaar.',
    moves: ['Drie fasen: fundament, ontwikkeling, productie. Een fase eindigt op een uitkomst, niet op een datum', 'Elk meetmoment hoort bij een metric uit het waardevoorstel: zelfde getallen, zelfde namen', 'Houd zo’n 15% capaciteit vrij voor waarde die je nu nog niet kunt benoemen', 'Een besluitenlog voor elke verrassing: eigenaar, kosten en wat het beschermt', 'Vier poorten naar productie, elk met een eigenaar en een datum', 'Sluit af met een eerlijk verslag dat het succes laat reizen'],
    out: '90-dagen tracker en een eerlijk verslag', form: 'tracker', pipe: ['Build, Validate, Release en Insights and Evidence', 'aiev'],
  },
];

export const CHAIN = [['Alignment Brief', 'brief'], ['Value Blueprint', 'blueprint'], ['Besluit', null], ['90-dagen tracker', 'tracker'], ['Verslag', null]];

/** Zes onderdelen van het Value Blueprint. */
export const BLUEPRINT = [
  { key: 'value', n: 1, title: 'Waardevoorstel', tag: 'het waarom', short: 'Waarde',
    q: 'Welk probleem lossen we op, voor wie, en hoe meten we succes?',
    moves: ['Beschrijf het probleem in de woorden van de belanghebbenden', 'Kies hooguit drie metrics, met de huidige waarde en het doel', 'Elke metric krijgt een eigenaar met een naam'],
    test: 'Kun je het succes meten zonder de oplossing te noemen?' },
  { key: 'solution', n: 2, title: 'AI-oplossing', tag: 'het wat', short: 'AI-oplossing',
    q: 'Wat is de eenvoudigste oplossing die geloofwaardig werkt?',
    moves: ['Kies het kleinste patroon dat kan werken: prompting, RAG, fine-tuning of agents', 'Bepaal de rol van AI: onderzoeker, meedenker, assistent of agent', 'Schrijf op wat versie 1 moet doen en wat nog niet. Elk ‘moet’ beweegt een metric', 'Ontwerp waar mensen beslissen: drempel, escalatie en overrule'],
    test: 'Starten met een mens in de lus is een startpositie, geen eindpunt.' },
  { key: 'data', n: 3, title: 'Datastrategie', tag: 'de brandstof', short: 'Data',
    q: 'Waar komt de data vandaan, hoe goed is die, en wie is eigenaar?',
    moves: ['Per bron: waar staat het, hoe vers is het, wie heeft toegang en welke persoonsgegevens zitten erin', 'Een eigenaar is een naam, geen afdeling', 'Doe de kwaliteitsgok: lees tien willekeurige records', '‘Goed genoeg’ is een besluit met een getal. Trek de grens voor versie 1'],
    test: 'AI versterkt alles wat in je data zit, ook wat je liever niet had.' },
  { key: 'ops', n: 4, title: 'Productie en beheer', tag: 'de weg naar productie', short: 'Productie',
    q: 'Werkt het ook op de dag dat het misgaat?',
    moves: ['Reken met echte belasting: wat gebeurt er bij tien keer zoveel verkeer?', 'Schrijf de fallback in woorden die een gebruiker kan lezen. Wat het niet kan onderbouwen, krijgt ‘mens nodig’', 'Wie wordt om 3 uur ’s nachts gebeld? Een naam, geen ticket', 'Vangnetten: versies en terugrollen, dagelijks meten op snelheid, kosten en juistheid, een audittrail vanaf dag één, eerst klein testen'],
    test: 'Als de AI een uur uitvalt, gaat het werk dan gewoon door zoals vandaag?' },
  { key: 'risk', n: 5, title: 'Risico en compliance', tag: 'de vangrails', short: 'Risico',
    q: 'Hoe komen we tot een veilig ja?',
    moves: ['Risico is ontwerpinput, geen veto: werk naar een veilig ja in plaats van een traag nee', 'Elk risico krijgt een soort (techniek, business, ethiek en mens), een aanpak (accepteren, beperken, overdragen) en een eigenaar', 'Zoek de risico’s die niemand opschreef', 'Ga uit van bias en test vroeg. Regels zoals de EU AI Act en de AVG zijn marktrijpheid, geen papierwerk'],
    test: 'Krantenkop-test: welke kop wil je nooit lezen, en welk onderdeel van het ontwerp voorkomt hem?' },
  { key: 'viability', n: 6, title: 'Haalbaarheid', tag: 'de opbrengst', short: 'Haalbaarheid',
    q: 'Wat kost het echt, wat levert het op, en gaan mensen het gebruiken?',
    moves: ['Totale kosten, niet alleen bouwen: infrastructuur, tokens, training, verandering, beheer, en de mensen die elders worden weggehaald', 'Waarde in drie scenario’s: voorzichtig, verwacht en optimistisch. Waarde groeit, het is geen schakelaar', 'Adoptie: wie moet anders gaan werken, en wat helpt hen daarbij?'],
    test: '“Te duur” vergeleken met wat? Zet de kosten af tegen de omvang van het probleem.' },
];

export const BLUEPRINT_RULES = [
  ['Eén document, geen zes', 'De spanning tussen onderdelen is waar initiatieven sneuvelen. Lees ze dus naast elkaar.'],
  ['Eerst waarde, als laatste haalbaarheid', 'De middelste vier volgen de energie in de groep. Het startpunt uit de Alignment Brief bepaalt waar je begint.'],
  ['Een levend document', 'Pas het aan zodra de groep iets leert. Het blueprint is af als het besluit verdedigbaar is.'],
];

/** Vijf uitkomsten van het besluit. */
export const VERDICT = [
  ['Doorgaan', 'Het blueprint houdt stand. Open de 90-dagen tracker.', '#1F9E95'],
  ['Doorgaan met voorwaarden', 'Ja, mits. Benoem de voorwaarden en wie ze controleert.', '#00807E'],
  ['Bijsturen', 'Ander probleem of andere aanpak. Terug naar het blueprint.', '#8C6BD1'],
  ['Pauzeren', 'Nog niet. Benoem wat eerst waar moet zijn.', '#6E44B8'],
  ['Stoppen', 'Een respectabel besluit: het bespaart geld en geloofwaardigheid.', '#3A1D6E'],
];

/** De 90-dagen tracker in vier delen. */
export const TRACKER = {
  phases: [['Fundament', 'Data, toegang en team staan. De eerste meting is gedaan.'], ['Ontwikkeling', 'Versie 1 werkt met echte gebruikers in een kleine groep.'], ['Productie', 'Live, overgedragen aan beheer en gemeten op de afgesproken metrics.']],
  parts: [
    ['Fasen', 'Per fase de mijlpalen en wat aan het eind waar moet zijn. Jij bepaalt de lengte; de uitkomst sluit de fase af.'],
    ['Meetmomenten', 'Elk meetmoment hoort bij een metric uit het waardevoorstel. Een meetmoment zonder metric is toneel.'],
    ['Besluitenlog', 'Per verrassing: wat gebeurde, het besluit, de eigenaar, de kosten, wat het beschermt, en bijsturen of volhouden.'],
    ['De laatste mijl', 'Vier poorten, elk met een eigenaar en een datum. Code af is nog niet klaar.'],
  ],
  gates: ['Technische gereedheid', 'Overdracht aan beheer', 'Gebruikers voorbereid', 'Communicatie bij livegang'],
};

/** Wie doet wat in de cyclus: 2 = aan zet, 1 = draagt bij, 0 = niet direct. */
export const WHO = [
  ['Champion', 'vaak de PM', 'Brengt het signaal in, strijdt voor de uitkomst en is eigenaar van het waardevoorstel.', [2, 2, 1, 1]],
  ['Decision Maker', 'Business Owner of budgethouder', 'Beslist over middelen en randvoorwaarden, en neemt het besluit.', [0, 1, 2, 1]],
  ['Value Architect', '', 'Faciliteert de hele cyclus en bewaakt de samenhang. Verbetert het besluit, neemt het niet over.', [2, 2, 2, 2]],
  ['System Architect', '', 'AI-oplossing, data, productie en beheer. Bewaakt de technische poort.', [0, 1, 2, 1]],
  ['Teams', '', 'Werken het blueprint uit, bouwen en leveren het bewijs bij elk meetmoment.', [0, 1, 1, 2]],
  ['RTE', '', 'De tracker, het besluitenlog en de overdracht aan beheer.', [0, 0, 1, 2]],
  ['People Developer', '', 'Adoptie en gebruikers voorbereiden: wie moet anders gaan werken?', [0, 0, 1, 2]],
];
