import LegalPageLayout from '@/app/components/LegalPageLayout';

const sections = [
  {
    id: 'grievance-framework',
    heading: '1. Grievance Redressal Mechanism',
    content: (
      <p>
        In accordance with Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules and IT Act provisions, Khaira Digital Solutions Private Limited maintains a dedicated Grievance Redressal mechanism to resolve client or user concerns promptly.
      </p>
    ),
  },
  {
    id: 'submitting-grievance',
    heading: '2. Submitting a Grievance',
    content: (
      <div className="space-y-2">
        <p>To register a formal grievance regarding services, data protection, or copyright issues, please submit a written complaint containing:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Full Name, Contact Number, and Business Entity</li>
          <li>Detailed description of the grievance or disputed media content</li>
          <li>Relevant invoice number, project reference, or URL link</li>
          <li>Supporting documentary evidence</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'grievance-officer',
    heading: '3. Nodal Grievance Officer',
    content: (
      <div className="bg-slate-50 border border-gray-200 rounded-xl p-5 space-y-2 text-sm">
        <p className="font-semibold text-gray-900 text-base">Grievance Officer</p>
        <p className="text-gray-700">Khaira Digital Solutions Private Limited</p>
        <p className="text-gray-600">Prateek Laurel, Sector 120, Noida, Uttar Pradesh – 201301, India</p>
        <p className="text-gray-600">Official Email: <a href="mailto:admin@khairadigital.com" className="text-red-600 hover:underline font-medium">admin@khairadigital.com</a></p>
      </div>
    ),
  },
  {
    id: 'resolution-timeline',
    heading: '4. Response & Resolution Timeline',
    content: (
      <p>
        The Grievance Officer shall acknowledge receipt of the complaint within 24 hours and resolve the grievance within 15 business days from the date of receipt.
      </p>
    ),
  },
];

export default function GrievancePage() {
  return (
    <LegalPageLayout
      title="Grievance Redressal"
      subtitle="Official grievance submission process and contact details for Khaira Digital Solutions Private Limited."
      lastUpdated="August 2026"
      sections={sections}
    />
  );
}
