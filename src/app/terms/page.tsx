import type { Metadata } from "next";
import Link from "next/link";
import {
  LegalPageLayout,
  LegalSection,
  LegalBody,
  LegalList,
  LegalCallout,
} from "../../components/cinema/LegalPageLayout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing your access to and use of Kikoba, the simplified accounting platform for organized community and friend groups.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service | Kikoba",
    description:
      "Terms and conditions governing access, accounts, and use of Kikoba.",
    url: "/terms",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Kikoba",
    description:
      "Terms and conditions governing access, accounts, and use of Kikoba.",
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
      item: "https://kikobake.netlify.app",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Terms of Service",
      item: "https://kikobake.netlify.app/terms",
    },
  ],
};

const LAST_UPDATED = "July 30, 2026";

export default function TermsOfServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <LegalPageLayout
      title="Terms of Service"
      lastUpdated={LAST_UPDATED}
      intro={
        <>
          These Terms of Service (&quot;Terms&quot;) govern your access to and
          use of <strong className="text-ivory font-semibold">Kikoba</strong> (the
          &quot;Platform&quot;), a simplified accounting platform for
          organized community and friend groups. By creating an account or using the Platform, you
          agree to be bound by these Terms.
        </>
      }
    >
      <LegalSection number={1} title="Acceptance of Terms">
        <LegalBody>
          By accessing or using the Platform, you confirm that you have read,
          understood, and agree to these Terms and our{" "}
          <Link
            href="/privacy"
            className="text-ochre hover:text-[#d8b894] underline font-semibold transition-colors"
          >
            Privacy Policy
          </Link>
          . If you do not agree, you may not use the Platform.
        </LegalBody>
      </LegalSection>

      <LegalSection number={2} title="Description of Service">
        <LegalBody>
          Kikoba helps community groups track member contributions,
          manage loans, monitor repayments, and view group wealth over time. The
          Platform is a record-keeping and coordination tool for your group. It
          does not itself process, hold, lend, or guarantee any member&apos;s
          funds. Contributions, loan disbursements, and repayments happen
          entirely outside the Platform, through whatever method your group uses
          (cash, mobile money, bank transfer, or otherwise); your group&apos;s
          officials simply log those records on the Platform for transparency.
        </LegalBody>
      </LegalSection>

      <LegalSection number={3} title="Eligibility">
        <LegalList>
          <li>You must be at least 18 years old to create an account.</li>
          <li>
            You must provide accurate, current information when registering.
          </li>
          <li>
            Your group is responsible for lawfully governing its own
            membership, contribution, and lending rules.
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection number={4} title="Account Registration &amp; Security">
        <LegalList>
          <li>
            You are responsible for maintaining the confidentiality of your
            login credentials.
          </li>
          <li>
            You must notify us immediately of any unauthorized use of your
            account.
          </li>
          <li>
            We are not liable for losses caused by your failure to keep your
            credentials secure.
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection number={5} title="Group &amp; Member Roles">
        <LegalBody>
          Group officials (e.g. chairperson, treasurer, secretary) may be
          granted elevated permissions to record contributions, approve loans,
          or manage members within their group on the Platform. Each group is
          responsible for assigning these roles and for the actions its
          officials take through their accounts.
        </LegalBody>
      </LegalSection>

      <LegalSection
        number={6}
        title="Contributions, Loans &amp; Record-Keeping"
      >
        <LegalList>
          <li>
            The Platform is a record-keeping tool only. Contributions, loan
            disbursements, and repayments happen directly between members and
            your group, outside the Platform. We do not process, receive, or
            hold these funds at any point.
          </li>
          <li>
            Your group&apos;s officials (e.g. treasurer) are responsible for
            entering accurate contribution, loan, and repayment records into the
            Platform.
          </li>
          <li>
            Loan terms (interest, repayment schedule, penalties) are set by your
            group in accordance with its own rules, not by Kikoba.
          </li>
          <li>
            Kikoba does not guarantee the accuracy of member-entered records,
            loan repayment, contribution collection, or the availability of
            group funds.
          </li>
        </LegalList>
        <LegalCallout className="mt-6">
          <LegalBody className="mb-0 text-sm">
            Kikoba is a record-keeping and coordination tool, not a bank,
            payment processor, deposit-taking institution, or lender. We do not
            touch, hold, or move member funds at any point, and disputes over
            group funds between members should be resolved under your
            group&apos;s own governance rules.
          </LegalBody>
        </LegalCallout>
      </LegalSection>

      <LegalSection number={7} title="Fees">
        <LegalBody>
          Any subscription or service fees for using the Platform itself (not
          member contributions or loans) are set out on our{" "}
          <Link
            href="/#pricing"
            className="text-ochre hover:text-[#d8b894] underline font-semibold transition-colors"
          >
            Pricing
          </Link>{" "}
          page and are billed to your group, where applicable via M-Pesa. Fees
          are billed in advance and are non-refundable except where required by
          law.
        </LegalBody>
      </LegalSection>

      <LegalSection number={8} title="Prohibited Conduct">
        <LegalBody>You agree not to:</LegalBody>
        <LegalList>
          <li>
            Use the Platform for fraudulent, unlawful, or unauthorized financial
            activity
          </li>
          <li>
            Attempt to gain unauthorized access to another member&apos;s account
            or group data
          </li>
          <li>
            Interfere with or disrupt the security or integrity of the Platform
          </li>
          <li>Falsify contribution, loan, or repayment records</li>
        </LegalList>
      </LegalSection>

      <LegalSection number={9} title="Intellectual Property">
        <LegalBody>
          The Platform, including its software, design, and branding, is the
          property of Kikoba and its licensors. You may not copy, modify, or
          distribute any part of the Platform without our prior written consent.
        </LegalBody>
      </LegalSection>

      <LegalSection
        number={10}
        title="Disclaimers &amp; Limitation of Liability"
      >
        <LegalBody>
          The Platform is provided &quot;as is&quot; and &quot;as
          available&quot;, without warranties of any kind. To the fullest extent
          permitted by law, Kikoba is not liable for:
        </LegalBody>
        <LegalList>
          <li>
            Losses arising from disputes between group members over
            contributions or loans, or from inaccurate records entered by your
            group&apos;s officials
          </li>
          <li>
            Delays, failures, or errors originating from M-Pesa or other
            third-party services used for subscription billing
          </li>
          <li>
            Any indirect, incidental, or consequential damages arising from use
            of the Platform
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection number={11} title="Termination">
        <LegalBody>
          We may suspend or terminate your access to the Platform if you violate
          these Terms. You may stop using the Platform, or request account
          deletion, at any time via your profile settings or by contacting us.
        </LegalBody>
      </LegalSection>

      <LegalSection number={12} title="Governing Law">
        <LegalBody>
          These Terms are governed by the laws of Kenya, without regard to
          conflict of law principles. Any disputes arising from these Terms will
          be subject to the exclusive jurisdiction of the courts of Kenya.
        </LegalBody>
      </LegalSection>

      <LegalSection number={13} title="Changes to These Terms">
        <LegalBody>
          We may update these Terms from time to time. When we make material
          changes, we will update the &quot;Last updated&quot; date at the top
          of this page. Continued use of the Platform after any changes
          constitutes acceptance of the updated Terms.
        </LegalBody>
      </LegalSection>

      <LegalSection number={14} title="Contact Us">
        <LegalBody>
          If you have questions about these Terms, contact us:
        </LegalBody>
        <LegalCallout>
          <LegalBody className="mb-1">
            <strong className="text-ivory font-medium">Organization:</strong> Kikoba
          </LegalBody>
          <LegalBody className="mb-0">
            <strong className="text-ivory font-medium">Email:</strong>{" "}
            <a
              href="mailto:support@kikoba.co.ke"
              className="text-ochre hover:text-[#d8b894] underline font-semibold transition-colors"
            >
              support@kikoba.co.ke
            </a>
          </LegalBody>
        </LegalCallout>
      </LegalSection>
    </LegalPageLayout>
    </>
  );
}
