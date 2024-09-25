import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Nandeti Daniel Melwin is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="Nandeti Daniel Melwin, daniel, ranganath, web developer portfolio, daniel web developer, daniel developer, mern stack, Nandeti Daniel Melwin portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Nandeti Daniel Melwin's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Nandeti Daniel Melwin',
};
