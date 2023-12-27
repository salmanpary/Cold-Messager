import { NextRequest, NextResponse } from "next/server";
import { db } from "../../services/config";
import { doc, setDoc, collection, query, where, getDocs, updateDoc, arrayUnion } from "firebase/firestore";

export async function POST(request: NextRequest) {
  try {
    const { user, template_name, template_string } = await request.json();

    // Reference to the "users-test" collection
    const usersCollection = collection(db, "users-test");

    // Query to find the user by email
    const userQuery = query(usersCollection, where("email", "==", user.email));
    const userQuerySnapshot = await getDocs(userQuery);

    if (!userQuerySnapshot.empty) {
      // User found
      const userDoc = userQuerySnapshot.docs[0].ref;

      // Replace literal '\n' and '\t' with actual newline and tab characters
      const processedTemplateString = template_string.replace(/\\n/g, '\n').replace(/\\t/g, '\t');

      // Update the user document, add or update the "templates" array
      await updateDoc(userDoc, {
        templates: arrayUnion({ template_name, template_string: processedTemplateString }),
      });

      // Return the response
      return NextResponse.json({
        message: 'Template saved successfully',
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
