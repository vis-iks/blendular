import { defineComponent, h } from 'vue';

export const IndirectOnlyOn = defineComponent({
  name: 'IndirectOnlyOn',
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
        h('path', {"d": "M1176.664 100.162a99.587 103.987 0 0 0-41.037 8.12L663.61 316.236a99.623 104.025 0 1 0 77.406 191.708l154.227-67.83-268.39 558.874L349.126 759.76a149.38 155.98 0 1 0-190.013 240.445l422.229 363.918a149.38 155.98 0 0 0 228.715-50.363l352.214-733.928 40.842 169.571a99.587 103.987 0 1 0 193.125-50.77l-125.444-519.881a99.587 103.987 0 0 0-94.131-78.59", "fillRule": "evenodd"})
      ]
    );
  }
});
