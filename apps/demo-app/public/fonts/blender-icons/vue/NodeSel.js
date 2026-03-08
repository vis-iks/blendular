import { defineComponent, h } from 'vue';

export const NodeSel = defineComponent({
  name: 'NodeSel',
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
        h('path', {"d": "M246.899 100c-80.504 0-146.875 66.371-146.875 146.875v1106.25c0 80.504 66.371 146.875 146.875 146.875h806.25c80.504 0 146.875-66.371 146.875-146.875v-58.203c-168.181-24.823-300-170.468-300-344.922s131.819-320.099 300-344.922V246.875c0-80.504-66.371-146.875-146.875-146.875zm-46.875 100h900v300h-900z", "fillRule": "evenodd"}),
        h('path', {"d": "M1250.024 1200c-137.479 0-250-112.521-250-250s112.521-250 250-250 250 112.521 250 250-112.521 250-250 250", "fillRule": "evenodd"})
      ]
    );
  }
});
