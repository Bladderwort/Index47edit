import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import {BrowserRouter, Route, Routes} from "react-router";
import Index from "./routes";
import Term from "./routes/term";
import Layout from "./routes/layout";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Index />} />
                    <Route path=":slug" element={<Term />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
