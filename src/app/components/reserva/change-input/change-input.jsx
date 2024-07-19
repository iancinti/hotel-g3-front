"use client"
import './change-input.css';

function ChangeInput(
    { setValue, value, maxValue, colorText,
      padding = false, smallIcon = false,
      changePrice
    }
) {
    
    const styleIconButton = ( smallIcon ) ? { 'fontSize': '1em' } : {};
    const styleWidht = (padding) ? { padding: '16.5px 14px' } : { width: '20px' };

    function increment(){
        if (value < maxValue) {
            setValue(+value + 1);
            changePrice();
        }
    }
    function decrement(){
        if (value > 1) {
            setValue(+value - 1);
            changePrice();
        }
    }

    return (
        <div className='flex items-center gap-2'>
            <span
                style={{
                    color: colorText,
                    ...styleWidht
                }}>
                { value }
            </span>
            <div>
                <button className='block h-6' onClick={increment}>
                    <i style={styleIconButton}>▲</i>
                </button>
                <button onClick={decrement}>
                    <i style={styleIconButton}>▼</i>
                </button>
            </div>
        </div>
    );
}

export default ChangeInput;