//execute script when window is loaded
window.onload = setPage();


function setPage(){
    //create div container to hold all images
    var container = d3.select("body").append("div")
        .attr("class", "container")

    //create div container for row
    var row = container.append("div")
        .attr("class", "row")

    //first image in folder
    var thumbnail1 = '../assets/Maps/silk-road-zarley-thumbnail.png'
    var path1 = '../assets/Maps/silk-road-zarley.png'
    var imgTitle1 = "Ancient Silk Road"
    //create
    createImg(row, thumbnail1, path1, imgTitle1)

    //first image in folder
    var thumbnail2 = '../assets/Maps/ca_kindergarten_vac_zarley-thumbnail.png'
    var path2 = '../assets/Maps/ca_kindergarten_vac_zarley.png'
    var imgTitle2 = "Kindergarten Vaccinations in CA, 2014-2015"
    //create
    createImg(row, thumbnail2, path2, imgTitle2)

    //first image in folder
    var thumbnail3 = '../assets/Maps/USGS-CVI-zarley-thumbnail.png'
    var path3 = 'http://alexzarley.github.io/CoastalVulnerability/'
    var imgTitle3 = "Coastal Vulnerability"
    //create
    createImg(row, thumbnail3, path3, imgTitle3)


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

        //
        // var titleLink = imgContainer
        //     .append("<h2 class='portfolio-link'> <a class='post-link' href=" + image + ">Ancient Silk Road</a></h2>")

    // var port2 = row.append("div")
    //     .attr("class", "col-md-4")
    //   .append("div")
    //     .attr("class", "thumbnail portfolio-thumbnail")
    //     .text("portfolio item #2")
    //
    // var port3 = row.append("div")
    //     .attr("class", "col-md-4")
    //   .append("div")
    //     .attr("class", "thumbnail portfolio-thumbnail")
    //     .text("portfolio item #3")
    //
    // // var silkRoadMap = map1





};
