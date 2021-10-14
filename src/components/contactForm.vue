<template>
  <form @submit.prevent="sendMessage" class="contact-form" ref="contactForm">
    <div class="contact-form__input-group">
      <label class="contact-form__input-group--label" for="name"
        >您的稱呼</label
      >
      <input
        v-model.trim="name"
        class="contact-form__input-group--input"
        :class="{ 'error-input': error.name }"
        :placeholder="error.name ? errorMessage : null"
        type="text"
        id="name"
        name="inputName"
      />
    </div>
    <div class="contact-form__input-group">
      <label class="contact-form__input-group--label" for="email"
        >您的Email信箱</label
      >
      <input
        v-model.trim="email"
        class="contact-form__input-group--input"
        :class="{ 'error-input': error.email }"
        :placeholder="error.email ? errorMessage : null"
        type="text"
        id="email"
        name="inputEmail"
      />
    </div>
    <div class="contact-form__input-group">
      <label class="contact-form__input-group--label" for="message">訊息</label>
      <textarea
        v-model.trim="message"
        class="contact-form__input-group--input"
        :class="{ 'error-input': error.message }"
        :placeholder="error.message ? errorMessage : null"
        id="message"
        name="inputMessage"
        cols="30"
        rows="10"
      ></textarea>
    </div>
    <button class="contact-form__submit" ref="submitButton" :disabled="isSending">
      {{ isSending ? '處理中⋯⋯' : '# 送出' }}
    </button>
  </form>
</template>

<script>
import emailjs from 'emailjs-com'
import { spinMixin } from '@/utils/mixins'

export default {
  name: 'contactForm',
  props: ['cursorElement'],
  mixins: [spinMixin],
  data() {
    return {
      // input error hint
      error: {
        name: null,
        email: null,
        message: null
      },
      errorMessage: '請輸入內容',
      // v-model
      name: '',
      email: '',
      message: '',
      // loading control
      isSending: false
    }
  },
  mounted() {
    this.$refs.submitButton.addEventListener('mouseover', this.addSpin)
    this.$refs.submitButton.addEventListener('mouseleave', this.removeSpin)
  },
  beforeDestroy() {
    this.$refs.submitButton.removeEventListener('mouseover', this.addSpin)
    this.$refs.submitButton.removeEventListener('mouseleave', this.removeSpin)
  },
  methods: {
    async sendMessage() {
      this.error.name = !this.name.length ? true : false
      this.error.email = (!this.email.length || !this.email.includes('@')) ? true : false
      this.error.message = !this.message.length ? true : false

      if (this.error.name || this.error.email || this.error.message) return

      try {
        this.isSending = true
        await emailjs.sendForm(
          'service_uw6u13a',
          'template_0h4juj4',
          this.$refs.contactForm,
          'user_UnNbA1E3fxYRe2XvW6Ztg'
        )
        // mail success
        this.isSending = false
        this.name = this.email = this.message = ''
        this.error.name = this.error.email = this.error.message = null
      } catch (error) {
        console.error(error)
        this.isSending = false
      }
    }
  }
}
</script>

<style lang="scss">
.contact-form {
  width: 100%;
  padding: 0 60px 1rem;

  &__input-group {
    padding: 0 0 1rem 0;

    // textarea
    &:nth-child(3) {
      padding: 0 0 2rem 0;
    }

    &--label {
      display: block;
      text-align: left;
    }

    &--input {
      display: block;
      width: 100%;
      padding: 0.5rem;

      background-color: #f5f3f2;
      background-image: url('~@/assets/images/bg_landing.svg');
      background-size: cover;
      background-position: center;

      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        box-shadow: inset 0 0 0 1000px #f5f3f2;
      }
    }

    &--error {
      padding: 0.25rem 0 0 0;

      text-align: left;
      font-size: 0.8rem;
      font-weight: bold;
      color: #f44336;
    }
  }

  &__submit {
    padding: 0.5rem 2rem;

    background-color: #f5f3f2;
    color: #909ab5;

    cursor: pointer;
    transition: .2s;

    &:hover {
      transform: translateY(-2px);
    }

    &:disabled {
      cursor: wait;
    }
  }
}

.error-input {
  outline: 1px solid #f44336;

  &::placeholder {
    color: #f44336;
  }
}

@media screen and (min-width: 900px) {
  .contact-form {
    &__input-group {
      &:not(:nth-child(3)) {
        display: inline-block;
        width: 50%;
      }

      &:nth-child(1) {
        .contact-form__input-group--input {
          border-right: 1px solid #909ab5;
        }
      }
    }
  }
}
</style>
