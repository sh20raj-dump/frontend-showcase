"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Heart, Search, Bell, User, Settings, Star, Download, Code } from "lucide-react"
import Link from "next/link"

export const metadata = {
    title: "Glassmorphism UI Kit - Modern Glass Design Components",
    description: "Beautiful glassmorphism UI components with interactive demos, live code examples, and copy-to-clipboard functionality. Perfect for modern web applications.",
    keywords: [
        "glassmorphism",
        "glass design",
        "ui components",
        "backdrop filter",
        "modern ui",
        "css glass effect",
        "frosted glass",
        "transparent design",
        "interactive demos"
    ],
    openGraph: {
        title: "Glassmorphism UI Kit - Modern Glass Design | Frontend Showcase",
        description: "Explore beautiful glass morphism components with live demos and code examples. Perfect for creating modern, elegant user interfaces.",
        images: ["/glassmorphism-og.jpg"],
    },
}

export default function GlassmorphismKit() {
    const [copied, setCopied] = useState("")

    const copyToClipboard = (text, component) => {
        navigator.clipboard.writeText(text)
        setCopied(component)
        setTimeout(() => setCopied(""), 2000)
    }

    const components = [
        {
            name: "Glass Card",
            code: `.glass-card {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}`,
            component: "glass-card"
        },
        {
            name: "Glass Button",
            code: `.glass-button {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  color: white;
  padding: 12px 24px;
  transition: all 0.3s ease;
}

.glass-button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}`,
            component: "glass-button"
        },
        {
            name: "Glass Input",
            code: `.glass-input {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: white;
  padding: 12px 16px;
}

.glass-input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}`,
            component: "glass-input"
        }
    ]

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="glass-card p-8 inline-block">
                        <h1 className="text-4xl font-bold text-white mb-4">
                            Glassmorphism UI Kitcase */}
                        </h1> mb-12">
                        <p className="text-white/80 text-lg">Demo */}
                            Beautiful glass morphism components for modern web applicationsrd p-6">
                        </p>rds</h3>
                        <div className="flex gap-4 justify-center mt-6">ce-y-4">
                            <Link href="/" className="glass-button">rd p-4">
                                ← Back to Showcase gap-3">
                            </Link>center">
                            <button className="glass-button">hite" />
                                <Download className="h-4 w-4 mr-2 inline" />  </div>
                                Download Kit   <div>
                            </button>Doe</h4>
                            <button className="glass-button">gner</p>
                                <Code className="h-4 w-4 mr-2 inline" />  </div>
                                View Code  </div>
                            </button>  </div>
                        </div>
                    </div>rd p-4">
                </div>etween">
   <div>
                {/* Component Showcase */}ons</h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">ages</p>
                    {/* Glass Cards Demo */}  </div>
                    <div className="glass-card p-6">hite" />
                        <h3 className="text-xl font-semibold text-white mb-4">Glass Cards</h3>  </div>
                        <div className="space-y-4">  </div>
                            <div className="glass-card p-4">  </div>
                                <div className="flex items-center gap-3">  </div>
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                        <User className="h-6 w-6 text-white" />Demo */}
                                    </div>rd p-6">
                                    <div>orm</h3>
                                        <h4 className="text-white font-medium">John Doe</h4>ce-y-4">
                                        <p className="text-white/70 text-sm">UI/UX Designer</p> <input
                                    </div>="text"
                                </div>ur name"
                            </div> w-full"
                                  />
                            <div className="glass-card p-4"> <input
                                <div className="flex items-center justify-between">"email"
                                    <div>r email"
                                        <h4 className="text-white font-medium">Notifications</h4> w-full"
                                        <p className="text-white/70 text-sm">3 new messages</p>      />
                                    </div> gap-2">
                                    <Bell className="h-5 w-5 text-white" />flex-1">
                                </div>  Submit
                            </div>/button>
                        </div>button">
                    </div> w-4" />
/button>
                    {/* Glass Form Demo */}  </div>
                    <div className="glass-card p-6">  </div>
                        <h3 className="text-xl font-semibold text-white mb-4">Glass Form</h3>  </div>
                        <div className="space-y-4">  </div>
                            <input 
                                type="text" ples */}
                                placeholder="Enter your name" mb-12">
                                className="glass-input w-full"Card */}
                            />rd p-6">
                            <input 3 mb-4">
                                type="email" hite" />
                                placeholder="Enter your email"rch</h4>
                                className="glass-input w-full"  </div>
                            /> <input
                            <div className="flex gap-2">="text"
                                <button className="glass-button flex-1">hing..."
                                    Submit w-full"
                                </button>      />
                                <button className="glass-button">  </div>
                                    <Heart className="h-4 w-4" />
                                </button>Card */}
                            </div>rd p-6">
                        </div>center">
                    </div>4K</div>
                </div>ds</div>
