import { STAGES, WORKFLOWS } from '../content/aiPipeline.js';

/**
 * Bouwt alle gegevens die de componenten tonen: teksten van de pagina's,
 * kleuren, de Big Picture-data en de handlers voor knoppen.
 *
 * Teksten aanpassen? Zoek op de sleutel van de pagina (bijv. `rte:` of `t4k:`).
 *  - I.<sleutel>  = [titel, samenvatting, ...]
 *  - C.<sleutel>  = { g: groep, x: secties, k: kernpunten, e: "Bij EDSN", r: gerelateerd }
 * `self` is de App-component (state, props en setState).
 */
export function buildView(self) {

    const p = self.props;
    const aiLocked = !(p.aiOpen ?? false);
    const mode = aiLocked ? 'core' : (self.state.mode ?? p.startMode ?? 'core');
    const ai = mode === 'ai';
    const orange = p.orange ?? '#F39200', green = p.green ?? '#95C11F';
    // Core: EDSN blauw + groen · AI-Native: paars
    const navy = ai ? (p.aiDeep ?? '#3A1D6E') : (p.navy ?? '#1B2A5C');
    const blue = ai ? (p.aiPrimary ?? '#6E44B8') : (p.blue ?? '#0072BC');
    const cyan = ai ? (p.aiSecondary ?? '#A47FE0') : (p.cyan ?? '#00A6D6');
    const tintA = ai ? '#E7DDF7' : '#E2F1D0';
    const tintB = ai ? '#F1EBFB' : '#E3F3FA';
    const tintC = ai ? '#DCCDF4' : '#D3EEC4';
    const tintD = ai ? '#F3EEFB' : '#EAF5EE';
    const L = (c, a) => (ai ? a : c);
    const shadeA = ai ? '#C6B2EA' : '#B5D894';
    const shadeB = ai ? '#D6C8F1' : '#B4DAEC';
    const shadeC = ai ? '#B9A3E3' : '#A9D58E';
    const labelOpacity = p.labelOpacity ?? 0.7;

    const t = {
      title: L('Basis EDSN', 'AI-Native EDSN'),
      pfLabel: L('SOM', 'PWK'),
      eeSub: L('tooling · pipelines · standaarden · kennisdeling', 'tooling · pipelines · AI-assistenten · kennisdeling'),
      org: L('Lean Enterprise', 'AI-Native Organization'),
      pfOutcomes: L('Strategic Themes', 'Portfolio Outcomes'),
      art: L('Agile Release Train (ART)', 'AI-Native ART'),
      artOutcomes: L('PI Objectives', 'ART Outcomes'),
      intent: L('Vision, Roadmap en Context', 'Intent, Specifications, and Context'),
      teams: L('Agile Teams', 'AI-Native Teams'),
      teamOutcomes: L('Team Objectives', 'Team Outcomes'),
      architects: L('Scrum Masters / Team Coaches', 'AI Value Architects'),
      architectsSub: L('(SM / TC)', '(SMs / TCs / SPCs / …)'),
      pipeline: L('Continuous Delivery Pipeline', 'AI Innovation Pipeline'),
      tag2: L('Stories', 'Prototypes'),
      tag3: L('Spikes', 'Experiments'),
      pi: L('PI Planning', 'PI Outcome Planning'),
      sense: L('Inspect and Adapt', 'Sense and Respond'),
      piOutcomes: L('PI Objectives', 'PI Outcomes')
    };

    const stepNames = ai
      ? ['Discover', 'Specify', 'Build', 'Validate', 'Release']
      : ['Continuous Exploration', 'Continuous Integration', 'Continuous Deployment', 'Release on Demand'];
    const play = (p.animate ?? true) ? 'running' : 'paused';
    const bpPlay = (p.animate ?? true) && !self.state.bpStopped ? 'running' : 'paused';
    const tagW = ai ? 130 : 178;
    const steps = stepNames.map((label, i) => {
      const x = Math.round(560 + i * (840 / (stepNames.length - 1)));
      return { label,
        postStyle: 'position:absolute;left:' + (x - 2) + 'px;top:728px;width:4px;height:66px;border-radius:2px;background:rgba(255,255,255,.95);box-shadow:0 0 0 1px rgba(27,42,92,.15);pointer-events:none',
        tagStyle: 'left:' + (x - tagW / 2) + 'px;top:700px;width:' + tagW + 'px;flex-direction:row;justify-content:center;gap:5px;padding:4px 8px;background:#FFFFFF;border-radius:14px;border:1.5px solid #D5DBE5;font-size:13px;font-weight:700;white-space:nowrap' };
    });
    const chipDefs = ai
      ? [['Feature', 'n'], ['Prototype', 'c'], ['Experiment', 'b'], ['Enabler', 'o'], ['Feature', 'n'], ['Experiment', 'b'], ['Prototype', 'c'], ['Enabler', 'o']]
      : [['Feature', 'n'], ['Story', 'b'], ['Enabler', 'o'], ['Story', 'b'], ['Feature', 'n'], ['Spike', 'c'], ['Story', 'b'], ['Enabler', 'o']];
    const chipCol = { n: [navy, '#FFFFFF'], b: [blue, '#FFFFFF'], c: [cyan, ai ? '#1B1030' : '#04232E'], o: [orange, '#2B1A00'] };
    const chips = chipDefs.map(([label, k], i) => ({ label,
      style: 'left:492px;top:750px;padding:5px 10px;border-radius:3px;font-size:12px;font-weight:700;background:' + chipCol[k][0] + ';color:' + chipCol[k][1] + ';box-shadow:0 4px 0 rgba(0,0,0,.22);animation-delay:' + (-i * 2.25) + 's;animation-play-state:' + bpPlay }));

    const I = {
      org: [L('Lean Enterprise', 'AI-Native Organization'), L('De organisatie als geheel die met Lean-Agile principes waarde levert: strategie, portfolio en uitvoering hangen samen.', 'Een organisatie waarin mensen en AI-agents samen waarde creëren. AI zit niet aan de zijkant, maar is verweven in strategie, portfolio en de dagelijkse ontwikkeling.'), 'Het fundament voor de samenwerking tussen CIO Office, business en IT.'],
      portfolio: ['Portfolio', 'Het portfolio-niveau verbindt strategie met uitvoering: welke value streams financieren we en welke epics hebben prioriteit?', 'Lean Portfolio Management voor de EDSN-ketenvoorzieningen.'],
      leadership: ['Portfolio Leadership', 'Leiders die strategie, investeringen en governance van het portfolio bepalen en de koers bewaken.', null],
      outcomes: [t.pfOutcomes, L('Strategische thema’s vertalen de bedrijfsstrategie naar richting voor het portfolio.', 'Meetbare uitkomsten op portfolio-niveau die laten zien of de strategie werkt – sturen op effect in plaats van op output.'), 'Bijvoorbeeld bijdragen aan een betrouwbaar en toekomstbestendig energiesysteem.'],
      investment: ['Investment Strategy', 'Hoe budget over value streams wordt verdeeld, en hoe die verdeling meebeweegt met de uitkomsten.', null],
      backlog: ['Portfolio Backlog', 'De geprioriteerde lijst van epics die op portfolio-niveau zijn goedgekeurd.', null],
      epic: ['Epic', 'Een grote initiatief-container die een significante investering vraagt en via een Lean business case wordt beoordeeld.', null],
      valuestreams: ['Value Streams', 'De reeks stappen waarmee waarde naar klanten stroomt. Teams en ART’s worden rondom value streams georganiseerd.', 'Denk aan de marktprocessen en ketenvoorzieningen in de energiemarkt.'],
      platforms: ['Platforms', 'Gedeelde technische en data-platformen waar meerdere value streams op bouwen.', 'Bijvoorbeeld gedeelde data- en integratievoorzieningen in de keten.'],
      roi: ['Return on Investment', 'De waarde die investeringen opleveren. ' + L('', 'AI-Native werken moet zich vertalen in snellere en grotere waardecreatie.'), null],
      governance: ['AI Governance and Ethics', 'Kaders voor verantwoord gebruik van AI: transparantie, privacy, veiligheid, compliance en ethiek – over het hele portfolio heen.', 'Extra relevant gezien de maatschappelijke rol en gevoelige energiedata.'],
      owners: ['Business Owners', 'Stakeholders die eindverantwoordelijk zijn voor de business-waarde van een ART en meedoen in planning en review.', null],
      art: [t.art, L('Een team-of-teams (50–125 mensen) dat op een gezamenlijke cadans plant, bouwt en levert.', 'Een AI-Native ART is een team van teams rond één of meer producten. Teams werken samen, delen productinzicht en context en lossen samen vraagstukken op die geen team alleen aankan. De ART werkt outcome-gedreven: het werk van de AI-Native Teams is verbonden met meetbare resultaten voor klant en organisatie. Door continu te leren en bij te sturen blijft de ART wendbaar, met nadruk op samenwerking, heldere doelen en verantwoord AI-gebruik dat menselijke innovatie en klantwaarde versterkt.'), null],
      pm: ['Product Management', 'Bepaalt wat er gebouwd wordt: visie, roadmap en prioriteiten op ART-niveau.', null],
      sa: ['System Architect', 'Bewaakt de technische visie en architectuur van de oplossing' + L('.', ', inclusief de inzet van AI-componenten en agents.'), null],
      peopledev: ['People Developer', 'Leidinggevende die zich richt op de groei van mensen binnen de ART: loopbaanontwikkeling, coaching, competenties en welzijn. Waar PM en RTE zich op het wat en het hoe richten, richt de People Developer zich op de mensen zelf.' + L('', ' In een AI-Native ART helpt die medewerkers ook om nieuwe AI-vaardigheden te ontwikkelen.'), 'De verbinding tussen de lijnorganisatie en de ART.'],
      rte: ['Release Train Engineer', 'De servant leader en coach van de ART die de events faciliteert en belemmeringen wegneemt.', null],
      vision: ['Vision', 'Het toekomstbeeld van de oplossing: welk probleem lossen we op, voor wie, en waarom.', null],
      artoutcomes: [t.artOutcomes, L('Wat de ART in een PI wil bereiken, met business value per doel.', 'De beoogde effecten van de ART – meetbaar en gericht op klant- en bedrijfswaarde.'), null],
      intent: [t.intent, L('De input voor de ART: visie, roadmap en de context waarin de oplossing landt.', 'In AI-Native EDSN worden intentie, specificaties en context zelf een asset: goed vastgelegd sturen ze de AI-agents die meebouwen.'), null],
      roadmap: ['Roadmap', 'Het tijdpad van geplande deliverables en mijlpalen over meerdere PI’s.', null],
      data: ['Curated Data', 'Gecureerde, betrouwbare data die AI-modellen en agents voeden. Zonder goede data geen goede AI.', 'Datakwaliteit in de keten is hier direct de randvoorwaarde.'],
      teams: [t.teams, L('Cross-functionele teams van 5–11 mensen die waarde leveren in korte iteraties.', 'Kleine teams van mensen en AI-agents. Mensen sturen, beoordelen en nemen besluiten; agents versnellen het werk.'), null],
      teamoutcomes: [t.teamOutcomes, 'Wat het team in deze periode wil bereiken, afgeleid van de ART-doelen.', null],
      architects: [t.architects, L('Coaches die teams helpen met agile werken, flow en continue verbetering.', 'Een evolutie van SM’s, Team Coaches en SPC’s: zij helpen teams om AI effectief en verantwoord in te zetten om meer waarde te creëren.'), null],
      pipeline: [t.pipeline, L('De Continuous Delivery Pipeline: van idee via exploratie, integratie en deployment naar release on demand.', 'De AI Innovation Pipeline brengt werk van geplande uitkomst naar gerealiseerde waarde in vijf stappen: Discover, Specify, Build, Validate en Release. Mensen en AI-agents doen elke stap samen, gedragen door vier lagen: AI-Empowered Workflows, Embedded Policies, Insights and Evidence en Shared Platforms.'), null],
      team: ['Product · Builder(s) · Domain Expert', 'De kern van een AI-Native team: iemand die het product stuurt, builders die met AI-agents bouwen en een domeinexpert die de vakinhoud borgt.', 'Bij EDSN: de energiemarktkennis zit in de Domain Expert.'],
      workitems: ['Werkitems', L('Features, stories, spikes en enablers stromen door de iteraties.', 'Naast features en enablers: prototypes en experimenten – AI maakt snel valideren goedkoop.'), null],
      pi: [t.pi, L('Het gezamenlijke planningsevent aan het begin van elke Program Increment.', 'Planning gericht op uitkomsten: welke effecten willen we deze PI bereiken?'), null],
      sense: [t.sense, L('Aan het eind van de PI: demo, meten en een gezamenlijke verbeterworkshop.', 'Doorlopend waarnemen en bijsturen op basis van data en feedback – niet pas aan het eind van de PI.'), null],
      pioutcomes: [t.piOutcomes, 'De resultaten per PI, gemeten tegen de afgesproken doelen.', null],
      gtm: ['Go to Market', 'Het moment waarop de oplossing naar klanten gaat en daadwerkelijk waarde gaat leveren.', null],
      value: ['Customer and Business Value', 'Businesswaarde is contextueel en veelzijdig: het is wat voor een organisatie het meest telt. Het stuurt beslissingen van strategie tot uitvoering. Wie scherp heeft wat waardevol is, kan die waarde ontdekken, erop sturen en meten op echte resultaten in plaats van output. En met elke release stapelt de waarde voor klant en organisatie zich verder op.', null],
      products: ['Products and Solutions', 'De producten en oplossingen die de value streams opleveren.', null],
      customer: ['Customer', 'Degene voor wie alle waarde wordt gecreëerd.', 'Marktpartijen, netbeheerders en uiteindelijk de energieconsument.']
    };

    const footerDef = ai
      ? [['f1', 'Mindset, Values, and Principles', 'De Lean-Agile mindset, waarden en principes, aangevuld voor werken met AI.'], ['f2', 'Outcome-Driven Development', 'Ontwikkelen gestuurd door meetbare uitkomsten in plaats van output.'], ['f3', 'SPCs and ASPCs', 'SAFe Practice Consultants en AI-SPC’s die de transformatie leiden.'], ['f4', 'Implementation Roadmap', 'De stappen om AI-Native EDSN in te voeren.'], ['f5', 'LACE', 'Het Lean-Agile Center of Excellence: het team dat de transformatie aanjaagt, de werkwijze bewaakt en teams coacht.'], ['f6', 'Measure and Grow', 'Voortgang meten en gericht verbeteren.']]
      : [['f1', 'Lean-Agile Mindset', 'De basis: Lean-Agile denken, waarden en principes.'], ['f2', 'Customer Centricity', 'De klant centraal in elk besluit.'], ['f3', 'SPCs', 'SAFe Practice Consultants die de transformatie leiden.'], ['f4', 'Implementation Roadmap', 'De stappen om SAFe in te voeren.'], ['f5', 'LACE', 'Het Lean-Agile Center of Excellence: het team dat de transformatie aanjaagt, de werkwijze bewaakt en teams coacht.'], ['f6', 'Measure and Grow', 'Voortgang meten en gericht verbeteren.']];
    const dots = [cyan, orange, blue, green, cyan, orange];
    footerDef.forEach(([k, label, text]) => { I[k] = [label, text, null]; });
    const footer = footerDef.map(([k, label], i) => ({ label, dot: dots[i], pick: () => self.setState({ sel: k }) }));

    const open = {};
    Object.keys(I).forEach((k) => { open[k] = () => self.setState({ sel: k }); });

    const C = {
      org: { g: 'Organisatie', x: [
        ['Wat is het?', L('Een Lean Enterprise organiseert zich rond waardestromen in plaats van afdelingen. Strategie, financiering en uitvoering zijn op elkaar aangesloten, zodat de organisatie snel kan inspelen op veranderingen.', 'Een AI-Native organisatie behandelt AI als vast onderdeel van het werk. Mensen en AI-agents werken samen in teams, en processen, rollen en governance zijn daarop ingericht.')],
        ['Waarom is het belangrijk?', 'Het tempo van verandering in markt en technologie vraagt om een organisatie die snel kan leren en bijsturen. Losse verbeteringen in één team leveren weinig op als de rest van de organisatie op de oude manier blijft werken.'],
        ['Hoe ziet het eruit?', L('Kleine, autonome teams; gedecentraliseerde besluitvorming; financiering per waardestroom in plaats van per project; en leiders die het goede voorbeeld geven.', 'Teams waarin mensen sturen en agents het repetitieve werk versnellen, data als strategisch bezit, duidelijke kaders voor verantwoord AI-gebruik en leiders die zelf met AI experimenteren.')]],
        k: ['Organiseer rond waardestromen, niet rond afdelingen', L('Strategie en uitvoering hangen direct samen', 'AI is onderdeel van het werk, geen los project'), 'Leiderschap maakt of breekt de transformatie'],
        e: 'EDSN vervult een centrale rol in de energieketen. De AI-Native manier van werken helpt om met dezelfde mensen meer ketenwaarde te leveren, terwijl betrouwbaarheid en zorgvuldigheid voorop blijven staan.', r: ['portfolio', 'leadership', 'f1'] },
      portfolio: { g: 'Portfolio', x: [
        ['Wat is het?', 'Het portfolio is het niveau waarop strategie wordt vertaald naar investeringen. Hier wordt besloten welke waardestromen geld krijgen en welke grote initiatieven (epics) voorrang hebben.'],
        ['Lean Portfolio Management', 'In plaats van jaarlijkse projectbegrotingen werkt het portfolio met doorlopende financiering per waardestroom, een zichtbare backlog van epics en regelmatige herijking op basis van resultaten.'],
        ['Samenhang met de rest', 'Het portfolio geeft richting aan de ART’s, en de ART’s geven via hun resultaten weer feedback aan het portfolio. Zo ontstaat een gesloten lus tussen strategie en uitvoering.']],
        k: ['Vertaalt strategie naar investeringen', 'Financiert waardestromen, geen projecten', 'Stuurt bij op basis van resultaten'],
        e: 'Het CIO Office speelt een sleutelrol in het verbinden van strategie, architectuur en investeringskeuzes.', r: ['leadership', 'backlog', 'valuestreams'] },
      leadership: { g: 'Portfolio', x: [
        ['Wat doet Portfolio Leadership?', 'Portfolio Leadership bepaalt de strategische richting, verdeelt budget over waardestromen en zorgt voor passende governance. Het is de groep die verantwoordelijk is voor de waarde van het hele portfolio.'],
        ['Verantwoordelijkheden', 'Het formuleren van strategische uitkomsten, het goedkeuren van epics, het bewaken van financiële kaders en het wegnemen van organisatorische belemmeringen voor de ART’s.'],
        ['Leiderschapsstijl', L('Leiders werken volgens Lean-Agile principes: ze geven richting, maar laten de invulling over aan de teams.', 'In een AI-Native organisatie stimuleren leiders actief het experimenteren met AI, en bewaken ze tegelijk de ethische en juridische kaders.')]],
        k: ['Bepaalt richting en budget', 'Bewaakt governance', 'Geeft het goede voorbeeld'],
        e: '', r: ['outcomes', 'investment', 'governance'] },
      outcomes: { g: 'Portfolio', x: [
        ['Wat zijn het?', L('Strategische thema’s zijn een beperkt aantal zakelijke doelen die de strategie verbinden met het portfolio. Ze sturen keuzes in de backlog.', 'Portfolio Outcomes zijn meetbare effecten die het portfolio wil bereiken. Ze beschrijven het gewenste resultaat, niet de oplossing.')],
        ['Waarom sturen op uitkomsten?', 'Wie stuurt op output (opgeleverde features) weet nog niet of er waarde is gecreëerd. Sturen op uitkomsten dwingt tot de vraag: wat verandert er voor de klant of de organisatie?'],
        ['Hoe formuleer je ze?', 'Goede uitkomsten zijn specifiek, meetbaar en tijdgebonden. Koppel ze aan indicatoren die je regelmatig kunt meten, zodat je tijdig kunt bijsturen.']],
        k: ['Uitkomst boven output', 'Meetbaar en tijdgebonden', 'Basis voor investeringskeuzes'],
        e: 'Voorbeelden van uitkomsten: hogere datakwaliteit in de keten, kortere doorlooptijd van marktprocessen of meer flexibiliteit in het energiesysteem.', r: ['investment', 'artoutcomes', 'roi'] },
      investment: { g: 'Portfolio', x: [
        ['Wat is het?', 'De investeringsstrategie bepaalt hoe het beschikbare budget wordt verdeeld over waardestromen en type werk, zoals nieuwe functionaliteit, platformen en onderhoud.'],
        ['Guardrails', 'Financiële guardrails geven teams ruimte om binnen afgesproken kaders zelf keuzes te maken. Grote afwijkingen worden expliciet besproken op portfolio-niveau.'],
        ['Periodiek herijken', 'De verdeling is niet voor een jaar vastgezet. Op vaste momenten wordt bekeken of de investeringen de gewenste uitkomsten opleveren en wordt de verdeling bijgesteld.']],
        k: ['Budget per waardestroom', 'Guardrails geven ruimte', 'Regelmatig herijken'],
        e: '', r: ['outcomes', 'roi', 'valuestreams'] },
      backlog: { g: 'Portfolio', x: [
        ['Wat is het?', 'De portfolio backlog bevat de epics die op portfolio-niveau zijn geïdentificeerd en geprioriteerd. Het is het hoogste niveau van de backlog-structuur.'],
        ['De Kanban-flow', 'Epics doorlopen een vaste flow: van idee via analyse en een Lean business case naar uitvoering. Zo blijft zichtbaar wat er speelt en wordt werk niet te vroeg gestart.'],
        ['Prioriteren', 'Prioriteren gebeurt op basis van economische waarde, tijdkritiek en risicoreductie. Het doel is de grootste waarde zo vroeg mogelijk te leveren.']],
        k: ['Zichtbaar overzicht van grote initiatieven', 'Beperk werk in uitvoering', 'Prioriteer op economische waarde'],
        e: '', r: ['epic', 'leadership', 'investment'] },
      epic: { g: 'Portfolio', x: [
        ['Wat is een epic?', 'Een epic is een omvangrijk initiatief dat een flinke investering vraagt en vaak meerdere ART’s of PI’s beslaat. Er hoort een Lean business case bij.'],
        ['Hypothese en MVP', 'Een epic wordt geformuleerd als hypothese. Met een Minimum Viable Product wordt getest of de verwachte waarde ontstaat, voordat er verder in wordt geïnvesteerd.'],
        ['Doorvertaling', 'Na goedkeuring wordt een epic opgesplitst in features voor de ART’s. ' + L('', 'AI helpt bij het snel uitwerken van varianten en het valideren van aannames.')]],
        k: ['Groot initiatief met business case', 'Begint als hypothese', 'Wordt getest met een MVP'],
        e: '', r: ['backlog', 'workitems', 'pm'] },
      valuestreams: { g: 'Portfolio', x: [
        ['Wat is een waardestroom?', 'Een waardestroom is de reeks stappen waarmee een organisatie waarde levert aan een klant, van het eerste verzoek tot de levering.'],
        ['Organiseren rond waarde', 'Teams en ART’s worden zo ingericht dat ze een waardestroom zo zelfstandig mogelijk kunnen bedienen. Dat verkleint de afhankelijkheden en verkort de doorlooptijd.'],
        ['Operationeel en ontwikkeling', 'SAFe onderscheidt operationele waardestromen (hoe de klant waarde ontvangt) en ontwikkelwaardestromen (hoe we de systemen bouwen die dat mogelijk maken).']],
        k: ['Denk vanuit de klant', 'Minder afhankelijkheden', 'Basis voor de inrichting van ART’s'],
        e: 'Bij EDSN kun je denken aan de waardestromen rond de marktprocessen, de centrale registers en de ketenvoorzieningen voor de energiemarkt.', r: ['platforms', 'art', 'customer'] },
      platforms: { g: 'Portfolio', x: [
        ['Wat zijn platformen?', 'Platformen zijn gedeelde technische en data-voorzieningen waar meerdere waardestromen gebruik van maken, zoals integratie-, data- en cloudplatformen.'],
        ['Waarom apart organiseren?', 'Door platformen als product te behandelen, met een eigen team en roadmap, kunnen waardestromen sneller bouwen zonder steeds hetzelfde wiel uit te vinden.'],
        ['Platformen en AI', L('Stabiele platformen zijn een voorwaarde voor continue levering.', 'AI-platformen leveren gedeelde modellen, agents, data en tooling, zodat teams AI veilig en consistent kunnen inzetten.')]],
        k: ['Gedeelde voorzieningen', 'Behandel platformen als product', 'Versnellen alle waardestromen'],
        e: 'Gedeelde data- en integratievoorzieningen zijn voor de energieketen een kritische basis.', r: ['valuestreams', 'data', 'sa'] },
      roi: { g: 'Portfolio', x: [
        ['Wat is het?', 'Return on Investment is de waarde die investeringen opleveren ten opzichte van de kosten. In SAFe gaat het nadrukkelijk om meer dan financieel rendement.'],
        ['Breder dan geld', 'Waarde kan ook bestaan uit maatschappelijk effect, risicoreductie, klanttevredenheid of een betere positie voor de toekomst.'],
        ['Meten en bijsturen', 'Door uitkomsten regelmatig te meten kan het portfolio vroeg zien of een investering rendeert, en tijdig stoppen of opschalen.']],
        k: ['Waarde ten opzichte van kosten', 'Ook maatschappelijke waarde telt', 'Meet vroeg en vaak'],
        e: 'Als maatschappelijk georiënteerde organisatie meet EDSN waarde ook in betrouwbaarheid en maatschappelijk effect voor de energietransitie.', r: ['outcomes', 'investment', 'value'] },
      governance: { g: 'Portfolio', x: [
        ['Wat is het?', 'AI Governance and Ethics omvat de kaders, afspraken en controles die zorgen dat AI verantwoord wordt ingezet, over het hele portfolio heen.'],
        ['Belangrijke thema’s', 'Transparantie en uitlegbaarheid, privacy en gegevensbescherming, beveiliging, eerlijkheid van modellen, menselijk toezicht en naleving van wet- en regelgeving zoals de EU AI Act.'],
        ['Governance die niet remt', 'Goede governance is ingebed in de manier van werken: duidelijke richtlijnen, herbruikbare controles en snelle beoordelingen, zodat teams veilig kunnen versnellen.']],
        k: ['Verantwoord en uitlegbaar', 'Mens blijft eindverantwoordelijk', 'Ingebed in het werk, niet erachteraan'],
        e: 'Door de maatschappelijke rol en de gevoeligheid van energiedata is zorgvuldige AI-governance voor EDSN extra belangrijk.', r: ['leadership', 'data', 'sa'] },
      owners: { g: 'Agile Release Train', x: [
        ['Wie zijn het?', 'Business Owners zijn de belangrijkste stakeholders van een ART. Zij zijn verantwoordelijk voor de bedrijfswaarde die de ART levert.'],
        ['Wat doen ze?', 'Ze nemen deel aan de PI-planning, kennen business value toe aan doelen, beoordelen de resultaten en helpen belemmeringen weg te nemen.'],
        ['Waarom zijn ze belangrijk?', 'Zonder actieve betrokkenheid van de business ontstaat het risico dat de ART de verkeerde dingen bouwt. Business Owners zorgen voor focus op waarde.']],
        k: ['Eigenaar van de bedrijfswaarde', 'Actief in PI-planning', 'Helpen belemmeringen opruimen'],
        e: '', r: ['art', 'pi', 'artoutcomes'] },
      art: { g: 'Agile Release Train', x: [
        ['Wat is een ART?', L('Een Agile Release Train is een langdurig team van agile teams, meestal 50 tot 125 mensen, dat samen een oplossing ontwikkelt en levert.', 'Een AI-Native ART is een team van teams waarin mensen en AI-agents samenwerken. Doordat agents een deel van het werk overnemen, kunnen teams kleiner zijn en sneller leveren.')],
        ['Gezamenlijke cadans', 'Alle teams in de ART werken op hetzelfde ritme: ze plannen samen, integreren regelmatig en demonstreren samen het resultaat.'],
        ['De kernrollen', 'Product Management bepaalt wat er gebouwd wordt, de System Architect bewaakt de technische richting, de RTE faciliteert het proces en de People Developer zorgt voor de groei van de mensen.']],
        k: ['Team van teams rond een waardestroom', 'Eén ritme, één plan', L('Langdurig en stabiel', 'Mensen en agents werken samen')],
        e: '', r: ['pm', 'rte', 'peopledev', 'teams'] },
      pm: { g: 'Agile Release Train', x: [
        ['Wat doet Product Management?', 'Product Management is verantwoordelijk voor wat de ART bouwt. Ze vertalen klantbehoeften en strategie naar een visie, roadmap en geprioriteerde features.'],
        ['Visie en roadmap', 'Een sterke productvisie is gebaseerd op klantinzicht, sluit aan op de strategie en is technisch haalbaar. De roadmap laat zien welke uitkomsten wanneer worden nagestreefd.'],
        ['Met AI', L('Product Management werkt nauw samen met klanten en Business Owners om waarde te valideren.', 'AI helpt Product Management bij het analyseren van klantfeedback en marktdata en bij het snel toetsen van ideeën met prototypes.')]],
        k: ['Eigenaar van het wat', 'Bewaakt visie en roadmap', 'Prioriteert op waarde'],
        e: '', r: ['vision', 'roadmap', 'sa'] },
      sa: { g: 'Agile Release Train', x: [
        ['Wat doet de System Architect?', 'De System Architect geeft technische richting aan de ART. Die zorgt dat de oplossing schaalbaar, veilig en onderhoudbaar blijft.'],
        ['Architectural runway', 'De architect zorgt voor voldoende technische basis om toekomstige features te kunnen bouwen, zonder te veel vooruit te ontwerpen.'],
        ['AI in de architectuur', L('De architect werkt samen met teams en enterprise architecture om keuzes af te stemmen.', 'In een AI-Native ART ontwerpt de architect ook hoe agents, modellen en data veilig in de oplossing worden opgenomen.')]],
        k: ['Technische richting', 'Bouwt aan de runway', 'Afstemming met enterprise architecture'],
        e: 'Afstemming met de enterprise architectuur en ketenarchitectuur is voor EDSN essentieel.', r: ['platforms', 'pm', 'governance'] },
      rte: { g: 'Agile Release Train', x: [
        ['Wat doet de RTE?', 'De Release Train Engineer is de dienend leider en coach van de ART. De RTE faciliteert de events en processen en helpt de trein soepel te laten lopen.'],
        ['Verantwoordelijkheden', 'Het organiseren van de PI-planning, het bewaken van risico’s en afhankelijkheden, het escaleren van belemmeringen en het stimuleren van continue verbetering.'],
        ['Samenwerking', 'De RTE werkt nauw samen met Product Management, de System Architect, de People Developer en de coaches van de teams.']],
        k: ['Dienend leider van de ART', 'Faciliteert de events', 'Ruimt belemmeringen op'],
        e: '', r: ['pi', 'sense', 'architects'] },
      peopledev: { g: 'Agile Release Train', x: [
        ['Wat doet de People Developer?', 'De People Developer is de leidinggevende die zich richt op de mensen in de ART: hun ontwikkeling, loopbaan, vaardigheden en welzijn.'],
        ['Waarom deze rol?', 'In agile organisaties ligt de inhoudelijke sturing bij de teams en de ART. Daardoor ontstaat ruimte voor een leidinggevende die zich volledig op de groei van mensen kan richten.'],
        ['Ontwikkeling in een AI-Native wereld', L('De People Developer helpt medewerkers groeien in hun vak en in agile werken.', 'Met AI veranderen rollen en vaardigheden snel. De People Developer helpt medewerkers nieuwe AI-vaardigheden te ontwikkelen en hun rol opnieuw vorm te geven.')]],
        k: ['Richt zich op de mensen', 'Coacht op groei en loopbaan', 'Verbindt lijn en ART'],
        e: 'De People Developer verbindt de lijnorganisatie met de ART en helpt medewerkers bij de overgang naar nieuwe manieren van werken.', r: ['rte', 'art', 'f1'] },
      vision: { g: 'Agile Release Train', x: [
        ['Wat is een productvisie?', 'De visie beschrijft het toekomstbeeld van de oplossing: welk probleem lossen we op, voor wie en waarom is dat belangrijk.'],
        ['Kenmerken van een sterke visie', 'Een goede visie is gebaseerd op klant- en marktinzicht, sluit aan op de strategie van het portfolio en is verankerd in wat technisch haalbaar is.'],
        ['De visie levend houden', 'Deel de visie steeds opnieuw: bij PI-planning, in demo’s en in de dagelijkse tools. Gebruik feedback om haar bij te stellen.']],
        k: ['Geeft richting en inspiratie', 'Gebaseerd op data en strategie', 'Steeds opnieuw delen'],
        e: '', r: ['roadmap', 'pm', 'intent'] },
      artoutcomes: { g: 'Agile Release Train', x: [
        ['Wat zijn het?', L('PI Objectives beschrijven wat de ART in een PI wil bereiken. Business Owners kennen er business value aan toe.', 'ART Outcomes beschrijven de effecten die de ART wil bereiken voor klant en organisatie, afgeleid van de portfolio-uitkomsten.')],
        ['Van portfolio naar team', 'Uitkomsten vormen een keten: portfolio-uitkomsten worden vertaald naar ART-uitkomsten, en die weer naar teamuitkomsten. Zo werkt iedereen aan hetzelfde doel.'],
        ['Meten', 'Elke uitkomst krijgt indicatoren die tijdens de PI worden gevolgd, zodat de ART kan bijsturen.']],
        k: ['Afgeleid van de portfolio-uitkomsten', 'Concreet en meetbaar', 'Basis voor PI-planning'],
        e: '', r: ['outcomes', 'teamoutcomes', 'pioutcomes'] },
      intent: { g: 'Agile Release Train', x: [
        ['Wat is het?', L('De visie, roadmap en context vormen samen de input voor de ART: waar werken we naartoe en binnen welke kaders?', 'Intentie, specificaties en context beschrijven wat we willen bereiken, aan welke eisen de oplossing moet voldoen en in welke omgeving ze werkt.')],
        ['Waarom is dit zo belangrijk?', L('Een gedeeld beeld voorkomt misverstanden en dubbel werk.', 'AI-agents zijn zo goed als de context die ze krijgen. Goed vastgelegde intentie en specificaties zijn daarom een waardevol bezit: ze sturen de agents die meebouwen.')],
        ['In de praktijk', 'Leg doelen, eisen, architectuurkeuzes en domeinkennis vast op een plek die voor mensen én tools toegankelijk is, en houd ze actueel.']],
        k: ['Gedeeld beeld van het doel', L('Voorkomt misverstanden', 'Context stuurt de AI'), 'Vastleggen en actueel houden'],
        e: 'De diepe domeinkennis over de energiemarkt is precies het soort context dat het verschil maakt.', r: ['vision', 'data', 'pipeline'] },
      roadmap: { g: 'Agile Release Train', x: [
        ['Wat is een roadmap?', 'De roadmap laat zien welke resultaten en mijlpalen de ART de komende PI’s verwacht te leveren.'],
        ['Uitkomstgericht', 'Een moderne roadmap beschrijft vooral welke uitkomsten we nastreven, niet alleen welke features er komen. Zo blijft er ruimte voor de beste oplossing.'],
        ['Vooruitkijken met mate', 'De eerstvolgende PI is redelijk concreet; verder vooruit is de roadmap een prognose die regelmatig wordt bijgesteld.']],
        k: ['Toont richting in de tijd', 'Uitkomstgericht', 'Hoe verder weg, hoe globaler'],
        e: '', r: ['vision', 'pm', 'pi'] },
      data: { g: 'Team', x: [
        ['Wat is het?', 'Gecureerde data is data die is geselecteerd, opgeschoond en gedocumenteerd, zodat AI-modellen en agents er betrouwbaar mee kunnen werken.'],
        ['Waarom het fundament?', 'De kwaliteit van AI-uitkomsten hangt direct af van de kwaliteit van de data. Slechte data leidt tot slechte beslissingen, hoe goed het model ook is.'],
        ['Data als product', 'Behandel belangrijke datasets als producten, met een eigenaar, kwaliteitsafspraken en duidelijke toegangsregels.']],
        k: ['Kwaliteit boven kwantiteit', 'Data als product', 'Toegang volgens duidelijke regels'],
        e: 'Als beheerder van centrale ketendata heeft EDSN een unieke positie: datakwaliteit is hier tegelijk randvoorwaarde en waardepropositie.', r: ['governance', 'platforms', 'intent'] },
      teams: { g: 'Team', x: [
        ['Wat zijn het?', L('Agile teams zijn cross-functionele teams van 5 tot 11 mensen die zelfstandig waarde kunnen definiëren, bouwen en testen.', 'AI-Native teams zijn kleine teams waarin mensen en AI-agents samenwerken. Mensen bepalen de richting, beoordelen het resultaat en nemen besluiten.')],
        ['Hoe werken ze?', L('Teams werken in korte iteraties met Scrum of Kanban en leveren regelmatig werkende software op.', 'Agents nemen werk over zoals code schrijven, testen en documenteren. Daardoor verschuift het werk van mensen naar specificeren, beoordelen en verbeteren.')],
        ['Samenstelling', L('Een team heeft een Product Owner, een Scrum Master of Team Coach en ontwikkelaars.', 'Een typisch AI-Native team bestaat uit iemand voor het product, een of meer builders en een domeinexpert, aangevuld met agents.')]],
        k: ['Klein en cross-functioneel', L('Leveren in korte iteraties', 'Mens stuurt, agent versnelt'), 'Onderdeel van een ART'],
        e: '', r: ['team', 'architects', 'teamoutcomes'] },
      teamoutcomes: { g: 'Team', x: [
        ['Wat zijn het?', 'Teamuitkomsten beschrijven wat een team in een periode wil bereiken, afgeleid van de uitkomsten van de ART.'],
        ['Eigenaarschap', 'Het team formuleert zijn uitkomsten zelf tijdens de planning. Dat zorgt voor betrokkenheid en een realistisch plan.'],
        ['Zichtbaar maken', 'Door de uitkomsten zichtbaar te houden en regelmatig te meten weet het team of het op koers ligt.']],
        k: ['Afgeleid van de ART-uitkomsten', 'Door het team zelf opgesteld', 'Regelmatig gemeten'],
        e: '', r: ['artoutcomes', 'teams', 'pi'] },
      architects: { g: 'Team', x: [
        ['Wie zijn het?', L('Scrum Masters en Team Coaches helpen teams om effectief samen te werken, flow te verbeteren en continu te leren.', 'AI Value Architects zijn een doorontwikkeling van Scrum Masters, Team Coaches en SPC’s. Ze helpen teams en ART’s om AI effectief en verantwoord in te zetten.')],
        ['Wat doen ze?', L('Ze faciliteren events, coachen het team en helpen belemmeringen op te ruimen.', 'Ze zoeken waar AI de meeste waarde oplevert, helpen werkwijzen aan te passen, delen goede voorbeelden en bewaken de kaders voor verantwoord gebruik.')],
        ['Benodigde vaardigheden', 'Coaching en facilitatie, kennis van Lean-Agile werken' + L('.', ' en praktische ervaring met AI-tools en agents.')]],
        k: ['Coach van teams', L('Verbetert flow', 'Vertaalt AI naar waarde'), 'Verbindt teams en ART'],
        e: '', r: ['teams', 'rte', 'f3'] },
      pipeline: { g: 'Team', x: [
        ['Wat is het?', L('De Continuous Delivery Pipeline beschrijft de stappen om een idee om te zetten in waarde: Continuous Exploration, Integration, Deployment en Release on Demand.', 'De AI Innovation Pipeline is een snelle cyclus van Discover, Specify, Build, Validate en Release, waarin mensen en AI elke stap samen doorlopen.')],
        ['De stappen', L('Exploratie zoekt naar waarde, integratie bouwt en test, deployment brengt naar productie en de release maakt het beschikbaar wanneer de business dat wil.', 'Discover zoekt naar kansen, Specify legt intentie en eisen vast, Build bouwt met behulp van agents, Validate toetst of het werkt en waarde levert, en Release brengt het naar de klant.')],
        ['Snelheid en kwaliteit', 'Automatisering en kleine stappen maken het mogelijk om vaak en met weinig risico te leveren. ' + L('', 'AI verkort vooral de tijd tussen idee en werkend prototype.')]],
        k: L(['Van idee naar waarde', 'Kleine stappen, vaak leveren', 'Automatiseer waar het kan'], ['Vijf stappen van uitkomst naar waarde', 'Leren (experimenten, prototypes) en waarde (features, enablers)', 'Mens en AI in elke stap', 'Vier lagen dragen de pipeline']),
        e: '', r: L(['intent', 'workitems', 'gtm'], ['cflow', 'aiwf', 'aipol', 'aiplat']) },
      team: { g: 'Team', x: [
        ['De samenstelling', 'Het AI-Native team draait om drie rollen: Product, Builder(s) en Domain Expert, ondersteund door AI-agents.'],
        ['De rollen', 'Product bepaalt wat waardevol is en stelt prioriteiten. Builders specificeren, bouwen en testen samen met agents. De Domain Expert brengt vakkennis in en beoordeelt of de oplossing klopt.'],
        ['Waarom zo klein?', 'Omdat agents een groot deel van het uitvoerende werk versnellen, kan een klein team veel bereiken. Communicatie blijft eenvoudig en besluiten worden snel genomen.']],
        k: ['Product, Builder(s), Domain Expert', 'Klein team, grote impact', 'Agents versterken, mensen beslissen'],
        e: 'Bij EDSN is de Domain Expert de plek waar de kennis van energiemarkt, regelgeving en ketenprocessen samenkomt.', r: ['teams', 'pipeline', 'data'] },
      workitems: { g: 'Team', x: [
        ['Soorten werk', L('Features beschrijven functionaliteit voor de gebruiker, stories zijn kleine stukken werk voor één iteratie, spikes zijn onderzoek en enablers bouwen aan de technische basis.', 'Naast features en enablers spelen prototypes en experimenten een grote rol. AI maakt het goedkoop om ideeën snel te testen.')],
        ['Iteraties', 'Het werk wordt opgepakt in korte iteraties, met aan het eind een werkend en getest resultaat.'],
        ['Balans', 'Zorg voor een gezonde balans tussen nieuwe functionaliteit, technische basis en onderhoud, zodat de snelheid op lange termijn behouden blijft.']],
        k: ['Verschillende soorten werk', L('Klein en afgerond per iteratie', 'Experimenteer goedkoop'), 'Balans tussen nieuw en basis'],
        e: '', r: ['epic', 'pipeline', 'pi'] },
      pi: { g: 'Cadans', x: [
        ['Wat is het?', L('PI Planning is het gezamenlijke planningsevent aan het begin van elk Program Increment, waarin alle teams van de ART samen plannen.', 'PI Outcome Planning is de gezamenlijke planning aan het begin van elk PI, met de nadruk op de uitkomsten die de ART wil bereiken.')],
        ['Hoe verloopt het?', 'De business deelt de context en visie, teams maken hun plannen, afhankelijkheden en risico’s worden zichtbaar gemaakt en aan het eind committeert de ART zich aan het plan.'],
        ['Waarom werkt het?', 'Iedereen tegelijk in één ruimte (fysiek of online) zorgt voor afstemming in twee dagen die anders weken zou kosten.']],
        k: ['Iedereen plant samen', 'Afhankelijkheden worden zichtbaar', L('Commitment aan PI Objectives', 'Focus op uitkomsten')],
        e: '', r: ['sense', 'pioutcomes', 'rte'] },
      sense: { g: 'Cadans', x: [
        ['Wat is het?', L('Inspect and Adapt is het event aan het eind van een PI: een demo, een meting van de resultaten en een gezamenlijke verbeterworkshop.', 'Sense and Respond is doorlopend waarnemen en bijsturen op basis van data en feedback, gedurende het hele PI.')],
        ['Hoe werkt het?', L('De ART laat zien wat er is bereikt, analyseert wat beter kan en spreekt concrete verbeteringen af.', 'Teams en de ART volgen hun indicatoren continu. Wijken de resultaten af, dan wordt meteen bijgestuurd in plaats van te wachten tot het eind van het PI.')],
        ['Leercultuur', 'Het doel is niet om schuldigen te vinden, maar om als systeem te leren en elke PI een beetje beter te worden.']],
        k: [L('Demo, meten en verbeteren', 'Continu meten'), 'Snel bijsturen', 'Leren als systeem'],
        e: '', r: ['pi', 'pioutcomes', 'f6'] },
      pioutcomes: { g: 'Cadans', x: [
        ['Wat zijn het?', 'De resultaten die de ART in een PI heeft bereikt, gemeten tegen de doelen en uitkomsten die bij de planning zijn afgesproken.'],
        ['Hoe meet je?', 'Business Owners beoordelen de geleverde waarde. Daarnaast worden de afgesproken indicatoren gemeten.'],
        ['Gebruik', 'De resultaten voeden de volgende planning en laten het portfolio zien of de investering effect heeft.']],
        k: ['Resultaat per PI', 'Gemeten tegen afspraken', 'Input voor de volgende PI'],
        e: '', r: ['artoutcomes', 'pi', 'roi'] },
      gtm: { g: 'Waarde', x: [
        ['Wat is het?', 'Go to Market is het moment waarop een oplossing daadwerkelijk bij klanten terechtkomt en waarde begint te leveren.'],
        ['Release on demand', 'Bouwen en uitrollen zijn losgekoppeld van het moment van vrijgeven. De business bepaalt wanneer een release naar de markt gaat.'],
        ['Voorbereiding', 'Denk aan communicatie, training, ondersteuning en het meten van het gebruik na de lancering.']],
        k: ['Van opgeleverd naar in gebruik', 'De business bepaalt het moment', 'Meet het effect'],
        e: 'In de energieketen vraagt elke release om zorgvuldige afstemming met marktpartijen en netbeheerders.', r: ['pipeline', 'products', 'customer'] },
      value: { g: 'Waarde', x: [
        ['Waarom businesswaarde?', 'Elke organisatie heeft unieke sterktes. Door helder te maken wat het meest waardevol is, kan iedereen daar gericht aan bijdragen. Businesswaarde stuurt beslissingen op elk niveau.'],
        ['Niet alleen voor de top', 'Een veelgehoorde gedachte is dat waarde iets is voor het senior management. Maar echte wendbaarheid vraagt om decentrale besluiten. Daarom moet iedereen, van portfolio tot team, begrijpen wat waarde is in zijn of haar context.'],
        ['Vroeg en vaak', 'Door in kleine stappen te leveren begint de waarde eerder en kan de koers worden bijgesteld op basis van echte feedback. Met elke release stapelt de waarde zich op.']],
        k: ['Begrip van businesswaarde is de basis voor succes', 'Business value discovery brengt prioriteiten op één lijn', 'Meet waarde op resultaat, niet op output', 'Maak waarde onderdeel van elk gesprek en elke beslissing'],
        e: 'Voor EDSN is waarde breder dan financieel: betrouwbare ketenvoorzieningen, datakwaliteit en een bijdrage aan de energietransitie tellen net zo zwaar.', r: ['outcomes', 'roi', 'f2', 'customer'] },
      products: { g: 'Waarde', x: [
        ['Wat zijn het?', 'De producten en oplossingen die de waardestromen opleveren en die klanten gebruiken.'],
        ['Productdenken', 'Een product heeft een eigenaar, een visie en een levenscyclus. Het wordt continu verbeterd op basis van gebruik en feedback.'],
        ['Samenhang', 'Grote oplossingen bestaan vaak uit meerdere producten en platformen die samen waarde leveren.']],
        k: ['Wat de klant gebruikt', 'Continu verbeterd', 'Eigenaar en visie per product'],
        e: '', r: ['valuestreams', 'customer', 'pm'] },
      customer: { g: 'Waarde', x: [
        ['Wie is de klant?', 'De klant is degene voor wie alle waarde wordt gecreëerd. Klantgerichtheid is het uitgangspunt van elke beslissing.'],
        ['Klantinzicht', 'Gebruik onderzoek, data en directe feedback om te begrijpen wat de klant echt nodig heeft. ' + L('', 'AI helpt om grote hoeveelheden feedback snel te analyseren.')],
        ['Betrek de klant', 'Laat klanten meedenken, testen en beoordelen, zodat de oplossing aansluit op hun praktijk.']],
        k: ['Startpunt van alles', 'Begrijp de echte behoefte', 'Betrek de klant vroeg'],
        e: 'De klanten van EDSN zijn onder meer marktpartijen en netbeheerders, en via hen uiteindelijk de energieconsument.', r: ['value', 'products', 'f2'] }
    };
    const fx = {
      f1: [['De basis', 'Een Lean-Agile mindset, gedeelde waarden en principes vormen het fundament onder alle rollen en events.'], ['Waarom?', 'Zonder de juiste mindset blijven nieuwe rollen en events een vorm zonder inhoud.'], ['In de praktijk', 'Leiders en teams laten de principes zien in hun keuzes: denken in systemen, decentraal beslissen en sturen op flow.']],
      f2: [['De kern', L('Klantgerichtheid betekent dat elke keuze begint bij de klant en diens behoefte.', 'Outcome-Driven Development betekent dat werk wordt gestuurd door meetbare uitkomsten in plaats van door opgeleverde output.')], ['Waarom?', 'Zo voorkom je dat er veel wordt gebouwd dat weinig waarde oplevert.'], ['In de praktijk', 'Formuleer uitkomsten, meet ze en stuur bij op basis van de resultaten.']],
      f3: [['Wie zijn het?', L('SAFe Practice Consultants begeleiden en trainen de organisatie bij de invoering van SAFe.', 'SPC’s en AI-SPC’s begeleiden de organisatie bij de invoering van AI-Native werken.')], ['Wat doen ze?', 'Ze trainen leiders en teams, coachen bij de eerste ART’s en helpen de werkwijze verder te verbeteren.'], ['Interne capaciteit', 'Door eigen mensen op te leiden blijft de kennis in de organisatie.']],
      f4: [['Wat is het?', 'Een stappenplan voor de invoering, van het creëren van urgentie tot het lanceren en verbeteren van ART’s.'], ['Hoe gebruik je het?', 'Als leidraad, niet als dwingend recept: de stappen worden afgestemd op de situatie.'], ['Klein beginnen', 'Start met één waardestroom of ART, leer en breid daarna uit.']],
      f5: [['Wat is het?', 'LACE staat voor Lean-Agile Center of Excellence: een klein, toegewijd team dat de transformatie naar de nieuwe manier van werken aanjaagt en ondersteunt.'], ['Wat doet het LACE?', 'Het LACE ontwikkelt en bewaakt de werkwijze, coacht leiders, RTE’s en teams, organiseert trainingen en communities of practice, en zorgt dat goede voorbeelden worden gedeeld.'], ['Samenwerking', 'Het LACE werkt nauw samen met de RTE’s en het T4K aan werkwijze en coaching, en met de SPC’s aan training en begeleiding.' + L('', ' In een AI-Native organisatie helpt het LACE ook bij het verspreiden van verantwoorde AI-praktijken.')]],
      f6: [['Wat is het?', 'Meten hoe goed de organisatie presteert op uitkomsten, flow en vaardigheden, en daar gericht op verbeteren.'], ['Wat meet je?', 'Uitkomsten (levert het waarde?), flow (hoe snel en voorspelbaar?) en competenties (hoe goed zijn we erin?).'], ['Groeien', 'Gebruik de metingen om verbeteringen te kiezen, niet om teams af te rekenen.']]
    };
    footerDef.forEach(([k]) => {
      C[k] = { g: 'Fundament', x: fx[k], k: ['Onderdeel van het fundament', 'Ondersteunt alle niveaus', 'Klein beginnen, continu verbeteren'], e: '', r: ['org', 'f4', 'f6'] };
    });

    // ---- Tactisch vierkant (T4K): bron 'Rollen binnen het T4K', 1 nov 2026 ----
    const RC = { pm: ['#0E5F96', '#E6EFF6', 'Waarde'], sa: ['#00807E', '#E0F2F1', 'Techniek'], rte: ['#3B7898', '#E6EFF4', 'Flow'], peopledev: ['#5E6E0C', '#F1F4DC', 'Mensen'] };
    const R = {
      pm: { abbr: 'PM', full: 'Product Manager', kern: 'De PM bepaalt productrichting en prioriteiten op basis van klantwaarde.',
        intro: 'Verbindt klantbehoeften aan bedrijfsdoelen en draagt met het T4K het resultaat van idee tot operatie.',
        wheel: ['Productrichting', 'Backlog en roadmap', 'Waarde en kosten', 'Dienstverlening en continuïteit', 'Go-Live en risico'],
        doelen: ['Productvisie en roadmap geven richting aan de ART.', 'Een geprioriteerde backlog maximaliseert klantwaarde.', 'Features sluiten aan op strategie, markt en klantfeedback.', 'Stakeholders en teams werken aan continue waarde.'],
        ai: ['Weegt AI vanaf de start mee in productkeuzes.', 'Toetst klantwaarde met kleine experimenten en echte feedback.'],
        resp: [['Productrichting', 'Klantvraag, productvisie, dienstenafbakening en meetbare doelen bepalen.', 'Productvisie en doelen'],
          ['Backlog en roadmap', 'Features prioriteren met POs en stakeholders. Run, Change, enablers en lifecyclewerk afwegen met SA en RTE.', 'ART-backlog en roadmap'],
          ['Waarde en kosten', 'TCO, investeringen en FinOps afwegen. AI-use-cases op waarde prioriteren.', 'Waarde- en kostenafweging'],
          ['Dienstverlening en continuïteit', 'Diensten en dienstniveaus afstemmen met SA. Kritikaliteit, businessimpact en RTO/RPO bepalen met betrokken rollen.', 'Dienstniveaus en RTO/RPO'],
          ['Go-Live en risico', 'Functionele en ketenacceptatie onderbouwen en readiness meewegen. Risico-advies voorbereiden voor de bevoegde eigenaar.', 'Acceptatie- en risico-advies']],
        meet: [['Klantwaarde', 'Klantfeedback, featurewaarde en adoptie'], ['Levering', 'Time-to-market en PI-doelrealisatie'], ['Richting', 'Backloggezondheid en stakeholderafstemming'], ['Vernieuwing', 'Innovatie en verbeterinitiatieven']],
        afst: 'Portfolio Sync en System Demos',
        samen: [['Klanten en Business Owners', 'Klantvraag en bedrijfsdoelen'], ['SA, RTE en PD', 'Integrale T4K-afstemming'], ['POs en teams', 'Productrichting en prioriteiten'], ['Portfolio / PMT', 'Kaders en roadmapafstemming']],
        mandaat: 'POs beheren hun teambacklog. De bevoegde risico-eigenaar accepteert restrisico.',
        kpi: ['Klanttevredenheid en -feedback', 'Time-to-market (T2M)', 'Waarde van geleverde features', 'Backloggezondheid', 'Stakeholder alignment', 'PI-doelrealisatie', 'Innovatie en verbeterinitiatieven', 'Adoptie van productfeatures door eindgebruikers'],
        relatie: ['Werkt samen met POs, SA, RTE, PD, klanten en Business Owners binnen het T4K.', 'Geeft productrichting en prioriteiten mee aan POs. POs beheren hun teambacklog.', 'Stemt businessdoelen af met Business Owners/PMT en werkt binnen portfoliokaders.', 'Neemt deel aan Portfolio Sync en System Demos. Verbindt klantfeedback aan de roadmap.'],
        ontw: ['Groei naar strategische rollen zoals Solution Manager of Epic Owner.', 'Verdieping in marktanalyse, business strategy of lean portfolio management.', 'Leiderschapstraining, coaching en innovatieprogramma’s.'],
        strat: 'De Product Manager is een sleutelfiguur in het leveren van klantwaarde op schaal. Door strategisch inzicht te combineren met klantgerichtheid en teamalignment, zorgt de PM voor een goed gevulde en goed geprioriteerde backlog. Daarmee versnelt hij of zij de time-to-market, stimuleert innovatie en borgt alignment met bedrijfsdoelen.',
        bijdrage: 'Productvisie, roadmap en klantwaarde', t4kAfst: 'Met POs, klanten en Business Owners' },
      rte: { abbr: 'RTE', full: 'Release Train Engineer', kern: 'De RTE verbetert flow en maakt levering en gereedheid voorspelbaar.',
        intro: 'Faciliteert en coacht de ART. Verbindt met het T4K de uitvoering aan Run en beheerste ingebruikname.',
        wheel: ['Planning en capaciteit', 'Flow en afhankelijkheden', 'Run en Go-Live', 'Readiness en BCM', 'Kosten en governance'],
        doelen: ['Een haalbaar PI-plan maakt voortgang zichtbaar.', 'Teams lossen afhankelijkheden en belemmeringen op.', 'Run, Change en verbeterwerk delen één ART-cadans.', 'Integrale en operationele gereedheid is aantoonbaar.'],
        ai: ['Laat teams met AI in hun werkproces experimenteren.', 'Meet het effect op flow en deel wat werkt.'],
        resp: [['Planning en capaciteit', 'PI-readiness, PI Planning, ART Syncs en I&A organiseren. Met teams en PD scenario’s, capaciteit en afhankelijkheden bewaken.', 'Haalbaar PI-plan'],
          ['Flow en afhankelijkheden', 'Flow meten en verbeteren. Risico’s, impediments en escalaties opvolgen.', 'Zichtbare flow en opvolging'],
          ['Run en Go-Live', 'Run, incidentreadiness en RCA-opvolging regisseren. Release, deployment, Go-Live-draaiboek en terugval coördineren.', 'Go-Live-draaiboek en terugval'],
          ['Readiness en BCM', 'Readiness-advies baseren op teams, SA en operatie. BCM-oefeningen, controlbewijs en auditacties aantoonbaar opvolgen.', 'Readiness-advies en controlbewijs'],
          ['Kosten en governance', 'Kosten, forecast en leveranciersuitvoering bewaken binnen mandaat. Standaarden toepassen en uitzonderingen escaleren.', 'Forecast en escalaties']],
        meet: [['Voorspelbaarheid', 'PI-uitvoering, kwaliteit en throughput'], ['Flow', 'Cycle time, WIP, lead time en belemmeringen'], ['Samenwerking', 'Team- en stakeholdertevredenheid'], ['Verbetering', 'Effectiviteit van Inspect & Adapt en events']],
        afst: 'PI Planning, ART Syncs en Inspect & Adapt',
        samen: [['PM, SA en PD', 'T4K, Business Owners en SOM'], ['Scrum Masters en teams', 'Coaching en ART-uitvoering'], ['Operatie en andere RTE’s', 'Run en ketenafhankelijkheden'], ['LACE', 'Werkwijze en coaching']],
        mandaat: 'Teams bepalen hun haalbare commitments en blijven eigenaar van de uitvoering. Budgethouder en Inkoop behouden hun mandaat.',
        kpi: ['Succesvolle PI-uitvoering (deliverables, velocity, kwaliteit)', 'Voorspelbaarheid en throughput van teams', 'Afname van belemmeringen en afhankelijkheden', 'Deelname en effectiviteit van Inspect & Adapt en events', 'Samenwerking en flow over teams heen', 'Tevredenheid van stakeholders en teams', 'Flow metrics: cycle time, WIP en lead time'],
        relatie: ['Werkt in het T4K met PM, SA en PD en stemt af met Business Owners en SOM-rollen.', 'Coacht Scrum Masters en ondersteunt teams. Teams blijven eigenaar van hun uitvoering.', 'Stemt af met andere RTE’s, Service Management en operationele ketenpartners.', 'Werkt met LACE aan werkwijze en coaching. Budgethouder en Inkoop behouden hun mandaat.'],
        ontw: ['Groeien naar Agile Coach of Program Manager.', 'Specialiseren in flow-optimalisatie, coaching of change leadership.', 'Verbreden in organisatorisch leiderschap en strategie-uitvoering.'],
        strat: 'De RTE speelt een sleutelrol in het verbinden van strategie met uitvoering. Door teams te faciliteren en flow te optimaliseren helpt de RTE bij het versnellen van klantwaarde. De RTE draagt actief bij aan het succes van de transformatie door SAFe-principes te borgen en het adaptief vermogen van de organisatie te vergroten.',
        bijdrage: 'Flow, PI-uitvoering en readiness', t4kAfst: 'Met teams, T4K en operatie' },
      peopledev: { abbr: 'PD', full: 'People Developer', kern: 'De PD ontwikkelt mensen en vakmanschap voor de doelen van de ART.',
        intro: 'Coacht medewerkers en ondersteunt teamgroei. Verbindt personeelsplanning aan duurzame inzetbaarheid en kenniscontinuïteit.',
        wheel: ['Talent en vakmanschap', 'Personeelsplanning', 'Capaciteit en inzetbaarheid', 'Kenniscontinuïteit', 'Adoptie'],
        doelen: ['Medewerkers krijgen ruimte om te leren en te groeien.', 'De talentenpool heeft de benodigde skills en ervaring.', 'People topics ondersteunen de doelen van de waardestroom.', 'Het T4K verbindt mensen, techniek en uitvoerbare capaciteit.'],
        ai: ['Maakt AI-geletterdheid onderdeel van vakmanschap.', 'Stimuleert veilig oefenen en kritisch beoordelen van AI-output.'],
        resp: [['Talent en vakmanschap', 'Medewerkers begeleiden in iGrow. Een skills- en opleidingsplan maken, met SA de technische leerbehoefte bepalen.', 'iGrow- en skillsplan'],
          ['Kenniscontinuïteit', 'Kritieke kennis, vervanging en vaardigheden voor beheer en BCM borgen.', 'Kennis en vervanging'],
          ['Adoptie', 'CoPs, AI-literacy, kostenbewustzijn en veranderbereidheid ontwikkelen.', 'Adoptie en veranderbereidheid'],
          ['Personeelsplanning', 'Instroom, onboarding, inhuur en formatievoorstellen voorbereiden.', 'Instroom- en formatievoorstellen'],
          ['Capaciteit en inzetbaarheid', 'Met RTE inzet en op-/afschaling uitwerken binnen kaders. Duurzame inzetbaarheid en verzuim ondersteunen volgens P&C.', 'Inzet en duurzame inzetbaarheid']],
        meet: [['Betrokkenheid', 'Medewerkerstevredenheid, cohesie en cultuur'], ['Talent', 'Behoud, mobiliteit en talentontwikkeling'], ['Vakmanschap', 'People runway en duurzame talentenpool'], ['Verandering', 'Readiness, adoptie en leiderschapsvaardigheden']],
        afst: 'iGrow- en ontwikkelcyclus, afstemming met andere PDs',
        samen: [['Medewerkers en teams', 'Individuele groei en begeleiding'], ['PM, SA en RTE', 'Skills, ART-doelen en capaciteit'], ['Scrum Masters en coaches', 'Teamgroei en vakmanschap'], ['P&C, HRBP en lijn', 'Recruitment en HR-processen']],
        mandaat: 'Formele HR-bevoegdheden blijven bij de bevoegde P&C- en lijnrollen. De PD ondersteunt Go-Live zonder aparte beslisbevestiging.',
        kpi: ['Medewerkerstevredenheid en betrokkenheid', 'Behouden van talent en interne mobiliteit', 'Ontwikkeling en verbetering van talent', 'Teamcohesie en cultuur', 'Succesvolle uitvoering van veranderinitiatieven', 'Readiness voor verandering binnen teams', 'Sterkte van de people runway', 'Duurzaamheid van de talentenpool', 'Communicatie- en leiderschapsvaardigheden'],
        relatie: ['Begeleidt medewerkers en werkt met PM, SA, RTE en andere People Developers.', 'Stemt met Scrum Masters, teamcoaches en SA af over teamgroei en vakmanschap.', 'Werkt met P&C, HRBP, Recruitment en lijnmanagement. Zij behouden formele HR-bevoegdheden.', 'Ondersteunt Go-Live met kennis, vaardigheden en vervanging, zonder aparte beslisbevestiging.'],
        ontw: ['Specialiseren in coaching, mentoring, training of verandermanagement.', 'Groeipad naar bredere leiderschapsrollen binnen de organisatie.'],
        strat: 'De People Developer speelt een cruciale rol in het bouwen van een sterke people runway door het ontwikkelen van een veerkrachtige en adaptieve talentenpool. Ze vertalen strategische doelen naar individuele en teamgroei, versterken samenwerking en stimuleren continue verbetering, waardoor de ART en waardestroom succesvol kunnen opereren in een dynamische omgeving.',
        bijdrage: 'Mensen, vaardigheden en continuïteit', t4kAfst: 'Met medewerkers, P&C en T4K' },
      sa: { abbr: 'SA', full: 'System Architect', kern: 'De SA bepaalt de technische visie en bewaakt architecturale samenhang.',
        intro: 'Vertaalt enterprise-kaders naar toetsbare ART-richtlijnen en coacht teams. Verbindt techniek en herstelbaarheid aan het T4K-resultaat.',
        wheel: ['Visie en runway', 'Architectuur en integratie', 'Kwaliteit en kaders', 'Herstel en readiness', 'FinOps en AI'],
        doelen: ['Architectuurvisie verbindt technische keuzes tussen teams.', 'Technische kwaliteit en standaarden geven houvast.', 'De runway ondersteunt toekomstige features en innovatie.', 'Vroege afstemming beperkt obstakels en integratierisico’s.'],
        ai: ['Weegt AI vanaf het ontwerp mee en toetst AI-output.', 'Borgt dataveiligheid en menselijk toezicht in de architectuur.'],
        resp: [['Visie en runway', 'Solution Intent en Context, technische roadmap en runway onderhouden. Met PM diensten, enablers en lifecyclewerk afstemmen.', 'Technische roadmap en runway'],
          ['Architectuur en integratie', 'Proces-, data- en integratiemodellen bewaken. Besluiten, afwijkingen, technische schuld en ketenafhankelijkheden opvolgen.', 'Modellen en architectuurbesluiten'],
          ['Kwaliteit en kaders', 'NFR’s, security-, privacy- en datakaders en engineering quality gates bepalen.', 'NFR’s en quality gates'],
          ['Herstel en readiness', 'Herstel, back-up, restore, fail-over en observability onderbouwen. NFR’s en RTO/RPO aantonen en readiness adviseren.', 'Herstelontwerp en readiness-advies'],
          ['FinOps en AI', 'Cost drivers en lifecyclekosten inzichtelijk maken. AI-guardrails borgen en met PD technische kennis ontwikkelen.', 'Cost drivers en AI-guardrails']],
        meet: [['Runway en vernieuwing', 'Coverage en time-to-market van enablers'], ['Kwaliteit', 'Technische schuld en standaarden'], ['Betrouwbaarheid', 'Performance, integraties en hergebruik'], ['Afstemming', 'Enterprise-alignment en stakeholdertevredenheid']],
        afst: 'Architect Syncs, System Demos, I&A en PI Planning',
        samen: [['Enterprise Architecture', 'Enterprise-kaders en samenhang'], ['PM, RTE en PD', 'T4K-doelen en technische keuzes'], ['Tech Leads, POs en teams', 'Ontwerp en realisatie'], ['Risk en centrale disciplines', 'CISO, Privacy en IT Resilience']],
        mandaat: 'EA en centrale disciplines bepalen enterprise-kaders. Teams ontwerpen en realiseren daarbinnen. Afwijkingen volgen de bevoegde governance.',
        kpi: ['Architectural runway coverage', 'Technische schuldreductie en naleving van kwaliteitsstandaarden', 'System reliability & performance metrics', 'Alignment met enterprise-architectuurprincipes', 'Aantal succesvolle systeemintegraties en PI-demo-resultaten', 'Time-to-market van enabler-features', 'Mate van re-use van architecturale componenten', 'Stakeholdertevredenheid (Product Management, RTE, teams, Enterprise Architecture)'],
        relatie: ['Werkt binnen het T4K samen met PM, RTE en PD en ondersteunt POs, Tech Leads en teams.', 'Stemt architectuur en ketenafhankelijkheden af met andere System Architects en EA.', 'EA en centrale disciplines bepalen enterprise-kaders. Teams ontwerpen en realiseren daarbinnen.', 'Risk, CISO, Privacy en IT Resilience leveren kaders en toetsing. SA onderbouwt technische naleving.', 'Neemt deel aan Architect Syncs, System Demos, Inspect & Adapt en PI Planning.'],
        ontw: ['Groei naar Solution Architect of Enterprise Architect-rol.', 'Verdieping in cloud-, data- of security-architecturen.', 'Verbreding richting tech leadership of architectural governance.', 'Deelname aan innovation tracks, AI-integratie en design thinking-programma’s.', 'Coachingvaardigheden versterken om teams te ondersteunen in technische groei.'],
        strat: 'De System Architect vormt de technische ruggengraat van de ART. Door strategisch inzicht te combineren met pragmatische technische keuzes zorgt hij of zij dat de oplossing duurzaam kan groeien en in lijn blijft met enterprise-doelen. De System Architect versnelt innovatie, vermindert risico’s en maakt schaalbare klantwaarde mogelijk door een heldere architecturale koers te bewaken.',
        bijdrage: 'Architectuur, kwaliteit en herstelbaarheid', t4kAfst: 'Met teams, EA en centrale disciplines' }
    };
    C.f5.k = ['Aanjager van de transformatie', 'Bewaakt en verbetert de werkwijze', 'Coacht leiders, RTE’s en teams'];
    C.f5.r = ['rte', 't4k', 'f3'];
    if (ai) {
      I.f2 = ['Outcome-Driven Development', 'Bij outcome-driven development sturen we niet op hoeveel we opleveren, maar op wat het oplevert. Uitkomsten leggen we vast op portfolio-, ART-, PI- en teamniveau, en met metingen toetsen we steeds of ons werk die uitkomsten echt dichterbij brengt.', null];
      C.f2 = { g: 'Fundament', x: [
        ['Van output naar uitkomst', 'Output is wat we maken: features, releases, rapportages. Een uitkomst is de verandering die dat teweegbrengt bij klant of organisatie, zoals een kortere doorlooptijd, minder fouten in de keten of een hogere tevredenheid. Werk telt pas echt als het bijdraagt aan zo’n uitkomst.'],
        ['Waarom juist nu?', 'Met AI wordt bouwen sneller en goedkoper. Daardoor is het opleveren van features op zichzelf geen onderscheidend vermogen meer. Sterker nog: een stroom aan slecht afgestemde features kan de klantervaring juist verslechteren. Richting geven op uitkomsten wordt daarmee belangrijker dan ooit.'],
        ['De outcome-driven cyclus', 'De cyclus verbindt vijf elementen. Uitkomsten maken de strategische bedoeling expliciet. Prioriteren bepaalt waarin we investeren. Output is het werk dat we leveren, maar telt pas als het uitkomsten oplevert. Metrics laten zien hoe die output presteert. En klant- en bedrijfswaarde maken het resultaat concreet. Korte feedbackloops laten zien of we het werk of de doelen moeten bijstellen.'],
        ['Op elk niveau', 'De cyclus werkt op portfolio-, ART- en teamniveau, elk met een eigen rol. Het portfolio bepaalt de strategische uitkomsten en investeringen, de ART vertaalt die naar uitkomsten per PI, en teams kiezen hun eigen uitkomsten die daaraan bijdragen.'],
        ['De outcome tree', 'Een outcome tree, opgebouwd met OKR’s (Objectives and Key Results), verbindt de strategie van het portfolio met het dagelijkse werk van teams. Zo ziet iedereen hoe het eigen werk bijdraagt aan het grotere doel, en blijft de samenhang zichtbaar als prioriteiten verschuiven.'],
        ['Moonshots en roofshots', 'Niet elke uitkomst heeft hetzelfde ambitieniveau. Roofshots zijn uitdagende maar haalbare doelen waar we op rekenen. Moonshots zijn bewust zeer ambitieus: ook gedeeltelijk succes levert dan veel op. Door uitkomsten zo te typeren balanceren teams tussen voorspelbaarheid en innovatie.']],
        cmp: [['Focus', 'Vooraf bepaalde features opleveren', 'Resultaat voor klant of organisatie'], ['Meten', 'Flow-metrics en releasedatums', 'Impact, behoud, klantwaarde en rendement'], ['Roadmap', 'Lijst van features met datums', 'Uitkomsten die we willen bereiken'], ['Wanneer klaar?', 'Als de feature is opgeleverd', 'Als de beoogde uitkomst is bereikt']],
        k: ['Stuur op uitkomst, niet op output', 'Toets met snelle feedbackloops', 'Een outcome tree verbindt strategie en teamwerk', 'Balanceer roofshots en moonshots'],
        e: 'Voor EDSN betekent dit: niet tellen hoeveel wijzigingen we in de keten doorvoeren, maar meten wat ze opleveren voor marktpartijen, netbeheerders en het energiesysteem.',
        r: ['outcomes', 'artoutcomes', 'sense'] };
    }
    // ---- Story points: bron 'Uitgangspunten gebruik story points' ----
    I.sp = ['Uitgangspunten story points', 'Door story points te normaliseren ontstaat één gedeeld referentiekader voor alle teams in de ART. Teams blijven zelf inschatten, maar op basis van dezelfde kalibratie. Zo wordt velocity beter vergelijkbaar, plannen we capaciteit betrouwbaarder en worden afhankelijkheden eerder zichtbaar.', null];
    open.sp = () => self.setState({ sel: 'sp' });
    C.sp = { g: 'Agile Teams', x: [
      ['Waarom normaliseren?', 'Veel teams gebruiken story points op hun eigen manier. Daardoor zijn inschattingen lastig te vergelijken en wordt planning op ART- en portfolioniveau onnauwkeurig. Dat leidt tot onduidelijkheid over capaciteit, afhankelijkheden en wat realistisch is om in een PI-planning toe te zeggen.'],
      ['Een gedeeld referentiekader', 'De basis is een gemeenschappelijke referentiestory: een eenvoudige user story die binnen één dag door één ontwikkelaar kan worden afgerond. Alle teams schatten ten opzichte van die story. Met gezamenlijke kalibratie in de ART, periodieke Inspect & Adapt en coaching vanuit het LACE blijft de schaal zuiver. Het doel is voorspelbaarheid, niet het meten van productiviteit.']],
      k: ['Gemeenschappelijke referentiestory', 'Gezamenlijke kalibratie tussen teams in de ART', 'Periodieke Inspect & Adapt om bij te sturen', 'Coaching op toepassing en mindset', 'Focus op voorspelbaarheid, niet op productiviteit'],
      e: '', r: ['teams', 'pi', 'f5', 'workitems'] };
    if (!ai) C.teams.r = ['sp'].concat(C.teams.r);
    const spSteps = [['1', 'Gedeelde referentiestory', 'Eén eenvoudige story: binnen één dag af door één ontwikkelaar = 1 punt.', orange, '#2B1A00'],
      ['2', 'Teams schatten zelf', 'Autonoom, maar altijd ten opzichte van dezelfde referentie.', blue, '#FFFFFF'],
      ['3', 'Samen kalibreren', 'Regelmatig toetsen in ART-overleggen en tijdens Inspect & Adapt.', cyan, '#04232E'],
      ['4', 'Voorspelbare PI-planning', 'Betrouwbare capaciteit en eerder zichtbare afhankelijkheden.', navy, '#FFFFFF']];
    const sp = {
      steps: spSteps.flatMap((x, i) => { const st = { isStep: true, isArrow: false, n: x[0], title: x[1], text: x[2], color: x[3], fg: x[4] }; return i < spSteps.length - 1 ? [st, { isStep: false, isArrow: true }] : [st]; }),
      scale: [1, 2, 3, 5, 8, 13].map((v, i) => ({ v, cap: i === 0 ? 'referentie' : '',
        card: 'display:flex;align-items:center;justify-content:center;width:56px;height:' + (44 + i * 14) + 'px;border-radius:8px;font-size:' + (18 + i * 2) + 'px;font-weight:700;' + (i === 0 ? 'background:' + orange + ';color:#2B1A00;' : 'background:#FFFFFF;color:' + navy + ';border:2px solid ' + navy + ';box-sizing:border-box;') + 'box-shadow:0 4px 0 rgba(0,0,0,.12)' })),
      teams: [['Team A', blue, [2, 1, 1, 1, 0, 0]], ['Team B', cyan, [1, 2, 0, 1, 1, 0]], ['Team C', navy, [3, 0, 1, 0, 0, 1]]].map(([name, color, cnt]) => ({ name, color, cells: cnt.map((n) => ({ items: Array.from({ length: n }, (_, j) => ({ j })) })) })),
      principles: [
        ['Gedeelde referentiestory', 'Teams in de ART gebruiken een gezamenlijke referentiestory als baseline voor hun inschattingen.'],
        ['Teams blijven zelf inschatten', 'De autonomie blijft bij de teams; normalisatie is een hulpmiddel, geen voorschrift.'],
        ['Focus op voorspelbaarheid', 'Het doel is een stabielere planning en betrouwbaardere delivery, niet een hogere velocity.'],
        ['Geen vergelijking van teamperformance', 'Story points worden nooit gebruikt om teams onderling te beoordelen of op productiviteit te sturen.'],
        ['Continu kalibreren', 'Teams toetsen en verfijnen hun inschattingen regelmatig in ART-overleggen of tijdens Inspect & Adapt.'],
        ['Flow', 'We sturen op doorstroom en waardecreatie, niet op het aantal punten dat een team oplevert.'],
        ['Transparante afhankelijkheden', 'Normalisatie helpt afhankelijkheden eerder te herkennen en realistische afspraken te maken.'],
        ['Metrics als stuurinformatie', 'Story points ondersteunen besluiten op portfolio- en ART-niveau, altijd samen met andere flow- en kwaliteitsmetrics.'],
        ['Coaching en ondersteuning', 'Het LACE helpt teams actief met toepassing, mindset en consistent gebruik.'],
        ['Geen herinschatting van het verleden', 'Historische story points blijven staan; herijken doen we alleen voor toekomstige inschattingen.']
      ].map(([title, text], i) => ({ n: i + 1, title, text, color: [blue, cyan, orange, navy, green][i % 5], fg: ['#FFFFFF', '#04232E', '#2B1A00', '#FFFFFF', '#1F2604'][i % 5] })),
      alts: [
        ['Story points (genormaliseerd)', 'Inschatten en plannen op team-, ART- en portfolioniveau', 'Ja, de basis voor forecasting', 'Ondersteund', 'Onze standaard, met een gedeelde referentiestory', true],
        ['Feature points', 'Features snel onderling vergelijken, bijvoorbeeld in een WSJF-sessie met de Fibonacci-reeks', 'Alleen na omrekenen naar story points (bijv. 8 feature points ≈ 70 story points)', 'Niet ondersteund', 'Optionele tussenstap; de ART kiest zelf of ze die wil zetten', false],
        ['Aantal stories', 'Eenvoudig tellen en inzicht in de doorstroom van stories', 'Minder geschikt: stories ontstaan pas laat en hun omvang is niet zichtbaar', 'Niet ondersteund', 'Waardevol als aanvullend inzicht, niet voor forecasting', false]
      ].map(([name, use, fc, ja, concl, best]) => ({ name, use, fc, ja, concl,
        row: 'display:grid;grid-template-columns:170px minmax(0,1.2fr) minmax(0,1.2fr) 130px minmax(0,1.3fr);gap:16px;padding:16px 18px;border-radius:10px;align-items:start;' + (best ? 'border:2px solid ' + orange + ';background:#FFF8EC' : 'border:1px solid #D5DBE5'),
        jaStyle: 'align-self:start;justify-self:start;padding:3px 10px;border-radius:12px;font-size:13px;font-weight:700;' + (best ? 'background:#E3F2D3;color:#2F4A0B' : 'background:#F1F4F8;color:#5A6478') }))
    };
    const laneDefs = [['Team A', blue, '#FFFFFF'], ['Team B', cyan, '#04232E'], ['Team C', navy, '#FFFFFF']];
    sp.lanes = laneDefs.map(([name, col, fg], i) => ({ name,
      style: 'position:absolute;left:92px;top:' + (28 + i * 90) + 'px;width:470px;height:62px;border-radius:10px;background:#FFFFFF;border:1.5px solid #D5DBE5;box-sizing:border-box',
      pill: 'position:absolute;left:8px;top:-11px;padding:2px 10px;border-radius:10px;background:' + col + ';color:' + fg + ';font-size:11px;font-weight:700',
      fill: 'display:block;height:100%;width:' + [92, 78, 86][i] + '%;border-radius:7px;background:' + col + ';animation-delay:' + (-i * 0.6) + 's;animation-play-state:' + play }));
    const ptsByLane = [[3, 1, 5], [2, 8, 3], [5, 2, 1]];
    sp.cards = [];
    laneDefs.forEach(([name, col], i) => { [0, 1, 2].forEach((k) => {
      const d = -(k * 2 + i * 0.7);
      sp.cards.push({ pts: ptsByLane[i][k],
        style: 'left:104px;top:' + (28 + i * 90 + 14) + 'px;width:62px;height:34px;display:flex;align-items:center;justify-content:center;border-radius:5px;background:#FFFFFF;border:2px solid ' + col + ';box-sizing:border-box;font-size:12px;font-weight:600;color:#1B2A5C;box-shadow:0 3px 0 rgba(0,0,0,.12);animation-delay:' + d + 's;animation-play-state:' + play,
        badge: 'position:absolute;right:-11px;top:-12px;display:flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:' + orange + ';color:#2B1A00;font-size:12px;font-weight:700;animation-delay:' + d + 's;animation-play-state:' + play });
    }); });
    sp.animSteps = spSteps.map((x, i) => ({ n: x[0], title: x[1],
      style: 'display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;background:#FFFFFF;border:1.5px solid #D5DBE5;font-size:14px;font-weight:700;color:#1B2A5C;animation-delay:' + [0, -9, -6, -3][i] + 's;animation-play-state:' + play,
      dot: 'flex-shrink:0;display:flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:50%;background:' + x[3] + ';color:' + x[4] + ';font-size:14px;font-weight:700' }));
    // ---- VPT / Feature Kanban: bron 'Werkwijze Feature Kanban-proces' (J. van Diermen) ----
    I.vpt = ['VPT / Feature Kanban', 'Het Feature Kanban-proces maakt de weg van een eerste idee naar een afgeronde feature inzichtelijk en beheersbaar. Iedere fase heeft een duidelijk doel, een eigenaar en expliciete criteria om werk door te zetten. De Product Manager stuurt met het VPT op waarde en prioriteit, de Product Owner en het DevOps-team werken de feature uit, realiseren en testen haar, en de Product Manager valideert het eindresultaat.', null];
    open.vpt = () => self.setState({ sel: 'vpt', vptStep: 0 });
    open.cflow = () => self.setState({ sel: 'cflow', cfStep: 0 });
    open.wow = ai ? open.cflow : open.vpt;
    I.cflow = ['Continuous Flow', 'In AI-Native EDSN stroomt werk niet meer door fasen en poortjes, maar door een continue lus van vijf stappen: discover, specify, build, validate en release. Teams van mensen en AI-agents leveren in kleine stappen, en de ART stuurt elke iteratie bij in Sense and Respond en elke PI in PI Outcome Planning. Zo blijft de snelheid van AI gekoppeld aan echte uitkomsten voor de klant.', null];
    C.cflow = { g: 'Agile Release Train', x: [], k: ['Een lus in plaats van poortjes', 'Sturen op uitkomsten, niet op output', 'Elke iteratie bijsturen in Sense and Respond', 'Mensen beslissen, agents versnellen'], e: '', r: ['pipeline', 'sense', 'pi', 't4k'] };
    // ---- AI Innovation Pipeline: vier lagen (alleen AI-Native EDSN) ----
    const AIP = ['aiwf', 'aipol', 'aiev', 'aiplat'];
    I.aiwf = ['AI-Empowered Workflows', 'De bouwstenen van het werk van een AI-Native team: reeksen stappen om een doel te bereiken, waarin mensen en AI-agents samenwerken. Ze zijn gegrond, verbonden, beheerst, controleerbaar en hebben een eigenaar.', null];
    C.aiwf = { g: 'AI Innovation Pipeline', x: [], k: ['Eigen werkwijze binnen een gedeelde levenscyclus', 'Vijf kwaliteiten: gegrond, verbonden, beheerst, controleerbaar, eigenaar', 'AI maakt ‘vaak overgeslagen’ workflows haalbaar', 'Leg processen expliciet vast voor agents'], e: '', r: ['pipeline', 'aipol', 'aiev', 'aiplat'] };
    I.aipol = ['Embedded Policies', 'Kaders die in elke stap van elke workflow zijn ingebouwd: systeemkwaliteiten, standaarden en checks. Ze bepalen grenzen, goedkeuringen en stopregels, zodat mensen en agents veilig en verantwoord werken.', null];
    C.aipol = { g: 'AI Innovation Pipeline', x: [], k: ['Compliance in elke stap, niet bij de poort', 'Mens in de lus bij ingrijpende besluiten', 'Mens op de lus bij routinewerk', 'Bevoegdheid van agents: toegekend, begrensd en verdiend'], e: '', r: ['pipeline', 'governance', 'aiwf', 'aiev'] };
    I.aiev = ['Insights and Evidence', 'Het audittrail van alles wat mensen en agents doen in de pipeline, en de inzichten die we daaruit halen over het product én over hoe we het bouwen. Bewijs maakt vertrouwen, en vertrouwen maakt verantwoord risico nemen mogelijk.', null];
    C.aiev = { g: 'AI Innovation Pipeline', x: [], k: ['Elk werk is controleerbaar', 'Bewijs bouwt vertrouwen', 'Snel de oorzaak vinden en bijsturen', 'Inzichten voeden de volgende output'], e: '', r: ['pipeline', 'aiwf', 'aiplat', 'sense'] };
    I.aiplat = ['Shared Platforms', 'Het control plane van de AI Innovation Pipeline: de gedeelde technische basis die workflows, kaders, inzichten en bewijs verbindt, en die werk met de context erbij van workflow naar workflow brengt.', null];
    C.aiplat = { g: 'AI Innovation Pipeline', x: [], k: ['Eén control plane voor alle teams', 'Bewezen basis naar beneden, verbeteringen omhoog', 'Context reist mee met het werk', 'Consistentie én lokale vrijheid'], e: '', r: ['pipeline', 'aiwf', 'aipol', 'itf'] };
    AIP.forEach((k) => { open[k] = () => self.setState({ sel: k }); });
    C.vpt = { g: 'Agile Release Train', x: [], k: ['Van idee naar voorspelbaar geleverde waarde', 'Elke fase: doel, eigenaar en expliciete criteria', 'WIP-limieten houden de flow gezond', 'DoR vóór planning, DoD vóór release'], e: '', r: ['pm', 'backlog', 'workitems', 'pi'] };
    const VS = [
      ['Funnel', 'ready', '', 'PM', 'Features vanuit epics, nieuwe werkitems, ideeën en verzoeken centraal verzamelen.', ['De indiener meldt de feature met een idee, functionele titel en bij voorkeur een eerste hypothese.', 'De Product Manager registreert de feature in Jira op het VPT-project.', 'De Product Manager en het VPT bepalen met opdrachtgevers welke features doorgaan.', 'Features zonder voldoende informatie blijven staan; features zonder voldoende waarde worden gestopt.'], 'De feature is geregistreerd met indiener, titel, urgentie of gewenste PI, epic-koppeling, verwachte teams, waarde en eerste hypothese.', 'Product Manager', 'Idee geregistreerd'],
      ['Pulled by VPT', 'ready', 'WIP', 'PM', 'De eerste onderdelen van het feature canvas invullen, gericht op het ‘wat’.', ['De Product Manager en het VPT bepalen welke features nodig zijn en in welke volgorde ze worden uitgewerkt.', 'De feature wordt zo klein mogelijk gemaakt, bij voorkeur als MVP.', 'De Product Manager werkt het feature canvas uit; delegatie aan een VPT-lid is mogelijk.', 'De Product Owner geeft akkoord voor teamrefinement.'], 'Feature statement, succesmeting, acceptatiecriteria, impact, architectuur op hoofdlijnen, estimate, stakeholders, scope en requirements zijn vastgelegd.', 'Product Manager', 'Canvas ‘wat’ ingevuld'],
      ['Feature refinement', 'ready', 'WIP', 'PO', 'De feature gereedmaken voor uitvoering volgens de Definition of Ready.', ['De Product Owner refinet de feature met teams en specialisten.', 'Het feature canvas wordt compleet gemaakt.', 'Bekende stories worden aangemaakt.', 'De Product Owner beoordeelt of de feature naar de backlog kan.'], 'Afhankelijkheden, risico’s, metingen, solution design en testen zijn uitgewerkt en de feature voldoet aan de Definition of Ready.', 'Product Owner', 'Canvas compleet'],
      ['Feature backlog', 'ready', 'DoR', 'PM', 'Gerefinede features prioriteren en gereedzetten voor planning in een PI.', ['De Product Manager onderhoudt samen met de Product Owners de prioriteit.', 'DevOps-teams bepalen tijdens de PI-planning welke features zij kunnen oppakken.', 'Bij het pullen wordt de Product Owner aan de feature gekoppeld.'], 'De feature is planbaar, geprioriteerd en voldoet aan de Definition of Ready.', 'Product Manager', 'Geprioriteerd en planbaar'],
      ['Pulled by team', 'done', 'WIP', 'PO', 'De feature bouwen, testen en voorbereiden op validatie door de eindgebruiker.', ['Het team committeert de feature tijdens de PI-planning of pullt deze later bij beschikbare ruimte.', 'De Product Owner verfijnt de stories en bewaakt de voortgang.', 'Het DevOps-team bouwt en test, waar nodig samen met de business.', 'Na afronding zet de Product Owner de feature op Validating.'], 'Alle stories zijn gereed en de feature is klaar voor validatie.', 'Product Owner', 'Bouwen en testen'],
      ['Validating', 'done', '', 'PM', 'Controleren of de feature aan de Definition of Done voldoet en gereed is voor release.', ['De Product Manager controleert het feature canvas, testverslag, documentatie en eventuele businessakkoorden.', 'De Product Manager valideert de feature aan de hand van de Definition of Done.', 'Bij akkoord gaat de feature naar Release; anders terug naar Pulled by team.'], 'De feature is geaccepteerd en releaseklaar.', 'Product Manager', '↺ geen akkoord: terug'],
      ['Release', 'done', 'WIP', 'PO', 'De functionaliteit beschikbaar maken voor de eindgebruiker.', ['De feature wordt opgenomen in de eerstvolgende release.', 'Bij directe levering duurt deze fase kort; bij periodieke releases kan de feature langer wachten.', 'Na vrijgave wordt de feature voorbereid op afronding.'], 'De feature is gereleased en beschikbaar voor de eindgebruiker.', 'Product Owner', 'Wacht op vrijgave'],
      ['Done', 'done', 'DoD', 'PM', 'Gereleasde features afronden en gestopte features sluiten.', ['De Product Manager sluit de feature zodra deze op productie staat.', 'De opbrengst van de feature wordt geëvalueerd.', 'Opdrachtgevers, strategiehouders, de idee-eigenaar en architecten worden geïnformeerd.', 'Het resultaat kan worden getoond in een system demo of PI review.'], 'De feature is volledig afgerond of bewust gesloten.', 'Product Manager', 'Geaccepteerd en geëvalueerd']];
    const vs = Math.max(0, Math.min(7, self.state.vptStep || 0));
    const setStep = (i) => self.setState({ vptStep: (i + 8) % 8 });
    const pmCol = '#0E5F96', poCol = '#3B7898';
    const vpt = {
      glance: [['Product Manager', 'Bepaalt de prioriteit, stuurt met het VPT op waarde, valideert het resultaat en sluit de feature.', pmCol], ['Product Owner + DevOps-team', 'Werken de feature uit met refinement, realiseren en testen haar en begeleiden haar naar validatie en release.', poCol], ['VPT', 'Helpt features selecteren, prioriteren, verkleinen en inhoudelijk gereedmaken voor teamrefinement.', orange]]
        .map(([who, text, c]) => ({ who, text, chip: 'align-self:flex-start;padding:3px 10px;border-radius:10px;background:' + c + ';color:' + (c === orange ? '#2B1A00' : '#FFFFFF') + ';font-size:12px;font-weight:700' })),
      cols: VS.map((v, i) => {
        const x = i * 140, y = 24, on = i === vs;
        const tagCol = v[2] === 'WIP' ? orange : (v[2] === 'DoR' ? blue : green);
        return { name: (i + 1) + '. ' + v[0], tag: v[2], hasTag: !!v[2], owner: v[3] === 'PM' ? 'Product Manager' : 'Product Owner', on,
          tagClass: v[2] === 'WIP' ? 'vpt-wip' : '',
          tagStyle: 'flex-shrink:0;padding:2px 7px;border-radius:8px;font-size:10px;font-weight:700;background:' + tagCol + ';color:' + (v[2] === 'DoR' ? '#FFFFFF' : '#2B1A00') + ';animation-play-state:' + play,
          ownerStyle: 'font-size:11px;font-weight:600;color:' + (v[3] === 'PM' ? pmCol : poCol),
          box: 'position:absolute;left:' + x + 'px;top:' + y + 'px;width:134px;height:190px;border-radius:12px;background:#FFFFFF;border:' + (on ? '2.5px solid ' + navy : '1.5px solid #D5DBE5') + ';box-sizing:border-box',
          head: 'position:absolute;left:' + (x + 2) + 'px;top:' + (y + 2) + 'px;width:130px;height:60px;padding:6px 9px;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;gap:2px;border:0;border-bottom:1px solid #E6EAF0;border-radius:10px 10px 0 0;background:' + (on ? tintD : '#FFFFFF') + ';cursor:pointer;font-family:inherit;text-align:left',
          hint: 'position:absolute;left:' + (x + 9) + 'px;top:' + (y + 150) + 'px;width:116px;font-size:11px;line-height:1.3;color:#5A6478',
          hintText: v[8], pick: () => setStep(i) };
      }),
      cards: [['Feature A', blue], ['Feature B', orange], ['Feature C', cyan], ['Feature D', navy]].map(([label, color], i) => ({ label, color,
        style: 'left:9px;top:124px;width:116px;height:34px;display:flex;align-items:center;gap:8px;padding:0 10px;box-sizing:border-box;border-radius:6px;background:#FFFFFF;border:1.5px solid #C9D1DD;box-shadow:0 3px 0 rgba(27,42,92,.12);font-size:12px;font-weight:700;color:#1B2A5C;pointer-events:none;animation-delay:' + (-i * 4) + 's;animation-play-state:' + play,
        done: 'margin-left:auto;display:flex;align-items:center;justify-content:center;width:20px;height:20px;border-radius:50%;background:' + green + ';color:#1F2604;font-size:12px;font-weight:700;animation-delay:' + (-i * 4) + 's;animation-play-state:' + play })),
      step: { kicker: (VS[vs][1] === 'ready' ? 'Flow to ready' : 'Flow to done') + ' · stap ' + ((vs % 4) + 1) + ' van 4' + (VS[vs][2] ? ' · ' + VS[vs][2] : ''), title: (vs + 1) + '. ' + VS[vs][0], doel: VS[vs][4], acts: VS[vs][5].map((text) => ({ text })), res: VS[vs][6], owner: VS[vs][7],
        panel: 'padding:24px 26px;border-radius:16px;background:' + tintD + ';border:1.5px solid #D5DBE5;display:flex;flex-direction:column;gap:14px' },
      prev: () => setStep(vs - 1), next: () => setStep(vs + 1),
      roles: [
        ['PM', 'Product Manager', pmCol, '#FFFFFF', 'Prioriteert in alle fasen, stuurt met het VPT op waarde, valideert het resultaat en sluit de feature.', [['Vanuit een epic naar features? Nieuw idee?', 'Registreer het in de Funnel en leg de minimale informatie vast.'], ['Voldoende waarde en informatie?', 'Trek de feature naar Pulled by VPT en werk haar in de juiste prioriteit uit met het VPT.'], ['Realisatie afgerond?', 'Valideer de Definition of Done en bepaal of de feature naar Release kan.'], ['Op productie?', 'Zet de feature op Done, evalueer de opbrengst en informeer opdrachtgevers.']]],
        ['VPT', 'VPT', orange, '#2B1A00', 'Helpt features selecteren, prioriteren, verkleinen en inhoudelijk gereedmaken voor teamrefinement.', [['', 'Beoordeel waarde, urgentie en samenhang.'], ['', 'Help de feature te verkleinen tot een haalbaar MVP.'], ['', 'Breng de hoogst geprioriteerde items wekelijks een stap verder.']]],
        ['PO', 'Product Owner', poCol, '#FFFFFF', 'Organiseert refinement met het team, bewaakt realisatie en voortgang en begeleidt de feature richting validatie en release.', [['Klaar voor teamrefinement?', 'Werk de feature met team en specialisten uit tot ze voldoet aan de Definition of Ready.'], ['Gepland in de PI?', 'Zet de status op Pulled by team en bewaak voortgang en afhankelijkheden.'], ['Stories gereed?', 'Controleer de resultaten en zet de feature op Validating.'], ['Vrijgave mogelijk?', 'Begeleid de feature vanuit Release naar productie.']]],
        ['DT', 'DevOps-team', cyan, '#04232E', 'Splitst de feature in stories, realiseert en test de oplossing en levert bewijs dat aan de afspraken is voldaan.', [['', 'Maak stories en taken concreet.'], ['', 'Realiseer, test en documenteer de oplossing.'], ['', 'Maak aantoonbaar dat stories en feature aan de afgesproken criteria voldoen.']]]
      ].map(([abbr, name, c, fg, who, items]) => ({ abbr, name, who,
        items: items.map(([q, a]) => ({ q, a, hasQ: !!q })),
        box: 'padding:20px 22px;border-radius:14px;border:1.5px solid #D5DBE5;border-top:5px solid ' + c + ';display:flex;flex-direction:column;gap:8px',
        badge: 'display:flex;align-items:center;justify-content:center;min-width:38px;height:30px;padding:0 6px;border-radius:8px;background:' + c + ';color:' + fg + ';font-size:13px;font-weight:700' })),
      defs: [
        ['DoR', 'Definition of Ready', 'Een feature is klaar voor planning wanneer:', blue, ['Feature statement en acceptatiecriteria helder zijn.', 'Feature-eigenaar en acceptanten zijn vastgelegd.', 'Grootte, waarde en WSJF zijn bepaald.', 'Scope en requirements zijn beschreven.', 'Impact op diensten en applicatielandschap is vastgelegd.', 'Alle stakeholders zijn benoemd.', 'Impact op privacy, security en compliance is vastgelegd.', 'Cruciale afhankelijkheden correct zijn vastgelegd.']],
        ['DoD', 'Definition of Done', 'Een feature is inhoudelijk gereed wanneer:', '#5E8A12', ['Acceptanten de feature hebben geaccepteerd.', 'Aan acceptatiecriteria is voldaan of afwijkingen zijn gemitigeerd.', 'Alle stories en taken Done of buiten scope zijn.', 'Het resultaat beschikbaar en toegankelijk is.', 'Compliance-eisen zijn verwerkt of gemitigeerd.', 'Technische en functionele documentatie actueel en toegankelijk is.', 'CAPEX-percentage en definitieve story points zijn vastgelegd.', 'Er geen open punten meer in de opmerkingen staan.']]
      ].map(([abbr, title, intro, c, items]) => ({ abbr, title, intro, color: c, items: items.map((text) => ({ text })),
        box: 'padding:20px 22px;border-radius:14px;border:1.5px solid #D5DBE5;display:flex;flex-direction:column;gap:9px',
        badge: 'display:flex;align-items:center;justify-content:center;min-width:44px;height:30px;border-radius:8px;background:' + (abbr === 'DoR' ? blue : green) + ';color:' + (abbr === 'DoR' ? '#FFFFFF' : '#1F2604') + ';font-size:13px;font-weight:700' })),
      canvas: [['1. Funnel', ['Indiener, titel en urgentie', 'Deadline of gewenste PI', 'Koppeling met epic en verwachte teams', 'Waarde: klant, business, operationeel en strategisch']],
        ['2. Pulled by VPT', ['Feature statement: wat wordt gevraagd?', 'Hypothese en manier om succes te meten', 'Acceptatiecriteria, scope en requirements', 'Impact op markt, privacy, security, communicatie, datastandaarden en control framework', 'Hoofdlijnen architectuur, estimate en stakeholders']],
        ['3. Feature refinement', ['Afhankelijkheden en risico’s', 'Solution design en testaanpak', 'Bekende stories']]]
        .flatMap(([phase, items], i, arr) => { const col = { isCol: true, isArrow: false, phase, items: items.map((text) => ({ text })), chip: 'align-self:flex-start;padding:3px 10px;border-radius:10px;background:' + navy + ';color:#FFFFFF;font-size:12px;font-weight:700' }; return i < arr.length - 1 ? [col, { isCol: false, isArrow: true, items: [] }] : [col]; })
    };
    const IC = {
      wrench: 'M14.5 4.5a4.5 4.5 0 0 0-5.6 5.6L3.5 15.5l5 5 5.4-5.4a4.5 4.5 0 0 0 5.6-5.6l-2.8 2.8-3.4-.8-.8-3.4z',
      pipe: 'M3 6h6l3 6h9M3 18h6l3-6M18 9l3 3-3 3',
      shield: 'M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6zM8.5 12l2.5 2.5 4.5-5',
      book: 'M3 5h6a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H3zM21 5h-6a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h7z',
      spark: 'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM18 16l.8 2.2L21 19l-2.2.8L18 22l-.8-2.2L15 19l2.2-.8z',
      onboard: 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21v-1a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v1M19 8v6M16 11h6',
      cloud: 'M7 18h10a4 4 0 0 0 .5-8 6 6 0 0 0-11.5 1.5A3.3 3.3 0 0 0 7 18z',
      data: 'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3',
      integ: 'M4 8h14l-3-3M20 16H6l3 3',
      sec: 'M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z',
      mon: 'M3 12h4l2-5 4 10 2-5h6',
      chip: 'M7 7h10v10H7zM10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4',
      more: 'M6 12h.01M12 12h.01M18 12h.01' };
    const eeChips = (ai ? [['Tooling', 'wrench'], ['Pipelines', 'pipe'], ['Standaarden', 'shield'], ['Kennisdeling', 'book'], ['AI-assistenten', 'spark']]
      : [['Tooling', 'wrench'], ['Pipelines', 'pipe'], ['Standaarden', 'shield'], ['Kennisdeling', 'book'], ['Onboarding', 'onboard']]).map(([label, k]) => ({ label, icon: IC[k] }));
    const itfDefs = ai ? [['Cloud', 'cloud'], ['Data', 'data'], ['Integratie', 'integ'], ['Security', 'sec'], ['AI-platform', 'chip'], ['…', 'more']]
      : [['Cloud', 'cloud'], ['Data', 'data'], ['Integratie', 'integ'], ['Security', 'sec'], ['Monitoring', 'mon'], ['…', 'more']];
    const itf = itfDefs.map(([label, k], i) => ({ label, icon: IC[k],
      tile: 'display:flex;align-items:center;gap:8px;height:52px;padding:0 16px;box-sizing:border-box;border-radius:8px;font-size:14px;font-weight:700;color:#FFFFFF;' + (k === 'more' ? 'border:2px dashed rgba(255,255,255,.45);background:transparent' : 'background:' + (i % 2 ? blue : 'color-mix(in srgb, ' + navy + ' 75%, #FFFFFF)') + ';box-shadow:0 4px 0 rgba(0,0,0,.3)') }));
    I.ee = ['Engineering Enablement', 'Engineering Enablement ondersteunt elke engineer in de ART, zodat teams zich kunnen richten op waarde in plaats van op gereedschap. Het hoort bij elke ART en staat dicht bij de teams: van tooling en pipelines tot standaarden en kennisdeling' + L('.', ', inclusief het veilig en effectief werken met AI-assistenten en agents.'), null];
    I.ade = ['ART Development & Enablement', 'ART Development & Enablement is de people runway van de ART: hier komen de ontwikkeling van mensen en de run en het beheer van de ART samen. Het loopt continu door, naast het bouwen in de pipeline, en zorgt dat wat de ART oplevert betrouwbaar blijft draaien: van incidenten en monitoring tot releases en lifecycle management.', null];
    I.itf = ['IT Foundation (ITF)', 'IT Foundation is de ondersteunende laag onder alle ART’s. ITF levert gedeelde IT-bouwblokken waar elke ART op bouwt, zodat teams niet steeds zelf het wiel hoeven uit te vinden en de keten stabiel, veilig en consistent blijft.', null];
    ['ee', 'ade', 'itf'].forEach((k) => { open[k] = () => self.setState({ sel: k }); });
    C.ee = { g: 'Agile Release Train', x: [
      ['Wat is Engineering Enablement?', 'Engineering Enablement richt zich op de engineer zelf: de mensen die specificeren, bouwen en testen. Het zorgt voor een goede ontwikkelomgeving, heldere standaarden en snelle ondersteuning, zodat engineers minder tijd kwijt zijn aan randzaken en meer tijd hebben voor het leveren van waarde.'],
      ['Waarmee ondersteunt het?', 'Denk aan ontwikkeltooling, herbruikbare CI/CD-pipelines en templates, codekwaliteit en teststandaarden, onboarding van nieuwe engineers, en kennisdeling via communities of practice.' + L('', ' In AI-Native EDSN hoort daar ook het veilig inzetten van AI-assistenten en agents bij, met duidelijke richtlijnen en goede voorbeelden.')],
      ['Waarom per ART?', 'Engineering Enablement zit dicht bij de teams. Zo sluit de ondersteuning aan op de techniek en de werkwijze van de ART, en worden knelpunten snel opgepakt. Waar mogelijk wordt gebruikgemaakt van de bouwblokken van ITF.'],
      ['Samenwerking', 'Engineering Enablement werkt nauw samen met de System Architect (standaarden en runway), de People Developer (vakmanschap en skills) en het LACE (werkwijze en coaching).']],
      k: ['Ondersteunt elke engineer', 'Tooling, pipelines en standaarden', L('Kennisdeling en onboarding', 'Veilig werken met AI-assistenten'), 'Dicht bij de teams, per ART'], e: '', r: ['teams', 'sa', 'peopledev', 'itf'] };
    C.ade = { g: 'Agile Release Train', x: [
      ['Wat valt eronder?', 'Alles wat nodig is om de oplossingen van de ART betrouwbaar te laten draaien: incidentafhandeling, monitoring en observability, releases en deployments, lifecycle management van applicaties en componenten, en het borgen van continuïteit.'],
      ['Run en change in één cadans', 'Run en beheer staan niet los van ontwikkeling. Ze lopen parallel aan de pipeline en delen dezelfde ART-cadans. Zo worden beheerwerk, verbeteringen en nieuwe features samen gepland en afgewogen, en is de impact van wijzigingen op de run direct zichtbaar.'],
      ['Samenhang met het T4K', 'De RTE regisseert run, incidentreadiness, Go-Live en BCM. De Product Manager bepaalt met de SA de dienstniveaus en RTO/RPO. De System Architect onderbouwt herstel, back-up en observability. ART Development & Enablement is de plek waar dat in de praktijk samenkomt.'],
      ['Doorlopend verbeteren', 'Signalen uit beheer, zoals incidenten, storingen en technische schuld, worden als enablers en verbeteritems terug de backlog in gebracht. Zo wordt de ART steeds stabieler.' + L('', ' AI kan helpen bij het sneller signaleren en analyseren van verstoringen.')]],
      k: ['Run en beheer horen bij de ART', 'Eén cadans voor run en change', 'Betrouwbaar draaien wat we leveren', 'Signalen uit beheer voeden de backlog'], e: '', r: ['rte', 'sa', 'vpt', 'itf'] };
    C.itf = { g: 'Fundament', x: [
      ['Wat is ITF?', 'IT Foundation is een ondersteunende laag die gedeelde IT-voorzieningen levert aan alle ART’s. Denk aan bouwblokken zoals cloud en hosting, data, integratie, security en monitoring' + L('', ', en in AI-Native EDSN ook een AI-platform') + '. De genoemde blokken in de plaat zijn voorbeelden.'],
      ['Waarom gedeelde bouwblokken?', 'Als elke ART zijn eigen basisvoorzieningen bouwt, ontstaan dubbel werk, verschillen in kwaliteit en extra risico’s. Gedeelde bouwblokken zorgen voor snelheid, consistentie en een veilige, stabiele basis onder de hele keten.'],
      ['Hoe werken ART’s met ITF?', 'ART’s nemen bouwblokken af als dienst. Behoeften en wijzigingen worden tijdig afgestemd, bijvoorbeeld via de System Architect en tijdens PI Planning, en waar nodig als enablers opgenomen in de backlog.'],
      ['Geen ART, wel de basis', 'ITF is zelf geen ART in de Big Picture, maar de fundering eronder. Daarom staat het als laag ónder de ART-vloer: elke ART bouwt erop.']],
      k: ['Ondersteunende laag onder alle ART’s', 'Gedeelde bouwblokken als dienst', 'Snelheid, consistentie en veiligheid', 'Afstemming via SA en PI Planning'], e: '', r: ['platforms', 'sa', 'ade', 'ee'] };
    // ---- Engineering Enablement: engineeringorganisatie ----
    const eePathDefs = [['Code', 'M8 7l-5 5 5 5M16 7l5 5-5 5', 'Repo-templates, IDE-setup' + L(', code-standaarden', ', AI-codeassistent')],
      ['Build', 'M14.5 4.5a4.5 4.5 0 0 0-5.6 5.6L3.5 15.5l5 5 5.4-5.4a4.5 4.5 0 0 0 5.6-5.6l-2.8 2.8-3.4-.8-.8-3.4z', 'Herbruikbare CI-pipelines en build-runners'],
      ['Test', 'M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3', 'Testframeworks en geautomatiseerde quality gates'],
      ['Secure', 'M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6zM8.5 12l2.5 2.5 4.5-5', 'Security- en dependency-scans in de pipeline'],
      ['Deploy', 'M5 19c2-6 6-10 14-14-1 8-5 12-11 14zM9 15l-4 4', 'Deploy-templates, environments als code'],
      ['Observe', 'M3 12h4l2-5 4 10 2-5h6', 'Logging, dashboards en alerts standaard aan']];
    const hiCols = [navy, blue, cyan, orange, green, navy];
    const ee = {
      tok: 'top:14px;width:104px;justify-content:center;box-sizing:border-box;display:flex;align-items:center;gap:6px;height:30px;padding:0 12px;border-radius:15px;background:' + orange + ';color:#2B1A00;font-size:12px;font-weight:700;box-shadow:0 3px 0 rgba(0,0,0,.2);animation-play-state:' + play,
      path: eePathDefs.map(([name, icon, txt], i) => ({ name, icon, ee: txt,
        box: '--hi:' + hiCols[i] + ';padding:14px 12px;border-radius:12px;background:#FFFFFF;border:2px solid #D5DBE5;display:flex;flex-direction:column;gap:6px;animation-delay:' + (i ? -(12 - 2 * i) : 0) + 's;animation-play-state:' + play,
        iconBox: 'display:flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:10px;background:' + hiCols[i] })),
      services: [
        ['Developer experience & werkplek', 'Een snelle, prettige ontwikkelomgeving: laptops, toegang, IDE’s en lokale tooling die gewoon werken.', 'M3 5h18v11H3zM8 20h8M12 16v4'],
        ['Golden paths & templates', 'Standaardroutes en startprojecten voor veelvoorkomende toepassingen, inclusief pipeline, tests en monitoring.', 'M4 19c4-1 6-5 8-9s4-6 8-6M4 5h4M16 19h4'],
        ['CI/CD-pipelines', 'Herbruikbare pipelines en runners, zodat elke wijziging snel en veilig naar productie kan.', 'M3 6h6l3 6h9M3 18h6l3-6M18 9l3 3-3 3'],
        ['Kwaliteit & test', 'Testframeworks, testdata-aanpak en quality gates die vroeg in het proces feedback geven.', 'M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3'],
        ['Security by design', 'Security- en privacychecks ingebouwd in de pipeline, met heldere richtlijnen voor engineers.', 'M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z'],
        ['Inner source', 'Code, componenten en oplossingen delen over teams en ART’s heen, met duidelijke bijdrageregels.', 'M6 3v12M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 9a9 9 0 0 1-9 9'],
        ['Kennis & communities', 'Chapters, guilds, tech talks en een gedeelde kennisbank. Leren van en met elkaar.', 'M3 5h6a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H3zM21 5h-6a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h7z'],
        ai ? ['AI-assistenten & agents', 'Veilig en effectief werken met AI in het hele ontwikkelproces: van codeassistent tot test- en reviewagents.', 'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z']
           : ['Onboarding & mentoring', 'Nieuwe engineers binnen dagen productief, met een buddy, een starterspakket en een eerste wijziging in productie.', 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21v-1a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v1M19 8v6M16 11h6']
      ].map(([title, text, icon], i) => { const c = [blue, cyan, navy, orange][i % 4]; return { title, text, icon, fg: '#FFFFFF',
        iconBox: 'flex-shrink:0;display:flex;align-items:center;justify-content:center;width:42px;height:42px;border-radius:12px;background:' + c }; }),
      teams: ['Team A', 'Team B', 'Team C', 'Team D'].map((name) => ({ name, head: 'text-align:center;padding:6px 0;border-radius:8px;background:#FFFFFF;border:1.5px solid #D5DBE5;font-size:13px;font-weight:700;color:#1B2A5C' })),
      chapters: [['Backend', navy, [2, 1, 1, 2]], ['Frontend', blue, [1, 1, 0, 1]], ['Data', cyan, [0, 1, 2, 0]], ['Test & kwaliteit', orange, [1, 1, 1, 1]], ['Ops & cloud', green, [1, 0, 1, 1]]]
        .map(([name, color, cnt]) => ({ name, color, cells: cnt.map((n) => ({ people: Array.from({ length: n }, (_, j) => ({ j })) })) })),
      guilds: (ai ? [['Security', 'Iedereen met interesse in veilig bouwen, over alle teams heen'], ['AI-engineering', 'Delen van ervaringen, prompts, agents en goede voorbeelden']] : [['Security', 'Iedereen met interesse in veilig bouwen, over alle teams heen'], ['Testautomatisering', 'Samen standaarden en tooling voor testen verbeteren']])
        .map(([name, text], i) => ({ name, text, bar: 'display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:' + (i ? 4 : 10) + 'px;padding:9px 14px;border-radius:10px;border:2px dashed ' + (i ? blue : orange) + ';background:#FFFFFF;color:#1B2A5C' })),
      metrics: [['DORA', 'Deploymentfrequentie', 'Hoe vaak we wijzigingen naar productie brengen.', 'Hoger is beter ↑', true],
        ['DORA', 'Doorlooptijd van wijzigingen', 'Tijd van commit tot draaiend in productie.', 'Korter is beter ↓', true],
        ['DORA', 'Change failure rate', 'Aandeel wijzigingen dat tot een verstoring leidt.', 'Lager is beter ↓', true],
        ['DORA', 'Hersteltijd', 'Hoe snel we een verstoring in productie oplossen.', 'Korter is beter ↓', true],
        ['DevEx', 'Developer satisfaction', 'Hoe engineers hun tooling, flow en ondersteuning ervaren.', 'Hoger is beter ↑', false],
        ['DevEx', 'Tijd tot eerste wijziging', 'Hoe snel een nieuwe engineer iets naar productie brengt.', 'Korter is beter ↓', false]]
        .map(([group, name, text, dir, dora]) => ({ group, name, text, dir, dirColor: '#2F6B12',
          box: 'padding:16px;border-radius:12px;border:1.5px solid #D5DBE5;border-top:5px solid ' + (dora ? blue : orange) + ';display:flex;flex-direction:column;gap:6px;min-height:150px;box-sizing:border-box',
          tag: 'align-self:flex-start;padding:2px 8px;border-radius:8px;font-size:11px;font-weight:700;background:' + (dora ? blue : orange) + ';color:' + (dora ? '#FFFFFF' : '#2B1A00') })),
      principles: [['You build it, you run it', 'Teams zijn eigenaar van hun oplossing in productie'], ['Automate everything', 'Wat vaker dan twee keer gebeurt, automatiseren we'], ['Shift left', 'Kwaliteit en security vroeg in het proces'], ['Inner source first', 'Eerst hergebruiken en delen, dan zelf bouwen'], ['Paved roads, geen hekken', 'Standaarden maken het makkelijk, niet verplicht moeilijk'], [L('Continu leren', 'Mens + AI'), L('Tijd en ruimte voor vakmanschap', 'AI versterkt de engineer, de mens beslist')]]
        .map(([title, text], i) => ({ n: i + 1, title, text,
          pill: 'flex:1 1 300px;display:flex;align-items:center;gap:12px;padding:12px 16px;border-radius:12px;background:#F4F6FA',
          num: 'flex-shrink:0;display:flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;background:' + navy + ';color:#FFFFFF;font-size:14px;font-weight:700' }))
    };
    // ---- People runway (bron: whitepaper 'The People Runway of the ART', JLS 2020; eigen woorden) ----
    const ICO = { heart: 'M12 21s-8-5-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 6-8 11-8 11z', bulb: 'M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z', star: 'M12 3l2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z', up: 'M4 18l6-6 4 4 6-8M14 8h6v6', team: 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21v-1a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v1M17 3a4 4 0 0 1 0 8M22 21v-1a6 6 0 0 0-4-5.6', radar: 'M12 12l7-7M12 3a9 9 0 1 0 9 9M12 7a5 5 0 1 0 5 5', path: 'M4 20c3-6 5-6 8-10s5-6 8-6M4 4h4M16 20h4', runway: 'M3 12h18M7 8l-4 4 4 4M17 8l4 4-4 4', search: 'M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM21 21l-5-5', rocket: 'M5 19c2-6 6-10 14-14-1 8-5 12-11 14zM9 15l-4 4', chart: 'M4 20V10M10 20V4M16 20v-8M22 20H2' };
    const pr = {
      authorities: [['Procesautoriteit', 'RTE', 'Release Train Engineer', 'Faciliteert, kijkt vooruit en ruimt belemmeringen op.', '#3B7898', '#FFFFFF', false],
        ['Inhoudsautoriteit', 'PM', 'Product Manager', 'Klant, visie, backlog en roadmap: de juiste dingen bouwen.', '#0E5F96', '#FFFFFF', false],
        ['Ontwerpautoriteit', 'SA', 'System Architect', 'Techniek en systeem: de dingen goed bouwen.', '#00807E', '#FFFFFF', false],
        ['Mensenautoriteit', 'PD', 'People Developer', 'Mensen voorop: talent, leren, teamdynamiek en de people runway.', '#A9BC2B', '#1F2604', true]]
        .map(([kind, abbr, role, focus, bg, fg, isNew]) => ({ kind, abbr, role, focus, isNew, box: 'padding:18px;border-radius:14px;background:' + bg + ';color:' + fg + ';display:flex;flex-direction:column;gap:6px' + (isNew ? ';box-shadow:0 0 0 4px #FFFFFF,0 0 0 7px #A9BC2B' : '') })),
      spiral: ['Lagere motivatie en betrokkenheid', 'Minder waarde en klanttevredenheid', 'Afnemend innovatievermogen', 'Minder veerkracht en aanpassingsvermogen', 'Een vastlopende transformatie']
        .map((text, i) => ({ text, bar: 'display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:8px;color:#FFFFFF;font-size:13px;font-weight:600;margin-left:' + (i * 12) + 'px;background:' + ['#7A8BB0', '#5E6F98', '#46557F', '#2F3D66', '#C8102E'][i] })),
      signs: ['Prestatie = taken afvinken', 'Individuele beoordelingen', 'Eenzijdige focus op kostenefficiëntie', 'Weinig creativiteit', 'Leren alleen via verplichte trainingen', 'Starre loopbaanpaden', 'Weinig mobiliteit', 'Beloning als belangrijkste drijfveer', 'Micromanagement', 'Lage betrokkenheid', 'Zwakke talentpijplijn', 'Hoog vrijwillig verloop'].map((text) => ({ text })),
      alloc: [['Inhoudsautoriteit', 'Product Management', 'Leveren wat klanten nodig hebben', 'Feature', blue, '#FFFFFF'], ['Ontwerpautoriteit', 'System Architect', 'Een robuuste technische basis', 'Enabler', '#B03A2E', '#FFFFFF'], ['Procesautoriteit', 'RTE', 'Verbeteringen uit I&A afronden', 'I&A-verbetering', '#8C6A9E', '#FFFFFF'], ['Mensenautoriteit', 'People Developers', 'Een sterke people runway', 'People enabler', '#00A6A0', '#06302E']]
        .map(([kind, role, promise, item, bg, fg]) => ({ kind, role, promise, item, items: [0, 1, 2].map((j) => ({ j })), chip: 'display:block;padding:4px 8px;border-radius:4px;background:' + bg + ';color:' + fg + ';font-size:11px;font-weight:700;text-align:center;box-shadow:0 2px 0 rgba(0,0,0,.18)' })),
      gains: [['Snellere business agility', ICO.rocket, blue], ['Meer creativiteit en innovatie', ICO.bulb, orange], ['Betere transformatiedoorlooptijd', ICO.up, '#00A6A0'], ['Hogere betrokkenheid en medewerkerservaring', ICO.heart, '#A9BC2B']].map(([text, icon, color]) => ({ text, icon, color }))
    };
    const dn = [['features', 70, blue], ['enablers', 19, '#B03A2E'], ['I&A-verbeteringen', 6, '#8C6A9E'], ['people enablers', 5, '#00A6A0']];
    let acc = 0; const C2 = 2 * Math.PI * 58;
    pr.donut = dn.map(([label, pct, color]) => { const len = C2 * pct / 100; const d = { label, pct, color, dash: len.toFixed(1) + ' ' + (C2 - len).toFixed(1), off: (-acc).toFixed(1) }; acc += len; return d; });
    pr.backlog = [blue, blue, '#B03A2E', blue, '#00A6A0', blue, '#8C6A9E', blue, '#B03A2E', blue, blue, '#00A6A0'].map((c) => 'display:block;height:12px;border-radius:2px;background:' + c + ';box-shadow:0 2px 0 rgba(0,0,0,.15)');
    pr.resp = [['Een inspirerende en betrokken werkomgeving creëren', ICO.heart], ['Een cultuur van leren en innoveren vormgeven', ICO.bulb], ['Betekenisvolle medewerkerservaringen ontwikkelen', ICO.star], ['Mensen uitdagen en begeleiden in hun groei', ICO.up], ['Teamdynamiek vertalen naar samenwerking en resultaat', ICO.team], ['Trends in de workforce signaleren en benutten', ICO.radar], ['Een diverse, robuuste talentpijplijn (ook over ART’s heen) bouwen', ICO.path], ['De people runway vooruitzien en borgen', ICO.runway]].map(([text, icon]) => ({ text, icon }));
    pr.runways = [['Architectural runway', 'SA', '#00807E', 'Technische componenten en infrastructuur die nodig zijn om features van de komende PI’s zonder vertraging te bouwen.', ['Enablers', 'Techniek', 'Infrastructuur'], 'M0 13H600'],
      ['People runway', 'PD', '#C8102E', 'De gezamenlijke kracht, vaardigheden en ervaring van de ART, en het vermogen om die in te zetten voor huidige en komende initiatieven. Onderhouden met people enablers.', ['People enablers', 'Talent', 'Teamdynamiek'], 'M0 6 L40 20 L80 5 L120 21 L160 7 L200 19 L240 4 L280 21 L320 8 L360 18 L400 5 L440 20 L480 7 L520 19 L560 5 L600 18']]
      .map(([title, who, color, text, items, path]) => ({ title, who, color, text, path, items: items.map((t) => ({ text: t })),
        owner: 'padding:3px 10px;border-radius:10px;font-size:12px;font-weight:700;color:#FFFFFF;background:' + (who === 'PD' ? '#5E6E0C' : color),
        chip: 'padding:4px 10px;border-radius:12px;font-size:12px;font-weight:700;background:' + (who === 'PD' ? '#FCEBEE' : '#E0F2F1') + ';color:' + (who === 'PD' ? '#8A0F23' : '#00504E') }));
    pr.practices = [['Workforce-dynamiek benutten', 'Sterktes, interesses en waarden in balans over de teams.', ICO.team], ['Talent enablement', 'Iedereen sneller laten groeien dan alleen zou lukken.', ICO.star], ['Prestaties versnellen', 'Snelle feedback en persoonlijke doelen in plaats van jaarbeoordelingen.', ICO.up], ['Dynamische planning & talent scouting', 'Vooruitkijken naar wat de roadmap aan mensen en skills vraagt.', ICO.search], ['Sterke talentpijplijn', 'Divers, robuust en ook over ART’s heen.', ICO.path]].map(([title, text, icon]) => ({ title, text, icon }));
    pr.levels = [['Werving', 'Langetermijnbehoefte, talent scouting en analyse van de talentpijplijn; een onboardingprogramma.', 'Vacatureteksten, gesprekken, teamgedragen aannamebesluiten en goede onboarding.'],
      ['Performance', 'Een kader voor prestatieversnelling, feedbacktoolkit en metrics.', 'Snelle, eerlijke feedback; samen met mensen en teams werken aan persoonlijke OKR’s.'],
      ['Ontwikkeling', 'Skills in kaart brengen, groeiprofielen, talentdialogen en een leerplatform.', '1-op-1-gesprekken, groeiprofielen, exploratory assignments en microlearning.'],
      ['Beloning', 'Beloningsmodel, marktdata en onderbouwde salarisadviezen.', 'Salarisrondes uitvoeren en helder communiceren.'],
      ['Loopbaan', 'Een loopbaankader met zichtbare paden en groeiprofielen.', 'Doorlopende coaching, loopbaanwensen en passende groeikansen.']].map(([domain, strat, oper]) => ({ domain, strat, oper }));
    pr.stratEx = ['Aanpak talent scouting', 'Lattice-loopbaankader', 'Transparant salarissysteem', 'Talent-enablementprogramma', 'Microlearningprogramma', 'Adaptieve personeelsplanning', 'Programma prestatieversnelling'].map((text) => ({ text }));
    pr.operEx = ['Employee journey map', 'Teamgedragen aannamebesluiten', 'Gemba walks en snelle feedback', 'Waardering en erkenning', 'Persoonlijke leer- en groeiplannen', 'Exploratory assignments', 'Leren in de workflow en I&A', 'Hackathons', 'Persoonlijke OKR’s', 'Coaching en mentoring', 'Talent scouting', 'Teamenergie en -dynamiek observeren', 'Behoeften over ART’s heen'].map((text) => ({ text }));
    pr.vennL = ['Het systeem transformeren en herinrichten', 'Levering per initiatief', 'Portfolio-, organisatie- en ART-niveau', 'Tijdelijk interdisciplinair team', 'Aparte investering'].map((text) => ({ text }));
    pr.vennR = ['Het systeem uitdagen en optimaliseren', 'Doorlopende levering', 'Individu-, team- en ART-niveau', 'People Developers als people authority', 'Onderdeel van de operationele kosten'].map((text) => ({ text }));
    const WI = {
      _: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z',
      'Productrichting': 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM15.5 8.5l-2 5-5 2 2-5z',
      'Backlog en roadmap': 'M6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM6 16v-5a3 3 0 0 1 3-3h7M18 8v5a3 3 0 0 1-3 3H8',
      'Waarde en kosten': 'M3 6c0-1.4 2.2-2.5 5-2.5S13 4.6 13 6 10.8 8.5 8 8.5 3 7.4 3 6zM3 6v4c0 1.4 2.2 2.5 5 2.5M3 10v4c0 1.4 2.2 2.5 5 2.5M14 12l2.5-3h4l2 3-4.2 5.5z',
      'Dienstverlening en continuïteit': 'M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6zM8.5 12l2.5 2.5 4.5-5',
      'Go-Live en risico': 'M5 21V4M5 4h12l-2.5 4L17 12H5M9 8l1.5 1.5L13 7',
      'Planning en capaciteit': 'M4 6h16v14H4zM4 10h16M8 3v4M16 3v4M8 14h2M12 14h2M16 14h0M8 17h2M12 17h2',
      'Flow en afhankelijkheden': 'M6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM8 6h3a5 5 0 0 1 5 5M8 18h3a5 5 0 0 0 5-5',
      'Run en Go-Live': 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 6v2M12 16v2M6 12h2M16 12h2M10 9l4 3-4 3z',
      'Readiness en BCM': 'M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6zM15 10.5a3.2 3.2 0 1 0-.9 2.8M15 7.8v2.7h-2.7',
      'Kosten en governance': 'M3 7c0-1.4 2-2.5 4.5-2.5S12 5.6 12 7s-2 2.5-4.5 2.5S3 8.4 3 7zM3 7v4c0 1.4 2 2.5 4.5 2.5M3 11v4c0 1.4 2 2.5 4.5 2.5M14 5h7v15h-7zM16 9.5l1 1 2-2M16 14.5l1 1 2-2',
      'Talent en vakmanschap': 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21v-1a6 6 0 0 1 6-6h2M15 21c0-4 2.5-7 7-8 0 4-2.5 7-7 8zM15 21c-.8-1.8-.6-3.6.8-5.4',
      'Personeelsplanning': 'M8 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM2 21v-1a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v1M14 3h8v7h-8zM14 5.5h8M16.5 7.5h1M19 7.5h1',
      'Capaciteit en inzetbaarheid': 'M12 4v15M6 19h12M4 8h16M7 8l-3 6h6zM17 8l-3 6h6z',
      'Kenniscontinuïteit': 'M3 5h6a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H3zM21 5h-6a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h7z',
      'Adoptie': 'M12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM8 17.5v-.5a4 4 0 0 1 4-4 4 4 0 0 1 4 4v.5M20 12a8 8 0 0 0-14-5.3M4 12a8 8 0 0 0 14 5.3M6 3v3.7h3.7M18 21v-3.7h-3.7',
      'Visie en runway': 'M12 3l9 5-9 5-9-5zM3 13l9 5 9-5M3 17.5l9 5 9-5',
      'Architectuur en integratie': 'M9 3h6v5H9zM3 16h6v5H3zM9 16h6v5H9zM15 16h6v5h-6zM12 8v8M6 12h12M6 12v4M18 12v4',
      'Kwaliteit en kaders': 'M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6zM8.5 12l2.5 2.5 4.5-5',
      'Herstel en readiness': 'M20 12a8 8 0 1 1-2.3-5.6M20 4v4h-4M7 12h2l1.5-3 3 6 1.5-3h2',
      'FinOps en AI': 'M6 6h12v12H6zM9 2.5v3.5M15 2.5v3.5M9 18v3.5M15 18v3.5M2.5 9H6M2.5 15H6M18 9h3.5M18 15h3.5M10 10h4v4h-4z'
    };
    // ---- Customer & Business Value (gebaseerd op SAFe 'Business Value', eigen woorden) ----
    const bvObj = [['Datakwaliteit in de keten', 9, 8], ['Nieuw marktproces live', 8, 8], ['Kortere doorlooptijd', 7, 5], ['Stabielere run', 6, 6], ['Stretch: AI-pilot', 4, 2]];
    const bvPlan = bvObj.reduce((a, o) => a + o[1], 0), bvAct = bvObj.reduce((a, o) => a + o[2], 0);
    const bvPct = Math.round(100 * bvAct / bvPlan);
    const arcPt = (p, r) => { const t = Math.PI * (1 - Math.min(1.2, p) / 1.2); return [(95 + r * Math.cos(t)).toFixed(1), (95 - r * Math.sin(t)).toFixed(1)]; };
    const b0 = arcPt(0.8, 80), b1 = arcPt(1.0, 80), nd = arcPt(bvPct / 100, 62);
    const bv = {
      pulse: 'position:absolute;top:66px;width:16px;height:16px;border-radius:50%;background:#FFFFFF;border:4px solid ' + orange + ';box-sizing:border-box;animation-play-state:' + play,
      chain: [['Organisatiedoel', 'Waarom we er zijn: richting, maar nog geen plan.', 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z', navy],
        ['Portfoliostrategie', 'Hoe we onze sterktes inzetten en waarin we investeren.', 'M3 6c0-1.4 2.2-2.5 5-2.5S13 4.6 13 6 10.8 8.5 8 8.5 3 7.4 3 6zM3 6v4c0 1.4 2.2 2.5 5 2.5M3 10v4c0 1.4 2.2 2.5 5 2.5M15 9l3-3 3 3M18 6v11', blue],
        ['Oplossingen en features', 'Welke initiatieven, technologie en ontwerpen de meeste waarde opleveren.', 'M12 2l9 5-9 5-9-5zM3 12l9 5 9-5M3 17l9 5 9-5', cyan],
        ['Implementatie', 'Dagelijkse keuzes in teams, steeds gericht op waarde.', 'M14.5 4.5a4.5 4.5 0 0 0-5.6 5.6L3.5 15.5l5 5 5.4-5.4a4.5 4.5 0 0 0 5.6-5.6l-2.8 2.8-3.4-.8-.8-3.4z', green]]
        .map(([title, text, icon, c]) => ({ title, text, icon, iconBox: 'display:flex;align-items:center;justify-content:center;width:84px;height:84px;border-radius:50%;background:' + c + ';box-shadow:0 0 0 6px #F4F6FA' })),
      levers: [['Eigen technologie', 'Oplossingen en kennis die je zelf hebt opgebouwd.', 'centrale ketenvoorzieningen voor de energiemarkt', blue], ['Marktpositie', 'De plek die je inneemt en het vertrouwen dat daarbij hoort.', 'een onafhankelijke, verbindende rol in de keten', navy], ['Talent', 'De mensen, hun vakmanschap en hoe ze samenwerken.', 'diepe kennis van marktprocessen en regelgeving', green], ['Intellectueel eigendom en data', 'Wat je weet en bezit en anderen niet zomaar kunnen kopiëren.', 'betrouwbare ketendata en standaarden', orange]]
        .map(([title, text, edsn, color]) => ({ title, text, edsn, color })),
      without: ['Teams richten zich op dagelijkse taken', 'Processen en technologie worden doel op zich', 'Losse KPI’s per afdeling of team', 'Waarde is “iets van het management”'].map((text) => ({ text })),
      with: ['Iedereen begrijpt wat waardevol is in zijn context', 'Keuzes en trade-offs worden op waarde gemaakt', 'Sturen en meten op uitkomsten', 'Waarde in elk gesprek en elke beslissing'].map((text) => ({ text })),
      artifacts: [['Portfolio', 'Epic', 'Succescriteria en een hypothese over de verwachte waarde, getoetst met een MVP.', navy], ['ART', 'Feature', 'Business benefits: welke waarde de feature oplevert voor klant of organisatie.', blue], ['PI', 'PI-doelen', 'Business Owners kennen elk doel een businesswaarde toe en beoordelen na afloop wat er is gerealiseerd.', orange]]
        .map(([level, title, text, c]) => ({ level, title, text, chip: 'padding:3px 10px;border-radius:10px;font-size:11px;font-weight:800;background:' + c + ';color:' + (c === orange ? '#2B1A00' : '#FFFFFF') })),
      objectives: bvObj.map(([name, p, a]) => ({ name, score: a + ' / ' + p,
        planned: 'position:absolute;left:0;top:0;bottom:0;width:' + (p * 10) + '%;border-radius:4px;background:#C9D1DD',
        actual: 'position:absolute;left:0;top:5px;bottom:5px;width:' + (a * 10) + '%;border-radius:3px;background:' + blue })),
      pct: bvPct,
      band: 'M' + b0[0] + ' ' + b0[1] + ' A80 80 0 0 1 ' + b1[0] + ' ' + b1[1],
      needle: 'M95 95 L' + nd[0] + ' ' + nd[1]
    };
    // ---- AI-Native ART (gebaseerd op SAFe-artikel 'AI-Native ART', eigen woorden) ----
    const aiart = {
      traits: [['k1', 'Georganiseerd rond producten', 'Eén scherpe productfocus met duidelijke klanten en meetbare uitkomsten.', 'M12 2l9 5-9 5-9-5zM3 12l9 5 9-5M3 17l9 5 9-5', blue],
        ['k2', 'Outcome-gedreven', 'Een outcome tree verbindt strategie met het werk van teams.', 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z', orange],
        ['k3', 'Menselijke expertise en oordeel', 'AI verkent, mensen beoordelen en blijven verantwoordelijk.', 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21v-1a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v1M19 4l.8 2.2L22 7l-2.2.8L19 10l-.8-2.2L16 7l2.2-.8z', navy],
        ['k4', 'Innovatie in balans met cadans', 'Teams in flow, de ART zorgt voor ritme en gezamenlijk leren.', 'M4 6h16v14H4zM4 10h16M8 3v4M16 3v4M8 15l2 2 4-4', cyan],
        ['k5', 'Gedeelde AI-workflows en platformen', 'De AI Innovation Pipeline als gedeelde basis voor alle teams.', 'M3 6h6l3 6h9M3 18h6l3-6M18 9l3 3-3 3', green],
        ['k6', 'AI-governance en ethiek', 'Centrale standaarden en guardrails waarbinnen teams werken.', 'M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6zM8.5 12l2.5 2.5 4.5-5', '#C8102E']]
        .map(([id, title, text, icon, c], i) => ({ id, title, text, icon, n: i + 1,
          box: 'padding:18px;border-radius:14px;border:1.5px solid #D5DBE5;border-top:5px solid ' + c + ';display:flex;flex-direction:column;gap:8px;text-decoration:none;background:#FFFFFF',
          num: 'font-size:28px;font-weight:800;color:' + c,
          iconBox: 'display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:12px;background:' + c })),
      surfaces: ['Een set productcapabilities', 'Een deel van de klantreis', 'Gedeelde platformen, beheerd als product'].map((text) => ({ text })),
      tree: [['ART-outcome', 'Jaardoel van de ART, afgeleid van de productvisie', 'Bepaald door Product Management', navy], ['PI-outcome', 'Bijv.: conversie van proef naar betaald van 15% naar 20%, bij gelijke supportkosten', 'Kortere toezegging per PI', blue], ['Teamoutcome', 'Bijv. team Nurture & Qualification: conversie van lead naar sales-lead van 10% naar 15%', 'Dagelijks gevolgd door het team', cyan]]
        .flatMap(([level, text, note, c], i, arr) => { const n = { isNode: true, isArrow: false, level, text, note, box: 'padding:16px;border-radius:12px;background:#FFFFFF;border:1.5px solid #D5DBE5;border-left:0;box-shadow:inset 5px 0 0 ' + c + ';display:flex;flex-direction:column;gap:6px', tag: 'align-self:flex-start;padding:2px 10px;border-radius:10px;font-size:11px;font-weight:800;color:#FFFFFF;background:' + c }; return i < arr.length - 1 ? [n, { isNode: false, isArrow: true }] : [n]; }),
      capabilities: [['Product', navy], ['Builder', blue], ['Domain Expert', green], ['AI', '#00A6A0']].map(([text, c]) => ({ text, pill: 'padding:8px 16px;border-radius:18px;font-size:14px;font-weight:700;color:#FFFFFF;background:' + c })),
      leaders: [['Product Management', 'Overziet het hele product: visie, intentie en context en een outcome-gedreven roadmap. Verbindt klant- en marktbewijs met productkeuzes.', 'backlogs beheren', 'bewijs en hypothesen cureren die de outcomes vormgeven', '#0E5F96'],
        ['System Architect', 'Bewaakt de architectuur en technische samenhang van gedeelde platformen en standaarden, ook over teamgrenzen heen.', 'statische architectuur ontwerpen', 'geautomatiseerde fundamenten met ingebouwde guardrails', '#00807E'],
        ['Release Train Engineer', 'Verbetert de flow van de ART, faciliteert afstemming en besluiten, beheert risico’s en afhankelijkheden en stimuleert continu verbeteren.', 'events organiseren', 'het tempo van leren en beslissen faciliteren', '#3B7898'],
        ['Business Owners', 'Primaire stakeholders, verantwoordelijk voor de outcomes van de ART, inclusief ROI, governance en compliance.', 'periodiek plannen', 'dynamisch investeringen sturen op realtime bewijs', orange]]
        .map(([role, text, from, to, color]) => ({ role, text, from, to, color })),
      culture: [['Verantwoordelijkheid bij wie goedkeurt', 'Wie het werk goedkeurt, blijft verantwoordelijk voor kwaliteit, kosten, waarde en klantimpact.'], ['Van handwerk naar ontdekken', 'De tijd die AI vrijmaakt, investeren we in waardevol probleemoplossen.'], ['Actief verifiëren', 'AI versterkt het menselijk oordeel, maar vervangt het niet.']].map(([title, text], i) => ({ n: i + 1, title, text })),
      cadence: [['Continu', 'Het team kijkt na elke aanpassing dagelijks naar het effect op conversie.', 'De ART volgt dagelijks de conversie, samen met signalen uit de betrokken teams.', cyan], ['Iteratie', 'Elk team bekijkt het opgetelde effect van alles wat het in de iteratie opleverde.', 'De ART bekijkt het gezamenlijke effect van de teams op de weg van 15% naar 20%.', blue], ['PI', 'Hoe goed paste elk team zijn werk aan toen het bewijs veranderde?', 'Hoe goed coördineerde de ART de teams en reageerde ze op wat er geleerd werd?', navy]]
        .map(([rhythm, team, art, c]) => ({ rhythm, team, art, tag: 'align-self:start;justify-self:start;padding:4px 12px;border-radius:12px;font-size:12px;font-weight:800;color:#FFFFFF;background:' + c })),
      events: [['PI Outcome Planning', 'Begin van elke PI · alle teams en stakeholders', 'Afstemming op visie en intentie en het bepalen van outcomes. Teams kiezen hun bijdrage, formuleren meetbare teamoutcomes, hypothesen, experimenten en prototypes, en stemmen afhankelijkheden en mijlpalen af.', 'M12 9.5v11l8.5-5.5zM3 5h18'], ['Sense and Respond', 'Op iteratiegrenzen, en wanneer nodig', 'Bewijs uit de uitvoering en uit klantdemo’s vertalen naar besluiten op systeemniveau. Voortgang op outcomes toetsen en het eigen werksysteem onder de loep nemen.', 'M3 12h4l2-5 4 10 2-5h6'], ['ART Syncs', 'Minstens wekelijks · vertegenwoordigers per team', 'Voortgang op outcomes, belemmeringen en belangrijke besluiten over teams heen. De ART stemt de frequentie af op het aantal teams, afhankelijkheden, tempo en risico.', 'M20 12a8 8 0 1 1-2.3-5.6M20 4v4h-4']]
        .map(([title, when, text, icon]) => ({ title, when, text, icon })),
      learning: [['Impliciete kennis', 'Zit in menselijk oordeel en verspreidt zich via gesprek en samenwerking.', 'een domeinexpert legt tijdens een ART Sync uit hoe je een routinevraag onderscheidt van een signaal dat een klantproces dreigt vast te lopen.', navy], ['Vastlegbare kennis', 'Wordt vastgelegd als gedeelde skill, agentconfiguratie, evaluatie of guardrail.', 'een team ziet een assistent een niet-bestaande korting verzinnen en voegt kortingsscenario’s toe aan een gedeelde evaluatie die zulke aanbiedingen blokkeert.', blue], ['Contextuele kennis', 'Werkt de gecureerde data en de informatie voor teams en agents bij.', 'tijdens een klantdemo blijkt een nieuwe klantvoorkeur; Product Management voegt die toe aan de gecureerde data.', green]]
        .map(([title, text, ex, color]) => ({ title, text, ex, color })),
      phases: ['Discover', 'Specify', 'Build', 'Validate', 'Release'].map((name, i) => ({ name, style: 'display:flex;align-items:center;justify-content:center;height:44px;font-size:14px;font-weight:700;color:#FFFFFF;background:' + [navy, blue, cyan, green, orange][i] + ';clip-path:polygon(0 0,calc(100% - 14px) 0,100% 50%,calc(100% - 14px) 100%,0 100%' + (i ? ',14px 50%' : '') + ')' })),
      aiip: ['Goedgekeurde toegang tot data, modellen en context', 'Gezamenlijke evaluaties', 'Veilig releasen en observeren', 'Traceerbaarheid van code, modellen, prompts en policies', 'Securitycontroles', 'Rollback en fallback', 'Gecureerde data', 'Gedeelde platformen'].map((text) => ({ text })),
      pillars: [['Waarom?', 'Intentie', 'De strategie waarmee de ART haar visie en outcomes waarmaakt: de verandering die ze wil bereiken en de problemen die ze kiest op te lossen.', navy], ['Wat en hoe?', 'Specificaties', 'Levende, machineleesbare beschrijvingen van hoe een goede oplossing eruitziet en binnen welke grenzen die moet blijven.', blue], ['Waar?', 'Context', 'Begrip van de omgeving waarin het product moet slagen, en van hoe snel die verandert.', cyan]]
        .map(([q, title, text, c]) => ({ q, title, text, box: 'padding:20px;border-radius:14px;color:#FFFFFF;background:' + c + ';display:flex;flex-direction:column;gap:8px' })),
      promote: [['Team', 'Probeert een lokale verbetering en levert bewijs uit gebruik.', blue], ['AI Value Architects', 'Beoordelen of andere teams het kunnen overnemen.', '#6E44B8'], ['System Architects', 'Bewaken stabiliteit, security, kosten en compatibiliteit.', '#00807E'], ['Gedeelde baseline', 'De gevalideerde verbetering wordt standaard voor de hele ART.', green]]
        .flatMap(([who, text, color], i, arr) => { const st = { isStep: true, isArrow: false, who, text, color }; return i < arr.length - 1 ? [st, { isStep: false, isArrow: true }] : [st]; }),
      mixLegend: [['Features', blue], ['Validatie', green], ['Experimenten', orange], ['Prototypes', '#00A6A0'], ['Enablers', '#B03A2E']].map(([label, color]) => ({ label, color })),
      mix: [['Klant-onboarding', 'volwassen productgebied', [[blue, 55], [green, 30], [orange, 10], ['#B03A2E', 5]]], ['Accountbeheer', 'opkomend productgebied', [[orange, 35], ['#00A6A0', 35], [blue, 20], [green, 10]]], ['Gedeeld ontwikkelplatform', 'fundament voor andere teams', [['#B03A2E', 55], [blue, 35], [green, 10]]]]
        .map(([name, kind, parts]) => ({ name, kind, parts: parts.map(([c, w]) => 'display:block;height:100%;width:' + w + '%;background:' + c) })),
      gov: [['Risicobereidheid vastleggen', 'Business Owners maken de afgesproken risicotolerantie en bijbehorende policies duidelijk, niet alleen technisch, maar ook commercieel, financieel en qua investeringen.', 'M12 3v18M5 7h14M7 7l-3 6h6zM17 7l-3 6h6z', orange], ['Governance in de platformen', 'Geautomatiseerde evaluaties, policychecks, monitoring en traceerbaarheid in de gedeelde platformen en de AIIP: vroeg signaleren in plaats van een eindcontrole.', 'M3 6h6l3 6h9M3 18h6l3-6M18 9l3 3-3 3', blue], ['Standaarden voor consistentie', 'Gedeelde standaarden tegen hallucinaties, model drift, prompt injection en datalekken, zodat risico’s niet overslaan naar andere teams.', 'M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6zM8.5 12l2.5 2.5 4.5-5', navy], ['Menselijke verantwoording', 'Drempels voor goedkeuring en escalatie, met een benoemde goedkeurder en vastgelegd bewijs voor besluiten met een hoog risico.', 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21v-1a6 6 0 0 1 6-6h2M16 15l2 2 4-4', '#C8102E']]
        .map(([title, text, icon, color]) => ({ title, text, icon, color }))
    };
    // ---- T4K: wanneer functioneert het goed (concept) ----
    const DIMC = { Waarde: '#0E5F96', Techniek: '#00807E', Flow: '#3B7898', Mensen: '#7E8F10', Samen: navy };
    const scanQ = [['Waarde', 'We sturen samen op ART- en PI-outcomes, niet alleen op opgeleverde features.'],
      ['Techniek', 'Architectuur, technische schuld en enablers krijgen een vaste plek in onze afwegingen.'],
      ['Flow', 'We hebben zicht op flow, afhankelijkheden en risico’s en sturen tijdig bij.'],
      ['Mensen', 'People-onderwerpen (groei, capaciteit, kenniscontinuïteit) krijgen structureel tijd en capaciteit.'],
      ['Samen', 'We weten wie waarover beslist; mandaatgrenzen zijn helder en worden gerespecteerd.'],
      ['Samen', 'We spreken met één stem richting teams en Business Owners.'],
      ['Samen', 'We bereiden PI Planning en Inspect & Adapt samen voor, in een vast ritme.'],
      ['Samen', 'We evalueren regelmatig hoe we als T4K samenwerken en verbeteren dat.']];
    const sc = self.state.scan || {};
    const dimNames = ['Waarde', 'Techniek', 'Flow', 'Mensen', 'Samen'];
    const answered = Object.keys(sc).length;
    const allVals = Object.values(sc);
    const avgN = answered ? allVals.reduce((a, b) => a + b, 0) / answered : 0;
    const t4kh = {
      traits: [['Eén gezamenlijk ART-resultaat', 'Het T4K stuurt samen op de uitkomsten van de ART over de hele CDP, niet ieder op zijn eigen deel.', 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z', navy],
        ['Vier hoekpunten in balans', 'Waarde, techniek, flow en mensen wegen alle vier mee. Geen rol domineert en geen perspectief valt structureel weg.', 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z', '#0E5F96'],
        ['Heldere mandaten', 'Iedereen weet wie waarover beslist. Formele mandaten blijven bij de bevoegde rollen; het T4K adviseert en verbindt.', 'M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6zM8.5 12l2.5 2.5 4.5-5', '#00807E'],
        ['Eén stem naar buiten', 'Teams en Business Owners krijgen consistente richting. Meningsverschillen worden binnen het T4K beslecht.', 'M3 11l18-8-8 18-2-8z', '#3B7898'],
        ['Transparant en datagedreven', 'Besluiten zijn gebaseerd op zichtbare data over outcomes, flow, kwaliteit en mensen, en worden gedeeld.', 'M4 20V10M10 20V4M16 20v-8M22 20H2', '#7E8F10'],
        ['Lerend en voorbeeldgedrag', 'Het T4K reflecteert op de eigen samenwerking, vraagt feedback en laat het gewenste gedrag zelf zien.', 'M20 12a8 8 0 1 1-2.3-5.6M20 4v4h-4', orange]]
        .map(([title, text, icon, c]) => ({ title, text, icon, iconBox: 'flex-shrink:0;display:flex;align-items:center;justify-content:center;width:42px;height:42px;border-radius:12px;background:' + c })),
      good: ['Het T4K bereidt PI Planning samen voor en komt met één gedeeld beeld van prioriteiten, risico’s en capaciteit', 'Run, change, enablers en people-onderwerpen worden in één afweging gemaakt', 'Afhankelijkheden en risico’s komen vroeg op tafel, niet pas bij de Go-Live', 'Teams ervaren duidelijke en consistente richting', 'Lastige keuzes worden expliciet gemaakt en vastgelegd, inclusief het waarom', 'Business Owners hebben vertrouwen in de voorspelbaarheid van de ART'].map((text) => ({ text })),
      warn: ['Eén rol neemt de meeste besluiten, of het T4K is eigenlijk een triade zonder de People Developer', 'People- of technische onderwerpen verliezen het steeds van features', 'Teams krijgen van verschillende T4K-leden tegenstrijdige signalen', 'Het gesprek gaat vooral over output en planning, nauwelijks over outcomes', 'Besluiten worden onnodig opgeschaald of blijven liggen', 'Het T4K overlegt alleen als er een probleem is'].map((text) => ({ text })),
      rhythm: [['Wekelijks', 'T4K-sync', 'Voortgang op outcomes, risico’s, afhankelijkheden, capaciteit en mensen. Besluiten vastleggen.', blue], ['Per iteratie', 'Sense and Respond', 'Bewijs uit demo’s en metrics vertalen naar bijsturing over de hele ART.', cyan], ['Vóór elke PI', 'PI-voorbereiding', 'Samen visie, prioriteiten, capaciteitsverdeling en readiness voorbereiden.', orange], ['Na elke PI', 'T4K-retrospective', 'Na Inspect & Adapt: hoe hebben we als T4K samengewerkt en wat verbeteren we?', green]]
        .map(([when, title, text, c]) => ({ when, title, text, tag: 'align-self:flex-start;padding:2px 10px;border-radius:10px;font-size:11px;font-weight:800;background:' + c + ';color:' + (c === orange || c === green ? '#1F1A00' : '#FFFFFF') })),
      scan: scanQ.map(([dim, text], i) => ({ dim, text,
        tag: 'justify-self:start;padding:3px 10px;border-radius:10px;font-size:11px;font-weight:800;color:#FFFFFF;background:' + DIMC[dim],
        opts: [1, 2, 3, 4, 5].map((v) => { const on = sc[i] === v; return { v, on, pick: () => self.setState({ scan: Object.assign({}, self.state.scan, { [i]: v }) }),
          style: 'width:36px;height:36px;border-radius:50%;cursor:pointer;font-family:inherit;font-size:14px;font-weight:700;' + (on ? 'border:0;background:' + DIMC[dim] + ';color:#FFFFFF' : 'border:1.5px solid #C9D1DD;background:#FFFFFF;color:#1B2A5C') }; }) })),
      dims: dimNames.map((name) => { const idx = scanQ.map((q, i) => q[0] === name ? i : -1).filter((i) => i >= 0 && sc[i]); const v = idx.length ? idx.reduce((a, i) => a + sc[i], 0) / idx.length : 0;
        return { name, label: v ? v.toFixed(1) : '–', bar: 'display:block;height:100%;width:' + (v / 5 * 100) + '%;border-radius:7px;background:' + DIMC[name] }; }),
      avg: answered ? avgN.toFixed(1) + ' / 5' : '– / 5',
      verdict: !answered ? 'Vul de stellingen in' : (answered < scanQ.length ? 'Nog ' + (scanQ.length - answered) + ' stelling(en) te gaan' : (avgN >= 4 ? 'Sterk T4K' : (avgN >= 3 ? 'Goed op weg' : 'Aandacht nodig'))),
      advice: !answered ? 'Je ziet hier direct de uitkomst per hoekpunt en voor de samenwerking.' : (avgN >= 4 ? 'Houd het ritme vast en deel wat werkt met andere T4K’s.' : (avgN >= 3 ? 'Kies samen de laagst scorende dimensie en maak er één concrete verbeterafspraak over.' : 'Plan een T4K-sessie, eventueel met het LACE, om rollen, mandaten en ritme opnieuw scherp te krijgen.')),
      verdictBox: 'padding:20px;border-radius:14px;color:#FFFFFF;display:flex;flex-direction:column;gap:6px;background:' + (!answered || answered < scanQ.length ? '#5A6478' : (avgN >= 4 ? '#5E8A12' : (avgN >= 3 ? '#0E5F96' : '#C8102E'))),
      reset: () => self.setState({ scan: {} })
    };
    // ---- Wijzigingsvoorstellen (WoW) ----
    const STEPS = ['Concept', 'In review', 'Vastgesteld'];
    const propDefs = [{ id: 'WP-001', page: 't4k', pageTitle: 'Tactisch vierkant (T4K)', title: 'Wanneer functioneert een T4K goed?', status: 1,
      summary: 'Voorstel om op de T4K-pagina vast te leggen wanneer een T4K goed functioneert: zes kenmerken, herkenbare signalen, een vast ritme en een zelfscan waarmee een T4K zichzelf kan toetsen.',
      author: 'Pieter Meijer', reviewers: 'LACE', date: '9 november 2026', deadline: 'n.t.b.',
      actions: [['Bekijk wat verandert', () => self.setState({ sel: 't4k', cview: 'delta' })], ['Lees het concept', () => self.setState({ sel: 't4k', cview: 'concept' })]] },
    { id: 'WP-002', page: null, pageTitle: 'Big Picture · nieuwe functie', title: 'Volg een Feature: de WoW als verhaal', status: 0,
      summary: 'Een interactieve tour waarin één Feature in negen stappen door de Big Picture reist: van strategisch thema via Epic, Feature Kanban, T4K en PI Planning naar de teams, de pipeline, de klant en terug naar Inspect and Adapt. Per stap zie je wat er gebeurt en wie aan zet is.',
      author: 'Pieter Meijer', reviewers: 'LACE', date: '9 november 2026', deadline: 'n.t.b.',
      actions: [['Start de tour', () => self._startTour()]] },
    { id: 'WP-003', page: null, pageTitle: 'Big Picture · nieuwe functie', title: 'Ik ben…: de Big Picture vanuit jouw rol', status: 0,
      summary: 'Kies je rol (bijv. teamlid, Product Owner, RTE of Business Owner) en de Big Picture licht op waar jij een rol speelt. Je ziet jouw plekken in de plaat, jouw events, jouw artefacten en je aanspreekpunt in het T4K.',
      author: 'Pieter Meijer', reviewers: 'LACE', date: '9 november 2026', deadline: 'n.t.b.',
      actions: [['Probeer Ik ben…', () => self._startRoles()]] },
    { id: 'WP-004', page: 'f5', pageTitle: 'LACE', title: 'Het LACE: rol, werkwijze en producten', status: 0,
      summary: 'Voorstel om de LACE-pagina uit te breiden: het LACE als verbindende hub, vijf verantwoordelijkheden, onze producten ARTie en het Delivery Model, het LACE als agile team met eigen ritme en transformatiebacklog, het organisatiemodel, voortgang meten, de rol in een AI-Native EDSN en waar het LACE actief is in de Big Picture.',
      author: 'Pieter Meijer', reviewers: 'LACE', date: '12 november 2026', deadline: 'n.t.b.',
      actions: [['Bekijk wat verandert', () => self.setState({ sel: 'f5', cview: 'delta' })], ['Lees het concept', () => self.setState({ sel: 'f5', cview: 'concept' })]] }];
    const wow = {
      open: propDefs.filter((x) => x.status < 2).length,
      process: [['1', 'Concept', 'Een wijziging wordt uitgewerkt als voorstel. De vastgestelde WoW blijft ongewijzigd zichtbaar.', blue], ['2', 'In review', 'Reviewers lezen het concept en de delta en geven feedback.', orange], ['3', 'Vastgesteld', 'Na akkoord wordt het voorstel verwerkt in de WoW en vastgelegd in het wijzigingslog.', green]]
        .flatMap(([n, title, text, c], i, arr) => { const st = { isStep: true, isArrow: false, n, title, text, dot: 'display:flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:50%;font-weight:800;font-size:14px;background:' + c + ';color:' + (c === blue ? '#FFFFFF' : '#1F1A00') }; return i < arr.length - 1 ? [st, { isStep: false, isArrow: true }] : [st]; }),
      proposals: propDefs.map((x) => ({ id: x.id, title: x.title, pageTitle: x.pageTitle, summary: x.summary, statusText: STEPS[x.status],
        statusPill: 'padding:6px 14px;border-radius:14px;font-size:13px;font-weight:800;background:' + [blue, orange, green][x.status] + ';color:' + (x.status === 0 ? '#FFFFFF' : '#1F1A00'),
        steps: STEPS.map((label, i) => ({ label, style: 'flex:1;text-align:center;padding:8px;border-radius:8px;font-size:13px;font-weight:700;' + (i < x.status ? 'background:#DCEFC8;color:#2F4A0B' : i === x.status ? 'background:' + orange + ';color:#2B1A00' : 'background:#EEF2F7;color:#5A6478') })),
        meta: [['Indiener', x.author], ['Reviewers', x.reviewers], ['Ingediend', x.date], ['Reviewen vóór', x.deadline]].map(([k, v]) => ({ k, v })),
        actions: x.actions.map(([label, run], i) => ({ label, run, style: 'min-height:44px;padding:0 18px;border-radius:22px;cursor:pointer;font-family:inherit;font-size:14px;font-weight:700;' + (i === 0 ? 'border:0;background:' + navy + ';color:#FFFFFF' : 'border:1.5px solid #D5DBE5;background:#FFFFFF;color:#1B2A5C') })),
        mail: 'mailto:?subject=' + encodeURIComponent('Feedback ' + x.id + ': ' + x.title) + '&body=' + encodeURIComponent('Mijn feedback op ' + x.id + ' (' + x.title + '):\n\n') })),
      log: [['v1.0', '6 november 2026', 'Eerste publicatie', 'Het EDSN Delivery Model staat live: Big Picture voor Basis EDSN en AI-Native EDSN, met verdiepende pagina’s per onderdeel.']]
        .map(([version, date, title, text]) => ({ version, date, title, text, dot: 'position:absolute;left:-9px;top:6px;width:15px;height:15px;border-radius:50%;background:' + navy + ';border:3px solid #FFFFFF' }))
    };
    const unlocked = !!self.state.unlocked;
    const wantView = self.state.cview || 'current';
    const cview = unlocked ? wantView : 'current';
    const pwHash = (str) => { let h = 2166136261; for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; } return h; };
    const lock = { err: !!self.state.pwErr, showConcepts: self.state.sel === 'concepts' && unlocked, showConceptsLock: self.state.sel === 'concepts' && !unlocked, showT4KLock: !unlocked && wantView !== 'current',
      submit: (e) => { if (e && e.preventDefault) e.preventDefault(); const el = document.getElementById('edm-pw'); const v = el ? el.value.trim() : '';
        if (pwHash(v.toUpperCase()) === 2421986502) { try { window.sessionStorage.setItem('edm-concepts', '1'); } catch (er) {} self.setState({ unlocked: true, pwErr: false }); } else { self.setState({ pwErr: true }); } } };
    const cv = { isDelta: cview === 'delta', showConcept: cview !== 'current',
      wrap: cview === 'delta' ? 'display:flex;flex-direction:column;gap:30px;padding:20px;border-radius:16px;border:2px solid #5E8A12;background:#F5FBEF' : 'display:flex;flex-direction:column;gap:30px',
      tabs: [['current', 'Huidig'], ['concept', 'Concept'], ['delta', 'Wat verandert er?']].map(([k, label]) => ({ label, on: cview === k, pick: () => self.setState({ cview: k }),
        style: 'min-height:38px;padding:0 14px;border:0;border-radius:19px;cursor:pointer;font-family:inherit;font-size:13px;font-weight:700;' + (cview === k ? 'background:' + navy + ';color:#FFFFFF' : 'background:transparent;color:#1B2A5C') })),
      changes: [['Nieuw', 'Zes kenmerken van een goed functionerend T4K', 'Eén gezamenlijk resultaat, vier hoekpunten in balans, heldere mandaten, één stem, transparant en datagedreven, lerend.', '#kenmerken'],
        ['Nieuw', 'Signalen', 'Wanneer werkt het, en waar moet je op letten.', '#signalen'],
        ['Nieuw', 'Het ritme van het T4K', 'Wekelijkse T4K-sync, Sense and Respond, PI-voorbereiding en T4K-retrospective.', '#ritme'],
        ['Nieuw', 'Zelfscan', 'Acht stellingen met uitkomst per hoekpunt en een advies.', '#zelfscan'],
        ['Ongewijzigd', 'Vier rollen en Samen verantwoordelijk', 'De vier rollen, hun bijdrage en afstemming, en de gezamenlijke verantwoordelijkheid voor de CDP blijven zoals ze zijn.', '#vier-rollen']]
        .map(([type, what, text, href]) => ({ type, what, text, href, tag: 'justify-self:start;padding:4px 10px;border-radius:8px;font-size:12px;font-weight:800;' + (type === 'Nieuw' ? 'background:#2F7A12;color:#FFFFFF' : type === 'Vervalt' ? 'background:#C8102E;color:#FFFFFF' : type === 'Gewijzigd' ? 'background:' + blue + ';color:#FFFFFF' : 'background:#E1E6EE;color:#3E4A63') }))
    };
    I.concepts = ['Wijzigingsvoorstellen', 'Hier vind je voorstellen om de werkwijze (WoW) aan te passen. Ze zijn nog niet vastgesteld: de officiële WoW verandert pas na review en akkoord. Per voorstel zie je wat er verandert, kun je het concept lezen en feedback geven.', null];
    C.concepts = { g: 'Werkwijze', x: [], k: ['Concepten zijn nog niet vastgesteld', 'Bekijk per voorstel wat er verandert', 'Feedback is welkom tijdens de review', 'Vastgestelde wijzigingen staan in het wijzigingslog'], e: '', r: ['t4k', 'f5'] };
    const t4kOrder = ['pm', 'sa', 'rte', 'peopledev'];
    I.t4k = ['Tactisch vierkant (T4K)', 'Het tactisch vierkant is het leiderschapsteam van de ART: Product Manager, System Architect, Release Train Engineer en People Developer. Vier rollen – waarde, techniek, flow en mensen – met één gezamenlijk ART-resultaat, van idee tot operatie.', null];
    open.t4k = () => self.setState({ sel: 't4k' });
    C.t4k = { g: 'Agile Release Train', x: [], k: ['Waarde – Product Manager', 'Techniek – System Architect', 'Flow – Release Train Engineer', 'Mensen – People Developer', 'Samen verantwoordelijk voor de hele CDP'], e: '', r: t4kOrder };
    t4kOrder.forEach((k) => { C[k].g = 'Agile Release Train · T4K'; });

    const order = Object.keys(C).filter((k) => k !== 't4k' && k !== 'sp' && k !== 'vpt' && k !== 'cflow' && !AIP.includes(k));
    if (ai) order.splice(order.indexOf('pipeline') + 1, 0, ...AIP);
    order.splice(order.indexOf('peopledev') + 1, 0, 't4k');
    order.splice(order.indexOf('t4k') + 1, 0, 'vpt');
    if (ai) order.splice(order.indexOf('vpt'), 1, 'cflow');
    ['ee', 'ade', 'itf'].forEach((k) => order.splice(order.indexOf(k), 1));
    order.splice(order.indexOf(ai ? 'cflow' : 'vpt') + 1, 0, 'ade', 'ee', 'itf');
    order.splice(order.indexOf('teams') + 1, 0, 'sp');
    self._order = order;
    self._keys = Object.keys(C);
    // ---- Vraagbalk: snel antwoord uit de inhoud van het Delivery Model ----
    const norm = (x) => String(x || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const STOP = new Set('de het een en of in op aan van voor met bij naar over door om te tot uit als dat die dit deze wat wie hoe waar waarom wanneer welke welk is zijn was wordt worden word kan kun kunnen moet moeten mag doet doen je jij jullie ik we wij ons onze mijn er niet geen wel ook nog dan maar zo heel veel meer edsn'.split(' '));
    const esc = (x) => String(x).replace(/[&<>"]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
    const idx = order.filter((k) => I[k] && C[k] && k !== 'concepts').map((k) => {
      const c = C[k];
      const body = [].concat((c.x || []).map((x) => x[0] + '. ' + x[1]), c.k || [], c.e ? [c.e] : []).join(' ');
      const ALIAS = { aiwf: 'workflows agents', aipol: 'policies kaders beleid human in the loop', aiev: 'evidence bewijs audit inzicht', aiplat: 'platform control plane', t4k: 't4k tactisch vierkant', vpt: 'vpt feature kanban', cflow: 'continuous flow continue flow discover specify build validate release levenscyclus', sp: 'story points sp', itf: 'itf it foundation', ee: 'engineering enablement', ade: 'art development enablement run beheer', pi: 'pi planning' };
      const rr = typeof R !== 'undefined' && R[k] ? R[k] : null;
      const alias = (rr ? rr.abbr + ' ' + rr.full + ' ' : '') + (ALIAS[k] || '');
      const body2 = body + (rr ? ' ' + rr.kern + ' ' + (rr.intro || '') : '');
      return { k, title: I[k][0], group: c.g || '', summary: I[k][1] || '', body: body2, nt: norm(I[k][0] + ' ' + alias), ng: norm(c.g), ns: norm(I[k][1]), nb: norm(body2) };
    });
    const doSearch = (q) => {
      const terms = norm(q).split(/[^a-z0-9]+/).filter((w) => w.length > 1 && !STOP.has(w));
      if (!terms.length) return { terms, hits: [] };
      const hits = idx.map((d) => {
        let sc = 0, all = true;
        terms.forEach((w) => {
          const re = new RegExp('(^|[^a-z0-9])' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
          let s1 = 0;
          if (d.nt === w) s1 += 20; if (re.test(d.nt)) s1 += 10; else if (d.nt.includes(w)) s1 += 6;
          if (d.ng.includes(w)) s1 += 2;
          if (re.test(d.ns)) s1 += 4; else if (d.ns.includes(w)) s1 += 2;
          const m = (d.nb.match(new RegExp('(^|[^a-z0-9])' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length; s1 += Math.min(m, 4);
          if (!s1) all = false; sc += s1;
        });
        return { d, sc: sc + (all ? 5 : 0) };
      }).filter((h) => h.sc > 0).sort((a, b) => b.sc - a.sc).slice(0, 5);
      return { terms, hits };
    };
    const snippet = (d, terms, first) => {
      const sents = (d.summary + ' ' + d.body).split(/(?<=[.!?])\s+/);
      const hasW = (x, w) => new RegExp('(^|[^a-z0-9])' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).test(norm(x));
      const best = sents.filter((x) => x.length > 40 && !/\?$/.test(x)).map((x) => ({ x, n: terms.filter((w) => hasW(x, w)).length })).sort((a, b) => b.n - a.n)[0];
      let txt = first ? d.summary : (best && best.n ? best.x : d.summary);
      if (txt.length > 260) txt = txt.slice(0, 257) + '…';
      let h = esc(txt);
      terms.forEach((w) => { h = h.replace(new RegExp('(?<![A-Za-z0-9À-ÿ])(' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '[a-z]*)', 'gi'), '<mark style="background:#FFE3B3;color:inherit;border-radius:3px;padding:0 2px">$1</mark>'); });
      return h;
    };
    const askArtie = (q) => {
      const qq = String(q || '').trim();
      if (qq) { try { navigator.clipboard && navigator.clipboard.writeText(qq).catch(() => {}); } catch (e) {} }
      const r = document.getElementById('edm-ask-res'); if (r) r.style.display = 'none';
      self.setState({ artie: true, artieQ: qq });
    };
    const ask = {
      input: () => {
        const inp = document.getElementById('edm-ask'); const r = document.getElementById('edm-ask-res'); if (!inp || !r) return;
        const q = inp.value.trim(); if (q.length < 2) { r.style.display = 'none'; r.innerHTML = ''; return; }
        const dk = !!self.state.dark; const fg = dk ? '#E8EDF6' : '#1B2A5C', sub = dk ? '#AEB8CC' : '#3E4A63', bg = dk ? '#1A2440' : '#FFFFFF', hv = dk ? '#24305A' : '#F4F6FA', bd = dk ? '#2E3B63' : '#D5DBE5';
        r.style.background = bg; r.style.borderColor = bd;
        const { terms, hits } = doSearch(q);
        let html = '';
        if (!hits.length) html += '<div style="padding:14px 16px;font-size:14px;color:' + sub + '">Geen onderdeel gevonden voor <strong style="color:' + fg + '">' + esc(q) + '</strong>.</div>';
        hits.forEach((h, i) => {
          const d = h.d;
          if (i === 0) {
            html += '<button type="button" role="option" data-k="' + d.k + '" style="display:flex;flex-direction:column;gap:6px;width:100%;text-align:left;padding:16px 18px;margin-bottom:6px;border:0;border-radius:14px;background:' + hv + ';cursor:pointer;font-family:inherit">'
              + '<span style="font-size:11px;font-weight:800;letter-spacing:1px;text-transform:uppercase;color:#C26F00">Beste antwoord · ' + esc(d.group) + '</span>'
              + '<span style="font-size:18px;font-weight:700;color:' + fg + '">' + esc(d.title) + '</span>'
              + '<span style="font-size:14px;line-height:1.6;color:' + sub + '">' + snippet(d, terms, true) + '</span>'
              + '<span style="font-size:13px;font-weight:700;color:#0072BC">Lees het hele onderdeel →</span></button>';
          } else {
            html += '<button type="button" role="option" data-k="' + d.k + '" style="display:flex;flex-direction:column;gap:2px;width:100%;text-align:left;padding:10px 18px;border:0;border-radius:10px;background:transparent;cursor:pointer;font-family:inherit">'
              + '<span style="font-size:15px;font-weight:700;color:' + fg + '">' + esc(d.title) + ' <span style="font-size:12px;font-weight:600;color:' + sub + '">· ' + esc(d.group) + '</span></span>'
              + '<span style="font-size:13px;line-height:1.5;color:' + sub + '">' + snippet(d, terms) + '</span></button>';
          }
        });
        r.innerHTML = html; r.style.display = 'block';
      },
      key: (e) => { if (e.key === 'Escape') { const r = document.getElementById('edm-ask-res'); if (r) r.style.display = 'none'; } },
      pick: (e) => {
        const b = e.target && e.target.closest ? e.target.closest('[data-k],[data-artie]') : null; if (!b) return;
        const r = document.getElementById('edm-ask-res'); if (r) r.style.display = 'none';
        if (b.getAttribute('data-artie')) { const inp = document.getElementById('edm-ask'); askArtie(inp ? inp.value : ''); return; }
        self.setState({ sel: b.getAttribute('data-k') });
      },
      submit: (e) => { if (e && e.preventDefault) e.preventDefault(); const inp = document.getElementById('edm-ask'); const hit = doSearch(inp ? inp.value : '').hits[0]; const r = document.getElementById('edm-ask-res'); if (r) r.style.display = 'none'; if (hit) self.setState({ sel: hit.d.k }); }
    };
    const embed = String(p.artieEmbed || '').trim();
    const artie = { open: !!self.state.artie, close: () => self.setState({ artie: false }), q: self.state.artieQ || '', hasQ: !!self.state.artieQ, embed, hasEmbed: /^https:\/\//.test(embed), noEmbed: !/^https:\/\//.test(embed) };
    const cur0 = self.state.sel && C[self.state.sel] ? self.state.sel : null;
    // ---- Concepten WP-002 (Volg een Feature) en WP-003 (Ik ben…) ----
    const AI_SHIFT = -280;
    const SPOT = { outcomes: [425, 140, 140, 86], leadership: [250, 170, 140, 84], investment: [425, 268, 140, 96], backlog: [632, 196, 110, 151], epic: [752, 214, 100, 58], roi: [1420, 150, 130, 118],
      owners: [260, 420, 120, 82], art: [580, 470, 760, 34], vpt: [488, 510, 196, 50], cflow: [488, 504, 196, 56], t4k: [680, 424, 240, 138], pioutcomes: [170, 540, 110, 110], vision: [66, 560, 100, 74], roadmap: [273, 668, 110, 76],
      teams: [520, 566, 150, 60], teamoutcomes: [700, 566, 130, 92], sp: [850, 566, 130, 74], value: [1030, 510, 260, 30], customer: [1462, 536, 90, 95], pipeline: [476, 700, 1064, 92],
      ee: [438, 648, 1102, 34], architects: [880, 830, 290, 61], ade: [568, 910, 972, 46], pi: [600, 958, 170, 54], sense: [860, 958, 250, 54], f5: [1047, 1160, 235, 76] };
    // AI-Native EDSN heeft geen portfolio-niveau: die plekken vervallen en de rest schuift omhoog.
    if (ai) Object.keys(SPOT).forEach((k) => { if (SPOT[k][1] < 400) delete SPOT[k]; else SPOT[k] = [SPOT[k][0], SPOT[k][1] + AI_SHIFT, SPOT[k][2], SPOT[k][3]]; });
    const ell = ([x, y, w, h]) => ({ cx: x + w / 2, cy: y + h / 2, rx: Math.round(w * 0.62 + 22), ry: Math.round(h * 0.62 + 22) });
    const maskOf = (keys) => {
      const g = keys.filter((k) => SPOT[k]).map((k) => { const e = ell(SPOT[k]); return 'radial-gradient(ellipse ' + e.rx + 'px ' + e.ry + 'px at ' + Math.round(e.cx) + 'px ' + Math.round(e.cy) + 'px, transparent 0 90%, #000 100%)'; }).join(',');
      return 'position:absolute;inset:0;z-index:45;pointer-events:none;background:rgba(14,26,63,.58);-webkit-mask-image:' + g + ';mask-image:' + g + ';-webkit-mask-composite:source-in;mask-composite:intersect';
    };
    const TOUR = [
      ['outcomes', 'Het begint bij strategie', 'Elke Feature begint bij een strategisch thema. In dit voorbeeld: een betrouwbaar en toekomstbestendig energiesysteem, waarvoor netbeheerders sneller over meterdata moeten beschikken.', 'Portfolio Leadership'],
      ['epic', 'Een idee wordt een Epic', 'Het idee ‘realtime meterdata’ is te groot voor één PI. Het komt als Epic op de Portfolio Backlog, met een lean business case en een hypothese: wat verwachten we dat het oplevert?', 'Epic Owner en Portfolio Leadership'],
      ['vpt', 'Opgeknipt in Features', 'Na akkoord knipt de Product Manager de Epic op in Features. In de VPT / Feature Kanban gaat F-101 van Funnel via Analyse naar Ready: met acceptatiecriteria, een eerste schatting en een heldere Definition of Ready.', 'Product Manager en het VPT'],
      ['t4k', 'Het tactisch vierkant weegt af', 'PM, System Architect, RTE en People Developer kijken samen: levert het waarde, past het in de architectuur, is er capaciteit en hebben we de juiste mensen? Zo komt F-101 hoog op de ART Backlog.', 'Tactisch vierkant (T4K)'],
      ['pi', 'PI Planning: samen committen', 'Tijdens de PI Planning plannen alle teams de Feature in. Afhankelijkheden worden zichtbaar op het ART Planning Board en de teams committen op PI Objectives, met business value van de Business Owners.', 'De hele ART en de Business Owners'],
      ['teams', 'Teams maken het concreet', 'Het team knipt F-101 in stories, schat ze in story points en pakt ze op in de iteraties. Product Owner en Scrum Master / Team Coach houden de flow op gang.', 'Agile Team, Product Owner en SM / TC'],
      ['pipeline', 'Over de lopende band', 'Via de Continuous Delivery Pipeline gaat het werk van exploration via integratie naar deployment: kleine stappen, automatisch getest en steeds klaar om live te gaan.', 'De teams, ondersteund door Engineering Enablement'],
      ['customer', 'Waarde bij de klant', 'Met Release on Demand gaat F-101 live op het moment dat het de klant het meest oplevert. Netbeheerders zien hun meterdata nu realtime: dáár ontstaat de waarde.', 'Product Manager en Business Owners'],
      ['sense', 'Leren en verbeteren', 'In de System Demo en Inspect and Adapt kijkt de ART terug: is de beoogde waarde gehaald en wat leren we? De inzichten gaan mee naar de volgende PI. De cirkel is rond.', 'De hele ART']];
    if (ai) { const vi = TOUR.findIndex((t) => t[0] === 'vpt'); if (vi >= 0) TOUR[vi] = ['cflow', 'De continue flow in', 'In AI-Native EDSN gaat de Epic niet door poortjes, maar de continue lus in: discover, specify, build, validate en release. Agents helpen met analyse en specificatie, mensen beslissen over richting en prioriteit.', 'Product Manager en AI Value Architect']; }
    if (ai) { for (let i = TOUR.length - 1; i >= 0; i--) if (!SPOT[TOUR[i][0]]) TOUR.splice(i, 1); }
    const tStep = typeof self.state.tour === 'number' ? Math.max(0, Math.min(TOUR.length - 1, self.state.tour)) : null;
    const tourOn = tStep !== null && !cur0;
    const tokAt = (k) => { const [x, y, w] = SPOT[k]; return { x: Math.round(Math.min(1440, Math.max(8, x + w / 2 - 70))), y: Math.round(Math.max(6, y - 44)) }; };
    const tourOv = { on: tourOn, mask: '', ring: '', tok: '' };
    if (tourOn) {
      const k = TOUR[tStep][0]; const e = ell(SPOT[k]); const a = tokAt(k); const pk = TOUR[Math.max(0, Math.min(TOUR.length - 1, self.state.tourPrev ?? tStep))][0]; const b0 = tokAt(pk);
      tourOv.mask = maskOf([k]);
      tourOv.ring = 'position:absolute;z-index:46;pointer-events:none;box-sizing:border-box;left:' + Math.round(e.cx - e.rx * 0.9) + 'px;top:' + Math.round(e.cy - e.ry * 0.9) + 'px;width:' + Math.round(e.rx * 1.8) + 'px;height:' + Math.round(e.ry * 1.8) + 'px;border-radius:50%;border:3px dashed ' + orange;
      tourOv.tok = 'position:absolute;z-index:47;pointer-events:none;display:flex;align-items:center;gap:6px;padding:6px 12px;border-radius:6px;background:' + orange + ';color:#2B1A00;font-size:13px;font-weight:800;white-space:nowrap;box-shadow:0 6px 16px rgba(0,0,0,.3);left:' + a.x + 'px;top:' + a.y + 'px;--x0:' + b0.x + 'px;--y0:' + b0.y + 'px';
    }
    const tcur = tourOn ? TOUR[tStep] : TOUR[0];
    const tour = { on: tourOn, n: (tStep ?? 0) + 1, total: TOUR.length, hasPrev: (tStep ?? 0) > 0,
      cur: { title: tcur[1], text: tcur[2], who: tcur[3], name: I[tcur[0]] ? I[tcur[0]][0] : '' },
      nextLabel: (tStep ?? 0) === TOUR.length - 1 ? 'Afronden ✓' : 'Volgende →',
      next: () => { const n = (self.state.tour ?? 0) + 1; if (n >= TOUR.length) self.setState({ tour: null }); else self.setState({ tour: n, tourPrev: self.state.tour }); },
      prev: () => { const n = Math.max(0, (self.state.tour ?? 0) - 1); self.setState({ tour: n, tourPrev: self.state.tour }); },
      stop: () => self.setState({ tour: null }),
      read: () => self.setState({ tour: null, sel: tcur[0] }),
      dots: TOUR.map((t, i) => ({ label: 'Stap ' + (i + 1) + ': ' + t[1], go: () => self.setState({ tour: i, tourPrev: self.state.tour }),
        style: 'flex:1;height:6px;padding:0;border:0;border-radius:3px;cursor:pointer;background:' + (tStep !== null && i <= tStep ? orange : '#E1E6EE') })) };
    const ROLES = [
      ['teamlid', 'Teamlid / engineer', ['teams', 'sp', 'teamoutcomes', 'pipeline', 'ee', 'pi', 'sense'], 'Jij bouwt de oplossing: je zet stories om in werkende software, samen met je team en in AI-Native EDSN ook met AI-agents.', ['PI Planning', 'Iteratieplanning', 'Daily stand-up', 'System Demo', 'Inspect and Adapt'], ['Stories en enablers', 'Team Objectives', 'Story points'], 'Je Product Owner en Scrum Master / Team Coach; voor techniek de System Architect in het T4K.', 'teams'],
      ['po', 'Product Owner', ['teams', 'teamoutcomes', 'sp', 'vpt', 'pi', 'sense', 'value'], 'Jij bepaalt wat het team als eerste bouwt en vertaalt Features naar stories die waarde leveren.', ['PI Planning', 'Backlog refinement', 'Iteratieplanning', 'System Demo', 'Inspect and Adapt'], ['Team Backlog', 'Stories en acceptatiecriteria', 'Team Objectives'], 'De Product Manager in het T4K.', 'teams'],
      ['sm', 'Scrum Master / Team Coach', ['architects', 'teams', 'pi', 'sense', 'pipeline'], 'Jij helpt het team beter te worden: flow, samenwerking en continu verbeteren.', ['PI Planning', 'Daily stand-up', 'Iteratie-retrospective', 'Coach sync', 'Inspect and Adapt'], ['Teambord en flow-metrics', 'Verbeteracties', 'Afhankelijkheden op het ART Planning Board'], 'De Release Train Engineer in het T4K.', 'architects'],
      ['pm', 'Product Manager', ['t4k', 'vpt', 'epic', 'vision', 'roadmap', 'pi', 'value', 'customer'], 'Jij bepaalt wat de ART bouwt en waarom: van visie en roadmap tot de prioriteit van Features.', ['VPT-overleg', 'T4K-sync', 'PI Planning', 'System Demo', 'Inspect and Adapt'], ['Vision en Roadmap', 'ART Backlog en Features', 'PI Objectives'], 'Je collega’s in het T4K (SA, RTE en PD) en de Business Owners.', 'pm'],
      ['rte', 'Release Train Engineer', ['t4k', 'art', 'pi', 'sense', 'pipeline', 'architects'], 'Jij zorgt dat de trein rijdt: flow, PI-uitvoering en het wegnemen van belemmeringen.', ['T4K-sync', 'ART Sync', 'PI Planning', 'System Demo', 'Inspect and Adapt'], ['ART Planning Board', 'PI Objectives en voortgang', 'Risico’s (ROAM)'], 'Je collega’s in het T4K (PM, SA en PD) en de Scrum Masters / Team Coaches.', 'rte'],
      ['bo', 'Business Owner', ['owners', 'outcomes', 'pioutcomes', 'pi', 'sense', 'value'], 'Jij bent eindverantwoordelijk voor de waarde van de ART en kent business value toe aan de PI Objectives.', ['PI Planning (business value toekennen)', 'System Demo', 'Inspect and Adapt'], ['PI Objectives met business value', 'Strategische thema’s'], 'De Product Manager en de RTE.', 'owners'],
      ['pd', 'People Developer', ['t4k', 'ade', 'teams', 'f5'], 'Jij ontwikkelt de mensen achter de ART: vakmanschap, groei en continuïteit via de People Runway.', ['T4K-sync', 'PI Planning', 'Inspect and Adapt', 'Ontwikkelgesprekken'], ['People Runway', 'Competentie- en ontwikkelplannen'], 'Je collega’s in het T4K (PM, SA en RTE).', 'peopledev'],
      ['lace', 'LACE', ['f5', 'leadership', 'backlog', 't4k', 'pi', 'sense', 'architects', 'ade'], 'Het LACE jaagt de manier van werken aan: het coacht leiders en het T4K, faciliteert PI Planning en Inspect and Adapt, ondersteunt Lean Portfolio Management en organiseert het leren.', ['PI Planning (faciliteren)', 'Inspect and Adapt (verbeterworkshop)', 'Portfolio sync', 'Coach sync en communities of practice', 'Eigen LACE-PI Planning'], ['Transformatiebacklog', 'Het EDSN Delivery Model', 'ARTie', 'Leerpaden en trainingen'], 'De Business Owner van het LACE en de RTE’s.', 'f5'],
      ['lead', 'Leidinggevende / portfolio', ['leadership', 'outcomes', 'investment', 'backlog', 'epic', 'roi', 'owners'], 'Jij zet de koers: strategie, investeringen en de randvoorwaarden waarin teams kunnen leveren.', ['Portfolio sync', 'Strategische portfolioreview', 'PI Planning (management review)'], ['Strategische thema’s', 'Portfolio Backlog en Epics', 'Lean budgetten'], 'De Business Owners en Epic Owners.', 'leadership']];
    if (ai) ROLES.forEach((r) => { r[2] = r[2].map((k) => (k === 'vpt' ? 'cflow' : k)); });
    const rKey = self.state.role || 'teamlid';
    const rDef = ROLES.find((r) => r[0] === rKey) || ROLES[0];
    const rvOn = !!self.state.roleView && !cur0;
    const rv = { on: rvOn, show: rvOn, mask: rvOn ? maskOf(rDef[2]) : '', close: () => self.setState({ roleView: false }),
      chips: ROLES.map((r) => ({ label: r[1], on: r[0] === rKey, pick: () => self.setState({ role: r[0] }),
        style: 'min-height:38px;padding:0 14px;border-radius:19px;cursor:pointer;font-family:inherit;font-size:13px;font-weight:700;' + (r[0] === rKey ? 'border:0;background:' + navy + ';color:#FFFFFF' : 'border:1.5px solid #D5DBE5;background:#FFFFFF;color:#1B2A5C') })),
      cur: { label: rDef[1], heading: rDef[0] === 'lace' ? 'Het LACE in de plaat' : 'Jij als ' + rDef[1], intro: rDef[3], events: rDef[4], arts: rDef[5], contact: rDef[6], open: () => self.setState({ sel: rDef[7] }),
        spots: rDef[2].filter((k) => SPOT[k]).map((k, i) => { const [x, y, w] = SPOT[k]; const bx = Math.round(x + w / 2 + Math.min(w / 2, 90) - 6), by = Math.max(4, y - 16);
          return { n: i + 1, name: I[k] ? I[k][0] : k, open: () => self.setState({ sel: k }),
            badge: 'position:absolute;z-index:47;pointer-events:none;left:' + bx + 'px;top:' + by + 'px;display:flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:50%;background:' + orange + ';color:#2B1A00;font-size:15px;font-weight:800;box-shadow:0 0 0 3px #FFFFFF,0 4px 10px rgba(0,0,0,.3)' }; }) } };
    // ---- Continuous Flow (AI-Native, vervangt het VPT) ----
    const CF_AI = {
      discover: ['Agents doorzoeken klantfeedback, markt- en gebruiksdata en helpen hypotheses en aannames scherp te formuleren.', 'Product Manager en AI-Native team'],
      specify: ['Agents stellen specificaties en ontwerpen op en zoeken randgevallen; mensen kiezen en beslissen.', 'Product Owner, System Architect en AI-Native team'],
      build: ['Agents schrijven code, tests en documentatie; mensen sturen, reviewen en beslissen.', 'AI-Native team'],
      validate: ['Agents draaien tests en AI-evals en vatten demo-feedback samen; mensen beoordelen of het doel is gehaald.', 'AI-Native team, Product Owner en Business Owners'],
      release: ['Agents bewaken telemetrie en gebruik en signaleren afwijkingen; de ART stuurt bij in Sense and Respond.', 'Product Manager en RTE'],
    };
    const CF = STAGES.map((st, i) => [st.title, st.nl, st.text, WORKFLOWS.table[i][1].split(/;\s*/).map((x) => x.charAt(0).toUpperCase() + x.slice(1)), CF_AI[st.key][0], CF_AI[st.key][1]]);
    const cfStep = Math.max(0, Math.min(CF.length - 1, self.state.cfStep || 0));
    const cfPos = [-90, -18, 54, 126, 198].map((d) => [Math.round(230 + 170 * Math.cos(d * Math.PI / 180)), Math.round(230 + 170 * Math.sin(d * Math.PI / 180))]);
    const cfPurple = p.aiPrimary || '#6E44B8';
    const cfCol = [cfPurple, '#8C6BD1', orange, '#1F9E95', green];
    const cflow = {
      purple: cfPurple,
      stations: CF.map((c2, i) => ({ n: String(i + 1).padStart(2, '0'), title: c2[0], sub: c2[1], on: i === cfStep, pick: () => self.setState({ cfStep: i }),
        style: 'position:absolute;left:' + cfPos[i][0] + 'px;top:' + cfPos[i][1] + 'px;transform:translate(-50%,-50%)' + (i === cfStep ? ' scale(1.08)' : '') + ';width:112px;height:112px;border-radius:50%;cursor:pointer;font-family:inherit;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;text-align:center;padding:8px;box-sizing:border-box;'
          + (i === cfStep ? 'border:0;background:' + cfCol[i] + ';color:' + (i === 2 || i === 4 ? '#1F1A00' : '#FFFFFF') + ';box-shadow:0 10px 24px rgba(42,22,80,.3)' : 'border:3px solid ' + cfCol[i] + ';background:#FFFFFF;color:#1B2A5C') })),
      tokens: [[45, 'F'], [135, 'F'], [210, ''], [260, 'F'], [320, '']].map(([deg, label]) => { const r = deg * Math.PI / 180; const x = 230 + 170 * Math.cos(r), y = 230 + 170 * Math.sin(r);
        return { label, style: 'position:absolute;left:' + Math.round(x) + 'px;top:' + Math.round(y) + 'px;transform:translate(-50%,-50%);display:flex;align-items:center;justify-content:center;' + (label ? 'width:26px;height:26px;border-radius:6px;background:' + orange + ';color:#2B1A00;font-size:12px;font-weight:800;box-shadow:0 3px 8px rgba(0,0,0,.25)' : 'width:14px;height:14px;border-radius:50%;background:' + cfPurple) + ';animation-play-state:' + play }; }),
      cur: { kicker: 'Stap ' + (cfStep + 1) + ' van ' + CF.length + ' · ' + CF[cfStep][0], title: CF[cfStep][1], goal: CF[cfStep][2], acts: CF[cfStep][3], ai: CF[cfStep][4], owner: CF[cfStep][5] },
      next: () => self.setState({ cfStep: (cfStep + 1) % CF.length }),
      prev: () => self.setState({ cfStep: (cfStep + CF.length - 1) % CF.length }),
      cmp: [['Ritme', 'PI-gedreven: Features gaan fase voor fase door het bord.', 'Continu: werk stroomt door de lus, met elke iteratie Sense and Respond.'],
        ['Eenheid van werk', 'Feature met Definition of Ready en Done.', 'Outcome-hypothese met een meetbaar succescriterium, in kleine increments.'],
        ['Analyse en specificatie', 'Handmatig in de fasen Analyse en Refinement.', 'Agents ondersteunen analyse, impact en specificatie; mensen kiezen.'],
        ['Besluiten', 'Per poort in het VPT-overleg.', 'Doorlopend op basis van data, met een vast moment in Sense and Respond.'],
        ['Succes meten', 'Output en voorspelbaarheid van levering.', 'Uitkomsten, flowtijd en of hypotheses kloppen.']].map(([a, b, c3]) => ({ a, b, c: c3 })),
      ritme: [['Doorlopend', 'De lus draait', 'Teams en agents halen signalen op, bouwen en meten in kleine stappen. Agents bewaken uitkomsten en melden afwijkingen.', '#F4F2FA', '#2A1650'],
        ['Elke iteratie · 2 uur', 'Sense and Respond', 'Het eerste uur kijken we naar data, klantfeedback en demo’s. Het tweede uur besluiten we over bijsturen, capaciteit of stoppen. Vervangt Inspect and Adapt.', cfPurple, '#FFFFFF'],
        ['Elke PI · 1 dag', 'PI Outcome Planning', 'De ART herijkt de uitkomsten voor de komende PI en lijnt lopend werk opnieuw uit. Vervangt de tweedaagse PI Planning.', '#2A1650', '#FFFFFF']]
        .map(([when, title, text, bg, fg]) => ({ when, title, text, box: 'padding:18px;border-radius:14px;background:' + bg + ';color:' + fg + ';display:flex;flex-direction:column;gap:6px' })),
      roles: [['Product Manager', 'Eigenaar van de uitkomsten. Prioriteert continu op waarde en impact.'], ['AI Value Architect', 'Zorgt dat AI echt waarde toevoegt en verantwoord wordt ingezet.'], ['System Architect', 'Bewaakt de technische samenhang, ook als teams en agents snel gaan.'], ['Release Train Engineer', 'Faciliteert Sense and Respond en houdt de flow gezond.'], ['AI-Native teams', 'Bouwen, testen en leren samen met agents, in kleine stappen.'], ['Business Owners', 'Toetsen of de uitkomsten de beoogde waarde opleveren.']].map(([title, text]) => ({ title, text })),
      rails: [['Beperk het onderhanden werk', 'Een WIP-limiet op de lus voorkomt dat de snelheid van agents leidt tot te veel half werk.'], ['Elke stap een hypothese', 'Geen werk zonder verwachte uitkomst en een manier om die te meten.'], ['Mens beslist, agent versnelt', 'Richting, prioriteit en acceptatie blijven mensenwerk.'], ['Stop wat geen impact heeft', 'Sense and Respond schrapt werk dat niet bijdraagt.'], ['Transparant en verantwoord', 'Binnen de kaders van AI Governance and Ethics.']].map(([title, text]) => ({ title, text }))
    };
    // ---- Concept WP-004: de LACE-pagina ----
    const ICON = { lead: 'M4 20h16M6 20V10l6-5 6 5v10M10 20v-5h4v5', art: 'M3 12h18M7 8l-4 4 4 4M17 8l4 4-4 4', team: 'M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM16 11a3 3 0 1 0 0-6M2 20c0-3 3-5 6-5s6 2 6 5M14 15c3 0 6 2 6 5', hr: 'M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.5-7 10-7 10z', strat: 'M12 3v4M12 17v4M3 12h4M17 12h4M12 12m-5 0a5 5 0 1 0 10 0 5 5 0 1 0-10 0', learn: 'M3 8l9-4 9 4-9 4zM7 10v5c0 1.5 2.5 3 5 3s5-1.5 5-3v-5' };
    const tagOf = (type) => 'justify-self:start;padding:4px 10px;border-radius:8px;font-size:12px;font-weight:800;' + (type === 'Nieuw' ? 'background:#2F7A12;color:#FFFFFF' : type === 'Vervalt' ? 'background:#C8102E;color:#FFFFFF' : type === 'Gewijzigd' ? 'background:' + blue + ';color:#FFFFFF' : 'background:#E1E6EE;color:#3E4A63');
    const kTag = { Product: [orange, '#2B1A00'], WoW: [blue, '#FFFFFF'], Leren: [green, '#1F2604'], Portfolio: [navy, '#FFFFFF'], Mensen: ['#A0337A', '#FFFFFF'], LACE: ['#5A6478', '#FFFFFF'] };
    const dot = (x, y, r, c) => 'position:absolute;left:' + x + '%;top:' + y + '%;width:' + r + 'px;height:' + r + 'px;border-radius:50%;background:' + c + ';transform:translate(-50%,-50%)';
    const people = [[15, 30], [30, 72], [50, 22], [70, 74], [85, 32], [38, 48], [62, 50]];
    const lace = {
      hub: [['lead', 'Leiderschap en portfolio', 'Coacht leiders en ondersteunt Lean Portfolio Management: portfolio sync, reviews en participatief budgetteren.', 19, 17],
        ['art', 'ART’s en T4K', 'Helpt ART’s lanceren en verbeteren, coacht het T4K en faciliteert PI Planning en Inspect and Adapt.', 19, 50],
        ['team', 'Teams en coaches', 'Ondersteunt Scrum Masters / Team Coaches en Product Owners, en deelt goede praktijken tussen teams.', 19, 83],
        ['strat', 'CIO Office en strategie', 'Houdt de transformatie verbonden met de strategie en stuurt op transformatie-OKR’s.', 81, 17],
        ['hr', 'Mensen en HR', 'Bouwt met HR en de People Developers aan rolprofielen, leerpaden en de People Runway.', 81, 50],
        ['learn', 'Leren en communities', 'Organiseert trainingen, communities of practice en kennisdeling over de hele organisatie.', 81, 83]]
        .map(([ic, title, text, x, y]) => ({ title, text, icon: ICON[ic], box: 'position:absolute;left:' + x + '%;top:' + y + '%;transform:translate(-50%,-50%);width:31%;box-sizing:border-box;padding:12px 14px;border-radius:12px;background:#FFFFFF;border:1.5px solid #D5DBE5;box-shadow:0 4px 12px rgba(27,42,92,.06);display:flex;flex-direction:column;gap:6px' })),
      taken: [['Transformatie faciliteren', 'Een heldere missie, zelf het goede voorbeeld geven als agile team, en regelmatig en eerlijk communiceren over visie en voortgang.', 'het Delivery Model en de wijzigingsvoorstellen maken de WoW voor iedereen zichtbaar.'],
        ['Transformatiebacklog beheren', 'Eén transparante backlog met verbeteringen, geprioriteerd met WSJF en gekoppeld aan transformatie-OKR’s. Kleine, zichtbare successen in plaats van alles tegelijk.', 'voorstellen als WP-001 lopen via review naar de vastgestelde WoW.'],
        ['Leren organiseren', 'Rolgerichte leerpaden samen met HR, trainingen en communities of practice, en meten of het leren effect heeft.', 'samen met de People Developers en de People Runway.'],
        ['Leiders coachen', 'Leiderschapsworkshops, coaching één-op-één en in kleine groepen, en dicht bij de praktijk blijven: geen ivoren toren.', 'coaching van het T4K, met de T4K-zelfscan als gespreksstarter.'],
        ['Lean Portfolio Management ondersteunen', 'Portfolio-events faciliteren, zoals Portfolio Sync en Portfolio Review, en inzicht leveren over waardestromen heen.', 'in nauwe samenwerking met het CIO Office.']]
        .map(([title, text, edsn], i) => ({ n: i + 1, title, text, edsn })),
      prods: [
        { kind: 'Product', title: 'ARTie', text: 'Onze WoW-agent in Copilot Studio. ARTie beantwoordt vragen over rollen, events en werkwijze, op basis van de kennisbank van het Delivery Model.', cta: 'Vraag het ARTie', hasRun: true, run: () => self.setState({ artie: true, artieQ: '' }), bg: navy, fg: '#FFFFFF', tagBg: orange, tagFg: '#2B1A00', btnBg: orange, btnFg: '#2B1A00' },
        { kind: 'Product', title: 'EDSN Delivery Model', text: 'De Big Picture met verdiepende pagina’s, wijzigingsvoorstellen en een wijzigingslog: één plek voor onze vastgestelde werkwijze.', cta: 'Naar de Big Picture', hasRun: true, run: () => self.setState({ sel: null }), bg: orange, fg: '#2B1A00', tagBg: navy, tagFg: '#FFFFFF', btnBg: navy, btnFg: '#FFFFFF' },
        { kind: 'Dienst', title: 'Trainingen en communities', text: 'Leiderschapsworkshops, rolgerichte trainingen en communities of practice voor onder meer RTE’s, Scrum Masters / Team Coaches en Product Owners.', cta: '', hasRun: false, run: null, bg: '#F4F6FA', fg: '#1B2A5C', tagBg: '#E1E6EE', tagFg: '#1B2A5C', btnBg: navy, btnFg: '#FFFFFF' }]
        .map((p2) => Object.assign(p2, { box: 'padding:20px;border-radius:16px;background:' + p2.bg + ';color:' + p2.fg + ';display:flex;flex-direction:column;gap:10px',
          tag: 'align-self:flex-start;padding:3px 10px;border-radius:8px;font-size:11px;font-weight:800;letter-spacing:1px;text-transform:uppercase;background:' + p2.tagBg + ';color:' + p2.tagFg,
          btn: 'align-self:flex-start;margin-top:auto;min-height:40px;padding:0 16px;border:0;border-radius:20px;cursor:pointer;font-family:inherit;font-size:13px;font-weight:700;background:' + p2.btnBg + ';color:' + p2.btnFg })),
      roles: [['Product Owner', 'Prioriteert de transformatiebacklog samen met de stakeholders en houdt hem zichtbaar.'], ['Team Coach', 'Faciliteert het LACE-team en ruimt belemmeringen op.'], ['Verandercoaches', 'Collega’s met verschillende achtergronden, zoals agile coaches en procesconsultants, met gezag in de organisatie.'], ['Business Owner', 'Een sponsor uit het management, die vroege drempels wegneemt en de koppeling met de strategie bewaakt.']].map(([title, text]) => ({ title, text })),
      crew: ['Jeffrey', 'Pieter', 'Luc', 'Vian', 'Paul', 'Monique'],
      ritme: [['Align', 'PI Planning', 'Faciliteert de PI Planning van de ART’s en plant de eigen LACE-PI.', navy, '#FFFFFF'], ['Sense', 'Iteraties', 'Coaching op de werkvloer en de transformatiebacklog oppakken.', blue, '#FFFFFF'], ['Sense', 'Signalen ophalen', 'Zelfscans, metingen en gesprekken laten zien waar het knelt.', blue, '#FFFFFF'], ['Respond', 'System Demo', 'Toont eigen resultaten, zoals nieuwe versies van het Delivery Model en ARTie.', orange, '#2B1A00'], ['Respond', 'Inspect and Adapt', 'Faciliteert de verbeterworkshop en neemt de uitkomsten mee naar de backlog.', orange, '#2B1A00']]
        .map(([phase, title, text, bg, fg]) => ({ phase, title, text, box: 'padding:14px 12px;border-radius:12px;background:' + bg + ';color:' + fg + ';display:flex;flex-direction:column;gap:6px' })),
      kanban: [['Funnel', [['Portfolio', 'Lean budgetten met Finance'], ['Mensen', 'Rolprofielen AI-native met HR']]], ['Analyse', [['LACE', 'Organisatiemodel LACE kiezen'], ['Product', 'ARTie koppelen aan de kennisbank']]], ['Klaar voor start', [['Leren', 'Training AI-geletterdheid']]], ['In uitvoering', [['WoW', 'WP-001 T4K-zelfscan'], ['Product', 'Volg een Feature-tour']]], ['Gereed', [['Product', 'EDSN Delivery Model live']]]]
        .map(([title, items]) => ({ title, items: items.map(([type, label]) => ({ type, label, tag: 'align-self:flex-start;padding:1px 7px;border-radius:6px;font-size:10px;font-weight:800;background:' + kTag[type][0] + ';color:' + kTag[type][1] })) })),
      model: [['Startfase', 'Centraal', 'Eén LACE-team, dicht bij het management. Heldere regie en snel schakelen.', [dot(50, 50, 26, orange)].concat(people.map(([x, y]) => dot(x, y, 9, navy)))],
        ['Groeifase', 'Hybride (hub & spoke)', 'Een kernteam plus coaches die in de ART’s en waardestromen zitten.', [dot(50, 50, 22, orange), dot(18, 34, 12, orange), dot(82, 34, 12, orange), dot(50, 82, 12, orange)].concat(people.map(([x, y]) => dot(x, y, 8, navy)))],
        ['Volwassen fase', 'Decentraal', 'Het verandervermogen zit in de lijn. Het LACE is vooral kenniscentrum en aanjager.', people.map(([x, y]) => dot(x, y, 9, navy)).concat([[22, 52], [42, 30], [58, 70], [78, 52], [50, 50]].map(([x, y]) => dot(x, y, 11, orange)))]]
        .flatMap(([phase, title, text, dots], i, arr) => { const st = { isStep: true, isArrow: false, phase, title, text, dots }; return i < arr.length - 1 ? [st, { isStep: false, isArrow: true }] : [st]; }),
      meten: [['Adoptie (eerste fase)', blue, ['ART’s gelanceerd en ondersteund', 'Mensen getraind per rol', 'Coaches en SPC’s opgeleid', 'T4K-zelfscans ingevuld']], ['Uitkomsten (volwassen fase)', green, ['Flow: doorlooptijd, cycle time en throughput', 'Voorspelbaarheid van PI’s', 'Kwaliteit en klanttevredenheid', 'Business Agility Assessment als nul- en vervolgmeting']]].map(([title, color, items]) => ({ title, color, items })),
      ai: [['AI-geletterdheid organiseren', 'Leerpaden zodat iedereen AI goed en verantwoord kan inzetten in zijn rol.'], ['Verantwoord AI-gebruik', 'Samen met AI Governance and Ethics: heldere kaders voor transparantie, privacy en veiligheid.'], ['Zelf AI-native werken', 'Het LACE gebruikt zelf agents zoals ARTie en werkt volgens align, sense en respond.'], ['Mens-AI-teams coachen', 'Teams helpen bepalen wat mensen doen en wat agents doen, en hoe ze samen beter worden.']].map(([title, text]) => ({ title, text })),
      old: (C.f5 && C.f5.x ? C.f5.x : []).map((x) => ({ h: x[0], p: x[1] })),
      changes: [['Nieuw', 'Het LACE in één oogopslag', 'Het LACE als verbindende hub tussen leiderschap, ART’s, teams, HR, strategie en communities.', '#lace-oogopslag'],
        ['Nieuw', 'Vijf verantwoordelijkheden', 'Met per verantwoordelijkheid wat het bij EDSN betekent.', '#lace-taken'],
        ['Nieuw', 'Onze producten', 'ARTie, het EDSN Delivery Model en de trainingen en communities.', '#lace-producten'],
        ['Nieuw', 'Het LACE als agile team, ritme en backlog', 'Rollen in het LACE-team, de PI-cadans met align, sense en respond, en de transformatiebacklog.', '#lace-team'],
        ['Nieuw', 'Organisatiemodel en voortgang meten', 'Van centraal via hybride naar decentraal, en hoe we adoptie en uitkomsten meten.', '#lace-model'],
        ['Nieuw', 'Het LACE in een AI-Native EDSN', 'AI-geletterdheid, verantwoord AI-gebruik en mens-AI-teams.', '#lace-ai'],
        ['Nieuw', 'Het LACE in de Big Picture', 'Een knop die laat zien waar het LACE actief is in de plaat.', '#lace-bigpicture'],
        ['Vervalt', 'Wat is het? · Wat doet het LACE? · Samenwerking', 'De huidige korte teksten gaan op in de nieuwe secties.', '#vervalt']].map(([type, what, text, href]) => ({ type, what, text, href, tag: tagOf(type) })),
      openMeasure: () => self.setState({ sel: 'f6' }),
      showInBP: () => self.setState({ sel: null, roleView: true, role: 'lace', tour: null, pfOpen: true })
    };
    const cur = self.state.sel && C[self.state.sel] ? self.state.sel : null;
    const emptyRole = { abbr: '', full: '', fullBr: '', color: '#1B2A5C', tint: '#EEF2F7', theme: '', kern: '', intro: '', wheel: [], doelen: [], ai: [], resp: [], meet: [], afst: '', top: { h: '', t: '' }, left: { h: '', t: '' }, right: { h: '', t: '' }, bottom: { h: '', t: '' }, mandaat: '', kpi: [], relatie: [], ontw: [], strat: '' };
    let page = { title: '', group: '', summary: '', sections: [], keys: [], related: [], edsn: '', hasEdsn: false, minutes: 3, prev: { title: '', pick: null }, next: { title: '', pick: null }, badgeBg: '#EEF2F7', badgeFg: '#1B2A5C', toc: [], isRole: false, isT4K: false, role: emptyRole, t4k: [], updated: '4 november 2026', cmp: [], hasCmp: false, isSP: false, isVPT: false, isEE: false, isPD: false, isPR: false, isBV: false, isAIART: false, isConcepts: false, isLACE: false, isCFLOW: false, isAIPIPE: false, isAIWF: false, isAIPOL: false, isAIEV: false, isAIPLAT: false };
    if (cur) {
      const c = C[cur];
      const idx = order.indexOf(cur);
      const nav = (k) => ({ title: I[k][0], pick: () => self.setState({ sel: k }) });
      const words = (I[cur][1] + c.x.map((s) => s[1]).join(' ') + c.e).split(' ').length;
      page = {
        title: I[cur][0], group: c.g, summary: I[cur][1],
        sections: c.x.map((s, i) => ({ id: 'sectie-' + (i + 1), h: s[0], p: s[1] })),
        keys: c.k.map((text) => ({ text })),
        related: c.r.filter((k) => I[k]).map(nav),
        edsn: c.e, hasEdsn: !!c.e,
        minutes: Math.max(2, Math.round(words / 180)),
        prev: nav(order[(idx - 1 + order.length) % order.length]),
        next: nav(order[(idx + 1) % order.length]),
        badgeBg: ai ? orange : '#EEF2F7', badgeFg: ai ? '#2B1A00' : '#1B2A5C',
        isRole: false, isT4K: cur === 't4k', role: emptyRole, t4k: [], updated: '4 november 2026',
        cmp: (c.cmp || []).map((r) => ({ a: r[0], b: r[1], c: r[2] })), hasCmp: !!c.cmp
      };
      page.toc = [{ id: 'samenvatting', h: 'Samenvatting' }].concat(page.sections.map((s) => ({ id: s.id, h: s.h })));
      const rd = R[cur];
      if (rd) {
        const [color, tint, theme] = RC[cur];
        const angles = [-126, -54, 18, 90, 162];
        const li = (a) => a.map((text) => ({ text }));
        const pair = (x) => ({ h: x[0], t: x[1] });
        page.isRole = true;
        page.summary = rd.kern + ' ' + rd.intro;
        page.sections = [];
        page.edsn = ''; page.hasEdsn = false;
        page.keys = li(rd.doelen);
        page.related = ['t4k'].concat(t4kOrder.filter((k) => k !== cur)).map(nav);
        page.minutes = 4; page.updated = '1 november 2026 (werkvoorstel T4K)';
        page.role = {
          abbr: rd.abbr, full: rd.full, fullBr: rd.full.replace(' ', '\n'), color, tint, theme, kern: rd.kern, intro: rd.intro,
          wheel: rd.wheel.map((label, i) => {
            const r = angles[i] * Math.PI / 180;
            const x = Math.round(170 + 114 * Math.cos(r) - 56), y = Math.round(170 + 114 * Math.sin(r) - 34);
            return { label, icon: WI[label] || WI._,
              stroke: color,
              box: 'position:absolute;left:' + x + 'px;top:' + y + 'px;width:112px;height:68px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;text-align:center',
              iconBox: 'display:flex;align-items:center;justify-content:center;width:38px;height:38px;border-radius:50%;background:#FFFFFF;box-shadow:0 0 0 2px ' + color };
          }),
          sectors: angles.map((c, i) => {
            const P = (deg, rad) => { const t = deg * Math.PI / 180; return (170 + rad * Math.cos(t)).toFixed(1) + ' ' + (170 + rad * Math.sin(t)).toFixed(1); };
            const a0 = c - 36, a1 = c + 36, R = 166, r0 = 62;
            return { d: 'M' + P(a0, r0) + ' L' + P(a0, R) + ' A' + R + ' ' + R + ' 0 0 1 ' + P(a1, R) + ' L' + P(a1, r0) + ' A' + r0 + ' ' + r0 + ' 0 0 0 ' + P(a0, r0) + ' Z', fill: tint };
          }),
          doelen: li(rd.doelen), ai: li(rd.ai),
          resp: rd.resp.map((x) => ({ t: x[0], a: x[1], r: x[2] })),
          meet: rd.meet.map(pair), afst: rd.afst,
          top: pair(rd.samen[0]), left: pair(rd.samen[1]), right: pair(rd.samen[2]), bottom: pair(rd.samen[3]),
          mandaat: rd.mandaat, kpi: li(rd.kpi), relatie: li(rd.relatie), ontw: li(rd.ontw), strat: rd.strat
        };
        page.toc = [{ id: 'samenvatting', h: 'Samenvatting' }, { id: 'oogopslag', h: 'De rol in één oogopslag' }, { id: 'verantwoordelijkheden', h: 'Verantwoordelijkheden' }, { id: 'samenwerking', h: 'Samenwerking en resultaat' }, { id: 'kpis', h: 'KPI’s en ontwikkeling' }];
      }
      if (page.isT4K) {
        page.minutes = 2; page.updated = '1 november 2026 (werkvoorstel T4K)';
        page.t4k = t4kOrder.map((k, i) => {
          const [color, tint, theme] = RC[k];
          const radius = ['16px 4px 4px 4px', '4px 16px 4px 4px', '4px 4px 4px 16px', '4px 4px 16px 4px'][i];
          const bg = k === 'peopledev' ? '#A9BC2B' : color;
          const fg = k === 'peopledev' ? '#1F2604' : '#FFFFFF';
          return { abbr: R[k].abbr, full: R[k].full, theme, color, bijdrage: R[k].bijdrage, afst: R[k].t4kAfst, pick: () => self.setState({ sel: k }),
            tile: 'min-height:150px;padding:20px;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;gap:8px;border:0;cursor:pointer;font-family:inherit;text-align:left;border-radius:' + radius + ';background:' + bg + ';color:' + fg };
        });
        page.toc = [{ id: 'samenvatting', h: 'Samenvatting' }].concat(cv.isDelta ? [{ id: 'delta', h: 'Wat verandert er?' }] : []).concat([{ id: 'vier-rollen', h: 'Vier rollen, één resultaat' }]).concat(cv.showConcept ? [{ id: 'kenmerken', h: 'Wanneer werkt een T4K goed?' }, { id: 'signalen', h: 'Signalen' }, { id: 'ritme', h: 'Het ritme' }, { id: 'zelfscan', h: 'Zelfscan' }] : []).concat([{ id: 'samen', h: 'Samen verantwoordelijk' }]); page.minutes = cv.showConcept ? 6 : 2;
      }
      if (cur === 'art' && ai) { page.isAIART = true; page.toc.push({ id: 'zes-kenmerken', h: 'Zes kenmerken' }, { id: 'k1', h: '1. Rond producten' }, { id: 'k2', h: '2. Outcome-gedreven' }, { id: 'k3', h: '3. Menselijk oordeel' }, { id: 'k4', h: '4. Innovatie en cadans' }, { id: 'k5', h: '5. Gedeelde AI-workflows' }, { id: 'k6', h: '6. AI-governance' }); page.minutes = 12; }
      if (ai && cur === 'pipeline') { page.isAIPIPE = true; page.sections = []; page.minutes = 6; page.updated = '13 november 2026'; page.toc = [['samenvatting', 'Samenvatting'], ['pipeline-plaat', 'De pipeline in één plaat'], ['stappen', 'Vijf stappen'], ['leren-en-waarde', 'Leren en waarde'], ['kanban', 'Het Kanban-bord'], ['componenten', 'Vier componenten']].map(([id, h]) => ({ id, h })); }
      const AITOC = { aiwf: [['waarom', 'Eigen werkwijze'], ['wat', 'Wat is een workflow?'], ['kwaliteiten', 'Vijf kwaliteiten'], ['voorbeeld', 'Voorbeeld'], ['per-stap', 'Workflows per stap'], ['vastleggen', 'Waarom vastleggen?']],
        aipol: [['soorten', 'Drie soorten kaders'], ['ingebouwd', 'In elke stap'], ['mens-in-de-lus', 'Mens in of op de lus'], ['agents', 'Bevoegdheid van agents']],
        aiev: [['bewijs', 'Bewijs'], ['voorbeeld', 'Voorbeeld'], ['inzicht', 'Van bewijs naar inzicht']],
        aiplat: [['control-plane', 'Het control plane'], ['functies', 'Vijf functies'], ['niveaus', 'Meerdere niveaus'], ['afspraken', 'Brengen en krijgen']] };
      if (AITOC[cur]) { page['isAI' + { aiwf: 'WF', aipol: 'POL', aiev: 'EV', aiplat: 'PLAT' }[cur]] = true; page.minutes = 5; page.updated = '13 november 2026'; page.badgeBg = orange; page.badgeFg = '#2B1A00'; page.toc = [{ id: 'samenvatting', h: 'Samenvatting' }].concat(AITOC[cur].map(([id, h]) => ({ id, h }))); }
      if (cur === 'cflow') { page.isCFLOW = true; page.toc = [{ id: 'samenvatting', h: 'Samenvatting' }, { id: 'flow-loop', h: 'De flow draait altijd' }, { id: 'flow-vs-vpt', h: 'Van poortjes naar flow' }, { id: 'flow-ritme', h: 'Het ritme' }, { id: 'flow-rollen', h: 'Wie doet wat?' }, { id: 'flow-vangrails', h: 'Vangrails' }]; page.minutes = 5; page.updated = '12 november 2026'; }
      if (cur === 'f5') {
        page.isLACE = true;
        if (cv.showConcept) {
          page.sections = []; page.minutes = 7;
          page.toc = [{ id: 'samenvatting', h: 'Samenvatting' }].concat(cv.isDelta ? [{ id: 'delta', h: 'Wat verandert er?' }, { id: 'vervalt', h: 'Vervalt' }] : [])
            .concat([['lace-oogopslag', 'In één oogopslag'], ['lace-taken', 'Vijf verantwoordelijkheden'], ['lace-producten', 'Onze producten'], ['lace-team', 'Het LACE als agile team'], ['lace-ritme', 'Ritme'], ['lace-backlog', 'Transformatiebacklog'], ['lace-model', 'Organisatiemodel'], ['lace-meten', 'Voortgang meten'], ['lace-ai', 'AI-Native EDSN'], ['lace-bigpicture', 'In de Big Picture']].map(([id, h]) => ({ id, h })));
        }
      }
      if (cur === 'concepts') { page.isConcepts = true; page.toc.push({ id: 'proces', h: 'Zo verloopt een wijziging' }, { id: 'voorstellen', h: 'Lopende voorstellen' }, { id: 'wijzigingslog', h: 'Wijzigingslog' }); page.minutes = 2; }
      if (cur === 'value') { page.isBV = true; page.toc.push({ id: 'waardedraad', h: 'Waarde verbindt beslissingen' }, { id: 'hefboom', h: 'Hefboompunten' }, { id: 'valkuil', h: 'Waardefocus' }, { id: 'waarde-in-safe', h: 'Waarde in het model' }, { id: 'meten', h: 'Meten op resultaat' }); page.minutes = 6; }
      if (cur === 'peopledev') { page.isPD = true; page.toc.push({ id: 'people-authority', h: 'De people authority' }, { id: 'people-debt', h: 'People debt' }, { id: 'capaciteit', h: 'Capaciteitsallocatie' }, { id: 'pd-verantwoordelijkheden', h: 'Kernverantwoordelijkheden' }); page.minutes = 9; }
      if (cur === 'ade') { page.isPR = true; page.toc.push({ id: 'runway', h: 'Twee runways' }, { id: 'bouwstenen', h: 'Een sterke people runway' }, { id: 'strategisch-operationeel', h: 'Strategisch en operationeel' }, { id: 'procesopzet', h: 'Wie doet wat' }, { id: 'investeren', h: 'Opbouwen en onderhouden' }, { id: 'businesscase', h: 'Waarom het loont' }); page.minutes = 8; }
      if (cur === 'ee') { page.isEE = true; page.toc.push({ id: 'golden-path', h: 'Het golden path' }, { id: 'diensten', h: 'Wat EE levert' }, { id: 'organisatie', h: 'Teams, chapters en guilds' }, { id: 'metrics', h: 'Meten wat ertoe doet' }, { id: 'principes', h: 'Engineeringprincipes' }); page.minutes = 6; }
      if (cur === 'vpt') { page.isVPT = true; page.toc.unshift({ id: 'bord', h: 'Het Kanban-bord' }); page.toc.push({ id: 'oogopslag-vpt', h: 'In één oogopslag' }, { id: 'wat-doen', h: 'Wat moet ik nu doen?' }, { id: 'dor-dod', h: 'Definition of Ready & Done' }, { id: 'canvas', h: 'Feature canvas' }); page.minutes = 6; page.updated = 'werkwijze Feature Kanban-proces (J. van Diermen)'; }
      if (cur === 'sp') { page.isSP = true; page.toc.push({ id: 'animatie', h: 'Het proces in beweging' }, { id: 'visual', h: 'Zo werkt normaliseren' }, { id: 'uitgangspunten', h: 'Uitgangspunten' }, { id: 'alternatieven', h: 'Alternatieven' }); page.minutes = 4; page.updated = 'werkvoorstel story points'; }
      if (page.hasCmp) page.toc.push({ id: 'vergelijking', h: 'Output versus outcome' });
      if (page.hasEdsn) page.toc.push({ id: 'bij-edsn', h: 'Bij EDSN' });
    }

    const on = 'display:flex;align-items:center;gap:10px;height:48px;padding:0 22px;border-radius:30px;border:0;cursor:pointer;font-family:inherit;font-size:18px;font-weight:600;background:' + navy + ';color:#FFFFFF';
    const off = 'display:flex;align-items:center;gap:10px;height:48px;padding:0 22px;border-radius:30px;border:0;cursor:pointer;font-family:inherit;font-size:18px;font-weight:500;background:transparent;color:#1B2A5C';

    return {
      navy, blue, cyan, orange, green, play, bpPlay, chips, sp, vpt, itf, eeChips, ee, pr, bv, aiart, t4kh, wow, cv, lock, ask, artie, tour, tourOv, rv, lace, cflow,
      openArtie: () => self.setState({ artie: true, artieQ: '' }),
      openConcepts: () => self.setState({ sel: 'concepts' }),
      // Portfolio-niveau: in Basis EDSN uitklapbaar, in AI-Native EDSN niet aanwezig
      pfOpen: !ai && !!self.state.pfOpen, pfClosed: !ai && !self.state.pfOpen,
      togglePf: () => self.setState({ pfOpen: !self.state.pfOpen }),
      shiftY: ai ? AI_SHIFT : (self.state.pfOpen ? 0 : -240),
      frameH: ai ? 1040 + AI_SHIFT : (self.state.pfOpen ? 1040 : 800),
      rootH: ai ? 1260 + AI_SHIFT : (self.state.pfOpen ? 1260 : 1020),
      pageH: ai ? 1800 + AI_SHIFT : (self.state.pfOpen ? 1800 : 1560),
      laceOn: !!self.state.lace,
      openLace: () => self.setState({ lace: true }),
      closeLace: () => self.setState({ lace: false }),
      laceCrew: ['Jeffrey', 'Pieter', 'Luc', 'Vian', 'Paul', 'Monique'].map((name, i) => { const c = ['#0072BC', '#00A6D6', '#F39200', '#95C11F', '#1B2A5C', '#00807E'][i]; const fg = (i === 2 || i === 3) ? '#1F2604' : '#FFFFFF'; return { name, initial: name[0], adopted: name === 'Paul' || name === 'Monique',
        wagon: 'position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;width:118px;height:86px;border-radius:12px;background:#FFFFFF;border:4px solid ' + c + ';box-sizing:border-box',
        avatar: 'display:flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:50%;background:' + c + ';color:' + fg + ';font-size:16px;font-weight:800',
        chip: 'display:inline-flex;align-items:center;padding:5px 14px;border-radius:16px;font-size:14px;font-weight:700;background:' + c + ';color:' + fg }; }),
      isDark: !!self.state.dark, notDark: !self.state.dark,
      darkLabel: self.state.dark ? 'Dagmodus' : 'Nachtmodus',
      toggleDark: () => { const d = !self.state.dark; try { window.localStorage.setItem('edm-dark', d ? '1' : '0'); } catch (e) {} self.setState({ dark: d }); },
      scale: self.state.scale || 1, noSel: !cur, uiZoom: p.compact ?? 0.86,
      bpH: Math.round((ai ? 1260 + AI_SHIFT : (self.state.pfOpen ? 1260 : 1020)) * (self.state.scale || 1)), artieUrl: p.artieUrl ?? '#', tintA, tintB, tintC, tintD, shadeA, shadeB, shadeC, labelOpacity, ai, coreOn: !ai, t, steps, footer, open, page,
      hasSel: !!cur,
      close: () => self.setState({ sel: null }),
      setCore: () => self.setState({ mode: 'core', sel: null }),
      setAi: () => { if (!aiLocked) self.setState({ mode: 'ai', sel: null }); },
      aiLocked, aiTitle: aiLocked ? 'AI-Native EDSN komt binnenkort beschikbaar' : 'Bekijk AI-Native EDSN',
      coreBtn: ai ? off : on,
      aiBtn: ai ? on : (aiLocked ? off + ';opacity:.6;cursor:not-allowed' : off)
    };
}
