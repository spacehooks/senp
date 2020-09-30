const Reactor = (dataObj) => {
    let signals = {}
    
    const observe = (property, signalHandler) => {
        if (!signals.property) signals[property] = []
        signals[property].push(signalHandler)
    }

    const notify = (signal, newValue) => {
        if (!signals[signal] || signals[signal].length < 1) return

        signals[signal].forEach((signalHandler) => signalHandler())
    }
    const makeReactive = (obj, key) => {
        let val = obj[key]

        Object.defineProperty(obj, key, {
            get() {
                return val
            },
            set(newValue) {
                val = newValue
                notify(key)
            }
        })
    }

    const observeData = (obj) => {
        for (let key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                makeReactive(obj, key)
            }
        }
    }

    observeData(dataObj)

    return {
        data: dataObj,
        observe,
        notify
    }
}

