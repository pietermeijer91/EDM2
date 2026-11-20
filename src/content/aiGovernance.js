/**
 * Pagina AI Governance en Ethiek (AI-Native EDSN).
 * Gebaseerd op het SAFe-artikel ‘AI Governance and Ethics’ (Scaled Agile, Inc.), in eigen woorden toegepast op EDSN.
 */

export const GOV_INTRO = 'Meer AI-gebruik en de onvoorspelbaarheid van generatieve AI brengen risico’s waar bestaande controles niet voor zijn ontworpen. Leiders zetten heldere vangrails, geven zelf het goede voorbeeld en volgen de uitkomsten. Zonder dat dreigen juridische risico’s, verspilling en verlies van vertrouwen.';
export const GOV_OWNER = 'Portfolio Leadership is, samen met het PMO of VMO, verantwoordelijk dat AI-Native ART’s en teams op AI-snelheid kunnen werken, binnen de juridische, financiële en ethische grenzen.';

/** Vier pijlers. Elke pijler: wat, waarom, maatregelen en waar AI helpt. */
export const PILLARS = [
  {
    key: 'spend', title: 'AI-uitgaven beheersen', short: 'Uitgaven', color: '#6E44B8',
    icon: 'M12 3v18M16.5 7.5c0-1.7-2-3-4.5-3s-4.5 1.3-4.5 3 2 2.6 4.5 3 4.5 1.3 4.5 3-2 3-4.5 3-4.5-1.3-4.5-3',
    wat: 'Alle uitgaven aan wat AI voortbrengt, opgeteld over het portfolio: ontwikkeling, infrastructuur, licenties, tokens en verbruikskosten van modellen.',
    waarom: 'Bij betalen naar verbruik groeien de kosten mee met de adoptie, vaak sneller dan welke prognose ook. Wat in een pilot bijna niets kost, wordt na opschalen een flinke post. En omdat de groei over veel teams en tools tegelijk verspreid is, ziet niemand het tot het totaal binnenkomt. Het risico zit niet bij één team, maar in het totaal.',
    doen: ['Volg hoe snel het token- en modelverbruik over het hele portfolio groeit, zodat je pieken ziet vóór ze een budgetprobleem worden', 'Zorg voor zicht op AI-gebruik buiten de goedgekeurde tools: schaduw-AI groeit ongemerkt', 'Stel limieten en budgetalerts in, zowel voor de tokens bij het bouwen als voor de functies van het product na livegang', 'Reken de kosten toe aan een team, product of waardestroom, zodat er een eigenaar is', 'Geef het LACE en de AI Value Architects een actieve rol in bewust gebruik'],
    ai: ['Slimme routering: eenvoudige vragen naar goedkopere modellen', 'Gebruiksanalyse laat ongebruikte functies zien die weg kunnen', 'Kostenmodellen schatten het verbruik op productieschaal, nog vóór livegang', 'Realtime dashboards laten per team zien waar het verbruik zit'],
  },
  {
    key: 'responsible', title: 'Verantwoorde AI borgen', short: 'Verantwoord', color: '#00807E',
    icon: 'M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6zM8.5 12l2.5 2.5 4.5-5',
    wat: 'AI ethisch, transparant en volgens de regels bouwen en beheren, met aandacht voor menselijke waarden, eerlijkheid, veiligheid en verantwoording. Elk AI-systeem is betrouwbaar, uitlegbaar en mensgericht.',
    waarom: 'Boetes voorkomen is maar een deel. Het gaat vooral om vertrouwen: AI neemt vooroordelen over uit de trainingsdata, kan dingen verzinnen en kan gevoelige data lekken. Verantwoorde AI laat zien dat innovatie niet ten koste gaat van mensen of veiligheid.',
    doen: ['Leg vast wat verantwoord gebruik in de praktijk betekent en neem het op in de Definition of Done en in Sense and Respond', 'Houd een licht risicoregister bij per AI-toepassing en loop het regelmatig door', 'Beleg wie coacht op verantwoorde AI, bijvoorbeeld de AI Value Architect samen met security', 'Vraag menselijke review voor besluiten boven een afgesproken risico- of impactdrempel', 'Bouw compliance-checks in de bestaande portfolio-reviews in, niet als apart juridisch spoor, en betrek juristen en compliance vroeg'],
    ai: ['Automatische checks op vooroordelen, datalekken en beleidsovertredingen in de bestaande reviewstappen', 'AI legt de onderbouwing van besluiten vast terwijl ze worden genomen: een audittrail zonder extra werk', 'Signalering van beleidsdrift over het portfolio, eerder dan een periodieke audit', 'Conceptbewijs voor audits, gevalideerd door een mens'],
  },
  {
    key: 'agents', title: 'Agentgedrag bewaken', short: 'Agents', color: '#3A1D6E',
    icon: 'M6 8h12v10H6zM9 12h.01M15 12h.01M12 8V4M4 13H2M22 13h-2',
    wat: 'AI gaat van voorstellen doen naar zelf handelen: tools aanroepen, systemen benaderen, opdrachten uitvoeren en besluiten nemen. Toezicht betekent zicht op elke stap in de workflow, niet alleen op de uitkomst.',
    waarom: 'Als veel teams autonome agents inzetten, gaat de snelheid van AI voorbij aan menselijk toezicht. Vaste regels alleen zijn niet genoeg, omdat agentgedrag onvoorspelbaar varieert. Kleine afwijkingen, zoals eindeloze lussen of stille compliance-fouten, kunnen zich via gedeelde platforms en API’s snel opstapelen.',
    doen: ['Elke agent heeft vóór livegang een vastgelegde scope en bevoegdheden, zichtbaar voor het hele portfolio', 'Log de acties en besluiten van agents, niet alleen hun output, zodat je kunt terugspelen wat er gebeurde', 'Laat ART’s escalatiedrempels vastleggen: waar eindigt de autonomie van de agent en neemt een mens het over?', 'Breng risico’s uit agentgedrag van ART-niveau naar een vaste governance-review op portfolioniveau'],
    ai: ['Observability-tools loggen tool-aanroepen en promptketens, zodat de beslislogica zichtbaar wordt', 'Beleidschecks, gedragsbaselines en anomaliedetectie markeren onverwacht gedrag en sturen het naar een mens', 'Visualisaties van de beslisketen maken een review sneller dan zoeken in ruwe logs'],
  },
  {
    key: 'risk', title: 'AI-risico beheersen én benutten', short: 'Risico', color: '#1F9E95',
    icon: 'M4 19l5-6 4 3 7-9M15 7h5v5',
    wat: 'Beheersen betekent risico’s beperken; benutten betekent onzekerheid bewust inzetten voor een voorsprong. Denk aan verkeerde investeringen, afhankelijkheid van één leverancier en keuzes over persoonsgegevens. De mens houdt grip op impactvolle keuzes.',
    waarom: 'AI is waarschijnlijkheid, geen zekerheid. Wie alle risico wil uitsluiten, smoort het experimenteren en duwt teams naar ongeautoriseerd gebruik. Wie niets regelt, ziet fouten zich ongemerkt door geautomatiseerde workflows verspreiden. Heldere grenzen laten teams binnen de kaders experimenteren in plaats van eromheen.',
    doen: ['Een risicoregister dat de impact in getallen uitdrukt, zodat je snel ziet welke experimenten kansrijk zijn', 'Een centrale bibliotheek met evaluatiecases: testdatasets, testprompts en randgevallen. Elke nieuwe toepassing is daardoor sneller en vollediger te toetsen', 'Technische flexibiliteit om goedkopere of betere modellen in te wisselen, tegen afhankelijkheid van één leverancier', 'Gestandaardiseerde, automatische risicotests voor alle AI-initiatieven', 'Menselijke goedkeuring voor kritieke besluiten, en risicoreviews in het ritme van de portfolio-governance'],
    ai: ['Risicoscores bepalen welke situaties menselijke review nodig hebben', 'AI test de vangrails en risiconiveaus die mensen hebben bepaald, en vindt zwakke plekken', 'AI vat samen wat teams bouwen en welke tools ze gebruiken, zodat het totale risico veel sneller in beeld is dan door het handmatig te verzamelen'],
  },
];

