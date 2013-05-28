(function (global) {
    /**
     * Recursive implementation of de Casteljau algorithm.
     * If you want to know more about algorith itself check out
     * Wikipedia:
     * {@link http://en.wikipedia.org/wiki/De_Casteljau's_algorithm}
     * 
     * @param  {array} points   array of control points of Bezier curve
     * @param  {double} t       value between 0 and 1 - 0 is for the beginning of the curve, 1 is for the end
     * @return {array}          point on Bezier curve, index 0 is x coord, index 1 is y coord
     */
    function deCasteljauAlgorithm (points, t) {
        if (t === 1) {
            return points[points.length - 1];
        }

        if (t === 0) {
            return points[0];
        }

        if (points.length == 1) {
            return points[0];
        }

        var calculatedPoints = [];

        for (var i = 1, len = points.length; i < len; i++) {
            calculatedPoints.push(calculatePoints([points[i - 1], points[i]], t));
        }

        return deCasteljauAlgorithm(calculatedPoints, t);
    }

    /**
     * Helper function calculating new point between two given points.
     * The new point is t of the distance between given points.
     * 
     * @param  {array} points
     * @param  {double} t
     * @return {array}
     */
    function calculatePoints (points, t) {
        var p1X = points[0][0], //x coord of first point
            p1Y = points[0][1], //y coord of first point
            p2X = points[1][0], //x coord of second point
            p2Y = points[1][1]; //y coord of second point

        var pInterX = p1X + (p2X - p1X) * t,
            pInterY = p1Y + (p2Y - p1Y) * t;

        return [pInterX, pInterY];
    }

    global["de"] = {
        casteljau: deCasteljauAlgorithm
    };
})(this);
