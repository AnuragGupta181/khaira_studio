import LegalPageLayout from '@/app/components/LegalPageLayout';

const sections = [
  {
    id: 'digital-marketing',
    heading: '1. Strategic Digital Marketing Services',
    content: (
      <p>
        Khaira Digital Solutions Private Limited provides end-to-end digital marketing solutions engineered to boost brand visibility, generate qualified leads, and maximize ROI across digital ecosystems.
      </p>
    ),
  },
  {
    id: 'marketing-pillars',
    heading: '2. Core Marketing Offerings',
    content: (
      <div className="space-y-2">
        <p>Our performance-driven services encompass:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Social Media Management & Ads:</strong> Target campaigns on Meta, Instagram, LinkedIn, and YouTube.</li>
          <li><strong>Search Engine Optimization (SEO):</strong> Organic ranking optimization for Google search.</li>
          <li><strong>Content Marketing & Scripting:</strong> Compelling brand narrative creation for videos & campaigns.</li>
          <li><strong>Brand Identity & Graphic Design:</strong> Logos, banners, brochures, and visual brand assets.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'marketing-consult',
    heading: '3. Request a Custom Strategy',
    content: (
      <p>
        Get a tailored digital marketing roadmap for your business. Connect with our team at <a href="mailto:info@khairadigital.com" className="text-blue-600 hover:underline">info@khairadigital.com</a>.
      </p>
    ),
  },
];

export default function MarketingPage() {
  return (
    <LegalPageLayout
      title="Marketing Solutions"
      subtitle="Performance digital marketing, SEO, social media ad management, and branding solutions by Khaira Digital Solutions Private Limited."
      lastUpdated="August 2026"
      sections={sections}
    />
  );
}
