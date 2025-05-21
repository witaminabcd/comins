class ToggleBtn {
  private btn: HTMLElement;

  constructor(btn: HTMLElement) {
    this.btn = btn;
  }

  toggle() {
    this.btn.classList.toggle('is-active');
  }
}

export default ToggleBtn;
