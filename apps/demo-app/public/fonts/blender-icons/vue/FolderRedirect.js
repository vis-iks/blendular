import { defineComponent, h } from 'vue';

export const FolderRedirect = defineComponent({
  name: 'FolderRedirect',
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
        h('path', {"d": "M150 100c-27.613 0-49.997 22.39-50 50v1100c.003 27.61 22.387 50 50 50h250v-300c0-164.5 135.499-300 300-300h258.594L829.297 570.7a100.01 100.01 0 0 1 72.656-171.68 100 100 0 0 1 68.75 30.28l300 300a100.01 100.01 0 0 1 0 141.4l-300 300a100.01 100.01 0 1 1-141.406-141.4L958.594 900H700c-56.413 0-100 43.59-100 100v300h850c27.613 0 49.997-22.39 50-50V350c-.003-27.61-22.387-50-50-50H600V150c-.003-27.61-22.387-50-50-50z", "fillRule": "evenodd"})
      ]
    );
  }
});
