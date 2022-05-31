export class EventEmitter {
    private events: Record<string,Function[]>;

    public constructor() {
        this.events = null;
    }

    public emit(name:string,...args){
        const funcList = this.events[name];
        if(funcList){
            funcList.forEach(func=>func.apply(this,args))
            return true;
        }
        return false
    }

    public on(name:string,func:Function){
        if(typeof func !=='function'){
            throw new TypeError("The evet-triggered callback must be a function");
        }

        if(this.events[name]){
            this.events[name].push(func);
            return;
        }
        this.events[name] = [func];
    }

    public once(name:string,func:Function){
        const onceFuc = (...args)=>{
            func.apply(this,args);
            if (!this.events[name]){
                return;
            }
            const index = this.events[name].indexOf(onceFuc);
            if(index === -1){
                return;
            }
            this.events[name].splice(index,1);
        }

       this.on(name,onceFuc)
    }


    public removeEventListeners(evt?: string){
        if(evt){
            if(this.events[evt]){
                this.events[evt] = [];
            }
        }else {
            this.events = null;
        }
    }
}

