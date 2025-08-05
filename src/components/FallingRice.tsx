import { useEffect, useState } from 'react';

interface RiceGrain {
  id: number;
  left: number;
  delay: number;
  duration: number;
}

const FallingRice = () => {
  const [riceGrains, setRiceGrains] = useState<RiceGrain[]>([]);

  useEffect(() => {
    const grains: RiceGrain[] = [];
    for (let i = 0; i < 20; i++) {
      grains.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 4,
      });
    }
    setRiceGrains(grains);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {riceGrains.map((grain) => (
        <div
          key={grain.id}
          className="absolute w-1 h-3 bg-rice-white rounded-full opacity-30 animate-fall"
          style={{
            left: `${grain.left}%`,
            animationDelay: `${grain.delay}s`,
            animationDuration: `${grain.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FallingRice;