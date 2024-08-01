import AcheivementSection from "../Components/AcheivementSection";
import EssentialSkill from "../Components/EssentialSkill";
import HeroSection from "../Components/HeroSection";
import TopProgram from "../Components/TopPrograms";

const Home = () => {
  return (
    <>
      <HeroSection />
      <h1 className="text-4xl mt-20 lg:text-5xl font-bold text-center">
        Launch a career in tech
        <span
          style={{
            background: "linear-gradient(to right, #64cacf 0%, #461cde 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="ml-1"
        >
          that lasts.
        </span>
      </h1>
      <p className="text-center mt-6">
        Our programs teach you everything you need to get your first job in tech
        and build a career fit for the future. With flexible study options, you
        can learn part-time or full-time and graduate between 5-12 months.
      </p>
      <TopProgram />
      <AcheivementSection />
    </>
  );
};

export default Home;
