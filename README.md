JavaScript implementation of de Casteljau algorithm.
It's tiny and useful (less than 0.3KB minified).

###Exemple of use
```html
<script src="decasteljau.min.js" async></script>
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
        ],
            //value between 0 and 1, 0 - the beginning of the curve, 1 - the end
            0.8
        );

        ctx.beginPath();
        ctx.moveTo(point[0], point[1]);
        ctx.arc(point[0], point[1], 2, 0, 2 * Math.PI);
        ctx.fill();
    });
</script>
```

###License
MIT license
