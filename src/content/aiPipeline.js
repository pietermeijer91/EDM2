/**
 * Teksten voor de AI Innovation Pipeline (AI-Native EDSN).
 * Gebaseerd op AI-Native SAFe (Scaled Agile, Inc.), vertaald en toegepast op de EDSN-context.
 * Pas de teksten hier aan; de opmaak staat in components/pages/Ai*.jsx.
 */

/** De vijf stappen van de levenscyclus: van geplande uitkomst naar gerealiseerde waarde. */
export const STAGES = [
  {
    key: 'discover', title: 'Discover', nl: 'Ontdekken',
    text: 'Scherpt de intentie achter het werk aan: welk probleem lossen we op en welke uitkomst moet het opleveren? Toetsen we een hypothese met een experiment, of leveren we direct waarde met een feature?',
    learn: 'Hypothese en aannames scherp krijgen.', value: 'Probleem en beoogde uitkomst helder.',
  },
  {
    key: 'specify', title: 'Specify', nl: 'Specificeren',
    text: 'Werkt die intentie uit tot specificaties, het ‘wat en hoe’, plus de context die het team en de AI-agents gebruiken.',
    learn: 'Lichte specificatie van de proef.', value: 'Specificatie en context voor team en agents.',
  },
  {
    key: 'build', title: 'Build', nl: 'Bouwen',
    text: 'Maakt wat de specificatie beschrijft: van een lichte proef voor een leeroutput tot een geïntegreerde, releaseklare kandidaat voor een waarde-output.',
    learn: 'Een snelle, lichte probe.', value: 'Een geïntegreerde, releaseklare kandidaat.',
  },
  {
    key: 'validate', title: 'Validate', nl: 'Valideren',
    text: 'Toetst de output aan het doel. Bij een prototype controleren we de aannames en hypotheses die de aanleiding waren; bij een feature bepalen we of die bruikbaar, passend en klaar voor release is.',
    learn: 'Klopten de aannames en hypotheses?', value: 'Bruikbaar, passend en klaar voor release?',
  },
  {
    key: 'release', title: 'Release', nl: 'Releasen',
    text: 'Brengt features naar productie en in handen van gebruikers. Echt gebruik wordt waarde, en de telemetrie wordt leren. Experimenten en prototypes eindigen meestal bij Validate, maar met bijvoorbeeld A/B-testen kan ook een experiment live gaan.',
    learn: 'Meestal klaar na Validate (behalve bij A/B-testen).', value: 'Live bij gebruikers: waarde en telemetrie.',
  },
];

/** De vier componenten (lagen) van de pipeline. `key` is de pagina in het Delivery Model. */
export const COMPONENTS = [
  { key: 'aiwf', title: 'AI-Empowered Workflows', nl: 'AI-ondersteunde workflows', text: 'Mensen en agents werken samen terwijl ze outputs door de levenscyclus brengen.' },
  { key: 'aipol', title: 'Embedded Policies', nl: 'Ingebouwde kaders', text: 'Grenzen, goedkeuringen en stopregels die het werk veilig houden en zorgen dat mensen én agents verantwoording afleggen.' },
  { key: 'aiev', title: 'Insights and Evidence', nl: 'Inzichten en bewijs', text: 'Het audittrail van besluiten, acties en data, en wat dat ons leert over het product én over het proces dat het bouwt.' },
  { key: 'aiplat', title: 'Shared Platforms', nl: 'Gedeelde platforms', text: 'De gemeenschappelijke technische basis die workflows, kaders, inzichten, bewijs en gecureerde data verbindt en schaalbaar maakt.' },
];

export const INTERPLAY = 'De vier componenten werken niet los van elkaar; juist hun samenspel levert de waarde. Een workflow put uit de intentie, specificaties, context en gecureerde data die hij nodig heeft. Hij werkt samen met naburige workflows en agents, binnen de kaders die erop van toepassing zijn, en het bewijs dat hij oplevert komt terecht op een vaste plek waar het het volgende besluit kan voeden. Het gedeelde platform maakt die verbindingen mogelijk. Zonder gedeelde basis bouwt elk team zijn eigen koppelingen: een kluwen van dubbele, onbeheerste en breekbare paden.';

/** Twee soorten output. */
export const OUTPUTS = {
  learn: { title: 'Leren', items: ['Experiment', 'Prototype'], text: 'Bedoeld om snel te leren: toetsen of iets gewenst, levensvatbaar, haalbaar en duurzaam is.' },
  value: { title: 'Waarde', items: ['Feature', 'Enabler'], text: 'Bedoeld om klant- en businesswaarde te leveren, zodra er genoeg vertrouwen is.' },
};

