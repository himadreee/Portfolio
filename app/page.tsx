"use client"

import Image from "next/image"
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Calendar,
  ExternalLink,
  Award,
  Users,
  Code,
  Database,
  Cloud,
  Wrench,
  MapPin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const projects = [
    {
      title: "Full Stack Bank Transaction and Loan Processing System",
      tech: "React, MySQL, Node.js",
      description:
        "Built a robust core banking system with secure management of accounts, branches, transfers, loans, and deposits. Ensured ACID compliance using stored procedures, triggers, and indexing.",
      coverImage: "bank1.png",
      repoLink: "https://github.com/Kisara-k/bank-sys"
    },
    {
      title: "Budget Tracker",
      tech: "FastAPI, React, MongoDB",
      description:
        "Personal finance manager with categorized transaction tracking, interactive charts, and filters for better budgeting decisions. Includes REST API backend and dynamic front-end UI.",
      coverImage: "budget.png",
      repoLink: "https://github.com/himadreee/Budget-Tracker"
    },
    {
      title: "ResumeRover – Intelligent Resume Screening System",
      tech: "FastAPI, React, MongoDB",
      description:
        "Developed as part of a group project with a microservices-based architecture for AI-powered resume screening. Responsible for the real-time analytics and dashboard subsystem.",
      coverImage: "resumee.png?height=160&width=320",
      repoLink: "https://github.com/ResumeRover/Main"
    },
    {
  title: "EventBun – Event Ticketing and Management Platform",
  tech: "Flutter, React, Node.js, PostgreSQL",
  description:
    "An all-in-one event platform for ticket creation, user authentication, real-time analytics, email reminders, and secure payments. Includes event discovery and attendee management features.",
  status: "Ongoing",
  coverImage: "evenbn.png",
  className: "eventbun-img", // custom class for styling
  repoLink: "https://github.com/pvnzki/EventBn"
},
  ]

  const skills = {
    programming: ["Python", "Java", "C++", "TypeScript", "Ballerina"],
    frameworks: ["Node.js", "FastAPI", "React-Native", "React", "Next.js", "Flutter"],
    databases: ["MySQL", "SQLite", "PostgreSQL", "MongoDB"],
    cloud: ["AWS"],
    tools: ["Git", "VSCode"],
  }

  const certifications = [
  {
    name: "AWS Certified Cloud Practitioner – By AWS",
    link: "https://www.credly.com/badges/9eeafce3-8624-48d0-ba71-371d2c602fcd/public_url"
  },
  {
    name: "Postman API Fundamentals Student Expert",
    link: "https://badgr.com/public/assertions/1uwhsTfkSxyLT3Oe9ZfCSA?identity__email=himadree.22@cse.mrt.ac.lk"
  },
  {
    name: "GitHub Foundations Certificate",
    link: "https://www.credly.com/badges/f9ecec96-f4dc-42d5-9021-d18525582cae"
  },
  {
    name: "Getting Started with MongoDB Atlas",
    link: "https://learn.mongodb.com/c/wjaf3q_TR6-onJijJf9HYg"
  }
];

  /*const activities = [
    "IEEE Xtreme 18.0 – Certificate of Participation",
    "Organizing Committee Member – ADScAI Symposium, Dept. of Computer Science & Engineering, University of Moratuwa",
    "CSE Career Fair 2025 - Company Coordinator",
    "Maths Society Musaeus College - Member",
  ]*/

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-bold text-slate-800">Himadree Gallage</h1>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="text-slate-600 hover:text-emerald-600 transition-colors font-medium text-sm">
                About
              </a>
              <a
                href="#education"
                className="text-slate-600 hover:text-emerald-600 transition-colors font-medium text-sm"
              >
                Education
              </a>
              <a href="#skills" className="text-slate-600 hover:text-emerald-600 transition-colors font-medium text-sm">
                Skills
              </a>
              <a
                href="#projects"
                className="text-slate-600 hover:text-emerald-600 transition-colors font-medium text-sm"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-slate-600 hover:text-emerald-600 transition-colors font-medium text-sm"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 bg-gradient-to-br from-emerald-50 via-teal-50 to-slate-100">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <div className="relative w-40 h-40 mx-auto mb-6">
              <Image
                src="Hima.jpeg"
                alt="Himadree Gallage"
                width={160}
                height={160}
                className="rounded-full border-3 border-white shadow-lg object-cover"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-400/10 to-teal-400/10"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-3 tracking-tight">Himadree Gallage</h1>
            <p className="text-lg md:text-xl text-emerald-600 mb-4 font-semibold">
              Computer Science & Engineering Student
            </p>
            <div className="flex items-center justify-center text-slate-600 mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm">University of Moratuwa, Sri Lanka</span>
            </div>
            <p className="text-base text-slate-700 max-w-2xl mx-auto mb-8 leading-relaxed">
              Passionate about creating innovative technology solutions with expertise in full-stack development, cloud
              computing, and modern software engineering practices. Seeking opportunities to contribute to meaningful
              projects and drive technological advancement.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="mailto:asankahimadree@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 text-sm shadow-md">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
              </a>
              <a
                href="https://github.com/himadreee"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Button
                  variant="outline"
                  className="border-2 border-slate-800 text-slate-800 hover:bg-slate-100 px-6 py-2 text-sm bg-transparent flex items-center"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/himadree-gallage-4ab6422a4/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Button
                  variant="outline"
                  className="border-2 border-blue-700 text-blue-700 hover:bg-blue-50 px-6 py-2 text-sm bg-transparent flex items-center"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-slate-700 text-sm leading-relaxed mb-4">
                      I am a dedicated Computer Science and Engineering student at the University of Moratuwa, with a
                      passion for innovative technology solutions. My academic journey has been marked by excellence,
                      achieving outstanding results in both A/L and O/L examinations.
                    </p>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      I demonstrate a consistent drive for excellence and maintain a strong interest in emerging
                      technologies. Through various projects and certifications, I have developed expertise in
                      full-stack development, cloud computing, and modern software engineering practices.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      <span className="text-slate-700 text-sm">Full-Stack Development</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                      <span className="text-slate-700 text-sm">Cloud Computing (AWS)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-rose-500 rounded-full mr-3"></div>
                      <span className="text-slate-700 text-sm">Mobile App Development</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-6 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Education</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            <Card className="border-0 shadow-md bg-white overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-1"></div>
              <CardHeader className="pb-2 pt-3">
                <CardTitle className="text-slate-800 flex items-center text-base">
                  <Calendar className="w-4 h-4 mr-2 text-emerald-600" />
                  BSc Eng (Hons) in Computer Science and Engineering
                </CardTitle>
                <CardDescription className="text-slate-600 text-sm">
                  University of Moratuwa • March 2023 – Present
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-md bg-white overflow-hidden">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 h-1"></div>
              <CardHeader className="pb-1 pt-3">
                <CardTitle className="text-slate-800 text-base">Musaeus College</CardTitle>
                <CardDescription className="text-slate-600 text-sm">2006 – 2021</CardDescription>
              </CardHeader>
              <CardContent className="pt-0 pb-3">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2 text-sm">G.C.E A/L Examination:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-emerald-100 text-emerald-800 px-2 py-1 text-xs">Combined Maths - A</Badge>
                      <Badge className="bg-teal-100 text-teal-800 px-2 py-1 text-xs">Physics - A</Badge>
                      <Badge className="bg-amber-100 text-amber-800 px-2 py-1 text-xs">Chemistry - A</Badge>
                      <Badge className="bg-rose-100 text-rose-800 px-2 py-1 text-xs">General English - A</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1 text-sm">G.C.E O/L Examination:</h4>
                    <p className="text-slate-700 text-sm">
                      9A passes including Maths, ICT, Business & Accounting, and English
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Technical Skills</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="border-0 shadow-md bg-white group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-slate-800 flex items-center text-base">
                  <div className="p-1.5 bg-emerald-100 rounded-lg mr-2 group-hover:bg-emerald-200 transition-colors">
                    <Code className="w-4 h-4 text-emerald-600" />
                  </div>
                  Programming
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1.5">
                  {skills.programming.map((skill) => (
                    <Badge key={skill} className="bg-emerald-600 hover:bg-emerald-700 text-white px-2 py-1 text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-white group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-slate-800 flex items-center text-base">
                  <div className="p-1.5 bg-teal-100 rounded-lg mr-2 group-hover:bg-teal-200 transition-colors">
                    <Wrench className="w-4 h-4 text-teal-600" />
                  </div>
                  Frameworks & Libraries
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1.5">
                  {skills.frameworks.map((skill) => (
                    <Badge key={skill} className="bg-teal-100 text-teal-800 hover:bg-teal-200 px-2 py-1 text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-white group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-slate-800 flex items-center text-base">
                  <div className="p-1.5 bg-amber-100 rounded-lg mr-2 group-hover:bg-amber-200 transition-colors">
                    <Database className="w-4 h-4 text-amber-600" />
                  </div>
                  Database Systems
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1.5">
                  {skills.databases.map((skill) => (
                    <Badge key={skill} className="bg-amber-100 text-amber-800 hover:bg-amber-200 px-2 py-1 text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-white group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-slate-800 flex items-center text-base">
                  <div className="p-1.5 bg-rose-100 rounded-lg mr-2 group-hover:bg-rose-200 transition-colors">
                    <Cloud className="w-4 h-4 text-rose-600" />
                  </div>
                  Cloud Platforms
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1.5">
                  {skills.cloud.map((skill) => (
                    <Badge key={skill} className="bg-rose-600 hover:bg-rose-700 text-white px-2 py-1 text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-white group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-slate-800 flex items-center text-base">
                  <div className="p-1.5 bg-purple-100 rounded-lg mr-2 group-hover:bg-purple-200 transition-colors">
                    <Wrench className="w-4 h-4 text-purple-600" />
                  </div>
                  Developer Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1.5">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} className="bg-purple-100 text-purple-800 hover:bg-purple-200 px-2 py-1 text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

{/* Projects Section */}
<section id="projects" className="py-16 px-6 bg-slate-50">
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
      Featured Projects
    </h2>
    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <Card
          key={index}
          className="border-0 shadow-md bg-white hover:shadow-lg transition-all duration-300 overflow-hidden group"
        >
          {/* Cover Image */}
          <div className="relative h-48 md:h-64 overflow-hidden">
            <div className="absolute inset-0 bg-black z-0" />
            <Image
              src={project.coverImage || "/placeholder.svg"}
              alt={`${project.title} cover`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300 z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-20"></div>
            {project.status && (
              <Badge className="absolute top-2 right-2 bg-emerald-500 text-white px-2 py-1 text-xs">
                {project.status}
              </Badge>
            )}
          </div>

          <CardHeader className="pb-2">
            <CardTitle className="text-slate-800 text-base leading-tight">
              {project.title}
            </CardTitle>
            <CardDescription className="text-emerald-600 font-semibold text-sm">
              {project.tech}
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-0">
            <p className="text-slate-700 leading-relaxed text-sm mb-4">
              {project.description}
            </p>
            <div className="flex gap-2">
              <a
  href={project.repoLink}
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    size="sm"
    className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs px-3 py-1 shadow-md"
  >
    <Github className="w-3 h-3 mr-1" />
    Code
  </Button>
</a>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>


      {/* Certifications Section */}
      <section className="py-12 px-6">
  <div className="container mx-auto">
    <h2 className="text-2xl font-bold text-slate-800 text-center mb-8">Certifications</h2>
    <div className="max-w-2xl mx-auto space-y-2">
      {certifications.map((cert, index) => (
        <Card
          key={index}
          className="border-0 shadow-sm bg-white hover:shadow-md transition-all duration-300"
        >
          <CardContent className="p-3">
            <div className="flex items-center">
              <div className="p-1.5 bg-emerald-100 rounded-lg mr-3">
                <Award className="w-4 h-4 text-emerald-600" />
              </div>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-800 font-medium text-sm hover:underline"
              >
                {cert.name}
              </a>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gradient-to-br from-emerald-50 via-teal-50 to-slate-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Let's Connect</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center group">
                      <div className="p-2 bg-emerald-100 rounded-lg mr-3 group-hover:bg-emerald-200 transition-colors">
                        <Mail className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800 text-sm">Email</p>
                        <a
                          href="mailto:asankahimadree@gmail.com"
                          className="text-emerald-600 hover:text-emerald-700 text-sm"
                        >
                          asankahimadree@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center group">
                      <div className="p-2 bg-teal-100 rounded-lg mr-3 group-hover:bg-teal-200 transition-colors">
                        <Phone className="w-4 h-4 text-teal-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800 text-sm">Phone</p>
                        <a href="tel:+94712008680" className="text-teal-600 hover:text-teal-700 text-sm">
                          +94 712008680
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center group">
                      <div className="p-2 bg-blue-100 rounded-lg mr-3 group-hover:bg-blue-200 transition-colors">
                        <Linkedin className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800 text-sm">LinkedIn</p>
                        <a
                          href="https://linkedin.com/in/himadree-gallage"
                          className="text-blue-600 hover:text-blue-700 text-sm"
                        >
                          linkedin.com/in/himadree-gallage
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center group">
                      <div className="p-2 bg-gray-100 rounded-lg mr-3 group-hover:bg-gray-200 transition-colors">
                        <Github className="w-4 h-4 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800 text-sm">GitHub</p>
                        <a href="https://github.com/himadreee" className="text-gray-600 hover:text-gray-700 text-sm">
                          github.com/himadreee
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 text-sm shadow-md">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-slate-300 text-sm">© 2024 Himadree Gallage. All rights reserved.</p>
          <p className="text-slate-400 mt-1 text-xs">Built with passion and modern web technologies</p>
        </div>
      </footer>
    </div>
  )
}
