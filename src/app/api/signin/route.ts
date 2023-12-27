import { NextRequest, NextResponse } from "next/server";
import { db } from "../../services/config";
import {
  doc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

export async function POST(request: NextRequest) {
  try {
    const user = await request.json();
    console.log(user);

    // Reference to the "users" collection
    const usersCollection = collection(db, "users-test");

    // Check if the user already exists based on a unique identifier (e.g., email)
    const userQuery = query(usersCollection, where("email", "==", user.email));
    const querySnapshot = await getDocs(userQuery);

    if (!querySnapshot.empty) {
      // User already exists, update the existing document only if changes are needed
      const existingUserDoc = querySnapshot.docs[0];
      const existingUserData = existingUserDoc.data();

      // Identify changed fields
      const changedFields = {};
      for (const key in user) {
        if (existingUserData[key] !== user[key]) {
          changedFields[key] = user[key];
        }
      }

      // Update only changed fields
      if (Object.keys(changedFields).length > 0) {
        await setDoc(existingUserDoc.ref, changedFields, { merge: true });
      }
    } else {
      // User doesn't exist, add a new document with an auto-generated ID
      const newUserDocRef = doc(usersCollection);
      await setDoc(newUserDocRef, user);
    }

    // Return the response
    return NextResponse.json({
      message: "User saved successfully",
    });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}
