/**
 * Werkformulieren van de AI Value Architect.
 * Elk formulier is een lijst secties met velden. Veldsoorten:
 *   text · area · select (opts) · table (cols, rows of rowLabels, per kolom optioneel opts)
 * Antwoorden worden alleen in de browser van de gebruiker bewaard.
 */

const BLUEPRINT_PARTS = ['1. Waardevoorstel', '2. AI-oplossing', '3. Datastrategie', '4. Productie en beheer', '5. Risico en compliance', '6. Haalbaarheid'];

export const FORMS = [
  {
    id: 'brief', title: 'Alignment Brief', phase: 'Sense en Discover', color: '#6E44B8',
    intro: 'Eén pagina die zegt wat we willen bereiken, wie het draagt, wat binnen en buiten valt en wie aan tafel hoort, voordat er aan een oplossing wordt gewerkt. Vul hem in ter voorbereiding op de blueprint-werksessie.',
    sections: [
      { title: 'Startafspraak: scope en beslisrechten', guide: 'Beschrijf de uitkomst zonder de oplossing voor te schrijven. Benoem de drie rollen en maak de grenzen zichtbaar.', fields: [
        { id: 'uitkomst', type: 'area', label: 'De uitkomst, in gewone woorden', hint: '“Snellere, betrouwbare antwoorden” is een uitkomst; “bouw een chatbot” is een oplossing.', ph: 'Wat moet dit initiatief bereiken, voor wie en hoeveel?' },
        { id: 'champion', type: 'text', label: 'Champion: naam en rol', hint: 'De actieve pleitbezorger. Niet automatisch degene die beslist.' },
        { id: 'dm', type: 'text', label: 'Decision Maker: naam en rol', hint: 'Kan goedkeuren, voorwaarden stellen, pauzeren, bijsturen of stoppen.' },
        { id: 'va', type: 'text', label: 'Value Architect: naam en rol', hint: 'Faciliteert de afstemming. Verbetert het besluit, neemt het niet over.' },
        { id: 'grenzen', type: 'area', label: 'Grenzen', hint: 'Als de Champion of Decision Maker het oneens zou zijn met een regel, is het nog geen grens maar een aanname.', ph: 'Binnen:\nBuiten:\nNiet hier besloten:', rows: 4 },
      ] },
      { title: 'Wie zit er aan tafel', guide: 'Live: hun oordeel of commitment is nodig in het gesprek. Schriftelijk: hun inbreng of review kan vooraf of achteraf. Het doel is niet de meeste mensen, maar de juiste stemmen bij de juiste besluiten.', fields: [
        { id: 'tafel', type: 'table', label: 'Mensen en besluiten', cols: ['Wie', 'Relatie', 'Welk besluit of welke inbreng', 'Live of schriftelijk'], opts: { 1: ['Eigenaar', 'Levert input', 'Wordt geraakt', 'Faciliteert'], 3: ['Live in de sessie', 'Schriftelijk'] }, rows: 6 },
        { id: 'verborgen', type: 'area', label: 'Verborgen stemmen', hint: 'Wie staat niet op de lijst die je kreeg? Begin met: wie is eigenaar van de data of documenten die niemand claimt?' },
      ] },
      { title: 'Van signaal naar startpunt', guide: 'Hoor het signaal in hun woorden, lees het door een lens, bepaal wie het aan tafel trekt en leg het vast. Een signaal dat niets verandert, helpt de afstemming nog niet.', fields: [
        { id: 'signaal', type: 'area', label: 'Het sterkste signaal, letterlijk', hint: 'Hun woorden, niet de jouwe.' },
        { id: 'lens', type: 'select', label: 'De lens waardoor je het leest', opts: ['Werkwijze: hoe het werk nu gaat', 'Middelen: wat er is maar niet wordt gebruikt', 'Concurrentie: waar anderen sneller zijn', 'Opdracht: wat leiding of wetgeving vraagt'] },
        { id: 'omzetten', type: 'area', label: 'Wie trekt het aan tafel, en wat verandert het hier?', hint: 'Een plek aan tafel, een grens, een scherpere uitkomst of je startpunt.' },
        { id: 'vragen', type: 'area', label: 'Drie ontdekvragen', hint: 'Open vragen naar voorbeelden, frequentie, gevolgen, eigenaarschap en uitzonderingen. Minstens één moet je lezing kunnen weerleggen.', ph: '1.\n2.\n3.', rows: 4 },
        { id: 'inzichten', type: 'area', label: 'Inzichten: eerst jouw analyse, dan AI als toets', hint: 'Wat zag AI dat jij miste, en wat zag jij dat AI miste? Zet geen persoonsgegevens of vertrouwelijke gegevens in AI-tools.' },
        { id: 'startpunt', type: 'select', label: 'Startpunt in het blueprint', opts: BLUEPRINT_PARTS },
        { id: 'waarom', type: 'area', label: 'Waarom daar beginnen?', hint: 'Waar is de onzekerheid het grootst? Een startpunt is waar het ontwerp begint, niet wat je overslaat.' },
      ] },
    ],
  },
  {
    id: 'blueprint', title: 'Value Blueprint', phase: 'Design', color: '#00807E',
    intro: 'Eén document met zes onderdelen, gelezen in samenhang. Het waardevoorstel komt eerst, de haalbaarheid als laatste. Het eindigt met een onderbouwd besluit.',
    sections: [
      { title: '1. Waardevoorstel: het waarom', fields: [
        { id: 'probleem', type: 'area', label: 'Het probleem, in de woorden van de belanghebbenden' },
        { id: 'metrics', type: 'table', label: 'Succesmetrics (hooguit drie)', cols: ['Metric', 'Nu', 'Doel', 'Eigenaar'], rows: 3 },
      ] },
      { title: '2. AI-oplossing: het wat', fields: [
        { id: 'rol', type: 'select', label: 'Rol van AI', opts: ['Onderzoeker', 'Meedenker', 'Assistent', 'Agent'] },
        { id: 'patroon', type: 'select', label: 'Patroon', hint: 'Het kleinste dat kan werken.', opts: ['Prompting', 'RAG', 'Fine-tuning', 'Agents', 'Combinatie'] },
        { id: 'waarom-patroon', type: 'area', label: 'Waarom dit patroon, en welk bewijs zou je van gedachten doen veranderen?' },
        { id: 'moet', type: 'area', label: 'Wat versie 1 moet doen', hint: 'Elk ‘moet’ beweegt een metric uit onderdeel 1.' },
        { id: 'niet', type: 'area', label: 'Wat versie 1 nog niet doet' },
        { id: 'mens', type: 'area', label: 'Waar beslist de mens?', ph: 'Drempel:\nEscalatie:\nOverrule:', rows: 3 },
      ] },
      { title: '3. Datastrategie: de brandstof', fields: [
        { id: 'bronnen', type: 'table', label: 'Databronnen', cols: ['Bron', 'Waar staat het', 'Hoe vers', 'Toegang en persoonsgegevens', 'Eigenaar (naam)'], rows: 4 },
        { id: 'kwaliteit', type: 'area', label: 'De kwaliteitsgok', hint: 'Lees tien willekeurige records. Wat verwacht je te vinden?' },
        { id: 'grens', type: 'area', label: 'De datagrens voor versie 1', hint: 'Wat mag de oplossing gebruiken, wat niet, en wat is ‘goed genoeg’ als getal?' },
      ] },
      { title: '4. Productie en beheer: de weg naar productie', fields: [
        { id: 'belasting', type: 'area', label: 'Echte belasting', hint: 'Wat gebeurt er bij tien keer zoveel verkeer? Wat kost dat?' },
        { id: 'fallback', type: 'area', label: 'De fallback, in woorden die een gebruiker leest' },
        { id: 'nacht', type: 'text', label: 'Wie wordt om 3 uur ’s nachts gebeld?' },
        { id: 'uitval', type: 'area', label: 'Als de AI een uur uitvalt, wat gebeurt er dan?' },
        { id: 'vangnet', type: 'area', label: 'Vangnetten', ph: 'Versies en terugrollen:\nDagelijks meten:\nAudittrail:\nEerst klein testen:', rows: 4 },
      ] },
      { title: '5. Risico en compliance: de vangrails', fields: [
        { id: 'register', type: 'table', label: 'Risicoregister', cols: ['Risico', 'Soort', 'Aanpak', 'Eigenaar'], opts: { 1: ['Techniek', 'Business', 'Ethiek en mens'], 2: ['Accepteren', 'Beperken', 'Overdragen'] }, rows: 5 },
        { id: 'kop', type: 'area', label: 'De krantenkop-test', hint: 'Welke kop wil je nooit lezen, en welk deel van het ontwerp voorkomt hem?' },
        { id: 'bias', type: 'area', label: 'Bias, rechten op data en geldende regels', hint: 'Bijvoorbeeld de EU AI Act en de AVG.' },
      ] },
      { title: '6. Haalbaarheid: de opbrengst', fields: [
        { id: 'kosten', type: 'area', label: 'Totale kosten', ph: 'Bouw:\nInfrastructuur en tokens:\nTraining en verandering:\nBeheer:\nMensen die elders worden weggehaald:', rows: 5 },
        { id: 'scenario', type: 'table', label: 'Waarde in drie scenario’s', cols: ['Waarde', 'Belangrijkste aanname'], rowLabels: ['Voorzichtig', 'Verwacht', 'Optimistisch'] },
        { id: 'adoptie', type: 'area', label: 'Adoptie: wie moet anders gaan werken, en wat helpt daarbij?' },
      ] },
      { title: 'Het besluit', fields: [
        { id: 'besluit', type: 'select', label: 'Besluit', opts: ['Doorgaan', 'Doorgaan met voorwaarden', 'Bijsturen', 'Pauzeren', 'Stoppen'] },
        { id: 'onderbouwing', type: 'area', label: 'Onderbouwing, en de voorwaarden of wat eerst waar moet zijn' },
        { id: 'datum', type: 'text', label: 'Datum en Decision Maker' },
      ] },
    ],
  },
  {
    id: 'tracker', title: '90-dagen tracker', phase: 'Deliver', color: '#3A1D6E',
    intro: 'Het blueprint is het ontwerp, de tracker is de uitvoering. Open hem op de dag dat een initiatief ‘doorgaan’ krijgt.',
    sections: [
      { title: 'Fasen', guide: 'Een fase eindigt op een uitkomst, niet op een datum.', fields: [
        { id: 'fasen', type: 'table', label: 'Drie fasen', cols: ['Mijlpalen', 'Wat moet aan het eind waar zijn', 'Eigenaar'], rowLabels: ['Fundament', 'Ontwikkeling', 'Productie'] },
      ] },
      { title: 'Meetmomenten', guide: 'Elk meetmoment hoort bij een metric uit het waardevoorstel: zelfde getallen, zelfde namen.', fields: [
        { id: 'meet', type: 'table', label: 'Meetmomenten', cols: ['Wanneer', 'Metric uit het waardevoorstel', 'Doel', 'Resultaat'], rows: 4 },
        { id: 'snel', type: 'area', label: 'Snelle winst die je vroeg kunt boeken' },
        { id: 'vrij', type: 'text', label: 'Vrije capaciteit (zo’n 15%) voor waarde die je nog niet kunt benoemen' },
      ] },
      { title: 'Besluitenlog', guide: 'Een tripwire die afgaat, is het plan dat werkt. Een goede regel heeft een eigenaar, eerlijke kosten en wat het beschermt; nooit alleen ‘beter communiceren’.', fields: [
        { id: 'log', type: 'table', label: 'Besluiten', cols: ['Wat gebeurde', 'Besluit', 'Eigenaar', 'Kosten', 'Wat het beschermt', 'Koers'], opts: { 5: ['Volhouden', 'Bijsturen'] }, rows: 4 },
        { id: 'lessen', type: 'area', label: 'Lessen, nu ze nog vers zijn' },
      ] },
      { title: 'De laatste mijl', guide: 'Code af is nog niet klaar.', fields: [
        { id: 'poorten', type: 'table', label: 'Vier poorten', cols: ['Wat moet er klaar zijn', 'Eigenaar', 'Datum'], rowLabels: ['Technische gereedheid', 'Overdracht aan beheer', 'Gebruikers voorbereid', 'Communicatie bij livegang'] },
        { id: 'tekst', type: 'area', label: 'Wat zegt het systeem als het uitvalt of het niet zeker weet?' },
      ] },
      { title: 'Het verslag', guide: 'Laat het succes reizen: uitdaging, aanleiding, ontdekking, aanpak, bewijs (één getal, één periode) en vooruitzicht.', fields: [
        { id: 'verslag', type: 'area', label: 'Het verhaal in een paar zinnen', rows: 6 },
      ] },
    ],
  },
  {
    id: 'waarde', title: 'Werkblad waarde ontsluiten', phase: 'Voor elke fase', color: '#1F9E95',
    intro: 'Haal eerst waarde uit wat er al is, voordat er iets wordt gekocht of gebouwd. Neem één echte workflow mee door vier stappen: inventariseren, aanzetten, optimaliseren en centraliseren.',
    sections: [
      { title: 'Kader', fields: [
        { id: 'workflow', type: 'text', label: 'De workflow die je oppakt', hint: 'Iets echts en veelvoorkomends voor je team.' },
        { id: 'probleem', type: 'area', label: 'Het probleem vandaag', hint: 'Wat is traag, duur, wisselend of gaat mis?' },
        { id: 'metric', type: 'text', label: 'Hoe meet je de ontsloten waarde?' },
        { id: 'niveau', type: 'select', label: 'Niveau', opts: ['Individu', 'Team', 'ART', 'Organisatie'] },
      ] },
      { title: '1. Inventariseren: weet wat je al hebt', guide: 'Een middag, geen kwartaal. Kijk in licentie- en beheerconsoles, de datacatalogus en de cloudrekening.', fields: [
        { id: 'inv', type: 'table', label: 'Wat er al is', cols: ['Wat we al hebben', 'Onderbenut, duur of niet gedeeld', 'Eigenaar en regels'], rowLabels: ['Modellen', 'Data', 'Infrastructuur', 'Expertise', 'Kaders'] },
        { id: 'ongebruikt', type: 'area', label: 'Ongebruikte licenties en functies', hint: 'Met de kosten erbij als je die weet.' },
        { id: 'samenvatting', type: 'area', label: 'De verborgen waarde in één zin' },
      ] },
      { title: '2. Aanzetten: gebruik wat je al betaalt', fields: [
        { id: 'tool', type: 'text', label: 'Welke tool' },
        { id: 'beschikbaar', type: 'select', label: 'Wanneer is de functie beschikbaar?', opts: ['Nu: gebruiken', 'Binnen zo’n 3 maanden: kleine proef', 'Over 6 tot 12 maanden: wachten', 'Niet op de roadmap: eerst vragen, alleen bouwen als het kritiek is'] },
        { id: 'functie', type: 'area', label: 'De ene functie die je aanzet' },
        { id: 'herontwerp', type: 'select', label: 'Herontwerp of alleen sneller?', opts: ['Herontwerpt de workflow', 'Alleen sneller (blijf zoeken)'] },
        { id: 'hoe', type: 'area', label: 'Hoe verandert de workflow?' },
        { id: 'ritme', type: 'text', label: 'Vast moment om nieuwe functies te zoeken' },
      ] },
      { title: '3. Optimaliseren: meer waarde, betrouwbaarder', fields: [
        { id: 'efficient', type: 'area', label: 'Efficiëntie', ph: 'Juiste model per taak, strakkere prompts en context, hergebruik van antwoorden, de hele workflow automatiseren' },
        { id: 'kwaliteit', type: 'area', label: 'Kwaliteit en vertrouwen', ph: 'Steekproef tegen een bekende goede set, vangrails, drempels voor menselijke review, consistentie' },
        { id: 'drie', type: 'table', label: 'Drie metrics samen, nooit alleen kosten', cols: ['Nu', 'Doel', 'Hoe meten'], rowLabels: ['Kosten per uitkomst', 'Kwaliteit', 'Tijdwinst'] },
      ] },
      { title: '4. Centraliseren: één winst wordt ieders winst', fields: [
        { id: 'soort', type: 'select', label: 'Soort bouwsteen', opts: ['Prompt', 'Agent of assistent', 'Sjabloon of werkwijze', 'Standaard indeling', 'Anders'] },
        { id: 'plek', type: 'text', label: 'Waar staat het, en wie is eigenaar?', hint: 'Eén plek, één eigenaar met een naam.' },
        { id: 'beschrijving', type: 'area', label: 'Wat doet het, en wanneer gebruik je het?' },
        { id: 'verhaal', type: 'area', label: 'Het verhaal in businesstermen', hint: 'Tijd bespaard, kosten omlaag, risico kleiner.' },
      ] },
      { title: 'Jouw play', fields: [
        { id: 'play', type: 'area', label: 'De play in één alinea', rows: 5 },
        { id: 'status', type: 'select', label: 'Status', opts: ['Concept', 'Bezig', 'Vastgelegd en gedeeld'] },
        { id: 'review', type: 'text', label: 'Volgende review' },
      ] },
    ],
  },
];
