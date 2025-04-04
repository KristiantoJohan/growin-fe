import { useState, useRef } from "react";
import { useFileStore } from "@/states/useFileStore";
import { UseFormSetValue, UseFormWatch } from "react-hook-form";
import { toast } from "./use-toast";
import { TriangleAlert } from "lucide-react";

interface UseFileUploadProps {
    name: string;
    setValue: UseFormSetValue<any>;
    watch: UseFormWatch<any>;

    /**
     * Optional accepted MIME type prefix, e.g. "image/", "application/pdf"
     */
    acceptedType?: string;

    /**
     * Custom error message when file type doesn't match
     */
    invalidTypeMessage?: string;
}

export function useFileUpload({ name, setValue, watch }: UseFileUploadProps) {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const imageRef = useRef<HTMLInputElement>(null);

    const [documentPreview, setDocumentPreview] = useState<string | null>(null);
    const documentRef = useRef<HTMLInputElement>(null);

    // Ambil state & actions dari Zustand
    const { setFile, removeFile } = useFileStore();

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let file = event.target.files?.[0] || null;

        if (file) {
            const isImage = name === "image" || name.includes("gallery");
            const isDocument = name === "document" || name === "complienceDocument";

            // Cek tipe file
            if (isImage && !file.type.startsWith("image/")) {
                toast({
                    variant: "destructive",
                    title: (
                        <div className="flex items-center gap-2">
                            <TriangleAlert className="w-5 h-5 text-white" />
                            <span>Invalid file uploaded</span>
                        </div>
                    ) as unknown as string,
                    description: "Please upload an image file (JPEG, PNG, etc)",
                });

                event.target.value = "";
                return;
            }

            if (isDocument && !file.type.startsWith("application/pdf")) {
                toast({
                    variant: "destructive",
                    title: (
                        <div className="flex items-center gap-2">
                            <TriangleAlert className="w-5 h-5 text-white" />
                            <span>Invalid file uploaded</span>
                        </div>
                    ) as unknown as string,
                    description: "Please upload a PDF file",
                });

                event.target.value = "";
                return;
            }

            // ✅ Cek ukuran maksimal
            const maxSize = isImage ? 5 * 1024 * 1024 : 10 * 1024 * 1024;
            if (file.size > maxSize) {
                toast({
                    variant: "destructive",
                    title: (
                        <div className="flex items-center gap-2">
                            <TriangleAlert className="w-5 h-5 text-white" />
                            <span>File too large</span>
                        </div>
                    ) as unknown as string,
                    description: `Max allowed size is ${isImage ? "5MB" : "10MB"}`,
                });

                event.target.value = "";
                return;
            }

            // Set preview
            if (isImage) setImagePreview(URL.createObjectURL(file));
            if (isDocument) setDocumentPreview(URL.createObjectURL(file));

            setSelectedFile(file);
            setPreviewUrl(URL.createObjectURL(file));
            setValue(name, file, { shouldValidate: true });

            // Simpan ke Zustand
            setFile(file);
        }
    };

    const handleRemoveFile = () => {
        setSelectedFile(null);
        setPreviewUrl(null);
        setValue(name, null);
        removeFile();

        if (name === "document" || name === "complienceDocument") {
            if (documentRef.current) documentRef.current.value = "";
        } else if (name === "image" || name.includes("gallery")) {
            if (imageRef.current) imageRef.current.value = "";
        }
    };

    return {
        imageRef,
        documentRef,
        imagePreview,
        documentPreview,
        fileInputRef,
        previewUrl,
        selectedFile,
        handleFileChange,
        handleRemoveFile,
    };
}
