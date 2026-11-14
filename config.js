// YOHAKU QRオーダー 設定ファイル
// デプロイ時に、Supabaseプロジェクトの値をここへ設定してください。
// Supabaseダッシュボード → Project Settings → API で確認できます。
window.YOHAKU_CONFIG = {
  // 例: "https://xxxxxxxxxxxx.supabase.co"
  SUPABASE_URL: "https://antwaogtvouvjkwhugfp.supabase.co",
  // anon public key（公開してよいキー。service_roleキーは絶対に使わないこと）
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFudHdhb2d0dm91dmprd2h1Z2ZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEzMTM1MzMsImV4cCI6MjEwNjg4OTUzM30.915_vfB1YY2uc1htRTacsS5MpmOklDFVrXjwlfZiu2o",
  // 店主用 管理画面のPIN（4桁）。本番前に必ず変更してください
  STAFF_PIN: "9235",
  // Square連携（Point of Sale API / Mobile Web、iPhone前提）
  // Square Developer Console でアプリを作成し、Application ID をここへ設定する。
  // 空のままでは管理画面に「Squareで決済」ボタンは表示されず、既存動作に影響しない。
  // Application ID は公開情報（アクセストークンではない）なのでここに置いてよい。
  SQUARE_APPLICATION_ID: "sq0idp-jvpflC3UCkvT1R7tjs__UA",
  // Developer Console の Point of Sale API > Web に登録する Web Callback URL と完全一致させること
  SQUARE_CALLBACK_URL: "https://yohaku-qr-order.vercel.app/staff.html"
};
