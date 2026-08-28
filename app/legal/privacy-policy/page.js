import LegalPageLayout from '@/app/components/LegalPageLayout';

const sections = [
  {
    id: 'information-we-collect',
    heading: '1. Information We Collect',
    content: (
      <p>
        We collect personal and business information you provide directly to us when requesting media services, submitting project inquiries, creating an account, or interacting with our digital marketing tools. This includes your name, email address, phone number, company name, billing information, project specifications, and media assets voluntarily uploaded to our platform. We also collect automated technical data such as IP address, browser information, and website usage statistics.
      </p>
    ),
  },
  {
    id: 'how-we-use',
    heading: '2. How We Use Your Information',
    content: (
      <div className="space-y-2">
        <p>We use collected data to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Deliver ad video production, voiceover, dubbing, graphic design, and digital marketing services</li>
          <li>Process transactions, billing, and send project updates or invoices</li>
          <li>Communicate with clients regarding project deliverables, feedback, and technical support</li>
          <li>Improve website user experience, analytics, and marketing effectiveness</li>
          <li>Comply with applicable statutory tax and compliance obligations under Indian Law</li>
          <li>Protect against illegal activities, unauthorized access, and breach of terms</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'information-sharing',
    heading: '3. Information Sharing & Third Parties',
    content: (
      <p>
        Khaira Digital Solutions Private Limited does not sell or rent personal information to third parties. We may share information with trusted third-party service providers (such as hosting infrastructure, payment gateways, and communication tools) bound by strict confidentiality obligations, or when required by law, subpoena, or government authority.
      </p>
    ),
  },
  {
    id: 'data-security',
    heading: '4. Data Security & Storage',
    content: (
      <p>
        We implement robust physical, technical, and managerial safeguards including encryption protocols (TLS/SSL), restricted access control systems, and secure server architecture to safeguard your personal data and project media files against unauthorized access or disclosure.
      </p>
    ),
  },
  {
    id: 'user-rights',
    heading: '5. Your Rights (DPDPA 2023)',
    content: (
      <div className="space-y-2">
        <p>Under the Digital Personal Data Protection Act (DPDPA), 2023 and Indian regulations, you have the right to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Request access to and a summary of your personal data held by us</li>
          <li>Request correction or updating of inaccurate data</li>
          <li>Request erasure of your personal data (subject to legal retention requirements)</li>
          <li>Withdraw previously granted consent for processing</li>
        </ul>
        <p>To exercise any of these rights, contact us at <a href="mailto:admin@khairadigital.com" className="text-red-400 hover:underline">admin@khairadigital.com</a>.</p>
      </div>
    ),
  },
  {
    id: 'contact-officer',
    heading: '6. Contact Data Officer',
    content: (
      <div className="space-y-2">
        <p>If you have any questions or concerns regarding our privacy practices:</p>
        <div className="bg-slate-50 border border-gray-200 rounded-xl p-4 space-y-1 text-sm">
          <p className="font-semibold text-gray-900">Data Protection Officer</p>
          <p className="text-gray-700">Khaira Digital Solutions Private Limited</p>
          <p className="text-gray-600">Prateek Laurel, Sector 120, Noida, Uttar Pradesh – 201301, India</p>
          <p className="text-gray-600">Email: <a href="mailto:admin@khairadigital.com" className="text-red-600 hover:underline font-medium">admin@khairadigital.com</a></p>
        </div>
      </div>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="Learn how Khaira Digital Solutions Private Limited collects, uses, and safeguards your data and creative assets."
      lastUpdated="August 2026"
      sections={sections}
    />
  );
}
