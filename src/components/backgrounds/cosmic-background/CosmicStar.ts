class CosmicStar {
    private readonly positionX: number;
    private readonly positionY: number;
    private readonly size: number;
    private readonly twinkleSpeed: number;

    private opacity: number;
    private twinkleDirection: number;

    constructor(canvasWidth: number, canvasHeight: number) {
        this.positionX = Math.random() * canvasWidth;
        this.positionY = Math.random() * canvasHeight;
        this.size = Math.random() * 2 + 0.5;
        this.opacity = Math.random();
        this.twinkleSpeed = Math.random() * 0.03 + 0.01;
        this.twinkleDirection = Math.random() > 0.5 ? 1 : -1;
    }

    public update(): void {
        // Star flashing effect.
        this.opacity += this.twinkleSpeed * this.twinkleDirection;

        if (this.opacity >= 1) this.twinkleDirection = -1;

        if (this.opacity <= 0.3) this.twinkleDirection = 1;
    }

    public draw(canvasRenderingContext2D: CanvasRenderingContext2D): void {
        canvasRenderingContext2D.beginPath();
        canvasRenderingContext2D.arc(this.positionX, this.positionY, this.size, 0, Math.PI * 2);
        canvasRenderingContext2D.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        canvasRenderingContext2D.fill();
    }
}


export default CosmicStar;
