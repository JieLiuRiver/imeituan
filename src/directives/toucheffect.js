const context = '@@toucheffectContext';
export default {
    bind(el, binding) {
    	const starthandler = e => {
            if(e.target !== el) return
    		el[context].stopPropagationFlag ? e.stopPropagation() : null
    		// e.preventDefault();
    		e.target.style.backgroundColor = 'rgba(0,0,0,.04)'
    	}
    	const endhandler = e => {
            if(e.target !== el) return
    		el[context].stopPropagationFlag ? e.stopPropagation() : null
    		// e.preventDefault();
    		e.target.style.backgroundColor = '#fff'
    	}
    	el[context] = {
    		stopPropagationFlag: typeof binding.value.stopPropagation == 'undefined' ? true : binding.value.stopPropagation,
    		eventstart: 'touchstart',
    		eventend: 'touchend',
    		starthandler,
    		endhandler
    	}
    	el.addEventListener(el[context].eventstart, starthandler)
    	el.addEventListener(el[context].eventend, endhandler)
    },
    unbind(el) {
        el.removeEventListener(el[context].eventstart, el[context].starthandler)
        el.removeEventListener(el[context].eventend, el[context].endhandler)
        delete el[context]
    },
    install(Vue) {
        Vue.directives('touchaction', {
            bind: this.bind,
            unbind: this.unbind
        })
    }
}