import LegalPageLayout from '@/app/components/LegalPageLayout';

const sections = [
  {
    id: 'what-are-cookies',
    heading: '1. What Are Cookies?',
    content: (
      <p>
        Cookies are small text files stored on your computer or mobile device when you visit our website. They help us enhance website performance, remember user preferences, analyze traffic trends, and optimize digital ad campaigns.
      </p>
    ),
  },
  {
    id: 'types-of-cookies',
    heading: '2. Types of Cookies We Use',
    content: (
      <div className="space-y-2">
        <p>We utilize the following cookie categories:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Essential Cookies:</strong> Critical for navigation, page loads, and secure logins.</li>
          <li><strong>Analytics Cookies:</strong> Help us understand visitor engagement, popular portfolio items, and traffic sources (e.g., Google Analytics).</li>
          <li><strong>Functional Cookies:</strong> Remember your preferred language or form auto-fills.</li>
          <li><strong>Marketing Cookies:</strong> Used to display relevant ad campaigns across social platforms.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'managing-cookies',
    heading: '3. Managing & Disabling Cookies',
    content: (
      <p>
        You can control or disable cookies via your browser settings at any time. Please note that disabling essential cookies may impact certain interactive features on our website.
      </p>
    ),
  },
];

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout
      title="Cookie Policy"
      subtitle="Information on how cookies and browser tracking technologies are utilized by Khaira Digital Solutions Private Limited."
      lastUpdated="August 2026"
      sections={sections}
    />
  );
}
