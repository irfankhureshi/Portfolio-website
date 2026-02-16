import { useState } from "react"

const FormValidation = () => {
  const [formvalue, setFormValue] = useState({
    name: "",
    mobileno: "",
    email: "",
    password: ""
  })

  const [error, setError] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e) => {
    setFormValue({ ...formvalue, [e.target.name]: e.target.value })
    // Clear error when user starts typing
    if (error[e.target.name]) {
      setError({ ...error, [e.target.name]: "" })
    }
  }

  const validate = () => {
    const newErrors = {}

    if (!formvalue.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formvalue.mobileno.trim()) {
      newErrors.mobileno = "Mobile number is required"
    } else if (!/^\d{10}$/.test(formvalue.mobileno)) {
      newErrors.mobileno = "Mobile number must be 10 digits"
    }

    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formvalue.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!emailReg.test(formvalue.email)) {
      newErrors.email = "Invalid email format"
    }

    if (!formvalue.password.trim()) {
      newErrors.password = "Password is required"
    } else if (formvalue.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
    }

    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationError = validate()
    setError(validationError)

    if (Object.keys(validationError).length === 0) {
      setIsSubmitting(true)

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))

      setIsSubmitting(false)
      setIsSuccess(true)

      // Reset form after success
      setTimeout(() => {
        setIsSuccess(false)
        setFormValue({
          name: "",
          mobileno: "",
          email: "",
          password: ""
        })
      }, 3000)
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-rose-50 via-pink-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-linear-to-r from-rose-600 to-pink-600 p-6 text-white">
          <h2 className="text-3xl font-bold text-center mb-2">
            📝 Form Validation
          </h2>
          <p className="text-center text-rose-100">
            Please fill in your details
          </p>
        </div>

        {/* Success Message */}
        {isSuccess && (
          <div className="mx-6 mt-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-green-800 font-medium">Success!</p>
              <p className="text-green-600 text-sm">Form submitted successfully</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <input
                type="text"
                name="name"
                value={formvalue.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 transition-all duration-200 ${
                  error.name
                    ? 'border-red-300 focus:ring-red-500/20 focus:border-red-500'
                    : 'border-gray-200 focus:ring-rose-500/20 focus:border-rose-500'
                }`}
              />
            </div>
            {error.name && (
              <p className="text-red-500 text-sm mt-2 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {error.name}
              </p>
            )}
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Mobile Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <input
                type="tel"
                name="mobileno"
                value={formvalue.mobileno}
                onChange={handleChange}
                placeholder="Enter 10-digit mobile number"
                className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 transition-all duration-200 ${
                  error.mobileno
                    ? 'border-red-300 focus:ring-red-500/20 focus:border-red-500'
                    : 'border-gray-200 focus:ring-rose-500/20 focus:border-rose-500'
                }`}
              />
            </div>
            {error.mobileno && (
              <p className="text-red-500 text-sm mt-2 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {error.mobileno}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <input
                type="email"
                name="email"
                value={formvalue.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 transition-all duration-200 ${
                  error.email
                    ? 'border-red-300 focus:ring-red-500/20 focus:border-red-500'
                    : 'border-gray-200 focus:ring-rose-500/20 focus:border-rose-500'
                }`}
              />
            </div>
            {error.email && (
              <p className="text-red-500 text-sm mt-2 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {error.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input
                type="password"
                name="password"
                value={formvalue.password}
                onChange={handleChange}
                placeholder="Create a strong password"
                className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 transition-all duration-200 ${
                  error.password
                    ? 'border-red-300 focus:ring-red-500/20 focus:border-red-500'
                    : 'border-gray-200 focus:ring-rose-500/20 focus:border-rose-500'
                }`}
              />
            </div>
            {error.password && (
              <p className="text-red-500 text-sm mt-2 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {error.password}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-linear-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <span>Submit Form</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default FormValidation
