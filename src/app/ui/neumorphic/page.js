"use client"

import { useState } from "react"
import { Eye, EyeOff, User, Lock, Mail, ArrowRight, Github, Facebook, Fingerprint } from "lucide-react"
import Link from "next/link"

export default function NeumorphicLogin() {
    const [showPassword, setShowPassword] = useState(false)
    const [isLogin, setIsLogin] = useState(true)
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
        confirmPassword: ""
    })

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="mb-4">
                        <Link href="/" className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-lg text-gray-700 hover:bg-white/80 transition-all duration-200 shadow-lg">
                            ← Back to Showcase
                        </Link>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        Neumorphic Design
                    </h1>
                    <p className="text-gray-600">
                        Soft UI authentication form
                    </p>
                </div>

                {/* Main Card */}
                <div className="neomorphic-card p-8">
                    {/* Toggle Buttons */}
                    <div className="neomorphic-toggle mb-8">
                        <button
                            onClick={() => setIsLogin(true)}
                            className={`toggle-btn ${isLogin ? 'active' : ''}`}
                        >
                            Login
                        </button>
                        <button
                            onClick={() => setIsLogin(false)}
                            className={`toggle-btn ${!isLogin ? 'active' : ''}`}
                        >
                            Sign Up
                        </button>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {!isLogin && (
                            <div className="neomorphic-input-container">
                                <User className="input-icon" />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="neomorphic-input"
                                />
                            </div>
                        )}

                        <div className="neomorphic-input-container">
                            <Mail className="input-icon" />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="neomorphic-input"
                                required
                            />
                        </div>

                        <div className="neomorphic-input-container">
                            <Lock className="input-icon" />
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="neomorphic-input"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="password-toggle"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>

                        {!isLogin && (
                            <div className="neomorphic-input-container">
                                <Lock className="input-icon" />
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    className="neomorphic-input"
                                />
                            </div>
                        )}

                        {isLogin && (
                            <div className="flex items-center justify-between">
                                <label className="flex items-center">
                                    <input type="checkbox" className="neomorphic-checkbox" />
                                    <span className="text-gray-600 text-sm ml-2">Remember me</span>
                                </label>
                                <a href="#" className="text-blue-600 text-sm hover:underline">
                                    Forgot Password?
                                </a>
                            </div>
                        )}

                        <button type="submit" className="neomorphic-button w-full">
                            <span>{isLogin ? "Sign In" : "Create Account"}</span>
                            <ArrowRight className="ml-2" size={20} />
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center my-6">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <span className="px-4 text-gray-500 text-sm">or continue with</span>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>

                    {/* Social Buttons */}
                    <div className="grid grid-cols-3 gap-4">
                        <button className="neomorphic-social-btn">
                            <Github size={20} />
                        </button>
                        <button className="neomorphic-social-btn">
                            <Facebook size={20} />
                        </button>
                        <button className="neomorphic-social-btn">
                            <Fingerprint size={20} />
                        </button>
                    </div>

                    {/* Footer */}
                    <div className="text-center mt-6">
                        <p className="text-gray-600 text-sm">
                            {isLogin ? "Don't have an account? " : "Already have an account? "}
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="text-blue-600 hover:underline font-medium"
                            >
                                {isLogin ? "Sign up" : "Sign in"}
                            </button>
                        </p>
                    </div>
                </div>

                {/* Navigation */}
                <div className="mt-8 text-center">
                    <div className="neomorphic-card p-4 inline-block">
                        <div className="flex gap-4">
                            <Link href="/ui/glassmorphism">
                                <button className="neomorphic-nav-btn">
                                    ← Glassmorphism
                                </button>
                            </Link>
                            <Link href="/ui/dashboard">
                                <button className="neomorphic-nav-btn">
                                    Dashboard
                                </button>
                            </Link>
                            <Link href="/ui/dark-mode">
                                <button className="neomorphic-nav-btn">
                                    Dark Mode →
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .neomorphic-card {
                    background: #e0e5ec;
                    border-radius: 20px;
                    box-shadow: 
                        20px 20px 60px #bebebe,
                        -20px -20px 60px #ffffff;
                    transition: all 0.3s ease;
                }

                .neomorphic-toggle {
                    display: flex;
                    background: #e0e5ec;
                    border-radius: 15px;
                    padding: 4px;
                    box-shadow: 
                        inset 8px 8px 16px #bebebe,
                        inset -8px -8px 16px #ffffff;
                }

                .toggle-btn {
                    flex: 1;
                    padding: 12px 16px;
                    border: none;
                    background: transparent;
                    border-radius: 12px;
                    font-weight: 600;
                    color: #666;
                    transition: all 0.3s ease;
                    cursor: pointer;
                }

                .toggle-btn.active {
                    background: #e0e5ec;
                    color: #4f46e5;
                    box-shadow: 
                        8px 8px 16px #bebebe,
                        -8px -8px 16px #ffffff;
                }

                .neomorphic-input-container {
                    position: relative;
                    margin-bottom: 24px;
                }

                .neomorphic-input {
                    width: 100%;
                    padding: 16px 16px 16px 50px;
                    border: none;
                    background: #e0e5ec;
                    border-radius: 15px;
                    box-shadow: 
                        inset 8px 8px 16px #bebebe,
                        inset -8px -8px 16px #ffffff;
                    font-size: 16px;
                    color: #333;
                    outline: none;
                    transition: all 0.3s ease;
                }

                .neomorphic-input:focus {
                    box-shadow: 
                        inset 12px 12px 24px #bebebe,
                        inset -12px -12px 24px #ffffff;
                }

                .neomorphic-input::placeholder {
                    color: #999;
                }

                .input-icon {
                    position: absolute;
                    left: 16px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #999;
                    z-index: 1;
                }

                .password-toggle {
                    position: absolute;
                    right: 16px;
                    top: 50%;
                    transform: translateY(-50%);
                    background: none;
                    border: none;
                    color: #999;
                    cursor: pointer;
                    transition: color 0.3s ease;
                }

                .password-toggle:hover {
                    color: #666;
                }

                .neomorphic-checkbox {
                    appearance: none;
                    width: 20px;
                    height: 20px;
                    background: #e0e5ec;
                    border-radius: 6px;
                    box-shadow: 
                        inset 4px 4px 8px #bebebe,
                        inset -4px -4px 8px #ffffff;
                    cursor: pointer;
                    position: relative;
                    transition: all 0.3s ease;
                }

                .neomorphic-checkbox:checked {
                    background: #4f46e5;
                    box-shadow: 
                        inset 4px 4px 8px rgba(79, 70, 229, 0.3),
                        inset -4px -4px 8px rgba(79, 70, 229, 0.1);
                }

                .neomorphic-checkbox:checked::after {
                    content: '✓';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    color: white;
                    font-size: 12px;
                    font-weight: bold;
                }

                .neomorphic-button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 16px 32px;
                    background: linear-gradient(145deg, #f0f0f0, #cacaca);
                    border: none;
                    border-radius: 15px;
                    box-shadow: 
                        8px 8px 16px #bebebe,
                        -8px -8px 16px #ffffff;
                    font-size: 16px;
                    font-weight: 600;
                    color: #4f46e5;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .neomorphic-button:hover {
                    transform: translateY(-2px);
                    box-shadow: 
                        12px 12px 24px #bebebe,
                        -12px -12px 24px #ffffff;
                }

                .neomorphic-button:active {
                    transform: translateY(0);
                    box-shadow: 
                        inset 4px 4px 8px #bebebe,
                        inset -4px -4px 8px #ffffff;
                }

                .neomorphic-social-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 12px;
                    background: #e0e5ec;
                    border: none;
                    border-radius: 12px;
                    box-shadow: 
                        6px 6px 12px #bebebe,
                        -6px -6px 12px #ffffff;
                    color: #666;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .neomorphic-social-btn:hover {
                    transform: translateY(-2px);
                    color: #4f46e5;
                    box-shadow: 
                        8px 8px 16px #bebebe,
                        -8px -8px 16px #ffffff;
                }

                .neomorphic-social-btn:active {
                    transform: translateY(0);
                    box-shadow: 
                        inset 3px 3px 6px #bebebe,
                        inset -3px -3px 6px #ffffff;
                }

                .neomorphic-nav-btn {
                    padding: 8px 16px;
                    background: #e0e5ec;
                    border: none;
                    border-radius: 10px;
                    box-shadow: 
                        4px 4px 8px #bebebe,
                        -4px -4px 8px #ffffff;
                    color: #666;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-size: 14px;
                }

                .neomorphic-nav-btn:hover {
                    color: #4f46e5;
                    transform: translateY(-1px);
                }
            `}</style>
        </div>
    )
}
