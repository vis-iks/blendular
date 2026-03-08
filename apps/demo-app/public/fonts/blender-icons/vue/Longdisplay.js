import { defineComponent, h } from 'vue';

export const Longdisplay = defineComponent({
  name: 'Longdisplay',
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
        h('path', {"d": "M150.782 100c-27.614.003-49.998 22.387-50 50v1200c.002 27.613 22.386 49.997 50 50h298.437c27.613-.003 49.997-22.387 50-50V150c-.003-27.613-22.387-49.997-50-50zm50 100h198.437v200H200.782zm0 300h198.437v200H200.782zm0 300h198.437v200H200.782zm0 300h198.437v200H200.782zm1198.437-300h100v100h-100zm-200 0h100v100h-100zm-200 0h100v100h-100zm-200 0h100v100h-100zm-200 0h100v100h-100zm800-300h100v100h-100zm-200 0h100v100h-100zm-200 0h100v100h-100zm-200 0h100v100h-100zm-200 0h100v100h-100zm800-300h100v100h-100zm-200 0h100v100h-100zm-200 0h100v100h-100zm-200 0h100v100h-100zm-200 0h100v100h-100z", "fillRule": "evenodd"})
      ]
    );
  }
});
