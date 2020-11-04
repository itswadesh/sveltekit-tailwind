<script>
  // import Swiper core and required components
  import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

  import { Swiper, SwiperSlide } from "swiper/svelte";

  // Import Swiper styles
  import "swiper/swiper.scss";
  import "swiper/components/navigation/navigation.scss";
  import "swiper/components/pagination/pagination.scss";
  import "swiper/components/scrollbar/scrollbar.scss";

  // install Swiper components
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
</script>

<Swiper
  spaceBetween={50}
  slidesPerView={3}
  navigation
  pagination={{ clickable: true }}
  scrollbar={{ draggable: true }}
  on:slideChange={() => console.log('slide change')}
  on:swiper={e => console.log(e.detail[0])}>
  <SwiperSlide>Slide 1</SwiperSlide>
  <SwiperSlide>Slide 2</SwiperSlide>
  <SwiperSlide>Slide 3</SwiperSlide>
  <SwiperSlide>Slide 4</SwiperSlide>
  ...
</Swiper>
