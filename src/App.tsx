import { Component, type ReactNode } from "react";

import Background from "./components/Background.tsx";
import Impression from "./components/Impression.tsx";
import PerfectIntegrationImage from "./assets/expression/perfect-integration.png";
import Expression from "./components/Expression.tsx";


class App extends Component {
    render(): ReactNode {
        return (
            <div>
                <Background />
                <Impression imageSource={PerfectIntegrationImage}/>
                <Expression sign={"leoweyr"} />
            </div>
        );
    }
}


export default App;
