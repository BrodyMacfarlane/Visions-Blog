const yCurve = new MojsCurveEditor({ name: 'yOffset' });
const xCurve = new MojsCurveEditor();

var mainTriangle = new mojs.Shape({
	shape:        'polygon',
	radius:       200,
	radiusY:      200, // explicit radiusY
	left:         '50%',
	top: 		  '50%',
	fill:         { 'rgb(0,0,0,0)' : '#1E1E1E', curve: yCurve.getEasing() },
	isShowStart:  true,
	duration:     2000,
	angle:		  { '0' : '60', curve: xCurve.getEasing() }
})

new MojsPlayer({ add: mainTriangle });