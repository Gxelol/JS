const x = {
  sections: [
    {
      image: {
        data: [
          {
            attributes: {
              url: "srcImg",
              alternativeText: "altText"
            }
          }
        ]
      }
    }
  ]
}

console.log(x.sections.map((d) => {
  console.log(d.image.data.map((data) => {
    console.log(data.attributes.url);
    console.log(data.attributes.alternativeText);
  }));
}));