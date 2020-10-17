# vue-file-select
一个很简单的文件选择插件，可满足在vue项目开发中文件选择的需求

## 安装
```bash
    npm install @yien/vue-file-select -S
```

## 使用方法
此组件提供三种使用方法，分别为[全局注册](#全局注册)、[组件内注册](#组件内注册)、[实例挂载注册](#实例挂载注册)

### 全局注册
此方法同一般组件的全局注册方法一样，可以很方便的注册使用此组件。

1、在入口文件`main.js`中注册`FileSelect`组件
```javascript
    // main.js

    // 导入相关组件
    import Vue from "vue";
    import FileSelect from "@yien/vue-file-select";

    /**
     * 注册组件
     * 通过此方法注册，可以自定义全局组件名称
     */ 
    Vue.component("FileSelect", FileSelect);

    // or

    /**
     * 注册组件
     * 通过此方法注册，全局组件名称为: FileSelect
     */ 
    Vue.use(FileSelect);

    // PS：以上两种注册方法选择其中一种即可
```

2、在`.vue`单文件中应用此组件
```html
    <!-- xxx.vue -->

    <template>
        <div>
            <!-- 应用组件，绑定change方法 -->
            <FileSelect @change="onChange" />
        </div>
    </template>
    <script>
        export default {
            methods: {
                onChange(files) {
                    // 获取文件列表
                    console.log(files);
                }
            }
        }
    </script>
```

### 组件内注册
此方法需要单独在```.vue```文件中导入组件，注册后使用

```html
    <template>
        <div>
            <!-- 应用组件，绑定change方法 -->
            <FileSelect @change="onChange" />
        </div>
    </template>
    <script>
        // 导入相关组件
        import FileSelect from "@yien/vue-file-select";

        export default {
            // 注册组件
            components: { FileSelect },
            methods: {
                onChange(files) {
                    // 获取文件列表
                    console.log(files);
                }
            }
        }
    </script>
```

### 实例挂载注册
通过此方法注册，会在vue实例上挂载一个`$fileSelect`方法，调用此方法会调起浏览器的文件选择窗口，`$fileSelect`方法会返回一个`promise`对象，可通过`then`方法来接收获取到的文件列表。

1、在入口文件main.js中挂载FileList服务
```javascript
    // main.js

    // 导入相关组件
    import Vue from "vue";
    import FileSelect from "@yien/vue-file-select";

    /**
     * 注册
     */ 
    Vue.use(FileSelect.service);
```
2、在`.vue`单文件中应用
```html
    <template>
        <div>
            <button @click="onClick">选择文件</button>
        </div>
    </template>
    <script>
        export default {
            methods: {
                onClick() {
                    this.$fileSelect()
                        .then(files => {
                            console.log(files);
                        })
                }
            }
        }
    </script>
```

## 属性

组件注册方法：props
| 参数     | 说明                                                                                              | 类型    | 可选值     | 默认值 |
| -------- | ------------------------------------------------------------------------------------------------- | ------- | ---------- | ------ |
| disabled | 是否禁用                                                                                          | Boolean | true/false | false  |
| multiple | 是否何以多选                                                                                      | Boolean | true/false | false  |
| accept   | 接受上传的[文件类型](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept) | String  | -          | -      |

实例挂载注册方法：arguments
```javascript
    this.$fileSelect({
        // 是否禁用
        disabled: false,
        // 是否支持多选
        multiple: false,
        // 文件类型
        accept: '*/*'
    })
        .then(files => {
            console.log(files)
        })
```

## License
[MIT](https://github.com/YienCheng/vue-file-select/blob/master/LICENSE)