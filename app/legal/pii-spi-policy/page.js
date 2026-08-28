import LegalPageLayout from '@/app/components/LegalPageLayout';

const sections = [
  {
    id: 'pii-spi-definition',
    heading: '1. Understanding PII & SPI Data',
    content: (
      <p>
        Personally Identifiable Information (PII) includes data that can directly or indirectly identify an individual (such as name, phone number, physical address, or IP address). Sensitive Personal Data or Information (SPI) encompasses financial details, payment credentials, biometric data, or authentication credentials governed by IT Rules and DPDPA guidelines.
      </p>
    ),
  },
  {
    id: 'collection-scope',
    heading: '2. Scope of PII / SPI Handling',
    content: (
      <div className="space-y-2">
        <p>Khaira Digital Solutions Private Limited collects PII / SPI strictly for verified business transactions:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Client onboarding, invoicing, GST compliance details</li>
          <li>Voiceover artist & freelancer contracts, payment details</li>
          <li>Authorized contact details for project coordination</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'protection-protocols',
    heading: '3. Data Security & Storage Controls',
    content: (
      <p>
        SPI data (such as payment records or credentials) is stored in encrypted digital environments adhering to AES-256 standards. Access is governed by multi-factor authentication (MFA) and strict role-based authorization rules.
      </p>
    ),
  },
  {
    id: 'data-retention-erasure',
    heading: '4. Data Retention & Erasure',
    content: (
      <p>
        We retain PII / SPI only for the period necessary to complete project services and satisfy legal, accounting, or regulatory requirements. Clients may request destruction of non-statutory PII by emailing <a href="mailto:admin@khairadigital.com" className="text-red-400 hover:underline">admin@khairadigital.com</a>.
      </p>
    ),
  },
];

export default function PiiSpiPolicyPage() {
  return (
    <LegalPageLayout
      title="PII / SPI Data Policy"
      subtitle="How Khaira Digital Solutions Private Limited safeguards Personally Identifiable and Sensitive Personal Information."
      lastUpdated="August 2026"
      sections={sections}
    />
  );
}
