"use client";

import { create } from "zustand";

export type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  caption?: string;
  /** Operational readout shown at the cursor inside the fullscreen viewer. */
  spec?: {
    label: string;
    value: string;
  }[];
};

type MmcpState = {
  grainOn: boolean;
  toggleGrain: () => void;

  viewerOpen: boolean;
  viewerItems: GalleryItem[];
  viewerIndex: number;
  openViewer: (items: GalleryItem[], index: number) => void;
  closeViewer: () => void;
  nextViewer: () => void;
  prevViewer: () => void;
};

export const useMmcp = create<MmcpState>((set, get) => ({
  grainOn: true,
  toggleGrain: () => set((s) => ({ grainOn: !s.grainOn })),

  viewerOpen: false,
  viewerItems: [],
  viewerIndex: 0,
  openViewer: (items, index) =>
    set({ viewerOpen: true, viewerItems: items, viewerIndex: index }),
  closeViewer: () => set({ viewerOpen: false }),
  nextViewer: () => {
    const { viewerItems, viewerIndex } = get();
    if (viewerItems.length === 0) return;
    set({ viewerIndex: (viewerIndex + 1) % viewerItems.length });
  },
  prevViewer: () => {
    const { viewerItems, viewerIndex } = get();
    if (viewerItems.length === 0) return;
    set({
      viewerIndex:
        (viewerIndex - 1 + viewerItems.length) % viewerItems.length,
    });
  },
}));
