import LegalPageLayout from '@/app/components/LegalPageLayout';

const sections = [
  {
    id: 'business-plans-overview',
    heading: '1. Commercial Packages & Business Plans',
    content: (
      <p>
        Khaira Digital Solutions Private Limited offers flexible business service tiers designed to accommodate startups, growing businesses, and enterprise brands requiring ongoing voiceover, video production, graphic design, and marketing deliverables.
      </p>
    ),
  },
  {
    id: 'service-tiers',
    heading: '2. Available Service Packages',
    content: (
      <div className="space-y-4">
        <div className="border border-gray-200 bg-slate-50/80 p-5 rounded-2xl">
          <h3 className="text-lg font-bold text-red-600">Starter Business Package</h3>
          <p className="text-xs text-gray-600 mt-1">Ideal for small businesses needing foundational branding assets.</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700">
            <li>2 Promotional Ad Videos per month</li>
            <li>Voiceover recordings in Hindi/English</li>
            <li>Basic Social Media Banner Designs</li>
          </ul>
        </div>

        <div className="border border-red-200 bg-gradient-to-br from-red-50 to-pink-50 p-5 rounded-2xl shadow-sm">
          <h3 className="text-lg font-bold text-red-600">Growth & Performance Package</h3>
          <p className="text-xs text-gray-600 mt-1">Full-service digital media production and ad management.</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700">
            <li>5 Commercial Ad Video Cuts + Reels</li>
            <li>Multi-lingual Dubbing & Studio Voiceovers</li>
            <li>Meta & Google Ad Campaign Management</li>
            <li>Dedicated Account Manager</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 'custom-quote',
    heading: '3. Request an Enterprise Custom Quote',
    content: (
      <p>
        Need a customized monthly media retainer or custom project scope? Speak with our team directly by email at <a href="mailto:info@khairadigital.com" className="text-red-600 hover:underline font-medium">info@khairadigital.com</a>.
      </p>
    ),
  },
];

export default function BusinessPricingPage() {
  return (
    <LegalPageLayout
      title="Business Plans"
      subtitle="Tailored commercial media packages, retainers, and business plans by Khaira Digital Solutions Private Limited."
      lastUpdated="August 2026"
      sections={sections}
    />
  );
}
