<template>
  <div>
    <md-toolbar class="ml-navbar">
      <h3 class="md-title" style="flex: 1">米粒垃圾工具箱</h3>
      <md-tabs class="md-toolbar-section-right" md-sync-route>
        <md-tab id="home" md-label="主页" to="/" exact></md-tab>
        <md-tab id="subtite" md-label="打轴" to="/subtitle"></md-tab>
        <md-tab id="codec" md-label="压制" to="/codec"></md-tab>
        <md-tab id="about" md-label="关于" to="/about"></md-tab>
      </md-tabs>
    </md-toolbar>
    <router-view />
  </div>
</template>

<style lang="scss">
.ml-navbar .md-tabs-navigation {
  background-color: inherit !important;
}
</style>
