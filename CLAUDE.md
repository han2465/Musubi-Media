# Musubi Media 웹사이트

> Claude Code 가 매 세션 자동 로드. 이 프로젝트 핵심 컨텍스트.

**프로젝트**: Musubi Media 공식 웹사이트 (musubimedia.com)
**호스팅**: Hostinger (PHP/HTML 섹션)
**배포 방식**: GitHub 연동 자동 배포 (또는 File Manager 직접 업로드)

---

## 누구

**Anthony Han** — 프로젝트 owner
- Musubi Media LLC 창업자
- Soul Chicken 오너 (Midtown Eats 테넌트)
- Aloha Smart System, Midtown Eats POS 개발 중
- Clover ISO sub-agent (CCS Credit / Tim Kang)

**커뮤니케이션:** 한국어, 간결하게, 불필요한 bullet/포맷 금지.

---

## 무엇을

Musubi Media 회사 랜딩 페이지. **제품 포트폴리오** 를 쇼케이스:

1. **Midtown Eats POS** — 멀티벤더 푸드코트 POS SaaS (주력)
2. **Musubi Display Network** — 디지털 사이니지 플랫폼
3. (앞으로 추가되는 제품들)

---

## 왜

- Clover 앱 승인 심사 시 **회사 공식 웹사이트 필요** (credibility)
- Sharnell 같은 Operator 피치 시 신뢰도 ↑
- Musubi Media 브랜드 구축 (장기)
- 제품 추가될 때마다 쉽게 업데이트

---

## 폴더 구조 (모듈식)

```
musubi-site/
├── index.html              # 홈페이지
├── about.html              # 회사 소개 (미구현)
├── data/
│   └── products.json       # 모든 제품 메타데이터 (중앙 집중)
├── products/
│   ├── midtown-eats-pos.html
│   └── musubi-display.html
├── assets/
│   ├── css/style.css       # 공통 스타일 (토큰 관리)
│   └── images/
├── shared/
│   └── partials.js         # header/footer + 제품 카드 자동 렌더
└── CLAUDE.md               # (이 파일)
```

**제품 추가할 때:**
1. `data/products.json` 에 entry 추가
2. `products/<slug>.html` 새 파일 (product-template.html 복사)
3. 완료. 홈페이지 자동으로 카드 업데이트.

---

## 디자인 원칙

- **럭셔리 + 미니멀** — Playfair Display (serif) + Inter (sans-serif)
- **Neutral 팔레트** — `#0A0A0A` (ink), `#FAF7F2` (paper/cream), 제품별 accent
- **Aloha green** 은 Musubi 메인 accent (`#00AD4B`)
- **Hawaii 로컬 느낌** — 과한 tropical 아이콘 금지, 세련됨 우선
- **이모지 금지** — 얇은 라인, 숫자, 타이포그래피로 표현

---

## 배포

### Option A: GitHub → Hostinger 자동 배포 (추천)
1. GitHub private repo 생성
2. Hostinger hPanel → Websites → PHP/HTML 사이트 → Manage → Git
3. Repository URL + branch `main` 설정
4. Webhook URL 을 GitHub repo 에 등록
5. 이후 `git push` → 1분 내 자동 반영

### Option B: File Manager 직접 업로드
- hPanel → File Manager → `public_html` 에 파일 드래그
- 매번 수동 (비추)

---

## 도메인

- **musubimedia.com** (main)
- **www.musubimedia.com** (redirect to main)

---

## 앞으로 추가할 것

- [ ] about.html (회사 소개)
- [ ] contact.html (문의 양식)
- [ ] 제품 상세 페이지 (midtown-eats-pos.html, musubi-display.html)
- [ ] 블로그 섹션 (Phase 2)
- [ ] 다국어 (영/한/일) (Phase 3)
- [ ] Hawaii 배경 이미지 커스텀

---

## 관련 프로젝트

- **Midtown Eats POS**: `/Users/anthonyhan/Documents/Claude/Projects/MId town eats Pos 개발/`
- **Musubi Display Network**: (아직 별도 repo 없음, Phase 2)

---

## Claude Code 세션 플로우

1. 이 CLAUDE.md 자동 로드됨
2. Anthony 가 요청 ("새 제품 추가해줘", "About 페이지 만들어")
3. 해당 파일만 수정
4. git commit + push → Hostinger 자동 반영

---

## 색상 토큰 (assets/css/style.css)

```css
--ink:    #0A0A0A   (본문/헤딩)
--paper:  #FAF7F2   (배경 크림)
--sand:   #E8DFD0   (카드 연한 배경)
--aloha:  #00AD4B   (Musubi 브랜드 그린)
--sunset: #F5A623   (악센트 오렌지)
--ocean:  #1E7FB0   (악센트 블루)
```

색상 바꾸려면 이 변수만 수정.

---

## 지금 상태 (2026-04-23)

✅ 홈페이지 v1 완성 (index.html)
✅ 제품 데이터 구조 (products.json)
✅ 공통 CSS + partials
⏳ 제품 상세 페이지 미구현
⏳ Hostinger 배포 안 됨 (설정 필요)
