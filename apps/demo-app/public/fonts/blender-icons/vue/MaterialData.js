import { defineComponent, h } from 'vue';

export const MaterialData = defineComponent({
  name: 'MaterialData',
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
        h('path', {"d": "M800 100.003c386.007 0 699.998 313.99 699.998 699.997S1186.007 1499.997 800 1499.997 100.003 1186.007 100.003 800 413.993 100.003 800 100.003m0 100c-330.578 0-597.58 265.85-599.802 595.895C311.348 890.262 500.465 999.999 800 999.999v399.999c331.962 0 599.998-268.036 599.998-599.998 0-1.45-.19-2.85-.2-4.3C1288.678 890.1 1099.7 1000 800 1000z", "fillRule": "evenodd"})
      ]
    );
  }
});
