import { defineComponent, h } from 'vue';

export const SortAsc = defineComponent({
  name: 'SortAsc',
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
        h('path', {"d": "M449.219 99.715c-27.538.431-49.542 23.047-49.219 50.586v979.297L186.998 916.596c-47.125-49.08-119.784 23.578-70.703 70.703l298.353 298.353c19.527 19.519 51.177 19.519 70.704 0L783.705 985.09c49.08-47.125-23.578-119.784-70.703-70.703L500 1129.598V150.3c.33-28.15-22.632-51.025-50.781-50.586", "fillRule": "evenodd"})
      ]
    );
  }
});
