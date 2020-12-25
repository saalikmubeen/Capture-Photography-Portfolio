export const pageAnimation = {
    hidden: { opacity: 0, y: 300 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut', when: "beforeChildren", staggerChildren: 0.25 } },
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