import axios from 'axios'
import List from './List';
import withListLoading from './withListLoading';
import React, { useEffect, useState } from 'react';

export default function Main() {

    const ListLoading = withListLoading(List);
    const [appState, setAppState] = useState({
        loading: false,
        repos: null,
    });

    useEffect(() => {
        setAppState({ loading: true });
        const apiUrl = 'https://api.github.com/users/RazielRodrigues/repos';
        axios.get(apiUrl).then((repos) => {
            const allRepos = repos.data;
            setAppState({ loading: false, repos: allRepos });
        });

        const api2Url = 'http://localhost:8081/api';
        axios.get(api2Url).then((data) => {
            console.log(data)

        });
    }, [setAppState]);

    return (
        <div >

            <section className="bg-gray-900 text-white">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="mx-auto max-w-lg text-center">
                        <h2 className="text-3xl font-bold sm:text-4xl">Trend Repositories 🔥</h2>
                        <p className="mt-4 text-gray-300">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam doloribus
                            nesciunt eos fugiat. Vitae aperiam fugit consequuntur saepe laborum.
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

                        <a
                            class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                            href="#"
                        >

                            <ListLoading isLoading={appState.loading} repos={appState.repos} />

                        </a>


                        <a
                            class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                            href="#"
                        >


                            <h2 class="mt-4 text-xl font-bold text-white">Under construction...</h2>

                            <p class="mt-1 text-sm text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
                                distinctio alias voluptatum blanditiis laudantium.
                            </p>
                        </a>


                        <a
                            class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                            href="#"
                        >


                            <h2 class="mt-4 text-xl font-bold text-white">Under construction...</h2>

                            <p class="mt-1 text-sm text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
                                distinctio alias voluptatum blanditiis laudantium.
                            </p>
                        </a>

                    </div>
                </div>
            </section>

            <section className="bg-gray-900 text-white">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="mx-auto max-w-lg text-center">
                        <h2 className="text-3xl font-bold sm:text-4xl">Assynchronous Projects 🕒</h2>

                        <p className="mt-4 text-gray-300">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam doloribus
                            nesciunt eos fugiat. Vitae aperiam fugit consequuntur saepe laborum.
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

                        <a
                            class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                            href="#"
                        >


                            <h2 class="mt-4 text-xl font-bold text-white">Under construction...</h2>

                            <p class="mt-1 text-sm text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
                                distinctio alias voluptatum blanditiis laudantium.
                            </p>
                        </a>


                        <a
                            class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                            href="#"
                        >


                            <h2 class="mt-4 text-xl font-bold text-white">Under construction...</h2>

                            <p class="mt-1 text-sm text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
                                distinctio alias voluptatum blanditiis laudantium.
                            </p>
                        </a>


                        <a
                            class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                            href="#"
                        >


                            <h2 class="mt-4 text-xl font-bold text-white">Under construction...</h2>

                            <p class="mt-1 text-sm text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
                                distinctio alias voluptatum blanditiis laudantium.
                            </p>
                        </a>
                    </div>

                </div>
            </section>

            <section className="bg-gray-900 text-white">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="mx-auto max-w-lg text-center">
                        <h2 className="text-3xl font-bold sm:text-4xl">Social Media 📱</h2>

                        <p className="mt-4 text-gray-300">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam doloribus
                            nesciunt eos fugiat. Vitae aperiam fugit consequuntur saepe laborum.
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-2">
                        <a
                            class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                            href="#"
                        >


                            <h2 class="mt-4 text-xl font-bold text-white">Under construction...</h2>

                            <p class="mt-1 text-sm text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
                                distinctio alias voluptatum blanditiis laudantium.
                            </p>
                        </a>

                        <a
                            class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                            href="#"
                        >


                            <h2 class="mt-4 text-xl font-bold text-white">Under construction...</h2>

                            <p class="mt-1 text-sm text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
                                distinctio alias voluptatum blanditiis laudantium.
                            </p>
                        </a>



                    </div>

                </div>
            </section>

            <section className="bg-gray-900 text-white">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="mx-auto max-w-lg text-center">
                        <h2 className="text-3xl font-bold sm:text-4xl">About me 👨</h2>

                        <p className="mt-4 text-gray-300">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam doloribus
                            nesciunt eos fugiat. Vitae aperiam fugit consequuntur saepe laborum.
                        </p>
                    </div>

                    <div className="mt-12 text-center">
                        <a
                            href="#"
                            className="inline-block px-12 py-3 text-sm font-medium text-white link underline "
                        >
                            Download Resume

                        </a>
                    </div>
                </div>
            </section>

        </div>
    )
}