export const SET_BASED = [
  'AI-Native teams beginnen met de vraag hoe ze de beoogde uitkomst het best bereiken.',
  'Ze bedenken opties en kiezen experimenten en prototypes om snel te toetsen of iets gewenst, levensvatbaar, haalbaar en duurzaam is.',
  'Na elke golf feedback beoordelen ze of er genoeg vertrouwen is om te committeren aan features en enablers. Zijn er nog gaten, dan volgt een gerichte nieuwe leergolf.',
  'Is het vertrouwen er, dan worden de juiste features en enablers gebouwd en gereleased om de waarde te verzilveren.',
];

export const KANBAN = {
  intro: 'Omdat de pipeline de hele levenscyclus beslaat, is het een rijke basis voor visueel management. Teams en ART’s maken er vaak een Kanban-systeem van met de stappen van de levenscyclus als kolommen. Gecombineerd met zinvolle flowmetrics geeft dat de feedback om SAFe-principe 6 waar te maken: laat waarde stromen zonder onderbrekingen.',
  columns: ['Funnel', 'Discover', 'Specify', 'Build', 'Validate', 'Release', 'Klaar'],
  metrics: [['Flowtijd', 'Hoe lang doet een item over de hele levenscyclus?'], ['Flowsnelheid', 'Hoeveel items ronden we per periode af?'], ['Flowbelasting', 'Hoeveel werk staat er tegelijk open (WIP)?'], ['Flowefficiëntie', 'Hoeveel van de doorlooptijd wordt er echt aan gewerkt?']],
};

