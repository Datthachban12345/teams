var swiper3dDat = new Swiper(".swiper-dat-3d-1", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1.5,
  spaceBetween: 24, // Số slide mặc định hiển thị
  breakpoints: {
    // Khi màn hình >= 640px
    640: {
      slidesPerView: 3, // Hiển thị 3 slide trên màn hình trung bình
    },
    // Khi màn hình >= 1537px
    1537: {
      slidesPerView: 4, // Hiển thị 4 slide trên màn hình lớn
    },
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 5,
  },
});

var swiper3dDat2 = new Swiper(".swiper-dat-3d-2", {
  slidesPerView: 1,
  pagination: {
    el: ".pagination-3d-2",
  },
});

// Liên kết hai Swiper với nhau để đồng bộ
swiper3dDat.controller.control = swiper3dDat2;
swiper3dDat2.controller.control = swiper3dDat;