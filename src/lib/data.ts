// Site-wide configuration and advocate data
// All factual claims are based on information supplied by the advocate

export const siteConfig = {
  name: "Advocate Gunjan Yadav",
  shortName: "Adv. Gunjan Yadav",
  title: "Advocate Gunjan Yadav | District Court Ghaziabad",
  description:
    "Advocate Gunjan Yadav is a practising advocate at District Court, Ghaziabad, Uttar Pradesh. Offering professional legal services in criminal defense, family law, civil litigation, bail matters, and more.",
  url: "https://www.advocategunjanyadav.in",
  locale: "en_IN",
  phone: "+919454072550",
  phoneDisplay: "+91 94540-72550",
  email: "adv.gunjanyadav@gmail.com",
  whatsapp: "919454072550",
  address: {
    full: "District Court, Ghaziabad, Uttar Pradesh, India",
    court: "District Court Ghaziabad",
    city: "Ghaziabad",
    state: "Uttar Pradesh",
    country: "India",
    pincode: "",
  },
  officeHours: "10:00 AM to 05:00 PM (Monday – Saturday)",
  officeHoursShort: "10 AM – 5 PM",
  qualifications: "B.A. LL.B.",
  barCouncil: {
    registrationNo: "9555-7-2026-xxxxxx",
    council: "Bar Council of Uttar Pradesh",
  },
  social: {
    linkedin: "",
    facebook: "",
    instagram: "",
    youtube: "",
    twitter: "",
  },
} as const;

