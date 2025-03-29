# Periodic Table

A web-based interactive periodic table built with React, Plotly and Three.js.

Live demo: [elements.otavioalves.com](https://elements.otavioalves.com)

It shows first ionization energies and, for each pair of selected element:
- Radial probability functions  of the last filled orbital,

$$r^2\left|\Psi_r(r)\right|^2$$

- Corresponding spherical harmonics

$$Y^m_\ell(\theta, \phi)$$

## Installation

```sh
git clone https://github.com/otavioalonso/periodic-table.git
cd periodic-table
npm install
npm run dev
```
