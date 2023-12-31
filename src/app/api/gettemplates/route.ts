import { NextRequest, NextResponse } from "next/server";
import { db } from "../../services/config";
import { collection, query, where, getDocs } from "firebase/firestore";

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const { user } = await request.json();

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

      // Get an array of template names and their original indexes
      const templateIndexes = existingTemplates.map((template, index) => ({
        id: index,
        template_name: template.template_name,
      }));

      // Sort the array in ascending order based on the id property
      const sortedTemplateIndexes = templateIndexes.sort((a, b) =>
        b.id - a.id
      );

      // Return the response
      return NextResponse.json({
        templateIndexes: sortedTemplateIndexes,
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