export const practiceAreas = [
  {
    id: "court-marriage",
    title: "Court Marriage",
    slug: "court-marriage",
    icon: "rings",
    shortDescription:
      "Legal assistance for court marriage registration under the Special Marriage Act, including documentation, affidavits, and court procedures.",
    description:
      "Court marriage is a legally recognized form of marriage solemnized under the Special Marriage Act, 1954. Advocate Gunjan Yadav provides professional legal assistance for court marriage proceedings at Ghaziabad District Court, including preparation of required documentation, filing of notice, affidavits, and representation during the registration process.",
    category: "family",
  },
  {
    id: "divorce",
    title: "Divorce",
    slug: "divorce",
    icon: "divorce",
    shortDescription:
      "Legal representation in divorce proceedings including mutual consent divorce and contested divorce matters under Hindu Marriage Act and Special Marriage Act.",
    description:
      "Divorce proceedings require careful legal handling and sensitivity. Advocate Gunjan Yadav provides professional legal representation in both mutual consent and contested divorce matters under the Hindu Marriage Act, 1955 and the Special Marriage Act, 1954 at Ghaziabad District Court.",
    category: "family",
  },
  {
    id: "bail-advocacy",
    title: "Bail & Bail Advocacy",
    slug: "bail-advocacy",
    icon: "gavel",
    shortDescription:
      "Professional legal representation for regular bail, default bail, and bail-related matters in criminal cases at District Court Ghaziabad.",
    description:
      "Bail is a fundamental right and an essential aspect of criminal law. Advocate Gunjan Yadav provides legal representation for bail applications including regular bail under Section 439 CrPC and default bail matters at Ghaziabad District Court.",
    category: "criminal",
  },
  {
    id: "anticipatory-bail",
    title: "Anticipatory Bail",
    slug: "anticipatory-bail",
    icon: "shield",
    shortDescription:
      "Legal assistance for anticipatory bail applications under Section 438 CrPC to seek protection from arrest in non-bailable offences.",
    description:
      "Anticipatory bail is a provision under Section 438 of the Code of Criminal Procedure, 1973 that allows a person to seek bail in anticipation of arrest. Advocate Gunjan Yadav provides legal assistance for anticipatory bail applications at Ghaziabad District Court.",
    category: "criminal",
  },
  {
    id: "cheque-bounce",
    title: "Cheque Bounce",
    slug: "cheque-bounce",
    icon: "cheque",
    shortDescription:
      "Legal representation in cheque bounce/dishonour cases under Section 138 of the Negotiable Instruments Act, 1881.",
    description:
      "Cheque bounce cases are governed by Section 138 of the Negotiable Instruments Act, 1881. Advocate Gunjan Yadav provides legal representation for both complainants and accused in cheque dishonour matters at Ghaziabad District Court.",
    category: "criminal",
  },
  {
    id: "criminal-defense",
    title: "Criminal Defense & Litigation",
    slug: "criminal-defense",
    icon: "defense",
    shortDescription:
      "Comprehensive criminal defense representation including trials, appeals, and criminal litigation at District Court Ghaziabad.",
    description:
      "Criminal defense requires thorough understanding of substantive and procedural criminal law. Advocate Gunjan Yadav provides comprehensive criminal defense representation at Ghaziabad District Court, covering matters under the Indian Penal Code, CrPC, and special criminal statutes.",
    category: "criminal",
  },
  {
    id: "family-law",
    title: "Family Law / Matrimonial",
    slug: "family-law",
    icon: "family",
    shortDescription:
      "Legal assistance in family and matrimonial matters including marriage disputes, restitution of conjugal rights, and family court proceedings.",
    description:
      "Family law encompasses a wide range of legal matters related to marriage, family relationships, and domestic affairs. Advocate Gunjan Yadav provides professional legal assistance in family and matrimonial disputes at Ghaziabad District Court and Family Court.",
    category: "family",
  },
  {
    id: "domestic-violence",
    title: "Domestic Violence (D.V.)",
    slug: "domestic-violence",
    icon: "protection",
    shortDescription:
      "Legal representation in domestic violence matters under the Protection of Women from Domestic Violence Act, 2005.",
    description:
      "The Protection of Women from Domestic Violence Act, 2005 provides civil remedies to women who are victims of domestic violence. Advocate Gunjan Yadav provides legal representation in domestic violence matters at Ghaziabad District Court.",
    category: "family",
  },
  {
    id: "child-custody",
    title: "Child Custody",
    slug: "child-custody",
    icon: "child",
    shortDescription:
      "Legal assistance in child custody and guardianship matters under the Guardians and Wards Act, 1890 and Hindu Minority and Guardianship Act, 1956.",
    description:
      "Child custody matters are handled with utmost sensitivity, keeping the welfare of the child as the paramount consideration. Advocate Gunjan Yadav provides legal assistance in custody and guardianship proceedings at Ghaziabad District Court.",
    category: "family",
  },
  {
    id: "maintenance",
    title: "Maintenance",
    slug: "maintenance",
    icon: "maintenance",
    shortDescription:
      "Legal representation for maintenance claims under Section 125 CrPC, Hindu Adoptions and Maintenance Act, and other applicable laws.",
    description:
      "Maintenance is a legal obligation to provide financial support to dependents. Advocate Gunjan Yadav provides legal representation in maintenance matters under Section 125 CrPC and the Hindu Adoptions and Maintenance Act at Ghaziabad District Court.",
    category: "family",
  },
  {
    id: "498a-defense",
    title: "498A Defense",
    slug: "498a-defense",
    icon: "defense498",
    shortDescription:
      "Legal defense in matters under Section 498A of the Indian Penal Code related to cruelty by husband or his relatives.",
    description:
      "Section 498A of the Indian Penal Code deals with cruelty by the husband or his relatives. Advocate Gunjan Yadav provides professional legal defense representation in 498A matters at Ghaziabad District Court.",
    category: "criminal",
  },
  {
    id: "fir-quashing",
    title: "F.I.R. & FIR Quashing",
    slug: "fir-quashing",
    icon: "document",
    shortDescription:
      "Legal assistance related to First Information Reports (FIR) including guidance on FIR filing and representation in FIR quashing matters.",
    description:
      "An FIR (First Information Report) is the first step in the criminal justice process. Advocate Gunjan Yadav provides legal guidance on FIR-related matters and representation in FIR quashing proceedings.",
    category: "criminal",
  },
  {
    id: "birth-death-certificate",
    title: "Birth & Death Certificate",
    slug: "birth-death-certificate",
    icon: "certificate",
    shortDescription:
      "Legal assistance for obtaining delayed birth and death certificates through court orders and municipal authorities.",
    description:
      "Obtaining birth and death certificates, especially delayed registrations, may require court orders. Advocate Gunjan Yadav provides legal assistance for birth and death certificate matters at Ghaziabad District Court.",
    category: "civil",
  },
  {
    id: "civil-disputes",
    title: "Civil Disputes & Litigation",
    slug: "civil-disputes",
    icon: "civil",
    shortDescription:
      "Legal representation in civil disputes including property matters, contractual disputes, injunctions, and civil litigation at District Court Ghaziabad.",
    description:
      "Civil litigation covers a broad spectrum of legal disputes between parties. Advocate Gunjan Yadav provides professional legal representation in civil disputes including property matters, contractual disputes, recovery suits, and injunction matters at Ghaziabad District Court.",
    category: "civil",
  },
  {
    id: "cyber-defense",
    title: "Cyber Defense",
    slug: "cyber-defense",
    icon: "cyber",
    shortDescription:
      "Legal representation in cyber crime matters under the Information Technology Act, 2000 and related provisions.",
    description:
      "Cyber crime cases are governed by the Information Technology Act, 2000 and relevant provisions of the Indian Penal Code. Advocate Gunjan Yadav provides legal representation in cyber crime defense matters.",
    category: "criminal",
  },
  {
    id: "legal-drafting",
    title: "Legal Drafting",
    slug: "legal-drafting",
    icon: "drafting",
    shortDescription:
      "Professional legal drafting services including contracts, agreements, legal notices, petitions, and other legal documents.",
    description:
      "Legal drafting is a specialized skill that requires precision and thorough legal knowledge. Advocate Gunjan Yadav provides professional legal drafting services including contracts, agreements, legal notices, affidavits, petitions, and other legal documents.",
    category: "civil",
  },
  {
    id: "traffic-challan",
    title: "Traffic Challan",
    slug: "traffic-challan",
    icon: "traffic",
    shortDescription:
      "Legal assistance in traffic challan matters and representation before traffic courts and transport authorities.",
    description:
      "Traffic challan matters require understanding of the Motor Vehicles Act and traffic regulations. Advocate Gunjan Yadav provides legal assistance in traffic challan disputes and representation before relevant authorities.",
    category: "civil",
  },
  {
    id: "consumer-law",
    title: "Consumer Law",
    slug: "consumer-law",
    icon: "consumer",
    shortDescription:
      "Legal representation in consumer disputes under the Consumer Protection Act, 2019 before Consumer Forums and Commissions.",
    description:
      "Consumer protection law safeguards the rights of consumers against unfair trade practices and deficient services. Advocate Gunjan Yadav provides legal representation in consumer disputes under the Consumer Protection Act, 2019.",
    category: "civil",
  },
  {
    id: "land-revenue-law",
    title: "Land & Revenue Law",
    slug: "land-revenue-law",
    icon: "land",
    shortDescription:
      "Legal assistance in land and revenue matters including land disputes, mutation, property records, and revenue court proceedings.",
    description:
      "Land and revenue law governs property ownership, land records, and revenue administration. Advocate Gunjan Yadav provides legal assistance in land disputes, mutation matters, and revenue court proceedings in Ghaziabad.",
    category: "civil",
  },
  {
    id: "rera-real-estate",
    title: "RERA & Real Estate",
    slug: "rera-real-estate",
    icon: "realestate",
    shortDescription:
      "Legal representation in real estate matters and disputes under the Real Estate (Regulation and Development) Act, 2016 (RERA).",
    description:
      "RERA (Real Estate Regulation and Development Act, 2016) protects home buyers and promotes transparency in real estate transactions. Advocate Gunjan Yadav provides legal representation in RERA matters and real estate disputes.",
    category: "civil",
  },
  {
    id: "debt-recovery",
    title: "Debt Recovery",
    slug: "debt-recovery",
    icon: "debt",
    shortDescription:
      "Legal assistance in debt recovery matters including recovery suits, execution proceedings, and enforcement of money decrees.",
    description:
      "Debt recovery involves legal proceedings to recover outstanding debts and enforce payment obligations. Advocate Gunjan Yadav provides legal assistance in debt recovery matters at Ghaziabad District Court.",
    category: "civil",
  },
  {
    id: "corporate-law",
    title: "Corporate Law",
    slug: "corporate-law",
    icon: "corporate",
    shortDescription:
      "Legal assistance in corporate matters including company formation, compliance, corporate disputes, and business advisory.",
    description:
      "Corporate law governs the formation, operation, and dissolution of corporations and business entities. Advocate Gunjan Yadav provides legal assistance in corporate matters and business advisory services.",
    category: "corporate",
  },
  {
    id: "separation",
    title: "Separation",
    slug: "separation",
    icon: "separation",
    shortDescription:
      "Legal assistance in judicial separation matters under the Hindu Marriage Act and other applicable personal laws.",
    description:
      "Judicial separation is a legal remedy that allows married couples to live separately without dissolving the marriage. Advocate Gunjan Yadav provides legal assistance in separation matters at Ghaziabad District Court.",
    category: "family",
  },
  {
    id: "rti",
    title: "Right to Information (RTI)",
    slug: "rti",
    icon: "rti",
    shortDescription:
      "Legal assistance in filing RTI applications and appeals under the Right to Information Act, 2005.",
    description:
      "The Right to Information Act, 2005 empowers citizens to seek information from public authorities. Advocate Gunjan Yadav provides legal assistance in filing RTI applications, first appeals, and second appeals.",
    category: "civil",
  },
  {
    id: "mact-claims",
    title: "MACT Claims",
    slug: "mact-claims",
    icon: "mact",
    shortDescription:
      "Legal representation in Motor Accident Claims before the Motor Accident Claims Tribunal (MACT).",
    description:
      "Motor Accident Claims Tribunal (MACT) handles compensation claims arising from motor vehicle accidents. Advocate Gunjan Yadav provides legal representation in MACT claim proceedings in Ghaziabad.",
    category: "civil",
  },
  {
    id: "banking-finance",
    title: "Banking & Finance",
    slug: "banking-finance",
    icon: "banking",
    shortDescription:
      "Legal assistance in banking and finance matters including loan disputes, banking fraud, and financial regulations.",
    description:
      "Banking and finance law governs the operations of financial institutions and the rights of banking customers. Advocate Gunjan Yadav provides legal assistance in banking disputes and financial matters.",
    category: "corporate",
  },
  {
    id: "tax-law",
    title: "Tax Law",
    slug: "tax-law",
    icon: "tax",
    shortDescription:
      "Legal assistance in tax-related matters including income tax disputes, GST matters, and tax compliance advisory.",
    description:
      "Tax law encompasses a complex set of rules governing taxation at various levels. Advocate Gunjan Yadav provides legal assistance in tax disputes and tax compliance matters.",
    category: "corporate",
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    slug: "intellectual-property",
    icon: "ip",
    shortDescription:
      "Legal assistance in intellectual property matters including trademarks, copyrights, and IP disputes.",
    description:
      "Intellectual property law protects the rights of creators and innovators. Advocate Gunjan Yadav provides legal assistance in intellectual property matters including trademark and copyright disputes.",
    category: "corporate",
  },
  {
    id: "commercial-disputes",
    title: "Commercial Disputes",
    slug: "commercial-disputes",
    icon: "commercial",
    shortDescription:
      "Legal representation in commercial disputes including partnership conflicts, business disagreements, and commercial litigation.",
    description:
      "Commercial disputes arise from business transactions and commercial relationships. Advocate Gunjan Yadav provides legal representation in commercial dispute matters at Ghaziabad District Court.",
    category: "corporate",
  },
  {
    id: "arbitration",
    title: "Arbitration",
    slug: "arbitration",
    icon: "arbitration",
    shortDescription:
      "Legal representation in arbitration proceedings under the Arbitration and Conciliation Act, 1996.",
    description:
      "Arbitration is an alternative dispute resolution mechanism governed by the Arbitration and Conciliation Act, 1996. Advocate Gunjan Yadav provides legal representation in arbitration proceedings.",
    category: "corporate",
  },
  {
    id: "ndps-defense",
    title: "NDPS Defense",
    slug: "ndps-defense",
    icon: "ndps",
    shortDescription:
      "Legal defense in matters under the Narcotic Drugs and Psychotropic Substances Act, 1985 (NDPS Act).",
    description:
      "The NDPS Act, 1985 deals with offences related to narcotic drugs and psychotropic substances. Advocate Gunjan Yadav provides legal defense representation in NDPS matters at Ghaziabad District Court.",
    category: "criminal",
  },
  {
    id: "labour-service",
    title: "Labour & Service",
    slug: "labour-service",
    icon: "labour",
    shortDescription:
      "Legal assistance in labour and service matters including employment disputes, industrial disputes, and service law matters.",
    description:
      "Labour and service law governs the rights and obligations of employers and employees. Advocate Gunjan Yadav provides legal assistance in labour disputes and service matters.",
    category: "civil",
  },
  {
    id: "writ-petitions",
    title: "Writ Petitions",
    slug: "writ-petitions",
    icon: "writ",
    shortDescription:
      "Legal assistance in preparing and filing writ petitions for enforcement of fundamental and legal rights.",
    description:
      "Writ petitions are a constitutional remedy for enforcement of fundamental rights and for seeking judicial review. Advocate Gunjan Yadav provides legal assistance in preparing writ petitions.",
    category: "constitutional",
  },
  {
    id: "juvenile-justice",
    title: "Juvenile Justice",
    slug: "juvenile-justice",
    icon: "juvenile",
    shortDescription:
      "Legal representation in juvenile justice matters under the Juvenile Justice (Care and Protection of Children) Act, 2015.",
    description:
      "The Juvenile Justice Act, 2015 provides for the care, protection, and rehabilitation of children in conflict with law. Advocate Gunjan Yadav provides legal representation in juvenile justice matters.",
    category: "criminal",
  },
  {
    id: "fssai-food-law",
    title: "FSSAI & Food Law",
    slug: "fssai-food-law",
    icon: "food",
    shortDescription:
      "Legal assistance in food safety and FSSAI matters under the Food Safety and Standards Act, 2006.",
    description:
      "Food law governs the safety and standards of food products. Advocate Gunjan Yadav provides legal assistance in FSSAI compliance and food safety matters.",
    category: "regulatory",
  },
] as const;

