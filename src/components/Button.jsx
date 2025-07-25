/**
 * Button.jsx
 * Date : 2025/06/26
 * Author : H.Kitagawa
 * Desc : ボタンコンポーネント
 */

import { useLocation, useNavigate } from "react-router-dom";

/**
 * ボタンコンポーネント
 * @param label     ボタン文字列
 * @param path      ボタン遷移先
 * @param isMenu    ボタンが単独か否か
 * @returns         指定した文字列、遷移先のボタン
 */
const Button = ({label, path, isMenu}) => {
    const navigate = useNavigate(); // ルーティング用変数
    const location = useLocation(); // ページ把握用変数

    // 背景色判断
    const primaryBg = (location.pathname == path) || (isMenu);

    return(
        <button
            className={`
                button-style
                hover:translate-y-[-2px]
                ${primaryBg ? 'bg-primary text-white' : 'text-black'}
            `}
            onClick={() => navigate(path)}
        >
            {label}
        </button>

    )
    
}
export default Button;