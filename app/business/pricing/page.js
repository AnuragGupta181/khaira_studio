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
        <div className="border border-gray-200 bg-slate-50/80 p-5 rounded-2xl">
          <h3 className="text-lg font-bold text-red-600">MVP Rapid Sprint (Concept-to-Code)</h3>
          <p className="text-xs text-gray-600 mt-1">Ideal for founders needing a production-ready MVP built fast.</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700">
            <li>Fullstack Web App (Next.js, Node.js/PostgreSQL)</li>
            <li>REST/GraphQL API Architecture & Authentication</li>
            <li>Vercel / AWS Cloud Deployment</li>
          </ul>
        </div>

        <div className="border border-red-200 bg-gradient-to-br from-red-50 to-pink-50 p-5 rounded-2xl shadow-sm">
          <h3 className="text-lg font-bold text-red-600">Growth & AI Stack Package</h3>
          <p className="text-xs text-gray-600 mt-1">Fullstack product development with fine-tuned AI models and scraping engines.</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700">
            <li>Custom LLM Fine-Tuning & RAG Vector Pipeline</li>
            <li>High-Scale Web Scraping & Data Extraction Cluster</li>
            <li>Cross-Platform Mobile App (iOS & Android)</li>
            <li>Dedicated Tech Lead & DevOps Manager</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 'custom-quote',
    heading: '3. Request an Enterprise Solution Quote',
    content: (
      <p>
        Need a custom engineering retainer, embedded IoT hardware integration, or multi-region Kubernetes cloud deployment? Email our team directly at <a href="mailto:info@khairadigital.com" className="text-red-600 hover:underline font-medium">info@khairadigital.com</a>.
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
