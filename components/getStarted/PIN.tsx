import PinInput from 'react-pin-input';

const PIN = () => {
    return (
        <PinInput
            length={4}
            type="numeric"
            inputMode="number"
            style={{ padding: '20px', textAlign: 'center', fontSize: '2rem', }}
            inputStyle={{ borderColor: 'black', height: '4rem', borderRadius: '0.5rem', borderWidth: '1px', margin: '0.25em' }}
            inputFocusStyle={{ borderColor: '#2563eb', borderWidth: '3px' }}
            autoSelect={true}
            // onComplete={(value) => l(value)}
            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
        />
    )
}

export default PIN