import { DirectiveOptions, VNode } from "vue";
import { DirectiveBinding } from 'vue/types/options';

class BindObj {
    backgroundColor: string = "";
    color: string = "";
}

const colorDirective: DirectiveOptions = {
    bind(el: HTMLElement, binding: DirectiveBinding, vnode: VNode, oldVnode: VNode) {
        // console.log("自定义指令生命周期：bind");
    },

    inserted(element: HTMLElement, binding: DirectiveBinding) {
        /**
         * binding（即 DirectiveBinding 对象属性说明）：
         *      value: 指令的绑定值， 例如： v-my-directive="1 + 1", value 的值是 2。
         *      expression: 绑定值的表达式或变量名。 例如 v-my-directive="1 + 1" ， expression 的值是 "1 + 1"。
         *      arg: 传给指令的参数。例如 v-my-directive:foo， arg 的值是 "foo"。
         *      modifiers: 一个包含修饰符的对象。 例如： v-my-directive.foo.bar, 修饰符对象 modifiers 的值是 { foo: true, bar: true }。
         */
        
        // console.warn("DirectiveBinding 对象打印：", binding);

        if (binding.value) {
            element.style.backgroundColor = (binding.value as BindObj).backgroundColor;
            element.style.color = (binding.value as BindObj).color;
        }

        if (binding.modifiers.color) {
            element.style.color = binding.value;
        }

        if (binding.modifiers.backgroundColor) {
            element.style.backgroundColor = binding.value;
        }
    },

    update(el: HTMLElement, binding: DirectiveBinding, vnode: VNode, oldVnode: VNode) {
        // console.log("自定义指令生命周期：update");
    },
    componentUpdated(el: HTMLElement, binding: DirectiveBinding, vnode: VNode, oldVnode: VNode) {
        // console.log("自定义指令生命周期：componentUpdated");
    },
    unbind(el: HTMLElement, binding: DirectiveBinding, vnode: VNode, oldVnode: VNode) {
        // console.log("自定义指令生命周期：unbind");
    },
};

export default colorDirective;
