import '@/styles/globals.css'
import React from "react";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import { Provider } from "react-redux";
import { store } from "@/store";

export default function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <AppHeader />
            <Component {...pageProps} />
            <AppFooter />
        </Provider>
    )
}
