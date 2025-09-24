"use client";
import { useEffect, useState, useCallback } from "react";
import { 
  Loader2, 
  Zap, 
  Diamond, 
  Hexagon, 
  Star, 
  Sparkles, 
  Crown, 
  Gem,
  Home,
  Building,
  TrendingUp,
  MapPin
} from "lucide-react";
import { usePathname } from "next/navigation";

type LoaderVariant = 'spinner' | 'pulse' | 'bars' | 'dots' | 'progress' | 'skeleton' | 'orbit' | 'wave' | 'matrix';
type LoaderTheme = 'light' | 'dark' | 'brand' | 'minimal' | 'luxury' | 'neon' | 'corporate';
type LoaderSymbol = 'diamond' | 'hexagon' | 'star' | 'crown' | 'gem' | 'sparkles' | 'home' | 'building' | 'trend' | 'zap';

interface PageLoaderProps {
  variant?: LoaderVariant;
  theme?: LoaderTheme;
  symbol?: LoaderSymbol;
  minDuration?: number;
  maxDuration?: number;
  showProgress?: boolean;
  showMessage?: boolean;
  customMessage?: string;
  brandName?: string;
  color?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  disableBlur?: boolean;
  onLoadingChange?: (loading: boolean) => void;
}

export default function PageLoader({
  variant = 'spinner',
  theme = 'brand',
  symbol = 'diamond',
  minDuration = 500,
  maxDuration = 2000,
  showProgress = true,
  showMessage = true,
  customMessage,
  brandName = 'RealEstatePro',
  color = 'emerald',
  size = 'lg',
  disableBlur = false,
  onLoadingChange
}: PageLoaderProps) {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState('Loading...');
  const [fadeOut, setFadeOut] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);
  const pathname = usePathname();

  // Enhanced loading messages for different stages
  const loadingMessages = [
    'Initializing experience...',
    'Loading premium content...',
    'Preparing interface...',
    'Optimizing performance...',
    'Finalizing details...',
    'Almost ready...'
  ];

  // Enhanced theme configurations
  const themeConfig = {
    light: {
      background: 'bg-white/96 backdrop-blur-xl',
      text: 'text-gray-800',
      accent: `text-${color}-600`,
      spinner: `text-${color}-600`,
      glow: 'drop-shadow-lg',
      overlay: 'bg-gradient-to-br from-white/50 to-gray-100/50'
    },
    dark: {
      background: 'bg-gray-950/96 backdrop-blur-xl',
      text: 'text-gray-100',
      accent: `text-${color}-400`,
      spinner: `text-${color}-400`,
      glow: `drop-shadow-[0_0_15px_rgb(${color === 'emerald' ? '16,185,129' : '59,130,246'},0.5)]`,
      overlay: 'bg-gradient-to-br from-gray-900/50 to-black/50'
    },
    brand: {
      background: 'bg-gradient-to-br from-slate-950/98 via-gray-900/98 to-slate-800/98 backdrop-blur-xl',
      text: 'text-white',
      accent: `text-${color}-300`,
      spinner: `text-${color}-400`,
      glow: `drop-shadow-[0_0_20px_rgb(${color === 'emerald' ? '52,211,153' : '96,165,250'},0.6)]`,
      overlay: 'bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10'
    },
    minimal: {
      background: 'bg-white/92 backdrop-blur-sm',
      text: 'text-gray-600',
      accent: `text-${color}-500`,
      spinner: `text-${color}-500`,
      glow: 'drop-shadow-sm',
      overlay: 'bg-gradient-to-br from-gray-50/30 to-white/30'
    },
    luxury: {
      background: 'bg-gradient-to-br from-amber-950/95 via-yellow-900/95 to-orange-950/95 backdrop-blur-xl',
      text: 'text-amber-50',
      accent: 'text-yellow-300',
      spinner: 'text-amber-400',
      glow: 'drop-shadow-[0_0_25px_rgb(251,191,36,0.7)]',
      overlay: 'bg-gradient-to-br from-amber-400/20 via-yellow-500/20 to-orange-500/20'
    },
    neon: {
      background: 'bg-black/98 backdrop-blur-xl',
      text: 'text-cyan-100',
      accent: 'text-cyan-300',
      spinner: 'text-cyan-400',
      glow: 'drop-shadow-[0_0_30px_rgb(34,211,238,0.8)] filter brightness-110',
      overlay: 'bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20'
    },
    corporate: {
      background: 'bg-gradient-to-br from-blue-950/96 via-slate-900/96 to-gray-950/96 backdrop-blur-xl',
      text: 'text-blue-50',
      accent: 'text-blue-300',
      spinner: 'text-blue-400',
      glow: 'drop-shadow-[0_0_20px_rgb(59,130,246,0.5)]',
      overlay: 'bg-gradient-to-br from-blue-500/15 via-indigo-500/15 to-slate-500/15'
    }
  };

  // Enhanced size configurations
  const sizeConfig = {
    sm: { spinner: 'w-10 h-10', text: 'text-sm', container: 'gap-4', symbol: 'w-6 h-6' },
    md: { spinner: 'w-16 h-16', text: 'text-base', container: 'gap-5', symbol: 'w-8 h-8' },
    lg: { spinner: 'w-24 h-24', text: 'text-lg', container: 'gap-6', symbol: 'w-12 h-12' },
    xl: { spinner: 'w-32 h-32', text: 'text-xl', container: 'gap-8', symbol: 'w-16 h-16' }
  };

  const currentTheme = themeConfig[theme];
  const currentSize = sizeConfig[size];

  // Symbol components mapping
  const getSymbolComponent = () => {
    const symbolMap = {
      diamond: Diamond,
      hexagon: Hexagon,
      star: Star,
      crown: Crown,
      gem: Gem,
      sparkles: Sparkles,
      home: Home,
      building: Building,
      trend: TrendingUp,
      zap: Zap
    };
    return symbolMap[symbol] || Diamond;
  };

  // Enhanced progress simulation
  const simulateProgress = useCallback(() => {
    let currentProgress = 0;
    const duration = minDuration + Math.random() * (maxDuration - minDuration);
    const interval = duration / 120; // More granular updates
    let messageIndex = 0;
    let phase = 0;

    const progressInterval = setInterval(() => {
      // Variable speed progression
      const speed = currentProgress < 30 ? 2 : currentProgress < 70 ? 1.5 : 0.8;
      currentProgress += Math.random() * speed + 0.5;
      
      // Update animation phase
      phase = (phase + 1) % 360;
      setAnimationPhase(phase);
      
      if (currentProgress > 100) {
        currentProgress = 100;
        clearInterval(progressInterval);
        
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => {
            setLoading(false);
            setProgress(0);
            setFadeOut(false);
            setAnimationPhase(0);
            onLoadingChange?.(false);
          }, 400);
        }, 300);
        return;
      }

      setProgress(currentProgress);
      
      const newMessageIndex = Math.floor((currentProgress / 100) * loadingMessages.length);
      if (newMessageIndex > messageIndex && newMessageIndex < loadingMessages.length) {
        messageIndex = newMessageIndex;
        setLoadingMessage(customMessage || loadingMessages[messageIndex]);
      }
    }, interval);

    return () => clearInterval(progressInterval);
  }, [minDuration, maxDuration, customMessage, onLoadingChange]);

  useEffect(() => {
    setLoading(true);
    setProgress(0);
    setFadeOut(false);
    setAnimationPhase(0);
    onLoadingChange?.(true);
    
    const cleanup = simulateProgress();
    return cleanup;
  }, [pathname, simulateProgress, onLoadingChange]);

  // Enhanced loader variants
  const renderLoader = () => {
    const SymbolComponent = getSymbolComponent();
  const baseClasses = `${currentSize.spinner} ${currentTheme.spinner} ${currentTheme.glow}`;
  const symbolClasses = `${currentSize.symbol} ${currentTheme.spinner}`;
    
    switch (variant) {
      case 'orbit':
        return (
          <div className="relative">
            <div className={`${baseClasses} animate-spin-slow`}>
              <SymbolComponent className="w-full h-full" strokeWidth={1.5} />
            </div>
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s' }}>
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-current opacity-60"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) rotate(${angle + animationPhase}deg) translateY(-${currentSize.spinner.includes('w-10') ? '20px' : currentSize.spinner.includes('w-16') ? '32px' : currentSize.spinner.includes('w-24') ? '48px' : '64px'})`,
                    animationDelay: `${i * 0.1}s`
                  }}
                />
              ))}
            </div>
          </div>
        );
        
      case 'wave':
        return (
          <div className="flex items-end gap-1">
            {Array.from({ length: 7 }, (_, i) => (
              <div
                key={i}
                className={`bg-current ${currentTheme.spinner} animate-wave`}
                style={{
                  width: size === 'sm' ? '4px' : size === 'md' ? '6px' : size === 'lg' ? '8px' : '10px',
                  height: `${20 + Math.sin((animationPhase + i * 30) * Math.PI / 180) * 15}px`,
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>
        );
        
      case 'matrix':
        return (
          <div className="relative">
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 9 }, (_, i) => (
                <div
                  key={i}
                  className={`w-4 h-4 bg-current ${currentTheme.spinner} animate-pulse`}
                  style={{
                    opacity: Math.sin((animationPhase + i * 40) * Math.PI / 180) * 0.5 + 0.5,
                    animationDelay: `${i * 0.1}s`
                  }}
                />
              ))}
            </div>
          </div>
        );
        
      case 'pulse':
        return (
          <div className="relative">
            <div className={`${baseClasses} animate-pulse`}>
              <SymbolComponent className="w-full h-full" strokeWidth={1.5} />
            </div>
            <div className={`absolute inset-0 ${baseClasses} animate-ping opacity-30`}>
              <SymbolComponent className="w-full h-full" strokeWidth={1} />
            </div>
            <div className={`absolute inset-0 ${baseClasses} animate-ping opacity-20`} style={{ animationDelay: '0.5s' }}>
              <SymbolComponent className="w-full h-full" strokeWidth={0.5} />
            </div>
          </div>
        );
        
      case 'bars':
        return (
          <div className="flex items-end gap-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`w-3 bg-current ${currentTheme.spinner} animate-bounce rounded-t-full ${currentTheme.glow}`}
                style={{ 
                  height: `${20 + (i % 2) * 10}px`,
                  animationDelay: `${i * 0.15}s`
                }}
              />
            ))}
          </div>
        );
        
      case 'dots':
        return (
          <div className="flex gap-3">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`w-4 h-4 bg-current ${currentTheme.spinner} rounded-full animate-bounce ${currentTheme.glow}`}
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        );
        
      case 'progress':
        return (
          <div className="w-64 space-y-6">
            <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
              <div 
                className={`absolute left-0 top-0 h-full bg-gradient-to-r from-${color}-400 via-${color}-500 to-${color}-600 rounded-full transition-all duration-500 ease-out shadow-lg`}
                style={{ 
                  width: `${progress}%`,
                  boxShadow: `0 0 20px rgb(${color === 'emerald' ? '52,211,153' : '96,165,250'},0.5)`
                }}
              />
              <div 
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-white/30 to-transparent rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            {showProgress && (
              <div className={`text-center ${currentSize.text} ${currentTheme.text} font-mono tracking-wider`}>
                {Math.round(progress)}%
              </div>
            )}
          </div>
        );
        
      case 'skeleton':
        return (
          <div className="space-y-4 w-48">
            <div className="animate-pulse space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded flex-1"></div>
              </div>
              <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
              <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
            </div>
          </div>
        );
        
      default: // enhanced spinner
        return (
          <div className="relative">
            <div className={`${baseClasses} animate-spin`}>
              <SymbolComponent className="w-full h-full" strokeWidth={1.5} />
            </div>
            {theme === 'luxury' || theme === 'neon' && (
              <div className="absolute inset-0 -z-10">
                <div className={`${baseClasses} animate-ping opacity-25`}>
                  <SymbolComponent className="w-full h-full" strokeWidth={1} />
                </div>
              </div>
            )}
          </div>
        );
    }
  };

  if (!loading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[2000] flex items-center justify-center transition-all duration-500 ${
        fadeOut ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      } ${currentTheme.background}`}
      role="status"
      aria-live="polite"
      aria-label="Page loading"
    >
      {/* Animated background overlay */}
  <div className={`absolute inset-0 ${currentTheme.overlay} animate-pulse`} style={{ animationDuration: '3s' }} />
      
      {/* Floating particles for luxury/neon themes */}
      {(theme === 'luxury' || theme === 'neon') && (
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 ${theme === 'luxury' ? 'bg-amber-400' : 'bg-cyan-400'} rounded-full opacity-30 animate-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

  <div className={`relative flex flex-col items-center ${currentSize.container} z-10`}>
        
        {/* Enhanced brand presentation */}
        {(theme === 'brand' || theme === 'luxury' || theme === 'corporate') && (
          <div className="mb-6 text-center">
            <h1 className={`${
              currentSize.text === 'text-sm' ? 'text-2xl' : 
              currentSize.text === 'text-base' ? 'text-3xl' : 
              currentSize.text === 'text-lg' ? 'text-4xl' : 'text-5xl'
            } font-bold ${currentTheme.text} tracking-tight mb-2 ${currentTheme.glow}`}>
              {brandName}
            </h1>
            <div className={`w-16 h-0.5 mx-auto bg-gradient-to-r from-transparent via-${color}-400 to-transparent`} />
          </div>
        )}

        {/* Main loader */}
        <div className="relative">
          {renderLoader()}
        </div>

        {/* Enhanced loading message with better typography */}
        {showMessage && (
          <div className="text-center space-y-3 max-w-md">
            <p className={`${currentSize.text} font-medium ${currentTheme.text} animate-pulse tracking-wide`}>
              {loadingMessage}
            </p>
            
            {variant !== 'progress' && showProgress && (
              <div className="flex items-center justify-center gap-2">
                <div className={`text-sm ${currentTheme.accent} font-mono tracking-wider`}>
                  {Math.round(progress)}%
                </div>
                <div className="w-16 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r from-${color}-400 to-${color}-500 rounded-full transition-all duration-300`}
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Theme-specific decorative elements */}
      {theme === 'corporate' && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex gap-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`w-2 h-1 bg-blue-400 rounded-full animate-pulse`}
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes wave {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(1.5); }
        }
        .animate-wave {
          animation: wave 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}