import FileSelect from "./file-select/main";

/**
 * 全局组件注册使用
 *
 * eg:
 *  import Vue from "vue";
 *  Vue.use(FileSelect);
 *  <FileSelect />
 *
 * @param Vue
 */
FileSelect.install = Vue => {
  Vue.component(FileSelect.name, FileSelect);
};

/**
 * 挂载到全局vue实例
 *
 * eg:
 *  import Vue from "vue";
 *  Vue.use(FileSelect.service);
 *  this.$fileSelect()
 *
 * @type {{install: install}}
 */
FileSelect.service = {
  install: Vue => {
    const FileSelectConstructor = Vue.extend(FileSelect);

    Vue.prototype.$fileSelect = ({
      // 是否禁用
      disabled,
      // 是否支持多选
      multiple,
      // 文件类型
      accept,
      // 文件更改回调
      onChange
    } = {}) => {
      const instance = new FileSelectConstructor({
        el: document.createElement("div"),
        propsData: {
          disabled,
          multiple,
          accept
        }
      });

      return new Promise(resolve => {
        instance.$on("change", files => {
          resolve(files);
          onChange && onChange(files);
          setTimeout(() => {
            instance.$destroy();
          });
        });
        instance.onClick();
      });
    };
  }
};

export default FileSelect;
