import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/slider.css"
const imgs = [{
    img1: "src\assets\slider\Group 3.svg",
    img2: "src\assets\slider\Group(1).svg",
    img3: "src\assets\slider\Group.svg",
    img4: "src\assets\slider\Group.svg",
}
]

class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return (
      <div {...props}>
        <h3>{index}</h3>
      </div>
    );
  }
}

const Multiple = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <div className="px-6 py-3 w-[1000px]">
      <Slider {...settings} >
        <div className="vvv">
        <img src="src\assets\slider\Group.svg" alt="" />
        </div>
        <div >
          <img
            src={
              "https://static.vecteezy.com/system/resources/thumbnails/025/284/015/small_2x/close-up-growing-beautiful-forest-in-glass-ball-and-flying-butterflies-in-nature-outdoors-spring-season-concept-generative-ai-photo.jpg"
            }
            className="w-full h-[250px] object-cover"
          />
        </div>
        <div>
          <img
            src={
              "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.webp?b=1&s=612x612&w=0&k=20&c=81f5HaMtoPNUrdfa4hnS8NcwEgD9tH2nnTUBu25Msug="
            }
            className="w-full h-[250px] object-cover"
          />
        </div>
        <div>
          <img
            src={
              "https://media.istockphoto.com/id/584248074/photo/sunrise-over-mt-hood-at-trillium-lake.jpg?s=612x612&w=0&k=20&c=SphRF0izMKMS-efnhwdzn9anM9HtzXEhGAb2fKdkHY8="
            }
            className="w-full h-[250px] object-cover"
          />
        </div>
        <div>
          <img
            src={
              "https://hips.hearstapps.com/hmg-prod/images/nature-quotes-landscape-1648265299.jpg?crop=0.676xw:1.00xh;0.148xw,0&resize=640:*"
            }
            className="w-full h-[250px] object-cover"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Multiple;