import { Component, type ReactNode } from "react";

import { Observer } from "./features/observer-perspective/Observer";
import MainStage from "./scenes/MainStage.tsx";


class App extends Component {
    constructor(props: {}) {
        super(props);

        const observer: Observer = Observer.getInstance();

        document.title = observer.synesthetize("welcome");

        const metaDescription: Element | null = document.querySelector('meta[name="description"]');

        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                observer.synesthetize("meta.description")
            );
        }


    }

    public render(): ReactNode {
        return (
            <div>
                <MainStage />
            </div>
        );
    }
}


export default App;
