import { defineComponent, h } from 'vue';

export const Forward = defineComponent({
  name: 'Forward',
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
        h('path', {"d": "M951.812 99.4c-44.94.01-67.058 54.684-34.765 85.937l213.001 215.212H149.97c-67.616-.96-67.616 100.956 0 100h980.078L917.047 713.55c-49.088 47.125 23.577 119.79 70.703 70.703L1286.103 485.9c19.518-19.526 19.518-51.176 0-70.703L987.75 114.634A50 50 0 0 0 951.812 99.4", "fillRule": "evenodd"})
      ]
    );
  }
});
