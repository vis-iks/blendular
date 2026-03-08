import { defineComponent, h } from 'vue';

export const Collapsemenu = defineComponent({
  name: 'Collapsemenu',
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
        h('path', {"d": "M154.65 98.91c-65.73 1-65.73 99.07 0 100h1095.009c65.73-1 65.73-99.07 0-100zm0 401.02c-65.73 1-65.73 99.07 0 100h1095.009c65.73-1 65.73-99.07 0-100zm0 397.9c-65.73 1-65.73 99 0 100h1095.009c65.73-1 65.73-99 0-100z", "fillRule": "evenodd"})
      ]
    );
  }
});
