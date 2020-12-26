import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';


const useScroll = (threshold = 0.35) => {
    const [element, view] = useInView({ threshold: threshold });
    const controls = useAnimation();

    view ? controls.start('visible') : controls.start('hidden');

    return [element, controls];
}

export default useScroll;