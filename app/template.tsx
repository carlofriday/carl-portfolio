"use client";

import { XircusTonProvider } from "@xircus-web3/ton-react";

export default function Template({ children }: { children: React.ReactNode }) {
    return <XircusTonProvider>{children}</XircusTonProvider>;
}