export type PracticeArea = (typeof practiceAreas)[number];

export const courts = [
  {
    name: "District Court, Ghaziabad",
    description:
      "Primary court of practice. Advocate Gunjan Yadav practises at the District Court in Ghaziabad, Uttar Pradesh, handling matters across civil, criminal, and family jurisdictions.",
    address: "District Court Complex, Ghaziabad, Uttar Pradesh",
    isPrimary: true,
  },
] as const;

export const faqs = [
  {
    question: "Where does Advocate Gunjan Yadav practise?",
    answer:
      "Advocate Gunjan Yadav practises at the District Court, Ghaziabad, Uttar Pradesh, India.",
  },
  {
    question: "What types of legal matters are handled?",
    answer:
      "Advocate Gunjan Yadav handles a wide range of legal matters including criminal defense, bail matters, family law, divorce, domestic violence, civil disputes, cheque bounce cases, consumer matters, cyber crime defense, corporate law, and many other areas of practice.",
  },
  {
    question: "How can I contact Advocate Gunjan Yadav?",
    answer:
      "You can contact Advocate Gunjan Yadav by calling +91 94540-72550, sending an email to adv.gunjanyadav@gmail.com, or by submitting the consultation request form on this website.",
  },
  {
    question: "What are the office hours?",
    answer:
      "The office hours are from 10:00 AM to 05:00 PM. For urgent legal matters, please call the office number directly.",
  },
  {
    question: "How can I request a legal consultation?",
    answer:
      "You can request a consultation by filling out the consultation form on the Contact page of this website, or by calling the office directly at +91 94540-72550. Please provide basic details of your legal matter to help us assist you better.",
  },
  {
    question: "Does submitting the contact form create an advocate-client relationship?",
    answer:
      "No. Submitting a contact or consultation form does not by itself create an advocate-client relationship. An advocate-client relationship is established only after mutual agreement and formal engagement.",
  },
  {
    question: "What information should I provide when requesting a consultation?",
    answer:
      "Please provide your name, contact details, a brief description of your legal matter, and any relevant dates or deadlines. Please do not share sensitive or privileged information through the contact form until a formal advocate-client relationship has been established.",
  },
  {
    question: "What are the qualifications of Advocate Gunjan Yadav?",
    answer:
      "Advocate Gunjan Yadav holds a B.A. LL.B. degree and is enrolled with the Bar Council (Registration No: 9555-7-2026-xxxxxx). She practises at the District Court, Ghaziabad.",
  },
  {
    question: "Can I visit the office/chamber without an appointment?",
    answer:
      "It is recommended to schedule an appointment before visiting to ensure availability. You can call +91 94540-72550 to schedule a visit during office hours (10:00 AM to 05:00 PM).",
  },
] as const;

