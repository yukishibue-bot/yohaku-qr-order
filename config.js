// YOHAKU QRオーダー 設定ファイル
// デプロイ時に、Supabaseプロジェクトの値をここへ設定してください。
// Supabaseダッシュボード → Project Settings → API で確認できます。
window.YOHAKU_CONFIG = {
  // 例: "https://xxxxxxxxxxxx.supabase.co"
  SUPABASE_URL: "https://antwaogtvouvjkwhugfp.supabase.co",
  // anon public key（公開してよいキー。service_roleキーは絶対に使わないこと）
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFudHdhb2d0dm91dmprd2h1Z2ZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEzMTM1MzMsImV4cCI6MjEwNjg4OTUzM30.915_vfB1YY2uc1htRTacsS5MpmOklDFVrXjwlfZiu2o",
  // 店主用 管理画面のPIN（4桁）。本番前に必ず変更してください
  STAFF_PIN: "1113"
};
