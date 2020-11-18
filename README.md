# PUT

ハンズオンの題材として「ごみ拾い」アプリを作りました。
拾ったゴミの写真を送るとポイントが付与されるアプリです。

## 事前準備

- https://tidev-aizu.connpass.com/event/194591/
  - 事前準備を参照してください。

## 使い方

まずバックエンドのREST APIとして動作するモックサーバを起動します。
bacckendディレクトリで次のコマンドで起動します。

```bash
docker-compose -f api-mock.yml up
```

アプリからモックサーバのREST APIを呼び出すためのIPアドレスをソースコードに設定します。
開発マシンのIPアドレスを確認し次のソースコードを変更します。

/src/backend/generated-rest-client/runtime.ts

```javascript
export const BASE_PATH = "http://192.168.16.1:9080".replace(/\/+$/, "");
```

次にAndroidエミュレータでアプリを起動します。
プロジェクトのルートディレクトリで次のコマンドで起動します。

```bash
npm run android    # Androidエミュレータが起動します
```
