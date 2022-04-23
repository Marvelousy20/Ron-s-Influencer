import Image from "../assets/difference.png";
import Overlay from "../assets/overlay.png";
import Gus from "../assets/gus.mp4";
import SadBoy from "../assets/sadboy.mp4";
import Promo from "../assets/promo.mp4";

export default function Difference() {
  return (
    <div
      style={{
        background: `url(${Image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="md:px-36 px-4 py-20 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 h-full">
        <img src={Overlay} alt="overlay" className="h-full w-full" />
      </div>

      <section className=" text-white">
        <h1 className="font-hb text-center text-3xl md:text-5xl">
          THE OBVIOUS DIFFERENCE
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 md:mt-32 items-center">
          <div>
            <div className="rounded-3xl overflow-hidden">
              <video
                width="100%"
                height="250"
                loop
                preload="false"
                controls
                tabIndex="0"
                playsInline
                muted
              >
                <source src={SadBoy} type="video/mp4" />
              </video>
            </div>

            <div className="mt-6">
              <small className="font-int">@SadBoyloko</small>
              <p className="font-hb text-xl">CONNECT</p>
            </div>
          </div>

          <div>
            <div className="rounded-3xl overflow-hidden">
              <video
                width="100%"
                height="250"
                loop
                preload="false"
                controls
                tabIndex="0"
                playsInline
                muted
              >
                <source src={Gus} type="video/mp4" />
              </video>
            </div>
            <div className="mt-6">
              <small className="font-int">@049GUS</small>
              <p className="font-hb text-xl">COLLABORATE</p>
            </div>
          </div>

          <div>
            <div className="rounded-3xl overflow-hidden">
              <video
                width="100%"
                height="250"
                loop
                preload="false"
                controls
                tabIndex="0"
                playsInline
                muted
              >
                <source src={Promo} type="video/mp4" />
              </video>
            </div>
            <div className="mt-6">
              <small className="font-int">promo</small>
              <p className="font-hb text-xl">CONNECT</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="font-hb text-xl md:text-3xl mb-6">
            JOIN OUR CREATOR COMMUNITY
          </div>
          <a
            href="https://instagram.com/neato.crypto"
            className="px-6 py-3 text-white font-int rounded-md cursor-pointer"
            style={{
              background:
                "linear-gradient(99.88deg, #11EB4E -23.58%, #0A8F2F 119.08%)",
            }}
          >
            DM Me
          </a>
        </div>
      </section>
    </div>
  );
}
