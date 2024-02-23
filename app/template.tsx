"use client";

import { XircusProvider, setupSDK } from "@xircus-web3/react";

export default function Template({ children }: { children: React.ReactNode }) {
    const sdk = setupSDK("bsc");

    return <XircusProvider sdk={sdk}>{children}</XircusProvider>;
}