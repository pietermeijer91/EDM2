import Header from './Header.jsx';
import Welcome from './Welcome.jsx';
import RoleBar from './RoleBar.jsx';
import BigPicture from './BigPicture.jsx';
import Article from './Article.jsx';
import LaceEasterEgg from './LaceEasterEgg.jsx';
import FeatureTour from './FeatureTour.jsx';
import ArtiePanel from './ArtiePanel.jsx';

/** De hele pagina: kop, startpagina, Big Picture, artikelen en overlays. */
export default function Site({ view }) {
  return (
    <>
      <div style={{ width: "100%", minHeight: "100vh", background: "#FFFFFF", overflowX: "hidden", fontFamily: "Poppins, 'Segoe UI', sans-serif", color: "#1B2A5C" }}>
        <div style={{ width: "100%", boxSizing: "border-box", background: "#FFFFFF", zoom: view.uiZoom, fontFamily: "Poppins, 'Segoe UI', sans-serif", color: "#1B2A5C" }}>
          {/* ===== Website header ===== */}
          <Header view={view} />
          {/* Welkomstdeel: alleen op de startpagina, niet bij verdiepende artikelen */}
          <Welcome view={view} />
        </div>
        <RoleBar view={view} />
        <BigPicture view={view} />
        {/* Article page */}
        <Article view={view} />
        {/* Easter egg: LACE Express (vliegende elektrische auto met zwevende wagons) */}
        <LaceEasterEgg view={view} />
        {/* ===== Concept WP-002: Volg een Feature ===== */}
        <FeatureTour view={view} />
        {/* ===== ARTie-paneel (Copilot Studio) ===== */}
        <ArtiePanel view={view} />
      </div>
    </>
  );
}
