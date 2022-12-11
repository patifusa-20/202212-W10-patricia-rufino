import React from 'react';
import { HomePage } from '../../../features/home/pages/home.page';
import { Layout } from '../layout/layout';
import './App.css';

function App() {
    return (
        <>
            <Layout>
                <HomePage></HomePage>
            </Layout>
        </>
    );
}

export default App;
