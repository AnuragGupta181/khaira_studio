import LegalPageLayout from '@/app/components/LegalPageLayout';

const sections = [
  {
    id: 'cancellation-policy',
    heading: '1. Project Cancellation Policy',
    content: (
      <p>
        Clients may request project cancellation prior to commencement of active production (e.g., scriptwriting, studio recording, or video editing). Upon written cancellation request, advance deposits may be refunded after deducting initial setup costs or administrative fees incurred.
      </p>
    ),
  },
  {
    id: 'refund-eligibility',
    heading: '2. Refund Terms & Conditions',
    content: (
      <div className="space-y-2">
        <p>Refund eligibility for commercial media packages is determined as follows:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Pre-Production Stage:</strong> 80% refund if cancelled before voiceover or video editing begins.</li>
          <li><strong>In-Production Stage:</strong> Partial refund evaluated based on completed work percentage.</li>
          <li><strong>Post-Delivery / Completed Projects:</strong> No refunds are issued once final high-resolution master files or raw media deliverables have been handed over.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'revision-process',
    heading: '3. Revisions & Quality Assurance',
    content: (
      <p>
        If deliverables do not meet agreed specification milestones, clients are entitled to included revision cycles to adjust audio tone, video cuts, or graphic elements before requesting final sign-off.
      </p>
    ),
  },
  {
    id: 'refund-processing-time',
    heading: '4. Refund Processing Window',
    content: (
      <p>
        Approved refunds will be processed via bank transfer or original payment method within 7 to 10 business days from the date of formal approval.
      </p>
    ),
  },
];

export default function RefundPolicyPage() {
  return (
    <LegalPageLayout
      title="Refund & Cancellation Policy"
      subtitle="Fair policies regarding project cancellations, refunds, and revision cycles at Khaira Digital Solutions Private Limited."
      lastUpdated="August 2026"
      sections={sections}
    />
  );
}
