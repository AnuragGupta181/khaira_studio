import LegalPageLayout from '@/app/components/LegalPageLayout';

const sections = [
  {
    id: 'abuse-policy',
    heading: '1. Zero Tolerance Abuse Policy',
    content: (
      <p>
        Khaira Digital Solutions Private Limited maintains a strict zero-tolerance policy against copyright infringement, unauthorized use of intellectual property, fraudulent impersonation, spam, or abusive communications across all official channels.
      </p>
    ),
  },
  {
    id: 'reporting-procedure',
    heading: '2. How to Report an Incident',
    content: (
      <div className="space-y-2">
        <p>If you encounter unauthorized usage of your copyrighted content or abusive behavior involving our brand:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Email our security team at <a href="mailto:admin@khairadigital.com" className="text-red-400 hover:underline">admin@khairadigital.com</a></li>
          <li>Include link/URL to the reported material or communications</li>
          <li>Provide proof of ownership or authorization if filing a copyright (DMCA) claim</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'investigation-action',
    heading: '3. Investigation & Resolution',
    content: (
      <p>
        Our security team investigates all valid reports within 48 hours and takes immediate corrective action, including removal of infringing assets, account suspension, or legal notification to authorities.
      </p>
    ),
  },
];

export default function ReportAbusePage() {
  return (
    <LegalPageLayout
      title="Report Abuse"
      subtitle="Report copyright infringement, security concerns, or abusive behavior to Khaira Digital Solutions Private Limited."
      lastUpdated="August 2026"
      sections={sections}
    />
  );
}
