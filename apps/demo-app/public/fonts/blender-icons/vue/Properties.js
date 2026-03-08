import { defineComponent, h } from 'vue';

export const Properties = defineComponent({
  name: 'Properties',
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
        h('path', {"d": "M350 100c-138.19 0-250 111.81-250 250v100c0 138.18 111.8 250 250 250h900c138.2 0 250-111.82 250-250V350c0-138.57-113.452-248.443-251.172-248.633zm350 100.586 548.633.8c86.28 0 151.367 63.203 151.367 148.633v100c0 85.78-64.2 150-150 150H700zM350 900c-138.19 0-250 111.81-250 250v100c0 138.18 111.8 250 250 250h900c138.2 0 250-111.82 250-250v-100c0-138.57-113.452-248.443-251.172-248.633zm650.977 100.977 247.656.4c86.28 0 151.367 63.203 151.367 148.633v100c0 85.78-64.2 150-150 150h-250z", "fillRule": "evenodd"})
      ]
    );
  }
});
