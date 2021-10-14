<template>
  <div id="app">
    <headerNav />
    <router-view :cursor-element="cursorElement"></router-view>
    <footer ref="footer">
      2021 © 王紫吟 |
      <a href="https://github.com/tzynwang" target="_blank">GitHub</a> |
      <a href="https://tzynwang.github.io/" target="_blank">Tech Blog</a>
    </footer>
    <div class="cursor" ref="cursor"></div>
  </div>
</template>

<script>
import { spinMixin } from '@/utils/mixins'
import headerNav from '@/components/headerNav.vue'

export default {
  name: 'App',
  mixins: [spinMixin],
  components: {
    headerNav
  },
  data() {
    return {
      moveTimer: null,
      scrollTimer: null,
      cursorElement: null
    }
  },
  mounted() {
    window.addEventListener('mousemove', this.moveCursor)
    window.addEventListener('scroll', this.hideCursor)
    this.cursorElement = this.$refs.cursor

    this.$refs.footer.addEventListener('mouseover', this.overAnchorAddSpin)
  },
  beforeDestroy() {
    window.removeEventListener('mousemove', this.moveCursor)
    window.removeEventListener('scroll', this.hideCursor)

    this.$refs.footer.removeEventListener('mouseover', this.overAnchorAddSpin)
  },
  methods: {
    moveCursor(event) {
      this.$refs.cursor.style.left = event.pageX + 'px'
      this.$refs.cursor.style.top = event.pageY + 'px'

      // scale cursor when move
      this.$refs.cursor.classList.add('scale-cursor')

      if (this.moveTimer !== null) {
        clearTimeout(this.moveTimer)
      }
      this.moveTimer = setTimeout(() => {
        this.$refs.cursor.classList.remove('scale-cursor')
      }, 100)
    },
    hideCursor() {
      // hide cursor when scroll
      this.$refs.cursor.classList.add('hide-cursor')

      if (this.scrollTimer !== null) {
        clearTimeout(this.scrollTimer)
      }
      this.scrollTimer = setTimeout(() => {
        this.$refs.cursor.classList.remove('hide-cursor')
      }, 200)
    }
  }
}
</script>

<style lang="scss">
.cursor {
  position: absolute;
  width: 36px;
  height: 36px;
  z-index: 999;

  background-color: #3f4d4d;
  mix-blend-mode: difference;

  transform: translate(-50%, -50%) rotate(45deg);
  pointer-events: none;

  transition: transform 0.2s ease;
}

.section-nav:hover ~ .cursor {
  // hide cursor when hover over header nav
  transform: translate(-50%, -50%) rotate(45deg) scale(0);
}

.scale-cursor {
  transform: translate(-50%, -50%) rotate(45deg) scale(0.25);
}

.hide-cursor {
  transform: translate(-50%, -50%) rotate(45deg) scale(0);
}

.spin-cursor {
  transform: translate(-50%, -50%) rotate(225deg) scale(0.5);
}
</style>
