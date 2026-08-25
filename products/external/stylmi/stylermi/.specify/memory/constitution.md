<!--
Sync Impact Report
- Version change: template (unversioned) -> 1.0.0
- Modified principles: placeholder principles -> 40 concrete Styler + Stylmi principles
- Added sections: Mission; Product Boundaries; Core Principles; Delivery and Compliance;
  Governance
- Removed sections: none (template placeholders were replaced)
- Follow-up TODOs: none
-->

# Styler + Stylmi Constitution

## Mission

Styler is an AI-native fashion technology platform providing reusable APIs, SDKs,
widgets, AI models, and fashion intelligence capabilities for consumer and business
applications. Stylmi is the first-party B2C application powered by Styler.

The platform MUST enable users and fashion businesses to create AI-assisted Body
Profiles; estimate and visualize measurements; try on, combine, and customize garments
and accessories; generate scenes and videos; save, download, and share Looks; collect
feedback; produce tailor-ready packs; analyze garments; and generate sewing instructions
and educational sewing videos.

Styler MUST remain the reusable technology platform. Wherever practical, Stylmi MUST
consume Styler through the same supported interfaces available to external clients.

## Product Boundaries

### Styler

Styler is the B2B technology platform. It MUST provide a public API, JavaScript SDK,
embeddable web widget, organization management, projects and environments, API-key
management, Body Profile and measurement capabilities, garment ingestion, virtual
try-on, multi-item Look composition, configurable capabilities, usage metering, billing
integration, analytics, and developer documentation.

Styler MUST NOT require B2B customers to use Stylmi. It MUST NOT own retailer carts,
checkout, purchasing, order processing, or ecommerce conversion workflows; commerce
remains the integrating organization's responsibility.

### Stylmi

Stylmi is the B2C mobile fashion application and MUST use Styler as its underlying
fashion and AI platform. It provides the consumer experience for personal Body Profiles,
measurements, virtual try-on, My Wardrobe, multi-item Looks, customization, scenes,
try-on video, downloads, social sharing, voting, feedback, tailor exports, garment
analysis, sewing education, and AI-generated sewing tutorials.

## Core Principles

### I. Platform Capability Ownership (NON-NEGOTIABLE)

Styler owns reusable capabilities; Stylmi owns the consumer experience. Styler MUST
provide capabilities that Stylmi composes into a consumer fashion experience. Business
customers MUST be able to use Styler independently, and Stylmi MUST NOT maintain
independent implementations of Styler AI capabilities. This separation preserves one
supported platform for both first-party and external consumers.

### II. API-First Architecture

All reusable fashion capabilities MUST be implemented behind documented service
interfaces. Mobile applications and web widgets MUST NOT communicate directly with AI
models. Calls MUST flow from client to Styler API, application service, AI orchestrator,
and then model provider. This indirection allows model implementations to change without
breaking clients.

### III. Model Independence

No feature MUST be permanently coupled to one AI model provider. Styler MUST define
replaceable, configuration-driven abstractions for body modeling, try-on, garment vision,
image generation, video, LLM, and speech providers. Selection MUST consider quality,
latency, inference cost, scalability, commercial licensing, privacy, hardware needs, and
reliability. Research-only or non-commercial models MUST NOT enter commercial production
without appropriate commercial rights.

### IV. Body Profile as a First-Class Entity

`BodyProfile` MUST be a first-class Styler entity. It MAY contain body reconstruction,
derived geometry, measurements and confidence, body-region mappings, capture metadata,
model version, and measurement-engine version. Raw photographs MUST NOT themselves be
treated as the Body Profile, so derived state can be governed, versioned, and minimized
independently of source media.

### V. Camera-First Measurement

The normal measurement workflow MUST NOT require manual height. Styler MUST attempt scale
estimation in this order where available: device depth, AR or camera geometry, multi-frame
geometry, floor or environment geometry, then optional user calibration. Manual height or
a known reference MAY be requested only when automatic methods lack sufficient confidence.

### VI. Quick Capture and Precision Fit

Styler MUST support two capture modes:

