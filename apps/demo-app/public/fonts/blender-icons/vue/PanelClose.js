import { defineComponent, h } from 'vue';

export const PanelClose = defineComponent({
  name: 'PanelClose',
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
        h('path', {"d": "M886.354 114.682a50.005 50.005 0 0 1-1.036 70.642L570.642 500l314.676 314.676a50.005 50.005 0 1 1-70.642 70.642L500 570.642 185.324 885.318a50.005 50.005 0 1 1-70.642-70.642L429.358 500 114.682 185.324a50.005 50.005 0 1 1 70.642-70.642L500 429.358l314.676-314.676a50.005 50.005 0 0 1 71.678 0", "fillRule": "evenodd"})
      ]
    );
  }
});
