import { defineComponent, h } from 'vue';

export const PmarkerSel = defineComponent({
  name: 'PmarkerSel',
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
        h('path', {"d": "M547.657 100.032c-18.907.9-35.69 12.383-43.36 29.688l-400 900c-8.4 18.909-4.28 41.038 10.352 55.664l400 400c19.526 19.518 51.177 19.518 70.703 0l400-400c14.634-14.626 18.75-36.755 10.352-55.664l-400-900c-8.36-18.859-27.441-30.65-48.047-29.688", "fillRule": "evenodd"})
      ]
    );
  }
});
