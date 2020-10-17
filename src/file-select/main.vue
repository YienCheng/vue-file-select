<template>
  <div
    class="file-select-container"
    :class="{ disabled: disabled }"
    @click="onClick"
  >
    <input
      class="input"
      ref="input"
      type="file"
      @change="onChange"
      :multiple="multiple"
      :accept="accept"
      :disabled="disabled"
    />
    <slot>
      <button :disabled="disabled">选择文件</button>
    </slot>
  </div>
</template>

<script>
export default {
  name: "FileSelect",
  props: {
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否多选
    multiple: {
      type: Boolean,
      default: false
    },
    // 文件类型
    accept: {
      type: String
    }
  },
  methods: {
    // 选择文件改变
    onChange(e) {
      const files = e.target.files;
      this.$emit(
        "change",
        Object.keys(files).map(index => files[index])
      );
      this.clearFiles();
    },
    // 点击选择文件
    onClick() {
      if (this.disabled) return false;
      this.$refs["input"].click();
    },
    // 清除文件选项
    clearFiles() {
      this.$refs["input"].value = "";
    }
  }
};
</script>

<style lang="less" scoped>
.file-select-container {
  display: inline-flex;
  .input {
    display: none;
  }
  &.disabled,
  &.disabled > * {
    cursor: no-drop;
  }
}
</style>
