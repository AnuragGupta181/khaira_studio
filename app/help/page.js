import LegalPageLayout from '@/app/components/LegalPageLayout';

const sections = [
  {
    id: 'getting-started',
    heading: '1. Getting Started with Our Services',
    content: (
      <p>
        Khaira Digital Solutions Private Limited offers end-to-end commercial voiceover, video production, graphic design, and digital marketing services. You can kickstart a project by contacting our client desk or filling out the inquiry form on our contact page.
      </p>
    ),
  },
  {
    id: 'voiceover-dubbing',
    heading: '2. Voiceover & Dubbing Inquiries',
    content: (
      <div className="space-y-2">
        <p>Our studio team led by RJ Mohit (Akashwani Radio) produces professional voiceovers in multiple Indian and international languages:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Send us your script or request scriptwriting assistance</li>
          <li>Choose voice tone, language dialect, and background music preferences</li>
          <li>Receive studio-recorded sample clips before final master rendering</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'video-editing-ads',
    heading: '3. Ad Video Production & Editing',
    content: (
      <p>
        We produce high-converting commercial shoots, 2D/3D animation ads, social media video cuts (Instagram Reels, YouTube Shorts), and promotional corporate films. You can upload raw footage or request a complete shoot from our crew.
      </p>
    ),
  },
  {
    id: 'billing-support',
    heading: '4. Billing & Invoicing FAQs',
    content: (
      <p>
        Invoices are generated upon project confirmation with complete GST details. Payment can be processed through bank transfer, UPI, or corporate credit card. For billing inquiries, email <a href="mailto:info@khairadigital.com" className="text-red-400 hover:underline">info@khairadigital.com</a>.
      </p>
    ),
  },
];

export default function HelpPage() {
  return (
    <LegalPageLayout
      title="Help Center"
      subtitle="Frequently asked questions and support guide for Khaira Digital Solutions Private Limited."
      lastUpdated="August 2026"
      sections={sections}
    />
  );
}
