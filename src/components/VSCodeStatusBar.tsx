import { GitBranch, AlertCircle, CheckCircle, WifiOff } from 'lucide-react';

const VSCodeStatusBar = () => {
  return (
    <div className="bg-sidebar-primary text-sidebar-primary-foreground text-xs flex items-center justify-between px-4 py-1">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          <GitBranch size={12} />
          <span>main</span>
        </div>
        
        <div className="flex items-center space-x-1">
          <CheckCircle size={12} className="text-vscode-green" />
          <span>No issues</span>
        </div>
        
        <div className="flex items-center space-x-1">
          <span>TypeScript React</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <span>UTF-8</span>
        <span>LF</span>
        <span>JavaScript</span>
        <div className="flex items-center space-x-1">
          <span>Ln 42, Col 18</span>
        </div>
      </div>
    </div>
  );
};

export default VSCodeStatusBar;