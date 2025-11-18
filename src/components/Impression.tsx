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

        const wrapperStyle: CSSProperties = {
            display: 'flex',
            width: '100vw',
            height: '100vh',
            minHeight: '100vh',
            justifyContent: 'center',
            alignItems: 'center'
        }

        const containerStyle: CSSProperties = {
            position: 'fixed',
            width: '33.203125vh',
            height: '33.203125vh',
            borderRadius: '50%',
            overflow: 'hidden'
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
            <div style={wrapperStyle}>
                <div style={containerStyle}>
                    <div style={imageStyle} />
                </div>
            </div>
        );
    }

    public componentDidMount(): void {
        const preloadImageSource: string = this.props.imageSource;
        const preloadImage = new Image();
        preloadImage.src = preloadImageSource;
    }
}


export default Impression;
