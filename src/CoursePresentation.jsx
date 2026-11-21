export function Discount({price,list}){
 if(!(list>price&&price>0))return null
 return <span className="saving-badge">−{Math.round(100*(list-price)/list)}%</span>
}
export function TitleCover({variant,tag,meta,title,subtitle}){
 return <div className="title-cover" data-cover={variant}><div><b>{tag}</b><span>{meta}</span></div><h2>{title}</h2><small>{subtitle}</small></div>
}