export const legalArticles = [
  {
    id: "what-is-anticipatory-bail",
    title: "What is Anticipatory Bail? A General Overview",
    slug: "what-is-anticipatory-bail",
    excerpt:
      "Anticipatory bail is a provision under Section 438 of the Code of Criminal Procedure that allows a person apprehending arrest to seek bail in advance. Learn about the general process and legal framework.",
    content: `
## What is Anticipatory Bail?

Anticipatory bail is a legal provision under **Section 438 of the Code of Criminal Procedure, 1973 (CrPC)** that allows a person who apprehends arrest in a non-bailable offence to seek bail even before being arrested.

### Legal Basis

The provision of anticipatory bail was introduced to protect individuals from unnecessary arrest and detention. It is an important safeguard against the misuse of criminal proceedings.

### When Can Anticipatory Bail Be Sought?

Anticipatory bail may be sought when:
- A person has reason to believe that they may be arrested for a non-bailable offence
- There is apprehension of arrest based on a complaint, FIR, or other proceedings
- The person wishes to secure their liberty in advance

### General Procedure

1. **Filing the Application**: An application for anticipatory bail is filed before the Sessions Court or the High Court
2. **Hearing**: The court hears arguments from both sides
3. **Court's Decision**: The court may grant or reject the application based on the facts and circumstances

### Important Considerations

- Anticipatory bail is not an absolute right but a discretionary power of the court
- The court considers factors such as the nature of the offence, the role of the applicant, and the likelihood of fleeing justice
- Conditions may be imposed along with the grant of anticipatory bail

### Key Supreme Court Decisions

The Supreme Court of India has, in various decisions, laid down guidelines regarding the grant of anticipatory bail. The landmark case of **Sushila Aggarwal v. State (NCT of Delhi) (2020)** provided important clarifications on the duration and conditions of anticipatory bail.

*Note: Laws and procedures may change. The applicability of any legal provision depends on the specific facts and circumstances of each case.*
    `,
    category: "Criminal Law",
    date: "2026-09-15",
    updatedDate: "2026-09-15",
    author: "Advocate Gunjan Yadav",
    readTime: "5 min read",
  },
  {
    id: "understanding-cheque-bounce",
    title: "Understanding Cheque Bounce Cases Under Section 138 NI Act",
    slug: "understanding-cheque-bounce",
    excerpt:
      "A general overview of cheque bounce proceedings under Section 138 of the Negotiable Instruments Act, 1881 — the legal framework, procedure, and important points to know.",
    content: `
## Cheque Bounce Under Section 138 NI Act

Cheque bounce, or dishonour of a cheque, is governed by **Section 138 of the Negotiable Instruments Act, 1881**. When a cheque issued for the discharge of a debt or liability is returned unpaid by the bank, it may constitute a criminal offence under this section.

### When Does Section 138 Apply?

Section 138 applies when:
- A cheque is drawn on an account maintained by the drawer with a bank
- The cheque is issued for the discharge (in whole or part) of a debt or other liability
- The cheque is returned unpaid due to insufficient funds or if the amount exceeds the arrangement with the bank

### General Procedure

1. **Demand Notice**: The payee or holder must send a written demand notice to the drawer within 30 days of receiving the cheque return memo
2. **Waiting Period**: The drawer has 15 days from receipt of the notice to make the payment
3. **Filing Complaint**: If payment is not made within 15 days, the payee may file a complaint within one month of the expiry of the 15-day period

### Possible Outcomes

If found guilty, the drawer may face:
- Imprisonment up to two years, or
- Fine up to twice the amount of the cheque, or
- Both

### Important Points

- The complaint must be filed before a Magistrate having jurisdiction
- The burden of proof initially lies on the complainant to prove the cheque was issued for a legally enforceable debt
- Once the issuance and dishonour are established, the presumption shifts to the accused

*Note: This article provides general information only. Laws and judicial interpretations may change. Consult a legal professional for advice specific to your situation.*
    `,
    category: "Criminal Law",
    date: "2026-09-10",
    updatedDate: "2026-09-10",
    author: "Advocate Gunjan Yadav",
    readTime: "6 min read",
  },
  {
    id: "basics-of-fir",
    title: "What is an FIR? Understanding the First Information Report",
    slug: "basics-of-fir",
    excerpt:
      "Learn about the First Information Report (FIR) — what it is, when it should be filed, and the general legal framework governing FIRs in India.",
    content: `
## What is an FIR?

An **FIR (First Information Report)** is a written document prepared by the police when they receive information about the commission of a **cognizable offence**. It is the first step in the criminal justice process.

### Legal Framework

The FIR is governed by **Section 154 of the Code of Criminal Procedure, 1973 (CrPC)**. Under the new Bharatiya Nagarik Suraksha Sanhita (BNSS), the relevant provisions continue to ensure that police must register an FIR when information about a cognizable offence is received.

### When Should an FIR Be Filed?

An FIR should be filed when:
- A cognizable offence has been committed or is likely to be committed
- The information is given to the police either orally or in writing

### How to File an FIR

1. Visit the nearest police station
2. Provide information about the incident to the Station House Officer (SHO)
3. The police are obligated to register the FIR if the information discloses a cognizable offence
4. A copy of the FIR should be provided to the informant free of cost

### Your Rights

- The police cannot refuse to register an FIR for a cognizable offence
- If the police refuse to register an FIR, a written complaint can be sent to the Superintendent of Police
- An FIR can also be registered through the court under Section 156(3) CrPC (now under corresponding BNSS provisions)

### Zero FIR

A **Zero FIR** can be filed at any police station regardless of jurisdiction. The case is later transferred to the police station having jurisdiction.

*Note: This article provides general informational content and does not constitute legal advice. Please consult a qualified legal professional for guidance on your specific situation.*
    `,
    category: "Criminal Law",
    date: "2026-09-05",
    updatedDate: "2026-09-05",
    author: "Advocate Gunjan Yadav",
    readTime: "5 min read",
  },
  {
    id: "consumer-complaint-process",
    title: "How to File a Consumer Complaint: A General Guide",
    slug: "consumer-complaint-process",
    excerpt:
      "A general overview of the consumer complaint process under the Consumer Protection Act, 2019, including where to file and the basic procedure.",
    content: `
## Filing a Consumer Complaint

The **Consumer Protection Act, 2019** provides consumers with the right to seek redressal for deficiency in services, defective goods, unfair trade practices, and other consumer grievances.

### Who Can File?

A consumer complaint can be filed by:
- The consumer
- Any recognized consumer association
- The Central or State Government
- Legal heirs or representatives of the consumer (in certain cases)

### Where to File?

Complaints are filed based on the value of goods/services and compensation claimed:
- **District Commission**: Up to ₹1 crore
- **State Commission**: ₹1 crore to ₹10 crore
- **National Commission**: Above ₹10 crore

### General Procedure

1. **Draft the Complaint**: Include details of the transaction, the deficiency or defect, and the relief sought
2. **Attach Documents**: Include bills, receipts, correspondence, and other relevant evidence
3. **File the Complaint**: Submit before the appropriate Consumer Commission
4. **Hearing**: Both parties are heard and evidence is examined
5. **Order**: The Commission passes an order

### Time Limit

A consumer complaint must generally be filed within **two years** from the date the cause of action arose.

### Remedies Available

- Replacement or repair of goods
- Refund of the price
- Compensation for loss or injury
- Costs of proceedings

*Note: This is general informational content. The applicability of provisions depends on the specific facts of each case. Please seek professional legal advice.*
    `,
    category: "Consumer Law",
    date: "2026-08-28",
    updatedDate: "2026-08-28",
    author: "Advocate Gunjan Yadav",
    readTime: "5 min read",
  },
] as const;

export type LegalArticle = (typeof legalArticles)[number];
