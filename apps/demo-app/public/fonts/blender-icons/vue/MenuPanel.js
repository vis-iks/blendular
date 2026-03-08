import { defineComponent, h } from 'vue';

export const MenuPanel = defineComponent({
  name: 'MenuPanel',
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
        h('path', {"d": "M300.009 300v800h400V300zm100 100h200v100h-200zm0 200h200v100h-200zm0 200h200v100h-200z", "fillRule": "evenodd"}),
        h('path', {"d": "M250.009 100c-82.235 0-150 67.765-150 150v900c0 82.235 67.765 150 150 150h1100c82.235 0 150-67.765 150-150V250c0-82.235-67.765-150-150-150zm-50 100h1200v1000h-1200z", "fillRule": "evenodd"})
      ]
    );
  }
});
