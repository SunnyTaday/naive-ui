# 菜单 Menu

没有吃的。

<!--single-column-->

## 演示

```demo
horizontal
default-expanded-keys
indent
collapse
```

## Props

### Menu Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| collapsed-icon-size | `number` | `24` | 菜单折叠时图标的大小，如果为设定则使用 `icon-size` 代替 |
| collapsed-width | `number` | `undefined` | 折叠后菜单的宽度 |
| collapsed | `boolean` | `false` | 菜单是否折叠，值在菜单为垂直时有用 |
| default-expand-all | `boolean` | `false` |  |
| default-expanded-keys | `Array<string>` | `[]` | 在非受控状态下默认展开的子菜单标识符数组 |
| default-value | `string \| null` | `null` |  |
| expanded-keys | `Array<string>` | `undefined` | 展开的子菜单标识符数组，如果设定了，菜单的展开将会进入受控状态，`default-expanded-keys` 不会生效 |
| icon-size | `number` | `20` | 菜单未折叠时图标的大小 |
| indent | `number` | `32` | 菜单每级的缩进 |
| items | `Array<MenuItem \| Submenu \| MenuItemGroup>` | `[]` | 菜单的数据 |
| mode | `'vertical' \| 'horizontal'` | `'vertical'` |  |
| root-indent | `number` | `32` | 菜单第一级的缩进，如果没有设定，使用 `indent` 代替 |
| value | `string \| null` | `undefined` | 菜单当前的选中值 |
| on-update:expanded-keys | `(value: string[]) => any` | `undefined` |  |
| on-update:value | `(value: string, item: MenuItem) => any` | `undefined` |  |

### MenuItem Properties

| 名称      | 类型                         | 说明           |
| --------- | ---------------------------- | -------------- |
| disabled? | `boolean`                    |                |
| extra?    | `string \| () => VNodeChild` |                |
| icon?     | `() => VNode`                |                |
| key       | `string`                     | 菜单项的标识符 |
| title     | `string \| () => VNodeChild` |                |

### Submenu Properties

| 名称      | 类型                                          | 说明           |
| --------- | --------------------------------------------- | -------------- |
| children  | `Array<MenuItem \| Submenu \| MenuItemGroup>` |                |
| disabled? | `boolean`                                     |                |
| extra?    | `string \| () => VNodeChild`                  |                |
| icon?     | `() => VNodeChild`                            |                |
| key       | `string`                                      | 菜单项的标识符 |
| title     | `string \| (() => VNodeChild)`                |                |

### MenuItemGroup Properties

| 名称     | 类型                                          | 说明           |
| -------- | --------------------------------------------- | -------------- |
| children | `Array<MenuItem \| Submenu \| MenuItemGroup>` |                |
| key      | `string`                                      | 菜单项的标识符 |
| title    | `string \| (() => VNodeChild)`                |                |
| type     | `'group'`                                     |                |