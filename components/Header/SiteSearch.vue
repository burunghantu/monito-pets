<script setup>
const router = useRouter()
const localePath = useLocalePath()

const keyword = ref('')
const showInput = ref(false)
const chars = ref(0)
const allowedToSearch = ref(false)

const showInputFields = () => {
  showInput.value = !showInput.value
}

const hideInputFields = () => {
  showInput.value = false
}

const clearKeyword = () => {
  const inputField = document.querySelector('#siteSearch')
  keyword.value = ''
  chars.value = 0
  inputField.focus()
}

const search = () => {
  if (!allowedToSearch.value) return false

  // console.log('run Search ' + keyword.value)
  router.push({
    path: `${localePath('/search')}`,
    query: { keyword: keyword.value, page: 1 },
  })

  hideInputFields()
}

const charsLength = () => {
  chars.value = keyword.value.length

  if (chars.value > 3) {
    allowedToSearch.value = true
  } else {
    allowedToSearch.value = false
  }
}

onMounted(() => {
  handleClickOutside('.site-search', showInput)
})
</script>

<template>
  <form
    class="site-search"
    :class="{ 'is-active': showInput }"
    @submit.prevent="search"
  >
    <label for="siteSearch" @click="showInputFields">
      <NuxtIcon class="scale-150" name="search" />
    </label>
    <!-- Label as toggle trigger -->

    <div class="site-search-fields">
      <input
        id="siteSearch"
        v-model.trim="keyword"
        class="form-input"
        type="search"
        autocomplete="off"
        placeholder="Search..."
        @keyup="charsLength"
      />
      <!-- input search -->

      <button
        type="button"
        class="btn-clear"
        :class="{ 'is-active': allowedToSearch }"
        aria-label="Clear"
        @click.prevent="clearKeyword"
      >
        <NuxtIcon name="times-circle" />
      </button>
      <!-- button keayword clear -->

      <button type="submit" class="btn-submit" aria-label="Search">
        <NuxtIcon name="search" />
      </button>
      <!-- button submit search -->
    </div>
  </form>
</template>
