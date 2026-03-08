import { defineComponent, h } from 'vue';

export const IndirectOnlyOff = defineComponent({
  name: 'IndirectOnlyOff',
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
        h('path', {"d": "M1151.044 99.983a50 50 0 0 0-23.633 5.27l-400 200a50.005 50.005 0 1 0 44.532 89.454l281.64-140.821-420.508 818.75-452.148-361.718a50.024 50.024 0 1 0-62.5 78.124l500 400a50.005 50.005 0 0 0 75.781-16.21l443.75-864.063 63.281 253.32a50.005 50.005 0 1 0 96.876-24.218l-100-400a50.005 50.005 0 0 0-47.071-37.888", "fillRule": "evenodd"})
      ]
    );
  }
});
