function llamado() {

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // Variable circulo
    let xOrigenC = 275;
    let yOrigenC = 275;
    let randomXC = RandomPosition(-5, 5);
    let randomYC = RandomPosition(-5, 5);

    // Variable cuadrado
    let xOrigen = 0;
    let yOrigen = 0;
    let randomX = RandomPosition(-3, 3);
    let randomY = RandomPosition(-3, 3);


    class circulo {
        constructor(xOrigenC, yOrigenC, randomXC, randomYC) {
            this.xOrigenC = xOrigenC;
            this.yOrigenC = yOrigenC;
            this.randomXC = randomXC;
            this.randomYC = randomYC;
        }
        createCircule() {
            return ctx.arc(xOrigenC, yOrigenC, 100, 0, 2 * Math.PI);
        }
    }
    class square extends circulo{
        constructor(xOrigen, yOrigen, randomX, randomY){
            this.xOrigen = xOrigen;
            this.yOrigen = yOrigen;
            this.randomX = randomX;
            this.randomY = randomY;
        }
        createSquare(){
            return ctx.fillRect(xOrigen, yOrigen, 150, 150);
        }
    }
    function lienzo() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'blue';
        circulo.createCircule();
        ctx.beginPath();
        ctx.fillStyle = 'red';
        square.createSquare();
        ctx.fill();

        // Circulo Rebota a la derecha
        if (xOrigenC + 100 >= canvas.width) {
            randomXC = -randomXC;
        }
        // Circulo Rebota abajo
        if (yOrigenC + 100 >= canvas.height) {
            randomYC = -randomYC;
        }

        // Circulo Rebota a la izquierda
        if (xOrigenC - 100 < 0) {
            randomXC = -randomXC;
        }

        // Circulo Rebota arriba
        if (yOrigenC - 100 < 0) {
            randomYC = -randomYC;
        }

        // Cuadrado Rebota a la derecha
        if (xOrigen + 150 >= canvas.width) {
            randomX = -randomX;
        }
        // Cuadrado Rebota abajo
        if (yOrigen + 150 >= canvas.height) {
            randomY = -randomY;
        }

        // Cuadrado Rebota a la izquierda
        if (xOrigen < 0) {
            randomX = -randomX;
        }

        // Cuadrado Rebota arriba
        if (yOrigen < 0) {
            randomY = -randomY;
        }

        //choque 1

        console.log(randomXC);

        xOrigen += randomX;
        yOrigen += randomY;
        xOrigenC += randomXC;
        yOrigenC += randomYC;

        window.requestAnimationFrame(lienzo);
    }

    window.requestAnimationFrame(lienzo);

    function RandomPosition(min, max) {
        return Math.random() * (max - min) + min;
    }
}
llamado();