/** Drie kenmerken van verantwoorde AI. */
export const RESPONSIBLE = [
  ['Betrouwbaar', 'Doet wat het belooft, binnen de afgesproken kwaliteit. Risico’s komen vroeg op tafel via een licht risicoregister.'],
  ['Uitlegbaar', 'Je kunt laten zien welke data, filters en context een besluit hebben gevormd. Besluiten zijn herleidbaar en toetsbaar.'],
  ['Mensgericht', 'Hoe groter de impact, hoe meer menselijk toezicht. Bewustzijn zit in de training en coaching die er al is.'],
];

/** Drie veelgebruikte kaders: verschillend doel, ze vervangen elkaar niet. */
export const REGS = [
  ['EU AI Act', 'Wet', 'Verplicht voor wie AI op de Europese markt brengt of gebruikt, met forse boetes.', 'Deelt AI-toepassingen in naar risico en verbiedt bepaalde toepassingen.', 'De maximumsnelheid waar je je aan moet houden'],
  ['NIST AI RMF', 'Raamwerk', 'Vrijwillig, maar in de VS gezien als de norm voor zorgvuldigheid.', 'Risico over de hele levenscyclus: besturen, in kaart brengen, meten en beheersen.', 'Het lesboek dat je leert veilig te rijden'],
  ['ISO/IEC 42001', 'Norm', 'Vrijwillig, te certificeren door een externe partij.', 'Processen, beleid en documentatie die een AI-managementsysteem auditbaar maken.', 'Het rijbewijs dat laat zien dat je geslaagd bent'],
];
export const REGS_NOTE = 'Controleer altijd de actuele stand voordat je op een specifieke regel stuurt: data en details veranderen. Voor EDSN geldt daarnaast de AVG voor alle persoonsgegevens.';

