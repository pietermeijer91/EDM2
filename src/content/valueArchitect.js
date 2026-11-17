/**
 * Teksten voor de rolpagina AI Value Architect (AI-Native EDSN).
 * Gebaseerd op de training AI-Native Value Architect (Scaled Agile, Inc.), in eigen woorden vertaald naar EDSN.
 */

export const VA_INTRO = {
  three: [['Verstand van de business', 'zonder Business Owner te zijn'], ['AI-vaardig', 'zonder AI-ontwikkelaar te zijn'], ['Faciliterend', 'maar niet alléén faciliterend']],
  fit: 'Geen nieuwe functietitel, maar een rol: de natuurlijke volgende stap voor Scrum Masters, Team Coaches, Product Managers, architecten, RTE’s en SPC’s.',
};

/** Drie blinde vlekken waardoor AI-initiatieven stranden, en de verantwoordelijkheid die ze oplost. */
export const BLIND_SPOTS = [
  { title: 'De waardekloof', text: 'Er is flink geïnvesteerd in AI-platforms en licenties, maar ze worden nauwelijks gebruikt. Kosten zonder waarde, en groeiende scepsis.', fix: 'unlock' },
  { title: 'Het POC-kerkhof', text: 'Prototypes die indruk maken in de demo, maar nooit productie halen. AI wordt behandeld als los experiment in plaats van als kern van de business.', fix: 'facilitate' },
  { title: 'Hype tegenover realiteit', text: 'Trends en nieuwe modellen najagen in plaats van echte problemen oplossen. Versnippering, technische schuld en vermoeide teams.', fix: 'optimize' },
];
export const BLIND_SPOT_NOTE = 'Volgens onderzoek van RAND faalt meer dan 80% van de AI-projecten, twee keer zo vaak als andere IT-projecten. De belangrijkste oorzaak is niet de technologie, maar dat business en techniek iets anders bedoelen.';

/** Het verantwoordelijkhedenwiel: vijf verantwoordelijkheden. */
export const WHEEL = [
  {
    key: 'coach', title: 'AI-adoptie coachen', short: 'Coachen',
    icon: 'M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c0-4 4-6 8-6M17 14l2 2 4-4',
    what: 'Mensen en teams AI-vaardig maken, zodat de waarde niet afhangt van één persoon. Coachen, niet managen: je hebt meestal geen zeggenschap, dus invloed is je gereedschap.',
    how: ['Coach op de 7 AI-Native succesfactoren: verankerd in waarde, blijven leren, slim starten met AI, snel leren, context geven, AI dagelijks gebruiken, durven innoveren en verstandig borgen', 'Haal mensen op hun niveau op: gebruiker, bouwer of beslisser', 'Stel vragen in plaats van antwoorden te geven, en geef zelf het voorbeeld', 'Kies de juiste aanpak: training als het om vaardigheid gaat, leiderschapsprogramma als strategie of kaders ontbreken'],
    out: 'Groeiende AI-vaardigheid in teams en bij leiders',
  },
  {
    key: 'unlock', title: 'Waarde halen uit bestaande AI-tools en workflows', short: 'Waarde ontsluiten',
    icon: 'M4 7h16v13H4zM9 7V4h6v3M12 11v5M9.5 13.5h5',
    what: 'Eerst halen wat er al ligt, voordat er iets nieuws wordt gekocht of gebouwd. Het grootste deel van de mogelijkheden van tools die we al betalen, blijft vaak ongebruikt.',
    how: ['Inventariseren: modellen, data, infrastructuur, expertise en kaders', 'Aanzetten: functies die we al betalen maar nooit gebruiken', 'Optimaliseren: kosten per uitkomst, kwaliteit en tijdwinst samen meten', 'Centraliseren: wat werkt wordt een gedeelde, beheerde bouwsteen', 'Herontwerp de workflow, versnel niet alleen één stap'],
    out: 'Snelle winst zonder nieuwe uitgaven, en een gedeelde bibliotheek met prompts en agents',
  },
  {
    key: 'bridge', title: 'Business en technologie verbinden', short: 'Verbinden',
    icon: 'M3 12h6M15 12h6M9 12a3 3 0 0 0 6 0 3 3 0 0 0-6 0M6 8v8M18 8v8',
    what: 'Zorgen dat de juiste mensen het eens zijn over de bedoeling, nog voordat er iets wordt gebouwd. Signalen tellen zwaarder dan verzoeken: een verzoek is iemands gok naar de oplossing, een signaal is het bewijs zelf.',
    how: ['Leg de uitkomst, de kern-driehoek en de grenzen vast in een Alignment Brief', 'Koppel mensen aan besluiten: LIVE in de ruimte of ASYNC geraadpleegd, en zoek de verborgen stemmen', 'Lees signalen door vier lenzen: werkwijze, onbenutte middelen, concurrentie en opdrachten van leiding of wetgeving', 'Eerst menselijke analyse, dan een AI-partner om die te toetsen'],
    out: 'Alignment Brief en een gekozen startpunt voor het ontwerp',
  },
  {
    key: 'facilitate', title: 'AI-oplossingen faciliteren', short: 'Faciliteren',
    icon: 'M4 5h16v10H4zM8 19h8M12 15v4M8 9h3M8 12h6',
    what: 'Een initiatief van idee naar een onderbouwd besluit brengen met het Value Blueprint: één document, zes onderdelen, gelezen in samenhang. Waar de onderdelen botsen, sneuvelen initiatieven.',
    how: ['Waardevoorstel, AI-oplossing, datastrategie, productie, risico en compliance, levensvatbaarheid', 'Maak elk antwoord specifiek, belegd en toetsbaar: een getal in plaats van een datum, een naam in plaats van een afdeling', 'Kies de eenvoudigste oplossing die geloofwaardig werkt, en schrijf op wat versie 1 níet doet', 'Ontwerp waar mensen beslissen: drempel, escalatie en overrule'],
    out: 'Een Value Blueprint en een besluit: doorgaan, met voorwaarden, bijsturen, pauzeren of stoppen',
  },
  {
    key: 'optimize', title: 'Uitkomsten optimaliseren', short: 'Optimaliseren',
    icon: 'M4 18l5-5 4 3 7-8M15 8h5v5',
    what: 'Het blueprint omzetten in een levend plan, en snel en principieel reageren als de werkelijkheid anders loopt. Het plan voorkomt de werkelijkheid niet, maar maakt je reactie verdedigbaar.',
    how: ['Fasen: fundament, ontwikkeling, productie. Een fase eindigt op een uitkomst, niet op een datum', 'Elk meetmoment hoort bij een afgesproken metric', 'Een besluitenlog: wat gebeurde, besluit, eigenaar, kosten, wat het beschermt', 'Vier poorten naar productie: techniek, overdracht aan beheer, gebruikers, communicatie'],
    out: 'Een 90-dagenplan, een besluitenlog en een eerlijk verslag van de resultaten',
  },
];

