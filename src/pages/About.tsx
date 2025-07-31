import { GraduationCap, MapPin, Calendar, Award, Code, Brain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const skills = {
    languages: ['C++', 'Python', 'SQL', 'Kotlin', 'Swift', 'Django'],
    technologies: ['AWS EC2', 'FastAPI', 'LangChain', 'React', 'TypeScript', 'Jetstream2 Cloud', 'MySQL', 'MongoDB', 'Git', 'Docker'],
    specializations: ['Machine Learning', 'Optical Character Recognition', 'Convolutional Neural Networks', 'Android Development']
  };

  return (
    <div className="p-8 max-w-6xl">
      {/* Header */}
      <div className="text-vscode-green text-sm mb-6">
        <span>// About me - Getting to know the developer</span>
      </div>

      <div className="space-y-8">
        {/* Intro */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            <span className="text-vscode-purple">class</span>{" "}
            <span className="text-vscode-yellow">Developer</span>{" "}
            <span className="text-vscode-green">{`{`}</span>
          </h1>
          
          <div className="ml-6 space-y-3">
            <p className="text-foreground/90 leading-relaxed">
              <span className="text-vscode-orange">// Passionate software engineer with expertise in full-stack development</span>
            </p>
            <p className="text-foreground/90 leading-relaxed">
              I'm a results-driven software engineer with a Master's degree in Computer Science from Indiana University. 
              My experience spans across machine learning, cloud computing, and full-stack development, with a particular 
              focus on building scalable solutions that make a real impact.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Currently working at Bosch Global Software Technologies, I've successfully improved system performance 
              by up to 85% and increased test coverage by 33% through innovative approaches and cutting-edge technologies.
            </p>
          </div>
        </div>

        {/* Education */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center text-vscode-blue">
              <GraduationCap className="mr-2" size={20} />
              <span className="text-vscode-purple">education</span>
              <span className="text-foreground">: [</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border border-border/50 rounded-lg p-4 bg-secondary/20">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-vscode-green">Master of Science - Computer Science</h3>
                  <p className="text-vscode-blue">Indiana University</p>
                </div>
                <div className="text-right text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-1" />
                    Bloomington, IN
                  </div>
                  <div className="flex items-center mt-1">
                    <Calendar size={14} className="mr-1" />
                    Aug 2024 - May 2026
                  </div>
                </div>
              </div>
              <div className="text-sm text-foreground/80">
                <strong>Specializations:</strong> Applied Machine Learning, Applied Algorithms, Engineering Cloud Computing, 
                Software Engineering, Elements of Artificial Intelligence, Native Mobile App Development, Computer Networks
              </div>
            </div>

            <div className="border border-border/50 rounded-lg p-4 bg-secondary/20">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-vscode-green">Bachelor of Engineering - Computer Science Engineering</h3>
                  <p className="text-vscode-blue">Anna University, Kumaraguru College of Technology</p>
                </div>
                <div className="text-right text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-1" />
                    India
                  </div>
                  <div className="flex items-center mt-1">
                    <Calendar size={14} className="mr-1" />
                    Aug 2019 - May 2023
                  </div>
                </div>
              </div>
              <div className="text-sm text-foreground/80">
                <strong>Core Studies:</strong> Data Structures and Algorithms, Operating System, Computer Architecture Organization, 
                Cloud Computing, Machine Learning
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center text-vscode-blue">
              <Code className="mr-2" size={20} />
              <span className="text-vscode-purple">skills</span>
              <span className="text-foreground">: {`{`}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="text-vscode-orange mb-3 font-semibold">Programming Languages</h4>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <Badge key={skill} variant="outline" className="border-vscode-blue text-vscode-blue">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-vscode-green mb-3 font-semibold">Technologies & Frameworks</h4>
              <div className="flex flex-wrap gap-2">
                {skills.technologies.map((skill) => (
                  <Badge key={skill} variant="outline" className="border-vscode-green text-vscode-green">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-vscode-purple mb-3 font-semibold">Specializations</h4>
              <div className="flex flex-wrap gap-2">
                {skills.specializations.map((skill) => (
                  <Badge key={skill} variant="outline" className="border-vscode-purple text-vscode-purple">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center text-vscode-blue">
              <Award className="mr-2" size={20} />
              <span className="text-vscode-purple">achievements</span>
              <span className="text-foreground">: [</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Brain className="text-vscode-yellow mt-1" size={16} />
                <div>
                  <h4 className="font-semibold text-vscode-green">LUDDY HACKATHON 2025 - Winner</h4>
                  <p className="text-foreground/80 text-sm">
                    Built an AI agent for meetings that transcribes meetings, generates summaries, 
                    extracts action items and performs sentiment analysis using OpenAI Whisper and GPT models
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Code className="text-vscode-blue mt-1" size={16} />
                <div>
                  <h4 className="font-semibold text-vscode-green">Performance Optimization Expert</h4>
                  <p className="text-foreground/80 text-sm">
                    Achieved 85% reduction in testing time and 33% increase in test coverage through 
                    innovative script development and middleware optimization
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Closing */}
        <div className="text-vscode-green text-sm">
          <span>{`} // End of About class`}</span>
        </div>
      </div>
    </div>
  );
};

export default About;