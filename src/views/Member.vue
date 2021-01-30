<template>
  <div class="min-vh-100" v-if="memberData">
    <app-header>
      <h1 class="text-capitalize">{{ memberData.title }}. {{ memberData.firstName }} {{ memberData.lastName}}</h1>
    </app-header>
    <div class="row member-card-container justify-content-center mx-0">
      <div class="col-11 px-0">
        <div class="row justify-content-center align-items-center h-100 mb-5 mx-0">
          <div class="col-6 col-sm-4 col-lg-3 col-xl-2 text-center px-0 mr-md-5">
            <img class="w-100 rounded-lg" :src="memberData.picture" :alt="`${memberData.firstName} image`">
          </div>
          <div class="col-md-6 text-center text-md-left text-break px-0">
            <span class="gray_color-3 fw-300">{{memberData.id}}</span>
            <h3 class="text-capitalize fw-700">{{ memberData.title }}. {{memberData.firstName}} {{ memberData.lastName}}</h3>
            <p>
              <span class="gray_color-4 fw-700 px-1">Gender: </span>
              <span class="gray_color-4 fw-300">{{memberData.gender }}</span>
            </p>
            <p>
              <span class="gray_color-4 fw-700 px-1">Date Of Birth: </span>
              <span class="gray_color-4 fw-300">{{ memberData.dateOfBirth }}</span>
            </p>
            <p class="mb-3">
              <span class="gray_color-4 fw-700 px-1">Register Date: </span>
              <span class="gray_color-4 fw-300">{{ memberData.registerDate }}</span>
            </p>
            <p>
              <span class="gray_color-4 fw-700 px-1">Email: </span>
              <span class="gray_color-4 fw-300">{{ memberData.email }}</span>
            </p>
            <p>
              <span class="gray_color-4 fw-700 px-1">Phone: </span>
              <span class="gray_color-4 fw-300">{{ memberData.phone }}</span>
            </p>
          </div>
        </div>
        <hr>
        <div class="col-12 text-right">
          <router-link class="btn btn-outline-dark fw-700 px-4" to="/">Back</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/app-header';
import axios from 'axios';
export default {
  components: {
    AppHeader
  },

  data() {
    return {
      memberData: null
    }
  },
  mounted() {
    axios.get(`https://dummyapi.io/data/api/user/${this.$route.params.id}`,
    {
      headers: {'app-id': '601401da2873cddc8e0f248f'}
    })
    .then(res => this.memberData = res.data)
    .catch(err => console.log(err))
  }
}
</script>

<style scoped lang="scss">
.member-card-container {
  min-height: 40vh;
}
</style>