import { useEffect } from "react";
import useSelectVisitor from "../hooks/useSelectVisitor";
import useUpdateVisitor from "../hooks/useUpdateVisitor";
import cv from '../assets/raziel-rodrigues-cv-php-nodejs-go-en-2024.pdf';

export default function Banner() {
    const visitors = useSelectVisitor();

    useEffect(() => {
        useUpdateVisitor();
    }, []);

    return (
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    Hello Visitor #{visitors.visitor_count} 👋
                </h2>

                <p className="mt-4 text-gray-500 sm:text-xl">
                    I have been working as a software developer since 2018. My main skills are in PHP and JavaScript, and I am currently expanding my knowledge in Go.
                </p>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                    href={cv}
                    className="text-sm font-bold text-gray-900 sm:text-sm"
                >
                    Download Resume
                </a>
            </div>
        </div>
    );
}
