import { create } from "zustand";

interface FileStore {
    previewUrl: string | null;
    selectedFile: File | null;
    setFile: (file: File) => void;
    removeFile: () => void;
}

export const useFileStore = create<FileStore>((set) => ({
    previewUrl: null,
    selectedFile: null,
    setFile: (file) => {
        const reader = new FileReader();

        reader.onload = () => {
        set({ previewUrl: reader.result as string, selectedFile: file });
        };

        reader.readAsDataURL(file);
    },
    removeFile: () => set({ previewUrl: null, selectedFile: null })
}));