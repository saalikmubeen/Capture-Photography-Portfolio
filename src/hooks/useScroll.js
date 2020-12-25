import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';


const useScroll = () => {
    const [element, view] = useInView({ threshold: 0.35 });
    const controls = useAnimation();

    view ? controls.start('visible') : controls.start('hidden');

    return [element, controls];
}

export default useScroll;