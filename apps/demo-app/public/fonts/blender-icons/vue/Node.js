import { defineComponent, h } from 'vue';

export const Node = defineComponent({
  name: 'Node',
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
        h('path', {"d": "M300.024 100c-109.935 0-200 90.065-200 200v1000c0 109.935 90.065 200 200 200h700c109.935 0 200-90.065 200-200v-50c1-67.616-100.956-67.616-100 0v50c0 56.265-43.735 100-100 100h-700c-56.265 0-100-43.735-100-100V500h1000V300c0-109.935-90.065-200-200-200z", "fillRule": "evenodd"}),
        h('path', {"d": "M1250.024 1100c-137.479 0-250-112.521-250-250s112.521-250 250-250 250 112.521 250 250-112.521 250-250 250", "fillRule": "evenodd"})
      ]
    );
  }
});
