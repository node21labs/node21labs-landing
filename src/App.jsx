import { useState, useEffect } from "react";

const PROJECTS = [
  {
    name: "Parcel21",
    status: "In Development",
    description:
      "Decentralized consignment exchange over Nostr for RGB smart contracts. Replacing centralized proxy servers with encrypted, censorship-resistant delivery.",
    tags: ["RGB", "Nostr", "TypeScript"],
  },
  {
    name: "RGB Nostr NIP",
    status: "Drafting",
    description:
      "A Nostr Implementation Possibility specification defining how RGB consignments, ACK/NACK responses, and metadata are encoded as Nostr events.",
    tags: ["Specification", "Nostr", "Protocol"],
  },
  {
    name: "Parcel21 Client",
    status: "Planned",
    description:
      "A test client for developers to validate and debug Nostr-based consignment exchange with an intuitive interface.",
    tags: ["Test Client", "TypeScript"],
  },
];

const TEAM = [
  { name: "Nicholas Chiarulli", role: "Co-Founder & Technical Lead" },
  { name: "Cristy Almonte", role: "Co-Founder & Product Lead" },
  { name: "Emmanuel Almonte", role: "Co-Founder & Core Contributor" },
];

function HexGrid() {
  const [cells, setCells] = useState([]);

  useEffect(() => {
    const generated = [];
    for (let i = 0; i < 60; i++) {
      generated.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.15 + 0.02,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 8,
      });
    }
    setCells(generated);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      {cells.map((c, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${c.x}%`,
            top: `${c.y}%`,
            width: `${c.size}px`,
            height: `${c.size}px`,
            borderRadius: "50%",
            background: "#f7931a",
            opacity: c.opacity,
            animation: `pulse ${4 + c.delay}s ease-in-out infinite`,
            animationDelay: `${c.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

function StatusBadge({ status }) {
  const colors = {
    "In Development": { bg: "#f7931a22", text: "#f7931a", dot: "#f7931a" },
    Drafting: { bg: "#3b82f622", text: "#60a5fa", dot: "#3b82f6" },
    Planned: { bg: "#ffffff11", text: "#888", dot: "#666" },
  };
  const c = colors[status] || colors["Planned"];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "4px 12px",
        borderRadius: "100px",
        background: c.bg,
        color: c.text,
        fontSize: "11px",
        fontFamily: "'JetBrains Mono', monospace",
        letterSpacing: "0.05em",
        textTransform: "uppercase",
      }}
    >
      <span
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: c.dot,
          animation: status === "In Development" ? "pulse 2s ease-in-out infinite" : "none",
        }}
      />
      {status}
    </span>
  );
}

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "#e8e8e8",
        fontFamily: "'Instrument Serif', Georgia, serif",
        position: "relative",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@300;400;500&family=DM+Sans:wght@300;400;500;600&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        @keyframes pulse {
          0%, 100% { opacity: 0.03; }
          50% { opacity: 0.12; }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes lineGrow {
          from { width: 0; }
          to { width: 60px; }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .nav-link {
          color: #888;
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: color 0.3s;
          cursor: pointer;
        }
        .nav-link:hover { color: #f7931a; }

        .project-card {
          border: 1px solid #1a1a1a;
          border-radius: 2px;
          padding: 36px;
          background: #0e0e0e;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: default;
        }
        .project-card:hover {
          border-color: #f7931a33;
          background: #111;
          transform: translateY(-2px);
        }

        .team-item {
          padding: 20px 0;
          border-bottom: 1px solid #1a1a1a;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.3s;
        }
        .team-item:hover {
          padding-left: 12px;
          border-color: #f7931a33;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 36px;
          background: transparent;
          border: 1px solid #f7931a;
          color: #f7931a;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.4s;
        }
        .cta-button:hover {
          background: #f7931a;
          color: #0a0a0a;
        }

        .section-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #f7931a;
          margin-bottom: 40px;
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .section-label::before {
          content: '';
          display: block;
          width: 30px;
          height: 1px;
          background: #f7931a44;
        }

        ::selection {
          background: #f7931a;
          color: #0a0a0a;
        }

        html { scroll-behavior: smooth; }

        @media (max-width: 768px) {
          .hero-title { font-size: 48px !important; }
          .nav-links { display: none !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <HexGrid />

      {/* NAV */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "24px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: scrollY > 50 ? "#0a0a0aee" : "transparent",
          backdropFilter: scrollY > 50 ? "blur(20px)" : "none",
          transition: "all 0.4s",
          borderBottom: scrollY > 50 ? "1px solid #1a1a1a" : "1px solid transparent",
        }}
      >
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "14px",
            fontWeight: 500,
            letterSpacing: "0.15em",
            color: "#f7931a",
          }}
        >
          NODE21
        </div>
        <div className="nav-links" style={{ display: "flex", gap: "36px" }}>
          <a className="nav-link" href="#projects">Projects</a>
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#team">Team</a>
          <a className="nav-link" href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 48px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            animation: mounted ? "fadeUp 1s ease-out forwards" : "none",
            opacity: mounted ? 1 : 0,
          }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "11px",
              letterSpacing: "0.3em",
              color: "#f7931a",
              textTransform: "uppercase",
              marginBottom: "32px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: mounted ? "60px" : "0px",
                height: "1px",
                background: "#f7931a",
                transition: "width 1.2s ease-out 0.3s",
              }}
            />
            Node21 Labs
          </div>

          <h1
            className="hero-title"
            style={{
              fontSize: "72px",
              fontWeight: 400,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              marginBottom: "36px",
              color: "#f0f0f0",
            }}
          >
            Building infrastructure
            <br />
            for{" "}
            <span style={{ color: "#f7931a", fontStyle: "italic" }}>
              RGB
            </span>{" "}
            on Bitcoin
          </h1>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "17px",
              lineHeight: 1.7,
              color: "#777",
              maxWidth: "560px",
              marginBottom: "48px",
              fontWeight: 300,
            }}
          >
            We build open-source tools for private, scalable smart contracts.
            Decentralized consignment exchange. Nostr-native protocols.
            Client-side validation infrastructure.
          </p>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <a className="cta-button" href="#projects">
              View Projects →
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            left: "48px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            animation: "fadeIn 1s ease-out 1.5s both",
          }}
        >
          <div
            style={{
              width: "1px",
              height: "40px",
              background: "linear-gradient(to bottom, #f7931a44, transparent)",
            }}
          />
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "9px",
              letterSpacing: "0.2em",
              color: "#555",
              textTransform: "uppercase",
              writingMode: "vertical-rl",
            }}
          >
            Scroll
          </span>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        style={{
          padding: "120px 48px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="section-label">Projects</div>

        <div
          className="projects-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            maxWidth: "1000px",
          }}
        >
          {PROJECTS.map((p, i) => (
            <div
              key={i}
              className="project-card"
              style={{
                animation: mounted ? `fadeUp 0.6s ease-out ${0.1 * i}s both` : "none",
                gridColumn: i === 0 ? "1 / -1" : "auto",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "16px",
                }}
              >
                <h3
                  style={{
                    fontSize: i === 0 ? "32px" : "24px",
                    fontWeight: 400,
                    color: "#f0f0f0",
                  }}
                >
                  {p.name}
                </h3>
                <StatusBadge status={p.status} />
              </div>

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  lineHeight: 1.7,
                  color: "#777",
                  marginBottom: "24px",
                  fontWeight: 300,
                }}
              >
                {p.description}
              </p>

              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {p.tags.map((tag, j) => (
                  <span
                    key={j}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "10px",
                      padding: "4px 10px",
                      border: "1px solid #222",
                      borderRadius: "2px",
                      color: "#666",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        style={{
          padding: "120px 48px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="section-label">About</div>

        <div style={{ maxWidth: "700px" }}>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: 400,
              lineHeight: 1.2,
              marginBottom: "32px",
              color: "#f0f0f0",
            }}
          >
            Privacy-first infrastructure
            <br />
            for <span style={{ fontStyle: "italic", color: "#f7931a" }}>client-side validation</span>
          </h2>

          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "15px",
              lineHeight: 1.8,
              color: "#777",
              fontWeight: 300,
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <p>
              Node21 Labs builds open-source tooling for the RGB smart contract
              ecosystem on Bitcoin. We focus on the infrastructure layer that
              makes private, scalable smart contracts practical for real-world
              use.
            </p>
            <p>
              Our current focus is replacing centralized consignment exchange with
              decentralized, encrypted delivery over Nostr. Every RGB transfer
              depends on reliable consignment delivery, and the existing
              infrastructure is fragile, unencrypted, and centralized.
            </p>
            <p>
              We believe the future of smart contracts is client-side validated,
              private by default, and anchored to Bitcoin's security model. We're
              building the tools to make that future work.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section
        id="team"
        style={{
          padding: "120px 48px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="section-label">Team</div>

        <div style={{ maxWidth: "600px" }}>
          {TEAM.map((m, i) => (
            <div key={i} className="team-item">
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: 400,
                  color: "#e0e0e0",
                }}
              >
                {m.name}
              </span>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "11px",
                  color: "#666",
                  letterSpacing: "0.05em",
                }}
              >
                {m.role}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          padding: "120px 48px 80px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="section-label">Contact</div>

        <div style={{ maxWidth: "600px" }}>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: 400,
              lineHeight: 1.3,
              marginBottom: "24px",
              color: "#f0f0f0",
            }}
          >
            Let's build the future of
            <br />
            <span style={{ fontStyle: "italic", color: "#f7931a" }}>
              RGB together
            </span>
          </h2>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "15px",
              lineHeight: 1.7,
              color: "#777",
              marginBottom: "36px",
              fontWeight: 300,
            }}
          >
            Interested in contributing, collaborating, or integrating our tools
            into your wallet? Get in touch.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "13px",
            }}
          >
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <span style={{ color: "#f7931a", width: "60px" }}>Email</span>
              <span style={{ color: "#888" }}>Node21Labs@gmail.com</span>
            </div>
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <span style={{ color: "#f7931a", width: "60px" }}>GitHub</span>
              <span style={{ color: "#888" }}>github.com/node21labs</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "32px 48px",
          borderTop: "1px solid #1a1a1a",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px",
            color: "#444",
            letterSpacing: "0.1em",
          }}
        >
          NODE21 LABS © 2026
        </span>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px",
            color: "#333",
            letterSpacing: "0.05em",
          }}
        >
          Open Source · Apache 2.0
        </span>
      </footer>
    </div>
  );
}
