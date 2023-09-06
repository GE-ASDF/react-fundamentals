import style from "../css/styles.module.css";

function sum(a, b){
    return a + b;
}

function SpanTextSubtitle(){
    return (
        <div>
            <span className={style.detailSubtitle}>It's easy</span>, like 1 + 1 is
            <span className={style.detailSubtitle}> { sum(1, 1) }</span> 
        </div>
    )
}

export const Subtitle = () => 
<h2 className={style.subtitle}>
    <SpanTextSubtitle />
</h2>
