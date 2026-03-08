import { defineComponent, h } from 'vue';

export const Keyframe = defineComponent({
  name: 'Keyframe',
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
        h('path', {"d": "M549.852 100.152a50 50 0 0 0-34.766 14.65l-400 399.803a50.005 50.005 0 0 0 0 70.704l400 400a50.005 50.005 0 0 0 70.508 0l399.22-397.852a50.005 50.005 0 0 0 .2-70.703L585.794 114.801a50 50 0 0 0-35.938-14.649zm.4 120.9L878.963 551.91 550.438 879.254 221.141 549.957z", "fillRule": "evenodd"})
      ]
    );
  }
});
