<template>
  <div>
    <button @click="fbSignin">FB Signin</button>
    <button @click="googleSignin">GG Signin</button>
  </div>
</template>
<script>
export default {
  name: "IndexPage",
  methods: {
    fbSignin() {
      this.$loginWith("facebook");
    },
    googleSignin() {
      this.$loginWith("google");
    },
  },
};
</script>
