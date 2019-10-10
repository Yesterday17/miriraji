<template>
  <md-dialog :md-active.sync="show">
    <md-dialog-title>下载 ass</md-dialog-title>

    <md-field class="ml-download">
      <label>回数</label>
      <md-input v-model="kai" type="number"></md-input>
    </md-field>
    <div class="ml-download">
      <md-radio v-model="isOmake" :value="false">本篇</md-radio>
      <md-radio v-model="isOmake" :value="true">omake</md-radio>
    </div>

    <md-dialog-actions>
      <md-button class="md-primary" @click="hideDialog">关闭</md-button>
      <md-button
        class="md-primary"
        :href="href"
        :download="filename"
        @click="hideDialog"
        >下载</md-button
      >
    </md-dialog-actions>
  </md-dialog>
</template>

<style lang="scss" scoped>
.ml-download {
  margin: 0 24px 0;
}
</style>

<script>
export default {
  props: ["content"],
  methods: {
    showDialog() {
      this.show = true;
    },
    hideDialog() {
      this.show = false;
    },
    isContentOmake() {
      return !this.content.includes("みりっほー");
    }
  },
  computed: {
    href() {
      return URL.createObjectURL(new Blob([this.content]));
    },
    filename() {
      return this.kai.toString() + (this.isOmake ? "omake" : "本篇") + ".ass";
    }
  },
  data() {
    return {
      show: false,
      isOmake: false,
      kai: 0
    };
  },
  mounted() {
    this.isOmake = this.isContentOmake();
  }
};
</script>
