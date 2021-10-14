export const spinMixin = {
  methods: {
    addSpin() {
      this.cursorElement.classList.add('spin-cursor')
    },
    removeSpin() {
      this.cursorElement.classList.remove('spin-cursor')
    },
    overAnchorAddSpin(event) {
      event.target.tagName === 'A' ? this.addSpin() : null
      event.target.tagName !== 'A' ? this.removeSpin() : null
    }
  }
}
