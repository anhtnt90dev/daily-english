# Quy Trinh Xay Dung Daily English

## 1. Muc Tieu

Muc tieu la xay dung mot ung dung web TypeScript cho viec luyen nghe chep chinh ta tieng Anh. Luong hoc tap duoc tham khao tu cau truc cong khai cua DailyDictation: xem danh muc bai tap, chon lesson, nghe tung cau, nhap cau nghe duoc, cham diem va xem transcript.

Vi website tham khao la website ben thu ba, du an nay khong sao chep thuong hieu, noi dung bai hoc, file audio, source code, du lieu nguoi dung hoac thiet ke hinh anh y nguyen. Ket qua la mot ung dung goc voi workflow hoc tap tuong tu.

Nguon tham khao da quan sat:

- https://dailydictation.com/
- https://dailydictation.com/exercises/short-stories/1-first-snowfall.1/listen-and-type

## 2. Quyet Dinh San Pham

- Ung dung la single page application tinh de deploy len GitHub Pages de dang.
- Am thanh dung API `speechSynthesis` cua trinh duyet, khong can tai san audio co ban quyen.
- Noi dung lesson la du lieu TypeScript local, duoc viet moi rieng cho du an.
- Tien do hoc tap luu trong `localStorage`, khong can backend.
- Trang login/register chi la giao dien minh hoa vi chua co backend, database hoac thong tin xac thuc.
- Muc tieu deploy mac dinh la `anhtnt90dev/daily-english` tren GitHub Pages.

## 3. Kien Truc

Ung dung duoc chia thanh cac phan nho:

- `src/data/lessons.ts`: catalog topic/lesson va helper loc, tim kiem.
- `src/data/leaderboard.ts`: du lieu bang xep hang mau.
- `src/lib/dictation.ts`: chuan hoa cau tra loi, tach token, cham diem va tao hint.
- `src/lib/progress.ts`: tinh tien do lesson va luu doc `localStorage`.
- `src/components`: layout, card, progress UI dung chung.
- `src/pages`: cac page theo route nhu home, exercises, topic, lesson, top users, auth va not found.
- `.github/workflows/pages.yml`: workflow build va deploy GitHub Pages.

## 4. Cac Buoc Thuc Hien

1. Tao tai lieu thiet ke va ke hoach trong `docs/superpowers`.
2. Them cau hinh Vite, React, TypeScript, Vitest, Testing Library va GitHub Pages.
3. Viet test fail truoc cho dictation helpers, progress helpers, catalog selectors va React user flow.
4. Viet implementation toi thieu de cac test pass.
5. Them du lieu lesson goc cho short stories, conversations, exam practice, numbers and names, pronunciation va workplace English.
6. Xay router, layout, topic cards, lesson cards, man hinh dictation, transcript tab, theme toggle, leaderboard va auth pages tinh.
7. Them CSS responsive va icon SVG rieng.
8. Nang cap Vite/Vitest/plugin-react len cac version tuong thich sau khi typecheck phat hien mismatch type dependency.
9. Viet tai lieu song ngu.
10. Chuan bi repository de deploy bang GitHub Pages.

## 5. Chien Luoc Test

Logic cot loi duoc xay theo test-first:

- `normalizeAnswer` bo qua chu hoa/chu thuong, dau cau, apostrophe va khoang trang thua.
- `evaluateAnswer` tra ve tu dung, tu thieu, tu thua va phan tram khop.
- `revealHint` an tu nhung giu lai chu cai dau.
- `mergePartResult` cap nhat ket qua mot cau ma khong lam mat tien do cu.
- `buildLessonProgress` tinh so cau da hoan thanh va do chinh xac trung binh.
- Catalog tests kiem tra topic, tim lesson, filter va featured lessons.
- React tests kiem tra trang home va flow feedback trong lesson.

## 6. Lenh Su Dung

Cai dependencies:

```bash
npm install
```

Chay dev server:

```bash
npm run dev
```

Chay test:

```bash
npm run test:run
```

Chay typecheck:

```bash
npm run lint
```

Build production:

```bash
npm run build
```

Preview ban build:

```bash
npm run preview
```

## 7. Deploy

Workflow trong `.github/workflows/pages.yml` thuc hien:

1. Checkout repository.
2. Cai Node.js 24.
3. Chay `npm ci`.
4. Chay `npm run test:run`.
5. Chay `GITHUB_PAGES=true npm run build`.
6. Upload thu muc `dist`.
7. Deploy len GitHub Pages.

Cau hinh Vite dung base path `/daily-english/` khi `GITHUB_PAGES=true`, nen asset se hoat dong dung o URL:

```text
https://anhtnt90dev.github.io/daily-english/
```

## 8. Gioi Han

- Chat luong giong doc phu thuoc vao trinh duyet va he dieu hanh.
- Tien do chi luu local tren trinh duyet, khong dong bo giua thiet bi.
- Trang login/register chi la placeholder vi ban deploy tinh khong co backend.
- Bang xep hang dung du lieu mau, khong phai tai khoan that.

