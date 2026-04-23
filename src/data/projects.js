const projects = [
  {
    title: "Internal CRM System",
    description:
      "Full-stack CRM system for workforce and sales management with JWT authentication and role-based access control.",
    tech: ["Spring Boot", "PostgreSQL", "JPA", "Docker"],
    github: "https://github.com/atulpanday44/CRM",
    demo: "",
    architecture: "",
    featured: true,
    caseStudy: {
      problem:
        "Sales and workforce workflows were fragmented across manual sheets and disconnected tooling, causing delays in lead conversion and team operations.",
      architecture:
        "Layered Spring Boot architecture (Controller-Service-Repository) with JWT-based stateless authentication, role-based access, PostgreSQL persistence, and Dockerized deployment.",
      features: [
        "Role-based dashboards for admins, managers, and sales teams",
        "JWT authentication and secure authorization pipeline",
        "Lead and workforce lifecycle management modules",
      ],
      decisions: [
        "Used Spring Boot + JPA for rapid API delivery with maintainable domain modeling",
        "Selected PostgreSQL for relational consistency and transactional guarantees",
        "Adopted Docker for reproducible local/dev and deployment parity",
      ],
      challenges:
        "Handling transactional consistency across multi-step business operations and enforcing strict authorization boundaries.",
      scaling:
        "Optimized DB indexing for high-read entities, designed idempotent service methods, and kept API contracts stateless to support horizontal scaling.",
      crmDetails: [
        "JWT flow: login issues signed token -> token validated at API gateway/filter -> role claims drive endpoint authorization.",
        "Controller-Service-Repository separation keeps business logic isolated and testable.",
        "Transaction handling via service-layer boundaries ensures consistency for complex updates.",
      ],
    },
  },
  {
    title: "Electrify",
    description:
      "Java-based electricity billing system using JDBC and MySQL with OOP principles and transaction management.",
    tech: ["Java", "JDBC", "MySQL"],
    github: "https://github.com/atulpanday44/Electrify",
    demo: "",
    architecture: "",
    featured: false,
    caseStudy: {
      problem:
        "Manual billing calculations and record tracking increased errors and operational overhead.",
      architecture:
        "Monolithic Java application using JDBC for DB access, service abstractions for billing rules, and MySQL as transactional storage.",
      features: [
        "Consumer profile and meter record management",
        "Bill generation with surcharge and due-date rules",
        "Payment status tracking with audit-friendly updates",
      ],
      decisions: [
        "Used JDBC to maintain explicit control over queries and transaction boundaries",
        "Applied OOP principles to separate billing logic from data access",
        "Selected MySQL for simple relational schema and easy local setup",
      ],
      challenges:
        "Preventing inconsistent bill states during concurrent payment/update operations.",
      scaling:
        "Introduced query optimization and modularized billing services for easier extension into service-based architecture.",
      crmDetails: [],
    },
  },
  {
    title: "AI Incident Management System",
    description:
      "AI-powered system for incident classification, severity prediction, and automated resolution suggestions.",
    tech: ["Python", "ML", "FastAPI"],
    github: "",
    demo: "",
    architecture: "",
    featured: false,
    caseStudy: {
      problem:
        "Incident triage is often slow, noisy, and inconsistent under high event volumes.",
      architecture:
        "FastAPI-based inference service with ML classifiers, async processing layer, and API integrations for incident systems.",
      features: [
        "Automated incident severity classification",
        "Suggested remediation actions based on historical patterns",
        "Priority-aware routing for response teams",
      ],
      decisions: [
        "Used Python ecosystem for rapid ML experimentation and deployment",
        "Chose FastAPI for low-latency async APIs and clean schema validation",
        "Designed modular pipeline to swap models without API rewrites",
      ],
      challenges:
        "Balancing model accuracy with low-latency inference requirements.",
      scaling:
        "Supports horizontal API workers and asynchronous task queues for bursty incident loads.",
      crmDetails: [],
    },
  },
];

export default projects;
