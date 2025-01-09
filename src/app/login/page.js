import LoginWithGoogleButton from "../components/buttons/LoginWithGoogleButton";

export default function LoginPage() {
    return (
    <div>
        <div className="p-4 max-w-xs mx-auto">
            <h1 className='text-4xl font-bold text-center mb-2'>Sign In</h1>
            <p className='text-center text-gray-600 mb-6'>Sign in to your account using one of the methods below.</p>
            <LoginWithGoogleButton />
        </div>
    </div>
    )
}