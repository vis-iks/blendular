import { defineComponent, h } from 'vue';

export const DecorateAnimate = defineComponent({
  name: 'DecorateAnimate',
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
        h('path', {"d": "M649.658 100.154a50 50 0 0 0-34.571 14.649l-500 499.804a50.005 50.005 0 0 0 0 70.704l500 500a50.005 50.005 0 0 0 70.508 0l499.219-497.852a50.005 50.005 0 0 0 .2-70.703L685.796 114.803a50 50 0 0 0-36.133-14.65zm.6 120.703 428.711 431.055-428.53 427.344-429.297-429.297z", "fillRule": "evenodd"})
      ]
    );
  }
});
