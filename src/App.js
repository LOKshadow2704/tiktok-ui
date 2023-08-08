import React from 'react';
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PublicRoutes, PrivateRoutes } from '~/routes';
import { DefaultLayout, HeaderOnly } from '~/components/Layout';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {PublicRoutes.map((route, index) => {
                        if (route.layout === null) {
                            var Layout = Fragment;
                        } else if (route.layout !== null && route.layout !== undefined) {
                            var Layout = HeaderOnly;
                        } else {
                            var Layout = DefaultLayout;
                        }
                        const Pages = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Pages />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
