import LegalPageLayout from '@/app/components/LegalPageLayout';

const sections = [
  {
    id: 'advertising-solutions',
    heading: '1. Technical Product & SaaS Marketing Solutions',
    content: (
      <p>
        Accelerate your software product adoption with custom developer marketing, SaaS user acquisition strategies, and technical product showcases by Khaira Digital Solutions Private Limited.
      </p>
    ),
  },
  {
    id: 'ad-formats',
    heading: '2. Tech Growth Services Offered',
    content: (
      <div className="space-y-2">
        <p>Our technical marketing services include:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Developer Product Demos:</strong> High-impact UI walkthroughs and developer onboarding documentation.</li>
          <li><strong>SaaS User Acquisition:</strong> Targeted digital campaigns designed for B2B decision makers.</li>
          <li><strong>SEO & Technical Content:</strong> High-ranking engineering blogs and technical documentation.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'get-started-ad',
    heading: '3. Partner With Our Engineering Team',
    content: (
      <p>
        Ready to scale your software product? Contact our technical growth strategists today at <a href="mailto:info@khairadigital.com" className="text-red-600 hover:underline font-medium">info@khairadigital.com</a>.
      </p>
    ),
  },
];

export default function AdvertisePage() {
  return (
    <LegalPageLayout
      title="Advertise & Grow Your Product"
      subtitle="High-converting SaaS user acquisition, technical product marketing, and developer outreach by Khaira Digital Solutions Private Limited."
      lastUpdated="August 2026"
      sections={sections}
    />
  );
}
