import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BarChart3, Users, ShoppingCart, TrendingUp, Eye, Star, Github, ExternalLink, Palette, Monitor, Layers, Sparkles } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Project Dashboard - Analytics & Management",
  description: "Professional dashboard showcasing project analytics, progress tracking, and portfolio management. Built with Shadcn/ui components and modern design principles.",
  keywords: [
    "dashboard design",
    "project analytics",
    "shadcn ui",
    "progress tracking",
    "portfolio management",
    "data visualization",
    "modern dashboard",
    "responsive design"
  ],
  openGraph: {
    title: "Project Dashboard - Analytics & Management | Frontend Showcase",
    description: "Explore our professional dashboard with project analytics, progress tracking, and beautiful data visualizations.",
    images: ["/dashboard-og.jpg"],
  },
}

export default function Dashboard() {
    const projects = [
        {
            id: 1,
            title: "Amazon Clone",
            description: "Complete e-commerce platform with cart functionality",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80",
            tech: ["Next.js", "React", "CSS", "Context API"],
            category: "E-commerce",
            status: "Completed",
            views: 1250,
            rating: 4.8,
            url: "/clones/amazon",
            github: "#",
            featured: true
        },
        {
            id: 2,
            title: "Restaurant Website",
            description: "Modern restaurant website with reservations",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80",
            tech: ["Next.js", "React", "Tailwind CSS"],
            category: "Business",
            status: "Completed",
            views: 890,
            rating: 4.6,
            url: "/resturant-website",
            github: "#",
            featured: true
        },
        {
            id: 3,
            title: "Glassmorphism UI Kit",
            description: "Beautiful glass morphism components library",
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80",
            tech: ["React", "CSS", "Glassmorphism"],
            category: "UI Kit",
            status: "Completed",
            views: 420,
            rating: 4.7,
            url: "/ui/glassmorphism",
            github: "#",
            featured: true
        },
        {
            id: 4,
            title: "Neumorphic Login Form",
            description: "Soft UI login form with neumorphic design",
            image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=400&q=80",
            tech: ["React", "CSS", "Neumorphism"],
            category: "Authentication",
            status: "Completed",
            views: 315,
            rating: 4.5,
            url: "/ui/neumorphic",
            github: "#",
            featured: true
        },
        {
            id: 5,
            title: "Dark Mode Toggle",
            description: "Animated dark mode toggle with smooth transitions",
            image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80",
            tech: ["React", "CSS", "Animations"],
            category: "Interactive",
            status: "Completed",
            views: 275,
            rating: 4.6,
            url: "/ui/dark-mode",
            github: "#",
            featured: true
        },
        {
            id: 6,
            title: "Component Library",
            description: "Comprehensive collection of reusable UI components",
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80",
            tech: ["React", "Tailwind", "Components"],
            category: "UI Kit",
            status: "Completed",
            views: 680,
            rating: 4.9,
            url: "/ui/component-library",
            github: "#",
            featured: true
        },
        {
            id: 7,
            title: "Custom Dashboard",
            description: "Professional dashboard with analytics",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
            tech: ["Next.js", "Shadcn", "Charts"],
            category: "Dashboard",
            status: "Completed",
            views: 320,
            rating: 4.9,
            url: "/ui/dashboard",
            github: "#",
            featured: true
        }
    ]

    const stats = [
        {
            title: "Total Projects",
            value: "7",
            change: "+5 this month",
            icon: Layers,
            color: "text-blue-600"
        },
        {
            title: "Total Views",
            value: "3,560",
            change: "+22% from last month",
            icon: Eye,
            color: "text-green-600"
        },
        {
            title: "Technologies",
            value: "12",
            change: "+3 new skills",
            icon: Monitor,
            color: "text-purple-600"
        },
        {
            title: "Avg Rating",
            value: "4.7",
            change: "+0.2 this month",
            icon: Star,
            color: "text-yellow-600"
        }
    ]

    const recentActivity = [
        {
            action: "Completed Amazon Clone project",
            time: "2 hours ago",
            type: "project"
        },
        {
            action: "Added cart functionality",
            time: "4 hours ago",
            type: "feature"
        },
        {
            action: "Updated Restaurant Website",
            time: "1 day ago",
            type: "update"
        },
        {
            action: "Started Glassmorphism UI Kit",
            time: "2 days ago",
            type: "project"
        }
    ]

    const getStatusColor = (status) => {
        switch (status) {
            case "Completed":
                return "bg-green-100 text-green-800"
            case "In Progress":
                return "bg-blue-100 text-blue-800"
            case "Planned":
                return "bg-gray-100 text-gray-800"
            default:
                return "bg-gray-100 text-gray-800"
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Frontend Showcase
                            </h1>
                            <p className="text-gray-600 dark:text-gray-400 mt-2">
                                Beautiful UI/UX projects and component libraries
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <Link href="/">
                                <Button variant="outline" size="sm">
                                    ← Back to Main
                                </Button>
                            </Link>
                            <Button variant="outline" size="sm">
                                <Github className="h-4 w-4 mr-2" />
                                GitHub
                            </Button>
                            <Button size="sm">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Portfolio
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                            {stat.title}
                                        </p>
                                        <p className="text-2xl font-bold mt-1">{stat.value}</p>
                                        <p className="text-xs text-green-600 mt-1">{stat.change}</p>
                                    </div>
                                    <div className={`p-3 rounded-full bg-gray-100 dark:bg-gray-800 ${stat.color}`}>
                                        <stat.icon className="h-6 w-6" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Projects Section */}
                    <div className="lg:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Sparkles className="h-5 w-5" />
                                    Featured Projects
                                </CardTitle>
                                <CardDescription>
                                    Showcase of my latest frontend projects and UI experiments
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Tabs defaultValue="all" className="w-full">
                                    <TabsList className="grid w-full grid-cols-4">
                                        <TabsTrigger value="all">All</TabsTrigger>
                                        <TabsTrigger value="completed">Completed</TabsTrigger>
                                        <TabsTrigger value="ui-kits">UI Kits</TabsTrigger>
                                        <TabsTrigger value="clones">Clones</TabsTrigger>
                                    </TabsList>
                                    
                                    <TabsContent value="all" className="mt-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {projects.map((project) => (
                                                <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                                                    <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 relative overflow-hidden">
                                                        <img 
                                                            src={project.image} 
                                                            alt={project.title}
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                        />
                                                        <div className="absolute top-3 right-3">
                                                            <Badge className={getStatusColor(project.status)}>
                                                                {project.status}
                                                            </Badge>
                                                        </div>
                                                        {project.featured && (
                                                            <div className="absolute top-3 left-3">
                                                                <Badge variant="secondary">
                                                                    <Star className="h-3 w-3 mr-1" />
                                                                    Featured
                                                                </Badge>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <CardContent className="p-6">
                                                        <div className="flex items-start justify-between mb-3">
                                                            <div>
                                                                <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">
                                                                    {project.title}
                                                                </h3>
                                                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                                                    {project.description}
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap gap-2 mb-4">
                                                            {project.tech.map((tech, i) => (
                                                                <Badge key={i} variant="outline" className="text-xs">
                                                                    {tech}
                                                                </Badge>
                                                            ))}
                                                        </div>

                                                        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
                                                            <div className="flex items-center gap-4">
                                                                <span className="flex items-center gap-1">
                                                                    <Eye className="h-4 w-4" />
                                                                    {project.views}
                                                                </span>
                                                                {project.rating > 0 && (
                                                                    <span className="flex items-center gap-1">
                                                                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                                                        {project.rating}
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <Badge variant="outline">{project.category}</Badge>
                                                        </div>

                                                        <div className="flex gap-2">
                                                            <Button asChild size="sm" className="flex-1">
                                                                <Link href={project.url}>
                                                                    <Eye className="h-4 w-4 mr-2" />
                                                                    View Project
                                                                </Link>
                                                            </Button>
                                                            <Button variant="outline" size="sm">
                                                                <Github className="h-4 w-4" />
                                                            </Button>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            ))}
                                        </div>
                                    </TabsContent>

                                    <TabsContent value="completed">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {projects.filter(p => p.status === "Completed").map((project) => (
                                                <Card key={project.id} className="group hover:shadow-xl transition-all duration-300">
                                                    <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 relative overflow-hidden">
                                                        <img 
                                                            src={project.image} 
                                                            alt={project.title}
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                        />
                                                    </div>
                                                    <CardContent className="p-6">
                                                        <h3 className="font-semibold text-lg">{project.title}</h3>
                                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{project.description}</p>
                                                        <div className="flex gap-2 mt-4">
                                                            <Button asChild size="sm">
                                                                <Link href={project.url}>View Project</Link>
                                                            </Button>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            ))}
                                        </div>
                                    </TabsContent>

                                    <TabsContent value="ui-kits">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {projects.filter(p => p.category === "UI Kit" || p.category === "Interactive" || p.category === "Authentication").map((project) => (
                                                <Card key={project.id} className="group hover:shadow-xl transition-all duration-300">
                                                    <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 relative overflow-hidden">
                                                        <img 
                                                            src={project.image} 
                                                            alt={project.title}
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                        />
                                                    </div>
                                                    <CardContent className="p-6">
                                                        <h3 className="font-semibold text-lg">{project.title}</h3>
                                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{project.description}</p>
                                                        <div className="flex gap-2 mt-4">
                                                            <Button asChild size="sm">
                                                                <Link href={project.url}>View Project</Link>
                                                            </Button>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            ))}
                                        </div>
                                    </TabsContent>

                                    <TabsContent value="clones">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {projects.filter(p => p.category === "E-commerce" || p.category === "Business").map((project) => (
                                                <Card key={project.id} className="group hover:shadow-xl transition-all duration-300">
                                                    <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 relative overflow-hidden">
                                                        <img 
                                                            src={project.image} 
                                                            alt={project.title}
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                        />
                                                    </div>
                                                    <CardContent className="p-6">
                                                        <h3 className="font-semibold text-lg">{project.title}</h3>
                                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{project.description}</p>
                                                        <div className="flex gap-2 mt-4">
                                                            <Button asChild size="sm">
                                                                <Link href={project.url}>View Project</Link>
                                                            </Button>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            ))}
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Progress Card */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <TrendingUp className="h-5 w-5" />
                                    Progress Overview
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm font-medium">Project Completion</span>
                                            <span className="text-sm">66%</span>
                                        </div>
                                        <Progress value={66} className="h-2" />
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm font-medium">UI Kit Progress</span>
                                            <span className="text-sm">25%</span>
                                        </div>
                                        <Progress value={25} className="h-2" />
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm font-medium">Skills Development</span>
                                            <span className="text-sm">80%</span>
                                        </div>
                                        <Progress value={80} className="h-2" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Recent Activity */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Recent Activity</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {recentActivity.map((activity, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                                            <div className="flex-1">
                                                <p className="text-sm font-medium">{activity.action}</p>
                                                <p className="text-xs text-gray-600 dark:text-gray-400">{activity.time}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Skills Card */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Tech Stack</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {["React", "Next.js", "Tailwind CSS", "Shadcn/ui", "TypeScript", "CSS Animations"].map((skill) => (
                                        <div key={skill} className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                                            <span className="text-sm">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
