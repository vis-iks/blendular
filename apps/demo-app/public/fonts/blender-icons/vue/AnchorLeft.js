import { defineComponent, h } from 'vue';

export const AnchorLeft = defineComponent({
  name: 'AnchorLeft',
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
        h('path', {"d": "M250.035 100c-67.616-1-67.616 100.96 0 100h1199.219c67.616 1 67.616-100.96 0-100zm393.164 300c18.417 31.08 32.709 64.51 42.188 100h763.867c67.616 1 67.616-100.96 0-100zm42.188 300c-9.48 35.49-23.771 68.92-42.188 100h806.055c67.616 1 67.616-100.96 0-100zm-435.352 300c-67.616-1-67.616 100.96 0 100h1199.219c67.616 1 67.616-100.96 0-100z", "fillRule": "evenodd"}),
        h('path', {"d": "M450.035 600.02a150 150 0 0 0-150-150 150 150 0 0 0-150 150 150 150 0 0 0 150 150 150 150 0 0 0 150-150", "fillRule": "evenodd"})
      ]
    );
  }
});
