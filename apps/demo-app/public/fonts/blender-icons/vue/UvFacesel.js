import { defineComponent, h } from 'vue';

export const UvFacesel = defineComponent({
  name: 'UvFacesel',
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
        h('path', {"d": "m1449.806 200.189-350 .8.39 100 299.804-.6v500l-300.195.6.39 100 350-.8c27.537-.1 49.802-22.463 49.805-50v-600c-.003-27.69-22.506-50.105-50.196-50zM200 1100.389v349.219c.003 27.613 22.387 49.997 50 50h600c27.613-.003 49.997-22.387 50-50v-349.219H800v299.219H300v-299.219z", "fillRule": "evenodd"}),
        h('path', {"d": "M150 100.389c-27.613.003-49.997 22.387-50 50v800c.003 27.613 22.387 49.997 50 50h800c27.613-.003 49.998-22.387 50-50v-800c-.002-27.613-22.387-49.997-50-50z", "fillRule": "evenodd"})
      ]
    );
  }
});
