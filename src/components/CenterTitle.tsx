import { Component, type ReactNode, type CSSProperties } from "react";


interface CenterTitleProps {
    text: string;
    color: string;
}


class CenterTitle extends Component<CenterTitleProps, {}> {
    constructor(props: CenterTitleProps) {
        super(props);
    }

    public render(): ReactNode {
        const textAnchorStyle: CSSProperties = {
            position: 'fixed',
            top: '42.96875vh',
            left: '50%',
            transform: 'translateX(-50%)',
            display: "inline-block",
            fontFamily: 'Inter, sans-serif',
            zIndex: 10
        }

        const textStyle: CSSProperties = {
            fontSize: '6.25vh',
            fontWeight: 900,
            color: this.props.color,
            transition: 'color 2.8s linear',
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


export default CenterTitle;
