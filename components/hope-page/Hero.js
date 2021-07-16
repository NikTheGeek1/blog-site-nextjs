import classes from "./Hero.module.css";
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
          <Image src="/images/site/nikos.png" alt="An image showing Nikos" width={200} height={200}/>
      </div>
      <h1>Hi I am Nikos</h1>
      <p>I blog about web development - espcecially front-end frameworks</p>
    </section>
  );
};

export default Hero;
