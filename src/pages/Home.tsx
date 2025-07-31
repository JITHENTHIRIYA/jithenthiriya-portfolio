import { ArrowRight, Github, Linkedin, Mail, MapPin, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Home = () => {
  const handleDownloadResume = () => {
    // Create a link element to trigger the download
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Jithenthiriya_Coimbatore_Kathirvel_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-8 max-w-4xl">
      {/* Code comments style header */}
      <div className="text-vscode-green text-sm mb-4">
        <span>// Welcome to my portfolio</span>
      </div>
      
      <div className="space-y-8">
        {/* Main intro */}
        <div className="space-y-4">
          <div className="text-vscode-blue text-sm">
            <span className="text-vscode-purple">const</span>{" "}
            <span className="text-vscode-yellow">developer</span>{" "}
            <span className="text-foreground">=</span>{" "}
            <span className="text-vscode-green">{`{`}</span>
          </div>
          
          <div className="ml-4 space-y-2">
            <div>
              <span className="text-vscode-red">name</span>
              <span className="text-foreground">: </span>
              <span className="text-vscode-green">"Jithenthiriya Coimbatore Kathirvel"</span>
              <span className="text-foreground">,</span>
            </div>
            
            <div>
              <span className="text-vscode-red">role</span>
              <span className="text-foreground">: </span>
              <span className="text-vscode-green">"Software Engineer"</span>
              <span className="text-foreground">,</span>
            </div>
            
            <div>
              <span className="text-vscode-red">location</span>
              <span className="text-foreground">: </span>
              <span className="text-vscode-green">"Seattle, WA"</span>
              <span className="text-foreground">,</span>
            </div>
            
            <div>
              <span className="text-vscode-red">experience</span>
              <span className="text-foreground">: </span>
              <span className="text-vscode-green">"Full Stack Development, Machine Learning, Cloud Computing"</span>
              <span className="text-foreground">,</span>
            </div>
            
            <div>
              <span className="text-vscode-red">passion</span>
              <span className="text-foreground">: </span>
              <span className="text-vscode-green">"Building innovative solutions with cutting-edge technology"</span>
            </div>
          </div>
          
          <div className="text-vscode-green text-sm">
            <span>{`};`}</span>
          </div>
        </div>
        
        {/* Quick stats */}
        <div className="border border-border rounded-lg p-6 bg-card">
          <div className="text-vscode-blue text-sm mb-4">
            <span className="text-vscode-purple">const</span>{" "}
            <span className="text-vscode-yellow">stats</span>{" "}
            <span className="text-foreground">=</span>{" "}
            <span className="text-vscode-green">[</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ml-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-vscode-blue mb-2">2+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-vscode-green mb-2">10+</div>
              <div className="text-muted-foreground">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-vscode-purple mb-2">3+</div>
              <div className="text-muted-foreground">Major Projects</div>
            </div>
          </div>
          
          <div className="text-vscode-green text-sm mt-4">
            <span>];</span>
          </div>
        </div>
        
        {/* Current focus */}
        <div className="space-y-4">
          <div className="text-vscode-orange text-sm">
            <span>// Currently working on</span>
          </div>
          
          <div className="bg-secondary/50 border border-border rounded-lg p-4">
            <div className="text-sm">
              <span className="text-vscode-purple">if</span>
              <span className="text-foreground"> (</span>
              <span className="text-vscode-yellow">interested</span>
              <span className="text-foreground">) {`{`}</span>
            </div>
            <div className="ml-4 text-sm my-2">
              <span className="text-vscode-yellow">console</span>
              <span className="text-foreground">.</span>
              <span className="text-vscode-blue">log</span>
              <span className="text-foreground">(</span>
              <span className="text-vscode-green">"Let's build something amazing together!"</span>
              <span className="text-foreground">);</span>
            </div>
            <div className="text-sm">
              <span className="text-foreground">{`}`}</span>
            </div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 pt-6">
          <Link to="/projects">
            <Button className="bg-vscode-blue hover:bg-vscode-blue/80 text-background">
              View Projects
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
          
          <Link to="/contact">
            <Button variant="outline" className="border-vscode-green text-vscode-green hover:bg-vscode-green hover:text-background">
              <Mail size={16} className="mr-2" />
              Get In Touch
            </Button>
          </Link>
          
          <a 
            href="https://github.com/jithenthiriya" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <Button variant="outline" className="border-foreground/20 hover:bg-foreground/10">
              <Github size={16} className="mr-2" />
              GitHub
            </Button>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/jithenthiriya/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <Button variant="outline" className="border-vscode-blue text-vscode-blue hover:bg-vscode-blue hover:text-background">
              <Linkedin size={16} className="mr-2" />
              LinkedIn
            </Button>
          </a>
          
          <Button 
            onClick={handleDownloadResume}
            variant="outline" 
            className="border-vscode-green text-vscode-green hover:bg-vscode-green hover:text-background"
          >
            <Download size={16} className="mr-2" />
            Download Resume
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;