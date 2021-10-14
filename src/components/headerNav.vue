<template>
  <header class="section-nav">
    <nav class="section-nav__nav-bar-container">
      <ul class="section-nav__nav-bar-container__nav">
        <li
          class="section-nav__nav-bar-container__nav__item"
          v-for="(item, index) in navItems"
          :key="index"
        >
          <router-link
            class="section-nav__nav-bar-container__nav__item__anchor"
            :to="'#' + item.section"
            :style="{ backgroundColor: item.bgColor }"
          ></router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'headerNav',
  data() {
    return {
      navItems: [
        { section: 'landing', bgColor: '#F5F3F2' },
        { section: 'skills', bgColor: '#7E8E7B' },
        { section: 'projects', bgColor: '#7C7B7B' },
        { section: 'experience', bgColor: '#3F4D4D' },
        { section: 'contact', bgColor: '#909AB5' }
      ]
    }
  }
}
</script>

<style lang="scss">
.section-nav {
  position: fixed;
  top: 50%;
  right: 0;

  transform: translateY(-50%);

  &__nav-bar-container {
    width: 100%;

    &__nav {
      &__item {
        width: 48px;
        height: 48px;

        display: block;

        cursor: pointer;

        &__anchor {
          display: block;
          width: 100%;
          height: 100%;

          &::before {
            // remove # in <a>
            content: none !important;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 600px) {
  .section-nav {
    &__nav-bar-container {
      &__nav {
        &__item {
          width: 60px;
          height: 60px;
        }
      }
    }
  }
}
</style>