- Quick Capture uses one full-body photograph for fast onboarding, virtual try-on,
  approximate reconstruction, and fashion visualization.
- Precision Fit uses guided multi-frame or short-video capture for measurements, custom
  clothing, Tailor Packs, and higher-confidence Body Profiles. Where technically practical,
  guided capture SHOULD take approximately three to five seconds.

The two modes MUST communicate their different accuracy and use cases to users.

### VII. Measurement Confidence

Every generated measurement MUST include confidence metadata, and unreliable results MUST
NOT be presented as precise facts. Measurement records SHOULD include value, unit,
confidence, capture method, scale method, model version, and measurement-engine version.
Low-confidence measurements MUST be visibly identified. Tailor-grade exports MUST meet a
defined acceptable confidence threshold.

### VIII. Measurement Visualization

Users MUST be able to select a measurement and see its body region, and select supported
body regions to inspect associated measurements. Visualizations SHOULD derive from body
geometry or body-region mappings, because arbitrary overlays do not provide reliable or
explainable measurement context.

### IX. Garments as First-Class Entities

`Garment` MUST be a first-class entity. Garments SHOULD support category, subcategory,
layer, color, material, pattern, fit, size, metadata, source images, segmentation, and
structured attributes. When authoritative B2B product metadata exists, the system SHOULD
prefer it over AI inference to avoid unnecessary ambiguity.

### X. Fashion Ontology

Styler MUST maintain a fashion ontology for garment categories, body placement, layering,
compatibility, occlusion, accessories, footwear, headwear, and garment relationships. The
ontology MUST support multi-item try-on and provide consistent rules across clients.

### XI. Looks as First-Class Entities

`Look` MUST be a first-class entity representing a composed state of Body Profile,
garments, accessories, customizations, and scene. A Look MAY contain tops, bottoms,
dresses, outerwear, shoes, hats, bags, accessories, scenes, and customization state. All
multi-item try-on operations MUST operate against Looks.

### XII. Multi-Item Try-On

Styler MUST support multiple fashion items in one Look and understand their placement,
layering, compatibility, and occlusion. Adding or replacing an item SHOULD avoid
regenerating unaffected components when the AI architecture supports incremental updates,
reducing latency and inference cost without sacrificing output quality.

### XIII. Accessible Outfit Composition

The Styler widget MUST support drag-and-drop outfit creation for supported garments and
accessories. Every drag action MUST have an accessible tap or click alternative, and
mobile experiences MUST NOT depend exclusively on drag-and-drop.

### XIV. Virtual Try-On Fidelity and Acceptance

Virtual try-on MUST preserve, as far as technically practical, user identity, body
proportions, garment characteristics, selected customizations, layering, accessories, and
scene consistency. Outputs MUST pass automated quality evaluation before success is
reported. Failed or rejected generations SHOULD NOT count as billable B2B usage because
customers did not receive a usable result.

### XV. Structured Garment Customization

Stylmi MUST support garment customization. Supported options SHOULD progressively cover
color, pattern, material appearance, length, sleeves, neckline, collar, fit, pockets,
buttons, zippers, embroidery, and decoration. Users SHOULD be able to customize through
controls, visual region selection, and natural language. Where practical, natural-language
requests MUST become structured edit operations before generation for predictability and
traceability.

### XVI. Non-Destructive Look Versioning

Look customization MUST be non-destructive. Each meaningful modification SHOULD create a
new Look version so users can compare, undo, restore, save, and share different versions.

### XVII. Optional Contextual Scenes

Styler MUST offer contextual scene generation as an optional B2B capability and a Stylmi
capability. Recommendations MAY derive from the complete Look. Users MUST be able to keep
the original background, select a suggestion, or describe a custom scene. Scene generation
MUST NOT be forced.

### XVIII. Try-On Video Pipeline

Styler MUST support try-on video as an optional capability, and Stylmi MAY expose it based
on subscription or credit entitlements. The preferred pipeline combines the Body Profile,
final Look, and scene into a high-quality reference image before image-to-video generation.
Motion presets MAY include professional presentation, fashion walk, turn, pose, 360-style
presentation, and custom motion.

### XIX. Secure, Entitled Downloads

