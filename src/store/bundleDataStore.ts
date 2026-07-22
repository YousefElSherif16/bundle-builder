import { create } from "zustand";
import type { Step } from "@/types/Step";

interface BundleDataState {
    steps: Step[];
    loading: boolean;
    hasFetched: boolean;
    error: string | null;
    fetchBundleData: () => Promise<void>;
}

export const useBundleDataStore = create<BundleDataState>((set, get) => ({
    steps: [],
    loading: false,
    hasFetched: false,
    error: null,

    fetchBundleData: async () => {
        const { loading, hasFetched } = get();

        if (loading || hasFetched) {
            return;
        }

        set({ loading: true, error: null });

        try {
            const response = await fetch("/api/steps");

            if (!response.ok) {
                throw new Error(`Unable to fetch bundle data (${response.status})`);
            }

            const steps = (await response.json()) as Step[];

            set({ steps, loading: false, hasFetched: true });
        } catch {
            set({
                loading: false,
                hasFetched: false,
                error: "Failed to load bundle data from API.",
            });
        }
    },
}));