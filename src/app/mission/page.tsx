import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="hero-section-second">
        <div className="overlay"></div>
        <div className="content">
          <h1>Mission</h1>
          <Link href="/">Home</Link>
          <Link href="/mission">{" > "}Mission</Link>
        </div>
      </section>
      <section className="second-section">
        <div className="second-content">
          <h2>OUR MISSION</h2>
          <ul style={{ textAlign: 'left', maxWidth: '900px', margin: '2rem auto', listStyle: 'disc', paddingLeft: '2rem', lineHeight: '1.8' }}>
            <li>Support critical operations in construction, industry, rail, and aviation through high-quality parts, engines, and power solutions.</li>
            <li>Simplify complex sourcing by acting as a single, technical and commercial point of contact between clients and manufacturers.</li>
            <li>Reduce downtime and lifecycle cost for our clients by supplying the right components, at the right specification, at the right time.</li>
            <li>Operate transparently and professionally, with clear communication, proper documentation, and a long-term partnership mindset.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