Generated images, HD images, videos, Tailor Packs, tutorials, and future patterns MAY be
downloadable according to configuration and entitlement. Downloads SHOULD use short-lived
secure URLs to reduce unauthorized access.

### XX. Privacy-Preserving Social Fashion

Stylmi MUST let users privately share Looks with friends. Friends SHOULD be able to like,
dislike, comment, vote, and suggest changes. Where abuse controls permit, basic feedback
SHOULD NOT require recipients to create accounts. Body measurements MUST NOT be shared by
default.

### XXI. Look Comparison and Voting

Users SHOULD be able to share multiple Look versions for comparison and allow friends to
vote. The owner MUST retain control over which suggestions or modifications are applied.

### XXII. Confidence-Gated Tailor Packs

Stylmi SHOULD generate Tailor Packs containing final design visualization, available
front/side/back views, customization specifications, body measurements, garment target
measurements, ease, material suggestions, and construction notes. Body and garment
measurements MUST be clearly distinguished, and exports MUST meet the required measurement
confidence threshold.

### XXIII. Structured Sewing Education

Stylmi MUST support the intent "Show me how to make or sew this." Tutorials MUST NOT rely
exclusively on unconstrained LLM generation. The pipeline SHOULD analyze the garment,
produce a structured construction representation, plan the sewing process, ground it in
verified sewing knowledge, and then generate the tutorial.

### XXIV. Composed Sewing Videos

Long sewing videos MUST NOT be produced as one uncontrolled model generation. Tutorials
SHOULD be decomposed into chapters and scenes, with each scene defining script, visual
description, action, overlays, narration, and duration. Rendering MAY combine generated
video, diagrams, static imagery, animation, captions, and narration.

### XXV. Generic Capability System

Styler MUST represent entitlements through generic capabilities, including body capture,
measurements, single and multi-item try-on, scene and video generation, downloads, garment
customization, Look sharing, and sewing tutorials. Capabilities MUST NOT be scattered as
customer-specific conditional logic.

### XXVI. Independently Entitled B2B Add-Ons

Styler Core SHOULD include Body Profiles, measurements and visualization, single and
multi-item try-on, the drag-and-drop widget, and API/SDK access. Scene generation, video,
advanced exports, advanced customization, and future premium AI MAY be optional add-ons.
Organizations MUST be able to enable capabilities independently by plan and entitlement.

### XXVII. Commerce Independence

Styler MUST NOT require cart, checkout, order, payment, or conversion-tracking
integrations. Organizations MAY independently connect Styler events to their commerce
systems. This keeps Styler useful outside any particular retail stack.

### XXVIII. Sustainable Stylmi Monetization

Stylmi SHOULD combine a free tier, subscriptions, and AI credits while keeping core Body
Profile functionality accessible. Expensive operations such as video, high-resolution
generation, extensive customization, sewing videos, and advanced Tailor Packs MAY consume
credits or require paid plans. Unlimited expensive generative AI MUST NOT be offered until
unit economics prove it sustainable.

### XXIX. Understandable Styler Monetization

Styler SHOULD combine platform subscription, included usage, overage, and optional
add-ons. Billing units SHOULD correspond to understandable successful outcomes such as a
measurement, try-on, scene, video generation or seconds, and advanced export. Internal GPU
and infrastructure use MUST also be measured so pricing remains economically grounded.

### XXX. Multi-Tenancy from Inception

Styler MUST be multi-tenant from inception. Every B2B resource MUST belong to an
organization, project, and environment. Tenant isolation MUST be enforced in both
application and data layers and verified by automated tests.

### XXXI. Security by Default (NON-NEGOTIABLE)

The system MUST provide encryption in transit and at rest, secret management, rate
limiting, signed asset URLs, API-key rotation and revocation, domain restrictions, audit
logging, and tenant isolation. Secret API keys MUST NEVER be exposed in public browser
code.

### XXXII. Sensitive-Data Privacy (NON-NEGOTIABLE)

Body photographs, geometry, measurements, and generated representations MUST be treated
as sensitive user data. The platform MUST support explicit consent, retention controls,
deletion, secure storage, access control, data minimization, and auditability. A B2B
organization MUST NOT automatically receive a consumer's complete Body Profile.

