// It wraps the complexity regarding media query creation
const BaseMedia = (screen: string) => ([params]: TemplateStringsArray) => `
  @media screen and (max-width: ${screen}) { ${params} }
`;

// It centrilize the small screen param
// changing it here reflects into the entire app
export const MediaSM = BaseMedia('560px');
