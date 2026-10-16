export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: { extend: { colors: {
    ink: 'rgb(var(--ink) / <alpha-value>)', panel: 'rgb(var(--panel) / <alpha-value>)', line: 'rgb(var(--line) / <alpha-value>)',
    violet: 'rgb(var(--violet) / <alpha-value>)', cyan: 'rgb(var(--cyan) / <alpha-value>)' },
    fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'], mono: ['JetBrains Mono', 'ui-monospace', 'monospace'] } } },
  plugins: []
}
