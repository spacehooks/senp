exports.Trigger = (dataObj) => {
    let signals = {}

    const observe = (property, signalHandler) => {
        if (!signals.property) signals[property] = []
        signals[property].push(signalHandler)
    }

    const notify = (signal) => {
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
            },
            push(newValue) {
                if (!isArray(val)) {
                    throw new Error('Object is not an array.')
                }

                Array.prototype.push(val, newValue)
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

exports.WatchNode = (node, obj, property) => {
    node.textContent = obj.data[property]

    obj.observe(property, value => node.textContent = obj.data[property] || '')
}

exports.isArray =  value => {
    return Object.prototype.toString.call(val) === '[object Array]'
}