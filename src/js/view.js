export default class App {
  _parentElement = document.querySelector('.container');
  _inputContainer = document.querySelector('.inputs');
  _clearAllBtn = document.querySelector('.clear-all');

  data;
  language;
  langArrNoDuplicate = [];
  renderTrue = true;

  constructor(data) {
    this.data = data;
    this._iterateData(data);
    this._getClickedItem(data);
    this._removeSearch(data);
    this._clearAllInputElements(data);
  }

  _iterateData(data) {
    data.forEach(data => {
      this.render(data, !this.renderTrue);
    });
  }

  _renderSearch(inputText) {
    const html = `
      <div class="input-1">
        <h3>${inputText}</h3>
        <button class="clear-each"><span class="span">&times</span></button>
      </div>
    `;
    this._inputContainer.insertAdjacentHTML('beforeend', html);

    let langArr = [];

    for (let i = 0, l = this._inputContainer.children.length; i < l; i++) {
      langArr.push(this._inputContainer.children[i].children[0].textContent);
    }

    langArr.forEach(c => {
      if (!this.langArrNoDuplicate.includes(c)) {
        this.langArrNoDuplicate.push(c);
        // console.log(this.langArrNoDuplicate);
      }
    });
  }

  _removeSearch(data) {
    this._inputContainer.addEventListener(
      'click',
      function (e) {
        if (!e.target.classList.contains('span')) return;
        this.langArrNoDuplicate.forEach((c, i) => {
          if (c === e.target.parentNode.parentNode.children[0].textContent)
            this.langArrNoDuplicate.splice(i, 1);

          this._inputContainer.innerHTML = '';

          this.langArrNoDuplicate.forEach(data => {
            this._renderSearch(data);
          });
        });
        this._parentElement.innerHTML = '';
        data.forEach(data => this.render(data, !this.renderTrue));

        // this._filter(data);
      }.bind(this)
    );
  }

  _clearAllInputElements(data) {
    this._clearAllBtn.addEventListener(
      'click',
      function () {
        this.langArrNoDuplicate.splice(0, this.langArrNoDuplicate.length);
        // console.log(this.langArrNoDuplicate);
        this._inputContainer.innerHTML = '';
        this._parentElement.innerHTML = '';
        data.forEach(data => this.render(data, !this.renderTrue));
      }.bind(this)
    );
  }

  _getClickedItem(data) {
    // console.log(data);
    this._parentElement.addEventListener(
      'click',
      function (e) {
        if (
          !e.target.classList.contains('language') &&
          !e.target.classList.contains('role') &&
          !e.target.classList.contains('level') &&
          !e.target.classList.contains('tool')
        )
          return;

        this.language = e.target.textContent;
        this._renderSearch(this.language);

        // if (e.target.classList.contains('language')) {
        //   this.language = e.target.textContent;
        //   this._renderSearch(this.language, data);
        // }
        // if (e.target.classList.contains('role')) {
        //   this.language = e.target.textContent;
        //   this._renderSearch(this.language, data);
        // }
        // if (e.target.classList.contains('level')) {
        //   this.language = e.target.textContent;
        //   this._renderSearch(this.language, data);
        // }
        // if (e.target.classList.contains('tool')) {
        //   this.language = e.target.textContent;
        //   this._renderSearch(this.language, data);
        // }
        this._filter(data);
      }.bind(this)
    );
  }

  _filter(data) {
    this._parentElement.innerHTML = '';

    const filteredData = data.map(data => {
      if (
        data.languages.includes(...this.langArrNoDuplicate) ||
        data.role.includes(...this.langArrNoDuplicate) ||
        data.level.includes(...this.langArrNoDuplicate) ||
        data.tools.includes(...this.langArrNoDuplicate)
      ) {
        return data;
      }
    });
    // console.log(this.langArrNoDuplicate);

    // console.log(filteredData);
    const finalFilter = filteredData.filter(data => {
      data === undefined;
      return data;
    });
    // console.log(finalFilter);

    finalFilter.forEach(data => {
      // console.log(data);
      this.render(data, this.renderTrue);
    });
  }
  _generateMarkup(data, render) {
    const html = `
    <div class="item item-1" id="${data.id}">
          <div class="${render ? 'active' : ''}"></div>
          <div class="item-img">
            <img src="${data.logo}" alt="" />
          </div>

          <div class="item-content">
            <div class="company">
              <h3 class="company-name">${data.company}</h3>
              <p><span class="new">${data.new ? 'NEW!' : ''}</span></p>
              <p><span class="featured">${
                data.featured ? 'FEATURED' : ''
              }</span></p>
            </div>
            <h3 class="position">${data.position}</h3>
            <ul class="infos">
              <li class="info">${data.postedAt}</li>
              <li class="info">${data.contract}</li>
              <li class="info">${data.location}</li>
            </ul>
          </div>
          <hr />
          <div class="right-items">
            <div class="personal-info">
              <div><h3 class="role">${data.role}</h3></div>
              <div><h3 class="level">${data.level}</h3></div>
            </div>

            <div class="languages">
            <div><h3 class="language">${
              data.languages.length >= 1 ? data.languages[0] : ''
            }</h3></div>
            <div><h3 class="language">${
              data.languages.length >= 2 ? data.languages[1] : ''
            }</h3></div>
            <div><h3 class="language">${
              data.languages.length === 3 ? data.languages[2] : ''
            }</h3></div>
            </div>
            <div class="tools">
            <div><h3 class="tool">${
              data.tools.length >= 1 ? data.tools[0] : ''
            }</h3></div>
            <div><h3 class="tool">${
              data.tools.length >= 2 ? data.tools[1] : ''
            }</h3></div>
            </div>
          </div>
        </div>
    `;
    return html;
  }

  render(data, render) {
    const markup = this._generateMarkup(data, render);

    this._parentElement.insertAdjacentHTML('beforeend', markup);
  }
}
