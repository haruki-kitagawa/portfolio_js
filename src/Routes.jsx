/**
 * Routes.jsx
 * Date : 2025/07/02
 * Author : H.Kitagawa
 * Desc : ルートまとめ
 */

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import WorkList from "./pages/WorkList";
import WorkDetail from "./pages/WorkDetail";

const routes = [
  { path: "/", element: <Home />, label: "ホーム" },
  { path: "/workList", element: <WorkList />, label: "作品一覧" },
  { path: "/profile", element: <Profile />, label: "プロフィール" },
  { path: "/workDetail/:id", element: <WorkDetail />, label: "作品詳細" },
];

export default routes;