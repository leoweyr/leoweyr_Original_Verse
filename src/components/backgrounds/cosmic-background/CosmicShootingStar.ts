class CosmicShootingStar {
    private readonly canvasWidth: number;
    private readonly canvasHeight: number;

    private positionX: number | null = null;
    private positionY: number | null = null;
    private angle: number | null = null;
    private speed: number | null = null;
    private size: number | null = null;
    private length: number | null = null;

    constructor(canvasWidth: number, canvasHeight: number) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;

        this.reset();
    }

    private reset(): void {
        this.positionX = Math.random() * this.canvasWidth
        this.positionY = 0;
        this.angle = Math.random() * Math.PI / 4 + Math.PI / 8;  // 30 - 60 degrees.
        this.speed = Math.random() * 10 + 5;
        this.size = Math.random() * 2 + 1;
        this.length = Math.random() * 50 + 30;
    }

    public update(): void {
        this.positionX! += Math.cos(this.angle!) * this.speed!;
        this.positionY! += Math.sin(this.angle!) * this.speed!;

        // If the shooting star has flown out of the canvas, reset it.
        if (this.positionX! > this.canvasWidth || this.positionY! > this.canvasHeight) {
            this.reset();
        }
    }

    public draw(canvasRenderingContext2D: CanvasRenderingContext2D): void {
        const gradient: CanvasGradient = canvasRenderingContext2D.createLinearGradient(
            this.positionX!, this.positionY!,
            this.positionX! - Math.cos(this.angle!) * this.length!,
            this.positionY! - Math.sin(this.angle!) * this.length!
        );

        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.5, 'rgba(200, 200, 255, 0.7)');
        gradient.addColorStop(1, 'rgba(100, 100, 255, 0)');

        canvasRenderingContext2D.beginPath();
        canvasRenderingContext2D.moveTo(this.positionX!, this.positionY!);
        canvasRenderingContext2D.lineTo(
            this.positionX! - Math.cos(this.angle!) * this.length!,
            this.positionY! - Math.sin(this.angle!) * this.length!
        );
        canvasRenderingContext2D.strokeStyle = gradient;
        canvasRenderingContext2D.lineWidth = this.size!;
        canvasRenderingContext2D.stroke();

        // Draw the shooting star's head.
        canvasRenderingContext2D.beginPath();
        canvasRenderingContext2D.arc(this.positionX!, this.positionY!, this.size! / 2, 0, Math.PI * 2);
        canvasRenderingContext2D.fillStyle = 'rgba(255, 255, 255, 1)';
        canvasRenderingContext2D.fill();
    }
}


export default CosmicShootingStar;
