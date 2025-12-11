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
      <section className="second-section">
        <div className="second-content">
          <h2>OUR VISION</h2>
          <p style={{ maxWidth: '900px', margin: '2rem auto', lineHeight: '1.8' }}>
            To become a trusted reference partner in heavy equipment and industrial component supply across the Middle East, Africa, and beyond—the first name that contractors, fleet operators, industrial plants, rail projects, and aviation operators think of when they need reliable parts, engines, and power solutions that keep their operations moving.
          </p>
        </div>
      </section>
    </div>
  );
}
