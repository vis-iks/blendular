import { defineComponent, h } from 'vue';

export const SelectDifference = defineComponent({
  name: 'SelectDifference',
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
        h('path', {"d": "M549.6 99.305c-27.689.003-50.105 22.506-50 50.195l.8 300.781c.1 27.537 22.463 49.802 50 49.805h550v550.195c.003 27.613 22.387 49.997 50 50h300c27.613-.003 49.997-22.387 50-50v-900c-.003-27.613-22.387-49.997-50-50zm-400 400.39c-27.613.003-49.997 22.387-50 50v900c.003 27.613 22.387 49.997 50 50l900.782 1c27.689-.003 50.105-22.506 50-50.195l-.8-300.586c-.003-27.613-22.387-49.997-50-50h-550V549.718c-.003-27.613-22.387-49.997-50-50z", "fillRule": "evenodd"})
      ]
    );
  }
});
