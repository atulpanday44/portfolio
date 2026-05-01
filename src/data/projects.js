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
    title: "AI-Powered Incident Management System",
    description:
      "AI-powered system for real-time log ingestion, anomaly detection, incident classification, and automated resolution suggestions using distributed architecture.",
    tech: ["Python", "FastAPI", "Apache Kafka", "PostgreSQL", "Docker"],
    github: "https://github.com/atulpanday44/AI-Powered-Incident-Management-System",
    demo: "",
    architecture: "",
    featured: false,
    caseStudy: {
      problem:
        "Manual incident detection and triage is slow, noisy, and inconsistent under high event volumes. Critical issues are buried in logs and require manual analysis.",
      architecture:
        "Distributed architecture with Kafka for log streaming, FastAPI inference service for ML-based classification, PostgreSQL for persistent incident storage, and containerized deployment with Docker.",
      features: [
        "Real-time log ingestion and streaming via Apache Kafka",
        "AI-powered anomaly detection and incident classification",
        "Automated resolution suggestions based on historical patterns",
        "Priority-aware incident routing and escalation",
      ],
      decisions: [
        "Used Python + FastAPI for rapid ML model deployment with async request handling",
        "Selected Apache Kafka for reliable, scalable event streaming at high throughput",
        "Chose PostgreSQL for transactional consistency and complex incident querying",
        "Containerized with Docker for reproducible distributed deployments",
      ],
      challenges:
        "Handling high-volume log streams while maintaining sub-second classification latency. Balancing model accuracy against false positives in anomaly detection.",
      scaling:
        "Kafka partitions for parallel log processing, horizontal FastAPI replicas for inference, and read replicas on PostgreSQL for query scaling.",
      crmDetails: [],
    },
  },
];

export default projects;
