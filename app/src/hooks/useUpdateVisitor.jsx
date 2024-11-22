import { doc, updateDoc, increment, getDoc } from "firebase/firestore";
import FirebaseConfig from "../FirebaseConfig";

export default async function useUpdateVisitor() {
    const db = FirebaseConfig();
    const docId = "MY6UiE8cfjsZ4M2VUsD4";
    const docRef = doc(db, "visitor", docId);

    try {
        if (document.cookie) {
            return;
        }

        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const currentCount = docSnap.data().visitor_count || 0;
            await updateDoc(docRef, {
                visitor_count: currentCount + 1,
            });
        } else {
            await setDoc(docRef, { visitor_count: 1 });
        }

        document.cookie = 'already-visited'
    } catch (error) {
        console.error("Error updating visitor count:", error);
    }
}
