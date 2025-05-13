class OverlayMenu {
  
  selectors = {
    root: '[data-js-overlay-menu]',
    dialog: '[data-js-overlay-menu-dialog]',
    burgerButton: '[data-js-overlay-menu-burger-button]'
  };

  stateClasses = {
    isActive: 'is-active',
    isLocked: 'is-locked'
  };

  constructor() {
    this.root = document.querySelector(this.selectors.root);
    this.dialog = this.root.querySelector(this.selectors.dialog);
    this.burgerButton = this.root.querySelector(this.selectors.burgerButton);
    
    this.bindEvents();
  }
  
  bindEvents() {
    this.burgerButton.addEventListener('click', this.onBurgerButtonClick);
  }

  onBurgerButtonClick = () => {
    this.burgerButton.classList.toggle(this.stateClasses.isActive);
    this.dialog.open = !this.dialog.open;
    document.documentElement.classList.toggle(this.stateClasses.isLocked);
  };
}

export default OverlayMenu;