/* ---------------- AI-Empowered Workflows ---------------- */
export const WORKFLOWS = {
  why: 'Een gemeenschappelijke levenscyclus geeft een ART veel voordelen: teams zijn op elkaar afgestemd, spreken dezelfde taal over het werk en kunnen op ART-niveau de flow optimaliseren. Eén gedetailleerde, verplichte werkwijze daaronder doet het omgekeerde: generieke processen die slecht passen bij de context smoren innovatie. Teams halen het enorme potentieel van AI pas naar boven als ze ruimte hebben om hun eigen werkwijze te verkennen en te verfijnen.',
  what: 'De basisbouwsteen van het werk van een AI-Native team is een AI-ondersteunde workflow: een reeks stappen om een doel te bereiken. Dat kan zo eenvoudig zijn als de dagstart-check van de dashboards bij de eerste koffie, of zo complex als het CI/CD-proces dat wijzigingen integreert, test, verpakt en uitrolt. Op elk moment gebruiken teamleden verschillende workflows voor elke stap: discover, specify, build, validate en release.',
  example: {
    title: 'Voorbeeld: workflows rond het ontdekken van een feature',
    stages: ['Discover', 'Specify'],
    flows: [['Marktonderzoek', 6, 12], ['Concurrentieonderzoek', 20, 2], ['Empathie-interviews', 38, 25], ['Haalbaarheidsreview', 64, 20], ['Aannames in kaart', 2, 80], ['Hypothese formuleren', 26, 68], ['Gedragsanalyse', 46, 86], ['Feasibility spikes', 70, 74]],
    nested: ['Voorbereiden', 'Faciliteren', 'Analyseren'],
    text: 'Eerst helpen workflows voor hypotheses, aannames en marktonderzoek om het ontdekwerk af te bakenen. Daarna helpen andere workflows om te verkennen, ideeën te bedenken en de bevindingen samen te vatten. Workflows kunnen ook andere workflows bevatten, zoals de end-to-end workflow voor empathie-interviews: een keten die samen een groter doel dient.',
  },
  power: 'Zodra AI in een workflow zit, wordt die veel krachtiger: minder handwerk, hogere kwaliteit, meer creativiteit en diepere inzichten bij elke stap.',
  qualities: [
    ['Gegrond', 'Grounded', 'Put uit de intentie, specificatie, context en gecureerde data die de activiteit nodig heeft.'],
    ['Verbonden', 'Connected', 'Werkt samen met andere agents, workflows en systemen op gedeelde platforms.'],
    ['Beheerst', 'Controlled', 'Werkt binnen de kaders die erop van toepassing zijn.'],
    ['Controleerbaar', 'Auditable', 'Levert genoeg inzicht en bewijs om aan audit- en reviewkaders te voldoen.'],
    ['Eigenaar', 'Owned', 'Heeft een aangewezen eigenaar die verantwoordelijk is voor onderhoud en doorontwikkeling.'],
  ],
  qualitiesNote: 'Beheersbaarheid en controleerbaarheid zijn voorwaarden voor verantwoord gebruik. Hoe goed een workflow gegrond en verbonden is, bepaalt vooral hoeveel hij oplevert.',
  okr: {
    title: 'Voorbeeld: voorbereiding van de PI Outcome Planning',
    owner: 'RTE',
    agent: 'OKR-agent',
    grounded: ['Visie van de ART', 'Outcome-gedreven roadmap', 'ART- en PI-uitkomsten', 'Status van key results', 'Intentie, specificaties en context'],
    controlled: 'OKR-richtlijnen van de organisatie',
    steps: [['PI-uitkomsten opstellen', 'ART-leiding en Business Owners schrijven conceptuitkomsten; de agent brengt kennis en telemetrie in om de nulmeting te begrijpen.'], ['Dashboards voor key results inrichten', 'De agent koppelt de tools en helpt de RTE met live monitoring, zodat teams data bij de hand hebben.'], ['Teams informeren', 'De agent meldt dat de concept-OKR’s klaarstaan en zet ze vóór het event in de planningstools.']],
    text: 'De workflow is van de RTE. De OKR-agent kent de visie, roadmap, uitkomsten en de actuele stand van de key results, en werkt binnen de OKR-richtlijnen van de organisatie. Zo helpt hij bij elke stap, en blijft de meting van key results controleerbaar.',
  },
  table: [
    ['Discover', 'Klant- en marktonderzoek; aannames en hypotheses formuleren; concurrentieanalyse', 'Empathie-interviews en customer journeys'],
    ['Specify', 'Functionele specificatie; review van de specificatie; ontwerpspecificatie', 'Threat modeling en analyse van randgevallen'],
    ['Build', 'Codegeneratie, continuous integration en testgeneratie', 'Kennisbank bijwerken'],
    ['Validate', 'Geautomatiseerd testen en AI-evals; klantdemo’s; hypothesereview; compliance', 'Toegankelijkheidsreview'],
    ['Release', 'Gecontroleerde en canary-releases; monitoring en telemetrie-analyse', 'Oefenen met terugdraaien en herstel'],
  ],
  tableNote: 'Elke organisatie heeft per stap workflows die ze altijd uitvoert, en workflows die ze zou willen uitvoeren als er tijd was. Juist die tweede groep komt binnen bereik met AI.',
  formalize: [
    'Elke organisatie heeft eigenlijk twee versies van elk proces: het beschreven proces en hoe het werk écht gebeurt. Mensen overbruggen dat gat met oordeelsvermogen en stilzwijgende kennis.',
    'AI-agents kunnen dat niet. Bij een vaag of onbeschreven proces gaan ze improviseren, en improviseren op machinesnelheid leidt tot inconsistentie, onduidelijke verantwoordelijkheid en snel opschalende fouten.',
    'Het proces expliciet, beheerst en controleerbaar maken dicht dat gat. Actief eigenaarschap houdt het levend.',
    'De investering is klein vergeleken met wat herhaald gebruik oplevert. Zonder beheersing en controle kun je AI geen echt werk toevertrouwen; zonder AI versnelt innovatie niet genoeg om te winnen.',
  ],
};

