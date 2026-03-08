import { defineComponent, h } from 'vue';

export const AxisFront = defineComponent({
  name: 'AxisFront',
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
        h('path', {"d": "M951.659 99.3a50.005 50.005 0 0 1 49.219 50.782v891.016l468.555 187.5a50.05 50.05 0 1 1-37.11 92.968l-482.812-193.164-782.422 268.946a50.005 50.005 0 1 1-32.422-94.532l766.211-263.476V150.082a50.005 50.005 0 0 1 50.781-50.781", "fillRule": "evenodd"}),
        h('path', {"d": "M750.292 143.637c27.842-.32 50.585 22.156 50.586 50v688.476c.013 21.757-14.044 41.026-34.766 47.657l-600 192.968c-32.275 10.319-65.252-13.772-65.234-47.656V386.605c-.013-21.757 14.044-41.025 34.766-47.656l600-192.969a50 50 0 0 1 14.648-2.344z", "fillRule": "evenodd"})
      ]
    );
  }
});
