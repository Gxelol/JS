function eLandscape (width, height) {
    height < width ? console.log(`${true} --- height: ${height}, width: ${width}`) : console.log(`${false} --- height: ${height}, width: ${width}`);
}

eLandscape(Math.floor(Math.random() * 100), Math.floor(Math.random() * 100))