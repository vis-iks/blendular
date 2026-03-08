import { defineComponent, h } from 'vue';

export const RestrictSelectOn = defineComponent({
  name: 'RestrictSelectOn',
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
        h('path', {"d": "M148.063 99.882a50.005 50.005 0 0 0-45.507 68.555l400 1000.195a50.05 50.05 0 1 0 92.968-37.109l-356.64-891.797 891.601 356.64a50.005 50.005 0 1 0 37.11-92.773l-1000-400.195a50 50 0 0 0-19.532-3.516", "fillRule": "evenodd"})
      ]
    );
  }
});
