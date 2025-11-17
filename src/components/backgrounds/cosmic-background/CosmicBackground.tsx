import { Component, type RefObject, createRef, type ReactNode, type CSSProperties } from "react";

import CosmicStar from "./CosmicStar";
import CosmicShootingStar from "./CosmicShootingStar";


class CosmicBackground extends Component {
    private readonly canvasRef: RefObject<HTMLCanvasElement | null>;

    private stars: Array<CosmicStar> = new Array<CosmicStar>();
    private shootingStars: Array<CosmicShootingStar> = new Array<CosmicShootingStar>();
    private cleanup?: () => void;

    constructor(props: {}) {
        super(props);

        this.canvasRef = createRef();
    }

    public render(): ReactNode {
        const backgroundStyle: CSSProperties = {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 0
        };

        return (
            <div style={backgroundStyle}>
                <canvas ref={this.canvasRef} style={{ width: "100%", height: "100%" }} />
            </div>
        );
    }

    public componentDidMount(): void {
        const canvas: HTMLCanvasElement | null = this.canvasRef.current;

        if (!canvas) return;

        const canvasRenderingContext2D: CanvasRenderingContext2D | null = canvas.getContext("2d");

        if (!canvasRenderingContext2D) return;

        let animationFrameId: number;

        const resizeCanvas: () => void = (): void => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            this.initializeStarsAndShootingStars(canvas.width, canvas.height);

        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        this.initializeStarsAndShootingStars(canvas.width, canvas.height);

        const drawBackground: () => void = (): void => {
              const gradient: CanvasGradient = canvasRenderingContext2D.createRadialGradient(
                canvas.width / 2,
                canvas.height / 2,
                0,
                canvas.width / 2,
                canvas.height / 2,
                Math.max(canvas.width, canvas.height) / 2
              );

              gradient.addColorStop(0, "#0a0a2a");
              gradient.addColorStop(0.5, "#000020");
              gradient.addColorStop(1, "#000000");

              canvasRenderingContext2D.fillStyle = gradient;
              canvasRenderingContext2D.fillRect(0, 0, canvas.width, canvas.height);
        };

        const animate: () => void = (): void => {
            drawBackground();

            this.stars!.forEach((star: CosmicStar): void => {
                star.update();
                star.draw(canvasRenderingContext2D);
            });

            this.shootingStars!.forEach((shootingStar: CosmicShootingStar): void => {
                shootingStar.update();
                shootingStar.draw(canvasRenderingContext2D);
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        this.cleanup = (): void => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }

            window.removeEventListener("resize", resizeCanvas);
        };
    }

    public componentWillUnmount(): void {
        if (this.cleanup) {
            this.cleanup();
        }
    }

    private initializeStarsAndShootingStars(width: number, height: number): void {
        this.stars = Array(200).fill(null).map((): CosmicStar => new CosmicStar(width, height));
        this.shootingStars = Array(2).fill(null).map(
            (): CosmicShootingStar => new CosmicShootingStar(width, height)
        );
    }
}


export default CosmicBackground;
