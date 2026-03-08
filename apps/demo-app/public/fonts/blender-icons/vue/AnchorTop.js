import { defineComponent, h } from 'vue';

export const AnchorTop = defineComponent({
  name: 'AnchorTop',
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
        h('path', {"d": "M150.391 400c-67.616-1-67.616 100.96 0 100h306.836c-18.417-31.08-32.709-64.51-42.188-100zm1035.352 0c-9.48 35.49-23.771 68.92-42.188 100h306.055c67.616 1 67.616-100.96 0-100zM150.391 700c-67.616-1-67.616 100.96 0 100H1449.61c67.616 1 67.616-100.96 0-100zm0 300c-67.616-1-67.616 100.96 0 100H1449.61c67.616 1 67.616-100.96 0-100zm0 300c-67.616-1-67.616 100.96 0 100H1449.61c67.616 1 67.616-100.96 0-100z", "fillRule": "evenodd"}),
        h('path', {"d": "M950.391 300a150 150 0 0 1-150 150 150 150 0 0 1-150-150 150 150 0 0 1 150-150 150 150 0 0 1 150 150", "fillRule": "evenodd"})
      ]
    );
  }
});
