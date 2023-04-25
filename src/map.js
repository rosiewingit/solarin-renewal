const isMobile = () => {
  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) && window.matchMedia("(pointer: coarse)").matches
  );
};

const drawMap = (id, geo) => {
  const container = document.getElementById(id);
  const position = new naver.maps.LatLng(geo.lat, geo.lng);
  const options = {
    center: position,
    zoom: 16,
  };

  const map = new naver.maps.Map(container, options);
  drawInfoWindow(map, position);
};

const goToContact = () => {
  if (isMobile()) {
    location.href = "tel:0507-1395-0771";
  } else {
    location.href = "mailto:voicechip@naver.com";
  }
};

function drawInfoWindow(map, position) {
  const marker = new naver.maps.Marker({
    map: map,
    position: position,
  });

  let contentString = "";

  const mobileOverlay = `
      <button
        type="button"
        id="accessContactBtn"
        class="btn mobile-access-button"
        onclick="goToContact()"
      >
      Contact us
      </button>
  `;

  const pcOverlay = `
    <div class="access-map-overlay">
      <div class="overlay-top">
        <img loading="lazy" class="brand-logo-color" src="./resources/logo-light.png" />
      </div>
      <div class="overlay-bottom">
        <div class="overlay-bottom-top">
          <p class="overlay-text">
            14, Sagimakgol-ro 45beon-gil, Jungwon-gu, Seongnam-si,
            Gyeonggi-do, Republic of Korea
          </p>
        </div>
        <div class="overlay-bottom-bottom">
          <p class="overlay-text">+82)0507-1395-0771</p>
        </div>
      </div>
      <button
        type="button"
        id="accessContactBtn"
        class="btn access-button"
        onclick="goToContact()"
      >
      Contact us
      </button>
    </div>
  `;

  if (isMobile()) {
    contentString = mobileOverlay;
  } else {
    contentString = pcOverlay;
  }

  const infowindow = new naver.maps.InfoWindow({
    content: contentString,
    backgroundColor: "rgba(0,0,0,0)",
    borderWidth: 0,
  });

  naver.maps.Event.addListener(marker, "click", function (e) {
    if (infowindow.getMap()) {
      infowindow.close();
    } else {
      infowindow.open(map, marker);
    }
  });

  infowindow.open(map, marker);
}

function CustomOverlay(options) {
  this._element = $(
    '<div class="map-overlay">' +
      '<img src="./resources/logo-light.png" class="map-overlay-pin">' +
      "</div>"
  );

  this.setPosition(options.position);
  this.setMap(options.map || null);
}

CustomOverlay.prototype = new naver.maps.OverlayView();
CustomOverlay.prototype.constructor = CustomOverlay;

CustomOverlay.prototype.setPosition = function (position) {
  this._position = position;
  this.draw();
};

CustomOverlay.prototype.getPosition = function () {
  return this._position;
};

CustomOverlay.prototype.onAdd = function () {
  var overlayLayer = this.getPanes().overlayLayer;

  this._element.appendTo(overlayLayer);
};

CustomOverlay.prototype.draw = function () {
  if (!this.getMap()) {
    return;
  }

  var projection = this.getProjection(),
    position = this.getPosition(),
    pixelPosition = projection.fromCoordToOffset(position);

  this._element.css("left", pixelPosition.x);
  this._element.css("top", pixelPosition.y);
};

CustomOverlay.prototype.onRemove = function () {
  var overlayLayer = this.getPanes().overlayLayer;

  this._element.remove();
  this._element.off();
};
