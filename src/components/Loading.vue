<template lang="">
  <div class="loading">
    <div class="loadingio-spinner-bean-eater-vmneeoafs8">
      <div class="ldio-iq0fm558o0o">
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'loading',
};
</script>
<style>
.loading {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  opacity: 1;
  visibility: hidden;
  transition: all 0.2s ease;
  background-color: rgba(225, 225, 225, 0.3);
}
.loading.show {
  opacity: 1;
  visibility: visible;
}
.loading .loadingio-spinner-bean-eater-vmneeoafs8 {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@keyframes ldio-iq0fm558o0o-1 {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-45deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes ldio-iq0fm558o0o-2 {
  0% {
    transform: rotate(180deg);
  }
  50% {
    transform: rotate(225deg);
  }
  100% {
    transform: rotate(180deg);
  }
}
.ldio-iq0fm558o0o > div:nth-child(2) {
  transform: translate(-15px, 0);
}
.ldio-iq0fm558o0o > div:nth-child(2) div {
  position: absolute;
  top: 40px;
  left: 40px;
  width: 120px;
  height: 60px;
  border-radius: 120px 120px 0 0;
  background: #f8b26a;
  animation: ldio-iq0fm558o0o-1 1s linear infinite;
  transform-origin: 60px 60px;
}
.ldio-iq0fm558o0o > div:nth-child(2) div:nth-child(2) {
  animation: ldio-iq0fm558o0o-2 1s linear infinite;
}
.ldio-iq0fm558o0o > div:nth-child(2) div:nth-child(3) {
  transform: rotate(-90deg);
  animation: none;
}
@keyframes ldio-iq0fm558o0o-3 {
  0% {
    transform: translate(190px, 0);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    transform: translate(70px, 0);
    opacity: 1;
  }
}
.ldio-iq0fm558o0o > div:nth-child(1) {
  display: block;
}
.ldio-iq0fm558o0o > div:nth-child(1) div {
  position: absolute;
  top: 92px;
  left: -8px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #e15b64;
  animation: ldio-iq0fm558o0o-3 1s linear infinite;
}
.ldio-iq0fm558o0o > div:nth-child(1) div:nth-child(1) {
  animation-delay: -0.67s;
}
.ldio-iq0fm558o0o > div:nth-child(1) div:nth-child(2) {
  animation-delay: -0.33s;
}
.ldio-iq0fm558o0o > div:nth-child(1) div:nth-child(3) {
  animation-delay: 0s;
}
.loadingio-spinner-bean-eater-vmneeoafs8 {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: rgba(NaN, NaN, NaN, 0);
}
.ldio-iq0fm558o0o {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-iq0fm558o0o div {
  box-sizing: content-box;
}
</style>
