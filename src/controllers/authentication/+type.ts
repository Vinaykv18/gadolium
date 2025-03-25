import type { user as User } from "@prisma/client";

export enum SignUpWithUsernameAndPasswordError {
    CONFLICTING_USERNAME = "CONFLICTING_USERNAME",
    UNKNOWN = "UNKNOWN",
}

export type SignUpWithUsernameAndPasswordResult = {
    token: string;
    user: User;
};

export type LoginWithUsernameAndPasswordResult = {
    token: string;
    user: User;
};