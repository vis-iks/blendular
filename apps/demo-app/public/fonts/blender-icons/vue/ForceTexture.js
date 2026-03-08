import { defineComponent, h } from 'vue';

export const ForceTexture = defineComponent({
  name: 'ForceTexture',
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
        h('path', {"d": "M1499.804 100v200h-200V100zm-200 200v200h-200V300zm-200 0h-200V100h200zm-200 0v200h-200V300zm-200 0h-200V100h200zm600 800V900h200v200zm0-200h-200V700h200zm0-200V500h200v200zm-200 0h-200V500h200zm-200 0v200h-200V700zm-200 0h-200V500h200zm200 200h200v200h-200z", "fillRule": "evenodd"}),
        h('path', {"d": "M399.999 900.391c165.006 0 299.805 134.799 299.805 299.804 0 165.006-134.799 299.805-299.805 299.805-165.005 0-299.804-134.799-299.804-299.805 0-165.005 134.799-299.804 299.804-299.804", "fillRule": "evenodd"})
      ]
    );
  }
});
