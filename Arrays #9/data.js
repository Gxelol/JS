const x = { 
  grid: [
    {
      image: {
        data: [
          {
            attributes: {
              url: "MyUrl",
              alternativeText: "MyAltText"
            },
          },
          {
            attributes: {
              url: "noooooo",
              alternativeText: "MyAltText"
            },
          },
          {
            attributes: {
              url: "nooo",
              alternativeText: "MyAltText"
            },
          }
        ]
      }
    }
  ]
}

const grid = (x.grid.map((img) => {
  const data = img.image.data;
  return data.map((obj) => {
    const {
      attributes: { url: srcImg = '', alternativeText: altText = '' } = '',
    } = obj;
    return {
      srcImg,
      altText
    }
  })
}))[0];

