<template>
  <div class="projects-container__project-col">
    <div class="projects-container__project-col__screenshot-container">
      <img
        class="projects-container__project-col__screenshot-container__image"
        :src="projectFromParent.src ? projectFromParent.src : 'https://picsum.photos/id/0/600/480'"
        alt="project screenshot"
      />
    </div>
    <div class="projects-container__project-col__description-container">
      <h3>{{ projectFromParent.name }}</h3>
      <ul
        class="projects-container__project-col__description-container__links-container"
      >
        <li
          class="projects-container__project-col__description-container__links-container__link-item"
          v-for="(link, index) in projectFromParent.links"
          :key="index"
        >
          <a
            class="projects-container__project-col__description-container__links-container__link-item__link"
            :href="link.url"
            target="_blank"
            >{{ link.title }}</a
          >
        </li>
      </ul>
      <ul
        class="projects-container__project-col__description-container__description"
      >
        <li
          class="projects-container__project-col__description-container__description__item"
        >
          {{ projectFromParent.feature }}
        </li>
        <li
          class="projects-container__project-col__description-container__description__item"
          v-if="projectFromParent.accoutPass"
        >
          前台測試帳號：<span class="text-code">user1</span> |
          <span class="text-code">12345678</span>
        </li>
        <li
          class="projects-container__project-col__description-container__description__item"
          v-if="projectFromParent.res"
        >
          負責內容：
          <ul>
            <li v-for="(r, index) in projectFromParent.res" :key="index">
              {{ r }}
            </li>
          </ul>
        </li>
        <li
          class="projects-container__project-col__description-container__description__item"
        >
          <span
            class="projects-container__project-col__description-container__description__item--tech-badge"
            v-for="(t, index) in projectFromParent.tech"
            :key="index"
            >{{ t }}</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'projectCard',
  props: ['projectFromParent'],
  methods: {
    getImgUrl(src) {
      console.log(require('../assets/' + src))
      return require('../assets/' + src)
    }
  }
}
</script>

<style lang="scss">
.projects-container__project-col {
  &__screenshot-container {
    min-height: 50vw;

    display: flex;
    // justify-content: center;
    align-items: center;

    background-color: #7C7B7B;
    background-image: url('~@/assets/images/bg_project.svg');
    background-size: cover;
    background-position: center;

    &__image {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: contain;
      object-position: center;
    }
  }

  &__description-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 1rem 4rem;

    &__links-container {
      width: 100%;
      padding: 0 0 0.5rem 0;

      text-align: left;

      &__link-item {
        display: inline-block;

        &:not(:last-child) {
          &::after {
            content: '|';
            display: inline-block;
            margin: 0 0.5rem;
          }
        }
      }
    }

    &__description {
      width: 100%;
      text-align: left;

      &__item {
        padding: 0 0 0.5rem 0;

        &--tech-badge {
          display: inline-block;
          padding: 0.25rem 0.5rem;

          background-color: #f5f3f2;
          color: #7c7b7b;

          &:not(:last-child) {
            margin: 0 0.5rem 0.5rem 0;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .projects-container__project-col {
    display: flex;

    &:nth-child(even) {
      flex-direction: row-reverse;
    }

    &__screenshot-container,
    &__description {
      width: 50%;
      height: 100%;
    }

    &__screenshot-container {
      display: flex;
      justify-content: center;
      overflow: hidden;

      // &__image {
      //   width: 100%;
      // }
    }

    &__description-container {
      width: 50%;
      max-width: 500px;
      margin: 0 auto;
      flex: 1;
    }
  }
}
</style>
