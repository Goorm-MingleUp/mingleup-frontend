# MingleUp 프론트엔드

## 1주차 안내사항

각 절차별 진행 해 주시고 문제, 질문 발생시 프론트 팀장에게 문의 바랍니다.

1. git clone 진행하기

~/본인희망경로


2. 프로젝트 실행하기

```sh
# cs ~/프로젝트경로

npm install
npm run build # 생략가능
npm run dev
```

3. 각자 과제 작업을 위한 브렌치 생성하기

```sh
git checkout -b <branch명>
```

4. 1주차 과제 민들기

[figme](https://www.figma.com/design/Qr8HXnPY8lhKxhVA5e6gAZ/%EA%B5%AC%EB%A6%84%ED%8C%8C%EC%9D%B4%EB%84%90%ED%94%8C%EC%A0%9D---MingleUp?node-id=0-1&p=f&t=2jquaetgBLzcqpwJ-0) 문서 확인 후 본인이 맡은 컴포넌트 제작합니다.

```js
//  ex ~/src/components/Button.tsx 생성

// function Button() {} 제작

// ~/src/pages/index/+Page.tsx
// 결과물 제출을 위해 해당 경로에 주석 달아 놨습니다. 해당 주석 하단에 작업물 import 해주시면 됩니다.

<h1 className={"font-bold text-3xl pb-4"}>1주차 멘토링 과제</h1>

{/* TODO: 1주차 프론트 팀미션 UI 컴포넌트 만들기  */}

{/* Button/Input  */}

{/* Modal  */}

{/* Dropdown */}
```

5. 작업 완료 후 커밋 및 PR 날리기

6. 멘토링 참여하기~


---------------------------

Generated with [vike.dev/new](https://vike.dev/new) ([version 498](https://www.npmjs.com/package/create-vike/v/0.0.498)) using this command:

```sh
npm create vike@latest --- --react --tailwindcss --shadcn-ui --vercel --eslint --prettier
```

## Contents

* [Photon](#photon)

  * [Plus files](#plus-files)
  * [Routing](#routing)
  * [SSR](#ssr)
  * [HTML Streaming](#html-streaming)

* [shadcn/ui](#shadcnui)

  * [Configuration](#configuration)
  * [Add Components to Your Project](#add-components-to-your-project)

## Photon

[Photon](https://photonjs.dev) is a next-generation server and deployment toolkit.
It supports popular deployments ([self-hosted](https://photonjs.dev/self-hosted), [Cloudflare](https://photonjs.dev/cloudflare), [Vercel](https://photonjs.dev/vercel), and [more](https://photonjs.dev/deploy))
and popular servers ([Hono](https://photonjs.dev/hono), [Express](https://photonjs.dev/express), [Fastify](https://photonjs.dev/fastify), and [more](https://photonjs.dev/server)).

This app is ready to start. It's powered by [Vike](https://vike.dev) and [React](https://react.dev/learn).

### Plus files

[The + files are the interface](https://vike.dev/config) between Vike and your code.

* [`+config.ts`](https://vike.dev/settings) — Settings (e.g. `<title>`)
* [`+Page.tsx`](https://vike.dev/Page) — The `<Page>` component
* [`+data.ts`](https://vike.dev/data) — Fetching data (for your `<Page>` component)
* [`+Layout.tsx`](https://vike.dev/Layout) — The `<Layout>` component (wraps your `<Page>` components)
* [`+Head.tsx`](https://vike.dev/Head) - Sets `<head>` tags
* [`/pages/_error/+Page.tsx`](https://vike.dev/error-page) — The error page (rendered when an error occurs)
* [`+onPageTransitionStart.ts`](https://vike.dev/onPageTransitionStart) and `+onPageTransitionEnd.ts` — For page transition animations

### Routing

[Vike's built-in router](https://vike.dev/routing) lets you choose between:

* [Filesystem Routing](https://vike.dev/filesystem-routing) (the URL of a page is determined based on where its `+Page.jsx` file is located on the filesystem)
* [Route Strings](https://vike.dev/route-string)
* [Route Functions](https://vike.dev/route-function)

### SSR

SSR is enabled by default. You can [disable it](https://vike.dev/ssr) for all or specific pages.

### HTML Streaming

You can [enable/disable HTML streaming](https://vike.dev/stream) for all or specific pages.

## shadcn/ui

Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.

### Configuration

see [shadcn/ui theming](https://ui.shadcn.com/docs/theming)

Base Configuration can be found in `components.json` file.

> \[!NOTE]
> changes to the `components.json` file **will not** be reflected in existing components. Only new components will be affected.

### Add Components to Your Project

**Example:** add a component to your project.
`pnpm shadcn add button`

use the `<Button />` component in your project:
`import { Button } from "@/components/ui/button";`

more [shadcn/ui components](https://ui.shadcn.com/docs/components/accordion)

