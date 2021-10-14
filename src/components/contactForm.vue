<template>
  <form @submit.prevent="sendMessage" class="contact-form">
    <div class="contact-form__input-group">
      <label class="contact-form__input-group--label" for="name">您的稱呼</label>
      <input class="contact-form__input-group--input" type="text" id="name" />
    </div>
    <div class="contact-form__input-group">
      <label class="contact-form__input-group--label" for="email"
        >您的Email信箱</label
      >
      <input class="contact-form__input-group--input" type="email" id="email" />
    </div>
    <div class="contact-form__input-group">
      <label class="contact-form__input-group--label" for="message"
        >訊息</label
      >
      <textarea
        class="contact-form__input-group--input"
        id="message"
        cols="30"
        rows="10"
      ></textarea>
    </div>
    <button class="contact-form__submit" ref="submitButton"># 送出</button>
  </form>
</template>

<script>
import { spinMixin } from '@/utils/mixins'

export default {
  name: 'contactForm',
  props: ['cursorElement'],
  mixins: [spinMixin],
  mounted() {
    this.$refs.submitButton.addEventListener('mouseover', this.addSpin)
    this.$refs.submitButton.addEventListener('mouseleave', this.removeSpin)
  },
  beforeDestroy() {
    this.$refs.submitButton.removeEventListener('mouseover', this.addSpin)
    this.$refs.submitButton.removeEventListener('mouseleave', this.removeSpin)
  }
}
</script>

<style lang="scss">
.contact-form {
  width: 100%;
  padding: 0 60px 1rem;

  &__input-group {
    padding: 0 0 1rem 0;

    &--label {
      display: block;
      text-align: left;
    }

    &--input {
      width: 100%;
      padding: .5rem;
    }
  }

  &__submit {
    padding: .5rem 2rem;

    background-color: #F5F3F2;
    color: #909AB5;

    cursor: pointer;
  }
}

@media screen and (min-width: 900px) {
  .contact-form {
    &__input-group {
      &:nth-child(1),
      &:nth-child(2) {
        display: inline-block;
        width: 50%;
      }

      &:nth-child(1) {
        .contact-form__input-group--input {
          border-right: 1px solid #909AB5;
        }
      }
    }
  }
}
</style>
