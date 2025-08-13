class Typerwriter {
    constructor(el, options){
      this.el = el;
      this.words = [...this.el.dataset.typewriter.split('.')];
      this.speed = options?.speed || 60;
      this.delay = options?.delay || 2;
      this.repeat = options?.repeat;
      this.initTyping();
    }

    wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

    toggleTyping = () => this.el.classList.toggle('typing');

    async typewrite(word){
      await this.wait(this.delay);
      this.toggleTyping();
      for (const letter of word.split('')) {
        this.el.textContent += letter;
        await this.wait(this.speed)
      }
      this.toggleTyping();
      await this.wait(this.delay);
      this.toggleTyping();
      while (this.el.textContent.length !== 0){
        this.el.textContent = this.el.textContent.slice(0, -1);
        await this.wait(this.speed)
      }
      this.toggleTyping();
    }

    async initTyping() {
      for (const word of this.words){
        await this.typewrite(word);
      }
      if(this.repeat){
        await this.initTyping();
      } else {
        this.el.style.animation = 'none';
      }
    }
  }

  document.querySelectorAll('[data-typewriter]').forEach(el => {
    new Typerwriter(el, {
      repeat: true,
    })
  })
  let clear1 = document.getElementsByClassName("first-name");
  
  function cleardisplay() {
    for (let i = 0; i < clear1.length; i++) {
      clear1[i].value = "";
    }
}

let clear2 = document.getElementsByClassName("last-name");
let clear3 = document.getElementsByClassName("phone-number");
let clear4 = document.getElementsByClassName("company");
let clear5 = document.getElementsByClassName("Email");
let clear6 = document.getElementsByClassName("country");

function cleardisplay() {
    let clearFields = [clear1, clear2, clear3, clear4, clear5, clear6];
    for (let fields of clearFields) {
        for (let i = 0; i < fields.length; i++) {
            fields[i].value = "";
        }
    }
}