import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am Karla Yzabela Ablaza Santos, a 20-year old, third-year computer engineering student. I currently reside in Minalin, Pampanga. My hobbies are playing games, watching movies and TV shows, riding my mamachari bicycle, and exploring the Internet. I listen religiously to Ado, Hypnosis Microphone, DAY6, and TV Girl. 
        <p> <br/> </p>
          I took the program BS in Computer Engineering because I want to build anything I want in the future. This course is a mixture of hardware and software so it is sufficient in learning the fundamentals. It is in the tech industry so it is practical and my career will have a good way if I choose the right path. 
        <p> <br/> </p>
          I see myself in the field of robotics and artificial intelligence because I am intrigued of the things that computer-controlled objects can do in the future. Right now, AI is booming and I want to be able to contribute to the benefits it can give to the humankind. I am also curious on how the humankind would handle the massive advancements of technology.</p>
      </section>
    </Layout>
  );
}