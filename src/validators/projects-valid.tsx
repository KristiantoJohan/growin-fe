"use client";

import { z } from "zod";

export const ProjectOverviewValid = z.object({
    productLogo: z.union([
        z.instanceof(File, {message: "Logo is required"})
         .refine(file => !file || file.size !== 0 || file.size <= 5000000, {message:"Max size exceeded"}),
        z.string().optional() // to hold default image
        ])
        .refine(value => value instanceof File || typeof value === "string", {
            message: "Logo is required"
    }),
    productName: z.string().min(3, {message: "Name is required"}),
    tagline: z.string().min(3, {message: "Tagline is required"}),
    description: z.string().min(3, {message: "Description is required"}),
    category: z.string({
        required_error: "Please select the category.",
    }),
    currentStage: z.string({
        required_error: "Please select the current stage.",
    }),
    platform: z.string({
        required_error: "Please select the platform.",
    }),
    websiteUrl: z.string().min(3, {message: "Website URL is required"}),
    gallery: z.array(
        z.union([
        z.instanceof(File).refine(
            (file) => !file || file.size === 0 || file.size <= 5000000,
            { message: "Max size exceeded" }
        ),
        z.string().optional(),
        ])
    )
    .optional(),
    totalTeamMember: z.number().min(0, "Minimum value is 0").optional(),
    hustler: z.string().min(0, "Minimum value is 0"),
    hipster: z.string().min(0, "Minimum value is 0"),
    hacker: z.string().min(0, "Minimum value is 0"),
    teamLeader: z.string(),
    email: z.string().email(),
    phone: z.string(),
    productVision: z.string(),
    productMission: z.string(),
    legalComplience: z.union([
        z.instanceof(File, {message: "legal complience is required"})
         .refine(file => !file || file.size !== 0 || file.size <= 10000000, {message:"Max size exceeded"}),
        z.string().optional()
        ])
        .refine(value => value instanceof File || typeof value === "string", {
            message: "Legal complience is required"
    }),
    privacyPolicy: z.union([
        z.instanceof(File, {message: "privacy policy is required"})
         .refine(file => !file || file.size !== 0 || file.size <= 10000000, {message:"Max size exceeded"}),
        z.string().optional()
        ])
        .refine(value => value instanceof File || typeof value === "string", {
            message: "Privacy policy is required"
    }),
    regulatoryApproval: z.union([
        z.instanceof(File, {message: "regulatory approval is required"})
         .refine(file => !file || file.size !== 0 || file.size <= 10000000, {message:"Max size exceeded"}),
        z.string().optional()
        ])
        .refine(value => value instanceof File || typeof value === "string", {
            message: "regulatory approval is required"
    }),
    serviceLevelAgreement: z.union([
        z.instanceof(File, {message: "Service level agreement is required"})
         .refine(file => !file || file.size !== 0 || file.size <= 10000000, {message:"Max size exceeded"}),
        z.string().optional()
        ])
        .refine(value => value instanceof File || typeof value === "string", {
            message: "Service level agreement is required"
    }),
    dataProcessingAgreement: z.union([
        z.instanceof(File, {message: "Data processing agreement is required"})
         .refine(file => !file || file.size !== 0 || file.size <= 10000000, {message:"Max size exceeded"}),
        z.string().optional()
        ])
        .refine(value => value instanceof File || typeof value === "string", {
            message: "Data processing agreement is required"
    }),
    thirdPartyComplience: z.union([
        z.instanceof(File, {message: "Third party complience is required"})
         .refine(file => !file || file.size !== 0 || file.size <= 10000000, {message:"Max size exceeded"}),
        z.string().optional()
        ])
        .refine(value => value instanceof File || typeof value === "string", {
            message: "Third party complience is required"
    }),
})

export type TProjectOverviewValid = z.infer<typeof ProjectOverviewValid>;