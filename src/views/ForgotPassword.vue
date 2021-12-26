<template>
  <div class="reset-password">
    <div class="form-wrap">
      <form class="reset">
        <h2>Reset Password</h2>
        <p>Forgot your password? Enter your email to reset it!</p>
        <div class="inputs">
          <div class="input">
            <input type="text" v-model="email" placeholder="Email" />
            <Email class="icon" />
          </div>
        </div>
        <button>Reset</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import Email from "../assets/Icons/envelope-regular.svg";
export default {
  name: "ForgotPassword",
  components: {
    Email,
  },
  data() {
    return {
      email: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.reset-password {
  position: relative;
  .form-wrap {
    .reset {
      h2 {
        margin-bottom: 8px;
      }
      p {
        text-align: center;
        margin-bottom: 32px;
      }
    }
  }
}
</style>
