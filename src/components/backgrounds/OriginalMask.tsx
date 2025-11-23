import { Component, type ReactNode, type CSSProperties } from "react";


interface OriginalMaskProps {
    opacity: number
}


class OriginalMask extends Component<OriginalMaskProps, {}> {
    constructor(props: OriginalMaskProps) {
        super(props);
    }

    public render(): ReactNode {
        const style: CSSProperties = {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            backgroundColor: '#FBE2C3',
            opacity: this.props.opacity,
            zIndex: 0
        }

        return (
            <div style={style} />
        );
    }
}


export default OriginalMask;
