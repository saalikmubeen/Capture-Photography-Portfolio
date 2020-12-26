export const pageAnimation = {
    hidden: { opacity: 0, y: 300 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', when: "beforeChildren", staggerChildren: 0.3 } },
    exit: { opacity: 0, y: 300, transition: { duration: 0.5 } }
}


export const titleAnimation = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' } },
}

export const fadeAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.75, ease: 'easeOut' } }
}

export const ImageAnimation = {
    hidden: { opacity: 0, scale: 1.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
}

export const lineAnimation = {
    hidden: { opacity: 0, width: "0%" },
    visible: { opacity: 1, width: "100%", transition: { duration: 1, ease: 'easeOut' } }
}

export const colorAnimation = {
    hidden: { x: "-130%", skew: "45deg" },
    visible: { x: "100%", skew: "0deg", transition: { duration: 1, ease: 'easeOut' } }
}

export const colorAnimationContainer = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { duration: 1, ease: 'easeOut', staggerChildren: 0.1 } }
}

export const scrollAnimation = {
    hidden: { opacity: 0, scale: 1.3, transition: { duration: 0.5 } },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
}