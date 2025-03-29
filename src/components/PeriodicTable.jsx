// PeriodicTable.js
import { useState } from 'react';
import './PeriodicTable.css';
import { elements } from '../elements.js';

import RadialPlot from './RadialPlot.jsx';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { SphericalHarmonicMesh } from './SphericalHarmonicMesh.jsx'

export default () => {
    const [selectedElements, setSelectedElements] = useState([null, null]);
  
  return (
    <div className="periodic-table">
      {elements.map((element) => (
        <div
          key={element.number}
          className={`element element-${element.number} ${selectedElements[0] === element ? 'highlight1' : ''} ${selectedElements[1] === element ? 'highlight2' : ''}`}
          style={{
            gridColumn: element.column,
            gridRow: element.row,
            cursor: 'pointer',
          }}
          onClick={() => {
            selectedElements.pop();
            selectedElements.unshift(element);
            setSelectedElements(selectedElements.slice());
        }}
        >
          <div className="number">{element.number}</div>
          <div className="symbol">{element.symbol}</div>
          <div className="ionization">{element.ionizationEnergy && `${element.ionizationEnergy} eV` }</div>
        </div>
      ))}
      {(selectedElements[0] || selectedElements[1]) && 
      <>
      <div className="text" style={{
        position: 'absolute',
        top: '74px',
        left: '600px',
        width: '100px',
        textAlign: 'center',
        fontSize: '12px',
    }}>r²ψ²(r)
    </div>
      <div className="text" style={{
        position: 'absolute',
        top: '245px',
        left: '600px',
        width: '100px',
        textAlign: 'center',
        fontSize: '12px',
    }}>[r/a₀]
    </div>
    </>
      }
      {(selectedElements[0] || selectedElements[1]) && 
      <RadialPlot params={selectedElements} style={{
                width: '600px',
                height: '200px',
                position: 'absolute',
                left: '140px',
                top: '60px',
                zIndex: '-1',
            }}/>
        }
        {!selectedElements[0] && <div params={selectedElements} className="text" style={{
                position: 'absolute',
                left: '340px',
                top: '160px',
                textAlign: 'center',
                zIndex: '-1',
            }}>Select 2 elements</div>}
      <div className="sequence" style={{top: 0*75+112,left: 20, width: 105}}><span>1s</span></div>
      <div className="sequence" style={{top: 1*75+112,left: 20, width: 105}}><span>2s</span></div>
      <div className="sequence" style={{top: 2*75+112,left: 20, width: 105}}><span>3s</span></div>
      <div className="sequence" style={{top: 3*75+112,left: 20, width: 105}}><span>4s</span></div>
      <div className="sequence" style={{top: 4*75+112,left: 20, width: 105}}><span>5s</span></div>
      <div className="sequence" style={{top: 5*75+112,left: 20, width: 105}}><span>6s</span></div>
      <div className="sequence" style={{top: 6*75+112,left: 20, width: 105}}><span>7s</span></div>
      
      <div className="sequence" style={{top: 3*75+112,left: 130, width: 545}}><span>3d</span></div>
      <div className="sequence" style={{top: 4*75+112,left: 130, width: 545}}><span>4d</span></div>
      <div className="sequence" style={{top: 5*75+112,left: 130, width: 545}}><span>5d</span></div>
      <div className="sequence" style={{top: 6*75+112,left: 130, width: 545}}><span>6d</span></div>

      <div className="sequence" style={{top: 1*75+112,left: 680, width: 325}}><span>2p</span></div>
      <div className="sequence" style={{top: 2*75+112,left: 680, width: 325}}><span>3p</span></div>
      <div className="sequence" style={{top: 3*75+112,left: 680, width: 325}}><span>4p</span></div>
      <div className="sequence" style={{top: 4*75+112,left: 680, width: 325}}><span>5p</span></div>
      <div className="sequence" style={{top: 5*75+112,left: 680, width: 325}}><span>6p</span></div>
      <div className="sequence" style={{top: 6*75+112,left: 680, width: 325}}><span>7p</span></div>

      <div className="sequence" style={{top: 7*75+112+20,left: 240, width: 765}}><span>4f</span></div>
      <div className="sequence" style={{top: 8*75+112+20,left: 240, width: 765}}><span>5f</span></div>
      {selectedElements[0] && <>
        <Canvas camera={{ position: [-0., -3, 1], fov: 30 }} style={{
            position: 'absolute',
            top: '10px',
            left: '800px',
            width: '100px',
            height: '100px',
        }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[0, -3, 0]} intensity={20} />
        <pointLight position={[0, 3, 0]} intensity={20} />
        <SphericalHarmonicMesh l={selectedElements[0].l} m={selectedElements[0].m}>
            <meshStandardMaterial color='#28f'/>
        </SphericalHarmonicMesh>
        <OrbitControls />
        </Canvas>
        <div className="text" style={{
            position: 'absolute',
            top: '110px',
            left: '800px',
            width: '100px',
            textAlign: 'center',
            fontSize: '12px',
        }}>(ℓ,m) = ({selectedElements[0].l},{selectedElements[0].m})</div>
        </>
    }   
          {selectedElements[1] && <>
        <Canvas camera={{ position: [-0., -3, 1], fov: 30 }} style={{
            position: 'absolute',
            top: '10px',
            left: '900px',
            width: '100px',
            height: '100px',
        }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[0, -3, 0]} intensity={20} />
        <pointLight position={[0, 3, 0]} intensity={20} />
        <SphericalHarmonicMesh l={selectedElements[1].l} m={selectedElements[1].m}>
            <meshStandardMaterial color='#f80'/>
        </SphericalHarmonicMesh>
        <OrbitControls />
        </Canvas>
        <div className="text" style={{
            position: 'absolute',
            top: '110px',
            left: '900px',
            width: '100px',
            textAlign: 'center',
            fontSize: '12px',
        }}>(ℓ,m) = ({selectedElements[1].l},{selectedElements[1].m})</div>
        </>
    }   

    </div>
  );
};