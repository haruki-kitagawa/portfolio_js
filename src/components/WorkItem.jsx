/**
 * WorkItem.jsx
 * Date : 2025/06/26
 * Author : H.Kitagawa
 * Desc : 作品コンポーネント
 */

const WorkItem = ({item}) => {
    return(
        // 作品カード
        <div className="w-[98%] h-fit card justify-start flex-col mb-2 bg-white text-black py-5 px-8 shadow-xs min-w-fit">
            <div className="h-full m-auto min-w-fit">
                <img
                    src={item.image}    
                    className="card max-w-[full] min-w-[240px] max-h-96 mx-auto" 
                    alt={item.title}
                    loading={item.id > 1? "lazy":"eager"}>
                </img>
            </div>
            
            {/* 作品情報 */}
            <div className="ml-5 flex flex-col gap-y-2">
                <p className="text-2xl font-bold my-2 w-fit">作品名：{item.title}</p>

                <div>
                    <p className="font-bold">制作期間</p>
                    <p>{item.period.start} ~ {item.period.end}</p>
                </div>

                {/* 作品概要 */}
                <div className="workDescs mb-4">
                    <p className="font-bold">作品概要</p>
                    { item.desc.map((d, index)=>{
                        return(
                            <p key={`${item.id}-desc${index}`} className="w-[98%] h-fit">{d}</p>
                        )
                    })}
                </div>

                {/* 技術スタック */}
                <div className="workStacks mb-4">
                    <p className="font-bold">技術スタック</p>
                    <div className="flex gap-1.5 mt-2">
                        { item.stack.map((s, index) => {
                            return(
                                <div
                                    key={`${item.id}Stack${index+1}`}
                                    className="w-fit p-2 rounded-full border-2 border-[var(--main-color)]"
                                >{s}</div>
                            )
                        })}
                    </div>
                </div>

                {/* 関連リンク */}
                <div className="workLinks mb-4">
                    <p className="font-bold">作品関連リンク</p>
                    { item.relatedLink.map((l, index) => {
                        return(
                            <div key={`${item.id}Link${index+1}`} className="flex">
                                <p key={`${item.id}Link${index+1}-Label`}>{l.label}：</p>
                                <p key={`${item.id}Link${index+1}-URL`} className="link text-[var(--main-color)]">{l.url}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default WorkItem;