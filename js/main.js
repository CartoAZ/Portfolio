//execute script when window is loaded
window.onload = setPage();


function setPage(){

    var container = d3.select("body").append("div")
        .attr("class", "container")

    var row = container.append("div")
        .attr("class", "row")

    var port1 = row.append("div")
        .attr("class", "col-md-4")

    var map1 = port1.append("div")
        .attr("class", "thumbnail portfolio-thumbnail")
        .html("<a href='portfolio/colombia.html'>")
        .append("<img src='../assets/Maps/silk-road-zarley.jpg' alt='Silk Road'/></a>")

    var port2 = row.append("div")
        .attr("class", "col-md-4")
      .append("div")
        .attr("class", "thumbnail portfolio-thumbnail")
        .text("portfolio item #2")

    var port3 = row.append("div")
        .attr("class", "col-md-4")
      .append("div")
        .attr("class", "thumbnail portfolio-thumbnail")
        .text("portfolio item #3")

    // var silkRoadMap = map1





};
