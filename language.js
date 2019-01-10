let love = d3.select("#love");
let haha = d3.select("#haha");
let wow = d3.select("#wow");
let sad = d3.select("#sad");
let angry = d3.select("#angry");

d3.tsv("keywords.tsv", function(error, data) {
	if (error) throw error;

	love.selectAll("p")
	.data(data)
	.enter()
	.append("p")
	.text(d => { 
		return d.love;
	})
	.attr("class", d => {
		return d.love;
	});

	haha.selectAll("p")
	.data(data)
	.enter()
	.append("p")
	.text(d => { 
		return d.haha;
	})
	.attr("class", d => {
		return d.haha;
	});

	wow.selectAll("p")
	.data(data)
	.enter()
	.append("p")
	.text(d => { 
		return d.wow;
	})
	.attr("class", d => {
		return d.wow;
	});

	sad.selectAll("p")
	.data(data)
	.enter()
	.append("p")
	.text(d => { 
		return d.sad;
	})
	.attr("class", d => {
		return d.sad;
	});

	angry.selectAll("p")
	.data(data)
	.enter()
	.append("p")
	.text(d => { 
		return d.angry;
	})
	.attr("class", d => {
		return d.angry;
	});

	d3.selectAll("p").on("click", function(d){
		d3.selectAll("p").style("background", "none")
		d3.selectAll("." + this.getAttribute('class')).style("background", "#49fb35")
	});

	d3.selectAll("body").on("click"), function(d){
		d3.selectAll("p").style("background", "none")
	};

});