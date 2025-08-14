import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import Homepage from "./pages/Homepage";
import Princing from "./pages/Pricing";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Homepage />} />
                <Route path="pricing" element={<Princing />} />
                <Route path="product" element={<Product />} />
                <Route path="login" element={<Login />} />

                <Route path="app" element={<AppLayout />}>
                    <Route index element={<CityList />} />
                    <Route path="cities" element={<CityList />} />
                    <Route path="countries" element={<CountryList />} />
                    <Route path="form" element={<div>Form</div>} />
                </Route>

                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
