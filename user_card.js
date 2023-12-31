const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: flex;
      align-items: center;
      width: 450px;
      height: 180px;
      background-color: #d4d4d4;
      border: 1px solid #d5d5d5;
      box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
      border-radius: 3px;
      overflow: hidden;
      padding: 10px;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
    }
    .image {
      flex: 0 0 auto;
      width: 160px;
      height: 160px;
      vertical-align: middle;
      border-radius: 5px;
    }
    .container {
      box-sizing: border-box;
      padding: 20px;
      height: 160px;
    }
    .container > .name {
      font-size: 20px;
      font-weight: 600;
      line-height: 1;
      margin: 0;
      margin-bottom: 5px;
    }
    .container > .email {
      font-size: 12px;
      opacity: 0.75;
      line-height: 1;
      margin: 0;
      margin-bottom: 15px;
    }
    .container > .button {
      padding: 10px 25px;
      font-size: 12px;
      border-radius: 5px;
      text-transform: uppercase;
    }
  </style>
  <img class="image" />
  <div class="container">
      <p class="name"></p>
      <p class="email"></p>
      <button class="button">Follow John</button>
  </div>
`;

class UserCard extends HTMLElement {
  constructor() {
    super();
    var shadow = this.attachShadow({ mode: 'closed' }); // 表示 Shadow DOM 是封闭的，不允许外部访问。
    // var template = document.getElementById('userCardTemplate');
    var content = template.content.cloneNode(true); // 可能有多个自定义元素的实例，这个模板还要留给其他实例使用，所以不能直接移动它的子元素。
    content.querySelector('img').setAttribute('src', this.getAttribute('image'));
    content.querySelector('.container>.name').innerText = this.getAttribute('name');
    content.querySelector('.container>.email').innerText = this.getAttribute('email');
    shadow.appendChild(content);
    this.$button = shadow.querySelector('button');
    this.$button.addEventListener('click', () => {
      alert('Hello World!');
    });
  }
}
window.customElements.define('user-card', UserCard);
