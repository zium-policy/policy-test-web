# 앱 Webview용 테스트 웹앱
```
pnpm install
pnpm dev # http://localhost:3000 (기본)

# 계정 없을 시:
# 1. https://dashboard.ngrok.com/signup (회원가입)
# 2. ngrok config add-authtoken <발급 토큰>
ngrok http <포트: 앱 기준 기본 3000>

# 후에 발급 된 https://*.ngrok-free.app으로 접속
```

# Routes
```
.
├── auth
│   ├── login
│   │   └── page.tsx
│   └── signup
│       ├── business
│       │   └── page.tsx
│       └── page.tsx
├── error
│   ├── 403
│   │   └── page.tsx
│   ├── 404
│   │   └── page.tsx
│   ├── 500
│   │   └── page.tsx
│   └── network
│       └── page.tsx
├── favicon.ico
├── globals.css
├── home
│   └── page.tsx
├── layout.tsx
├── liked
│   └── page.tsx
├── list
│   └── page.tsx
├── my
│   └── page.tsx
├── notifications
│   └── page.tsx
├── page.tsx
├── post
│   └── [id]
│       └── page.tsx
├── search
│   └── page.tsx
└── terms
    └── page.tsx

19 directories, 19 files
```
