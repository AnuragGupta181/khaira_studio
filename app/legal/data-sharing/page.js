import LegalPageLayout from '@/app/components/LegalPageLayout';

const sections = [
  {
    id: 'data-sharing-overview',
    heading: '1. Overview of Data Sharing Policy',
    content: (
      <p>
        At Khaira Digital Solutions Private Limited, we prioritize maintaining client data privacy and confidentiality. This Data Sharing Policy outlines how, when, and why personal or commercial data may be shared with trusted third parties during service delivery.
      </p>
    ),
  },
  {
    id: 'third-party-partners',
    heading: '2. Third-Party Service Providers',
    content: (
      <div className="space-y-2">
        <p>We may share essential data with vetted partner infrastructure services only as necessary to fulfill project requirements:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Cloud storage & asset transfer networks (e.g., AWS, Google Cloud)</li>
          <li>Payment processors & banking portals (e.g., Razorpay, UPI gateway)</li>
          <li>Communication & project management tools</li>
        </ul>
        <p>All service partners are legally bound to strictly process data according to our data protection guidelines.</p>
      </div>
    ),
  },
  {
    id: 'legal-compliance',
    heading: '3. Disclosure for Legal Obligations',
    content: (
      <p>
        We may disclose client or user information if required by law enforcement, judicial proceedings, or statutory regulatory bodies under Indian jurisdiction to enforce our legal rights or respond to legal subpoenas.
      </p>
    ),
  },
  {
    id: 'no-sale',
    heading: '4. Absolute No-Sale Commitment',
    content: (
      <p>
        Khaira Digital Solutions Private Limited under no circumstances sells, leases, trades, or monetizes client contact lists, business metrics, or media assets to external advertising brokerages or third parties.
      </p>
    ),
  },
];

export default function DataSharingPage() {
  return (
    <LegalPageLayout
      title="Data Sharing Policy"
      subtitle="Guidelines on how data is transmitted and protected across partner networks by Khaira Digital Solutions Private Limited."
      lastUpdated="August 2026"
      sections={sections}
    />
  );
}
