import { Button } from "./ui/button"; // Adjusted the path to point to the correct location
import { motion } from "motion/react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(var(--color-chart-1)/0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(var(--color-chart-1)/0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-60">
        {/* Floating geometric shapes with subtle animations */}
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 border-2 border-chart-1/40 rotate-45"
          animate={{ 
            rotate: [45, 50, 45],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-40 right-32 w-24 h-24 border-2 border-chart-2/40 rotate-12"
          animate={{ 
            rotate: [12, 18, 12],
            y: [0, -10, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-chart-3/40 -rotate-12"
          animate={{ 
            rotate: [-12, -6, -12],
            x: [0, 5, 0]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Additional floating elements */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-20 h-20 border border-chart-4/30 rounded-full"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-chart-5/25 rounded-full"
          animate={{ 
            y: [0, -15, 0],
            x: [0, 8, 0]
          }}
          transition={{ 
            duration: 9, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <motion.div 
          className="absolute top-3/4 right-1/3 w-8 h-8 bg-chart-1/20 rotate-45"
          animate={{ 
            rotate: [45, 135, 45],
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1.5
          }}
        />
        
        {/* Additional colorful elements */}
        <motion.div 
          className="absolute top-32 right-20 w-6 h-6 bg-chart-2/30 rounded-full"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
        />
        <motion.div 
          className="absolute bottom-32 left-16 w-14 h-14 border border-chart-3/35 rotate-45"
          animate={{ 
            rotate: [45, 90, 45],
            y: [0, -8, 0]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2.5
          }}
        />

        {/* New geometric elements */}
        <motion.div 
          className="absolute top-16 left-1/2 w-4 h-4 bg-chart-4/25"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
          animate={{ 
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 4
          }}
        />
        
        <motion.div 
          className="absolute bottom-16 right-1/4 w-10 h-10 border border-chart-5/30"
          style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
          animate={{ 
            rotate: [0, 45, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 5
          }}
        />

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className={`absolute w-1 h-1 bg-chart-${(i % 5) + 1}/20 rounded-full`}
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${10 + (i * 8)}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(i) * 10, 0],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 6 + (i * 0.5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8
            }}
          />
        ))}

        {/* Abstract lines */}
        <motion.div 
          className="absolute top-1/3 left-8 w-32 h-0.5 bg-gradient-to-r from-chart-1/30 to-transparent"
          animate={{ 
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 6
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/3 right-8 w-24 h-0.5 bg-gradient-to-l from-chart-3/30 to-transparent"
          animate={{ 
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 7
          }}
        />

        {/* Complex geometric shapes */}
        <motion.div 
          className="absolute top-2/3 left-12 w-6 h-6"
          animate={{ 
            rotate: [0, 120, 240, 360],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full border border-chart-2/25" style={{ 
            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
          }} />
        </motion.div>

        <motion.div 
          className="absolute top-1/6 right-12 w-8 h-8 border border-chart-4/25"
          style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
          animate={{ 
            rotate: [0, -60, -120, -180, -240, -300, -360],
            scale: [1, 0.8, 1.2, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      {/* Enhanced gradient overlay animation */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-tr from-chart-1/5 via-transparent to-chart-2/5"
        animate={{ 
          opacity: [0, 0.6, 0]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />

      {/* Shadowy Clockwise Graphics */}
      <div className="absolute inset-0 opacity-70">
        {/* Large shadow circle rotating clockwise */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.08) 40%, transparent 70%)`,
            boxShadow: `
              0 0 60px rgba(0,0,0,0.15),
              inset 0 0 80px rgba(0,0,0,0.08)
            `
          }}
          animate={{ 
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {/* Inner rotating element for more visible rotation */}
          <div 
            className="absolute top-4 left-4 w-8 h-8 bg-black/20 rounded-full"
            style={{ filter: 'blur(2px)' }}
          />
        </motion.div>

        {/* Medium shadow spiral */}
        <motion.div 
          className="absolute bottom-1/3 right-1/3 w-32 h-32"
          style={{
            background: `conic-gradient(from 0deg, transparent 0%, rgba(0,0,0,0.12) 25%, transparent 50%, rgba(0,0,0,0.08) 75%, transparent 100%)`,
            borderRadius: '50%',
            boxShadow: '0 0 40px rgba(0,0,0,0.12)'
          }}
          animate={{ 
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {/* Visible marker for rotation */}
          <div 
            className="absolute top-2 left-1/2 w-2 h-8 bg-black/30 rounded-full transform -translate-x-1/2"
            style={{ filter: 'blur(1px)' }}
          />
        </motion.div>

        {/* Small shadow elements */}
        <motion.div 
          className="absolute top-1/2 right-1/4 w-16 h-16"
          style={{
            background: `radial-gradient(ellipse at center, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)`,
            borderRadius: '50%'
          }}
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          <div className="absolute top-1 right-1 w-3 h-3 bg-black/40 rounded-full" />
        </motion.div>

        {/* Geometric shadow shapes */}
        <motion.div 
          className="absolute top-16 right-16 w-24 h-24"
          style={{
            background: `linear-gradient(45deg, rgba(0,0,0,0.15) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)`,
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            filter: 'blur(1px)'
          }}
          animate={{ 
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />

        {/* Abstract shadow arcs */}
        <motion.div 
          className="absolute bottom-1/4 left-16 w-40 h-40"
          style={{
            background: `conic-gradient(from 45deg, rgba(0,0,0,0.1) 0%, transparent 30%, rgba(0,0,0,0.15) 60%, transparent 90%)`,
            borderRadius: '50%',
            filter: 'blur(2px)'
          }}
          animate={{ 
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {/* Rotation indicator */}
          <div 
            className="absolute top-4 left-1/2 w-4 h-4 bg-black/25 rounded-full transform -translate-x-1/2"
            style={{ filter: 'blur(1px)' }}
          />
        </motion.div>

        {/* Rotating shadow segments */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`shadow-segment-${i}`}
            className="absolute"
            style={{
              top: `${30 + (i * 8)}%`,
              left: `${20 + (i * 12)}%`,
              width: '24px',
              height: '24px',
              background: `radial-gradient(circle, rgba(0,0,0,${0.12 - i * 0.015}) 0%, transparent 70%)`,
              borderRadius: '50%',
              filter: 'blur(1px)'
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.4, 1],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 15 + (i * 2),
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.3
            }}
          />
        ))}

        {/* Large rotating shadow vortex */}
        <motion.div 
          className="absolute top-1/3 right-1/5 w-60 h-60"
          style={{
            background: `conic-gradient(from 0deg, 
              transparent 0%, 
              rgba(0,0,0,0.06) 10%, 
              rgba(0,0,0,0.12) 20%, 
              rgba(0,0,0,0.08) 30%, 
              transparent 40%,
              rgba(0,0,0,0.04) 60%,
              rgba(0,0,0,0.1) 80%,
              transparent 100%)`,
            borderRadius: '50%',
            filter: 'blur(3px)'
          }}
          animate={{ 
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />

        {/* Overlapping shadow rings */}
        <motion.div 
          className="absolute bottom-16 left-1/3 w-28 h-28"
          style={{
            background: `radial-gradient(circle, transparent 30%, rgba(0,0,0,0.1) 35%, rgba(0,0,0,0.15) 40%, transparent 45%)`,
            borderRadius: '50%'
          }}
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          <div className="absolute top-2 left-2 w-4 h-4 bg-black/20 rounded-full" />
        </motion.div>

        {/* Additional visible rotating elements */}
        <motion.div 
          className="absolute top-1/6 left-1/2 w-20 h-20"
          style={{
            background: `conic-gradient(from 90deg, rgba(0,0,0,0.1) 0%, transparent 25%, rgba(0,0,0,0.08) 50%, transparent 75%)`,
            borderRadius: '50%',
            filter: 'blur(1px)'
          }}
          animate={{ 
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          <div className="absolute top-1 left-1/2 w-2 h-6 bg-black/30 rounded-full transform -translate-x-1/2" />
        </motion.div>

        <motion.div 
          className="absolute bottom-1/6 right-1/2 w-36 h-36"
          style={{
            background: `conic-gradient(from 180deg, 
              rgba(0,0,0,0.08) 0%, 
              transparent 20%, 
              rgba(0,0,0,0.12) 40%, 
              transparent 60%, 
              rgba(0,0,0,0.06) 80%, 
              transparent 100%)`,
            borderRadius: '50%',
            filter: 'blur(2px)'
          }}
          animate={{ 
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 22, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      </div>

      <div className="container px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="mb-6 text-4xl md:text-6xl lg:text-7xl tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Creative{" "}
            <span className="relative">
              Developer
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-primary"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 1 }}
              />
            </span>
          </motion.h1>

          <motion.p 
            className="mx-auto mb-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Crafting digital experiences that blend{" "}
            <span className="text-foreground font-medium">innovation</span> with{" "}
            <span className="text-foreground font-medium">elegance</span>.
            Building the future, one line of code at a time.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              className="group relative overflow-hidden px-8 py-3"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10">View My Work</span>
              <motion.div
                className="absolute inset-0 bg-white/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="group px-8 py-3"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </motion.div>

          <motion.div 
            className="flex justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border hover:bg-accent transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border hover:bg-accent transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="mailto:ali_ndoye@yahoo.com"
              className="p-2 rounded-full border border-border hover:bg-accent transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}