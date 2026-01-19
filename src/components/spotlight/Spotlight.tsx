import { Component, type ReactNode } from "react";

import Impression from "./Impression";
import Expression from "./Expression";
import { Observer } from "../../features/observer-perspective/Observer";


class Spotlight extends Component {
    public render(): ReactNode {
        const observer: Observer = Observer.getInstance();

        // NOTE: Variable preserved from commit 7744df718a3103daa586f3b7a403dd3aee5bab2c.
        const monochromatic: string = observer.getPerspectiveIconImageSource();

        return (
          <div>
              <Impression imageSource={monochromatic} />
              <Expression sign={observer.getPerspectiveName()} />
          </div>
        );
    }
}


export default Spotlight;
