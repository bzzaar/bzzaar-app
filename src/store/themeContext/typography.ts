// weight, size, family
export const typography = {
  h1: "400 3.4rem var(--font2)",
  h2: "400 2.4rem var(--font2)",
  h3: {
    normal: "400 1.8rem var(--font2)",
    onOrange: "700 1.8rem var(--font2)",
  },
  h4: "400 2rem var(--font2)",
  h5: "400 2.2rem var(--font1)",
  h6: "400 1.8rem var(--font1)",
  h6_bold: "700 1.8rem var(--font1)",
  p1: "500 1.4rem var(--font1)",
  p2: "400 3.2rem var(--font1)",
  input: "400 2.8rem var(--font1)",
  error: "400 1.2rem var(--font1)",
  highlight: "700 1.4rem var(--font2)",
  highlight2: "500 1.4rem var(--font2)",
};

export interface Typography {
  h1: string;
  h2: string;
  h3: {
    normal: string;
    onOrange: string;
  };
  h4: string;
  h5: string;
  h6: string;
  h6_bold: string;
  p1: string;
  p2: string;
  input: string;
  error: string;
  highlight: string;
  highlight2: string;
}
