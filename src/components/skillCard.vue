<template>
  <div class="skills-container__skill-col">
    <h3 class="skills-container__skill-col--title">
      {{ keyFromParent }}
    </h3>
    <ul class="skills-container__skill-col--list">
      <li
        class="skills-container__skill-col--list__item"
        v-for="item in valueFromParent"
        :key="item"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'skillCard',
  props: ['keyFromParent', 'valueFromParent']
}
</script>

<style lang="scss">
.skills-container__skill-col {
  flex: 1;
  // padding: 0 0 1rem 0;
  padding: 0 .5rem 1rem;

  &:not(:last-child) {
    &::after {
      content: '';
      width: 80%;

      display: block;
      margin: 1rem 0 0;
      transform: translateX(10%);

      border-bottom: 1px solid #f5f3f2;
    }
  }

  &--title {
    padding-bottom: 1rem;
  }
}

@media screen and (min-width: 600px) {
  .skills-container__skill-col {
    &:first-child {
      padding: 0 0 1rem 0;
    }

    &:not(:last-child) {
      &::after {
        content: none;
      }
    }

    &:nth-child(2) {
      position: relative;
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 80%;

        margin: 0;
        transform: translateX(0) translateY(10%);

        border: none;
        border-left: 1px solid #f5f3f2;
        border-right: 1px solid #f5f3f2;
      }
    }
  }
}
</style>
