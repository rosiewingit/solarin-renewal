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
  constructor(rootId, images) {
    this.rootId = rootId;
    this.images = images;
  }

  init() {
    $(`#${this.rootId}`).empty();

    for (const image of this.images) {
      $(`#${this.rootId}`).append(this.addImage(image));
    }
  }

  addImage(image) {
    return `
    <img class="img-fluid" src="${image}" />
    `;
  }
}
