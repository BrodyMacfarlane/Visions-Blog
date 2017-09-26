// const yCurve = new MojsCurveEditor({ name: 'yOffset' });
// const xCurve = new MojsCurveEditor();
// yCurve.getEasing()

var navBar = new mojs.Shape({
	repeat: 5,
	isYoyo: true,
	width: '100%',
	height: 65,
	shape: 'rect',
	fill: { '#FFD6D1' : '#D1F4FF' },
	isShowStart:  true,
	className: 'yoyoyo',
	duration: 1200
}).then({
	fill: { '#D1F4FF' : '#FFD6D1' }
}).then({
	fill: '#FFF'
}).play()

var mainTriangle = new mojs.Shape({
	width:        400,
	height:       400,
	shape:        'polygon',
	radiusX:      200,
	radiusY:      200,
	fill:         'none',
	stroke:           { '#FFD6D1' : '#D1F4FF' },
	strokeWidth:      '10',
  	strokeDasharray:  '100%',
  	strokeDashoffset: { '-100%' : '100%' },
 	y:               -20,
	isShowStart:  false,
	duration:     1200,
	angle:		  180
}).then({
	radiusX:      0,
	duration:     0
}).then({
	radiusX:      200,
	stroke:       'none',
	fill:         { '#D1F4FF' : '#FFD6D1' },
	duration:     1200
}).then({
	fill:         '#222222'
}).play()

const visionsText = new mojs.Html({
	el: '#visions-text',
	delay: 1400,
	opacity: {'0':'1'},
	duration: 1000
}).play()

// new MojsPlayer({ add: mainTriangle, navBar });