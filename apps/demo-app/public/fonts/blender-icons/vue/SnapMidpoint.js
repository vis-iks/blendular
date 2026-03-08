import { defineComponent, h } from 'vue';

export const SnapMidpoint = defineComponent({
  name: 'SnapMidpoint',
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
        h('path', {"d": "M1443.038 100.246a55 55 0 0 0-37.891 16.602l-344.336 344.53a55.006 55.006 0 1 0 77.734 77.735l344.532-344.336a55.006 55.006 0 0 0-40.04-94.531m-944.532 944.531a55 55 0 0 0-37.695 16.602L116.28 1405.715a55.104 55.104 0 1 0 77.93 77.929l344.335-344.531a55.006 55.006 0 0 0-40.039-94.336", "fillRule": "evenodd"}),
        h('path', {"d": "M649.678 600.246c-27.613.003-49.997 22.387-50 50v300c.003 27.613 22.387 49.997 50 50h300c27.613-.003 49.997-22.387 50-50v-300c-.003-27.613-22.387-49.997-50-50z", "fillRule": "evenodd"})
      ]
    );
  }
});
