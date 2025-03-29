import { useEffect, useRef } from 'react'
import * as THREE from 'three';
import { realSphericalHarmonic } from '../calcs';

export function SphericalHarmonicMesh({ l, m, children }) {
  const ref = useRef();

  useEffect(() => {
    const geometry = new THREE.SphereGeometry(1, 64, 64);
    const position = geometry.attributes.position;

    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i);
      const y = position.getY(i);
      const z = position.getZ(i);

      const r = Math.sqrt(x * x + y * y + z * z);
      const theta = Math.acos(z / r);
      const phi = Math.atan2(y, x);

      const scale = Math.abs(realSphericalHarmonic(l, m, theta, phi));

      position.setXYZ(i, x * scale, y * scale, z * scale);
    }

    position.needsUpdate = true;
    ref.current.geometry = geometry;
  }, [l, m]);

  return (
    <mesh ref={ref}>
      {children}
    </mesh>
  );
}