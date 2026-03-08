import { defineComponent, h } from 'vue';

export const Outliner = defineComponent({
  name: 'Outliner',
  props: {
    class: {
      type: String,
      default: ''
    }
  },
  setup(props, { attrs }) {
    return () => h(
      'svg',
      {
        viewBox: '0 0 20 20',
        
        class: `bl-icons ${props.class}`,
        ...attrs
      },
      [
        h('path', {"d": "M150 100c-27.613.003-49.997 22.387-50 50v200c.003 27.613 22.387 49.997 50 50h400c27.613-.003 49.997-22.387 50-50V150c-.003-27.613-22.387-49.997-50-50zm700 600c-27.613.003-49.997 22.387-50 50v200c.003 27.613 22.387 49.997 50 50h600c27.613-.003 49.997-22.387 50-50V750c-.003-27.613-22.387-49.997-50-50zm0 500c-27.613.003-49.997 22.387-50 50v200c.003 27.613 22.387 49.997 50 50h600c27.613-.003 49.997-22.387 50-50v-200c-.003-27.613-22.387-49.997-50-50z", "fillRule": "evenodd"}),
        h('path', {"d": "M300 499.999v850a50.005 50.005 0 0 0 50 50h350v-100H400v-400h300v-100H400v-300z", "fillRule": "evenodd"})
      ]
    );
  }
});
