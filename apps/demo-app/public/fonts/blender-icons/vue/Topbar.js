import { defineComponent, h } from 'vue';

export const Topbar = defineComponent({
  name: 'Topbar',
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
        h('path', {"d": "M100 600v800c0 54.532 45.468 100 100 100h1200c54.532 0 100-45.468 100-100V600h-100v800H200V600z", "fillRule": "evenodd"}),
        h('path', {"d": "M200 100c-54.532 0-100 45.468-100 100v300h1400V200c0-54.532-45.468-100-100-100zm0 100h200v200H200z", "fillRule": "evenodd"})
      ]
    );
  }
});
