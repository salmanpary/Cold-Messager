import LinkedInProvider from "next-auth/providers/linkedin";
import NextAuth, { User, Session } from "next-auth";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { cert } from "firebase-admin/app";

declare module "next-auth" {
	interface User {
		role: string;
	}

	interface Session {
		user: User & { role?: string };
	}
}

export default NextAuth({
	providers: [
		LinkedInProvider({
			profile(profile) {
				console.log("Profile (LinkedIn): ", profile);

				let userRole = "user";
				//! Add admin email here
				if (profile?.email == "narayanananth26@gmail.com") {
					userRole = "admin";
				}

				return {
					...profile,
					role: userRole,
				};
			},
			clientId: process.env.LINKEDIN_CLIENT_ID,
			clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			if (user) token.role = user.role;
			return token;
		},
		async session({ session, token }) {
			if (session?.user) session.user.role = token.role as string;
			return session;
		},
	},
	adapter: FirestoreAdapter({
		credential: cert({
			projectId: process.env.FIREBASE_PROJECT_ID,
			clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
			privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
		}),
	}),
	// ...
});