/** Toezicht op agents in drie lagen, van vast naar menselijk. */
export const LAYERS = [
  ['Vaste regels', 'Eerste verdedigingslinie, waar het kan.', 'Een harde regel blokkeert direct dat een coding agent een kernbestand voor beveiliging wijzigt.'],
  ['AI-detectie', 'Voor gedrag dat twijfelachtig is of verschuift.', 'Een tweede model markeert de agent voor review, omdat zijn wijziging een eindeloze lus kan veroorzaken in gekoppelde onderdelen.'],
  ['Menselijk oordeel', 'Voor besluiten met grote impact.', 'Een bouwer bekijkt de melding, ziet het lek, pauzeert de agent, past hem aan en voorkomt zo een privacylek.'],
];

/** Het fundament: ethiek. */
export const ETHICS = {
  wat: 'Ethiek gaat over de waarden waar we voor staan, los van wat de wet vraagt. Governance zorgt voor de praktische handhaving; ethiek is het kompas waar regels ontbreken.',
  vraag: ['De wet vraagt:', 'Mag dit?', 'Ethiek vraagt:', 'Respecteert dit mensen, of misbruikt het hen?'],
  principles: [['Verantwoording', 'Er is altijd een mens die verantwoordelijk is.'], ['Eerlijkheid', 'Geen groepen benadelen of uitsluiten.'], ['Vertrouwen', 'Doen wat we zeggen, en laten zien hoe.'], ['Menselijke autonomie', 'AI versterkt wat mensen kunnen, en maakt hen niet afhankelijk.'], ['Transparantie', 'Duidelijk hoe een geautomatiseerd besluit tot stand komt.'], ['Milieu-impact', 'Ook het energieverbruik van AI telt mee.']],
  doen: [['Denk het ergste uit', 'Bedenk worstcasescenario’s, zoals sollicitanten die door een algoritme worden weggefilterd of groepen die ontbreken in de feedbackdata, en ontwerp ertegen.'], ['Benoem je waarden', 'Leg AI-waarden expliciet vast en communiceer ze, bijvoorbeeld: “Wij laten AI zich nooit voordoen als mens.”'], ['Maak ‘moeten we dit wel willen?’ veilig', 'Teams moeten zich veilig voelen om die vraag te stellen, ook als het werk al loopt.'], ['Pre-mortem', 'Business Owners stellen bij nieuwe producten de vraag: wat is het ergste misbruik, en hoe ontwerpen we daartegen?']],
};

export const SPEED = 'Als besluiten, output en risico’s op AI-snelheid veranderen, worden handmatige, periodieke reviews een knelpunt. Governance op AI-snelheid is continu, geautomatiseerd en zit in de workflows en producten zelf. Dat vraagt betrouwbare data, en dashboards en samenvattingen die de vier pijlers vertalen naar acties.';

export const GOV_WHO = [
  ['Portfolio Leadership en PMO/VMO', 'Eindverantwoordelijk voor de kaders, de risicohouding en de governance-review.'],
  ['LACE en AI Value Architects', 'Coachen op bewust en verantwoord gebruik, helpen limieten en drempels in te richten.'],
  ['ART’s en teams', 'Leggen scope, bevoegdheden en escalatiedrempels van hun agents vast, en loggen wat agents doen.'],
  ['Business Owners', 'Doen pre-mortems en wegen kans en risico bij nieuwe producten.'],
  ['Security, privacy en compliance', 'Leveren kaders en toetsing, vroeg in het investeringsbesluit.'],
];

export const GOV_EDSN = ['Wie vervult bij EDSN de rol van PMO/VMO voor AI-governance: het CIO Office, het LACE of beide?', 'Welke AI-waarden leggen we als EDSN expliciet vast?', 'Waar loggen we wat agents doen, en wanneer is de vaste governance-review op portfolioniveau?'];
