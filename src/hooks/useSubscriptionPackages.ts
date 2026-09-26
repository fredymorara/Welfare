import { useEffect, useState } from "react";
import { API_URL } from "../config/api";

export const MOCK_PACKAGES: SubPackage[] = [
  {
    _id: "pkg_1",
    name: "Starter",
    code: "STARTER",
    description: "Perfect for small community or friend groups just getting started.",
    currency: "KES",
    isTrial: false,
    pricingTiers: [
      { period: "monthly", price: 0 },
      { period: "annual", price: 0 },
    ],
    features: {
      users: { limit: 10, additionalCharge: 0 },
      loans: { available: false },
      expenses: { available: true },
      events: { available: false, maxEvents: 0, additionalCharge: 0 },
      projects: { available: false, maxProjects: 0, additionalCharge: 0 },
      notifications: {
        emails: { available: true, limitPerMonth: 50, additionalCharge: 0 },
        sms: { available: false, limitPerMonth: 0, additionalCharge: 0 },
        inApp: { available: true },
      },
    },
  },
  {
    _id: "pkg_2",
    name: "Standard",
    code: "STANDARD",
    description: "Everything a growing community group needs to thrive.",
    currency: "KES",
    isTrial: true,
    trialDurationDays: 14,
    pricingTiers: [
      { period: "monthly", price: 1500 },
      { period: "annual", price: 15000, discount: 16 },
    ],
    features: {
      users: { limit: 50, additionalCharge: 0 },
      loans: { available: true },
      expenses: { available: true },
      events: { available: true, maxEvents: 5, additionalCharge: 0 },
      projects: { available: true, maxProjects: 2, additionalCharge: 0 },
      notifications: {
        emails: { available: true, limitPerMonth: 500, additionalCharge: 0 },
        sms: { available: true, limitPerMonth: 100, additionalCharge: 0 },
        inApp: { available: true },
      },
    },
  },
  {
    _id: "pkg_3",
    name: "Premium",
    code: "PREMIUM",
    description: "Advanced tools for large cooperative societies and SACCOs.",
    currency: "KES",
    isTrial: false,
    pricingTiers: [
      { period: "monthly", price: 5000 },
      { period: "annual", price: 50000, discount: 16 },
    ],
    features: {
      users: { limit: 200, additionalCharge: 0 },
      loans: { available: true },
      expenses: { available: true },
      events: { available: true, maxEvents: 20, additionalCharge: 0 },
      projects: { available: true, maxProjects: 10, additionalCharge: 0 },
      notifications: {
        emails: { available: true, limitPerMonth: 5000, additionalCharge: 0 },
        sms: { available: true, limitPerMonth: 1000, additionalCharge: 0 },
        inApp: { available: true },
      },
    },
  },
];

// Hits WelfareAccountingBE's public GET /lookups/subscriptions
export function useSubscriptionPackages(): UseSubscriptionPackagesResult {
  const [packages, setPackages] = useState<SubPackage[]>(MOCK_PACKAGES);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch(`${API_URL}/lookups/subscriptions`, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setPackages(data);
        } else {
          setPackages(MOCK_PACKAGES);
        }
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.debug("API offline, utilizing default plans:", err.message);
          setPackages(MOCK_PACKAGES);
          setError(null);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return { packages, loading, error };
}
