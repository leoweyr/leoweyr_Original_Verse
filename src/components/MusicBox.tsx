import { Component, type RefObject, createRef, type ReactNode, type CSSProperties} from "react";

import PausedMusicBoxImage from "../assets/music-box/paused-music-box.png";
import RunningMusicBoxImage from "../assets/music-box/running-music-box.png";
import MicrowaveEchoOfTheVerseAudio from "../assets/background-music/microwave-echo-of-the-verse.mp3";


interface MusicBoxState {
    isPlaying: boolean;
}


class MusicBox extends Component<{}, MusicBoxState> {
    private audioRef: RefObject<HTMLAudioElement | null> = createRef<HTMLAudioElement>();
    private handlePlayMusic: () => void = (): void => {
        if (this.audioRef.current) {
            this.audioRef.current.play();

            this.setState({isPlaying: true});
        }
    }

    constructor(props: {}) {
        super(props);

        this.state = {
            isPlaying: false
        };
    }

    public render(): ReactNode {
        const containerStyle: CSSProperties = {
            position: 'fixed',
            top: '3.906250vh',
            right: '3.906250vh',
            width: '5.859375vh',
            height: '5.859375vh',
            borderRadius: '50%',
            overflow: 'hidden',
            transition: 'transform 0.2s ease'
        }

        const imageStyle: CSSProperties = {
            width: '100%',
            height: '100%',
            backgroundImage: this.state.isPlaying ? `url(${RunningMusicBoxImage})` :`url(${PausedMusicBoxImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }

        const rotatingImageStyle: CSSProperties = {
            ...imageStyle,
            animation: 'rotate 273s linear infinite',
            animationPlayState: this.state.isPlaying ? 'running' : 'paused'
        }

        return (
            <div
                style={containerStyle}
                onClick={this.handlePlayMusic}
                onMouseEnter={
                    (event): void => {
                        if (!this.state.isPlaying) {
                            event.currentTarget!.style.transform = 'scale(1.1)';
                        }
                    }
                }
                onMouseLeave={
                    (event): void => {
                        if (!this.state.isPlaying) {
                            event.currentTarget!.style.transform = 'scale(1)';
                        }
                    }
                }
            >
                <div style={rotatingImageStyle} />
                <audio ref={this.audioRef} src={MicrowaveEchoOfTheVerseAudio} />
                <style>
                    {`
                        @keyframes rotate {
                           from {
                               transform: rotate(0deg);
                           } to {
                                transform: rotate(360deg);
                           }
                        }
                    `}
                </style>
            </div>
        );
    }

    public componentDidMount(): void {
        const preloadImages: Array<string> = [PausedMusicBoxImage, RunningMusicBoxImage];
        preloadImages.forEach((imageSource: string): void => {
            const image = new Image();
            image.src = imageSource;
        });

        if (this.audioRef.current) {
            this.audioRef.current.preload = "auto";
            this.audioRef.current.loop = true;
        }
    }
}


export default MusicBox;
