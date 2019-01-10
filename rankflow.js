let list = d3.select("#ranking")
.append("svg")
.attr("width", 800)
.attr("height", 600);

let pt = d3.scaleLinear()
.domain([0,25.85])
.range([6,30]);

let y = d3.scaleLinear()
.domain([1,20])
.range([20, 500])

d3.tsv("appendix.tsv", function(error, data) {
	if (error) throw error;

	list.selectAll("text")
	.data(data)
	.enter()
	.append("text")
	.text(d => {
		return d.word
	})
	.attr("x", 20)
	.attr("y", d => {
		return y(+d.id);
	})
	.attr("font-size", function(d) {
		return pt(+d.score);
	});

	console.log(pt.domain[1]);

});