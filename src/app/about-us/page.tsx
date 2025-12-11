import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="hero-section-second">
        <div className="overlay"></div>
        <div className="content">
          <h1>About Us</h1>
          <Link href="/">Home</Link>
          <Link href="/about-us">{" > "}About Us</Link>
        </div>
      </section>
      <section className="second-section">
        <div className="second-content">
          <h2>Black Apex Global</h2>
          <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: '#666', marginBottom: '2rem' }}>
            Parts • Power • Industrial Solutions
          </p>
          <p>
            Black Apex Global is a multinational sourcing and supply company focused on heavy equipment ecosystems and industrial components, not on selling complete vehicles.
          </p>
          <p>
            We support construction fleets, industrial operators, railway projects, and civil aviation by providing:
          </p>
          <ul style={{ textAlign: 'left', maxWidth: '800px', margin: '1rem auto', listStyle: 'disc', paddingLeft: '2rem', lineHeight: '1.8' }}>
            <li>Specialized spare parts and accessories</li>
            <li>Diesel engines for vehicles and machinery</li>
            <li>Diesel generators and power units</li>
            <li>Selected railway, industrial, and civil-use aviation components</li>
          </ul>
          <p>
            Black Apex Global is structured through international hubs across key markets, enabling us to serve clients in the Middle East, Africa, Europe, and Asia. We work with vetted manufacturers and production partners, and we manage the entire journey from technical specification and supplier selection to inspection, packing, and delivery.
          </p>
          <p style={{ marginTop: '1.5rem', fontWeight: '500', fontSize: '1.1rem' }}>
            Our role is simple: We connect serious projects with serious suppliers — reliably, quietly, and professionally.
          </p>

          <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>Company Overview</h2>
          <p>
            Black Apex Global (BAG) is a multinational sourcing and supply company focused on heavy equipment ecosystems and industrial components. We support construction fleets, industrial operators, railway projects, and civil aviation through the supply of spare parts, accessories, diesel engines, and diesel generators, rather than complete vehicles.
          </p>
          <p>
            Working with vetted manufacturers and partners across key regions, we manage the full journey from technical specification and sourcing to quality control and delivery, giving clients a single, reliable point of contact for complex, multi-category requirements.
          </p>
          <p>
            We operate through an international structure serving the Middle East, Africa, Europe, and Asia, coordinating multi-origin shipments and project-based deliveries to match our clients' timelines and standards.
          </p>

          <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>Competitive Advantages</h2>
          <ul style={{ textAlign: 'left', maxWidth: '900px', margin: '1rem auto', listStyle: 'disc', paddingLeft: '2rem', lineHeight: '1.8' }}>
            <li><strong>Heavy Equipment & Powertrain Focus</strong> – Specialization in supporting construction trucks, off-highway machinery, and industrial vehicles with critical parts, accessories, engines, and power solutions.</li>
            <li><strong>Specification-Driven Sourcing</strong> – All supplies are matched to defined technical standards, operating conditions, and project requirements to ensure compatibility and reliability.</li>
            <li><strong>Multi-Sector Coverage</strong> – Integrated offering across heavy equipment support, railway systems, industrial manufacturing & aluminum systems, and civil-use aviation parts.</li>
            <li><strong>Vetted Global Network</strong> – Access to audited manufacturers and logistics partners, enabling competitive pricing, consistent quality, and flexible lead times.</li>
            <li><strong>End-to-End Supply Support</strong> – From RFQ and technical matching to inspection, packing, and shipment coordination, with a strong focus on documentation and compliance.</li>
          </ul>

          <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>Core Business Divisions</h2>
          
          <h3 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>1. Heavy Equipment Parts & Power Solutions</h3>
          <p>We support construction fleets and industrial operations with:</p>
          <ul style={{ textAlign: 'left', maxWidth: '900px', margin: '1rem auto', listStyle: 'disc', paddingLeft: '2rem', lineHeight: '1.8' }}>
            <li>Specialized spare parts and accessories for construction trucks, off-highway machinery, and industrial vehicles.</li>
            <li>Diesel engines for commercial vehicles, construction equipment, and heavy-duty applications.</li>
            <li>Diesel generators and power units matched to required power output and duty cycle.</li>
            <li>Guidance on critical spares and maintenance planning to improve uptime and control lifecycle cost.</li>
          </ul>

          <h3 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>2. Heavy Machinery Tools, Attachments & Accessories</h3>
          <ul style={{ textAlign: 'left', maxWidth: '900px', margin: '1rem auto', listStyle: 'disc', paddingLeft: '2rem', lineHeight: '1.8' }}>
            <li>Workshop and service tools for maintaining construction and industrial machinery.</li>
            <li>Attachments and working tools (such as buckets, breakers, rippers, forks, and grapples) to maximize fleet productivity.</li>
            <li>Hydraulic components, protection, and wear parts for harsh operating environments.</li>
            <li>Storage, shutters, and enclosure systems for tools and parts on service trucks and sites.</li>
          </ul>

          <h3 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>3. Railway Systems & Track Materials</h3>
          <ul style={{ textAlign: 'left', maxWidth: '900px', margin: '1rem auto', listStyle: 'disc', paddingLeft: '2rem', lineHeight: '1.8' }}>
            <li>Rails and grooved rails manufactured to international standards.</li>
            <li>Turnouts, crossings, and track hardware designed for defined axle loads and speeds.</li>
            <li>Project-based supply including inspection, packing, and mill-to-site logistics.</li>
          </ul>

          <h3 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>4. Industrial Manufacturing & Aluminum Systems</h3>
          <ul style={{ textAlign: 'left', maxWidth: '900px', margin: '1rem auto', listStyle: 'disc', paddingLeft: '2rem', lineHeight: '1.8' }}>
            <li>Aluminum profiles, shutters, and enclosures for commercial and residential applications.</li>
            <li>Torsion springs and related hardware for shutters, doors, and industrial mechanisms.</li>
            <li>Custom metal components and assemblies for integration into client products and projects.</li>
          </ul>

          <h3 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>5. Civil Aviation Spare Parts (Civil-Use)</h3>
          <ul style={{ textAlign: 'left', maxWidth: '900px', margin: '1rem auto', listStyle: 'disc', paddingLeft: '2rem', lineHeight: '1.8' }}>
            <li>Certified spare parts and LRUs for civil and commercial aircraft.</li>
            <li>Rotables, expendables, and consumables aligned with operator part-number requirements.</li>
            <li>Consolidated supply for Maintenance, Repair, and Overhaul (MRO) activities.</li>
          </ul>

          <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>Partnership Approach</h2>
          <p>
            Black Apex Global positions itself as a long-term technical and commercial partner, not just a supplier. Our goal is to help clients reduce downtime, protect assets, and optimize lifecycle cost through the right combination of parts, engines, tools, and project-based supply solutions.
          </p>

          <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>OUR PLAN OF EXECUTION</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            To translate our vision and mission into reality, Black Apex Global follows a clear, practical execution plan built around four pillars:
          </p>

          <h3 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>1. Client-Focused, Specification-Driven Approach</h3>
          <ul style={{ textAlign: 'left', maxWidth: '900px', margin: '1rem auto', listStyle: 'disc', paddingLeft: '2rem', lineHeight: '1.8' }}>
            <li>Start with understanding the application, operating conditions, and technical requirements – not just the part number.</li>
            <li>Work closely with clients to clarify specifications, standards, and constraints (performance, environment, budget, lead time).</li>
            <li>Propose options and scenarios where needed (OEM, OEM-equivalent, or high-quality alternatives) so the client can choose the most suitable solution.</li>
          </ul>

          <h3 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>2. Vetted Supplier Network & Quality Control</h3>
          <ul style={{ textAlign: 'left', maxWidth: '900px', margin: '1rem auto', listStyle: 'disc', paddingLeft: '2rem', lineHeight: '1.8' }}>
            <li>Maintain a vetted network of manufacturers and industrial partners for heavy equipment, rail, industrial, and aviation components.</li>
            <li>Prioritize suppliers with proven quality, documentation, and export experience.</li>
            <li>Ensure standards compliance and traceability where applicable, especially for safety-critical components.</li>
          </ul>

          <h3 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>3. End-to-End Sourcing & Logistics Management</h3>
          <ul style={{ textAlign: 'left', maxWidth: '900px', margin: '1rem auto', listStyle: 'disc', paddingLeft: '2rem', lineHeight: '1.8' }}>
            <li>Handle the full flow from RFQ → quotation → order → production → inspection → packing → shipment.</li>
            <li>Coordinate multi-origin shipments and project-based deliveries aligned with site requirements and timelines.</li>
            <li>Provide clear documentation, including packing lists, certificates, test reports (when applicable), and shipping documents.</li>
          </ul>

          <h3 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>4. Long-Term Partnership & Continuous Improvement</h3>
          <ul style={{ textAlign: 'left', maxWidth: '900px', margin: '1rem auto', listStyle: 'disc', paddingLeft: '2rem', lineHeight: '1.8' }}>
            <li>Treat every project as the foundation of a long-term relationship, not a one-off transaction.</li>
            <li>Track feedback on performance, delivery, and product quality to refine our supplier base and offerings.</li>
            <li>Work with clients to optimize critical spares, maintenance planning, and power solutions over time.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
