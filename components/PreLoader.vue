<script>
import { gsap } from "gsap";
import { eventBus } from '/main.js';

export default {
  name: "LoaderComponent",
  data() {
    return {
      miliseconds: 0,
      randomNumbers: [],
      currentNumber: 0,
    };
  },
  created() {
    this.randomNumbers = Array.from({ length: 7 }, () =>
      Math.floor(Math.random() * 100)
    ).sort((a, b) => a - b);
    this.randomNumbers.push(100);
  },
  mounted() {
    const fullScreen = window.matchMedia("(min-width: 1366px)");
    if (fullScreen.matches) {
      this.$nextTick(() => {
        this.animateNumbers();
        const tl = gsap.timeline({ delay: 1.3 });
        tl.from(".group-94", { autoAlpha: 0 })
          .from(".cls-1", { autoAlpha: 0 }, "<")
          .from(".cls-2", { autoAlpha: 0, stagger: 0.2 }, "+=0.2")
          .from(".cls-3", { autoAlpha: 0, stagger: 0.2 }, "<")
          .to(".loader", { yPercent: -100, duration: 1.5, delay: 1, onStart: () => {
                eventBus.emit('loader-up');
                }
            }, "<")
        const tlPhotos = gsap.timeline({ delay: 3 });
        tlPhotos
          .from(".fotos__items", {
            autoAlpha: 0,
            stagger: 1.5,
            duration: 1.5,
            ease: "back.out(1.7)",
          })
          .from(".preloader__text", { autoAlpha: 0, duration: 3 }, "<");
      });
    }
  },
  methods: {
    animateNumbers() {
      this.randomNumbers.forEach((num, index) => {
        setTimeout(() => {
          gsap.set(this.$refs.loaderNumber, { textContent: num });
          if (num === 100) {
            this.hideLoader();
          }
        }, index * (1000 / (this.randomNumbers.length - 1)));
      });
    },
    hideLoader() {
      gsap.to(".loader__number", {
        autoAlpha: 0,
        duration: 1,
      });
    },
  },
};
</script>

