import { defineComponent, h } from 'vue';

export const SelectExtend = defineComponent({
  name: 'SelectExtend',
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
        h('path', {"d": "M549.204 99.509c-27.689.003-50.105 22.506-50 50.195l.6 350.586-349.804.2c-27.613.003-49.997 22.387-50 50v900c.003 27.613 22.387 49.997 50 50h900c27.613-.003 49.997-22.387 50-50v-350h350c27.613-.003 49.997-22.387 50-50v-900c-.003-27.613-22.387-49.997-50-50z", "fillRule": "evenodd"})
      ]
    );
  }
});
