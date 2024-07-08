import { cn } from '@/lib/utils'
import { motion, useScroll, useSpring } from 'framer-motion'

interface ScrollProgressBarProps {
    className?: string
}

export function ScrollProgressBar({
    className,
}: ScrollProgressBarProps) {
    const { scrollYProgress } = useScroll()

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 50,
        restDelta: 0.001,
    })

    return (
        <motion.div
            className={cn('fixed left-0 right-0 top-0 h-1 origin-left bg-gradient-to-r from-[#87c5ff] via-[#8ca4f3] to-[#A97CF8] z-[1000]', className)}
            style={{
                scaleX,
            }}
        />
    )
}
