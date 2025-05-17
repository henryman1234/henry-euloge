export function SlideUp (delay) {
    return {
        hidden: {
            opacity: 0,
            y:100
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay
            }
        }
        
    }
}

export function SliderBottom (delay) {
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