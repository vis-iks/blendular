import { defineComponent, h } from 'vue';

export const Statusbar = defineComponent({
  name: 'Statusbar',
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
        h('path', {"d": "M1500.001 999.999v-800c0-54.532-45.468-100-100-100h-1200c-54.532 0-100 45.468-100 100v800h100v-800h1200v800z", "fillRule": "evenodd"}),
        h('path', {"d": "M1500.001 1099.999v300c0 54.532-45.468 100-100 100h-1200c-54.532 0-100-45.468-100-100v-300h1300zm-100 100h-200v200h200z", "fillRule": "evenodd"})
      ]
    );
  }
});
