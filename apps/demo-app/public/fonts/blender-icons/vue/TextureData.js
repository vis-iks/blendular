import { defineComponent, h } from 'vue';

export const TextureData = defineComponent({
  name: 'TextureData',
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
        h('path', {"d": "M200 200v300h300V200zm300 300v300h300V500zm300 0h300V200H800zm300 0v300h300V500zm0 300H800v300h300zm0 300v300h300v-300zm-300 0H500v300h300zm-300 0V800H200v300z", "fillRule": "evenodd"}),
        h('path', {"d": "M150 100a50.005 50.005 0 0 0-50 50v1300a50.005 50.005 0 0 0 50 50h1300a50.005 50.005 0 0 0 50-50V150a50.005 50.005 0 0 0-50-50zm50 100h1200v1200H200z", "fillRule": "evenodd"})
      ]
    );
  }
});
