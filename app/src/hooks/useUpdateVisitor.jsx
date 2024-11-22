import { doc, updateDoc, increment, getDoc } from "firebase/firestore";
import FirebaseConfig from "../FirebaseConfig";

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

export default async function useUpdateVisitor() {
    const db = FirebaseConfig();
    const docId = "MY6UiE8cfjsZ4M2VUsD4";
    const docRef = doc(db, "visitor", docId);

    try {
        if (getCookie('visited')) {
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

        setCookie('visited', 'true', 360)
    } catch (error) {
        console.error("Error updating visitor count:", error);
    }
}
