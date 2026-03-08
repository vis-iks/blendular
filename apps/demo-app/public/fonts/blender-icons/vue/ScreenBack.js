import { defineComponent, h } from 'vue';

export const ScreenBack = defineComponent({
  name: 'ScreenBack',
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
        h('path', {"d": "M150 99.996c-27.613.003-49.997 22.387-50 50v1000c.003 27.613 22.387 49.997 50 50h550v200H450c-67.616-1-67.616 100.956 0 100h700c67.616 1 67.616-100.956 0-100H900v-200h550c27.613-.003 49.997-22.387 50-50v-1000c-.003-27.613-22.387-49.997-50-50zm50 100h1200v900H200z", "fillRule": "evenodd"}),
        h('path', {"d": "M649.743 300.305a50 50 0 0 0-34.375 15.039l-300 300a50.005 50.005 0 0 0 0 70.704l300 300a50.005 50.005 0 1 0 70.704-70.704L471.423 700.696h779.297a50.005 50.005 0 1 0 0-100H471.423l214.649-214.648a50.005 50.005 0 0 0-36.329-85.743", "fillRule": "evenodd"})
      ]
    );
  }
});
