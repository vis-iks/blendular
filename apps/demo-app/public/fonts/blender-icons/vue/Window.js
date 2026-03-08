import { defineComponent, h } from 'vue';

export const Window = defineComponent({
  name: 'Window',
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
        h('path', {"d": "M200 400c-54.532 0-100 45.468-100 100v900c0 54.532 45.468 100 100 100h1000c54.532 0 100-45.468 100-100v-100h-100v100H200V500z", "fillRule": "evenodd"}),
        h('path', {"d": "M400 100c-54.532 0-100 45.468-100 100v900c0 54.532 45.468 100 100 100h1000c54.532 0 100-45.468 100-100V200c0-54.532-45.468-100-100-100zm0 100h200v200H400zm0 300h1000v600H400z", "fillRule": "evenodd"})
      ]
    );
  }
});
