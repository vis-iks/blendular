import { defineComponent, h } from 'vue';

export const OutlinerObMesh = defineComponent({
  name: 'OutlinerObMesh',
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
        h('path', {"d": "M250 100.039A150.015 150.015 0 0 0 115.82 317.03l550 1100a150.015 150.015 0 0 0 268.36 0l550-1100A150.015 150.015 0 0 0 1350 100.039zm242.578 300h614.844L800 1014.687z", "fillRule": "evenodd"})
      ]
    );
  }
});
