export default class App {
  _parentElement = document.querySelector('.container');
  _inputContainer = document.querySelector('.inputs');
  data;
  language;
  langArr = [];

  constructor(data) {
    this.data = data;
    this._iterateData(data);
    this._getClickedItem(data);
    this._removeSearch();
  }

  _iterateData(data) {
    data.forEach(data => {
      this.render(data);
    });
  }

  // _filter(data, langArr) {
  //   this.data = data;
  // }

  _renderSearch(inputText, data) {
    const html = `
      <div class="input-1">
        <h3>${inputText}</h3>
        <button class="clear-each"><span class="span">&times</span></button>
      </div>
    `;
    this._inputContainer.insertAdjacentHTML('beforeend', html);

    // for (let i = 0, l = this._inputContainer.children; i <= l; i++)
    //   console.log(this._inputContainer.childElementCount);
    //   // console.log(this._inputContainer.children[i].children[0].textContent);
    // this.langArr.push(
    //   this._inputContainer.children[i].children[0].textContent
    // );
  }

  _removeSearch() {
    this._inputContainer.addEventListener(
      'click',
      function (e) {
        // if (
        //   e.target.classList.contains('clear-each') ||
        //   e.target.classList.contains('span')
        // )
        console.log(this.langArr);
      }.bind(this)
    );
  }

  _getClickedItem(data) {
    this._parentElement.addEventListener(
      'click',
      function (e) {
        if (e.target.classList.contains('language')) {
          this.language = e.target.textContent;
          this._renderSearch(this.language, data.languages);
        }
        if (e.target.classList.contains('role')) {
          this.language = e.target.textContent;
          this._renderSearch(this.language, data);
        }
        if (e.target.classList.contains('level')) {
          this.language = e.target.textContent;
          this._renderSearch(this.language, data);
        }
        if (e.target.classList.contains('tool')) {
          this.language = e.target.textContent;
          this._renderSearch(this.language, data);
        }
      }.bind(this)
    );
  }

  render(data) {
    this.data = data;
    // console.log(this.data);

    const html = `
      <div class="item item-1">
            <div class="active"></div>
            <div class="item-img">
              <img src="${this.data.logo}" alt="" />
            </div>
  
            <div class="item-content">
              <div class="company">
                <h3 class="company-name">${this.data.company}</h3>
                <p><span class="new">${this.data.new ? 'NEW!' : ''}</span></p>
                <p><span class="featured">${
                  this.data.featured ? 'FEATURED' : ''
                }</span></p>
              </div>
              <h3 class="position">${this.data.position}</h3>
              <ul class="infos">
                <li class="info">${this.data.postedAt}</li>
                <li class="info">${this.data.contract}</li>
                <li class="info">${this.data.location}</li>
              </ul>
            </div>
            <hr />
            <div class="right-items">
              <div class="personal-info">
                <div><h3 class="role">${this.data.role}</h3></div>
                <div><h3 class="level">${this.data.level}</h3></div>
              </div>
  
              <div class="languages">
              <div><h3 class="language">${
                this.data.languages.length >= 1 ? this.data.languages[0] : ''
              }</h3></div>
              <div><h3 class="language">${
                this.data.languages.length >= 2 ? this.data.languages[1] : ''
              }</h3></div>
              <div><h3 class="language">${
                this.data.languages.length === 3 ? this.data.languages[2] : ''
              }</h3></div>
              </div>
              <div class="tools">
              <div><h3 class="tool">${
                this.data.tools.length >= 1 ? this.data.tools[0] : ''
              }</h3></div>
              <div><h3 class="tool">${
                this.data.tools.length >= 2 ? this.data.tools[1] : ''
              }</h3></div>
              </div>
            </div>
          </div>
      `;

    this._parentElement.insertAdjacentHTML('beforeend', html);
  }
}

  // let lang = ""

  // lan = ""

  // langArr = []
  // const filterByLang = () => {
  //   langArr.filter(items => items.lan.filter(items => {return items === lang}))
  // }

  // whever i click on a language, filter the entire array to show which has it
  //the click event will call the filter and
  // the filter will call the render function

  // const filterByLang = () => {
  //   langArr.filter(items => items.lan.includes(lang)))
  // }