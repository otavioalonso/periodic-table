# Periodic Table

A web-based interactive periodic table built with React, Plotly and Three.js.

Live demo: [elements.otavioalves.com](https://elements.otavioalves.com)

It shows first ionization energies and, for each pair of selected elements, it uses the Aufbau principle and maximal multiplicity to determine the last orbital to be filled and display its (Hydrogen-corresponding):

- Radial probability function $r^2\left|\Psi_r(r)\right|^2$
- Angular wavefunction (spherical harmonics) $Y^m_\ell(\theta, \phi)$

Note all the approximations made.

## Installation

```sh
git clone https://github.com/otavioalonso/periodic-table.git
cd periodic-table
npm install
npm run dev
```
