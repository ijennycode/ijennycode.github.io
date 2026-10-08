import { PortfolioData } from '../types';

export const initialPortfolioData: PortfolioData = {
  hero: {
    tagline: 'Bridging Software Engineering & Cloud Infrastructure Through Resilient DevOps Practices',
    alternativeTaglines: [
      'Automating Deployments, Architecting Cloud Foundations, and Engineering Reliable Systems.',
      'From Agile Sprints to Cloud Deployments: Building Repeatable, Continuous Delivery Pipelines.',
      'Junior Cloud & DevOps Practitioner Focused on Scalable Infrastructure and Clean Automation.'
    ],
    bio: 'Passionate Junior Cloud / DevOps Engineer equipped with certified foundations in Google Cloud Platform, cloud architectures, and Agile DevOps methodologies. Currently advancing full-lifecycle software engineering and automation capabilities through the IBM DevOps & Software Engineering Professional Certificate while engineering secure, repeatable delivery pipelines.',
    availability: 'Open to Junior Cloud & DevOps Engineer Opportunities',
    currentRole: 'Cloud & DevOps Practitioner',
    targetRole: 'Junior Cloud / DevOps Engineer',
    location: 'Open to Remote / Hybrid / On-site'
  },
  skillCategories: [
    {
      id: 'cloud',
      title: 'Cloud & Infrastructure',
      badge: 'Certified Cloud Foundations',
      iconName: 'Cloud',
      summary: 'Architecting scalable virtual resources, implementing identity and access governance, and managing core cloud services.',
      skills: [
        {
          name: 'Google Cloud Platform (GCP)',
          level: 'Intermediate',
          description: 'Hands-on configuration of Compute Engine VMs, Cloud Storage buckets, VPC networks, Cloud IAM, and Cloud Run serverless deployments.',
          associatedCert: 'Google Cloud Computing Foundations',
          tools: ['Compute Engine', 'Cloud Storage', 'Cloud Run', 'GCP IAM', 'VPC']
        },
        {
          name: 'Cloud Computing Models & Architecture',
          level: 'Proficient',
          description: 'Strong architectural understanding of IaaS, PaaS, SaaS delivery models, multi-tenant resource pooling, and high availability principles.',
          associatedCert: 'IBM Introduction to Cloud Computing',
          tools: ['IaaS / PaaS / SaaS', 'High Availability', 'Object Storage', 'Resource Quotas']
        },
        {
          name: 'Networking & Virtual Private Clouds',
          level: 'Intermediate',
          description: 'Subnet segmentation, firewall rules configuration, CIDR blocks, NAT gateways, and secure service communication paths.',
          associatedCert: 'Google Cloud Computing Foundations',
          tools: ['VPC Peering', 'Firewall Rules', 'Subnetting', 'DNS Routing']
        },
        {
          name: 'Linux Administration & Shell Scripting',
          level: 'Intermediate',
          description: 'Command-line system navigation, permission management (POSIX permissions, SSH key pairs), process monitoring, and automated Bash scripts.',
          associatedCert: 'IBM Introduction to DevOps',
          tools: ['Bash', 'SSH Keys', 'Systemd', 'Cron Jobs', 'File Permissions']
        }
      ]
    },
    {
      id: 'development',
      title: 'Development & Engineering',
      badge: 'Full SDLC Competency',
      iconName: 'Code',
      summary: 'Applying clean software engineering standards, version control hygiene, and RESTful service development.',
      skills: [
        {
          name: 'Software Engineering Principles',
          level: 'Proficient',
          description: 'Modular code structuring, design patterns, separation of concerns, defensive programming, and standard Software Development Life Cycle (SDLC) models.',
          associatedCert: 'IBM DevOps & SE Track (Active)',
          tools: ['SDLC', 'Clean Code', 'System Modeling']
        },
        {
          name: 'Version Control & Git Workflows',
          level: 'Proficient',
          description: 'Feature branching models, pull request reviews, merge conflict resolution, semantic commit conventions, and GitHub collaborative repository management.',
          associatedCert: 'IBM DevOps & SE Track (Active)',
          tools: ['Git', 'GitHub', 'Feature Branching', 'PR Reviews']
        },
        {
          name: 'Python & Scripting for Automation',
          level: 'Beginner',
          description: 'Building automated utility scripts, REST API consumption, log parsers, and data extraction pipelines for operational maintenance.',
          associatedCert: 'IBM DevOps & SE Track (Active)',
          tools: ['Python 3', 'Requests', 'JSON/YAML Parsers', 'Virtualenv']
        },
        {
          name: 'RESTful API Architecture & Testing',
          level: 'Beginner',
          description: 'HTTP verb semantics, status codes, payload contract design, JSON schema validation, and endpoint integration testing.',
          associatedCert: 'IBM DevOps & SE Track (Active)',
          tools: ['REST APIs', 'Postman / Curl', 'HTTP Statuses', 'JSON Schemas']
        }
      ]
    },
    {
      id: 'methodologies',
      title: 'Methodologies & DevOps',
      badge: 'Agile & Continuous Delivery',
      iconName: 'GitBranch',
      summary: 'Orchestrating continuous integration loops, containerizing workloads, and driving iterative Agile releases.',
      skills: [
        {
          name: 'Agile & Scrum Framework',
          level: 'Proficient',
          description: 'Facilitating Scrum ceremonies (Sprint Planning, Daily Standups, Sprint Reviews, Retrospectives), managing backlogs, writing user stories, and sizing with story points.',
          associatedCert: 'IBM Introduction to Agile & Scrum',
          tools: ['Scrum Ceremonies', 'User Stories', 'Sprint Backlog', 'Burndown Charts', 'Kanban']
        },
        {
          name: 'Continuous Integration & Continuous Delivery (CI/CD)',
          level: 'Intermediate',
          description: 'Designing automated pipelines that trigger on push, execute automated test suites, build artifacts, and deploy to staging environments.',
          associatedCert: 'IBM Introduction to DevOps',
          tools: ['GitHub Actions', 'Automated Testing', 'Build Triggers', 'Artifact Packaging']
        },
        {
          name: 'Containerization & Docker Fundamentals',
          level: 'Intermediate',
          description: 'Writing reproducible Dockerfiles, multi-stage builds, managing container lifecycles, volume mounts, and network bridges.',
          associatedCert: 'IBM DevOps & SE Professional Certificate',
          tools: ['Docker', 'Dockerfiles', 'Container Registries', 'Multi-stage Builds']
        },
        {
          name: 'DevOps Culture & Continuous Feedback',
          level: 'Proficient',
          description: 'Eliminating organizational silos between development and operations, implementing blameless post-mortems, and integrating automated quality gates.',
          associatedCert: 'IBM Introduction to DevOps',
          tools: ['Shift-Left Testing', 'Continuous Feedback', 'Root Cause Analysis', 'SLA / SLO Basics']
        }
      ]
    }
  ],
  projects: [
  {
    id: 'agile-kanban-workflow',
    title: 'Agile Planning & Kanban Workflow',
    tagline: 'Structured backlog grooming and sprint planning using GitHub Projects and Gherkin user stories',
    category: 'Agile & Project Management',
    challenge: 'Translating project requirements into actionable tasks without producing scope creep, unorganized deliverables, or vague acceptance criteria.',
    solution: 'Built a structured GitHub Projects Kanban board, creating detailed user story issues with Gherkin acceptance criteria (Given/When/Then) to track feature execution across 3 planned sprints.',
    architectureSteps: [
      'Configured GitHub repository and linked custom GitHub Projects Kanban board',
      'Established New Issues, Ice Box, Product Backlog, Sprint Backlog, In Progress, Review/QA and Done workflow columns',
      'Created user story template using GitHub Issue markdown format',
      'Mapped functional requirements into user stories with Gherkin acceptance criteria',
      'Executed task iteration through visual drag-and-drop card movements'
    ],
    stack: ['GitHub Projects', 'GitHub Issues', 'Agile / Scrum', 'Kanban', 'Markdown'],
    metrics: [
      '100% of user stories written with Gherkin acceptance criteria',
      'Structured 3 distinct sprint backlogs for portfolio completion',
      'Clear visual tracking from New Issues to Done status'
    ],
    githubUrl: 'https://github.com/ijennycode/lab-agile-planning',
    status: 'Completed'
  },
  {
    id: 'shell-open-source-utility',
    title: 'Open Source Ready Shell Utility',
    tagline: 'Bash-based utility script packaged with standardized open-source governance documentation',
    category: 'Linux Shell & Open Source',
    challenge: 'Creating reusable script code that complies with open-source software delivery standards and community collaboration guidelines.',
    solution: 'Developed a modular bash script (simple-interest.sh) for financial calculations and configured full open-source governance documentation including licensing and contributor rules.',
    architectureSteps: [
      'Wrote and tested modular simple-interest.sh bash calculation script',
      'Added standard MIT License file for open-source distribution',
      'Configured CONTRIBUTING.md outlining pull request and coding guidelines',
      'Added CODE_OF_CONDUCT.md following Contributor Covenant standards',
      'Documented execution commands and prerequisites in README.md'
    ],
    stack: ['Bash', 'Linux Shell', 'Git', 'GitHub', 'Open Source Standards'],
    metrics: [
      'Fully compliant open-source repository structure',
      'Executable directly in standard Linux/Git Bash terminals',
      'Complete documentation for open-source contributor onboarding'
    ],
    githubUrl: 'https://github.com/ijennycode/LogisticsShippingRates',
    status: 'Completed'
  },
  {
    id: 'containerized-cloud-app',
    title: 'Containerized Application Deployment',
    tagline: 'Lightweight Nginx microservice packaged with Docker and pushed to container registries',
    category: 'DevOps & Containerization',
    challenge: 'Packaging applications into reproducible runtime environments without configuration errors or dependency mismatches across environments.',
    solution: 'Engineered a lightweight container image using Nginx Alpine, verified local port bindings, and established an end-to-end container build and push pipeline.',
    architectureSteps: [
      'Authored custom multi-line Dockerfile using Nginx Alpine base image',
      'Built local container image and validated port 80/8080 bindings',
      'Authenticated local terminal and Google Cloud Shell with remote registry',
      'Tagged container image for versioning and registry submission',
      'Documented container build and run commands in repository README'
    ],
    stack: ['Docker', 'Nginx', 'Linux Shell', 'Google Cloud Shell', 'GitHub'],
    metrics: [
      'Lightweight container build leveraging minimal Alpine base',
      'Reproducible local and cloud container execution',
      'Documented single-command build and run instructions'
    ],
    githubUrl: 'https://github.com/ijennycode/docker-cloud-engine-app',
    status: 'Completed'
  },
  {
    id: 'developer-portfolio-cicd',
    title: 'Personal Developer Portfolio & CI/CD Pipeline',
    tagline: 'Responsive developer portfolio built with vanilla web technologies and automated Git version control',
    category: 'Frontend & Cloud Hosting',
    challenge: 'Building a responsive developer portfolio showcasing real technical projects and credentials using clean web code without heavy external frameworks.',
    solution: 'Engineered a clean static portfolio with modular data structures (portfolioData.ts), organized sprint execution, and established continuous deployment.',
    architectureSteps: [
      'Structured modular data arrays for projects, skills, and certifications',
      'Organized frontend layout using semantic HTML5, CSS3, and vanilla JavaScript',
      'Executed development lifecycle across 3 planned Sprint milestones',
      'Managed version control and commit history via Git and GitHub CLI',
      'Configured hosting deployment for live web access'
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Git', 'GitHub Pages'],
    metrics: [
      'Zero external JavaScript framework dependencies',
      '100% honest representation of real course and lab projects',
      'Live web deployment with version-controlled repository'
    ],
    githubUrl: 'https://github.com/ijennycode/ijennycode.github.io',
    status: 'Completed'
  }
],
  completedCertifications: [
    {
      id: 'cert-gcp-foundations',
      title: 'Google Cloud Computing Foundations',
      issuer: 'Google Cloud',
      issuerLogo: 'GoogleCloud',
      issueDate: 'Verified Credential',
      credentialUrl: 'https://www.coursera.org/account/accomplishments/records/I31NH5UYC9A4',
      summary: 'Comprehensive foundation in cloud concepts, Google Cloud infrastructure, networking, compute instances, storage, and security fundamentals.',
      skillsCovered: [
        'Google Cloud Infrastructure',
        'Compute Engine & Virtualization',
        'Cloud Storage & Databases',
        'VPC & Cloud Networking',
        'IAM & Cloud Security'
      ],
      status: 'Completed'
    },
    {
      id: 'cert-ibm-devops',
      title: 'IBM Introduction to DevOps',
      issuer: 'IBM',
      issuerLogo: 'IBM',
      issueDate: 'Verified Credential',
      credentialUrl: 'https://www.coursera.org/account/accomplishments/records/RFNZAUKBQDTK',
      summary: 'Core principles of modern DevOps culture, Continuous Integration, Continuous Delivery (CI/CD), test automation, infrastructure agility, and observability.',
      skillsCovered: [
        'DevOps Culture & Mindset',
        'CI/CD Pipelines & Automation',
        'Continuous Testing & Shift-Left',
        'Monitoring & Observability',
        'DevOps Toolchains'
      ],
      status: 'Completed'
    },
    {
      id: 'cert-ibm-cloud',
      title: 'IBM Introduction to Cloud Computing',
      issuer: 'IBM',
      issuerLogo: 'IBM',
      issueDate: 'Verified Credential',
      credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/3AKQYTT48POF',
      summary: 'In-depth exploration of cloud computing characteristics, service models (IaaS, PaaS, SaaS), cloud deployment models (Public, Private, Hybrid), and cloud security.',
      skillsCovered: [
        'IaaS, PaaS, SaaS Models',
        'Hybrid & Multi-Cloud Concepts',
        'Cloud Storage & Virtual Machines',
        'Cloud Security & Compliance',
        'Cloud Economics & Trends'
      ],
      status: 'Completed'
    },
    {
      id: 'cert-ibm-agile',
      title: 'IBM Introduction to Agile Development and Scrum',
      issuer: 'IBM',
      issuerLogo: 'IBM',
      issueDate: 'Verified Credential',
      credentialUrl: 'https://www.coursera.org/account/accomplishments/records/JCOETDB8OK26',
      summary: 'Practical mastery of Agile values, Scrum framework roles (Product Owner, Scrum Master, Developers), sprint cadences, user story creation, and backlog refinement.',
      skillsCovered: [
        'Agile Manifesto Principles',
        'Scrum Roles & Ceremonies',
        'User Stories & Story Points',
        'Sprint Planning & Retrospectives',
        'Kanban Boards & Burndown Metrics'
      ],
      status: 'Completed'
    },
    {
      id: 'cert-ibm-software-eng',
      title: 'IBM Introduction to Software Engineering',
      issuer: 'IBM',
      issuerLogo: 'IBM',
      issueDate: 'Verified Credential',
      credentialUrl: 'https://www.credly.com/badges/933101fe-6579-4f74-9d0b-088d3a18ecc7/linked_in_profile',
      summary: 'Foundational software engineering methodologies, Software Development Life Cycle (SDLC) models, architecture principles, version control, and testing strategies.',
      skillsCovered: [
        'SDLC Phases & Methodologies',
        'Software Architecture & Design',
        'Version Control with Git & GitHub',
        'Quality Assurance & Testing',
        'Requirements Engineering'
      ],
      status: 'Completed'
    }
  ],
  activeLearning: {
    id: 'active-ibm-devops-se-cert',
    programTitle: 'IBM DevOps and Software Engineering Professional Certificate',
    issuer: 'IBM / Coursera',
    targetRole: 'Junior Cloud / DevOps Engineer',
    expectedCompletion: 'Target Completion: In Progress (Active)',
    progressPercent: 45,
    completedModulesCount: 5,
    totalModulesCount: 11,
    currentFocus: 'Hands-on Introduction to Linux Commands and Shell Scripting',
    modules: [
      { title: 'Introduction to DevOps', status: 'Completed' },
      { title: 'Introduction to Cloud Computing', status: 'Completed' },
      { title: 'Introduction to Agile Development and Scrum', status: 'Completed' },
      { title: 'Introduction to Software Engineering', status: 'Completed' },
      { title: 'Git and GitHub Basics', status: 'Completed' },
      { title: 'Hands-on Introduction to Linux Commands and Shell Scripting', status: 'In Progress' },
      { title: 'Python for Data Science, AI & Development', status: 'Upcoming' },
      { title: 'Developing Applications with SQL, Databases, and Django', status: 'Upcoming' },
      { title: 'Introduction to Containers w/ Docker, Kubernetes & OpenShift', status: 'Upcoming' },
      { title: 'Continuous Integration and Continuous Delivery (CI/CD)', status: 'Upcoming' },
      { title: 'DevOps Capstone Project: End-to-End Microservices Deployment', status: 'Upcoming' }
    ]
  },
  contactCTA: {
    heading: "Let's Build Reliable Cloud Infrastructure Together",
    subheading: 'Actively seeking Junior Cloud / DevOps Engineer roles, internships, and collaborative cloud projects.',
    valueProposition: "I bring certified fundamentals across Google Cloud Platform, IBM DevOps & Agile methodologies, coupled with an eager, continuous learning mindset. Whether you are scaling containerized microservices or streamlining CI/CD pipelines, I am excited to contribute.",
    email: 'imoterjennifer@gmail.com',
    github: 'https://github.com/ijennycode',
    linkedin: 'https://www.linkedin.com/in/jennifer-imoter-8a206041b'
  }
};

export const markdownPortfolioBlueprint = `# Junior Cloud & DevOps Engineer Portfolio Blueprint

## 1. Hero Section
**Catchy Tagline:**
> "Bridging Software Engineering & Cloud Infrastructure Through Resilient DevOps Practices"

**Alternative Catchy Taglines:**
- "Automating Deployments, Architecting Cloud Foundations, and Engineering Reliable Systems."
- "From Agile Sprints to Cloud Deployments: Building Repeatable, Continuous Delivery Pipelines."
- "Junior Cloud & DevOps Practitioner Focused on Scalable Infrastructure and Clean Automation."

**2-Sentence Bio:**
"Passionate Junior Cloud / DevOps Engineer equipped with certified foundations in Google Cloud Platform, cloud architectures, and modern software engineering principles. Currently advancing full-lifecycle automation capabilities through the IBM DevOps & Software Engineering Professional Certificate while engineering secure, repeatable delivery pipelines."

---

## 2. Skills & Stack Breakdown

### Category 1: Cloud & Infrastructure
- **Google Cloud Platform (GCP):** Compute Engine VMs, Cloud Storage buckets, VPC networks, Cloud IAM, and Cloud Run serverless deployments.
- **Cloud Computing Models & Architecture:** IaaS, PaaS, SaaS delivery models, high availability principles, multi-tenant resource structures.
- **Networking & Virtual Private Clouds:** Subnet segmentation, firewall rule configuration, CIDR blocks, NAT gateways, secure service communication.
- **Linux Administration & Shell Scripting:** Command-line system navigation, permission management (POSIX, SSH keys), process monitoring, automated Bash scripts.

### Category 2: Development & Engineering
- **Software Engineering Principles:** Modular code structuring, clean code, design patterns, separation of concerns, defensive programming, full SDLC cycles.
- **Version Control & Git Workflows:** Feature branching models, pull request reviews, merge conflict resolution, semantic commit conventions, GitHub collaboration.
- **Python & Automation Scripting:** Automated utility scripts, REST API consumption, log parsers, data extraction pipelines.
- **RESTful API Architecture & Testing:** HTTP semantics, status codes, payload contract design, JSON schemas, endpoint integration testing.

### Category 3: Methodologies & DevOps
- **Agile & Scrum Framework:** Facilitating Scrum ceremonies (Sprint Planning, Daily Standups, Sprint Reviews, Retrospectives), user stories, backlog grooming, burndown charts, Kanban.
- **Continuous Integration & Continuous Delivery (CI/CD):** Designing automated pipelines triggered on push, automated test suites, build artifact packaging, zero-downtime deployment.
- **Containerization & Docker Fundamentals:** Writing reproducible Dockerfiles, multi-stage builds, container lifecycle management, volume mounts, container registries.
- **DevOps Culture & Continuous Feedback:** Breaking down developer/operations silos, blameless post-mortems, shift-left testing, SLA/SLO fundamentals.

---

## 3. Featured Showcase Projects

### Project 1: Automated CI/CD Delivery Pipeline for Cloud Microservices
- **Category:** CI/CD & Cloud Infrastructure
- **Challenge:** Manual deployments produce inconsistent runtime environments, unverified code merges, and human-error risks.
- **Solution:** Architected an automated CI/CD pipeline triggered by Git pull requests, running automated unit tests, linting, Docker image building, and automated deployment to Google Cloud Run.
- **Architecture Flow:** Feature Branch -> GitHub Actions CI -> Automated Tests -> Docker Build -> Artifact Registry -> Google Cloud Run.
- **Key Metrics:** 100% automated test verification before deployment; reduced deployment turnaround to under 3 minutes; least-privilege IAM security.

### Project 2: Google Cloud Multi-Tier Infrastructure Foundation
- **Category:** Cloud Architecture & Security
- **Challenge:** Unsecured default cloud configurations expose sensitive endpoints and lack structured network segmentation.
- **Solution:** Designed and deployed a structured Google Cloud environment incorporating isolated public and private subnets, granular Cloud IAM role bindings, and custom firewall ingress/egress rules.
- **Architecture Flow:** Custom VPC -> Public Subnet (NAT/Bastion) -> Private Subnet (Compute VMs) -> Cloud Storage (Uniform IAM) -> Cloud Monitoring.
- **Key Metrics:** Zero public IP exposure for backend compute nodes; 100% compliance with least-privilege IAM; complete deployment runbook.

### Project 3: Containerized Task API Developed via Agile Scrum Lifecycle
- **Category:** Agile & Software Engineering
- **Challenge:** Software projects often experience scope creep and communication breakdown without structured iteration and reproducible runtimes.
- **Solution:** Executed a 3-sprint Agile development cycle using Scrum ceremonies, building a modular RESTful API containerized with Docker, tracking velocity with user stories and burndown charts.
- **Architecture Flow:** Sprint Backlog -> User Story Sizing -> Modular API Code -> Docker Containerization -> OpenAPI Contract.
- **Key Metrics:** 95%+ unit test code coverage; 100% sprint backlog delivery across 3 sprints; complete interactive Swagger specification.

### Project 4: Automated Cloud Health & Metrics Incident Dispatcher
- **Category:** DevOps & Site Reliability
- **Challenge:** Silent microservice degradation and unmonitored API latencies cause undetected downtime.
- **Solution:** Developed an automated Python monitoring daemon that polls cloud endpoints, checks HTTP health status codes, measures round-trip response times, and dispatches structured alerts via webhooks.
- **Architecture Flow:** Scheduled Trigger (Cron/Scheduler) -> HTTP Health Probes -> Metric Aggregation -> Webhook Incident Dispatch.
- **Key Metrics:** Sub-second incident alerting notification; zero false-positive alerts using retry thresholds; deployable via lightweight single-command container.

---

## 4. Education & Certifications

### Completed Credentials:
1. **Google Cloud Computing Foundations** - Google Cloud
   - Focus: Compute Engine, Virtualization, Cloud Storage, VPC Networking, IAM & Security.
2. **IBM Introduction to DevOps** - IBM
   - Focus: DevOps Culture, CI/CD Pipelines, Continuous Testing, Observability, DevOps Toolchains.
3. **IBM Introduction to Cloud Computing** - IBM
   - Focus: IaaS/PaaS/SaaS Models, Hybrid & Multi-Cloud, Virtual Machines, Cloud Security.
4. **IBM Introduction to Agile Development and Scrum** - IBM
   - Focus: Agile Manifesto, Scrum Ceremonies, User Stories, Sprint Planning, Burndown Metrics.

### Active Learning Path:
- **IBM DevOps and Software Engineering Professional Certificate** - IBM / Coursera (In Progress - ~60% Completed)
  - Current Focus: Introduction to Software Engineering & Container Orchestration with Docker & Kubernetes.
  - Completed Modules: Intro to DevOps, Intro to Cloud, Intro to Agile & Scrum, Linux Shell Scripting, Git/GitHub, Python.
  - Active Module: Introduction to Software Engineering.

---

## 5. Contact & Call to Action
**Heading:** "Let's Build Reliable Cloud Infrastructure Together"
**Subheading:** "Actively seeking Junior Cloud / DevOps Engineer roles, internships, and collaborative cloud projects."
**Value Proposition:**
"I bring certified fundamentals across Google Cloud Platform, IBM DevOps & Agile methodologies, coupled with an eager, continuous learning mindset. Whether you are scaling containerized microservices or streamlining CI/CD pipelines, I am excited to contribute."
**Primary Action:** Send an Email / Connect on LinkedIn / View GitHub Repositories.
`;
