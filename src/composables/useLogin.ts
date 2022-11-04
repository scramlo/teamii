import { ref, type Ref } from "vue";
import { supabase } from '../supabase'

const useLogin = (email: Ref) => {
    const loading = ref(false);
    const errorMessage = ref();
    async function tryLoggingIn() {
        console.debug('email in useLogin', email);
        try {
            loading.value = true
            const { error } = await supabase.auth.signInWithOtp({
                email: email.value
            })
            if (error) throw error
            alert('Check your email for the login link!')
        } catch (error) {
            if (error instanceof Error) {
                errorMessage.value = error.message
            }
        } finally {
            loading.value = false
        }
    }
    return { loading, errorMessage, tryLoggingIn }
}

export default useLogin