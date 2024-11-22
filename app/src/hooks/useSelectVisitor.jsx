import { useEffect, useState } from 'react';
import FirebaseConfig from "../FirebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";

export default function useSelectVisitor() {
    const [visitor, setVisitor] = useState([]);

    useEffect(() => {
        const db = FirebaseConfig();

        const selectVisitor = onSnapshot(collection(db, 'visitor'), (snapshot) => {
            const visitorsData = snapshot.docs.map((doc) => ({
                id: doc.id, 
                ...doc.data()
            }));
            setVisitor(visitorsData[0]);
        });

        return () => selectVisitor();
    }, []);

    return visitor;
}