/* ---------------- Embedded Policies ---------------- */
export const POLICIES = {
  intro: 'Elke workflow werkt binnen de kaders die erop van toepassing zijn. Die kaders horen bij de intentie, specificaties en context van een product.',
  kinds: [['Systeemkwaliteiten', 'Eigenschappen die een oplossing of workflow moet hebben, zoals performance en security.'], ['Standaarden', 'Waar het aan moet voldoen, van encryptieprotocollen tot wettelijke verplichtingen.'], ['Checks', 'Controles die gehaald moeten worden, zoals een Definition of Done of een goedkeuringsmoment.']],
  builtIn: 'Door de kaders in de pipeline in te bouwen, gelden voor het werk én voor het resultaat dezelfde regels. In plaats van achteraf te inspecteren bij een poort, zit compliance in elke stap van elke workflow. Een kader dat eenmaal machineleesbaar is vastgelegd, geldt voor elke workflow. Zulke vangrails zijn geen rem op snelheid, maar de voorwaarde ervoor: ze maken het mogelijk agents serieus werk toe te vertrouwen.',
  loop: {
    text: 'Bereikt een agent of mens de grens van zijn bevoegdheid, dan schaalt het kader op naar iemand met meer zeggenschap. Dat kan op twee manieren. Hoe ingrijpender of onomkeerbaarder een besluit, hoe meer het om een mens ín de lus vraagt; hoe routinematiger en herstelbaarder, hoe meer het kan draaien met een mens óp de lus.',
    hitl: ['Human-in-the-loop', 'Een mens zit in het besluitpad: het werk pauzeert tot hij of zij goedkeurt.'],
    hotl: ['Human-on-the-loop', 'Het werk loopt binnen vaste grenzen door; een mens houdt toezicht en kan ingrijpen.'],
    examples: [['Productie-data verwijderen', 1], ['Release naar alle gebruikers', 0.8], ['Wijziging in een contract of tarief', 0.75], ['Canary-release naar 5% van de gebruikers', 0.45], ['Testgevallen genereren', 0.15], ['Dagelijkse dashboard-samenvatting', 0.05]],
  },
  agents: {
    title: 'Bevoegdheid van agents: toegekend, begrensd en verdiend',
    text: 'Agents zijn nieuwe actoren die controles nodig hebben die mensen nooit nodig hadden. Elke agent werkt onder een eigen, geverifieerde identiteit die bepaalt wat hij mag, welke tools hij mag gebruiken, hoeveel hij mag uitgeven en wanneer zijn toegang eindigt. Een agent begint met de kleinste bevoegdheid die nodig is; bewezen betrouwbaarheid rechtvaardigt uitbreiding, en fouten beperken of beëindigen de bevoegdheid. Een mens blijft op de lus, en de stopregels zijn duidelijk: pauzeren, terugvallen of terugdraaien naar een veilige toestand. Voor producten met AI reiken die grenzen tot in productie.',
    ladder: [['Start', 'Kleinste bevoegdheid die nodig is'], ['Bewezen', 'Meer scope na aantoonbaar betrouwbaar werk'], ['Vertrouwd', 'Ruimere bevoegdheid, mens op de lus'], ['Bij fouten', 'Scope beperken of intrekken']],
    stop: ['Pauzeren', 'Terugvallen', 'Terugdraaien'],
  },
};

/* ---------------- Insights and Evidence ---------------- */
export const EVIDENCE = {
  intro: 'Bewijs is het audittrail van wat mensen en agents doen terwijl ze werk door de pipeline brengen of de producten gebruiken die eruit komen. Workflows gebruiken bewijs om hun werk te gronden en leveren zelf weer nieuw bewijs op. Zo is het werk vanuit elk perspectief controleerbaar.',
  types: [['Werkwijze', 'Model, prompt, tools en de versie van de gebruikte data'], ['Kwaliteit', 'Uitkomsten van AI-evals en geautomatiseerde checks'], ['Besluiten', 'Welke keuzes mensen en agents maakten, en waarom'], ['Experimenten', 'Welke hypotheses zijn getoetst en wat de uitkomst was'], ['Productie', 'Operationele telemetrie en gebruikersgedrag']],
  trust: 'Vertrouwen en bewijs zijn onlosmakelijk verbonden. Niet alleen gedrag kunnen volgen, maar ook snel de oorzaak vinden en bijsturen: dat maakt het verantwoord nemen van risico mogelijk, en dat is de kern van innovatie met AI.',
  story: {
    title: 'Voorbeeld: een AI-assistent die proefgebruikers terugwint',
    steps: [['Experiment', 'Lokaal experiment met een assistent die gebruikers helpt die afhaken tijdens een proefperiode.'], ['Bewijs', 'Sterke testresultaten en een oplossing voor één bekend probleem: het team besluit er een feature van te maken.'], ['Beperkte release', 'Om risico te beheersen eerst live voor een kleine groep nieuwe gebruikers.'], ['Signaal', 'In week één keren meer gebruikers terug, maar stijgen ook de supportvragen.'], ['Bijsturen', 'Het team vindt snel de oorzaak, verbetert de assistent en rolt hem uit naar iedereen.']],
  },
  insight: 'Is bewijs het verslag van wat er gebeurde, dan is inzicht de waarde die we eruit halen: een oorzaak vinden, een hypothese bevestigen of weerleggen, of een knelpunt in de flow blootleggen. Elk inzicht verbetert de volgende keuze. Inzichten stromen terug naar de intentie en context van de volgende output, en laten de ART zien hoe de pipeline zelf beter kan.',
};

