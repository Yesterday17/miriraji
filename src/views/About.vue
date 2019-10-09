<template>
  <div class="ml-about">
    <div class="ml-about-section">
      <h2>简介</h2>
      <p>
        米粒垃圾工具箱是供个人使用的工具集合。该工具箱可以离线使用，不会从向线上发送任何信息。
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
          icon: "https://avatars3.githubusercontent.com/u/8667822?v=4"
        }
      ]
    };
  }
};
</script>
