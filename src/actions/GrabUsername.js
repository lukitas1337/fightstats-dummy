'use server';

export default async function grabUsername(formData) {
    console.log(formData.get('preferredUsername'));
}
