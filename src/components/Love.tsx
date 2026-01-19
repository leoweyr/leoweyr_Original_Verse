import { Component, type ReactNode, type CSSProperties } from "react";


class Love extends Component {
    public render(): ReactNode {
        const rootAnchorStyle: CSSProperties = {
            position: 'fixed',
            top: '52.832031vh',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'inline-block',
            justifyContent: 'center',
            zIndex: 9
        }

        const seedBoxStyle: CSSProperties = {
            position: 'absolute',
            width: '5.625vh',
            height: '5.625vh',
            borderRadius: '50%',
            backgroundColor: '#000000',
            zIndex: 11
        }

        return (
            <div style={rootAnchorStyle}>
                <div style={seedBoxStyle} />
            </div>
        );
    }
}


export default Love;
