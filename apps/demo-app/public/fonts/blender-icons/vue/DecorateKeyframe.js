import { defineComponent, h } from 'vue';

export const DecorateKeyframe = defineComponent({
  name: 'DecorateKeyframe',
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
        h('path', {"d": "M649.658 100.056a49.98 49.98 0 0 0-34.571 14.648l-500 500c-19.519 19.527-19.519 51.177 0 70.704l500 500c19.504 19.39 51.004 19.39 70.508 0l499.219-497.852c19.574-19.47 19.663-51.12.2-70.703L685.796 114.704a50.02 50.02 0 0 0-36.138-14.648", "fillRule": "evenodd"})
      ]
    );
  }
});
