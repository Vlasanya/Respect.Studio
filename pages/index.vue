<script>
import { gsap } from "gsap";

export default {
  methods: {
    handleLoaderUp() {
      gsap.to(".main-container", { y: -100, duration: 1.5 });
    }
  }
};
</script>

<template>
  <div>
    <PreLoader @loader-up="handleLoaderUp"/>
    <HeaderBlock  />
    <BusinessGrowth />
    <TrustedBlock />
  </div>
</template>

<style>
/*  */
</style>
