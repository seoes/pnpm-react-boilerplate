import { ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { useStore } from "./store/useStore";

type ProvidersProps = {
    children: ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
    const store = useStore();
    return (
        <ReduxProvider store={store}>
            <BrowserRouter>{children}</BrowserRouter>
        </ReduxProvider>
    );
}
