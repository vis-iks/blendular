import { defineComponent, h } from 'vue';

export const Pmarker = defineComponent({
  name: 'Pmarker',
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
        h('path', {"d": "M547.657 100.032a50 50 0 0 0-43.36 29.688l-400 900a50.005 50.005 0 0 0 10.352 55.664l400 400a50.005 50.005 0 0 0 70.703 0l400-400a50.005 50.005 0 0 0 10.352-55.664l-400-900a50.005 50.005 0 0 0-48.047-29.688m2.34 173.047 340.43 765.821-340.43 340.429L209.568 1038.9z", "fillRule": "evenodd"})
      ]
    );
  }
});
