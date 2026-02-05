import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export class ExternalBlob {
    getBytes(): Promise<Uint8Array<ArrayBuffer>>;
    getDirectURL(): string;
    static fromURL(url: string): ExternalBlob;
    static fromBytes(blob: Uint8Array<ArrayBuffer>): ExternalBlob;
    withUploadProgress(onProgress: (percentage: number) => void): ExternalBlob;
}
export type Time = bigint;
export interface Experience {
    id: bigint;
    title: string;
    period: string;
    description: string;
    company: string;
}
export interface SocialLink {
    url: string;
    platform: string;
}
export interface Portfolio {
    about: About;
    projects: Array<Project>;
    socialLinks: Array<SocialLink>;
    contactEmail: string;
    experiences: Array<Experience>;
}
export interface ContactSubmission {
    name: string;
    email: string;
    message: string;
    timestamp: Time;
}
export interface Project {
    id: bigint;
    title: string;
    description: string;
    screenshots?: Array<ExternalBlob>;
    roleDetails: string;
}
export interface About {
    profileImage?: ExternalBlob;
    name: string;
    summary: string;
}
export interface backendInterface {
    addProject(title: string, description: string, roleDetails: string, screenshots: Array<ExternalBlob> | null): Promise<Project>;
    getContactSubmissions(): Promise<Array<ContactSubmission>>;
    getPortfolioContent(): Promise<Portfolio>;
    submitContactForm(name: string, email: string, message: string): Promise<void>;
    uploadProfileImage(externalBlob: ExternalBlob): Promise<void>;
}
