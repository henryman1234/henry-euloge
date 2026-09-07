export function SlideUp (delay: number) {
    return {
        hidden: {
            opacity: 0,
            y:60
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay
            }
        }
        
    }
}

export function SliderBottom (delay: number) {
    return {
        hidden: {
            opacity: 0,
            y: -10
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 2,
                delay,
            }
        },
       
    }
}

export function SliderLeft (delay: number) {
    return {
        hidden: {
            opacity: 0,
            x: -20
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 2,
                delay
            }
        }
    }
}

export function SliderRight (delay: number) {
    return {
        hidden: {
            opacity: 0,
            x: 20
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 2,
                delay
            }
        }
    }
}