/**
 * Home.jsx
 * Date : 2025/06/24
 * Author : H.Kitagawa
 * Desc : ホーム画面
 */

import Button from "../components/Button";
import MenuBar from "../components/MenuBar";

const Home = () => {
    return(
        <div className="outside-div">   {/* ページ全体 */}
            <div className="base-card"> {/* カード */}
                <MenuBar />             {/* メニューバー */}
                
                {/* カード内要素 */}
                <div className="card-container" style={{backgroundColor: `rgba(var(--sub-color-rgb), 0.2)`}}>
                    {/* 名前 */}
                    <div className="flex justify-center items-center w-fit">
                        <div id="familyName" className="flex flex-col items-center mr-4">
                            <p className="page-title">北川</p>
                            <p className="text-gray-400 text-xl mt-2">Kitagawa</p>
                        </div>
                        <div id="lastName" className="flex flex-col items-center ml-4">
                            <p className="page-title">華希</p>
                            <p className="text-gray-400 text-xl mt-2">Haruki</p>
                        </div>
                    </div>
                    
                    {/* 所属 */}
                    <div className="text-xl text-gray-500 mt-12 flex flex-col items-center gap-1">
                        <p>ECCコンピュータ専門学校</p>
                        <p>高度情報処理研究学科 IT開発エキスパートコース</p>
                    </div>
                     <section className="w-full flex justify-center absolute bottom-2 ">
                        <Button label={"作品を見る"} path={"/workList"} isMenu={true}/>
                    </section>
                </div>
            </div>
        </div>
    )
}
export default Home;