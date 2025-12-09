import { Component, type ReactNode, type CSSProperties } from "react";
import { motion } from "framer-motion";


interface PhoneFocusPromptProps {
    children?: ReactNode;
}


class PhonePromptFocus extends Component<PhoneFocusPromptProps, {}> {
    public render(): ReactNode {
        const containerAnchorStyle: CSSProperties = {
            position: 'fixed',
            width: "100vw",
            height: "100vh",
            display: 'flex',
            flexDirection: 'row',
            flexWrap: "nowrap",
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 12
        }

        const containerBoxStyle: CSSProperties = {
            width: '360px',
            height: '360px',
            background: 'linear-gradient(to bottom right, rgba(107, 114, 128, 0.3), rgba(75, 85, 99, 0.3), rgba(55, 65, 81, 0.3))',
            backdropFilter: 'blur(12px)',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }

        return (
            <div style={containerAnchorStyle}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    style={containerBoxStyle}>
                    <svg
                        width="360px"
                        height="360px"
                        viewBox="0 0 360 360"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ color: 'white' }}
                    >
                        {this.props.children}
                    </svg>
                </motion.div>
            </div>
        );
    }
}


export default PhonePromptFocus;
