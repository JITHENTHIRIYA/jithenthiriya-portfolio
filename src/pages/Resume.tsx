import { Download, MapPin, Mail, Phone, Github, Linkedin, Calendar, Building, GraduationCap, Award, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Resume = () => {
  const handleDownload = () => {
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
      {/* Header */}
      <div className="text-vscode-green text-sm mb-6">
        <span>// Professional resume - Download available</span>
      </div>

      <div className="space-y-6">
        {/* Header with download */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            <span className="text-vscode-purple">export default</span>{" "}
            <span className="text-vscode-yellow">Resume</span>
          </h1>
          <Button onClick={handleDownload} className="bg-vscode-blue hover:bg-vscode-blue/80 text-background">
            <Download size={16} className="mr-2" />
            Download PDF
          </Button>
        </div>

        {/* Personal Information */}
        <Card className="bg-card border-border">
          <CardContent className="pt-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-vscode-green mb-2">Jithenthiriya Coimbatore Kathirvel</h2>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-foreground/80">
                <div className="flex items-center">
                  <MapPin size={14} className="mr-1 text-vscode-orange" />
                  Seattle, WA
                </div>
                <div className="flex items-center">
                  <Phone size={14} className="mr-1 text-vscode-blue" />
                  930-904-0645
                </div>
                <div className="flex items-center">
                  <Mail size={14} className="mr-1 text-vscode-green" />
                  jicoim@iu.edu
                </div>
              </div>
              <div className="flex justify-center gap-4 mt-3">
                <a href="https://www.linkedin.com/in/jithenthiriya/" className="flex items-center text-vscode-blue hover:underline">
                  <Linkedin size={14} className="mr-1" />
                  LinkedIn
                </a>
                <a href="https://github.com/jithenthiriya" className="flex items-center text-foreground hover:underline">
                  <Github size={14} className="mr-1" />
                  GitHub
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center text-vscode-blue">
              <GraduationCap className="mr-2" size={20} />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-l-2 border-vscode-blue pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-vscode-green">Master of Science - Computer Science</h3>
                  <p className="text-vscode-blue">Indiana University</p>
                </div>
                <div className="text-right text-sm text-foreground/60">
                  <div>Bloomington, IN</div>
                  <div>August 2024 - May 2026</div>
                </div>
              </div>
              <p className="text-sm text-foreground/80">
                Applied Machine Learning, Applied Algorithms, Engineering Cloud Computing, Software Engineering, 
                Elements of Artificial Intelligence, Native Mobile App Development, Computer networks
              </p>
            </div>

            <div className="border-l-2 border-vscode-green pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-vscode-green">Bachelor of Engineering - Computer Science Engineering</h3>
                  <p className="text-vscode-blue">Anna University, Kumaraguru College of Technology</p>
                </div>
                <div className="text-right text-sm text-foreground/60">
                  <div>India</div>
                  <div>August 2019 - May 2023</div>
                </div>
              </div>
              <p className="text-sm text-foreground/80">
                Data Structures and Algorithms, Operating System, Computer Architecture Organization, Cloud Computing, Machine Learning
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center text-vscode-blue">
              <Building className="mr-2" size={20} />
              Experience
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border-l-2 border-vscode-blue pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-vscode-green">Software Engineer</h3>
                  <p className="text-vscode-blue">Bosch Global Software Technologies</p>
                </div>
                <div className="text-right text-sm text-foreground/60">
                  <div>India</div>
                  <div>Jul 2023 - Jul 2024</div>
                </div>
              </div>
              <ul className="text-sm text-foreground/80 space-y-1 mt-3">
                <li>• Built instrument cluster validation scripts to ensure compliance with ISO26262 vehicle safety standards, resulting in a 33% increase in test coverage and an 85% reduction in testing time.</li>
                <li>• Integrated Convolutional Neural Networks and Optical Character Recognition to enhance instrument cluster validation workflows, achieving a 40% reduction in vehicle feature testing costs.</li>
                <li>• Enhanced the inter-process communication middleware "iceoryx", reducing build time by 15% and boosting system performance.</li>
              </ul>
            </div>

            <div className="border-l-2 border-vscode-green pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-vscode-green">Software Engineer Intern</h3>
                  <p className="text-vscode-blue">Bosch Global Software Technologies</p>
                </div>
                <div className="text-right text-sm text-foreground/60">
                  <div>India</div>
                  <div>Sep 2022 - May 2023</div>
                </div>
              </div>
              <ul className="text-sm text-foreground/80 space-y-1 mt-3">
                <li>• Developed a real-time hand gesture recognition model using a 3D CNN-LSTM architecture, achieving 90.32% validation accuracy on dynamic gestures across 5 classes, by preprocessing 20bn-jester video data and training with progressive dataset augmentation.</li>
                <li>• Improved model robustness by experimenting with CNN, ResNeXt101 transfer learning, and MediaPipe pipelines, analyzing over 2 million gesture frames and identifying bottlenecks in temporal pattern detection and embedded deployment.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center text-vscode-blue">
              <Code className="mr-2" size={20} />
              Skills and Achievements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-vscode-orange mb-2">Programming Languages:</h4>
              <div className="flex flex-wrap gap-2">
                {['C++', 'Python', 'SQL', 'Kotlin', 'Swift', 'Django'].map((skill) => (
                  <Badge key={skill} variant="outline" className="border-vscode-blue text-vscode-blue">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-vscode-green mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {['AWS EC2', 'FastAPI', 'LangChain', 'React', 'TypeScript', 'Jetstream2 Cloud', 'MySQL', 'MongoDB', 'Git', 'Docker', 'Machine Learning', 'Optical Character Recognition', 'Convolutional Neural Networks', 'Android Development'].map((skill) => (
                  <Badge key={skill} variant="outline" className="border-vscode-green text-vscode-green">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="bg-secondary/20 border border-border/50 rounded p-3">
              <div className="flex items-center mb-2">
                <Award className="mr-2 text-vscode-yellow" size={16} />
                <span className="font-semibold text-vscode-yellow">Achievement:</span>
              </div>
              <p className="text-sm text-foreground/80">
                <strong>LUDDY HACKATHON 2025 - Winner</strong> Built an AI agent for meetings ( Built an AI-powered assistant that transcribes meetings, generates summaries, extracts action items and performs sentiment analysis using OpenAI Whisper and GPT models)
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Academic Projects */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center text-vscode-blue">
              Academic Projects
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="border-l-2 border-vscode-purple pl-4">
                <h4 className="font-semibold text-vscode-green">MeetMind AI - Luddy Hackathon 2025 Winner</h4>
                <p className="text-sm text-foreground/80 mt-1">
                  Built an AI-powered assistant that transcribes meetings, generates summaries, extracts action items and performs sentiment analysis using OpenAI Whisper and GPT models
                </p>
              </div>

              <div className="border-l-2 border-vscode-orange pl-4">
                <h4 className="font-semibold text-vscode-green">Expense Tracker App - iOS (Swift)</h4>
                <p className="text-sm text-foreground/80 mt-1">
                  Built a SwiftUI app to help users track expenses and set budget limits, reducing overspending with local notifications triggered in under 3 seconds. Engineered dynamic expense visualizations using Apple's Charts framework, improving data insight efficiency by 60% via real-time category grouping. Enabled persistent data storage and retrieval using Core Data, maintaining 100% data integrity across app launches.
                </p>
              </div>

              <div className="border-l-2 border-vscode-red pl-4">
                <h4 className="font-semibold text-vscode-green">Recipe Manager - Android App (Kotlin)</h4>
                <p className="text-sm text-foreground/80 mt-1">
                  Implemented offline recipe storage and search using Room DB, reducing recipe retrieval time by 40%. Added category filters and clean UI to improve usability and navigation clarity.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Publications */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center text-vscode-blue">
              Publications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="border-l-2 border-vscode-purple pl-4">
              <h4 className="font-semibold text-vscode-green">HOG and Cloud computing based Face Recognition for Attendance Monitoring</h4>
              <p className="text-sm text-foreground/80 mt-1">
                Co-authored a real-time face recognition system for attendance monitoring, achieving over 90% accuracy by integrating HOG and CNN techniques with Google Cloud Firestore and deploying the frontend using Flutter across platforms.
              </p>
            </div>

            <div className="border-l-2 border-vscode-yellow pl-4">
              <h4 className="font-semibold text-vscode-green">Low to High Dynamic Image Reconstruction</h4>
              <p className="text-sm text-foreground/80 mt-1">
                Co-developed a deep learning based image reconstruction model that converted LDR to HDR using GAN and CNN architecture, enhancing image brightness and exposure accuracy by over 35% across three advanced tone-mapping methods (Drago, Reinhard, Mantiuk)
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Resume;