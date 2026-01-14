import { scale } from '../data/models/char/utils';
export const Typography = {
    size: {
        xs: scale(8),
        sm: scale(12),
        md: scale(16),
        lg: scale(20),
        xl: scale(24),
        xxl: scale(32)
    },
    lineHeight: {
        sm: scale(18),
        md: scale(24),
        lg: scale(30),
        xl: scale(36)
    },
    letterSpacing: {
        body: 0.25,
        title: 1.5
    }
    
} as const