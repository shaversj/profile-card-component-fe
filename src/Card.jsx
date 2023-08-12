import React from "react"
import cardPattern from "/src/assets/images/bg-pattern-card.svg"
import cardImage from "/src/assets/images/image-victor.jpg"

const Card = () => {
  return (
    <div className={"mx-[1.5rem] overflow-hidden rounded-2xl bg-white font-Kumbh-Sans"}>
      <div>
        <img className={"h-[140px]"} src={cardPattern} alt={""} />
      </div>

      <div className={"-mt-14 flex justify-center"}>
        <img className={"rounded-full border-[5px] border-white"} src={cardImage} alt={""} />
      </div>

      <hgroup className={"flex justify-center gap-2 pt-4"}>
        <h1 className={"text-lg font-semibold text-very-dark-desaturated-blue"}>Victor Crest</h1>
        <h2 className={"text-lg text-dark-grayish-blue"}>26</h2>
      </hgroup>

      <h3 className={"flex justify-center pt-1 text-[.92rem] text-dark-gray"}>London</h3>

      <footer className={"mt-[22px] flex justify-between border-t-[.1rem] border-t-line-gray px-10 py-6 text-[18px] font-bold text-very-dark-desaturated-blue"}>
        <div className={"flex flex-col items-center"}>
          <h4>
            <span className={""}>80K</span>
          </h4>
          <span className={"text-[.65rem] font-thin tracking-[0.07rem] text-dark-gray"}>Followers</span>
        </div>
        <div className={"flex flex-col items-center"}>
          <h4>
            <span>803K</span>
          </h4>
          <span className={"text-[.65rem] font-thin tracking-[0.07rem] text-dark-gray"}>Likes</span>
        </div>
        <div className={"flex flex-col items-center"}>
          <h4>
            <span>1.4K</span>
          </h4>
          <span className={"text-[.65rem] font-thin tracking-[0.07rem] text-dark-gray"}>Photos</span>
        </div>
      </footer>
    </div>
  )
}

export default Card
