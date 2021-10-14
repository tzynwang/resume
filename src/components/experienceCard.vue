<template>
  <div class="work-col">
    <div class="work-col__title">{{ experienceFromParent.title }}</div>
    <span class="work-col__company">{{ experienceFromParent.company }}</span>
    <span class="work-col__period">{{ experienceFromParent.time }}</span>
    <ul class="work-col__responsibilities-container">
      <li
        class="work-col__responsibilities-container__responsibility"
        v-for="(res, index) in experienceFromParent.responsibilities"
        :key="index"
      >
        {{ res }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'experienceCard',
  props: ['experienceFromParent']
}
</script>

<style lang="scss">
.work-col {
  padding: 1rem 4rem;
  text-align: left;

  &:last-child {
    padding: 1rem 4rem 2rem;
  }

  &__title {
    font-size: 1.5rem;
  }

  &__company {
    display: block;
  }

  &__responsibilities-container {
    padding: .5rem 0 0;

    &__responsibility {
      list-style: square inside;
      padding: 0 0 .5rem 0;

      &:last-child {
        padding: 0;
      }
    }
  }
}

@media screen and (min-width: 600px) {
  .work-col {
    &__company {
      display: inline;
      padding: 0 1rem 0 0;
    }
  }
}
</style>
