var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var player1 = new GameObject();

player1.x = 50;
player1.y = 200;
player1.width = 10;
player1.height = 100;
player1.color = "red";

var player2 = new GameObject();

player2.x = canvas.width - 80;
player2.y = 200;
player2.width = 10;
player2.height = 100;
player2.color = "blue";

var ball = new GameObject();

ball.x = 500;
ball.y = 250;
ball.radius = 10;
ball.color = "black";
ball.xSpeed = 5;
ball.ySpeed = 5;

function animate()
{
    context.clearRect(0, 0, canvas.width, canvas.height);

    player1.drawRect();
    player2.drawRect();
    ball.drawCircle();

    ball.x += ball.xSpeed;
    ball.y += ball.ySpeed;

    if (ball.x + ball.radius >= canvas.width)
    {
        ball.x = 500;
        ball.y = 250;
        ball.xSpeed = 5;
        ball.ySpeed = 5;
        ball.color = "black";
    }

    if (ball.y + ball.radius >= canvas.height)
    {
        ball.y = canvas.height - ball.radius;
        ball.ySpeed = -ball.ySpeed * 1.01;
        ball.color = "yellow";
    }

    if (ball.y - ball.radius <= 0)
    {
        ball.y = ball.radius;
        ball.ySpeed = -ball.ySpeed * 1.01;
        ball.color = "green";
    }

    if (ball.x - ball.radius <= 0)
    {
        ball.x = 500;
        ball.y = 250;
        ball.xSpeed = 5;
        ball.ySpeed = 5;
        ball.color = "black";
    }

    if (ball.x - ball.radius <= player1.x + player1.width &&
        ball.y + ball.radius >= player1.y &&
        ball.y - ball.radius <= player1.y + player1.height &&
        ball.xSpeed < 0)
    {
        ball.x = player1.x + player1.width + ball.radius;
        ball.xSpeed = -ball.xSpeed;

        if (ball.y < player1.y + player1.height / 3)
        {
            ball.ySpeed = -Math.abs(ball.ySpeed);
        }
        else if (ball.y > player1.y + player1.height * 2 / 3)
        {
            ball.ySpeed = Math.abs(ball.ySpeed);
        }
    }

    if (ball.x + ball.radius >= player2.x &&
        ball.y + ball.radius >= player2.y &&
        ball.y - ball.radius <= player2.y + player2.height &&
        ball.xSpeed > 0)
    {
        ball.x = player2.x - ball.radius;
        ball.xSpeed = -ball.xSpeed;

        if (ball.y < player2.y + player2.height / 3)
        {
            ball.ySpeed = -Math.abs(ball.ySpeed);
        }
        else if (ball.y > player2.y + player2.height * 2 / 3)
        {
            ball.ySpeed = Math.abs(ball.ySpeed);
        }
    }

    if (player1.y < 0)
    {
        player1.y = 0;
    }

    if (player1.y + player1.height > canvas.height)
    {
        player1.y = canvas.height - player1.height;
    }

    if (player2.y < 0)
    {
        player2.y = 0;
    }

    if (player2.y + player2.height > canvas.height)
    {
        player2.y = canvas.height - player2.height;
    }
}

document.addEventListener("keydown", function(event)
{
    if (event.key == "w" )
    {
        player1.y -= 10;
    }

    if (event.key == "s" )
    {
        player1.y += 10;
    }

    if (event.key == "ArrowUp")
    {
        player2.y -= 10;
    }

    if (event.key == "ArrowDown")
    {
        player2.y += 10;
    }
});

setInterval(animate, 20);