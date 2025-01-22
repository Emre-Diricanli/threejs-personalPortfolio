import { WavyBackground } from "../components/wavy-background";

const Alt_Hero = () => {
  return (
    <section className=" w-full flex flex-col " id="home">
      <WavyBackground className="max-w-7xl mx-auto pb-30">
        <div className=" mx-auto c-space gap-3">
          <p className="sm:text-lg md:text-5xl text-8xl font-medium text-white text-center font-generalsans">
            Hi, I am <span>Emre</span>
          </p>
          <p className="hero_tag text-gray_gradient">
            Building Products and Brands
          </p>
        </div>
      </WavyBackground>
    </section>
  );
};

export default Alt_Hero;
