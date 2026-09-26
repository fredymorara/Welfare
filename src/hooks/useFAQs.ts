import { useEffect, useState } from "react";
import { API_URL } from "../config/api";

export const MOCK_FAQS: FAQItem[] = [
  {
    question: "What is Kikoba?",
    answer:
      "Kikoba is a digital platform for managing chamas, welfare groups, and savings associations. It helps your group track contributions, issue and repay loans, manage events and projects, log expenses, and keep every member informed.",
  },
  {
    question: "How do I register my group on Kikoba?",
    answer:
      "Click Get Started button at the top and follow the registration flow to create your group and your own admin account. Once registered, you can start adding members and configuring your group's contribution categories, loan types, and roles.",
  },
  {
    question: "How much does Kikoba cost?",
    answer:
      "Kikoba offers several subscription tiers priced per billing period, with limits on members and features that scale with your group's size. Visit the Pricing section for current package details, or check in-app under Subscription once you're logged in.",
  },
  {
    question: "Is my group's financial data secure on Kikoba?",
    answer:
      "Yes. Each group's data is isolated from every other group on the platform, access is controlled by roles and permissions, and all data is encrypted in transit. Only members you explicitly add to your group can see its records.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Selected subscription packages include a free trial period so you can explore Kikoba's features before committing to a paid plan. Trial availability and duration are shown on the package details when you sign up.",
  },
  {
    question: "Who approves loan requests?",
    answer:
      "An admin or appointed official reviews and approves loan requests directly in the platform. Once approved, automated reminders and repayment tracking keep everything on schedule.",
  },
  {
    question: "Can I manage more than one group?",
    answer:
      "Yes. If you belong to multiple groups, you can switch between them from a single account without logging in and out. Each group's records and permissions remain completely isolated.",
  },
];

// Hits WelfareAccountingBE's public GET /lookups/faqs?audience=public
export function useFAQs(): UseFAQsResult {
  const [faqs, setFaqs] = useState<FAQItem[]>(MOCK_FAQS);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch(`${API_URL}/lookups/faqs?audience=public`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setFaqs(Array.isArray(data) && data.length > 0 ? data : MOCK_FAQS);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.debug("API offline, utilizing fallback FAQ content:", err.message);
          setFaqs(MOCK_FAQS);
          setError(null);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return { faqs, loading, error };
}
