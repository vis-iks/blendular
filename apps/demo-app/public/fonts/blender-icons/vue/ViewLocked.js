import { defineComponent, h } from 'vue';

export const ViewLocked = defineComponent({
  name: 'ViewLocked',
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
        h('path', {"d": "M200 800V600c0-276.142 223.858-500 500-500s500 223.858 500 500v200h50c27.61 0 50 22.386 50 50v800c0 27.61-22.39 50-50 50H150c-27.614 0-50-22.39-50-50V850c0-27.614 22.386-50 50-50zm100-200c0-220.914 179.086-400 400-400s400 179.086 400 400v200H300zm400 500c-55.228 0-100 44.77-100 100 0 37.01 20.11 69.33 50 86.62V1400c0 27.61 22.386 50 50 50s50-22.39 50-50v-113.38c29.89-17.29 50-49.61 50-86.62 0-55.23-44.772-100-100-100", "fillRule": "evenodd"})
      ]
    );
  }
});
