class WaloReactive {
    // Dependencies
    deeps =  new Map();
    constructor(options){
        // Origin
        this.origin = options.data();

        const self = this;

        // Destiny
        this.$data = new Proxy(this.origin,{
            get(target, name){
                // if (name in target){
                if (Reflect.has(target, name)){
                    self.track(target, name)
                    // return target[name]
                    return Reflect.get(target, name)
                }
                console.warn(`The property ${name}, is not defined`)
                return ""
            },
            set(target, name, value){
                Reflect.set(target, name, value)
                self.trigger(name)
            }
        })

    }

    track (target, name){
        if (!this.deeps.has(name)){
            const effect = ()=> {
                console.log(document.querySelectorAll(`*[w-text=${name}]`))
                document.querySelectorAll(`*[w-text=${name}]`).forEach(
                    el=> {
                        this.wText(el,target, name)
                    }
                )
                document.querySelectorAll(`*[w-model=${name}]`).forEach(
                    el=> {
                        this.wModel(el,target, name)
                    }
                )
                document.querySelectorAll("*[w-bind]").forEach(
                    el => {
                        const [attr, name] = el.getAttribute("w-bind").match(/(\w+)/g);
                        this.wBind(el, this.$data, name, attr)
                    }
                )
            }
            this.deeps.set(name, effect)
        }
    }
    
    trigger(name){
        const effect = this.deeps.get(name)
        effect()
    }

    mount(){
        document.querySelectorAll("*[w-text]").forEach(el => {
            this.wText(el, this.$data, el.getAttribute("w-text"))
        })
        document.querySelectorAll("*[w-model]").forEach(el => {
            const  name = el.getAttribute("w-model")
            this.wModel(el, this.$data,name )
            el.addEventListener('input', () => {
                // this.$data[name] = el.value
                Reflect.set(this.$data, name, el.value)
            })
        })
        document.querySelectorAll("*[w-bind]").forEach(el => {
            const [attr, name] = el.getAttribute("w-bind").match(/(\w+)/g);
            this.wBind(el, this.$data, name, attr)
        })
    }
    wText(el, target, name){
        // el.innerText = target[name]
        el.innerText = Reflect.get(target, name)
    }
    wModel(el, target, name){
        // el.value = target[name]
        el.value = Reflect.get(target, name)
    }
    wBind(el, target, name, attr) {
        console.log(el, target, name, attr)
        // el.setAttribute(attr, target[name])
        el.setAttribute(attr, Reflect.get(target, name))
    }
}

const Walo = {
    createApp(options) {
        return new WaloReactive(options)
    }
}