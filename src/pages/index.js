import React from "react";
import "./index.css"

import { Header, Search, Category, Menu, Footer } from "../components"
    

function App() {
    return (
        <div className="App">
            <Header />
            <div style={{ padding: '5% 10%' }}>
                <Search/>
                <Category />
                <Menu/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
