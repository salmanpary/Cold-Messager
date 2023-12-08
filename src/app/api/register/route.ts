import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import requestIp from "request-ip";
import IP from "ip";
import { db } from "../../services/config";
import { doc, setDoc, collection } from "firebase/firestore";

export async function POST(request: NextRequest) {
  try {
    const headersList = headers();
    const { email } = await request.json();
    const timestamp = new Date();
    const ip1 = headersList.get("x-forwarded-for");
    const ip2 = IP.address();
    const ip3 = requestIp.getClientIp(request);

    // Reference to the "users" collection
    const usersCollection = collection(db, "users");

    // Add a new document with an auto-generated ID
    const newUserDocRef = doc(usersCollection);

    // Set document data
    const userDocData = {
      email: email,
      ip1: ip1,
      ip2: ip2,
      ip3: ip3,
      timestamp: timestamp.toISOString(), // Convert timestamp to ISO string
    };

    // Set the document data
    await setDoc(newUserDocRef, userDocData);

    // Return the response with the document ID
    return NextResponse.json({
      email: email,
      ip1: ip1,
      ip2: ip2,
      ip3: ip3,
      timestamp: timestamp,
      documentId: newUserDocRef.id, // Access the auto-generated ID
    });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}