/** De levenscyclus van een AI-initiatief en de documenten die erbij horen. */
export const LIFECYCLE = [
  { key: 'sense', title: 'Sense', nl: 'Signalen opvangen', doc: 'Alignment Brief', pipe: ['Discover', 'pipeline'] },
  { key: 'discover', title: 'Discover', nl: 'Verkennen en startpunt kiezen', doc: 'Alignment Brief', pipe: ['Discover', 'pipeline'] },
  { key: 'design', title: 'Design', nl: 'Het Value Blueprint', doc: 'Blueprint en besluit', pipe: ['Specify en Embedded Policies', 'aipol'] },
  { key: 'deliver', title: 'Deliver', nl: 'Leveren en volgen', doc: '90-dagen tracker en verslag', pipe: ['Build, Validate, Release en Insights and Evidence', 'aiev'] },
];
export const DOC_CHAIN = ['Alignment Brief', 'Value Blueprint', 'Besluit', '90-dagen tracker', 'Verslag'];

export const LEVELS = [
  ['Organisatie', 'Portfolio, kaders en adoptie op schaal'],
  ['ART', 'Afstemming op de strategie, gerichte training'],
  ['Team', 'Gedeelde werkwijzen, collega’s die elkaar coachen'],
  ['Individu', 'Eén-op-één coachen, zelf het voorbeeld geven'],
];

export const TRIAD = [
  ['Champion', 'De actieve pleitbezorger die voor het initiatief strijdt.'],
  ['Decision Maker', 'Zegt ja of nee op middelen en technische randvoorwaarden.'],
  ['Value Architect', 'Schept de voorwaarden voor waarde. Verbetert het besluit, maar neemt het nooit over.'],
];
export const PARTNERS = [
  ['Tactisch vierkant', 'PM is eigenaar van de uitkomst, SA van de architectuur, RTE van de flow, PD van de mensen. De Value Architect verbindt.', 't4k'],
  ['AI Governance and Ethics', 'Voor de kaders: verantwoord AI-gebruik, risico en kosten.', 'governance'],
  ['Engineering Enablement', 'Voor tooling, platform en gedeelde bouwstenen.', 'ee'],
  ['LACE', 'Voor leren en coaching op schaal, en communities van Value Architects.', 'f5'],
];

export const TOOLKIT = [
  ['Alignment Brief', 'Eén pagina: uitkomst, kern-driehoek, grenzen (wel, niet, nog niet besloten), wie aan tafel en het startpunt.'],
  ['Value Blueprint', 'Eén document met zes onderdelen, van waardevoorstel tot levensvatbaarheid, met een besluit aan het eind.'],
  ['90-dagen tracker', 'Fasen, meetmomenten, besluitenlog en de vier poorten naar productie.'],
  ['Value Maximization Worksheet', 'Eén workflow door inventariseren, aanzetten, optimaliseren en centraliseren.'],
  ['Eigen roadmap', 'Per verantwoordelijkheid één volgende stap, en één eerste stap die deze week in de agenda staat.'],
];
export const RISK_COUNCIL = {
  title: 'Voorbeeld van een AI-oplossing: de AI Risk Council',
  text: 'Een multi-agent oplossing: drie kritische agents bekijken hetzelfde voorstel tegelijk vanuit hun eigen invalshoek, en een supervisor brengt hun oordelen samen. Onenigheid is bewust: daar zit de waarde. Een werkende AI is nog geen geslaagde AI.',
  agents: [['Techniek', 'Werkt de technologie zoals verwacht?'], ['Business', 'Levert het echt waarde op?'], ['Ethiek en mens', 'Doet het geen schade aan mensen of reputatie?']],
};

export const STORY = [['Uitdaging', 'Het kapotte ‘ervoor’, in hun woorden'], ['Aanleiding', 'Waarom nu?'], ['Ontdekking', 'Het inzicht dat het plan veranderde'], ['Aanpak', 'Wat we bouwden en bewust weglieten'], ['Bewijs', 'Eén getal, één periode'], ['Vooruitzicht', 'Wat dit mogelijk maakt']];

export const AT_EDSN = ['Wie vult de rol in: vanuit Scrum Masters en Team Coaches, het LACE of het CIO Office?', 'Per ART een Value Architect, of een gedeeld team dat over meerdere ART’s werkt?', 'Waar staan de werkformulieren, en welk initiatief pakken we als eerste op?'];
