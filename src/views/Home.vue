<template>
  <div class="home-page">
    <app-header>
      <h1>Members Profile App</h1>
    </app-header>

    <div class="row justify-content-center mx-0">
      <div class="col-11">
        <div class="row justify-content-around justify-content-sm-start text-center mx-0 mb-5">
          <members-list class="col-5 col-sm-4 col-md-3 col-xl-2 mt-5" v-for="member in members" :key="member.id" :member="member"></members-list>
        </div>
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center mb-0">
            <li class="page-item" :class="{'disabled': page<=1, 'pointer': page>1}">
              <a class="page-link" :aria-disabled="page <= 1" @click.prevent="prevPage">Previous</a>
            </li>
            <li class="page-item" :class="{'disabled': page==1, 'pointer': page!=1}">
              <a class="page-link" @click.prevent="getUsers(1, 10)">1</a>
            </li>
            <li class="page-item" :class="{'disabled': page==2, 'pointer': page!=2}">
              <a class="page-link" @click.prevent="getUsers(2, 10)">2</a>
            </li>
            <li class="page-item" :class="{'disabled': page==3, 'pointer': page!=3}">
              <a class="page-link" @click.prevent="getUsers(3, 10)">3</a>
            </li>
            <li class="page-item" :class="{'disabled': page>=999, 'pointer': page<999}">
              <a class="page-link" @click.prevent="nextPage">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/app-header';
import MembersList from '../components/members-list';
import axios from 'axios';

export default {
  components: {
    AppHeader,
    MembersList
  },

  computed: {
    members() {
      return this.$store.getters.membersList;
    },
    page() {
      return this.$store.getters.page;
    }
  },

  mounted() {
    this.getUsers(this.page, 10);
  },

  methods: {
    getUsers(page, limit) {
      axios.get(`https://dummyapi.io/data/api/user?page=${page}&limit=${limit}`, {
        headers: {'app-id': '601401da2873cddc8e0f248f'}
      })
      .then(res => {
        this.$store.dispatch('storeMembers', res.data.data)
        this.$store.dispatch('updatePage', page)
      })
      .catch(err => console.log(err))
    },
    prevPage() {
      if(this.page > 0) {
        this.$store.dispatch('prevPage', this.page)
        this.getUsers(this.page, 10);
      }
    },
    nextPage() {
      if(this.page < 999) {
        this.$store.dispatch('nextPage', this.page)
        this.getUsers(this.page, 10);
      }
    }
  }
}
</script>

<style lang="scss">
.home-page-content {
  height: calc(100vh - 100px);
}
</style>