import { useEffect, useState } from "react";
import { API_URL } from "../config/api";

export const MOCK_FAQS: FAQItem[] = [
  {
    question: "Is there a free trial?",
    answer:
      "Select plans include a 14-day free trial so you can run Kikoba with your group before committing to a paid plan. No credit card required.",
  },
  {
    question: "How does M-Pesa integration work?",
    answer:
      "Kikoba connects directly to Safaricom's STK Push API. When a member makes a contribution, the payment hits the group's Kikoba ledger within seconds — no screenshots, no WhatsApp receipts.",
  },
  {
    question: "Who approves loan requests?",
    answer:
      "An admin you appoint reviews and approves loan requests in the app. Once approved, automated reminders and late-penalty calculations keep repayments on track without treasurer involvement.",
  },
  {
    question: "Can I manage more than one group?",
    answer:
      "Yes. If you belong to multiple chamas or vikoba, you can switch between them from a single account without logging out. Each group's ledger is completely isolated.",
  },
  {
    question: "Is every transaction permanently recorded?",
    answer:
      "Every contribution, loan disbursement, repayment, fine, and dividend is tied to an immutable transaction record. Nothing moves without a timestamped trail every member can audit.",
  },
  {
    question: "What happens when a cycle ends?",
    answer:
      "At cycle close, Kikoba automatically calculates loan interest, member fines, net pool balance, and each member's dividend — then generates a full PDF report. Payouts can be dispatched directly to M-Pesa.",
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
          console.warn("Failed to load FAQs from API, using fallback content.", err.message);
          setFaqs(MOCK_FAQS);
          setError(null);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return { faqs, loading, error };
}
