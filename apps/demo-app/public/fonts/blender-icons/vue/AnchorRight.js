import { defineComponent, h } from 'vue';

export const AnchorRight = defineComponent({
  name: 'AnchorRight',
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
        h('path', {"d": "M1349.965 100c67.616-1 67.616 100.96 0 100H150.746c-67.616 1-67.616-100.96 0-100zM956.801 400c-18.417 31.08-32.709 64.51-42.188 100H150.746c-67.616 1-67.616-100.96 0-100zm-42.188 300c9.48 35.49 23.771 68.92 42.188 100H150.746c-67.616 1-67.616-100.96 0-100zm435.352 300c67.616-1 67.616 100.96 0 100H150.746c-67.616 1-67.616-100.96 0-100z", "fillRule": "evenodd"}),
        h('path', {"d": "M1149.965 600.02a150 150 0 0 1 150-150 150 150 0 0 1 150 150 150 150 0 0 1-150 150 150 150 0 0 1-150-150", "fillRule": "evenodd"})
      ]
    );
  }
});
