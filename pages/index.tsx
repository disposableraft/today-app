import Head from "next/head";
import { Layout } from "../components/layout";
import style from "../styles/home.module.css";

const Home: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title key="title">TODAY</title>
      </Head>
      <section className={style.section} data-testid="section">
        <div>
          <h3>I Want To</h3>
          <form name="want-to">
            <input placeholder="New item" type="text" />
            <button type="submit">Submit</button>
          </form>
          <ul>
            <li>Walk the dog</li>
            <li>Learn category theory</li>
            <li>Build a web app</li>
          </ul>
        </div>
      </section>
      <section className={style.section} data-testid="section">
        <div>
          <h3>I Did</h3>
          <form name="did">
            <input placeholder="New item" type="text" />
            <button type="submit">Submit</button>
          </form>
          <ul>
            <li>Surfing</li>
            <li>Walk the dog</li>
            <li>Focus on breathing</li>
          </ul>
        </div>
      </section>
      <section className={style.section} data-testid="section">
        <div>
          <h3>I Learned</h3>
          <form name="learned">
            <input placeholder="New item" type="text" />
            <button type="submit">Submit</button>
          </form>
          <ul>
            <li>Learning to relax</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