/* ---------------- Shared Platforms ---------------- */
export const PLATFORMS = {
  intro: 'Gedeelde platforms zijn het ‘control plane’: ze beheren, configureren en coördineren hoe het werk gebeurt. Ze bouwen gedeelde capabilities die waarde ontsluiten en versterken, voor AI-Native teams, ART’s en het portfolio.',
  actors: ['Business Owners', 'Product Management', 'System Architect', 'RTE', 'AI-Native team', 'AI-Native team', 'Portfolio-leiding'],
  functions: [['Verbinden', 'Teams, ART’s, portfolio-leiding en agents met de workflows die hen ondersteunen.'], ['Kaders borgen', 'Zorgen dat workflows onder de juiste ingebouwde kaders vallen.'], ['Routeren', 'Werk van de ene workflow naar de volgende brengen, mét context.'], ['Verrijken', 'De juiste inzichten beschikbaar maken bij elke stap.'], ['Vastleggen', 'Stappen en besluiten bewaren als bewijs voor later.']],
  levels: { text: 'Een platform werkt op meerdere niveaus: dezelfde capability kan een persoon, een team, een ART of het hele portfolio dienen. Bewezen workflows, agents en kaders stromen naar beneden voor consistentie; lokale aanpassingen die breder waardevol blijken, stromen omhoog en worden onderdeel van de gedeelde basis.', items: ['Portfolio', 'ART', 'Team', 'Persoon'] },
  sources: 'Teams gebruiken workflows en agents uit verschillende bronnen. Sommige zijn gedeeld en worden door de organisatie onderhouden, zoals agents van een designpraktijk of standaard audit- en reviewworkflows van governance-teams. Daarnaast bouwen teams hun eigen workflows en agents.',
  contract: { give: ['Voldoet aan gemeenschappelijke technische standaarden', 'Biedt de interfaces om met de rest van het platform te praten'], get: ['Authenticatie', 'Messaging', 'Evaluatie', 'Delivery', 'Herstel', 'Goedgekeurde toegang tot modellen, data en context'] },
  context: 'Agents hebben geen stilzwijgende kennis. Daarom reist de context mee met het werk: de intentie, de actuele versie en de besluiten en het bewijs tot nu toe. Zo hoeft niemand te stoppen om te reconstrueren wat er eerder gebeurde.',
  scale: 'Gedeelde platforms schalen innovatie. De consistentie laat een grote organisatie snel bewegen zonder grip te verliezen; de lokale vrijheid is de bron van verbetering en nieuwe ideeën.',
};

/* ---------------- Onderzoek: DORA 2025 ---------------- */
export const DORA = {
  source: 'DORA, State of AI-assisted Software Development 2025 (Google Cloud)',
  url: 'https://services.google.com/fh/files/misc/2025_state_of_ai_assisted_software_development.pdf',
  intro: 'AI is een versterker: het maakt sterke organisaties sterker en maakt zwakke plekken zichtbaar groter. Wat AI oplevert, hangt vooral af van het systeem eromheen. Precies dat systeem beschrijven de vier lagen van de pipeline.',
  stats: [['90%', 'gebruikt AI in het werk'], ['80%+', 'ervaart meer productiviteit'], ['30%', 'heeft weinig of geen vertrouwen in AI-output'], ['↑ ↑', 'meer doorvoer, maar ook meer instabiliteit']],
  capabilities: [
    ['Helder AI-beleid', 'Iedereen weet wat mag, wat wordt verwacht en welke tools zijn toegestaan.', 'Embedded Policies', 'aipol'],
    ['Gezond data-ecosysteem', 'Interne data is goed, toegankelijk en eenduidig.', 'Shared Platforms', 'aiplat'],
    ['Data toegankelijk voor AI', 'AI-tools kunnen interne informatie als context gebruiken: workflows zijn gegrond.', 'AI-Empowered Workflows', 'aiwf'],
    ['Sterk versiebeheer', 'Vaak committen en vaak terugdraaien als het nodig is.', 'Insights and Evidence', 'aiev'],
    ['Werken in kleine stappen', 'Kleine wijzigingen, kleine releases en korte taken.', 'Continuous Flow', 'cflow'],
    ['Gebruikersgerichtheid', 'Waarde voor de eindgebruiker staat centraal. Zonder deze focus heeft AI zelfs een negatief effect op teamprestaties.', 'Outcome-Driven Development', 'f2'],
    ['Goede interne platforms', 'Een platform als product, met ontwikkelaars als klant. Bij een slecht platform levert AI vrijwel niets op.', 'Shared Platforms', 'aiplat'],
  ],
  vsm: 'Zonder zicht op de hele waardestroom verdwijnt de winst van AI in knelpunten verderop. Is code-review het knelpunt, zet AI dan in op betere reviews, niet op méér code.',
};
