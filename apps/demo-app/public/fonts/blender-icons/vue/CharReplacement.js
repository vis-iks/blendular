import { defineComponent, h } from 'vue';

export const CharReplacement = defineComponent({
  name: 'CharReplacement',
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
        h('path', {"d": "M1203.235 988.477 653.42 1538.733 103.603 988.477 653.42 438.22zM849.413 849.294q0-74.446-54.982-123.97t-133.896-49.523q-95.086 0-165.592 29.131L483.3 820.81q53.688-34.31 118.372-34.31 48.513 0 80.208 26.542 31.696 26.542 31.696 69.915 0 47.258-54.658 119.438t-54.659 147.274h98.32q0-34.957 38.164-82.215 64.685-80.272 70.506-89.982 38.164-60.852 38.164-128.178m-120.96 506.883v-135.945H578.386v135.945z", "fillRule": "evenodd"})
      ]
    );
  }
});
