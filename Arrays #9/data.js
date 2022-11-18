const x = {
  sections: [
    {
      image: {
        data: [
          {
            attributes: {
              url: "MyUrl",
              alternativeText: "MyAltText"
            }
          }
        ]
      }
    }
  ]
}

const sections = (x.sections.map((section) => {
  return (
    (section.image.data.map((data) => {
    const srcImg = data.attributes.url;
    const altText = data.attributes.alternativeText;

    return (
      { srcImg, altText }
    );
  })));
}));

console.log(sections[0][0].altText);
console.log(sections[0][0].srcImg);

