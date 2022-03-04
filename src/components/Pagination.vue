<template>
  <ul class="pagination">
    <template v-if="totalPages > 1">
    <li
      v-for="page in totalPages"
      :key="page"
      class="page-item"
      :class="{active: currentPage === page}"
    >
      <router-link :to="{path: url, query: {page: page}}" class="page-link">
        {{ page }}
      </router-link>
    </li>
    </template>
  </ul>
</template>

<script>
export default {
  name: 'McvPagination',
  props: {
    total: {
      type: Number,
      required: true
    },
    limit: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.limit)
    }
  }
}
</script>

