import { defineComponent, h } from 'vue';

export const Shortdisplay = defineComponent({
  name: 'Shortdisplay',
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
        h('path', {"d": "M1399.219 500h100v100h-100zm0-300h100v100h-100zm-800 300h100v100h-100zm0 300h100v100h-100zm0-600h100v100h-100zM950.781 100c-27.613.003-49.997 22.387-50 50v600c.003 27.613 22.387 49.997 50 50h298.438c27.613-.003 49.997-22.387 50-50V150c-.003-27.613-22.387-49.997-50-50zm50 100h198.438v200H1000.78zm0 300h198.438v200H1000.78zm-850-400c-27.613.003-49.997 22.387-50 50v1200c.003 27.613 22.387 49.997 50 50H449.22c27.613-.003 49.997-22.387 50-50V150c-.003-27.613-22.387-49.997-50-50zm50 100H399.22v200H200.78zm0 300H399.22v200H200.78zm0 300H399.22v200H200.78zm0 300H399.22v200H200.78z", "fillRule": "evenodd"})
      ]
    );
  }
});
