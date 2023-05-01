class Technology {
  rootId = "technology-album";
  rootElement;
  constructor() {
    this.rootElement = $(`#${this.rootId}`);
  }

  createTechnologyCard() {
    return `
    <div class="col">
      <div class="card shadow-sm">
        <div id="image-main-1" class="card-image card-image-main"></div>
          <div class="card-body">
            <p class="card-text">
              <b>[title] 태양열 산소 공급기<br /></b>
                Solar Oxygen Supply<br />
                    본문 내용
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                  onclick="showDetail()"
                >
                  Learn More
                </button>
              </div>
            <small class="text-muted">to be released</small>
          </div>
        </div>
      </div>
    </div>
    `;
  }

  addTechnologyCard() {
    this.rootElement.append(this.createTechnologyCard());
  }
}

class BigDetailImage {
  rootId = "technology-detail";
  constructor(rootId, info) {
    this.rootId = rootId;
    this.images = info.images;
    this.title = info.title;
    this.text = info.text;
    this.link = info.link;
  }

  init() {
    this.setImage();
    this.setTitle();
    this.setText();
    this.setLink();
  }

  addImage(image) {
    return `
    <img class="img-fluid img-fluid-80" src="${image}" />
    `;
  }

  setImage() {
    $(`#${this.rootId}`).empty();

    for (const image of this.images) {
      $(`#${this.rootId}`).append(this.addImage(image));
    }
  }

  setTitle() {
    $(`#${this.rootId}-title`).text(this.title);
  }

  setText() {
    $(`#${this.rootId}-text`).text(this.text);
  }

  setLink() {
    $(`#${this.rootId}-link`).attr("href", this.link);
  }
}