### XXXIII. AI Quality Gates

AI-generated assets MUST be evaluated for relevant failure modes, including identity and
garment preservation, anatomical correctness, artifacts, scene consistency, customization
compliance, and measurement confidence. Low-quality outputs SHOULD be retried or rejected
so downstream consumers do not treat an invalid artifact as success.

### XXXIV. Model and Artifact Lineage

Every AI-generated artifact MUST be traceable to relevant model, model version, pipeline
version, prompt version, Body Profile version, Garment version, and Look version. This
lineage MUST be retained in a form that supports debugging and reproducibility.

### XXXV. Structured Observability

All critical operations MUST emit structured telemetry. The platform SHOULD track latency,
inference time, GPU seconds, success and failure rates, retries, estimated inference cost,
storage, bandwidth, and API usage. OpenTelemetry-compatible instrumentation SHOULD be
preferred to preserve interoperability.

### XXXVI. Cost-Aware AI

Every AI capability MUST be designed with unit economics in mind. The system MUST track
approximate internal cost for body reconstruction, measurements, single and multi-item
try-on, customization, scenes, video, and tutorial generation. Model quality MUST NOT be
evaluated independently of latency and cost.

### XXXVII. Progressive Infrastructure

The initial architecture SHOULD prefer PostgreSQL, Redis, object storage, an API, async
workers, and GPU workers. Kafka, Kubernetes, distributed inference, and similar complexity
SHOULD be introduced only in response to measured scale or reliability requirements. This
constraint keeps operational cost and cognitive load proportional to demonstrated need.

### XXXVIII. Automated Testability

Critical functionality MUST have automated coverage. The test portfolio SHOULD include
unit, API, integration, widget, mobile, tenant-isolation, security, model-regression, and
performance tests, plus AI evaluation datasets. The mix MUST be selected according to the
risk and interfaces changed by each feature.

### XXXIX. Accessible Interaction

The Styler widget and Stylmi MUST provide alternatives to gesture-only interactions.
Drag-and-drop MUST have tap or click alternatives. Interfaces SHOULD follow applicable
WCAG principles so core workflows remain operable by users with differing abilities.

### XL. Explicit Product and Engineering Governance

Specifications, plans, tasks, implementations, and architecture decisions MUST comply
with this constitution. Any intentional exception MUST document its reason, impact,
alternatives considered, and migration plan where applicable. This makes deviations
reviewable rather than implicit.

## Delivery and Compliance

- Specifications MUST identify the governing principles that constrain the feature.
- Plans MUST preserve the Styler/Stylmi boundary and route reusable capabilities through
  documented Styler interfaces.
- Reviews MUST verify applicable security, privacy, tenant isolation, model licensing,
  lineage, quality, observability, accessibility, and cost controls before release.
- Changes to public interfaces or first-class domain entities MUST include contract and
  integration coverage proportional to their compatibility risk.
- AI capability changes MUST define acceptance criteria and evaluation evidence for their
  relevant failure modes.
- A documented constitutional exception MUST be approved before non-compliant work merges;
  an undocumented exception is prohibited.

## Governance

This constitution is the highest-level engineering and product constraint for Styler and
Stylmi and supersedes conflicting local practices. Amendments require a written proposal
that identifies affected principles, explains the rationale and compatibility impact,
updates dependent specifications or migration guidance where applicable, and receives
approval from the project's designated maintainers.

Constitution versions follow semantic versioning:

- MAJOR: a fundamental, backward-incompatible architectural or product principle change,
  removal, or redefinition.
- MINOR: a new principle or materially expanded governance scope.
- PATCH: a clarification or correction with no behavioral change.

Every specification, implementation plan, task set, and code review MUST include a
constitution compliance check. Reviewers MUST reject unexplained violations. Governance
compliance MUST be reassessed whenever architecture, data handling, commercial model,
model providers, or user-facing AI behavior materially changes.

**Version**: 1.0.0 | **Ratified**: 2026-08-25 | **Last Amended**: 2026-08-25
