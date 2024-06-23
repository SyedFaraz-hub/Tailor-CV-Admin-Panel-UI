import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { InputType } from '../../../utils/Types'
import { useState } from 'react'

const LoginInput = ({ placeholder, type, passwordInput }: InputType) => {
  const [passwordType, setPasswordType] = useState('password')
  return (
    <>
      <div className="relative">
        <input
          type={type === 'password' ? passwordType : type}
          placeholder={placeholder}
          className="bg-primary mb-6 max-sm:w-72 w-96 p-2 pl-3 text-textColor rounded-inputBorderRadius outline-none"
        />
        {passwordInput ? (
          <>
            {passwordType === 'password' ? (
              <FaEye
                className="text-textColor absolute right-6 top-3 cursor-pointer"
                onClick={() => setPasswordType('text')}
              />
            ) : (
              <>
                <FaEyeSlash
                  className="text-textColor absolute right-6 top-3 cursor-pointer"
                  onClick={() => setPasswordType('password')}
                />
              </>
            )}
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  )
}

export default LoginInput
