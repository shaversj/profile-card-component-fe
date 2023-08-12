const CardBody = ({name, age, city, profileImageName}) => {
    return (
      <div>
        <div className={"-mt-14 flex justify-center"}>
          <img className={"rounded-full border-[0.313rem] border-white"} src={profileImageName} alt={"Card Profile Image"} />
        </div>

        <div className={"flex justify-center gap-2 pt-4"}>
          <h1 className={"text-lg font-semibold text-very-dark-desaturated-blue"}>{name}</h1>
          <h2 className={"text-lg text-dark-grayish-blue"}>{age}</h2>
        </div>

        <h3 className={"flex justify-center pt-1 text-[.92rem] text-dark-gray"}>{city}</h3>
      </div>
    )
};

export default CardBody;