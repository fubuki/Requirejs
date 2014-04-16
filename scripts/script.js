var margin = {top: 20, right: 20, bottom: 30, left: 50},
  width = 300,
  height = 200;
 
var container = d3.select('body')
  .append('svg')
  .attr('class', 'block')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom);
 
var svg = container.append('g')
  .attr('class', 'content')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')


var data = Array.apply(0, Array(31)).map(function(item, i) {
  i++;
  return {date: '2013-12-' + (i < 10 ? '0' + i : i), pv: parseInt(Math.random() * 100)}
});


var x = d3.time.scale()
  .domain(d3.extent(data, function(d) { return d.day; }))
  .range([0, width]);
 
var y = d3.scale.linear()
  .domain([0, d3.max(data, function(d) { return d.value; })])
  .range([height, 0]);


  var xAxis = d3.svg.axis()
  .scale(x)
  .orient('bottom')
  .ticks(30);
 
var yAxis = d3.svg.axis()
  .scale(y)
  .orient('left')
  .ticks(10);


svg.append('g')
  .attr('class', 'x axis')
  .attr('transform', 'translate(0,' + height + ')')
  .call(xAxis)
  .append('text')
  .text('token')
  .attr('transform', 'translate(' + width + ', 0)');
 
svg.append('g')
  .attr('class', 'y axis')
  .call(yAxis)
  .append('text')
  .text('count');



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