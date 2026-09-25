declare global {
  type SubscriptionPeriod = "monthly" | "quarterly" | "semi_annual" | "annual";

  interface SubPackageTier {
    period: SubscriptionPeriod;
    price: number;
    discount?: number;
  }

  interface SubscriptionFeatures {
    users: { limit: number; additionalCharge: number };
    loans: { available: boolean };
    expenses: { available: boolean };
    events: { available: boolean; maxEvents: number; additionalCharge: number };
    projects: { available: boolean; maxProjects: number; additionalCharge: number };
    notifications: {
      emails: { available: boolean; limitPerMonth: number; additionalCharge: number };
      sms: { available: boolean; limitPerMonth: number; additionalCharge: number };
      inApp: { available: boolean };
    };
  }

  interface SubPackage {
    _id: string;
    name: string;
    code: string;
    description: string;
    currency: string;
    pricingTiers: SubPackageTier[];
    features: SubscriptionFeatures;
    isTrial: boolean;
    trialDurationDays?: number;
  }

  interface UseSubscriptionPackagesResult {
    packages: SubPackage[];
    loading: boolean;
    error: string | null;
  }
}

export {};
