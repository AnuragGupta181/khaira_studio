import LegalPageLayout from '@/app/components/LegalPageLayout';

const sections = [
  {
    id: 'consultancy-overview',
    heading: '1. Media & Branding Consultancy',
    content: (
      <p>
        Transform your brand presence with specialized strategic consultancy from industry expert RJ Mohit (Akashwani Radio) and the production team at Khaira Digital Solutions Private Limited.
      </p>
    ),
  },
  {
    id: 'consultancy-scope',
    heading: '2. Areas of Expertise',
    content: (
      <div className="space-y-2">
        <p>Our consultancy programs cover:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Broadcast & Radio Voice Training:</strong> Diction, modulation, and vocal performance coaching.</li>
          <li><strong>Media Production Strategy:</strong> Equipment selection, acoustic studio setup, and post-production workflows.</li>
          <li><strong>Corporate Brand Positioning:</strong> Brand voice development and audience targeting frameworks.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'book-consultation',
    heading: '3. Schedule a Consultation Session',
    content: (
      <p>
        Schedule a 1-on-1 strategic consultation session by emailing <a href="mailto:info@khairadigital.com" className="text-red-600 hover:underline font-medium">info@khairadigital.com</a>.
      </p>
    ),
  },
];

export default function ConsultancyPage() {
  return (
    <LegalPageLayout
      title="Consultancy Plans"
      subtitle="Expert media production, voice modulation, and digital branding consultancy by Khaira Digital Solutions Private Limited."
      lastUpdated="August 2026"
      sections={sections}
    />
  );
}
