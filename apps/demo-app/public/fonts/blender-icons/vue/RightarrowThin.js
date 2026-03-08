import { defineComponent, h } from 'vue';

export const RightarrowThin = defineComponent({
  name: 'RightarrowThin',
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
        h('path', {"d": "M149.775 99.351a50.005 50.005 0 0 0-34.766 85.938l364.649 364.648-364.649 364.648a50.005 50.005 0 1 0 70.703 70.704l400-400a50.005 50.005 0 0 0 0-70.704l-400-400a50 50 0 0 0-35.937-15.234", "fillRule": "evenodd"})
      ]
    );
  }
});
