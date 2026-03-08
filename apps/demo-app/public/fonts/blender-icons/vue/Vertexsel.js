import { defineComponent, h } from 'vue';

export const Vertexsel = defineComponent({
  name: 'Vertexsel',
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
        h('path', {"d": "M549.707 100.005a50 50 0 0 0-35.352 14.649L314.941 314.068c-49.086 47.125 23.578 119.79 70.703 70.703L570.41 200.005h829.297v829.297l-270.703 270.703H299.902l.461-300.655-100-.2-.656 350.85c.003 27.613 22.387 49.997 50 50h900a50 50 0 0 0 35.352-14.648l300-300a50 50 0 0 0 14.648-35.352V150c-.003-27.613-22.387-49.997-50-50z", "fillRule": "evenodd"}),
        h('path', {"d": "M150.293 499.419c-27.613.003-49.997 22.387-50 50v300c.003 27.613 22.387 49.997 50 50h300c27.613-.003 49.997-22.387 50-50v-300c-.003-27.613-22.387-49.997-50-50z", "fillRule": "evenodd"})
      ]
    );
  }
});
