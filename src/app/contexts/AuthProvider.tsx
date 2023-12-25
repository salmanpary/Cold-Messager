"use client";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

interface AuthProviderProps {
	children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => (
	<SessionProvider>{children}</SessionProvider>
);

export default AuthProvider;
