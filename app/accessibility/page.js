import LegalPageLayout from '@/app/components/LegalPageLayout';

const sections = [
  {
    id: 'accessibility-commitment',
    heading: '1. Our Accessibility Commitment',
    content: (
      <p>
        Khaira Digital Solutions Private Limited is committed to ensuring digital accessibility for people of all abilities. We continuously improve user experience across our digital web applications and media content by applying WCAG 2.1 AA accessibility guidelines.
      </p>
    ),
  },
  {
    id: 'accessibility-features',
    heading: '2. Implemented Accessibility Standards',
    content: (
      <div className="space-y-2">
        <p>Key digital accessibility enhancements on our site include:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>High color contrast ratios for dark and light UI components</li>
          <li>Keyboard navigation support and clear focus indicators</li>
          <li>Alt text descriptions for media graphics and logos</li>
          <li>Responsive font scaling across desktop and mobile screens</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'feedback-support',
    heading: '3. Accessibility Feedback & Assistance',
    content: (
      <p>
        We welcome your feedback on website accessibility. If you experience barriers while accessing any part of our website or services, please contact our team at <a href="mailto:info@khairadigital.com" className="text-red-400 hover:underline">info@khairadigital.com</a>.
      </p>
    ),
  },
];

export default function AccessibilityPage() {
  return (
    <LegalPageLayout
      title="Accessibility Statement"
      subtitle="Our commitment to inclusive digital design and accessibility standards at Khaira Digital Solutions Private Limited."
      lastUpdated="August 2026"
      sections={sections}
    />
  );
}
