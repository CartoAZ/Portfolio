//execute script when window is loaded
window.onload = setPage();


function setPage(){

    //jumbotron div
    var jumbotron = d3.select("body").append("div")
        .attr("class", "jumbotron")

    //jumbotron container div
    var jumbotronContainer = jumbotron.append("div")
        .attr("class", "container")

    var nameHeader = jumbotronContainer.append("h2")
        .html("Alex Zarley")

    var professions = jumbotronContainer.append("p")
        .html("Cartographer | GIS | Archaeologist")

    //create div container to hold all images
    var container = d3.select("body").append("div")
        .attr("class", "container")

    //create div container for row
    var row = container.append("div")
        .attr("class", "row")

    //silk road map
    var thumbnail1 = '../assets/Maps/silk-road-zarley-thumbnail.png'
    var path1 = '../assets/Maps/silk-road-zarley.png'
    var imgTitle1 = "Ancient Silk Road"
    createImg(row, thumbnail1, path1, imgTitle1)

    //vaccination map
    var thumbnail2 = '../assets/Maps/ca_kindergarten_vac_zarley-thumbnail.png'
    var path2 = '../assets/Maps/ca_kindergarten_vac_zarley.png'
    var imgTitle2 = "Kindergarten Vaccinations in CA, 2014-2015"
    createImg(row, thumbnail2, path2, imgTitle2)

    //CVI interactive map
    var thumbnail3 = '../assets/Maps/USGS-CVI-zarley-thumbnail.png'
    var path3 = 'http://alexzarley.github.io/CoastalVulnerability/'
    var imgTitle3 = "Coastal Vulnerability to Sea Level Rise"
    createImg(row, thumbnail3, path3, imgTitle3)

    //Springsteen interactive map
    var thumbnail8 = '../assets/Maps/springsteen-by-decade-thumbnail.png'
    var path8 = 'http://alexzarley.github.io/springsteen-concerts-by-decade/'
    var imgTitle8 = "Bruce Springsteen Concerts"
    createImg(row, thumbnail8, path8, imgTitle8)

    //africa map
    var thumbnail4 = '../assets/Maps/afr-cultural-map-zarley-thumbnail.png'
    var path4 = '../assets/Maps/afr-cultural-map-zarley.png'
    var imgTitle4 = "Political Geography of Africa"
    createImg(row, thumbnail4, path4, imgTitle4)

    //Civil War Casualty map
    var thumbnail5 = '../assets/Maps/civil_war_casualties_zarley-thumbnail.png'
    var path5 = '../assets/Maps/civil_war_casualties_zarley.png'
    var imgTitle5 = "Mostly Costly Land Battles of US Civil War"
    createImg(row, thumbnail5, path5, imgTitle5)

    //Madison Weather map
    var thumbnail6 = '../assets/Maps/madison_weather_zarley-thumbnail.png'
    var path6 = '../assets/Maps/madison_weather_zarley.png'
    var imgTitle6 = "Madison Weather"
    createImg(row, thumbnail6, path6, imgTitle6)

    //NC Lighthouses
    var thumbnail7 = '../assets/Maps/nc_lighthouses-zarley-thumbnail.png'
    var path7 = '../assets/Maps/nc_lighthouses-zarley-thumbnail.png'
    var imgTitle7 = "Madison Weather"
    createImg(row, thumbnail7, path7, imgTitle7)

}

function createImg(row, thumbnail, image, title) {
    var imgContainer = row.append("div")
        .attr("class", "col-md-4 col-sm-6")

    var map1 = imgContainer.append("div")
        .attr("class", "thumbnail portfolio-thumbnail")
        .html("<a href=" + image + " target='_blank'> <img src=" + thumbnail + " alt='Silk Road' class='img-responsive portfolio-thumbnail-img'/></a>")

    var titleLink = imgContainer.append("h2")
        .attr("class", "portfolio-link")
        .html("<a class='post-link' href=" + image + " target='_blank'>" + title + "</a>")

};
