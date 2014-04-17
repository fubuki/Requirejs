var dataset = [ 25, 7, 5, 26, 11, 8, 25, 14, 23, 19,
14, 11, 22, 29, 11, 13, 12, 17, 18, 10,
24, 18, 25, 9, 3 ];

d3.select("body").selectAll("div")
	.data(dataset)  // <-- The answer is here!
	.enter()
	.append("div")
	.attr("class", "bar")
	.style("height", function(d) {
	var barHeight = d * 5;
	return barHeight + "px";
});

var w = 500;
var h = 100;
var barPadding = 1;

var svg = d3.select("body")
.append("svg")
.attr("width", w)
.attr("height", h);

svg.selectAll("rect")
.data(dataset)
.enter()
.append("rect")
.attr({
x: function(d, i) { return i * (w / dataset.length); },
y: function(d) { return h - (d * 4); },
width: w / dataset.length - barPadding,
height: function(d) { return d * 4; },
fill: function(d) { return "rgb(0, 0, " + (d * 10) + ")"; }
});


var circle = d3.select("body")
.append("svg")
.attr("width", 500)
.attr("height", 200);


circle.append("circle")        // attach a circle
    .attr("cx", 200)           // position the x-centre
    .attr("cy", 100)           // position the y-centre
    .attr("r", 50)             // set the radius
    .style("fill-opacity", .2) // set the fill opacity
    .style("stroke", "black")    // set the line colour
    .style("fill", "grean");   // set the fill colour


function draw(data) {
	d3.select("body")
	.append("div")
	.attr("class","chart")
	.selectAll(".bar")
	.data(data.cash)
	.enter()
	.append("div")
	.attr("class","bar")
	.style("width", function(d){return d.count/100 + "px"})
	.style("outline", "1px solid black")
	.text(function(d){return Math.round(d.count)});
}