import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <div className="p-8 max-w-6xl">
      {/* Header */}
      <div className="text-vscode-green text-sm mb-6">
        <span>// Let's connect and build something amazing together</span>
      </div>

      <div className="space-y-8">
        {/* Title */}
        <div>
          <h1 className="text-3xl font-bold mb-4">
            <span className="text-vscode-purple">function</span>{" "}
            <span className="text-vscode-yellow">connectWithMe</span>
            <span className="text-foreground">() {`{`}</span>
          </h1>
          <p className="text-foreground/80 ml-6 mb-4">
            <span className="text-vscode-orange">// I'm always excited to discuss new opportunities and collaborate on innovative projects</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center text-vscode-blue">
                  <MessageSquare className="mr-2" size={20} />
                  <span className="text-vscode-purple">contactInfo</span>
                  <span className="text-foreground">: {`{`}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-vscode-blue" size={20} />
                  <div>
                    <p className="text-sm text-vscode-green">email:</p>
                    <a 
                      href="mailto:jicoim@iu.edu" 
                      className="text-foreground hover:text-vscode-blue transition-colors"
                    >
                      jicoim@iu.edu
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="text-vscode-green" size={20} />
                  <div>
                    <p className="text-sm text-vscode-green">phone:</p>
                    <a 
                      href="tel:930-904-0645" 
                      className="text-foreground hover:text-vscode-green transition-colors"
                    >
                      930-904-0645
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPin className="text-vscode-orange" size={20} />
                  <div>
                    <p className="text-sm text-vscode-green">location:</p>
                    <p className="text-foreground">Seattle, WA</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center text-vscode-blue">
                  <span className="text-vscode-purple">socialLinks</span>
                  <span className="text-foreground">: [</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a 
                  href="https://github.com/jithenthiriya" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 border border-border rounded-lg hover:border-vscode-blue/50 transition-colors group"
                >
                  <Github className="text-foreground group-hover:text-vscode-blue transition-colors" size={20} />
                  <div>
                    <p className="text-sm text-vscode-green">GitHub:</p>
                    <p className="text-foreground group-hover:text-vscode-blue transition-colors">github.com/jithenthiriya</p>
                  </div>
                </a>

                <a 
                  href="https://www.linkedin.com/in/jithenthiriya/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 border border-border rounded-lg hover:border-vscode-blue/50 transition-colors group"
                >
                  <Linkedin className="text-vscode-blue group-hover:text-vscode-blue/80 transition-colors" size={20} />
                  <div>
                    <p className="text-sm text-vscode-green">LinkedIn:</p>
                    <p className="text-foreground group-hover:text-vscode-blue transition-colors">linkedin.com/in/jithenthiriya</p>
                  </div>
                </a>
              </CardContent>
            </Card>

            {/* Quick Response */}
            <div className="bg-secondary/20 border border-border rounded-lg p-4">
              <div className="text-sm">
                <span className="text-vscode-orange">// Response time</span>
              </div>
              <div className="text-sm mt-2">
                <span className="text-vscode-purple">const</span>{" "}
                <span className="text-vscode-yellow">responseTime</span>{" "}
                <span className="text-foreground">=</span>{" "}
                <span className="text-vscode-green">"Usually within 24 hours"</span>
                <span className="text-foreground">;</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center text-vscode-blue">
                <Send className="mr-2" size={20} />
                <span className="text-vscode-purple">sendMessage</span>
                <span className="text-foreground">() {`{`}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-vscode-green">Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      className="bg-secondary/20 border-border focus:border-vscode-blue"
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-vscode-green">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      className="bg-secondary/20 border-border focus:border-vscode-blue"
                      required 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-vscode-green">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="What's this about?" 
                    className="bg-secondary/20 border-border focus:border-vscode-blue"
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-vscode-green">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    className="bg-secondary/20 border-border focus:border-vscode-blue resize-none"
                    required 
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-vscode-blue hover:bg-vscode-blue/80 text-background"
                >
                  <Send size={16} className="mr-2" />
                  Send Message
                </Button>

                <div className="text-center text-sm text-foreground/60">
                  <span className="text-vscode-orange">// </span>
                  Or reach out directly via email or phone above
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* What I'm Looking For */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-vscode-blue">
              <span className="text-vscode-purple">const</span>{" "}
              <span className="text-vscode-yellow">lookingFor</span>{" "}
              <span className="text-foreground">=</span>{" "}
              <span className="text-vscode-green">[</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 border border-border rounded-lg">
                <div className="text-2xl mb-2">💼</div>
                <h3 className="font-semibold text-vscode-green mb-2">Job Opportunities</h3>
                <p className="text-sm text-foreground/80">Full-time software engineering roles</p>
              </div>
              
              <div className="text-center p-4 border border-border rounded-lg">
                <div className="text-2xl mb-2">🚀</div>
                <h3 className="font-semibold text-vscode-blue mb-2">Project Collaboration</h3>
                <p className="text-sm text-foreground/80">Open source and innovative projects</p>
              </div>
              
              <div className="text-center p-4 border border-border rounded-lg">
                <div className="text-2xl mb-2">🎯</div>
                <h3 className="font-semibold text-vscode-purple mb-2">Consulting</h3>
                <p className="text-sm text-foreground/80">Technical consulting and architecture</p>
              </div>
              
              <div className="text-center p-4 border border-border rounded-lg">
                <div className="text-2xl mb-2">🤝</div>
                <h3 className="font-semibold text-vscode-orange mb-2">Networking</h3>
                <p className="text-sm text-foreground/80">Connect with fellow developers</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Closing */}
        <div className="text-vscode-green text-sm">
          <span>{`} // End of connectWithMe function`}</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;