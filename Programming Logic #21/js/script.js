function eLandscape (width, height) {
    height < width ? console.log(`Is the image a landscape? ${true} --- height: ${height}, width: ${width}`) : 
    console.log(`Is the image a landscape?${false} --- height: ${height}, width: ${width}`);
}

eLandscape(Math.floor(Math.random() * 100), Math.floor(Math.random() * 100))