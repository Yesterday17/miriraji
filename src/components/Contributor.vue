<template>
  <md-avatar>
    <img :src="icon" :alt="name" />
    <md-tooltip md-direction="top">{{ name }}</md-tooltip>
  </md-avatar>
</template>

<script>
export default {
  props: ["name", "icon"]
};
</script>
