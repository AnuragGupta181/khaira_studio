import LegalPageLayout from '@/app/components/LegalPageLayout';

const sections = [
  {
    id: 'consultancy-overview',
    heading: '1. Software & Technical Architecture Consultancy',
    content: (
      <p>
        Accelerate your engineering roadmap with specialized technical consultancy from senior software architects and AI engineers at Khaira Digital Solutions Private Limited.
      </p>
    ),
  },
  {
    id: 'consultancy-scope',
    heading: '2. Areas of Technical Expertise',
    content: (
      <div className="space-y-2">
        <p>Our technical consultancy programs cover:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Fullstack & Microservices Architecture:</strong> System design, API security, database schema design, and load balancing.</li>
          <li><strong>LLM Fine-Tuning & AI Strategy:</strong> Model selection, RAG pipeline design, vector databases, and prompt engineering frameworks.</li>
          <li><strong>Cloud & DevOps Optimization:</strong> AWS/GCP infrastructure reviews, Kubernetes cost optimization, and automated CI/CD pipelines.</li>
          <li><strong>Embedded Systems & Hardware Telemetry:</strong> Microcontroller firmware architecture (ESP32, ARM) and IoT cloud integrations.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'book-consultation',
    heading: '3. Schedule an Engineering Consultation',
    content: (
      <p>
        Schedule a 1-on-1 architecture review session with our engineering leads by emailing <a href="mailto:info@khairadigital.com" className="text-blue-600 hover:underline font-medium">info@khairadigital.com</a>.
      </p>
    ),
  },
];

export default function ConsultancyPage() {
  return (
    <LegalPageLayout
      title="Technical & AI Consultancy"
      subtitle="Strategic software architecture, AI model fine-tuning, cloud DevOps, and embedded systems consultancy by Khaira Digital Solutions Private Limited."
      lastUpdated="August 2026"
      sections={sections}
    />
  );
}
