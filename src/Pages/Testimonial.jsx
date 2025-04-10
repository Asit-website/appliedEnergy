// import "./home.css";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight,} from "react-icons/md";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef } from "react";
// import bmw from "../../assets/bmw.png";
// import stars from "../../assets/stars.png";

function Testimonial() {
  const splideRef = useRef(null);

  const goPrev = () => {
    splideRef.current.splide.go("-1");
  };

  const goNext = () => {
    splideRef.current.splide.go("+1");
  };

  return (

    <div className="homefivwrap">

      <div className="linebtutonsleft">
        <div className="bt5line"></div>
        <button onClick={goPrev} className="leftarrowbtns2 hide4">
          <MdOutlineKeyboardArrowLeft className="arrosss2" />{" "}
        </button>
      </div>

      <div className="homefivtcont">
        <h2>TESTIMONIALS</h2>

        <div className="homefiinncont">
          <div className="fivtslidere">
            <Splide
              ref={splideRef}
              options={{
                type: "loop",
                autoplay: true, 
                interval: 3000, 
                speed:2000, 
                perPage: 1,
                start: 0,
                speed: 2000,
                Pagination: false,
                arrows: false,
                gap: "30px",
                breakpoints: {},
              }}
            >
              <SplideSlide>
                <div className="fivtslide">
                  {/* <img src={bmw} alt="" /> */}

                  <div className="fivcontent">
                    <p>
                    It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table Samsa was a travelling salesman. A collection of textile samples lay spread.
                    </p>
                    {/* <img src={stars} alt="" /> */}
                  </div>
                </div>
              </SplideSlide>

              <SplideSlide>
                <div className="fivtslide">
                  {/* <img src={bmw} alt="" /> */}

                  <div className="fivcontent">
                    <p>
                     Since more than 25 years we are procuring fasteners from M/s Applied Energy fasteners Private Limited. We are getting timely deliveries for every order & never we have faced any quality/performance issue in the fasteners & overall performance of fastners is very satisfactory.
                    </p>
                    {/* <img src={stars} alt="" /> */}
                  </div>
                </div>
              </SplideSlide>

              <SplideSlide>
                <div className="fivtslide">
                  {/* <img src={bmw} alt="" /> */}

                  <div className="fivcontent">
                    <p>
                    M/s Applied Energy Fashners Pvt Ltd. is preserving stocks of fasteners for us,Which we are using on regular basis, the great fact is we are getting timely supply of fasteners even for small quantity.
                    </p>
                    {/* <img src={stars} alt="" /> */}
                  </div>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>
        
      </div>

      <div className="bntsswwrap">
        <button onClick={goPrev} className="leftarrowbtns2 hide1f">
          <MdOutlineKeyboardArrowLeft className="arrosss2" />{" "}
        </button>

        <button onClick={goNext} className="leftarrowbtns2">
          <MdOutlineKeyboardArrowRight className="arrosss2" />{" "}
        </button>
      </div>

      <div className="linebtutonsright">
        <div className="bt5line"></div>
        <button onClick={goNext} className="leftarrowbtns2">
          <MdOutlineKeyboardArrowRight className="arrosss2" />{" "}
        </button>
      </div>

    </div>
  );
}

export default Testimonial;
