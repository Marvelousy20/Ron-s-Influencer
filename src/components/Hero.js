import { ImTwitter } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import Image from "../assets/hero.png";
import Overlay from "../assets/overlay.png";
import AnimatedText from "react-animated-text-content";
import HeroB from "../assets/herob.png";

function Hero() {
  return (
    <div
      style={{
        background: `url(${Image})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="px-4 md:px-36 pt-8 overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 h-screen">
        <img src={Overlay} alt="overlay" className="h-full w-full" />
      </div>

      <div className="flex justify-between">
        <div className="flex md:flex-col">
          <a href="https://twitter.com/CryptoPromos40/">
            <ImTwitter size={30} color="white" className="mb-8 mr-4 md:mr-0" />
          </a>

          <a href="https://instagram.com/neato.crypto/">
            <RiInstagramFill size={30} color="white" />
          </a>
        </div>

        <div className="cursor-pointer">
          <a
            href="https://t.me/ronsalpha/"
            className="bg-white px-6 py-3 font-int rounded-md cursor-pointer"
            style={{ cursor: "pointer" }}
          >
            My Telegram Channel
          </a>
        </div>
      </div>

      <section className=" text-white grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-10 md:mt-0">
        <div>
          <h1 className="font-hb text-4xl mb-4 md:text-5xl md:mb-6">
            Join Our <br /> Community
          </h1>

          <div className="text-lg max-w-[450px] mb-10 font-int overflow-x-hidden">
            <AnimatedText
              type="words"
              animation={{
                x: "200px",
                y: "-20px",
                scale: 1.1,
                ease: "ease-in-out",
              }}
              animationType="float"
              interval={0.06}
              duration={0.8}
              tag="p"
              className="animated-paragraph"
              includeWhiteSpaces
              threshold={0.1}
              rootMargin="20%"
            >
              We connect creators with the best Cryptocurrency and NFT projects
              in the world.
            </AnimatedText>
          </div>

          <a
            href="https://instagram.com/neato.crypto"
            className="px-6 py-3 text-white font-int rounded-md cursor-pointer"
            style={{
              background:
                "linear-gradient(99.88deg, #11EB4E -23.58%, #0A8F2F 119.08%)",
            }}
          >
            Join Now
          </a>
        </div>

        <div>
          <img src={HeroB} alt="herob" />
        </div>
      </section>
    </div>
  );
}

export default Hero;
