import { defineComponent, h } from 'vue';

export const HideOn = defineComponent({
  name: 'HideOn',
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
        h('path', {"d": "M148.81 501.53a50.005 50.005 0 0 0-33.203 84.375c132.39 143.817 308.24 415.82 634.57 415.82s502.376-272.003 634.766-415.82a50.037 50.037 0 1 0-73.633-67.773c-143.556 155.946-290.607 383.593-561.133 383.593-270.525 0-417.576-227.647-561.132-383.593a50 50 0 0 0-40.235-16.602", "fillRule": "evenodd"})
      ]
    );
  }
});
