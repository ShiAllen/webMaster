<template>
  <el-dropdown trigger="click" class='international-icon' @command="handleSetLanguage">
    <div>
      <svg-icon class-name='international-icon' icon-class="language" />
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="tw" :disabled="language==='tw'">中文</el-dropdown-item>
      <el-dropdown-item command="en" :disabled="language==='en'">English</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown></template>
<script>
  export default {
    name: 'LangSelect',
    computed: {
      language() {
        return this.$store.getters.language
      }
    },
    methods: {
      handleSetLanguage(lang) {
        this.$i18n.locale = lang
        this.$store.dispatch('setLanguage', lang)
        // this.$notify({
        //   title: 'Info',
        //   message: 'switch language success',
        //   type: 'success',
        //   offset: 100,
        //   showClose: false
        // })
      }
    }
  }
</script>
<style scoped>
  .international-icon {
    font-size: 20px;
    cursor: pointer;
  }
</style>
