

function GameObject()
{
    this.x = 20;
    this.y = 20;
    this.width = 30;
    this.height = 100;
    this.radius = 10;
    this.color = "red";

    this.drawCircle = function()
    {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 360 * Math.PI / 180, true);
        context.fillStyle = this.color;
        context.fill();
    }

    this.drawRect = function()
    {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
        if (player1.x + player1.radius >= canvas.width)
    {
        player1.x = canvas.width - player1.radius;
        player1.xSpeed = -player1.xSpeed;
    }

    if (player1.x - player1.radius <= 0)
    {
        player1.x = player1.radius;
        player1.xSpeed = -player1.xSpeed;
    }

    if (player1.y + player1.radius >= canvas.height)
    {
        player1.y = canvas.height - player1.radius;
        player1.ySpeed = -player1.ySpeed;
    }

    if (player1.y - player1.radius <= 0)
    {
        player1.y = player1.radius;
        player1.ySpeed = -player1.ySpeed;
    }
}
    }
