import logo from "./logo.svg";
import "./App.css";
import { tw } from "twind";
import { useMedia } from "react-use";
import brand from "./images/Brand.png";
import bars from "./images/bars.png";
import speaker from "./images/Speaker.png";
import orangeLine_hor from "./images/orange_hor.png";
import orangeLine_ver from "./images/orange_ver.png";
import pink_hor from "./images/pink_hor.png";
import pink_ver from "./images/pink_ver.png";
import green_hor from "./images/green_hor.png";
import green_ver from "./images/green_ver.png";
import purp_hor from "./images/purp_hor.png";
import purp_ver from "./images/purp_ver.png";
import styles from "./styles/home.module.css";
import block from "./images/center-block.png";
import bulbbox from "./images/Bulb_box.png";

const ServiceCards = ({ title, image, desc, revert }) => {
  const isMobile = useMedia("(max-width: 1000px)", false);
  return (
    <div
      className={tw(
        `flex justify-center items-center  border-2 border-black shadow-2xl shadow-black/90 bg-white rounded-[20px] border-2 p-4 text-sm  ${
          revert && `flex-row-reverse`
        } ${isMobile ? "w-[300px] h-[100px]" : "w-[400px] h-[150px]"} `
      )}
    >
      <div>
        <h1
          className={tw(
            `${isMobile ? "text-sm" : " text-xl"} font-bold uppercase`
          )}
        >
          {title}
        </h1>
        <p className={tw(`${isMobile ? "text-left" : ""}`)}>{desc}</p>
      </div>
      <div className={tw("p-1")}>
        <img
          src={image}
          alt=""
          className={tw(`${isMobile ? "w-[200px]" : "w-[200px]"}`)}
        />
      </div>
    </div>
  );
};

function App() {
  const isMobile = useMedia("(max-width: 1250px)", false);

  return (
    <>
      <main className={tw(`m-auto w-full relative`)}>
        <div className={tw(`${isMobile ? "hidden" : ""} w-max m-auto`)}>
          <div
            className={tw(
              `${isMobile ? "hidden" : "absolute top-[40%] left-[43%]"}`
            )}
          >
            <img src={block} alt="" className={tw("w-[200px]")} />
          </div>
          <div
            className={`${tw("absolute top-[38.7%] left-[49%] z-0")} ${
              isMobile && tw("hidden")
            }`}
          >
            <img src={orangeLine_hor} alt="" className={styles.orange_hor} />
            <img src={orangeLine_ver} alt="" className={styles.orange_ver} />
          </div>
          <div
            className={`${tw("absolute bottom-[14%] left-[51%] z-0")} ${
              isMobile && tw("hidden")
            }`}
          >
            <img src={pink_hor} alt="" className={styles.pink_hor} />
            <img src={pink_ver} alt="" className={styles.pink_ver} />
          </div>
          <div
            className={`${tw(
              "absolute top-[60%] left-[39.5%] w-[100px] z-0"
            )} ${isMobile && tw("hidden")}`}
          >
            <img src={purp_hor} alt="" className={styles.flow_hor} />
            <img src={purp_ver} alt="" className={styles.flow_ver} />
          </div>
          <div
            className={`${tw(
              "absolute top-[41%] left-[56%] rotate z-0 overflow-hidden"
            )} ${isMobile && tw("hidden")} divedit`}
          >
            <div className={`${tw("flex")}`}>
              <img
                src={green_hor}
                alt=""
                className={`${styles.green_hor} ${styles.green}`}
              />
              <img src={green_ver} alt="" className={styles.green_ver} />
            </div>
          </div>
        </div>
        <section
          className={tw(
            ` ${
              isMobile
                ? "flex flex-col  justify-center space-y-7 my-4 w-max m-auto pt-[30px] "
                : " grid grid-cols-2 m-auto w-max gap-[190px] pt-[130px]"
            } `
          )}
        >
          <div
            className={tw(
              `${
                isMobile
                  ? "space-y-5"
                  : "w-[500px] flex items-center justify-end z-10"
              }`
            )}
          >
            <ServiceCards
              title="Brand Building"
              desc="Building a Blockchain brand is not just about creating a community but evangelizing "
              image={bulbbox}
            />
          </div>
          <div
            className={tw(
              `${
                isMobile ? "" : "w-[500px] flex items-center justify-start z-10"
              }`
            )}
          >
            <ServiceCards
              title="Product Growth"
              desc="Building a Blockchain brand is not just about creating a community but evangelizing "
              image={brand}
              revert={true}
            />
          </div>
          <div
            className={tw(
              `${
                isMobile ? "" : "w-[500px] flex items-center justify-end z-10"
              }`
            )}
          >
            <ServiceCards
              title="MARKETING STRATEGY"
              desc="Building a Blockchain brand is not just about creating a community but evangelizing "
              image={speaker}
            />
          </div>
          <div
            className={tw(
              `${
                isMobile
                  ? " "
                  : "w-[500px] flex items-center justify-start z-10"
              }`
            )}
          >
            <ServiceCards
              title="brand Building"
              desc="Building a Blockchain brand is not just about creating a community but evangelizing "
              image={bars}
              revert={true}
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
