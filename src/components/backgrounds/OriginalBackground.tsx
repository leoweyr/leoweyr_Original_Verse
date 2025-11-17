import { Component, type ReactNode, type CSSProperties} from "react";


class OriginalBackground extends Component {
    public render(): ReactNode {
        const baseStyle: CSSProperties = {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            backgroundColor: '#ffffff'
        }

        const maskStyle: CSSProperties = {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            backgroundColor: '#FBE2C3',
            opacity: '0.2'
        }

        return (
            <div style={baseStyle}>
                <div style={maskStyle}></div>
            </div>
        );
    }
}


export default OriginalBackground;
