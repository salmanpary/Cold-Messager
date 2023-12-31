import { NextRequest, NextResponse } from "next/server";
import { db } from "../../services/config";
import { collection, query, where, getDocs } from "firebase/firestore";

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const { user, id } = await request.json();
    
    // Reference to the "users-test" collection
    const usersCollection = collection(db, "users-test");

    // Query to find the user by email
    const userQuery = query(usersCollection, where("email", "==", user.email));
    const userQuerySnapshot = await getDocs(userQuery);

    if (!userQuerySnapshot.empty) {
      // User found
      const userDoc = userQuerySnapshot.docs[0];

      // Get existing templates array
      const existingTemplates = userDoc.data().templates || [];

      // Find the template by the provided id
      const templateIndex = parseInt(id, 10);
      const selectedTemplate = existingTemplates[templateIndex];

      // Return the response with the selected template data
      return NextResponse.json({
        selectedTemplate: selectedTemplate || null,
      });
    } else {
      // User not found
      return NextResponse.json({
        message: 'User not found',
      });
    }
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}
