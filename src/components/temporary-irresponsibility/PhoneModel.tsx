import { Component, type ReactNode } from "react";


class PhoneModel extends Component {
    public render(): ReactNode {
        return (
          <g>
              <rect
                  width="120"
                  height="240"
                  rx="24"
                  stroke="currentColor"
                  strokeWidth="9.375"
                  fill="none"
              />
              {/* Dynamic island. */}
              <rect
                  x="43"
                  y = "15"
                  width="37"
                  height="11.1"
                  rx="5.55"
                  fill="currentColor"
              />
          </g>
        );
    }
}


export default PhoneModel;
