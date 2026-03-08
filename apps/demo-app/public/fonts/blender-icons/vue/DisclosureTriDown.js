import { defineComponent, h } from 'vue';

export const DisclosureTriDown = defineComponent({
  name: 'DisclosureTriDown',
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
        h('path', {"d": "M149.575 100c-36.727.029-60.893 38.318-45.117 71.484l200.147 499.853c18.125 37.923 72.109 37.923 90.234 0l200.147-499.853c15.776-33.166-8.39-71.455-45.117-71.484z", "fillRule": "evenodd"})
      ]
    );
  }
});
