function scrollToTop() {
  // Cuộn lên đầu trang mỗi lần chạy hàm
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Gọi thử hàm
setTimeout(scrollToTop, 2000);
// Khởi tạo Swiper
const swiper = new Swiper(".swiper-category", {
  slidesPerView: 4, // Hiển thị 4 slide cùng lúc
  spaceBetween: 20, // Khoảng cách giữa các slide
  loop: true, // Lặp vô hạn
  autoplay: {
    delay: 3000, // Tự động chạy sau 3 giây
    disableOnInteraction: false, // Không dừng khi tương tác
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiper2 = new Swiper(".swiper-banner", {
  loop: true, // Lặp vô hạn
  autoplay: {
    delay: 5000, // Tự động chạy sau 5 giây
    disableOnInteraction: false, // Không dừng khi tương tác
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const swiper3 = new Swiper(".swiper-product-featured", {
  loop: true, // Lặp vô hạn
  autoplay: {
    delay: 10000, // Tự động chạy sau 5 giây
    disableOnInteraction: false, // Không dừng khi tương tác
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const productList = [
  {
    id: 1,
    name: "Sweet baby",
    price: "750.000",
    Saleprice: "650.000",
    imgs: ["./assets/images/items/15.png","./assets/images/items/01.png","./assets/images/items/02.png"],
    sale: true,
    trending: true,
    top: false,
    isSale: true,
  },
  {
    id: 2,
    name: "Sweet wishes",
    price: "900.000",
    Saleprice: "850.000",
    imgs: ["./assets/images/items/1.png","./assets/images/items/03.png","./assets/images/items/04.png"],
    sale: true,
    trending: true,
    top: false,
    isSale: false,
  },
  {
    id: 3,
    name: "Spring pearl",
    price: "650.000",
    Saleprice: "630.000",
    imgs: ["./assets/images/items/2.png","./assets/images/items/05.png","./assets/images/items/06.png"],
    sale: false,
    trending: true,
    top: false,
    isSale: true,
  },
  {
    id: 4,
    name: "The Light Blue",
    price: "500.000",
    Saleprice: "480.000",
    imgs: ["./assets/images/items/3.png","./assets/images/items/07.png","./assets/images/items/08.png"],
    sale: true,
    trending: true,
    top: false,
    isSale: false,
  },
  {
    id: 5,
    name: "The muse ",
    price: "400.000",
    Saleprice: "390.000",
    imgs: ["./assets/images/items/4.png","./assets/images/items/09.png","./assets/images/items/010.png"],
    sale: false,
    trending: true,
    top: true,
    isSale: true,
  },
  {
    id: 6,
    name: "My heart",
    price: "700.000",
    Saleprice: "680.000",
    imgs: ["./assets/images/items/5.png","./assets/images/items/011.png","./assets/images/items/012.png"],
    sale: true,
    trending: true,
    top: true,
    isSale: false,
  },
  {
    id: 7,
    name: "Blue sea",
    price: "880.000",
    Saleprice: "780.000",
    imgs: ["./assets/images/items/6.png","./assets/images/items/013.png","./assets/images/items/014.png"],
    sale: false,
    trending: true,
    top: true,
    isSale: true,
  },
  {
    id: 8,
    name: "Lustrous Eden ",
    price: "1.100.000",
    Saleprice: "1.050.000",
    imgs: ["./assets/images/items/7.png","./assets/images/items/015.png","./assets/images/items/016.png"],
    sale: true,
    trending: true,
    top: true,
    isSale: false,
  },
  {
    id: 9,
    name: "The healing",
    price: "600.000",
    Saleprice: "590.000",
    imgs: ["./assets/images/items/8.png","./assets/images/items/017.png","./assets/images/items/018.png"],
    sale: false,
    trending: true,
    top: true,
    isSale: true,
  },
  {
    id: 10,
    name: "Valise à fleurs",
    price: "600.000",
    Saleprice: "590.000",
    imgs: ["./assets/images/items/9.png","./assets/images/items/019.png","./assets/images/items/020.png"],
    sale: true,
    trending: true,
    top: true,
    isSale: false,
  },
  {
    id: 11,
    name: "Blooming romance",
    price: "900.000",
    Saleprice: "890.000",
    imgs: ["./assets/images/items/10.png","./assets/images/items/021.png","./assets/images/items/022.png"],
    sale: false,
    trending: true,
    top: true,
    isSale: true,
  },
  {
    id: 12,
    name: "Evie à fleurs",
    price: "1.200.000",
    Saleprice: "1.190.000",
    imgs: ["./assets/images/items/11.png","./assets/images/items/023.png","./assets/images/items/024.png"],
    sale: true,
    trending: true,
    top: false,
    isSale: false,
  },
  {
    id: 13,
    name: "Velvet pink",
    price: "1.200.000",
    Saleprice: "1.100.000",
    imgs: ["./assets/images/items/12.png","./assets/images/items/025.png","./assets/images/items/026.png"],
    sale: false,
    trending: true,
    top: true,
    isSale: true,
  },
  {
    id: 16,
    name: "Butterfly ",
    price: "1.200.000",
    Saleprice: "1.150.000",
    imgs: ["./assets/images/items/13.png","./assets/images/items/027.png","./assets/images/items/028.png"],
    sale: true,
    trending: true,
    top: true,
    isSale: false,
  },
  {
    id: 14,
    name: "Leyla of love",
    price: "1.000.000",
    Saleprice: "900.000",
    imgs: ["./assets/images/items/14.png","./assets/images/items/029.png","./assets/images/items/030.png"],
    sale: true,
    trending: true,
    top: false,
    isSale: false,
  },
  {
    id: 15,
    name: "Noutast rose",
    price: "750.000",
    Saleprice: "700.000",
    imgs: ["./assets/images/items/Ảnh31.png","./assets/images/items/Ảnh32.png","./assets/images/items/Ảnh33.png"],
    sale: true,
    trending: true,
    top: false,
    isSale: false,
  },
  {
    id: 16,
    name: "Sunshine",
    price: "400.000",
    Saleprice: "390.000",
    imgs: ["./assets/images/items/Ảnh34.png","./assets/images/items/Ảnh35.png","./assets/images/items/Ảnh36.png"],
    sale: true,
    trending: true,
    top: false,
    isSale: false,
  },
  {
    id: 17,
    name: "Céline rose",
    price: "650.000",
    Saleprice: "600.000",
    imgs: ["./assets/images/items/Ảnh37.png","./assets/images/items/Ảnh38.png","./assets/images/items/Ảnh39.png"],
    sale: true,
    trending: true,
    top: false,
    isSale: false,
  },
  {
    id: 18,
    name: "Charlette Jade",
    price: "600.000",
    Saleprice: "590.000",
    imgs: ["./assets/images/items/Ảnh40.png","./assets/images/items/Ảnh41.png","./assets/images/items/Ảnh42.png"],
    sale: true,
    trending: true,
    top: false,
    isSale: false,
  },
  {
    id: 19,
    name: "Angeletta",
    price: "350.000",
    Saleprice: "300.000",
    imgs: ["./assets/images/items/Ảnh43.png","./assets/images/items/Ảnh44.png","./assets/images/items/Ảnh45.png"],
    sale: true,
    trending: true,
    top: false,
    isSale: false,
  },
  {
    id: 20,
    name: "Jenny baby",
    price: "450.000",
    Saleprice: "400.000",
    imgs: ["./assets/images/items/Ảnh46.png","./assets/images/items/Ảnh47.png","./assets/images/items/Ảnh48.png"],
    sale: true,
    trending: true,
    top: false,
    isSale: false,
  },
];
const itemRandum = [
  "Hoa nở không vội vã, không tranh giành, chỉ nhẹ nhàng khoe sắc theo thời gian. Cũng như con người, chỉ cần đúng thời điểm, ai cũng có thể tỏa sáng.",
  "Mỗi bông hoa mang một vẻ đẹp riêng, không cần phải so sánh với loài hoa khác. Cuộc sống cũng vậy, mỗi người đều có giá trị và ý nghĩa riêng của mình.",
  "Hoa dù đẹp đến đâu cũng cần đất lành, nước mát để sinh trưởng. Con người cũng vậy, muốn thành công phải có môi trường tốt và sự nuôi dưỡng từ tri thức, tình thương.",
  "Một cánh hoa rơi không làm mùa xuân mất đi, nhưng một bông hoa nở có thể mang lại niềm vui cho cả một ngày dài.",
  "Người ta yêu hoa không chỉ vì màu sắc rực rỡ, mà còn vì vẻ mong manh nhưng đầy sức sống của nó. Giống như cuộc đời, dù có thử thách nhưng vẫn luôn vươn lên để tỏa sáng.",
  "Mỗi khi một bông hoa bung nở, đó không chỉ là sự kết thúc của một hành trình, mà còn là khởi đầu cho một vẻ đẹp mới. Con người cũng vậy, mỗi thành công đều bắt nguồn từ sự kiên trì.",
  "Một bông hoa nhỏ bé có thể làm bừng sáng cả một góc trời. Một hành động tử tế, dù nhỏ bé, cũng có thể lan tỏa niềm vui đến những người xung quanh.",
  "Hoa dù rực rỡ thế nào cũng có lúc tàn phai, nhưng hương thơm vẫn còn đọng lại trong ký ức. Cũng như con người, điều đẹp nhất không phải là ngoại hình, mà là cách chúng ta để lại dấu ấn trong lòng nhau.",
  "Mỗi loài hoa đều có mùa của riêng mình, không nở sớm cũng chẳng nở muộn. Chỉ cần kiên nhẫn, ai rồi cũng có thời điểm rực rỡ của riêng mình.",
  "Hoa không chọn nơi mình sinh ra, nhưng vẫn vươn lên mạnh mẽ để khoe sắc. Cũng như con người, dù hoàn cảnh thế nào, chỉ cần nỗ lực, ta vẫn có thể tìm thấy ánh sáng cho riêng mình."
]
document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);

  const isPageElement = document.querySelector(".IsPage");
  const isDetailElement = document.querySelector(".isDetail");

  if (urlParams.has("items")) {
    // Nếu có `items`, ẩn `.IsPage` và hiển thị `.isDetail`
    if (isPageElement) isPageElement.style.display = "none";
    if (isDetailElement) isDetailElement.style.display = "block";
    const itemId = parseInt(urlParams.get("items"));
    const filteredProduct = productList.find(product => product.id === itemId);
    if (filteredProduct) {
      // Gán tên sản phẩm vào class "name-title"
      const nameTitleElement = document.querySelector(".name-title");
      if (nameTitleElement) {
        nameTitleElement.textContent = filteredProduct.name;
      }
      const priceElement = document.querySelector(".moneny-detal");
      if (priceElement) {
        priceElement.textContent = `${filteredProduct.price} VND`;
      }
      // Gán giá trị vào class "moneny-sale" (giá khuyến mãi)
      const salePriceElement = document.querySelector(".moneny-sale");
      if (salePriceElement) {
        salePriceElement.textContent = `${filteredProduct.Saleprice} VND`;
      }
       // Chọn ngẫu nhiên một câu trong itemRandum
       const randomQuote = itemRandum[Math.floor(Math.random() * itemRandum.length)];
       document.querySelector(".note-detail").textContent = randomQuote;

       // 
       const swiperWrapper = document.querySelector(".detail-img-wapper");
       swiperWrapper.innerHTML = ""; // Xóa nội dung cũ
       filteredProduct.imgs.forEach(imgUrl => {
        swiperWrapper.innerHTML += `
          <div class="swiper-slide d-flex justify-content-center" style="background-color: #FEDDE3;border-radius:10px">
            <img class="rounded-4 fit" style="max-width: 100%; max-height: 100vh;object-fit: cover;border-radius:0px" src="${imgUrl}" />
          </div>
        `;
      });
      new Swiper(".detail-img", {
        loop: true,
        autoplay: {
          delay: 5000, // Tự động chạy sau 5 giây
          disableOnInteraction: false, // Không dừng khi tương tác
        },
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }



    //
  } else {
    // Nếu không có `items`, hiển thị `.IsPage` và ẩn `.isDetail`
    if (isPageElement) isPageElement.style.display = "block";
    if (isDetailElement) isDetailElement.style.display = "none";
  }
  // Kiểm tra xem productList có dữ liệu không
  if (!Array.isArray(productList) || productList.length === 0) {
    console.error("Danh sách sản phẩm trống hoặc không hợp lệ!");
    return;
  }

  if (!urlParams.has("items")) {
    // Hàm hiển thị sản phẩm vào container
    function renderProducts(products, containerSelector) {
      const container = document.querySelector(containerSelector);
      if (!container) {
        console.error(
          `Không tìm thấy phần tử với selector: ${containerSelector}`
        );
        return;
      }

      container.innerHTML = ""; // Xóa nội dung cũ

      products.forEach((product) => {
        const productHTML = `
  <div class="showcase">
    <a href="/JewelFlower/index.html?items=${product.id}" class="showcase-img-box">
      <img src="${product.imgs[0]}" alt="${product.name}" width="70" height="70" class="showcase-img" style="border-radius: 10px" />
    </a>
    <div class="showcase-content">
      <a href="/JewelFlower/index.html?items=${product.id}"><h4 class="showcase-title">${product.name}</h4></a>
      <a href="/JewelFlower/index.html?items=${product.id}" class="showcase-category">Bó hoa</a>
      <div class="price-box">
        <p class="price">${product.Saleprice} VND</p>
        <del>${product.price}</del>
      </div>
    </div>
  </div>
`;
        container.innerHTML += productHTML; // Thêm sản phẩm vào DOM
      });
    }
    function appendProducts(products, containerSelector) {
      const container = document.querySelector(containerSelector);
      if (!container) {
        console.error(
          `Không tìm thấy phần tử với selector: ${containerSelector}`
        );
        return;
      }
      container.innerHTML = ""; // Xóa nội dung cũ
      products.forEach((product) => {
        const originalPrice = parseFloat(product.price.replace(/\./g, ""));
        const salePrice = parseFloat(product.Saleprice.replace(/\./g, ""));

        // Tính phần trăm giảm giá và làm tròn
        const discountPercent = Math.round(
          ((originalPrice - salePrice) / originalPrice) * 100
        );
        const productHTML = `
  <div class="showcase">
    <div class="showcase-banner">
      <img src="${product.imgs[0]}" alt="${
          product.name
        }" width="300" height="400" class="product-img default"/>
      <img src="${product.imgs[1]}" alt="${
          product.name
        }" width="300" height="400" class="product-img hover"/>
      ${
        discountPercent
          ? '<p class="showcase-badge"> Giảm ' + discountPercent + "%" + "</p>"
          : ""
      }
      <div class="showcase-actions">
        <button class="btn-action"><ion-icon name="heart-outline"></ion-icon></button>
        <button class="btn-action"><ion-icon name="eye-outline"></ion-icon></button>
        <button class="btn-action"><ion-icon name="repeat-outline"></ion-icon></button>
        <button class="btn-action"><ion-icon name="bag-add-outline"></ion-icon></button>
      </div>
    </div>

    <div class="showcase-content">
      <a href="/JewelFlower/index.html?items=${
        product.id
      }" class="showcase-category">${product.name}</a>
      <a href="/JewelFlower/index.html?items=${
        product.id
      }"><h3 class="showcase-title"></h3></a>
      <div class="showcase-rating">
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star-outline"></ion-icon>
        <ion-icon name="star-outline"></ion-icon>
      </div>
      <div class="price-box" style="display:block">
        <p class="price">${product.Saleprice} VND</p>
        <del>${product.price} VND</del>
      </div>
    </div>
  </div>
`;
        container.innerHTML += productHTML; // Thêm sản phẩm mà không xóa cũ
      });
    }
    // lấy sản phẩm gợi ý
    function getRandomProducts(products, count) {
      let shuffled = products.sort(() => 0.5 - Math.random()); // Trộn ngẫu nhiên
      return shuffled.slice(0, count); // Lấy ra `count` phần tử đầu tiên
    }
    //
    function getRandomStars() {
      let stars = Math.floor(Math.random() * 3) + 3; // Random từ 1 đến 5
      let starIcons = "";

      for (let i = 0; i < 5; i++) {
        if (i < stars) {
          starIcons += `<ion-icon name="star"></ion-icon>`; // Sao đầy
        } else {
          starIcons += `<ion-icon name="star-outline"></ion-icon>`; // Sao rỗng
        }
      }

      return starIcons;
    }
    //
    function renderRandomProducts() {
      const container = document.querySelector(".goi-y-product");
      container.innerHTML = ""; // Xóa sản phẩm cũ

      let randomProducts = getRandomProducts(productList, 5);

      randomProducts.forEach((product) => {
        let productHTML = `
<div class="showcase">
  <a href="/JewelFlower/index.html?items=${
    product.id
  }" class="showcase-img-box">
    <img src="${product.imgs[0]}" alt="${
          product.name
        }" width="75" height="75" class="showcase-img" />
  </a>

  <div class="showcase-content">
    <a href="/JewelFlower/index.html?items=${product.id}">
      <h4 class="showcase-title">${product.name}</h4>
    </a>

    <div class="showcase-rating">
     ${getRandomStars()}
    </div>

    <div class="price-box">
      <del>${product.price}VND</del>
      <p class="price">${product.Saleprice}VND</p>
    </div>
  </div>
</div>
`;
        container.innerHTML += productHTML;
      });
    }
    //
    // Lọc tối đa 4 sản phẩm có isSale = true
    const saleProducts = productList.filter((p) => p.isSale).slice(0, 4);
    renderProducts(saleProducts, ".sale-product");

    // Lọc tối đa 4 sản phẩm có trending = true
    const trendingProducts = productList.filter((p) => p.trending).slice(0, 4);
    renderProducts(trendingProducts, ".trending-product");

    const topProducts = productList.filter((p) => p.top).slice(0, 4);
    renderProducts(topProducts, ".top-product");
    appendProducts(productList, ".product-grid");
    renderRandomProducts();
  }
});

function updateNotificationToast() {
  const randomProduct =
    productList[Math.floor(Math.random() * productList.length)];

  const toastBanner = document.querySelector(".toast-banner img");
  const toastTitle = document.querySelector(".toast-title");

  if (randomProduct && toastBanner && toastTitle) {
    toastBanner.src = randomProduct.imgs[0]; // Lấy ảnh đầu tiên trong mảng imgs
    toastTitle.textContent = randomProduct.name;
  }
}

// Cập nhật mỗi 5 giây
setInterval(updateNotificationToast, 15000);

// Gọi ngay khi tải trang
updateNotificationToast();
