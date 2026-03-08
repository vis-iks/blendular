import { defineComponent, h } from 'vue';

export const Italic = defineComponent({
  name: 'Italic',
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
        h('path', {"d": "M448.348 100c-67.616-1-67.616 100.956 0 100h250.39l-.2 14.258-292.604 940.82a49.9 49.9 0 0 0-4.1 21.289l.6 23.633H151.653c-67.616-1-67.616 100.956 0 100h600c67.616 1 67.616-100.956 0-100h-249.23c.006-.5.006-.9 0-1.37l-.4-13.867 292.214-939.844a50.1 50.1 0 0 0 4.1-19.141l.4-25.778h249.61c67.616 1 67.616-100.956 0-100z", "fillRule": "evenodd"})
      ]
    );
  }
});
