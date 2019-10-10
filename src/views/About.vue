<template>
  <div class="ml-about">
    <div class="ml-about-section">
      <h2>简介</h2>
      <p>
        米粒垃圾工具箱是供个人使用的工具集合，可以离线使用。
      </p>
    </div>
    <div class="ml-about-section">
      <h2>贡献者</h2>
      <div class="ml-contributor-list">
        <contributor
          v-for="(item, index) in contributors"
          :key="index"
          :name="item.name"
          :icon="item.icon"
        >
        </contributor>
      </div>
    </div>
    <div class="ml-about-section">
      <h2>更新日志</h2>
      <p>
        v1.0.1 修正 PWA 中的应用名称，离线保存贡献者头像。
        <br />
        v1.0.0 基本功能的完成，包括生成字幕，替换分号等。
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.ml-about {
  margin: 2%;
}

.ml-about-section {
  margin-top: 3%;
}
</style>

<script>
import ContributorVue from "../components/Contributor.vue";
export default {
  components: { contributor: ContributorVue },
  data() {
    return {
      contributors: [
        {
          name: "某昨P",
          icon: "img/avatars/yesterday17.jpeg"
        }
      ]
    };
  }
};
</script>
