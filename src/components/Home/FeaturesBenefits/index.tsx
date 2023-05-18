import * as Style from "./styles";
import { featuresBenefitsData } from "@/config/site";
import useIsMobile from "@/hooks/useIsMobile";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper";

const renderIcon = (icon) => {
  switch (icon) {
    case "RiTruckLine":
      return <RiTruckLine size={24} />;
    // Adicione mais casos conforme necessário para outros ícones
    default:
      return null;
  }
};

export function FeaturesBenefits() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Style.FeaturesBenefitsContainer>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
        >
          {featuresBenefitsData.map((featureBenefit, index) => (
            <SwiperSlide key={index}>
              <Style.Card>
                {renderIcon(item.icon)}
                <Style.Title>{featureBenefit.title}</Style.Title>
                <Style.Description>
                  {featureBenefit.description}
                </Style.Description>
              </Style.Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Style.FeaturesBenefitsContainer>
    );
  }

  return (
    <Style.FeaturesBenefitsContainer>
      {featuresBenefitsData.map((featureBenefit, index) => (
        <Style.Card key={index}>
          {renderIcon(item.icon)}
          <Style.Title>{featureBenefit.title}</Style.Title>
          <Style.Description>{featureBenefit.description}</Style.Description>
        </Style.Card>
      ))}
    </Style.FeaturesBenefitsContainer>
  );
}
