import React from 'react'

const RememberMe = () => {
    return (
        <>
            <label for="formCheckbox" className="flex cursor-pointer">
                <div className="relative pt-0.5 flex items-center gap-2">
                    <input type="checkbox" id="formCheckbox" className='w-[1.3rem] h-[1.3rem]' />
                    <label htmlFor='formCheckbox' className='select-none cursor-pointer'>Remember me</label>

                </div>
            </label>
            <a href="#" className="text-sm text-primary hover:underline">Forget password?</a>
        </>
    )
}

export default RememberMe
