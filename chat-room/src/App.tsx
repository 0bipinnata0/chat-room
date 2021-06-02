import React from 'react';
import AuthenticatedScreen from "./authenticated-app";
import {AuthProvider} from "./context/authContext";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <AuthenticatedScreen/>
            </AuthProvider>
        </div>
    );
}

export default App;
