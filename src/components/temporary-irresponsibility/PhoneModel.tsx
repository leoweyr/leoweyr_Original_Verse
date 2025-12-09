import { Component, type ReactNode } from "react";


class PhoneModel extends Component {
    public render(): ReactNode {
        return (
          <g>
              <rect
                  width="120px"
                  height="240px"
                  rx="24px"
                  stroke="currentColor"
                  strokeWidth="9.375px"
                  fill="none"
              />
              {/* Dynamic island. */}
              <rect
                  x="43px"
                  y = "15px"
                  width="37px"
                  height="11.1px"
                  rx="5.55px"
                  fill="currentColor"
              />
          </g>
        );
    }
}


export default PhoneModel;
