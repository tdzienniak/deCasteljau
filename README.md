JavaScript implementation of de Casteljau algorithm.
It can do some very useful things at the moment:
- calculate coordinates of any point on the curve
- divide Bezier into two separate curves with given ratio

By the way, it's tiny (less than 0.5KB minified).

###Example of use

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
        ctx.bezierCurveTo(200, 100, 300, 400, 400, 400);
        ctx.stroke();
        
        //sample curve
        var bezier = [
            [200, 200],
            [200, 100],
            [300, 400],
            [400, 400]
        ];
        
        /*
        SIMPLE POINT CALCULATION
        */

        var point = de.casteljau(bezier,
            //value between 0 and 1, 0 - the beginning of the curve, 1 - the end
            0.8
        );

        ctx.beginPath();
        ctx.moveTo(point[0], point[1]);
        ctx.arc(point[0], point[1], 2, 0, 2 * Math.PI);
        ctx.fill();
        
        /*
        DIVIDING CURVE WITH GIVEN RATIO
        */
        
        var dividedBezier = de.divideBezierCurve(bezier, 0.5);
        
        var b1 = dividedBezier[0],
            b2 = dividedBezier[1];

        ctx.strokeStyle = "green";

        ctx.beginPath();
        ctx.moveTo(b1[0][0], b1[0][1]);
        ctx.bezierCurveTo(b1[1][0], b1[1][1], b1[2][0], b1[2][1], b1[3][0], b1[3][1]);
        ctx.stroke();

        ctx.strokeStyle = "red";

        ctx.beginPath();
        ctx.moveTo(b2[0][0], b2[0][1]);
        ctx.bezierCurveTo(b2[1][0], b2[1][1], b2[2][0], b2[2][1], b2[3][0], b2[3][1]);
        ctx.stroke();
    });
</script>
```

###License
MIT license
