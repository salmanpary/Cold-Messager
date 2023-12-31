import { NextRequest, NextResponse } from "next/server";
import { db } from "../../services/config";
import { doc, setDoc, collection, query, where, getDocs, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

export async function POST(request: NextRequest) {
  try {
    const { user, template_name, template_string, default_template } = await request.json();

    // Reference to the "users-test" collection
    const usersCollection = collection(db, "users-test");

    // Query to find the user by email
    const userQuery = query(usersCollection, where("email", "==", user.email));
    const userQuerySnapshot = await getDocs(userQuery);

    if (!userQuerySnapshot.empty) {
      // User found
      const userDoc = userQuerySnapshot.docs[0].ref;

      // Replace literal '\\n' and '\\t' with actual newline and tab characters
     const processedTemplateString = template_string.replace("\\n", '\n')

      // Get existing templates array
      const existingTemplates = userQuerySnapshot.docs[0].data().templates || [];

      // Update the user document, add or update the "templates" array
      const updatedTemplates = existingTemplates.map((template) => {
        // If default_template is true for the incoming template, set it to true and update others to false
        if (template.template_name === template_name) {
          return { ...template, default_template: default_template };
        } else if (default_template) {
          return { ...template, default_template: false };
        }
        return template;
      });

      // Check if the incoming template exists in the array
      const existingTemplateIndex = existingTemplates.findIndex((template) => template.template_name === template_name);

      // If the incoming template exists, update the existing one; otherwise, add the new one
      if (existingTemplateIndex !== -1) {
        updatedTemplates[existingTemplateIndex] = {
          template_name,
          template_string: processedTemplateString,
          default_template,
        };
      } else {
        updatedTemplates.push({
          template_name,
          template_string: processedTemplateString,
          default_template,
        });
      }

      await updateDoc(userDoc, {
        templates: updatedTemplates,
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
