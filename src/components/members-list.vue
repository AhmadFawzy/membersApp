<template>
  <div v-if="member" class="member-card d-flex flex-column justify-content-center align-items-center">
		<router-link class="w-100 h-100 bg-white rounded-lg p-3" :to="`/member/${member.id}`">
			<img class="w-100 rounded-lg" :src="member.picture" alt="member image">
			<h2 class="mt-3 text-truncate fs-3 fw-700 gray_color-4">{{ member.title }}. {{member.firstName}}</h2>
		</router-link>
  </div>
</template>

<script>
export default {
	props: ["member"]
}
</script>

<style></style>