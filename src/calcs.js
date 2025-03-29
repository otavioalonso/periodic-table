const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
const doubleFactorial = (n) => (n <= 0 ? 1 : n * doubleFactorial(n - 2));

function assocLegendreP(l, m, x) {
  if (m < 0) m = -m;

  if (l === m) {
    return Math.pow(-1, m) * doubleFactorial(2 * m - 1) * Math.pow(1 - x * x, m / 2);
  }

  if (l === m + 1) {
    return x * (2 * m + 1) * assocLegendreP(m, m, x);
  }

  return ((2 * l - 1) * x * assocLegendreP(l - 1, m, x) - (l + m - 1) * assocLegendreP(l - 2, m, x)) / (l - m);
}

export function realSphericalHarmonic(l, m, theta, phi) {
  let result = assocLegendreP(l, m, Math.cos(theta));

  // Normalization
  result = result * Math.sqrt((2 * l + 1) / (4 * Math.PI) * factorial(l - Math.abs(m)) / factorial(l + Math.abs(m)));

  if (m > 0) result = result * Math.sqrt(2) * Math.cos(m * phi);
  if (m < 0) result = result * Math.sqrt(2) * Math.sin(-m * phi);

  return result;
}

function genLaguerre(n, alpha, x) {
  if (n === 0) return 1;
  if (n === 1) return 1 + alpha - x;

  let L1 = 1;
  let L2 = 1 + alpha - x;
  for (let i = 2; i <= n; i++) {
    const L0 = L2;
    L2 = ((2 * i - 1 + alpha - x) * L2 - (i - 1 + alpha) * L1) / i;
    L1 = L0;
  }
  return L2;
}

export function radialWavefunction(n, l, r, a0 = 1.0) {
  const prefactor = Math.sqrt(Math.pow(2 / (n * a0), 3) * factorial(n - l - 1) / (2 * n * factorial(n + l)));
  const rho = 2 * r / (n * a0);
  const laguerrePoly = genLaguerre(n - l - 1, 2 * l + 1, rho);

  return prefactor * Math.exp(-rho / 2) * Math.pow(rho, l) * laguerrePoly;
}