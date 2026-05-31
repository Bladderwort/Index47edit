import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import {BrowserRouter, Route, Routes} from "react-router";
import Index from "./routes/home";
import Term from "./routes/term";
import Layout from "./routes/layout";
import {HelmetProvider} from "react-helmet-async";
import HomeLayout from "./routes/home/layout";
import Contributing from "./routes/home/contributing";
import Contributors from "./routes/home/contributors";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <HelmetProvider>
            <BrowserRouter basename={import.meta.env.BASE_URL}>
                <Routes>
                    <Route element={<Layout />}>
                        <Route element={<HomeLayout />}>
                            <Route index element={<Index />} />
                            <Route path="contributing" element={<Contributing />} />
                            <Route path="contributors" element={<Contributors />} />
                        </Route>
                        <Route path=":slug" element={<Term />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </HelmetProvider>
    </StrictMode>
);
