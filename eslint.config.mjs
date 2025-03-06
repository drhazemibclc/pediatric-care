import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Import plugins that don't have flat config support yet
const eslintConfig = [
  // Base configurations
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'prettier', // Make sure prettier is last
  ),

  // Custom rules
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      // Enforce consistent imports
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],

      // Enforce consistent React imports
      'react/react-in-jsx-scope': 'off', // Not needed in Next.js

      // Enforce consistent TypeScript usage
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
      ],

      // Next.js specific rules
      '@next/next/no-html-link-for-pages': 'error',
      '@next/next/no-img-element': 'error',
    },
  },

  // Specific overrides for certain file patterns
  {
    files: ['app/**/*.ts?(x)'],
    rules: {
      // App Router specific rules
      'import/no-default-export': 'off', // Allow default exports in App Router
    },
  },

  // Prisma schema files
  {
    files: ['prisma/**/*.prisma'],
    languageOptions: {
      parser: { prisma: true },
    },
  },
];

export default eslintConfig;
