import LegalPageLayout from '@/app/components/LegalPageLayout';

const sections = [
  {
    id: 'acceptance',
    heading: '1. Acceptance of Terms',
    content: (
      <p>
        By accessing or using the services provided by Khaira Digital Solutions Private Limited (&quot;Company&quot;, &quot;We&quot;, &quot;Us&quot;), including fullstack product development, AI model fine-tuning, web scraping, cloud deployment, embedded hardware integration, and digital solutions, you agree to be bound by these Terms of Service. If you disagree with any portion of these terms, you must not use our website or commission services.
      </p>
    ),
  },
  {
    id: 'services-deliverables',
    heading: '2. Services & Scope of Work',
    content: (
      <div className="space-y-2">
        <p>
          All commercial projects commissioned to Khaira Digital Solutions Private Limited are executed according to the project scope mutually agreed upon in writing or invoice specifications:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Revisions are limited to the number specified in the service package or project agreement.</li>
          <li>Turnaround times are estimates and depend on timely client feedback and submission of required materials.</li>
          <li>Any major scope changes after work commencement will incur additional charges.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'intellectual-property',
    heading: '3. Intellectual Property Rights',
    content: (
      <p>
        Upon full payment of all fees and invoices, final deliverables (source code repositories, API binaries, fine-tuned model weights, and design files) are licensed or transferred to the client for their intended commercial use. Khaira Digital Solutions Private Limited retains the right to display non-confidential project samples in portfolio showcases and promotional materials unless a formal Non-Disclosure Agreement (NDA) is executed.
      </p>
    ),
  },
  {
    id: 'payment-terms',
    heading: '4. Fees & Payment Terms',
    content: (
      <p>
        Payments must be made according to agreed milestones or invoice schedules. Advance deposits may be required before project kickoff. Late payments may result in suspension of project deliverables, delayed schedules, or interest charges under applicable commercial laws.
      </p>
    ),
  },
  {
    id: 'limitation-liability',
    heading: '5. Limitation of Liability',
    content: (
      <p>
        Khaira Digital Solutions Private Limited shall not be held liable for any indirect, incidental, or consequential damages resulting from the use of delivered media assets or marketing campaigns. Our maximum cumulative liability for any claim shall not exceed the total fee paid by the client for the specific project giving rise to the claim.
      </p>
    ),
  },
  {
    id: 'governing-law',
    heading: '6. Governing Law & Dispute Resolution',
    content: (
      <p>
        These terms shall be governed by and interpreted in accordance with the laws of India. Any legal action or proceeding arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Noida / District Gautam Buddha Nagar, Uttar Pradesh.
      </p>
    ),
  },
];

export default function TermsOfServicePage() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      subtitle="The contractual terms and guidelines governing client engagements and service delivery by Khaira Digital Solutions Private Limited."
      lastUpdated="August 2026"
      sections={sections}
    />
  );
}
