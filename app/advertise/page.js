import LegalPageLayout from '@/app/components/LegalPageLayout';

const sections = [
  {
    id: 'advertising-solutions',
    heading: '1. High-Impact Advertising Solutions',
    content: (
      <p>
        Accelerate your brand growth with custom ad video production and multi-channel campaign strategies by Khaira Digital Solutions Private Limited. We design high-converting visual ads tailored for Facebook, Instagram, YouTube, and digital broadcast channels.
      </p>
    ),
  },
  {
    id: 'ad-formats',
    heading: '2. Commercial Ad Formats Offered',
    content: (
      <div className="space-y-2">
        <p>Our ad production services include:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>2D & 3D Animated Ads:</strong> Eye-catching motion graphics and explainer videos.</li>
          <li><strong>Radio & FM Audio Ads:</strong> Broadcast-ready voiceovers recorded by RJ Mohit.</li>
          <li><strong>Social Media Video Creatives:</strong> Short-form vertical ads engineered for viral engagement.</li>
          <li><strong>Commercial Shoots:</strong> Professional on-location shoots with high-end camera gear.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'get-started-ad',
    heading: '3. Book an Ad Production Session',
    content: (
      <p>
        Ready to launch your next ad campaign? Contact our media strategists today at <a href="mailto:info@khairadigital.com" className="text-red-600 hover:underline font-medium">info@khairadigital.com</a>.
      </p>
    ),
  },
];

export default function AdvertisePage() {
  return (
    <LegalPageLayout
      title="Advertise With Us"
      subtitle="High-converting commercial ad video production, voiceover commercials, and digital ad strategy by Khaira Digital Solutions Private Limited."
      lastUpdated="August 2026"
      sections={sections}
    />
  );
}
