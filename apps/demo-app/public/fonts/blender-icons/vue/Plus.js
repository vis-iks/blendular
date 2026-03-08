import { defineComponent, h } from 'vue';

export const Plus = defineComponent({
  name: 'Plus',
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
        h('path', {"d": "M649.579 99.281a550 550 0 0 0-550 550 550 550 0 0 0 550 550 550 550 0 0 0 550-550 550 550 0 0 0-550-550m-.2 198.438a50.005 50.005 0 0 1 50.781 52.343v250h250.195a50.005 50.005 0 1 1 0 99.805H700.16v250.195a50.005 50.005 0 0 1-50.586 50.586 50.005 50.005 0 0 1-49.219-50.586V699.867h-250a50.005 50.005 0 1 1 0-99.805h250v-250a50.005 50.005 0 0 1 49.024-52.343", "fillRule": "evenodd"})
      ]
    );
  }
});
