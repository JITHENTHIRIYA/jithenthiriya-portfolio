import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Briefcase, Mail, FileText, FolderOpen, GitBranch, Search, Settings, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const sidebarItems = [
  { icon: Home, label: 'index.tsx', path: '/', type: 'file' },
  { icon: User, label: 'about.tsx', path: '/about', type: 'file' },
  { icon: Briefcase, label: 'projects.tsx', path: '/projects', type: 'file' },
  { icon: Mail, label: 'contact.tsx', path: '/contact', type: 'file' },
  { icon: FileText, label: 'resume.tsx', path: '/resume', type: 'file' },
];

const VSCodeSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div className={cn(
      "flex flex-col bg-sidebar border-r border-sidebar-border transition-all duration-300",
      collapsed ? "w-12" : "w-64"
    )}>
      {/* Activity Bar */}
      <div className="flex">
        <div className="w-12 bg-sidebar-primary flex flex-col items-center py-4 space-y-4">
          <button 
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 text-sidebar-primary-foreground hover:bg-sidebar-primary/20 rounded"
          >
            <FolderOpen size={20} />
          </button>
          <Search size={20} className="text-sidebar-primary-foreground/60" />
          <GitBranch size={20} className="text-sidebar-primary-foreground/60" />
          <Settings size={20} className="text-sidebar-primary-foreground/60" />
        </div>

        {/* File Explorer */}
        {!collapsed && (
          <div className="flex-1 p-2">
            <div className="flex items-center mb-4 text-sm font-medium text-sidebar-foreground">
              <ChevronRight size={16} className="mr-1" />
              PORTFOLIO
            </div>
            
            <div className="space-y-1">
              {sidebarItems.map((item) => {
                const isActive = location.pathname === item.path;
                const Icon = item.icon;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "flex items-center px-2 py-1 text-sm rounded hover:bg-sidebar-accent transition-colors",
                      isActive 
                        ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                        : "text-sidebar-foreground/80 hover:text-sidebar-foreground"
                    )}
                  >
                    <Icon size={16} className="mr-2 text-vscode-blue" />
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-sidebar-border">
              <div className="text-xs text-sidebar-foreground/60 mb-2">OPEN EDITORS</div>
              {sidebarItems
                .filter(item => location.pathname === item.path)
                .map((item) => (
                  <div key={item.path} className="flex items-center px-2 py-1 text-sm text-sidebar-foreground">
                    <div className="w-2 h-2 bg-vscode-green rounded-full mr-2"></div>
                    {item.label}
                  </div>
                ))
              }
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VSCodeSidebar;