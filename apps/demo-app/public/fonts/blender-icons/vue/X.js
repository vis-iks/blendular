import { defineComponent, h } from 'vue';

export const X = defineComponent({
  name: 'X',
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
        h('path', {"d": "M886.433 114.757a50.005 50.005 0 0 1-1.036 70.642L570.721 500.075l314.676 314.676a50.005 50.005 0 1 1-70.642 70.642L500.08 570.717 185.403 885.393a50.005 50.005 0 1 1-70.642-70.642l314.676-314.676L114.76 185.399a50.005 50.005 0 1 1 70.642-70.642l314.676 314.676 314.676-314.676a50.005 50.005 0 0 1 71.678 0", "fillRule": "evenodd"})
      ]
    );
  }
});
