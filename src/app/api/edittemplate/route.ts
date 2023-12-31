import { NextRequest, NextResponse } from "next/server";
import { db } from "../../services/config";
import { doc, collection, query, where, getDocs, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

export async function PATCH(request: NextRequest, response: NextResponse) {
  try {
    const { user, id, template_name, template_string, default_template } = await request.json();
    const usersCollection = collection(db, "users-test");
    const userQuery = query(usersCollection, where("email", "==", user.email));
    const userQuerySnapshot = await getDocs(userQuery);

    if (!userQuerySnapshot.empty) {
      const userDoc = userQuerySnapshot.docs[0];
      const userId = userDoc.id;

      // Assuming your templates are stored in an array called "templates"
      const templatesArray = userDoc.data().templates || [];

      // Find the template in the array using the provided ID
      const templateIndex = id; // Assuming `id` is the index of the template in the array

      if (templateIndex >= 0 && templateIndex < templatesArray.length) {
        // Set default_template to false for all templates
        const updatedTemplatesArray = templatesArray.map((template) => ({
          ...template,
          default_template: false,
        }));

        // Update the template with new data
        updatedTemplatesArray[templateIndex] = {
          template_name,
          template_string,
          default_template,
        };

        // Update the user document with the modified templates array
        await updateDoc(doc(db, "users-test", userId), {
          templates: updatedTemplatesArray,
        });

        return NextResponse.json({
          message: 'Template updated successfully',
        });
      } else {
        return NextResponse.json({
          message: 'Invalid template index',
        });
      }
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
