var margin = {top: 20, right: 20, bottom: 30, left: 50},
  width = 300,
  height = 200;
 
var container = d3.select('body')
  .append('svg')
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
