import { Link, useLocation } from 'react-router-dom';
import { X, Minus, Square, Circle } from 'lucide-react';
import { cn } from '@/lib/utils';

const tabs = [
  { label: 'index.tsx', path: '/', icon: '🏠' },
  { label: 'about.tsx', path: '/about', icon: '👨‍💻' },
  { label: 'projects.tsx', path: '/projects', icon: '💼' },
  { label: 'contact.tsx', path: '/contact', icon: '📧' },
  { label: 'resume.tsx', path: '/resume', icon: '📄' },
];

const VSCodeHeader = () => {
  const location = useLocation();

  return (
    <div className="bg-sidebar border-b border-sidebar-border">
      {/* Title Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-sidebar-primary">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-2">
            <button className="relative group">
              <Circle size={12} className="text-vscode-red fill-current" />
              <span className="absolute inset-0 flex items-center justify-center text-[8px] text-red-800 font-bold">
                ×
              </span>
            </button>
            <button className="relative group">
              <Circle size={12} className="text-vscode-yellow fill-current" />
              <span className="absolute inset-0 flex items-center justify-center text-[8px] text-yellow-800 font-bold">
                −
              </span>
            </button>
            <button className="relative group">
              <Circle size={12} className="text-vscode-green fill-current" />
              <span className="absolute inset-0 flex items-center justify-center text-[8px] text-green-800 font-bold">
                □
              </span>
            </button>
          </div>
        </div>
        
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <span className="text-sm text-sidebar-primary-foreground">
            Jithenthiriya Coimbatore Kathirvel - Portfolio
          </span>
        </div>
        
        <div className="w-16"></div>
      </div>

      {/* Tab Bar */}
      <div className="flex overflow-x-auto">
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path;
          return (
            <Link
              key={tab.path}
              to={tab.path}
              className={cn(
                "flex items-center px-4 py-2 text-sm border-r border-sidebar-border min-w-fit group relative",
                isActive 
                  ? "bg-background text-foreground border-b-2 border-b-primary" 
                  : "bg-sidebar text-sidebar-foreground hover:bg-sidebar-accent"
              )}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
              {isActive && (
                <div className="w-2 h-2 bg-vscode-green rounded-full ml-2"></div>
              )}
              <button className="ml-2 opacity-0 group-hover:opacity-100 hover:bg-sidebar-border rounded p-0.5">
                <X size={12} />
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default VSCodeHeader;