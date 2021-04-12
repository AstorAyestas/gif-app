import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import List from "./components/List";

import Header from "./components/Header";
const App = () => {
    const api_key = process.env.REACT_APP_API_KEY
    const api = process.env.REACT_APP_API
    const [categories, setCategories] = useState([''])
    const url = `${api}?api_key=${api_key}&q=${categories[0]}&limit=10&offset=0&rating=g&lang=en`;
    return (
        <>
            <Header />
            <h1 className="my-2 text-3xl font-bold text-center text-white cah1italize">
                <span className="text-transparent bg-gradient-to-r bg-clip-text from-red-400 to-blue-400">Gif App</span>
            </h1>
            <div className="mt-4">
                <Search setCategories={setCategories} />
                <ol>
                    {
                        categories.length > 0 && categories.map(item =>
                        (
                            <li className="mx-4 text-gray-600 capitalize" key={item}>{item}</li>
                        ))
                    }
                </ol>
                <div className="flex flex-wrap justify-center gap-4 mx-4 ">
                    <List url={url} />
                </div>
            </div>
        </>
    );
}
export default App;
