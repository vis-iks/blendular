import { defineComponent, h } from 'vue';

export const KeyframeHlt = defineComponent({
  name: 'KeyframeHlt',
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
        h('path', {"d": "M549.853 100.005a50 50 0 0 0-34.961 14.648l-399.805 400c-19.519 19.527-19.519 51.177 0 70.704l399.805 400c19.526 19.518 51.177 19.518 70.703 0l399.219-397.852c19.574-19.471 19.663-51.121.2-70.703L585.796 114.849a50.03 50.03 0 0 0-35.943-14.844", "fillRule": "evenodd"})
      ]
    );
  }
});
