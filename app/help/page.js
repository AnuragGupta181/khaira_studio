import LegalPageLayout from '@/app/components/LegalPageLayout';

const sections = [
  {
    id: 'getting-started',
    heading: '1. Getting Started with Developer Solutions',
    content: (
      <p>
        Khaira Digital Solutions Private Limited provides end-to-end fullstack product development, AI model fine-tuning, web scraping, cloud deployment, and embedded hardware integration. You can kickstart a project by scheduling an engineering consultation or contacting us.
      </p>
    ),
  },
  {
    id: 'engineering-process',
    heading: '2. Fullstack Development & Concept-to-Code (C-to-C)',
    content: (
      <div className="space-y-2">
        <p>Our agile software engineering workflow includes:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Architecture & Requirements:</strong> Technical blueprinting, database schema design, and API planning.</li>
          <li><strong>Rapid MVP Sprint:</strong> Concept-to-Code prototyping with modern frameworks (React, Next.js, Node.js, FastAPI).</li>
          <li><strong>Quality Assurance:</strong> Unit testing, security vulnerability scanning, and performance optimization.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'ai-cloud-hardware',
    heading: '3. AI Fine-Tuning, Cloud & Embedded Systems',
    content: (
      <p>
        We build custom fine-tuned LLM pipelines (RAG, Llama 3), automated web scraping clusters, AWS/GCP cloud deployments (Docker, Kubernetes), and embedded IoT firmware (ESP32, C++). Full source code ownership and documentation are delivered upon project completion.
      </p>
    ),
  },
  {
    id: 'billing-support',
    heading: '4. Billing & Invoicing FAQs',
    content: (
      <p>
        Invoices are generated upon milestone confirmation with full GST tax details. Corporate payment modes include bank wire transfer, UPI, or corporate card. For billing support, email <a href="mailto:info@khairadigital.com" className="text-red-600 hover:underline font-medium">info@khairadigital.com</a>.
      </p>
    ),
  },
];

export default function HelpPage() {
  return (
    <LegalPageLayout
      title="Help Center"
      subtitle="Frequently asked questions and support guide for software engineering & AI services by Khaira Digital Solutions Private Limited."
      lastUpdated="August 2026"
      sections={sections}
    />
  );
}
