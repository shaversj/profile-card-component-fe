import cardPattern from "./assets/images/bg-pattern-card.svg"

const CardHeader = () => {
  return (
    <header>
      <img className={"h-[8.75rem]"} src={cardPattern} alt={"Header Background"} />
    </header>
  )
}

export default CardHeader
