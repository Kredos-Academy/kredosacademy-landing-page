export default function TextInput({ name, placeholder, ...theirProps }) {
	return <input className='form-input mt-8 mx-8' name={name} placeholder={placeholder} {...theirProps} />;
}
