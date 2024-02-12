module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:import/react',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended'
    ],
    'settings': {
        'import/resolver': {
            'node': {
                'extensions': ['.js', '.jsx']
            }
        },
        'react': {
            'version': 'detect'
        }
    },
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                '.eslintrc.{js,cjs}'
            ],
            'parserOptions': {
                'sourceType': 'script'
            }
        }
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        'react-hooks',
        'react-refresh'
    ],
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ],
        'react-refresh/only-export-components': 'error',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'error',
        'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
        'react/prop-types': 'off'
    }
}
