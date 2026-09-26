import type { Metadata } from "next";
import {
  LegalLayout,
  LegalSection,
  LegalH3,
  LegalBody,
  LegalList,
  LegalCallout,
} from "../../components/layout";
import { SITE_CONFIG } from "../../config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Kikoba collects, uses, and protects your personal and financial information when you use our simplified accounting platform for organized community and friend groups.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | Kikoba",
    description:
      "How Kikoba protects member financial data, group ledgers, and privacy.",
    url: "/privacy",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Kikoba",
    description:
      "How Kikoba protects member financial data, group ledgers, and privacy.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_CONFIG.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Privacy Policy",
      item: `${SITE_CONFIG.url}/privacy`,
    },
  ],
};

const LAST_UPDATED = SITE_CONFIG.legalLastUpdated;

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <LegalLayout
      title="Privacy Policy"
      lastUpdated={LAST_UPDATED}
      intro={
        <>
          This Privacy Policy describes how <strong className="text-ivory font-semibold">Kikoba</strong>{" "}
          (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses,
          stores, and protects your personal information when you use our
          simplified accounting platform (the &quot;Platform&quot;). By
          accessing or using the Platform, you agree to the practices
          described in this policy.
        </>
      }
    >
      <LegalSection number={1} title="Information We Collect">
        <LegalH3>1.1 Personal Identification Information</LegalH3>
        <LegalBody>
          When you register as a member of a group on the Platform,
          we collect:
        </LegalBody>
        <LegalList>
          <li>Full name</li>
          <li>Email address and phone number</li>
          <li>National ID number, where required by your group for member verification</li>
          <li>Profile photograph (optional, uploaded by you)</li>
        </LegalList>

        <LegalH3>1.2 Financial Information</LegalH3>
        <LegalBody>
          The Platform is a record-keeping tool: it does not process or
          receive any contribution or loan payments itself. Your group&apos;s
          officials log the following into the Platform for transparency:
        </LegalBody>
        <LegalList>
          <li>Contribution records (amounts due, amounts paid, due dates)</li>
          <li>Loan records (amounts, interest rates, repayment schedules, disbursements, outstanding balances)</li>
          <li>Payment reference notes your group records for its own purposes (e.g. a receipt number or M-Pesa code), where it chooses to record one</li>
          <li>Penalty records for late or missed payments</li>
          <li>Group wealth and growth records visible to your group</li>
        </LegalList>

        <LegalH3>1.3 Activity &amp; Participation Data</LegalH3>
        <LegalList>
          <li>Meeting and event attendance</li>
          <li>Your role within the group (e.g. member, treasurer, chairperson)</li>
          <li>Approval actions you perform or that apply to your records</li>
          <li>Notifications sent to or triggered by your account</li>
        </LegalList>

        <LegalH3>1.4 Usage &amp; Account Data</LegalH3>
        <LegalList>
          <li>Last login date and time</li>
          <li>Account verification status</li>
          <li>Session information for keeping you logged in</li>
        </LegalList>
      </LegalSection>

      <LegalSection number={2} title="How We Use Your Information">
        <LegalBody>
          We use the information we collect solely to provide and improve the
          Platform&apos;s services:
        </LegalBody>
        <LegalList>
          <li>To create and manage your member account within your group</li>
          <li>To track and process your contributions, loans, and repayments</li>
          <li>To generate financial reports and dashboards for your group&apos;s officials</li>
          <li>To send you notifications (e.g. payment confirmations, loan disbursements, meeting reminders) via SMS, email, or in-app push</li>
          <li>To enforce account security, including verification and password management</li>
          <li>To maintain audit trails for group governance and accountability</li>
          <li>To comply with legitimate legal and regulatory obligations</li>
        </LegalList>
      </LegalSection>

      <LegalSection number={3} title="Legal Basis for Processing">
        <LegalBody>
          Where the Kenya Data Protection Act, 2019, or other applicable data
          protection law applies, we process your personal data on the
          following bases:
        </LegalBody>
        <LegalList>
          <li><strong className="text-ivory font-medium">Contractual necessity</strong>: to fulfil our obligations to you as a registered member of your group.</li>
          <li><strong className="text-ivory font-medium">Legitimate interests</strong>: to operate, secure, and improve the Platform, and to maintain accurate financial records for your group.</li>
          <li><strong className="text-ivory font-medium">Consent</strong>: where you have explicitly provided it (e.g. uploading a profile photo, enabling push notifications).</li>
          <li><strong className="text-ivory font-medium">Legal obligation</strong>: where processing is required by applicable law or regulatory requirements.</li>
        </LegalList>
      </LegalSection>

      <LegalSection number={4} title="Data Sharing &amp; Third-Party Services">
        <LegalBody>
          We do not sell or rent your personal information. We share data
          only with the service providers necessary to operate the Platform:
        </LegalBody>
        
        <div className="flex flex-col gap-5 mt-6">
          <LegalCallout>
            <h4 className="text-ivory text-base font-bold">Safaricom M-Pesa</h4>
            <LegalBody className="mb-0 text-sm">
              We do not process member contributions, loans, or repayments
              through M-Pesa or any other payment processor. Those are
              recorded on the Platform, not processed by it. Where your group
              has a paid subscription to Kikoba, that subscription fee
              may be collected through Safaricom&apos;s M-Pesa payment
              infrastructure; Safaricom&apos;s own privacy policy applies to
              that transaction.
            </LegalBody>
          </LegalCallout>

          <LegalCallout>
            <h4 className="text-ivory text-base font-bold">SMS &amp; Email Providers</h4>
            <LegalBody className="mb-0 text-sm">
              We use SMS and email providers to deliver account messages,
              verification codes, and payment or loan notifications. Your
              phone number or email address is shared with these providers
              solely for message delivery.
            </LegalBody>
          </LegalCallout>

          <LegalCallout>
            <h4 className="text-ivory text-base font-bold">Cloud Hosting</h4>
            <LegalBody className="mb-0 text-sm">
              Your account and group data is stored with our cloud
              infrastructure providers, who process data only on our
              instructions.
            </LegalBody>
          </LegalCallout>
        </div>
      </LegalSection>

      <LegalSection number={5} title="Data Security">
        <LegalBody>
          We implement measures to protect your personal and financial data:
        </LegalBody>
        <LegalList>
          <li>Passwords are never stored in plaintext and cannot be recovered by anyone, including administrators</li>
          <li>Login sessions expire automatically to reduce risk if a device is compromised</li>
          <li>Connections to the Platform are encrypted in transit</li>
          <li>Your group&apos;s financial data is accessible only to authorized members and group officials</li>
        </LegalList>
        <LegalBody>
          No method of transmission over the internet is 100% secure. We
          encourage you to use a strong, unique password and keep your login
          credentials confidential.
        </LegalBody>
      </LegalSection>

      <LegalSection number={6} title="Data Retention">
        <LegalBody>
          We retain your personal data for as long as your membership is
          active or as needed to provide the Platform&apos;s services.
          Financial records (contributions, loans, repayments) are retained
          for the period required to fulfil your group&apos;s governance and
          audit obligations.
        </LegalBody>
        <LegalBody>
          When you request account deletion, your account is deactivated
          after email confirmation. Your financial history may be retained in
          anonymized form to preserve your group&apos;s record integrity. You
          may contact us to request permanent erasure of your personal
          information.
        </LegalBody>
      </LegalSection>

      <LegalSection number={7} title="Your Rights">
        <LegalBody>
          Depending on your jurisdiction, you may have the following rights
          over your personal data:
        </LegalBody>
        <LegalList>
          <li><strong className="text-ivory font-medium">Access</strong>: request a copy of the personal data we hold about you</li>
          <li><strong className="text-ivory font-medium">Rectification</strong>: correct inaccurate personal information</li>
          <li><strong className="text-ivory font-medium">Erasure</strong>: request deletion of your account and associated personal data</li>
          <li><strong className="text-ivory font-medium">Restriction</strong>: request that we limit processing of your data in certain circumstances</li>
          <li><strong className="text-ivory font-medium">Portability</strong>: request your data in a structured, machine-readable format</li>
          <li><strong className="text-ivory font-medium">Objection</strong>: object to processing based on our legitimate interests</li>
          <li><strong className="text-ivory font-medium">Withdrawal of consent</strong>: withdraw consent you previously gave</li>
        </LegalList>
        <LegalBody>
          To exercise any of these rights, contact us using the details in
          Section 10. In Kenya, you may also lodge a complaint with the
          Office of the Data Protection Commissioner (ODPC).
        </LegalBody>
      </LegalSection>

      <LegalSection number={8} title="Cookies &amp; Session Management">
        <LegalBody>
          The Platform uses essential cookies to keep you logged in and
          maintain your session. These cookies are not used for advertising
          or tracking.
        </LegalBody>
        <LegalBody>
          Your session expires automatically after a period of inactivity for
          your security. You may clear cookies at any time through your
          browser settings, which will log you out of the Platform.
        </LegalBody>
      </LegalSection>

      <LegalSection number={9} title="Children's Privacy">
        <LegalBody>
          The Platform is not intended for use by individuals under the age
          of 18. We do not knowingly collect personal data from minors. If
          you believe we have inadvertently collected data from a minor,
          please contact us so we can delete it.
        </LegalBody>
      </LegalSection>

      <LegalSection number={10} title="Contact Us">
        <LegalBody>
          If you have questions about this Privacy Policy or wish to exercise
          your data rights, contact us:
        </LegalBody>
        <LegalCallout>
          <LegalBody className="mb-1">
            <strong className="text-ivory font-medium">Organization:</strong> Kikoba
          </LegalBody>
          <LegalBody className="mb-0">
            <strong className="text-ivory font-medium">Email:</strong>{" "}
            <a
              href={`mailto:${SITE_CONFIG.supportEmail}`}
              className="text-ochre hover:text-[#d8b894] underline font-semibold transition-colors"
            >
              {SITE_CONFIG.supportEmail}
            </a>
          </LegalBody>
        </LegalCallout>
      </LegalSection>

      <LegalSection number={11} title="Changes to This Policy">
        <LegalBody>
          We may update this Privacy Policy from time to time to reflect
          changes in our practices, technology, or legal requirements. When we
          make material changes, we will update the &quot;Last updated&quot;
          date at the top of this page. Continued use of the Platform after
          any changes constitutes acceptance of the updated policy.
        </LegalBody>
      </LegalSection>
    </LegalLayout>
    </>
  );
}
