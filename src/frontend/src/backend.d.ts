import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Img {
    png: boolean;
    bytes: Uint8Array;
}
export interface backendInterface {
    addImg(bytes: Uint8Array): Promise<void>;
    getJpgs(): Promise<Array<Img>>;
}
