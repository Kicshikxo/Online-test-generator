export default async ({ $api, redirect }) => {
    const result = await $api('auth')

    if (result.success) {
        redirect('/dashboard')
    }
}