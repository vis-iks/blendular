import { defineComponent, h } from 'vue';

export const BoneData = defineComponent({
  name: 'BoneData',
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
        h('path', {"d": "M550.391 100c-82.415 0-150 67.974-150 150v150h-150c-82.026 0-150 67.584-150 150s67.974 150 150 150h100c42.622 0 76.643-21.374 103.516-50.195l496.289 496.484c-29.084 26.86-50.586 60.87-50.586 103.711v100c0 82.025 67.584 150 150 150s150-67.974 150-150v-150h150c82.026 0 150-67.584 150-150s-67.974-150-150-150h-100c-42.622 0-76.642 21.375-103.516 50.195L649.805 453.711c29.085-26.86 50.586-60.869 50.586-103.711V250c0-82.026-67.584-150-150-150", "fillRule": "evenodd"})
      ]
    );
  }
});
