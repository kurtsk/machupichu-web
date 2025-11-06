<template>
  <v-footer :fixed="true" app theme="dark" class="footer">
    <div class="copyright text-center">
      © {{ fecha.getFullYear() }}, Powered by <br />
      <a :href="reservaconfirmadaUrl" target="_blank">
        <img
          style="max-width: 150px; cursor: pointer;"
          :src="logoBistroSuite"
          alt="BistroSuite Logo"
          rel="noreferrer"
        />
      </a>
    </div>
  </v-footer>
</template>

<script setup>
import {ref} from "vue";

let fecha = ref(new Date())
let logoBistroSuite = ref('/svg/bistro-suite-logo-white.svg')
let reservaconfirmadaUrl = ref('https://bistrosuite.io')

</script>

<style lang="scss">
.theme--dark.v-footer {
  background: #0f0f0f;
  color: rgb(191, 191, 191);
}

.footer {
  background: #0f0f0f;
  width: 100%;
  z-index: 2;
  text-align: center;

  .copyright {
    width: 100%;
    font-size: 0.8rem;
    img {
      width: 150px;
    }
  }
}

//  ----------------------------
// NOKIA N9
//  ----------------------------
@media screen and (max-width: 480px) {
  .footer {
    .copyright {
      font-size: 0.7rem;
      img {
        width: 130px;
      }
    }
  }
}
</style>
