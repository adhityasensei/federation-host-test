
declare module '*.vue' {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
  }
  
  declare module "kitvue/*" {}
  declare module "@/components" {
    export const GDropdown: any;
    export const GTablePagination: any;
    export const GButton: any;
    export const GInputText: any;
    export const GDateRangePickerOption: any;
  }