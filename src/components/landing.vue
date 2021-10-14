<template>
  <section class="landing-container">
    <div class="landing-container__portrait-container">
      <img
        class="landing-container__portrait-container__image"
        src="@/assets/images/hero.jpg"
        alt="portrait"
      />
    </div>
    <div class="landing-container__summary-container" ref="summaryContainer">
      <h1 class="landing-container__summary-container__title">
        王紫吟（Charlie）
      </h1>
      <p class="landing-container__summary-container__text">
        過去6年在科技產業擔任軟體產品經理，擁有與軟硬體團隊合作完成專案的充沛經驗。擅長將客戶需求轉譯為各合作部門能夠充分理解的規格，讓團隊在期限內交付令人滿意的解決方案。
      </p>
      <p class="landing-container__summary-container__text">
        想要更有效率地處理重複性的文書作業，故開始接觸腳本，隨後發現程式語言可以打造出比腳本更有趣的工具；一年半前開始自學、在今年結束培訓課程後正式轉職。
      </p>
      <p class="landing-container__summary-container__text">
        喜歡學習新知，<a
          href="https://tzynwang.github.io/"
          target="_blank"
          ref="landingGitHub"
          >技術部落格</a
        >記錄了從年初累積至現在約80篇的筆記。
      </p>
      <p class="landing-container__summary-container__text">
        目前正在積極尋找台灣北區的前端開發工作機會。
      </p>
      <p class="landing-container__summary-container__text">
        <a href="mailto: tzyn.wang@gmail.com">tzyn.wang◆gmail.com</a>
      </p>
      <p class="landing-container__summary-container__text">
        <a href="https://github.com/tzynwang" target="_blank">GitHub</a>
      </p>
    </div>
  </section>
</template>

<script>
import { spinMixin } from '@/utils/mixins'

export default {
  name: 'landing',
  props: ['cursorElement'],
  mixins: [spinMixin],
  mounted() {
    this.$refs.summaryContainer.addEventListener(
      'mouseover',
      this.overAnchorAddSpin
    )
  },
  beforeDestroy() {
    this.$refs.summaryContainer.removeEventListener(
      'mouseover',
      this.overAnchorAddSpin
    )
  }
}
</script>

<style lang="scss">
.landing-container {
  background-color: #f5f3f2;
  background-image: url('~@/assets/images/bg_landing.svg');
  background-size: cover;
  background-position: center;

  &__portrait-container {
    &__image {
      width: 100%;
      height: 100vw;
      display: block;
      object-fit: cover;
      object-position: 50% 0;
    }
  }

  &__summary-container {
    padding: 2rem clamp(60px, 4vw, 4rem);

    display: flex;
    flex-direction: column;
    justify-content: center;

    &__title,
    &__text {
      text-align: left;
      background-color: #f5f3f2;

      &:not(:last-child) {
        padding: 0 0 0.5rem 0;
      }
    }
  }
}

@media screen and (min-width: 600px) and (min-height: 500px) {
  .landing-container {
    display: flex;
    height: clamp(300px, 75vh, 960px);

    &__portrait-container {
      width: 50%;

      &__image {
        height: 100%;
      }
    }

    &__summary-container {
      width: 50%;
      max-width: 500px;
      margin: 0 auto;
    }
  }
}
</style>
