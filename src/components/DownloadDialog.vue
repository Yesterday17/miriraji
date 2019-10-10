<template>
  <md-dialog :md-active.sync="show">
    <md-dialog-title>下载 ass</md-dialog-title>

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

<script>
export default {
  props: ["content"],
  methods: {
    showDialog() {
      this.show = true;
    },
    hideDialog() {
      this.show = false;
    }
  },
  computed: {
    href() {
      return URL.createObjectURL(new Blob([this.content]));
    }
  },
  data() {
    return {
      show: false,
      filename: "test.ass"
    };
  }
};
</script>
