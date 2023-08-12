const CardFooter = ({ followerCount, likeCount, photoCount }) => {
  let formatter = Intl.NumberFormat("en", { notation: "compact" })

  return (
    <footer className={"mt-[1.375rem] flex justify-between border-t-[.1rem] border-t-line-gray px-10 py-6 text-[1.125rem] font-bold text-very-dark-desaturated-blue"}>
      <div className={"flex flex-col items-center"}>
        <h4>
          <span className={""}>{formatter.format(followerCount)}</span>
        </h4>
        <span className={"text-[.65rem] font-thin tracking-[0.07rem] text-dark-gray"}>Followers</span>
      </div>
      <div className={"flex flex-col items-center"}>
        <h4>
          <span>{formatter.format(likeCount)}</span>
        </h4>
        <span className={"text-[.65rem] font-thin tracking-[0.07rem] text-dark-gray"}>Likes</span>
      </div>
      <div className={"flex flex-col items-center"}>
        <h4>
          <span>{formatter.format(photoCount)}</span>
        </h4>
        <span className={"text-[.65rem] font-thin tracking-[0.07rem] text-dark-gray"}>Photos</span>
      </div>
    </footer>
  )
}

export default CardFooter
