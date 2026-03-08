import { defineComponent, h } from 'vue';

export const File3D = defineComponent({
  name: 'File3D',
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
        h('path', {"d": "M724.685 99.802a50 50 0 0 0-21.289 4.687L128.005 375.387A50 50 0 0 0 99.49 420.7v729.297a50 50 0 0 0 27.539 44.726l600.195 300.196a50 50 0 0 0 44.727 0l600.195-300.196a50 50 0 0 0 27.539-44.726V458.396a50 50 0 0 0 0-18.164V420.7a50 50 0 0 0-28.711-45.312l-575-270.703a50 50 0 0 0-21.289-4.883zm11.133 100h27.734l500.977 235.937-514.844 250.977L234.841 435.74zM199.49 529.685 699.685 773.63v595.703L199.49 1119.138zm1100.195.195v589.258l-500 250V773.63z", "fillRule": "evenodd"})
      ]
    );
  }
});
