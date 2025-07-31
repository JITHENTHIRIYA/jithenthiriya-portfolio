import { ReactNode } from 'react';
import VSCodeSidebar from './VSCodeSidebar';
import VSCodeHeader from './VSCodeHeader';
import VSCodeStatusBar from './VSCodeStatusBar';

interface VSCodeLayoutProps {
  children: ReactNode;
}

const VSCodeLayout = ({ children }: VSCodeLayoutProps) => {
  return (
    <div className="h-screen flex flex-col bg-background text-foreground font-mono">
      <VSCodeHeader />
      
      <div className="flex flex-1 overflow-hidden">
        <VSCodeSidebar />
        
        <main className="flex-1 overflow-auto bg-background">
          <div className="h-full">
            {children}
          </div>
        </main>
      </div>
      
      <VSCodeStatusBar />
    </div>
  );
};

export default VSCodeLayout;