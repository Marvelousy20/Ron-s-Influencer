import Image from "../assets/connect.png";
import Overlay from "../assets/overlay.png";
import AnimatedText from "react-animated-text-content";
import img2 from "../assets/2.jpg";
import man from "../assets/man.png";

export default function Connect() {
  return (
    <div
      style={{
        background: `url(${Image})`,
        // height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="px-4 py-20 md:py-36 md:px-36 grid md:grid-cols-2 grid-col-1 gap-20 overflow-hidden items-center relative text-center md:text-left"
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 h-screen">
        <img src={Overlay} alt="overlay" className="h-full w-full" />
      </div>

      <section className="text-white">
        <h1 className="font-hb text-4xl md:text-5xl mb-6 max-w-[600px]">
          We Connect Developers with Influencers
        </h1>

        <div className="md:text-lg text-base max-w-[600px] mb-10 font-int">
          <AnimatedText
            type="words"
            animation={{
              x: "10px",
              y: "-20px",
              scale: 1.1,
              ease: "ease-in-out",
            }}
            // animationType="float"
            interval={0.06}
            duration={0.5}
            tag="p"
            className="animated-paragraph"
            includeWhiteSpaces
            threshold={0.1}
            rootMargin="20%"
          >
            Are you a developer looking to expand your project's reach? From
            whitelisting to pos-mint marketing, WE HAVE YOU COVERED! With access
            to the top Social Media Influencers, we have the marketing power to
            grow your community and boost engagement on all fronts!
          </AnimatedText>
        </div>

        <a
          href="https://t.me/ronthedon40"
          className="px-6 py-3 text-white font-int rounded-md"
          style={{
            background:
              "linear-gradient(99.88deg, #11EB4E -23.58%, #0A8F2F 119.08%)",
          }}
        >
          PM Me on Telegram
        </a>
      </section>

      <section className="items-center place-self-center">
        <div className="relative" style={{marginBottom: '40px'}}>
          <div
            className="bg-white opacity-20 rounded-[20px] h-[250px] w-[250px]"
            style={{ boxShadow: "1px 1px 10px 0 rgb(0 0 0 / 25%)" }}
          ></div>
          <a href="https://www.instagram.com/cryptodateline/">@Cryptodateline</a>
          <div className="absolute top-0">
              <img src={img2} alt="img2" className="max-w-[250px]" />
          </div>
        </div>

        <div className="relative md:-mt-20 md:ml-32">
          <div
            className="bg-white opacity-20 rounded-[20px] h-[250px] w-[250px]"
            style={{ boxShadow: "1px 1px 10px 0 rgb(0 0 0 / 25%)" }}
          ></div>
          <a href = "https://www.instagram.com/neato.crypto/">@neato.crypto</a>

          <div className="absolute top-0">
            <img src={man} alt="img2" className="max-w-[250px]" />
          </div>
        </div>
      </section>
    </div>
  );
}
