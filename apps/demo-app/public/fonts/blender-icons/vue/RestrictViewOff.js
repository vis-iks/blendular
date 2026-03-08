import { defineComponent, h } from 'vue';

export const RestrictViewOff = defineComponent({
  name: 'RestrictViewOff',
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
        h('path', {"d": "M300 299.997h900v500H300zm-150-200c-27.613.003-49.997 22.387-50 50v800c.003 27.613 22.387 49.997 50 50h550v100H450c-67.616-1-67.616 100.956 0 100h600c65.73-.9 65.73-99.07 0-100H800v-100h550c27.613-.003 49.997-22.387 50-50v-800c-.003-27.613-22.387-49.997-50-50zm50 100h1100v700H200z", "fillRule": "evenodd"})
      ]
    );
  }
});
