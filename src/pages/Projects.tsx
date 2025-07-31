import { ExternalLink, Github, Brain, Smartphone, ChefHat, FileText, Calendar, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "MeetMind AI - Luddy Hackathon 2025 Winner",
      description: "Built an AI-powered assistant that transcribes meetings, generates summaries, extracts action items and performs sentiment analysis using OpenAI Whisper and GPT models",
      icon: Brain,
      technologies: ["FastAPI", "React", "TypeScript", "OpenAI Whisper", "GPT", "Google Calendar", "Gmail", "JIRA"],
      features: [
        "Real-time meeting transcription",
        "Automated summary generation", 
        "Action item extraction",
        "Sentiment analysis",
        "Calendar integration",
        "JIRA task automation"
      ],
      metrics: "Improved meeting post-processing efficiency by 80%",
      status: "Winner 🏆"
    },
    {
      title: "Expense Tracker App - iOS Swift",
      description: "Built a SwiftUI app to help users track expenses and set budget limits, reducing overspending with local notifications triggered in under 3 seconds.",
      icon: Smartphone,
      technologies: ["Swift", "SwiftUI", "Core Data", "Apple Charts Framework"],
      features: [
        "Real-time expense tracking",
        "Budget limit setting",
        "Local notifications (< 3 seconds)",
        "Dynamic expense visualizations",
        "Persistent data storage",
        "Category-based grouping"
      ],
      metrics: "60% improvement in data insight efficiency via real-time category grouping",
      status: "Completed"
    },
    {
      title: "Recipe Manager - Android App",
      description: "Implemented offline recipe storage and search using Room DB, reducing recipe retrieval time by 40%.",
      icon: ChefHat,
      technologies: ["Kotlin", "Android", "Room DB", "Material Design"],
      features: [
        "Offline recipe storage",
        "Advanced search functionality",
        "Category filters",
        "Clean Material Design UI",
        "Recipe sharing capabilities",
        "100% data integrity"
      ],
      metrics: "40% reduction in recipe retrieval time",
      status: "Completed"
    }
  ];

  const publications = [
    {
      title: "HOG and Cloud computing based Face Recognition for Attendance Monitoring",
      description: "Co-authored a real-time face recognition system for attendance monitoring, achieving over 90% accuracy by integrating HOG and CNN techniques with Google Cloud Firestore and deploying the frontend using Flutter across platforms.",
      icon: Users,
      technologies: ["Python", "OpenCV", "HOG", "CNN", "Google Cloud Firestore", "Flutter"],
      metrics: "90%+ accuracy achieved",
      type: "Research Publication"
    },
    {
      title: "Low to High Dynamic Image Reconstruction",
      description: "Co-developed a deep learning based image reconstruction model that converted LDR to HDR using GAN and CNN architecture, enhancing image brightness and exposure accuracy by over 35% across three advanced tone-mapping methods.",
      icon: FileText,
      technologies: ["Python", "GAN", "CNN", "OpenCV", "Deep Learning"],
      metrics: "35% improvement in image quality",
      type: "Research Publication"
    }
  ];

  return (
    <div className="p-8 max-w-7xl">
      {/* Header */}
      <div className="text-vscode-green text-sm mb-6">
        <span>// My projects and research work</span>
      </div>

      <div className="space-y-8">
        {/* Projects Section */}
        <div>
          <h1 className="text-3xl font-bold mb-6">
            <span className="text-vscode-purple">const</span>{" "}
            <span className="text-vscode-yellow">projects</span>{" "}
            <span className="text-foreground">=</span>{" "}
            <span className="text-vscode-green">[</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ml-4">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card key={index} className="bg-card border-border hover:border-vscode-blue/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <IconComponent className="text-vscode-blue" size={24} />
                        <div>
                          <CardTitle className="text-lg text-vscode-green">{project.title}</CardTitle>
                          <Badge 
                            variant="outline" 
                            className={
                              project.status === "Winner 🏆" 
                                ? "border-vscode-yellow text-vscode-yellow mt-2" 
                                : "border-vscode-green text-vscode-green mt-2"
                            }
                          >
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-foreground/80 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div>
                      <h4 className="text-vscode-orange text-sm font-semibold mb-2">Key Features:</h4>
                      <ul className="text-sm text-foreground/80 space-y-1">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-vscode-green mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-secondary/20 border border-border/50 rounded p-3">
                      <span className="text-vscode-blue text-sm font-semibold">Impact: </span>
                      <span className="text-foreground/80 text-sm">{project.metrics}</span>
                    </div>

                    <div>
                      <h4 className="text-vscode-purple text-sm font-semibold mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="border-vscode-blue/50 text-vscode-blue text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Publications Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            <span className="text-vscode-purple">const</span>{" "}
            <span className="text-vscode-yellow">publications</span>{" "}
            <span className="text-foreground">=</span>{" "}
            <span className="text-vscode-green">[</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ml-4">
            {publications.map((pub, index) => {
              const IconComponent = pub.icon;
              return (
                <Card key={index} className="bg-card border-border hover:border-vscode-purple/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-start space-x-3">
                      <IconComponent className="text-vscode-purple mt-1" size={20} />
                      <div>
                        <CardTitle className="text-lg text-vscode-green leading-tight">{pub.title}</CardTitle>
                        <Badge variant="outline" className="border-vscode-purple text-vscode-purple mt-2">
                          {pub.type}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-foreground/80 text-sm leading-relaxed">
                      {pub.description}
                    </p>

                    <div className="bg-secondary/20 border border-border/50 rounded p-3">
                      <span className="text-vscode-purple text-sm font-semibold">Achievement: </span>
                      <span className="text-foreground/80 text-sm">{pub.metrics}</span>
                    </div>

                    <div>
                      <h4 className="text-vscode-orange text-sm font-semibold mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-1">
                        {pub.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="border-vscode-purple/50 text-vscode-purple text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-secondary/20 border border-border rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-vscode-blue mb-4">Interested in collaborating?</h3>
          <p className="text-foreground/80 mb-4">
            I'm always excited to work on innovative projects that push the boundaries of technology.
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-vscode-blue hover:bg-vscode-blue/80 text-background">
              <Github size={16} className="mr-2" />
              View GitHub
            </Button>
            <Button variant="outline" className="border-vscode-green text-vscode-green hover:bg-vscode-green hover:text-background">
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Closing */}
        <div className="text-vscode-green text-sm">
          <span>];</span>
        </div>
      </div>
    </div>
  );
};

export default Projects;