<template>
  <div class="preloader">
    <div class="loader">
      <div ref="loaderNumber" class="loader__number">{{ currentNumber }}</div>
    </div>
    <svg
      ref="logo"
      class="logo"
      width="326"
      height="338"
      viewBox="0 0 326 338"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Respect Studio title">
        <g id="Group_92" class="group-92">
          <path
            id="Path_210"
            class="cls-1"
            d="M25.8349 37.946C24.113 38.037 22.5722 38.037 20.8513 38.037H9.25225V65.654H0.010437V0H20.8503C36.7976 0 48.2145 3.171 48.2145 18.927C48.2145 29.341 43.2319 34.322 35.1667 36.495L50.3937 65.654H40.0593L25.8349 37.946ZM9.25225 7.78799V30.247H21.5787C31.2727 30.247 38.7026 29.247 38.7026 19.109C38.7026 8.97101 31.2707 7.78799 21.5787 7.78799H9.25225Z"
            fill="#E63E3A"
          />
          <path
            id="Path_211"
            class="cls-2"
            d="M63.0753 44.0131C63.3474 54.5131 70.9574 59.5871 78.1161 59.5871C85.3649 59.5871 89.351 56.3281 91.435 51.5281H99.9505C97.7773 59.8601 89.9843 66.8351 78.1151 66.8351C62.7071 66.8351 54.1937 55.7841 54.1937 41.3861C54.1937 25.9001 64.523 16.1201 77.8429 16.1201C92.7927 16.1201 101.581 28.5271 100.585 44.0131H63.0753ZM63.1653 36.9481H91.8873C91.6152 30.0661 86.6326 23.1821 77.844 23.1821C70.5962 23.1821 63.8907 27.1681 63.1653 36.9481Z"
            fill="#E63E3A"
          />
          <path
            id="Path_212"
            class="cls-2"
            d="M136.015 31.1489C134.657 25.3489 130.312 23.0869 124.509 23.0869C119.707 23.0869 114.271 24.8079 114.271 29.2459C114.271 33.1459 116.989 34.8619 121.701 35.8589L128.586 37.2149C137.466 38.8479 145.257 42.3769 145.257 51.7069C145.257 61.3959 136.56 66.8309 125.415 66.8309C112.639 66.8309 105.481 58.4069 104.485 49.8949H113.182C114.542 56.1419 118.348 59.8569 125.596 59.8569C131.848 59.8569 136.922 57.2309 136.922 52.6129C136.922 47.6309 132.3 45.7299 127.047 44.5509L119.797 43.1029C113.183 41.6529 105.936 38.7559 105.936 29.6079C105.936 21.0079 114.633 16.0259 125.416 16.0259C136.021 16.0259 143.085 21.8199 144.626 31.1489H136.015Z"
            fill="#E63E3A"
          />
          <path
            id="Path_213"
            class="cls-2"
            d="M161.659 16.936V24.636C164.649 19.474 169.722 16.123 177.606 16.123C188.841 16.123 198.446 25.541 198.446 41.48C198.446 57.689 188.841 66.837 177.606 66.837C169.723 66.837 164.649 63.484 161.659 58.321V81.505H153.413V16.936H161.659ZM175.521 59.769C183.948 59.769 189.474 53.1571 189.474 41.4771C189.474 29.7971 183.948 23.177 175.521 23.177C168.182 23.177 161.296 28.6121 161.296 41.4771C161.296 54.342 168.182 59.769 175.521 59.769Z"
            fill="#E63E3A"
          />
          <path
            id="Path_214"
            class="cls-2"
            d="M212.129 44.0131C212.4 54.5131 220.011 59.5871 227.17 59.5871C234.418 59.5871 238.405 56.3281 240.49 51.5281H249.005C246.831 59.8601 239.038 66.8351 227.17 66.8351C211.762 66.8351 203.249 55.7841 203.249 41.3861C203.249 25.9001 213.579 16.1201 226.898 16.1201C241.848 16.1201 250.637 28.5271 249.64 44.0131H212.129ZM212.219 36.9481H240.941C240.67 30.0661 235.685 23.1821 226.897 23.1821C219.649 23.1821 212.943 27.1681 212.219 36.9481Z"
            fill="#E63E3A"
          />
          <path
            id="Path_215"
            class="cls-2"
            d="M298.024 33.2361H289.688C288.51 27.4361 283.527 23.3651 277.094 23.3651C269.846 23.3651 263.05 29.0651 263.05 41.2951C263.05 53.6101 269.846 59.5871 277.094 59.5871C280.043 59.6661 282.931 58.7415 285.285 56.9647C287.639 55.188 289.319 52.6645 290.05 49.8081H298.569C296.848 58.9551 288.24 66.8351 276.823 66.8351C262.778 66.8351 254.08 56.2351 254.08 41.3861C254.08 26.8971 263.231 16.1201 277.639 16.1201C282.538 16.0074 287.31 17.6832 291.063 20.8337C294.815 23.9842 297.29 28.3934 298.024 33.2361Z"
            fill="#E63E3A"
          />
          <path
            id="Path_216"
            class="cls-2"
            d="M307.992 4.70898H316.236V16.936H325.478V23.545H316.236V52.435C316.236 57.505 316.598 58.773 321.309 58.773H325.478V65.657H319.498C310.166 65.657 307.992 63.574 307.992 53.433V23.545H300.288V16.936H307.992V4.70898Z"
            fill="#E63E3A"
          />
        </g>
        <g id="Group_93" class="group-93">
          <path
            id="Path_217"
            class="cls-1"
            d="M89.6151 112.074C89.6151 123.94 84.2704 134.351 71.6758 136.974V128.008C79.1957 125.835 81.8241 118.228 81.8241 111.708C81.8241 106.637 79.5579 97.7599 72.2191 97.7599C66.4161 97.7599 63.5206 102.289 62.1619 108.449L60.44 116.055C58.2648 126.106 54.4598 138.155 41.23 138.155C28.4543 138.155 21.5677 126.201 21.5677 113.162C21.5677 97.6758 30.0852 87.8939 43.132 86.1729V95.2289C34.0712 96.9499 29.3588 103.2 29.3588 113.341C29.3588 123.121 33.8892 128.648 40.4136 128.648C47.3902 128.648 50.1086 122.669 52.0116 114.517L53.7335 106.367C55.7265 97.3129 60.8012 88.3459 71.6728 88.3459C84.2704 88.3469 89.6151 101.479 89.6151 112.074Z"
            fill="#E63E3A"
          />
          <path
            id="Path_218"
            class="cls-3"
            d="M83.7251 148.843V157.085H71.4937V166.32H64.8793V157.085H35.9762C30.9016 157.085 29.634 157.447 29.634 162.156V166.32H22.7474V160.344C22.7474 151.017 24.8314 148.844 34.9797 148.844H64.8803V141.144H71.4947V148.844L83.7251 148.843Z"
            fill="#E63E3A"
          />
          <path
            id="Path_219"
            class="cls-3"
            d="M29.724 203.813C25.1026 201.006 21.5697 196.568 21.5697 188.513C21.5697 177.283 29.1807 172.936 40.3255 172.936H71.4937V181.177H42.7718C35.2509 181.177 28.7274 182.353 28.7274 191.41C28.7274 199.29 34.1643 203.817 44.6747 203.817H71.4937V212.058H22.7513V203.817L29.724 203.813Z"
            fill="#E63E3A"
          />
          <path
            id="Path_220"
            class="cls-3"
            d="M88.4375 256.248V264.489H22.7513V256.248H30.0912C24.9265 253.26 21.5737 248.188 21.5737 240.309C21.5737 229.082 30.7245 219.482 46.943 219.482C62.8893 219.482 72.3121 229.082 72.3121 240.309C72.3121 248.188 68.9604 253.26 63.7947 256.248H88.4375ZM65.2415 242.391C65.2415 233.971 58.628 228.446 46.9389 228.446C35.2498 228.446 28.6364 233.97 28.6364 242.391C28.6364 249.727 34.0722 256.609 46.9389 256.609C59.8056 256.609 65.2415 249.727 65.2415 242.39V242.391Z"
            fill="#E63E3A"
          />
          <path
            id="Path_221"
            class="cls-3"
            d="M71.4937 283.508H22.7463V275.269H71.4937V283.508ZM88.4375 283.508H78.4704V275.269H88.4375V283.508Z"
            fill="#E63E3A"
          />
          <path
            id="Path_222"
            class="cls-3"
            d="M46.9389 337.842C29.2707 337.842 21.5697 325.797 21.5697 314.476C21.5697 303.155 29.2737 291.111 46.9389 291.111C64.6041 291.111 72.3082 303.156 72.3082 314.476C72.3082 325.796 64.6081 337.842 46.9389 337.842ZM28.8175 314.476C28.8175 321.995 34.4354 329.056 46.9389 329.056C59.9867 329.056 65.0613 321.994 65.0613 314.476C65.0613 306.958 60.2589 299.897 46.9389 299.897C33.8921 299.899 28.8175 306.964 28.8175 314.479V314.476Z"
            fill="#E63E3A"
          />
        </g>
        <g id="Group_94" class="group-94">
          <path
            id="Path_223"
            d="M0.010437 77.9658H10.4308V88.3808H0.010437V77.9658Z"
            fill="#E63E3A"
          />
        </g>
      </g>
    </svg>
    <div class="fotos">
      <p class="preloader__text">Digital Marketing Agency</p>
      <div class="fotos__items item2"></div>
      <div class="fotos__items item4"></div>
      <div class="fotos__items item5"></div>
    </div>
  </div>
</template>

<style scoped>
.preloader {
  position: sticky;
  top: 0;
}
.loader {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: #101820;
  z-index: 5;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
}
.loader__number {
  position: absolute;
  color: #e63e3a;
  font-size: 230px;
  bottom: 60px;
  right: 20px;
  font-family: "Suisse Intl", sans-serif;
}
.preloader__text {
  position: absolute;
  color: #e63e3a;
  top: 20px;
  right: 40px;
  width: 140px;
  font-size: 18px;
  line-height: 1.1;
  z-index: 10;
  text-align: right;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
}
.logo {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;
}
/* .fotos {
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fotos__items {
  position: sticky;
  top: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
} */
.fotos {
    position: sticky;
    top: 0;
    width: 100%;
    height: 100vh;
}
.fotos__items {
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.item2 {
    background-image: url("../public/bg_loader/02photo.png");
}
.item4 {
    background-image: url("../public/bg_loader/04photo.png");
}
.item5 {
    background-image: url("../public/bg_loader/05photo.png");
}
</style>
