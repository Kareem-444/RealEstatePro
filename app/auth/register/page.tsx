"use client"


import Link from "next/link";
import { UserPlus, Mail, Lock, Eye, EyeOff, Phone, Home, Briefcase } from "lucide-react";
import { useState } from "react";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-green-900 to-emerald-800 flex items-center justify-center p-4 relative overflow-hidden dark:bg-gradient-to-br dark:from-emerald-950 dark:via-green-900 dark:to-emerald-800">
      {/* Animated Background Elements - Green Theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-700/30 to-emerald-900/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-teal-700/20 to-green-900/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-lime-700/10 to-emerald-700/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M50 50c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zM10 10c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm60 60c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </div>
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side - Brand/Info */}
        <div className="hidden lg:block text-emerald-50 space-y-10 px-12">
          <div className="space-y-8">
            {/* Logo & Slogan */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-700 to-green-900 rounded-2xl flex items-center justify-center shadow-2xl -rotate-6">
                <UserPlus className="w-9 h-9 text-white" />
              </div>
              <p className="text-emerald-200 font-medium">Join the Premier Real Estate Platform</p>
            </div>
            {/* Headline */}
            <div className="space-y-6">
              <h2 className="text-5xl font-black leading-tight text-white">
                Create Your
                <span className="block bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
                  EstateHub Account
                </span>
              </h2>
              <p className="text-xl text-emerald-100 leading-relaxed font-medium">
                Unlock powerful tools for managing properties, analyzing markets, and growing your real estate business.
              </p>
            </div>
            {/* Features */}
            <div className="space-y-4">
              {[{
                icon: <Home className="w-6 h-6 text-emerald-300" />, title: "No Setup Fees", desc: "No hidden charges, pay as you grow", gradient: "from-green-600 to-emerald-600"
              }, {
                icon: <Briefcase className="w-6 h-6 text-emerald-300" />, title: "Professional Tools", desc: "Grade-A software for agents & investors", gradient: "from-lime-500 to-green-500"
              }, {
                icon: <Mail className="w-6 h-6 text-emerald-300" />, title: "Real-time Updates", desc: "Get instant market insights & alerts", gradient: "from-teal-500 to-cyan-500"
              }].map((feature, idx) => (
                <div key={idx} className="group">
                  <div className="flex items-center gap-5 p-6 bg-emerald-900/60 backdrop-blur-sm rounded-2xl border border-emerald-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-emerald-900/80">
                    <div>{feature.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white text-lg group-hover:text-emerald-300 transition-colors">{feature.title}</h3>
                      <p className="text-emerald-200 font-medium">{feature.desc}</p>
                    </div>
                    <div className={`w-2 h-12 bg-gradient-to-b ${feature.gradient} rounded-full opacity-60 group-hover:opacity-100 transition-opacity`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Right Side - Registration Form */}
        <div className="w-full max-w-md mx-auto">
          <div className="bg-emerald-950/90 dark:bg-emerald-950/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-emerald-800 overflow-hidden">
            {/* Form Header */}
            <div className="bg-gradient-to-br from-emerald-900 via-green-900 to-emerald-800 p-8 text-white text-center relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20">
                  <UserPlus className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-black mb-3">Create Account</h2>
                <p className="text-white/80 font-medium">Start your real estate journey today</p>
              </div>
            </div>
            {/* Form Body */}
            <form className="p-8 space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-bold text-emerald-100 uppercase tracking-wider">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 border-2 border-emerald-800 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200 transition-all duration-200 outline-none text-emerald-900 dark:text-emerald-100 placeholder-emerald-400 bg-emerald-900/40 dark:bg-emerald-900/40 backdrop-blur-sm hover:bg-emerald-900/60"
                    placeholder="John"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-bold text-emerald-100 uppercase tracking-wider">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 border-2 border-emerald-800 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200 transition-all duration-200 outline-none text-emerald-900 dark:text-emerald-100 placeholder-emerald-400 bg-emerald-900/40 dark:bg-emerald-900/40 backdrop-blur-sm hover:bg-emerald-900/60"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              {/* Email Field */}
              <div className="space-y-3">
                <label htmlFor="email" className="block text-sm font-bold text-emerald-100 uppercase tracking-wider">
                  Email Address
                </label>
                <div className="relative group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-4 pl-12 pr-4 border-2 border-emerald-800 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200 transition-all duration-300 outline-none text-emerald-900 dark:text-emerald-100 placeholder-emerald-400 bg-emerald-900/40 dark:bg-emerald-900/40 backdrop-blur-sm hover:bg-emerald-900/60 group-hover:border-emerald-600"
                    placeholder="john.doe@example.com"
                    required
                  />
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-400 group-focus-within:text-emerald-500 transition-colors" />
                </div>
              </div>
              {/* Phone Field */}
              <div className="space-y-3">
                <label htmlFor="phone" className="block text-sm font-bold text-emerald-100 uppercase tracking-wider">
                  Phone Number
                </label>
                <div className="relative group">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-4 pl-12 pr-4 border-2 border-emerald-800 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200 transition-all duration-300 outline-none text-emerald-900 dark:text-emerald-100 placeholder-emerald-400 bg-emerald-900/40 dark:bg-emerald-900/40 backdrop-blur-sm hover:bg-emerald-900/60 group-hover:border-emerald-600"
                    placeholder="(555) 123-4567"
                    required
                  />
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-400 group-focus-within:text-emerald-500 transition-colors" />
                </div>
              </div>
              {/* Password Fields */}
              <div className="space-y-4">
                <div className="space-y-3">
                  <label htmlFor="password" className="block text-sm font-bold text-emerald-100 uppercase tracking-wider">
                    Password
                  </label>
                  <div className="relative group">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      className="w-full px-4 py-4 pl-12 pr-12 border-2 border-emerald-800 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200 transition-all duration-300 outline-none text-emerald-900 dark:text-emerald-100 placeholder-emerald-400 bg-emerald-900/40 dark:bg-emerald-900/40 backdrop-blur-sm hover:bg-emerald-900/60 group-hover:border-emerald-600"
                      placeholder="Create a strong password"
                      required
                    />
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-400 group-focus-within:text-emerald-500 transition-colors" />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-400 hover:text-emerald-200 transition-colors duration-200 p-1"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
                <div className="space-y-3">
                  <label htmlFor="confirmPassword" className="block text-sm font-bold text-emerald-100 uppercase tracking-wider">
                    Confirm Password
                  </label>
                  <div className="relative group">
                    <input
                      type={showConfirm ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      className="w-full px-4 py-4 pl-12 pr-12 border-2 border-emerald-800 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200 transition-all duration-300 outline-none text-emerald-900 dark:text-emerald-100 placeholder-emerald-400 bg-emerald-900/40 dark:bg-emerald-900/40 backdrop-blur-sm hover:bg-emerald-900/60 group-hover:border-emerald-600"
                      placeholder="Confirm your password"
                      required
                    />
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-400 group-focus-within:text-emerald-500 transition-colors" />
                    <button
                      type="button"
                      onClick={() => setShowConfirm(!showConfirm)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-400 hover:text-emerald-200 transition-colors duration-200 p-1"
                    >
                      {showConfirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </div>
              {/* Terms and Conditions */}
              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    className="w-4 h-4 text-emerald-600 bg-emerald-900 border-emerald-800 rounded focus:ring-emerald-500 focus:ring-2 mt-1"
                    required
                  />
                  <span className="text-sm text-emerald-200 leading-relaxed">
                    I agree to the{' '}
                    <a href="/terms" className="text-emerald-400 hover:text-emerald-200 font-medium transition-colors duration-200">Terms of Service</a>{' '}
                    and{' '}
                    <a href="/privacy" className="text-emerald-400 hover:text-emerald-200 font-medium transition-colors duration-200">Privacy Policy</a>
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="newsletter"
                    className="w-4 h-4 text-emerald-600 bg-emerald-900 border-emerald-800 rounded focus:ring-emerald-500 focus:ring-2 mt-1"
                  />
                  <span className="text-sm text-emerald-200 leading-relaxed">
                    Send me updates about new features and market insights
                  </span>
                </label>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-700 via-green-800 to-emerald-900 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-emerald-800 hover:via-green-900 hover:to-emerald-950 focus:ring-4 focus:ring-emerald-300 transform hover:scale-105 active:scale-95 transition-all duration-200 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden group"
              >
                <span className="flex items-center justify-center gap-2"><UserPlus className="w-5 h-5" />Create My Account</span>
              </button>
              {/* Divider */}
              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-emerald-800" />
                </div>
                <div className="relative flex justify-center">
                  <span className="px-4 bg-emerald-950 text-emerald-300 font-medium">Or sign up with</span>
                </div>
              </div>
              {/* Social Registration */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  className="flex items-center justify-center gap-3 px-4 py-3 bg-emerald-900 border-2 border-emerald-800 rounded-xl hover:bg-emerald-800 hover:border-emerald-700 transition-all duration-200 font-medium group shadow-sm hover:shadow-md"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  <span className="text-emerald-100 font-semibold">Google</span>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-3 px-4 py-3 bg-emerald-900 border-2 border-emerald-800 rounded-xl hover:bg-emerald-800 hover:border-emerald-700 transition-all duration-200 font-medium group shadow-sm hover:shadow-md"
                >
                  <svg className="w-5 h-5 text-emerald-200 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-emerald-100 font-semibold">GitHub</span>
                </button>
              </div>
              {/* Sign In Link */}
              <div className="text-center pt-6 border-t border-emerald-800">
                <p className="text-emerald-200 font-medium">
                  Already have an account?{' '}
                  <Link href="/auth/login" className="text-emerald-400 hover:text-emerald-200 font-bold transition-colors duration-200 hover:underline flex items-center gap-1">
                    <UserPlus className="w-4 h-4 inline" />Sign in here
                  </Link>
                </p>
              </div>
            </form>
          </div>
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mt-8">
            <div className="flex items-center justify-center gap-4">
              <UserPlus className="w-8 h-8 text-emerald-400" />
              <span className="text-emerald-200 font-medium">EstateHub</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}