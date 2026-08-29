import LegalPageLayout from '@/app/components/LegalPageLayout';

const sections = [
  {
    id: 'business-plans-overview',
    heading: '1. Engineering Packages & Engagement Tiers',
    content: (
      <p>
        Khaira Digital Solutions Private Limited offers flexible software engineering engagement models for startups, scaleups, and enterprise businesses requiring fullstack development, AI model fine-tuning, cloud DevOps, and embedded hardware integration.
      </p>
    ),
  },
  {
    id: 'service-tiers',
    heading: '2. Available Engineering Packages',
    content: (
      <div className="space-y-4">
        <div className="border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl shadow-sm">
          <h3 className="text-lg font-bold text-blue-600">MVP Rapid Sprint (Concept-to-Code)</h3>
          <p className="text-sm text-gray-600 mt-1">4-week end-to-end sprint delivering launch-ready fullstack web or mobile application MVP.</p>
        </div>

        <div className="border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl shadow-sm">
          <h3 className="text-lg font-bold text-blue-600">Growth & AI Stack Package</h3>
          <p className="text-sm text-gray-600 mt-1">LLM fine-tuning, RAG pipelines, automated web scraping clusters, and cloud DevOps deployment.</p>
        </div>
      </div>
    ),
  },
  {
    id: 'enterprise-quote',
    heading: '2. Enterprise Custom Engineering',
    content: (
      <p>
        Need a custom engineering retainer, embedded IoT hardware integration, or multi-region Kubernetes cloud deployment? Email our team directly at <a href="mailto:info@khairadigital.com" className="text-blue-600 hover:underline font-medium">info@khairadigital.com</a>.
      </p>
    ),
  },
];

export default function BusinessPricingPage() {
  return (
    <LegalPageLayout
      title="Engineering Plans & Pricing"
      subtitle="Tailored software development packages, AI engineering sprints, and enterprise retainers by Khaira Digital Solutions Private Limited."
      lastUpdated="August 2026"
      sections={sections}
    />
  );
}
