<template>
  <div>loading..</div>
</template>
<script>
export default {
  beforeMount() {
    const urlStr = window.location.href;
    const url = new URL(urlStr);
    const hash = new URLSearchParams(url.hash.substring(1));
    const urlState = hash.get("state");
    const accessToken = hash.get("access_token");
    const state = this.$cookiz.get("state");
    if (urlState !== state) this.$router.replace("/");
    console.log(`access token ${accessToken}`);
  },
};
</script>
