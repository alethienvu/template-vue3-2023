import { DefineComponent } from 'vue'
import { ElConfigProvider } from 'element-plus'
// error TS2614: Module '"element-plus"' has no exported member 'ElConfigProvider'. 
// Did you mean to use 'import ElConfigProvider from "element-plus"' instead?
export const ElConfigProvider: DefineComponent<{}, {}, ElConfigProvider>