r mt-2">
                {/* Interactive Examples */}].map(i => (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">rent" />
                    {/* Search Card */}     ))}
                    <div className="glass-card p-6">  </div>
                        <div className="flex items-center gap-3 mb-4">  </div>
                            <Search className="h-5 w-5 text-white" />  </div>
                            <h4 className="text-white font-medium">Search</h4>
                        </div>Card */}
                        <input rd p-6">
                            type="text" etween">
                            placeholder="Search anything..."   <div>
                            className="glass-input w-full"ngs</h4>
                        />nces</p>
                    </div>  </div>
hite" />
                    {/* Stats Card */}  </div>
                    <div className="glass-card p-6">  </div>
                        <div className="text-center">  </div>
                            <div className="text-2xl font-bold text-white">2.4K</div>
                            <div className="text-white/70 text-sm">Downloads</div>ples */}
                            <div className="flex justify-center mt-2">rd p-6">
                                {[1,2,3,4,5].map(i => (ode</h3>
                                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />w-full">
                                ))}ite/10">
                            </div>mp) => (
                        </div>Trigger
                    </div>mponent}
mponent}
                    {/* Settings Card */}hite/20"
                    <div className="glass-card p-6">       >
                        <div className="flex items-center justify-between">mp.name}
                            <div>Trigger>
                                <h4 className="text-white font-medium">Settings</h4>     ))}
                                <p className="text-white/70 text-sm">Preferences</p>absList>
                            </div>
                            <Settings className="h-5 w-5 text-white" />mp) => (
                        </div>="mt-4">
                    </div>lative">
                </div>ext-sm">
}</code>
                {/* Code Examples */}  </pre>
                <div className="glass-card p-6"> <button
                    <h3 className="text-xl font-semibold text-white mb-6">CSS Code</h3>ponent)}
                    <Tabs defaultValue="glass-card" className="w-full">text-xs"
                        <TabsList className="grid w-full grid-cols-3 bg-white/10">       >
                            {components.map((comp) => (w-3" />}
                                <TabsTrigger /button>
                                    key={comp.component}  </div>
                                    value={comp.component}Content>
                                    className="text-white data-[state=active]:bg-white/20"     ))}
                                > </Tabs>
                                    {comp.name}  </div>
                                </TabsTrigger>
                            ))}tion */}
                        </TabsList>center">
                        -block">
                        {components.map((comp) => ( gap-4">
                            <TabsContent key={comp.component} value={comp.component} className="mt-4">hboard">
                                <div className="relative">button">
                                    <pre className="bg-black/30 text-white p-4 rounded-lg overflow-x-auto text-sm">ashboard
                                        <code>{comp.code}</code>/button>
                                    </pre> </Link>
                                    <buttonorphic">
                                        onClick={() => copyToClipboard(comp.code, comp.component)}button">
                                        className="absolute top-2 right-2 glass-button py-1 px-2 text-xs"orphic →
                                    >/button>
                                        {copied === comp.component ? "Copied!" : <Copy className="h-3 w-3" />} </Link>
                                    </button>  </div>
                                </div>  </div>
                            </TabsContent>  </div>
                        ))}  </div>
                    </Tabs>
                </div>e jsx>{`

                {/* Navigation */}
                <div className="mt-12 text-center">
                    <div className="glass-card p-6 inline-block">
                        <div className="flex gap-4">
                            <Link href="/ui/dashboard">
                                <button className="glass-button">
                                    ← Back to Dashboard
                                </button>
                            </Link>
                            <Link href="/ui/neumorphic">
                                <button className="glass-button">
                                    Next: Neumorphic →
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .glass-card {
                    background: rgba(255, 255, 255, 0.25);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border-radius: 20px;
                    border: 1px solid rgba(255, 255, 255, 0.18);
                    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
                }

                .glass-button {
                    background: rgba(255, 255, 255, 0.2);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    border-radius: 15px;
                    color: white;
                    padding: 12px 24px;
                    transition: all 0.3s ease;
                    cursor: pointer;
                    font-weight: 500;
                }

                .glass-button:hover {
                    background: rgba(255, 255, 255, 0.3);
                    transform: translateY(-2px);
                }

                .glass-input {
                    background: rgba(255, 255, 255, 0.15);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 12px;
                    color: white;
                    padding: 12px 16px;
                    outline: none;
                    transition: all 0.3s ease;
                }

                .glass-input::placeholder {
                    color: rgba(255, 255, 255, 0.7);
                }

                .glass-input:focus {
                    border-color: rgba(255, 255, 255, 0.4);
                    background: rgba(255, 255, 255, 0.2);
                }

                .animate-blob {
                    animation: blob 7s infinite;
                }

                .animation-delay-2000 {
                    animation-delay: 2s;
                }  </div>
           )
                .animation-delay-4000 {
                    animation-delay: 4s;
                }

                @keyframes blob {
                    0% {
                        transform: translate(0px, 0px) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                    100% {
                        transform: translate(0px, 0px) scale(1);
                    }
                }
            `}</style>
        </div>
    )
}
