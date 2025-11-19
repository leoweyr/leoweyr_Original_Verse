import { Component, type ReactNode, type CSSProperties } from "react";


interface ImpressionProps {
    imageSource: string;
}


class Impression extends Component<ImpressionProps> {
    constructor(props: ImpressionProps) {
        super(props);
    }

    public render(): ReactNode {
        const { imageSource } = this.props;

        const containerStyle: CSSProperties = {
            position: 'fixed',
            top: '33.3984375vh',
            left: 'calc(50vw - 16.6015625vh)',
            width: '33.203125vh',
            height: '33.203125vh',
            borderRadius: '50%',
            overflow: 'hidden',
            zIndex: 10
        }

        const imageStyle: CSSProperties = {
            width: '100%',
            height: '100%',
            backgroundImage: `url(${imageSource})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }

        return (
            <div style={containerStyle}>
                <div style={imageStyle} />
            </div>
        );
    }
}


export default Impression;
