import { PropsWithChildren, useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import type { Engine, ISourceOptions } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { particleLayout } from './particle-layout';
import { useTheme } from '../theme';

export default function ParticleProvider({ children }: PropsWithChildren) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const { theme } = useTheme();

  const particleOptions: ISourceOptions = useMemo(
    () => particleLayout(theme),
    [theme]
  );
  return (
    <>
      {init && <Particles id="tsparticles" options={particleOptions} />}
      {children}
    </>
  );
}
