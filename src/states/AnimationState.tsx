import { create } from 'zustand';

type AnimationState = {
    animatedCards: Record<string, boolean>;
    markAsAnimated: (cardId: string) => void;
};

export const useAnimationStore = create<AnimationState>((set) => ({
    animatedCards: {},
    markAsAnimated: (cardId) =>
        set((state) => ({
            animatedCards: { ...state.animatedCards, [cardId]: true }
        })),
}));