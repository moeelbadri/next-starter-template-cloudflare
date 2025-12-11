import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="hero-section-second">
        <div className="overlay"></div>
        <div className="content">
          <h1>Vision</h1>
          <Link href="/">Home</Link>
          <Link href="/vision">{" > "}Vision</Link>
        </div>
      </section>
      <section className="mission-vision-section">
        <div className="mission-vision-container">
          <div className="mission-vision-card vision-card">
            <div className="mission-vision-header">
              <h2 className="mission-vision-title">Our Vision</h2>
              <div className="mission-vision-accent"></div>
            </div>
            <div className="vision-content">
              <p className="vision-text">
                To become a trusted reference partner in heavy equipment and industrial component supply across the Middle East, Africa, and beyond—the first name that contractors, fleet operators, industrial plants, rail projects, and aviation operators think of when they need reliable parts, engines, and power solutions that keep their operations moving.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
