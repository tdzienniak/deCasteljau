JavaScript implementation of de Casteljau algorithm.

##Example of use
```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>De Casteljau algorithm.</title>
</head>
<body>
</body>
<script src="decasteljau.js" async></script>
<script>
        window.addEventListener("load", function (e) {
            var canvas = document.createElement("canvas");
            canvas.width = 600;
            canvas.height = 600;

            document.body.appendChild(canvas);

            var ctx = canvas.getContext("2d");

            ctx.strokeStyle = "black";
            ctx.fillStyle = "red";

            ctx.beginPath();
            ctx.moveTo(200,200);
            ctx.bezierCurveTo(200, 100, 300, 400, 400,400);
            ctx.stroke();

            var point = de.casteljau([
                //control points
                [200, 200],
                [200, 100],
                [300, 400],
                [400, 400]
            ], 0.8);

            ctx.beginPath();
            ctx.moveTo(point[0], point[1]);
            ctx.arc(point[0], point[1], 2, 0, 2 * Math.PI);
            ctx.fill();
        });   
    </script>
</html>
```

##License
MIT license
