declare global {
  interface FAQItem {
    question: string;
    answer: string;
    modules?: string[];
    displayOrder?: number;
  }

  interface UseFAQsResult {
    faqs: FAQItem[];
    loading: boolean;
    error: string | null;
  }
}

export {};
