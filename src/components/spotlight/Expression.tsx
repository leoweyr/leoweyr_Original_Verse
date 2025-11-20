import { Component, type ReactNode, type CSSProperties } from "react";


interface ExpressionProps {
    sign: string;
}


class Expression extends Component<ExpressionProps> {
    constructor(props: ExpressionProps) {
        super(props);
    }

    public render(): ReactNode {
        const { sign } = this.props;

        const barRectangleStyle: CSSProperties = {
            position: 'fixed',
            top: '70.507812vh',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'inline-block',
            padding: '1.171875vh 4.027777vw 1.171875vh 4.027777vw',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F3F3F3',
            zIndex: 10
        }

        const barLeftCircleStyle: CSSProperties = {
            position: 'absolute',
            top: '0',
            left: '0',
            transform: 'translateX(-50%)',
            width: '6.217426vh',
            height: '100%',
            borderRadius: '50%',
            backgroundColor: '#F3F3F3',
            zIndex: parseInt(barRectangleStyle.zIndex!.toString()) + 1
        }

        const barRightCircleStyle: CSSProperties = {
            position: 'absolute',
            top: '0',
            right: '0',
            transform: 'translateX(50%)',
            width: '6.217426vh',
            height: '100%',
            borderRadius: '50%',
            backgroundColor: '#F3F3F3',
            zIndex: parseInt(barRectangleStyle.zIndex!.toString()) + 1
        }

        const textAnchorStyle: CSSProperties = {
            position: 'relative',
            display: 'inline-block',
            fontFamily: 'Inter, sans-serif',
            textAlign: 'center',
            backgroundColor: '#F3F3F3',
            zIndex: parseInt(barRectangleStyle.zIndex!.toString()) + 2
        }

        const textStyle: CSSProperties = {
            position: 'relative',
            fontSize: '2.929687vh',
            fontWeight: 900,
            color: '#000000',
            margin: 0,
            padding: 0,
            whiteSpace: 'nowrap',
            zIndex: parseInt(textAnchorStyle.zIndex!.toString()) + 1
        }

        return (
            <div style={barRectangleStyle}>
                <div style={barLeftCircleStyle} />
                <div style={barRightCircleStyle} />
                <div style={textAnchorStyle}>
                    <span style={textStyle}>{sign}</span>
                </div>
            </div>
        )
    }
}


export default Expression;
