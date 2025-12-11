import Link from "next/link";
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <section className="hero-section">
        <div className="overlay"></div>
        <div className="content">
          <h1>
          BLACK APEX GLOBAL
          </h1>
          <p>
          "Moving The World Forward."
          </p>
        </div>
      </section>

      <section className="about-us">
        <h2 className="about-us-title">About Us</h2>
        <div className="about-us-wrapper">
          <div className="about-us-content">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 'bold' }}>Black Apex Global</h3>
            <p style={{ fontSize: '1.1rem', marginBottom: '1rem', fontStyle: 'italic', color: '#666' }}>
              Parts • Power • Industrial Solutions
            </p>
            <p>
              Black Apex Global is a multinational sourcing and supply company focused on heavy equipment ecosystems and industrial components, not on selling complete vehicles.
            </p>
            <p>
              We support construction fleets, industrial operators, railway projects, and civil aviation by providing:
            </p>
            <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem', marginBottom: '1rem', lineHeight: '1.8' }}>
              <li>Specialized spare parts and accessories</li>
              <li>Diesel engines for vehicles and machinery</li>
              <li>Diesel generators and power units</li>
              <li>Selected railway, industrial, and civil-use aviation components</li>
            </ul>
            <p>
              Black Apex Global is structured through international hubs across key markets, enabling us to serve clients in the Middle East, Africa, Europe, and Asia. We work with vetted manufacturers and production partners, and we manage the entire journey from technical specification and supplier selection to inspection, packing, and delivery.
            </p>
            <p style={{ marginTop: '1rem', fontWeight: '500' }}>
              Our role is simple: We connect serious projects with serious suppliers — reliably, quietly, and professionally.
            </p>
          </div>
          <Image
            src="/Gemini_Generated_Image_fqjy5dfqjy5dfqjy.png"
            alt="Purpose"
            width={700}
            height={600}
            loading="eager"
            className="about-us-image"
          />
        </div>
      </section>

      <section className="modern-form-section">
        <div className="modern-form-container">
          <div className="modern-form-header">
            <h2>Get in Touch</h2>
            <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          </div>
          <form
            action="https://formcarry.com/s/nZS1E5J7SHt"
            method="POST"
            className="modern-contact-form"
          >
            <div className="form-row">
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  id="name"
                  placeholder=" " 
                  required 
                />
                <label htmlFor="name">Full Name</label>
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  id="email"
                  placeholder=" " 
                  required 
                />
                <label htmlFor="email">Email Address</label>
              </div>
            </div>
            <div className="form-group">
              <input 
                type="tel" 
                name="phone" 
                id="phone"
                placeholder=" " 
              />
              <label htmlFor="phone">Phone Number (Optional)</label>
            </div>
            <div className="form-group">
              <textarea 
                name="message" 
                id="message"
                placeholder=" " 
                required 
                rows={5}
              />
              <label htmlFor="message">Your Message</label>
            </div>
            <button type="submit" className="modern-submit-btn">
              <span>Send Message</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      </section>

      {/* <section className="mission-section">
        <div className="mission-container">
          <h1>Our Mission</h1>
          <p>
            Empowering Gazan communities with dignity and compassion, RAFA
            delivers urgent aid—from food and water to shelter and
            clothing—while investing in education and community development. Our
            support rebuilds hope and transforms lives amid the challenges of
            poverty, displacement, and conflict.
          </p>
          <button className="learn-more-button">
            <Link href="/mission">Learn More</Link>
          </button>
        </div>
      </section> */}
      {/* <section className="about-us">
        <img
          src="/cdn-cgi/image/format=auto,width=400,height=600,quality=75/IMG-20250412-WA0017.jpg"
          alt="Purpose"
          width={400}
          height={600}
          className="about-us-image"
        />
        <div className="about-us-content right">
          <h2>Help Feed the Children and Families of Gaza</h2>
          <p>
            In the heart of Gaza, our mission is to help feed the children and
            families enduring the hardships of conflict. Our food aid programs
            deliver nutritious meals that bring hope and strength to those
            facing uncertainty daily. Every parcel of food supports a healthier
            tomorrow, fosters resilience, and helps rebuild communities in
            crisis.
          </p>
        </div>
      </section> */}
    </div>
  );
}
