import { Component, type ReactNode, type CSSProperties } from "react";


interface CenterSubtitleProps {
    text: string;
}


class CenterSubtitle extends Component<CenterSubtitleProps, {}> {
    public render(): ReactNode {
        const textAnchorStyle: CSSProperties = {
            position: 'fixed',
            top: '50.683593vh',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'inline-block',
            fontFamily: 'Inter, sans-serif',
            zIndex: 10
        }

        const textStyle: CSSProperties = {
            fontSize: '4.6875vh',
            fontWeight: 900,
            color: '#C4C4C4',
            margin: 0,
            padding: 0,
            whiteSpace: 'nowrap',
            zIndex: parseInt(textAnchorStyle.zIndex!.toString()) + 1
        }

        return (
            <div style={textAnchorStyle}>
                <span style={textStyle}>{this.props.text}</span>
            </div>
        );
    }
}


export default CenterSubtitle;
