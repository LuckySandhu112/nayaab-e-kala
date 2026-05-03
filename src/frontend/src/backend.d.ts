import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Submission {
    id: bigint;
    age: bigint;
    courseSelection: string;
    name: string;
    email: string;
    contactNumber: string;
}
export type SubmitResult = {
    __kind__: "ok";
    ok: bigint;
} | {
    __kind__: "err";
    err: string;
};
export interface backendInterface {
    getAdmissions(): Promise<Array<Submission>>;
    submitAdmission(name: string, age: bigint, contactNumber: string, email: string, courseSelection: string): Promise<SubmitResult>;
}
