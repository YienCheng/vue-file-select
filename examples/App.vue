<template>
  <div id="app">
    <h1>FileSelect</h1>
    <div style="margin-bottom: 20px;">
      <FileSelect @change="onChange" multiple>
        <button>组件调用</button>
      </FileSelect>
      <p v-for="file in files" :key="file.name">{{ file.name }}</p>
    </div>
    <div>
      <button @click="onClick">服务调用</button>
      <p v-for="file in serviceFiles" :key="file.name">{{ file.name }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      files: [],
      serviceFiles: []
    };
  },
  methods: {
    onChange(files) {
      this.files = files;
    },
    onClick() {
      this.$fileSelect({
        multiple: true
      }).then(files => {
        this.serviceFiles = files;
      });
    }
  }
};
</script>
<style></style>
