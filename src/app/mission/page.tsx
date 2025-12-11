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
      <section className="mission-vision-section">
        <div className="mission-vision-container">
          <div className="mission-vision-card">
            <div className="mission-vision-header">
              <h2 className="mission-vision-title">Our Mission</h2>
              <div className="mission-vision-accent"></div>
            </div>
            <div className="mission-vision-content">
              <div className="mission-item">
                <div className="mission-number">01</div>
                <p>Support critical operations in construction, industry, rail, and aviation through high-quality parts, engines, and power solutions.</p>
              </div>
              <div className="mission-item">
                <div className="mission-number">02</div>
                <p>Simplify complex sourcing by acting as a single, technical and commercial point of contact between clients and manufacturers.</p>
              </div>
              <div className="mission-item">
                <div className="mission-number">03</div>
                <p>Reduce downtime and lifecycle cost for our clients by supplying the right components, at the right specification, at the right time.</p>
              </div>
              <div className="mission-item">
                <div className="mission-number">04</div>
                <p>Operate transparently and professionally, with clear communication, proper documentation, and a long-term partnership mindset.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
