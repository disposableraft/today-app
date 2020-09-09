import Head from "next/head";
import style from "../styles/layout.module.css";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={style.root}>
      <Head>
        <meta name="description" content="Add a desc" />
        <meta name="keywords" content="key,words" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="http://example.com" />
      </Head>
      <header className={style.header}>
        <h1>today</h1>
      </header>
      <main className={style.main}>{children}</main>
      <footer className={style.footer}>The footer</footer>
    </div>
  );
};

export { Layout };
