// Nav icon

const navBtn = document.querySelector(".nav-icon-btn");
const navIcon = document.querySelector(".nav-icon");
const nav = document.querySelector(".header__top-row");

navBtn.onclick = () => {
  navIcon.classList.toggle("nav-icon--active");
  nav.classList.toggle("header__top-row--mobile");
  document.body.classList.toggle("no-scroll");
};

/*Phone Mask*/

mask("[data-tel-input]");

// Удаляем "+" если в поле ничего не введено, что бы показать плейсхолдер

const phoneInputs = document.querySelectorAll("[data-tel-input]");
phoneInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value == "+") input.value = "";
  });
  input.addEventListener("blur", () => {
    if (input.value == "+") input.value = "";
  });
});

/*Yandex Map*/

ymaps.ready(function () {
  // Указывается идентификатор HTML-элемента.
  var my_Map = new ymaps.Map("map", {
    center: [57.000962, 41.011877],
    zoom: 14,
  });

  var myPlacemark = new ymaps.Placemark(
    [57.000962, 41.011877],
    {
      balloonContent: `
    <div class="balloon">
       <div class="balloon__address">Наб. реки Уводь 12-15</div>
       <div class="balloon__contacts">
          <a href="tel:+78121234567">+8 (4935) 15-45-67</a>
       </div>
    </div>
 `,
    },
    {
      iconLayout: "default#image",
      iconImageHref: "./img/map/location-pin.svg",
      iconImageSize: [40, 40],
      iconImageOffset: [-20, -42],
    }
  );

  my_Map.controls.remove("geolocationControl"); // удаляем геолокацию
  my_Map.controls.remove("searchControl"); // удаляем поиск
  my_Map.controls.remove("trafficControl"); // удаляем контроль трафика
  my_Map.controls.remove("typeSelector"); // удаляем тип

  // map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  my_Map.controls.remove("rulerControl"); // удаляем контрол правил
  my_Map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)

  my_Map.geoObjects.add(myPlacemark);
  myPlacemark.balloon.open();
});
