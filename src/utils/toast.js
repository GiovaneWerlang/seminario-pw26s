import { toast } from '@zerodevx/svelte-toast'

export const success = m => toast.push(m, {
    theme: {
        '--toastColor': '#1ea97c',
        '--toastBackground': '#e4f8f0',
        '--toastBarBackground': '#1ea97c'
    }
})

export const warning = m => toast.push(m, { 
    theme: {
        '--toastColor': '#cc8925',
        '--toastBackground': '#fff2e2',
        '--toastBarBackground': '#cc8925'
    }
})

export const failure = m => toast.push(m, { 
    theme: {
        '--toastColor': '#ff5757',
        '--toastBackground': '#ffe7e6',
        '--toastBarBackground': '#ff5757'
    }
})